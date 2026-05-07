import { ContentLayout } from "@/components/admin-panel/content-layout";
import { prisma } from "@/lib/prisma";
import { MembersTableClient } from "./members-table-client";
import { MembersFiltersClient } from "./members-filters-client";

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
      villages: {
        select: {
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
  const rows = members.map((member) => {
    const teluguName = member.name_labels.length > 0 ? member.name_labels[0] : null;
    return {
      id: member.id,
      givenName: teluguName ? teluguName.given_name : member.given_name,
      familyName: teluguName ? teluguName.family_name : member.family_name,
      husbandOrFatherName: member.husband_or_father_name,
      aadharNumber: member.aadhar_number,
      mandal: member.villages.mandals.label_english,
      phoneNumber: member.phone_number,
      village: member.villages.label_english,
    };
  });

  return (
    <ContentLayout title="సంఘం సభ్యులు">
        <div className="shadow-md rounded-lg bg-background p-4 sm:p-6">
            <MembersFiltersClient
              initialMandalId={selectedMandalId}
              initialVillageId={selectedVillageId}
            />
            <MembersTableClient data={rows} />
          </div>
    </ContentLayout>
  );
}
