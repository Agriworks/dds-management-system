import { notFound } from "next/navigation";
import { prisma } from "@/lib/prisma";
import { getMemberLedger } from "@/lib/member-account-balances";
import { MemberDetailClient } from "./member-detail-client";

function formatInr(amount: number): string {
  return new Intl.NumberFormat("en-IN", { maximumFractionDigits: 0 }).format(amount);
}

function formatDate(d: Date): string {
  return d.toLocaleDateString("en-IN", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}

export default async function MemberAccountsPage({
  params,
}: {
  params: Promise<{ memberId: string }>;
}) {
  const { memberId } = await params;

  const [member, ledger] = await Promise.all([
    prisma.members.findUnique({
      where: { id: memberId },
      select: {
        given_name: true,
        family_name: true,
        phone_number: true,
        villages: {
          select: {
            label_english: true,
            mandals: { select: { label_english: true } },
          },
        },
        name_labels: {
          where: { language_code: "te" },
          select: { given_name: true, family_name: true },
          take: 1,
        },
      },
    }),
    getMemberLedger(memberId),
  ]);

  if (!member || !ledger) {
    notFound();
  }

  const telugu = member.name_labels[0];
  const displayGiven = telugu?.given_name ?? member.given_name;
  const displayFamily = telugu?.family_name ?? member.family_name;

  return (
    <MemberDetailClient
      displayGiven={displayGiven}
      displayFamily={displayFamily}
      mandal={member.villages.mandals.label_english}
      village={member.villages.label_english}
      phone={member.phone_number}
      ledger={ledger}
      formatInr={formatInr}
      formatDate={formatDate}
    />
  );
}
