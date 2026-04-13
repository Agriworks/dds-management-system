import { ContentLayout } from "@/components/admin-panel/content-layout";
import { prisma } from "@/lib/prisma";

async function getVillageMembers() {
  return prisma.villages.findMany({
    orderBy: {
      label_english: "asc",
    },
    include: {
      members: {
        orderBy: {
          given_name: "asc",
        },
        select: {
          id: true,
          given_name: true,
          family_name: true,
          phone_number: true,
          house_number: true,
          husband_or_father_name: true,
          created_at: true,
        },
      },
    },
  });
}

export default async function MembersBrowsePage() {
  const villages = await getVillageMembers();
  const totalMembers = villages.reduce(
    (count, village) => count + village.members.length,
    0,
  );

  return (
    <ContentLayout title="Members">
      <div className="p-4 sm:p-6 lg:p-8">
        <div className="shadow-md rounded-lg bg-background p-4 sm:p-6">
          <div className="mb-6">
            <h1 className="text-2xl font-semibold">Village-wise Members</h1>
            <p className="text-sm text-muted-foreground mt-1">
              Browse the current members grouped by village.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-3 mb-8">
            <div className="rounded-lg border border-border bg-card p-4">
              <p className="text-sm text-muted-foreground">Villages</p>
              <p className="mt-2 text-3xl font-semibold">{villages.length}</p>
            </div>
            <div className="rounded-lg border border-border bg-card p-4">
              <p className="text-sm text-muted-foreground">Total Members</p>
              <p className="mt-2 text-3xl font-semibold">{totalMembers}</p>
            </div>
            <div className="rounded-lg border border-border bg-card p-4">
              <p className="text-sm text-muted-foreground">Villages with members</p>
              <p className="mt-2 text-3xl font-semibold">
                {villages.filter((village) => village.members.length > 0).length}
              </p>
            </div>
          </div>

          {villages.length === 0 ? (
            <div className="rounded-lg border border-border bg-card p-6 text-center text-sm text-muted-foreground">
              No villages found.
            </div>
          ) : (
            <div className="space-y-6">
              {villages.map((village) => (
                <section
                  key={village.id}
                  className="rounded-2xl border border-border bg-card p-4"
                >
                  <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                    <div>
                      <p className="text-sm text-muted-foreground">Village</p>
                      <h2 className="text-lg font-semibold">
                        {village.label_english}
                      </h2>
                    </div>
                    <span className="inline-flex items-center rounded-full bg-muted px-3 py-1 text-sm font-medium text-foreground">
                      {village.members.length} member{village.members.length === 1 ? "" : "s"}
                    </span>
                  </div>

                  {village.members.length === 0 ? (
                    <div className="mt-4 rounded-lg border border-dashed border-border p-4 text-sm text-muted-foreground">
                      No members found for this village.
                    </div>
                  ) : (
                    <div className="mt-4 overflow-x-auto rounded-lg border border-border">
                      <table className="min-w-full text-left text-sm">
                        <thead className="bg-muted text-muted-foreground">
                          <tr>
                            <th className="px-4 py-3">Name</th>
                            <th className="px-4 py-3">Phone</th>
                            <th className="px-4 py-3">House No.</th>
                            <th className="px-4 py-3">Father / Husband</th>
                            <th className="px-4 py-3">Created</th>
                          </tr>
                        </thead>
                        <tbody>
                          {village.members.map((member) => (
                            <tr key={member.id} className="border-t border-border/70">
                              <td className="px-4 py-3">
                                {`${member.given_name} ${member.family_name}`.trim()}
                              </td>
                              <td className="px-4 py-3">{member.phone_number}</td>
                              <td className="px-4 py-3">{member.house_number}</td>
                              <td className="px-4 py-3">{member.husband_or_father_name}</td>
                              <td className="px-4 py-3">
                                {new Date(member.created_at).toLocaleDateString("en-IN")}
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  )}
                </section>
              ))}
            </div>
          )}
        </div>
      </div>
    </ContentLayout>
  );
}
