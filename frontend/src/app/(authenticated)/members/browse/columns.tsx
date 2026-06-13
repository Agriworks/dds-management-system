import { ColumnDef } from "@tanstack/react-table";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export type MemberRow = {
  id: string;
  givenName: string;
  familyName: string;
  husbandOrFatherName: string;
  aadharNumber: string;
  phoneNumber: string;
  mandal: string;
  village: string;
  savingsBalance: number;
  withdrawBalance: number;
  laagodiBalance: number;
};

function formatInr(amount: number): string {
  return new Intl.NumberFormat("en-IN", { maximumFractionDigits: 0 }).format(amount);
}

export function getMemberColumns(opts?: {
  onArchive?: (memberId: string) => Promise<void> | void;
  canArchive?: boolean;
}): ColumnDef<MemberRow>[] {
  const onArchive = opts?.onArchive;
  const canArchive = opts?.canArchive;

  return [
    {
      id: "memberName",
      accessorFn: (row) => `${row.givenName} ${row.familyName}`.trim(),
      header: "సభ్యుని పేరు",
      cell: ({ row }) => (
        <Link
          href={`/members/${row.original.id}`}
          className="font-medium text-primary underline-offset-4 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-sm"
        >
          {row.original.givenName}
        </Link>
      ),
    },
    {
      accessorKey: "familyName",
      header: "ఇంటి పేరు",
    },
    {
      accessorKey: "husbandOrFatherName",
      header: "భర్త / తండ్రి పేరు",
    },
    {
      accessorKey: "aadharNumber",
      header: "ఆధార్ నంబర్",
    },
    {
      accessorKey: "phoneNumber",
      header: "ఫోన్ నంబర్",
    },
    {
      accessorKey: "mandal",
      header: "మండలం",
    },
    {
      accessorKey: "village",
      header: "ఊరు",
    },
    {
      accessorKey: "savingsBalance",
      header: "సేవింగ్స్ బ్యాలెన్స్",
      cell: ({ row }) => (
        <span className="tabular-nums">{formatInr(row.original.savingsBalance)}</span>
      ),
    },
    {
      accessorKey: "withdrawBalance",
      header: "విత్‌డ్రాల్ బ్యాలెన్స్",
      cell: ({ row }) => (
        <span className="tabular-nums">{formatInr(row.original.withdrawBalance)}</span>
      ),
    },
    {
      accessorKey: "laagodiBalance",
      header: "లాగోడి బ్యాలెన్స్",
      cell: ({ row }) => (
        <span className="tabular-nums">{formatInr(row.original.laagodiBalance)}</span>
      ),
    },
    ...(canArchive && onArchive
      ? ([
          {
            id: "actions",
            header: "చర్యలు",
            cell: ({ row }) => (
              <Button
                size="sm"
                variant="destructive"
                onClick={async () => {
                  const ok = window.confirm(
                    "ఈ సభ్యుని ఆర్కైవ్ చేయాలా? వారు జాబితాలో కనిపించరు.",
                  );
                  if (!ok) return;
                  await onArchive(row.original.id);
                }}
              >
                ఆర్కైవ్
              </Button>
            ),
          } satisfies ColumnDef<MemberRow>,
        ] as ColumnDef<MemberRow>[])
      : []),
  ];
}
