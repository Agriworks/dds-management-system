import { prisma } from "@/lib/prisma";

export type MemberAccountBalances = {
  savingsBalance: number;
  withdrawBalance: number;
  laagodiBalance: number;
};

async function balanceByAccountIds(accountIds: string[]): Promise<Map<string, number>> {
  const result = new Map<string, number>();
  if (accountIds.length === 0) return result;

  const [credits, debits] = await Promise.all([
    prisma.transactions.groupBy({
      by: ["account_id"],
      where: {
        account_id: { in: accountIds },
        is_archived: true,
        is_deleted: false,
        transaction_type: "credit",
      },
      _sum: { amount: true },
    }),
    prisma.transactions.groupBy({
      by: ["account_id"],
      where: {
        account_id: { in: accountIds },
        is_archived: true,
        is_deleted: false,
        transaction_type: "debit",
      },
      _sum: { amount: true },
    }),
  ]);

  const creditMap = new Map(
    credits.map((c) => [c.account_id, c._sum.amount ?? 0]),
  );
  const debitMap = new Map(debits.map((d) => [d.account_id, d._sum.amount ?? 0]));

  for (const id of accountIds) {
    result.set(id, (creditMap.get(id) ?? 0) - (debitMap.get(id) ?? 0));
  }
  return result;
}

function emptyBalances(): MemberAccountBalances {
  return { savingsBalance: 0, withdrawBalance: 0, laagodiBalance: 0 };
}

function applyTypeToBalances(
  row: MemberAccountBalances,
  typeName: string | undefined,
  balance: number,
): void {
  if (typeName === "SAVINGS") row.savingsBalance = balance;
  else if (typeName === "WITHDRAW") row.withdrawBalance = balance;
  else if (typeName === "LAAGODI" || typeName === "LOANS") row.laagodiBalance = balance;
}

/** Totals per member from non-archived transactions only (not accounts.balance). */
export async function getMemberBalancesForMembers(
  memberIds: string[],
): Promise<Map<string, MemberAccountBalances>> {
  const out = new Map<string, MemberAccountBalances>();
  if (memberIds.length === 0) return out;

  for (const id of memberIds) {
    out.set(id, emptyBalances());
  }

  const links = await prisma.members_accounts_onlink.findMany({
    where: { member_id: { in: memberIds } },
    select: {
      member_id: true,
      account_id: true,
      accounts: {
        select: {
          account_types: { select: { name: true } },
        },
      },
    },
  });

  const accountIds = [...new Set(links.map((l) => l.account_id))];
  const balanceMap = await balanceByAccountIds(accountIds);

  for (const link of links) {
    const typeName = link.accounts.account_types?.name;
    const bal = balanceMap.get(link.account_id) ?? 0;
    const row = out.get(link.member_id);
    if (!row) continue;
    applyTypeToBalances(row, typeName, bal);
  }

  return out;
}

export type LedgerTransactionRow = {
  id: string;
  transaction_date: Date;
  transaction_type: "credit" | "debit";
  amount: number;
  comments: string | null;
  receipt_number: string;
  account_type_name: string | null;
  account_label_english: string | null;
  balance_after_on_account: number;
};

export async function getMemberLedger(memberId: string): Promise<{
  balances: MemberAccountBalances;
  transactions: LedgerTransactionRow[];
} | null> {
  const member = await prisma.members.findUnique({
    where: { id: memberId },
    select: { id: true },
  });
  if (!member) return null;

  const balancesMap = await getMemberBalancesForMembers([memberId]);
  const balances = balancesMap.get(memberId) ?? emptyBalances();

  const txns = await prisma.transactions.findMany({
    where: { member_id: memberId, is_archived: true, is_deleted: false },
    orderBy: [{ transaction_date: "asc" }, { created_at: "asc" }],
    select: {
      id: true,
      transaction_date: true,
      transaction_type: true,
      amount: true,
      comments: true,
      receipt_number: true,
      account_id: true,
      accounts: {
        select: {
          account_types: {
            select: { name: true, label_english: true },
          },
        },
      },
    },
  });

  const runningByAccount = new Map<string, number>();
  const transactions: LedgerTransactionRow[] = [];

  for (const t of txns) {
    const delta = t.transaction_type === "credit" ? t.amount : -t.amount;
    const prev = runningByAccount.get(t.account_id) ?? 0;
    const next = prev + delta;
    runningByAccount.set(t.account_id, next);

    const accType = t.accounts.account_types;
    transactions.push({
      id: t.id,
      transaction_date: t.transaction_date,
      transaction_type: t.transaction_type,
      amount: t.amount,
      comments: t.comments,
      receipt_number: t.receipt_number,
      account_type_name: accType?.name ?? null,
      account_label_english: accType?.label_english ?? null,
      balance_after_on_account: next,
    });
  }

  return { balances, transactions: [...transactions].reverse() };
}
