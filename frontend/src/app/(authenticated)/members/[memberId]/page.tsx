import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { ContentLayout } from "@/components/admin-panel/content-layout";
import { prisma } from "@/lib/prisma";
import { getMemberLedger } from "@/lib/member-account-balances";
import { cn } from "@/lib/utils";

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
    <ContentLayout title="సభ్యుడు ఖాతాలు">
      <div className="mx-auto flex w-full max-w-lg flex-col gap-4 px-3 pb-10 pt-2 sm:max-w-2xl sm:px-4">
        <Link
          href="/members/browse"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
        >
          <ArrowLeft className="h-4 w-4 shrink-0" aria-hidden />
          సభ్యుల జాబితాకు తిరిగి వెళ్ళండి
        </Link>

        <header className="rounded-xl border bg-card p-4 shadow-sm">
          <h1 className="text-lg font-semibold leading-snug sm:text-xl">
            {displayGiven} {displayFamily}
          </h1>
          <p className="mt-1 text-sm text-muted-foreground">
            {member.villages.mandals.label_english} · {member.villages.label_english}
          </p>
          <p className="mt-0.5 text-sm tabular-nums text-muted-foreground">
            {member.phone_number}
          </p>
        </header>

        <section aria-label="Account balances">
          <h2 className="mb-2 text-sm font-medium text-muted-foreground">
            ప్రస్తుత బ్యాలెన్స్‌లు (లెక్కింపు — లావాదేవీల వారీగా)
          </h2>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
            <BalanceCard label="సేవింగ్స్" amount={ledger.balances.savingsBalance} />
            <BalanceCard label="విత్‌డ్రాల్" amount={ledger.balances.withdrawBalance} />
            <BalanceCard label="లాగోడి" amount={ledger.balances.laagodiBalance} />
          </div>
        </section>

        <section aria-label="Transaction history">
          <h2 className="mb-2 text-sm font-medium text-muted-foreground">
            లావాదేవీ చరిత్ర
          </h2>
          {ledger.transactions.length === 0 ? (
            <p className="rounded-lg border border-dashed bg-muted/30 px-4 py-8 text-center text-sm text-muted-foreground">
              ఇంకా నమోదైన లావాదేవీలు లేవు.
            </p>
          ) : (
            <ul className="flex flex-col gap-3">
              {ledger.transactions.map((t) => (
                <li
                  key={t.id}
                  className="rounded-xl border bg-card p-4 shadow-sm"
                >
                  <div className="flex flex-wrap items-start justify-between gap-2">
                    <div>
                      <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
                        {formatDate(t.transaction_date)}
                      </p>
                      <p className="mt-1 text-sm font-medium">
                        {t.account_label_english ?? t.account_type_name ?? "ఖాతా"}
                      </p>
                    </div>
                    <span
                      className={cn(
                        "shrink-0 rounded-full px-2.5 py-0.5 text-xs font-semibold",
                        t.transaction_type === "credit"
                          ? "bg-emerald-500/15 text-emerald-700 dark:text-emerald-400"
                          : "bg-rose-500/15 text-rose-700 dark:text-rose-400",
                      )}
                    >
                      {t.transaction_type === "credit" ? "క్రెడిట్" : "డెబిట్"}
                    </span>
                  </div>
                  <div className="mt-3 grid grid-cols-2 gap-2 text-sm sm:grid-cols-3">
                    <div>
                      <p className="text-xs text-muted-foreground">మొత్తం</p>
                      <p className="tabular-nums font-semibold">
                        {t.transaction_type === "credit" ? "+" : "−"}
                        {formatInr(t.amount)}
                      </p>
                    </div>
                    <div className="sm:col-span-2">
                      <p className="text-xs text-muted-foreground">
                        ఈ ఖాతాలో ఈ లావాదేవీ తర్వాత మిగిలిన మొత్తం
                      </p>
                      <p className="tabular-nums font-semibold">
                        {formatInr(t.balance_after_on_account)}
                      </p>
                    </div>
                  </div>
                  {t.comments ? (
                    <p className="mt-2 border-t pt-2 text-xs text-muted-foreground">
                      {t.comments}
                    </p>
                  ) : null}
                  <p className="mt-2 text-[11px] text-muted-foreground tabular-nums">
                    రసీదు: {t.receipt_number}
                  </p>
                </li>
              ))}
            </ul>
          )}
        </section>
      </div>
    </ContentLayout>
  );
}

function BalanceCard({ label, amount }: { label: string; amount: number }) {
  return (
    <div className="rounded-xl border bg-muted/40 px-4 py-3">
      <p className="text-xs font-medium text-muted-foreground">{label}</p>
      <p className="mt-1 text-lg font-semibold tabular-nums sm:text-xl">{formatInr(amount)}</p>
    </div>
  );
}
