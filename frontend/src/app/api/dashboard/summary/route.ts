import { NextResponse } from "next/server";
import { prisma } from "../../../../lib/prisma";
import {
  createErrorResponse,
  createSuccessResponse,
} from "../../../../lib/api-utils";

type VillageSummary = {
  villageId: string;
  villageName: string;
  memberCount: number;
  totalDeposits: number;
  totalLoans: number;
};

type MandalPieSummary = {
  mandalId: string;
  mandalName: string;
  mandalNameTelugu: string;
  totalDeposits: number;
  totalLoans: number;
  totalLaagodi: number;
};

type DashboardSummaryResponse = {
  villages: VillageSummary[];
  mandals: MandalPieSummary[];
  totals: {
    villageCount: number;
    memberCount: number;
    totalDeposits: number;
    totalLoans: number;
  };
};

export async function GET(): Promise<NextResponse> {
  try {
    const villages = await prisma.villages.findMany({
      select: {
        id: true,
        label_english: true,
      },
      orderBy: {
        label_english: "asc",
      },
    });

    const summaries: VillageSummary[] = await Promise.all(
      villages.map(async (village) => {
        const [memberCount, depositsAgg, loansAgg] = await Promise.all([
          prisma.members.count({
            where: { village_id: village.id, is_archived: false },
          }),
          prisma.transactions.aggregate({
            _sum: { amount: true },
            where: {
              is_archived: false,
              is_deleted: false,
              transaction_type: "credit",
              members: {
                village_id: village.id,
              },
            },
          }),
          prisma.transactions.aggregate({
            _sum: { amount: true },
            where: {
              is_archived: false,
              is_deleted: false,
              transaction_type: "debit",
              members: {
                village_id: village.id,
              },
            },
          }),
        ]);

        return {
          villageId: village.id,
          villageName: village.label_english,
          memberCount,
          totalDeposits: depositsAgg._sum.amount ?? 0,
          totalLoans: loansAgg._sum.amount ?? 0,
        };
      }),
    );

    // Fetch mandals with their Telugu labels for pie charts
    const mandals = await prisma.mandals.findMany({
      select: {
        id: true,
        label_english: true,
        villages: {
          select: {
            id: true,
          },
        },
      },
      orderBy: {
        label_english: "asc",
      },
    });

    // Fetch Telugu labels for mandals
    const mandalTeluguLabels = await prisma.i18n_labels.findMany({
      where: {
        entity_table: "mandals",
        field: "label_telugu",
        language_code: "te",
      },
    });

    const teluguLabelMap = new Map<string, string>();
    for (const label of mandalTeluguLabels) {
      teluguLabelMap.set(label.entity_id, label.text);
    }

    // Fetch account types to identify SAVINGS, WITHDRAW, LAAGODI
    const accountTypes = await prisma.account_types.findMany({
      where: {
        name: { in: ["SAVINGS", "WITHDRAW", "LAAGODI"] },
        is_active: true,
      },
      select: {
        id: true,
        name: true,
      },
    });

    const accountTypeMap = new Map<string, string>();
    for (const at of accountTypes) {
      accountTypeMap.set(at.name, at.id);
    }

    const savingsTypeId = accountTypeMap.get("SAVINGS");
    const withdrawTypeId = accountTypeMap.get("WITHDRAW");
    const laagodiTypeId = accountTypeMap.get("LAAGODI");

    // Get accounts by type for efficient filtering
    const accountsByType = await prisma.accounts.findMany({
      where: {
        account_type_id: {
          in: [savingsTypeId, withdrawTypeId, laagodiTypeId].filter(Boolean) as string[],
        },
      },
      select: {
        id: true,
        account_type_id: true,
      },
    });

    const savingsAccountIds = accountsByType
      .filter((a) => a.account_type_id === savingsTypeId)
      .map((a) => a.id);
    const withdrawAccountIds = accountsByType
      .filter((a) => a.account_type_id === withdrawTypeId)
      .map((a) => a.id);
    const laagodiAccountIds = accountsByType
      .filter((a) => a.account_type_id === laagodiTypeId)
      .map((a) => a.id);

    // Aggregate transactions per mandal per account type
    const mandalSummaries: MandalPieSummary[] = await Promise.all(
      mandals.map(async (mandal) => {
        const villageIds = mandal.villages.map((v) => v.id);

        const [depositsAgg, loansAgg, laagodiAgg] = await Promise.all([
          // Deposits = credits to SAVINGS accounts in this mandal's villages
          savingsAccountIds.length > 0
            ? prisma.transactions.aggregate({
                _sum: { amount: true },
                where: {
                  is_archived: false,
                  is_deleted: false,
                  account_id: { in: savingsAccountIds },
                  members: {
                    village_id: { in: villageIds },
                  },
                },
              })
            : Promise.resolve({ _sum: { amount: null } }),
          // Loans = transactions on WITHDRAW accounts in this mandal's villages
          withdrawAccountIds.length > 0
            ? prisma.transactions.aggregate({
                _sum: { amount: true },
                where: {
                  is_archived: false,
                  is_deleted: false,
                  account_id: { in: withdrawAccountIds },
                  members: {
                    village_id: { in: villageIds },
                  },
                },
              })
            : Promise.resolve({ _sum: { amount: null } }),
          // Laagodi = transactions on LAAGODI accounts in this mandal's villages
          laagodiAccountIds.length > 0
            ? prisma.transactions.aggregate({
                _sum: { amount: true },
                where: {
                  is_archived: false,
                  is_deleted: false,
                  account_id: { in: laagodiAccountIds },
                  members: {
                    village_id: { in: villageIds },
                  },
                },
              })
            : Promise.resolve({ _sum: { amount: null } }),
        ]);

        return {
          mandalId: mandal.id,
          mandalName: mandal.label_english,
          mandalNameTelugu: teluguLabelMap.get(mandal.id) || mandal.label_english,
          totalDeposits: depositsAgg._sum.amount ?? 0,
          totalLoans: loansAgg._sum.amount ?? 0,
          totalLaagodi: laagodiAgg._sum.amount ?? 0,
        };
      }),
    );

    const response: DashboardSummaryResponse = {
      villages: summaries,
      mandals: mandalSummaries,
      totals: {
        villageCount: villages.length,
        memberCount: summaries.reduce(
          (acc, v) => acc + v.memberCount,
          0,
        ),
        totalDeposits: summaries.reduce(
          (acc, v) => acc + v.totalDeposits,
          0,
        ),
        totalLoans: summaries.reduce((acc, v) => acc + v.totalLoans, 0),
      },
    };

    return createSuccessResponse(
      response,
      "Dashboard summary fetched successfully",
    );
  } catch (error) {
    console.error("Error fetching dashboard summary:", error);
    return createErrorResponse(
      "INTERNAL_ERROR",
      "Failed to fetch dashboard summary",
      500,
      { error: error instanceof Error ? error.message : "Unknown error" },
    );
  }
}
