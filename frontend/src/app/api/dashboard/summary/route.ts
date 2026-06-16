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

type DashboardSummaryResponse = {
  villages: VillageSummary[];
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

    const response: DashboardSummaryResponse = {
      villages: summaries,
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

