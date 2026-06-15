"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { cn } from "@/lib/utils";
import { ClientContentLayout } from "@/components/admin-panel/client-content-layout";
import { useLanguage } from "@/i18n/LanguageContext";

type LedgerTransaction = {
  id: string;
  transaction_date: Date;
  transaction_type: string;
  amount: number;
  balance_after_on_account: number;
  comments: string | null;
  receipt_number: string | null;
  account_label_english: string | null;
  account_type_name: string | null;
};

type Ledger = {
  balances: {
    savingsBalance: number;
    withdrawBalance: number;
    laagodiBalance: number;
  };
  transactions: LedgerTransaction[];
};

interface MemberDetailClientProps {
  displayGiven: string;
  displayFamily: string;
  mandal: string;
  village: string;
  phone: string;
  ledger: Ledger;
  formatInr: (amount: number) => string;
  formatDate: (d: Date) => string;
}

export function MemberDetailClient({
  displayGiven,
  displayFamily,
  mandal,
  village,
  phone,
  ledger,
  formatInr,
  formatDate,
}: MemberDetailClientProps) {
  const { t } = useLanguage();

  return (
    <ClientContentLayout titleKey="memberDetail" subKey="title">
      <div className="mx-auto flex w-full max-w-lg flex-col gap-4 px-3 pb-10 pt-2 sm:max-w-2xl sm:px-4">
        <Link
          href="/members/browse"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
        >
          <ArrowLeft className="h-4 w-4 shrink-0" aria-hidden />
          {t.memberDetail.backToList}
        </Link>

        <header className="rounded-xl border bg-card p-4 shadow-sm">
          <h1 className="text-lg font-semibold leading-snug sm:text-xl">
            {displayGiven} {displayFamily}
          </h1>
          <p className="mt-1 text-sm text-muted-foreground">
            {mandal} · {village}
          </p>
          <p className="mt-0.5 text-sm tabular-nums text-muted-foreground">
            {phone}
          </p>
        </header>

        <section aria-label="Account balances">
          <h2 className="mb-2 text-sm font-medium text-muted-foreground">
            {t.memberDetail.balancesTitle}
          </h2>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
            <BalanceCard label={t.memberDetail.savings} amount={ledger.balances.savingsBalance} formatInr={formatInr} />
            <BalanceCard label={t.memberDetail.withdraw} amount={ledger.balances.withdrawBalance} formatInr={formatInr} />
            <BalanceCard label={t.memberDetail.laagodi} amount={ledger.balances.laagodiBalance} formatInr={formatInr} />
          </div>
        </section>

        <section aria-label="Transaction history">
          <h2 className="mb-2 text-sm font-medium text-muted-foreground">
            {t.memberDetail.historyTitle}
          </h2>
          {ledger.transactions.length === 0 ? (
            <p className="rounded-lg border border-dashed bg-muted/30 px-4 py-8 text-center text-sm text-muted-foreground">
              {t.memberDetail.noTransactions}
            </p>
          ) : (
            <ul className="flex flex-col gap-3">
              {ledger.transactions.map((tx) => (
                <li
                  key={tx.id}
                  className="rounded-xl border bg-card p-4 shadow-sm"
                >
                  <div className="flex flex-wrap items-start justify-between gap-2">
                    <div>
                      <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
                        {formatDate(tx.transaction_date)}
                      </p>
                      <p className="mt-1 text-sm font-medium">
                        {tx.account_label_english ?? tx.account_type_name ?? t.memberDetail.account}
                      </p>
                    </div>
                    <span
                      className={cn(
                        "shrink-0 rounded-full px-2.5 py-0.5 text-xs font-semibold",
                        tx.transaction_type === "credit"
                          ? "bg-emerald-500/15 text-emerald-700 dark:text-emerald-400"
                          : "bg-rose-500/15 text-rose-700 dark:text-rose-400",
                      )}
                    >
                      {tx.transaction_type === "credit" ? t.memberDetail.credit : t.memberDetail.debit}
                    </span>
                  </div>
                  <div className="mt-3 grid grid-cols-2 gap-2 text-sm sm:grid-cols-3">
                    <div>
                      <p className="text-xs text-muted-foreground">{t.memberDetail.amount}</p>
                      <p className="tabular-nums font-semibold">
                        {tx.transaction_type === "credit" ? "+" : "−"}
                        {formatInr(tx.amount)}
                      </p>
                    </div>
                    <div className="sm:col-span-2">
                      <p className="text-xs text-muted-foreground">
                        {t.memberDetail.balanceAfter}
                      </p>
                      <p className="tabular-nums font-semibold">
                        {formatInr(tx.balance_after_on_account)}
                      </p>
                    </div>
                  </div>
                  {tx.comments ? (
                    <p className="mt-2 border-t pt-2 text-xs text-muted-foreground">
                      {tx.comments}
                    </p>
                  ) : null}
                  <p className="mt-2 text-[11px] text-muted-foreground tabular-nums">
                    {t.memberDetail.receipt}: {tx.receipt_number}
                  </p>
                </li>
              ))}
            </ul>
          )}
        </section>
      </div>
    </ClientContentLayout>
  );
}

function BalanceCard({
  label,
  amount,
  formatInr,
}: {
  label: string;
  amount: number;
  formatInr: (amount: number) => string;
}) {
  return (
    <div className="rounded-xl border bg-muted/40 px-4 py-3">
      <p className="text-xs font-medium text-muted-foreground">{label}</p>
      <p className="mt-1 text-lg font-semibold tabular-nums sm:text-xl">{formatInr(amount)}</p>
    </div>
  );
}
