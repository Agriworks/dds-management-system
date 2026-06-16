import { prisma } from "@/lib/prisma";
import { MembersTableClient } from "./members-table-client";
import { MembersFiltersClient } from "./members-filters-client";
import { getMemberBalancesForMembers } from "@/lib/member-account-balances";
import { ClientContentLayout } from "@/components/admin-panel/client-content-layout";
import { NewTransactionFab } from "./new-transaction-fab";

async function getMembers(mandalId?: string, villageId?: string) {
  return prisma.members.findMany({
    where: {
      ...(mandalId
        ? {
          villages: {
            mandal_id: mandalId,
          },
        }
        : {}),
      ...(villageId
        ? {
            village_id: villageId,
          }
        : {}),
      is_archived: false,
    },
    orderBy: {
      given_name: "asc",
    },
    select: {
      id: true,
      given_name: true,
      family_name: true,
      aadhar_number: true,
      phone_number: true,
      house_number: true,
      husband_or_father_name: true,
      village_id: true,
      villages: {
        select: {
          mandal_id: true,
          label_english: true,
          mandals: {
            select: {
              label_english: true,
            },
          },
        },
      },
      name_labels: {
        where: { language_code: "te" },
        select: {
          given_name: true,
          family_name: true,
        },
        take: 1,
      },
    },
  });
}

export default async function MembersBrowsePage({
  searchParams,
}: {
  searchParams?: Promise<{ mandalId?: string; villageId?: string }>;
}) {
  const params = searchParams ? await searchParams : {};
  const selectedMandalId = params?.mandalId || "";
  const selectedVillageId = params?.villageId || "";
  const members = await getMembers(
    selectedMandalId || undefined,
    selectedVillageId || undefined,
  );
  const balanceByMember = await getMemberBalancesForMembers(members.map((m) => m.id));

  const villageIds = Array.from(new Set(members.map((m) => m.village_id)));
  const mandalIds = Array.from(new Set(members.map((m) => m.villages.mandal_id)));

  const teVillageLabels = villageIds.length
    ? await prisma.i18n_labels.findMany({
        where: {
          entity_table: "villages",
          field: "label_telugu",
          language_code: "te",
          entity_id: { in: villageIds },
        },
        select: { entity_id: true, text: true },
      })
    : [];

  const teMandalLabels = mandalIds.length
    ? await prisma.i18n_labels.findMany({
        where: {
          entity_table: "mandals",
          field: "label_telugu",
          language_code: "te",
          entity_id: { in: mandalIds },
        },
        select: { entity_id: true, text: true },
      })
    : [];

  const teVillageById = new Map(teVillageLabels.map((l) => [l.entity_id, l.text]));
  const teMandalById = new Map(teMandalLabels.map((l) => [l.entity_id, l.text]));

  const rows = members.map((member) => {
    const teluguName = member.name_labels.length > 0 ? member.name_labels[0] : null;
    const bal = balanceByMember.get(member.id)!;
    return {
      id: member.id,
      givenNameEnglish: member.given_name,
      familyNameEnglish: member.family_name,
      givenNameTelugu: teluguName ? teluguName.given_name : member.given_name,
      familyNameTelugu: teluguName ? teluguName.family_name : member.family_name,
      husbandOrFatherName: member.husband_or_father_name,
      aadharNumber: member.aadhar_number,
      mandalEnglish: member.villages.mandals.label_english,
      mandalTelugu: teMandalById.get(member.villages.mandal_id) ?? member.villages.mandals.label_english,
      phoneNumber: member.phone_number,
      villageEnglish: member.villages.label_english,
      villageTelugu: teVillageById.get(member.village_id) ?? member.villages.label_english,
      savingsBalance: bal.savingsBalance,
      withdrawBalance: bal.withdrawBalance,
      laagodiBalance: bal.laagodiBalance,
    };
  });

  return (
    <ClientContentLayout titleKey="membersBrowse" subKey="title">
        <div className="shadow-md rounded-lg bg-background p-4 sm:p-6">
            <MembersFiltersClient
              initialMandalId={selectedMandalId}
              initialVillageId={selectedVillageId}
            />
            <div className="mt-4 overflow-x-auto">
              <MembersTableClient data={rows} />
            </div>
          </div>
        <NewTransactionFab />
    </ClientContentLayout>
  );
}
