"use client";

import { ColumnDef } from "@tanstack/react-table";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/i18n/LanguageContext";

export type MemberRow = {
  id: string;
  givenNameEnglish: string;
  familyNameEnglish: string;
  givenNameTelugu: string;
  familyNameTelugu: string;
  husbandOrFatherName: string;
  aadharNumber: string;
  phoneNumber: string;
  mandalEnglish: string;
  mandalTelugu: string;
  villageEnglish: string;
  villageTelugu: string;
  savingsBalance: number;
  withdrawBalance: number;
  laagodiBalance: number;
};

function formatInr(amount: number): string {
  return new Intl.NumberFormat("en-IN", { maximumFractionDigits: 0 }).format(amount);
}

// The columns need access to translations - we pass t and lang as parameters
export function getMemberColumns(
  t: ReturnType<typeof useLanguage>["t"],
  lang: ReturnType<typeof useLanguage>["lang"],
  opts?: {
    onArchive?: (memberId: string) => Promise<void> | void;
    canArchive?: boolean;
  }
): ColumnDef<MemberRow>[] {
  const onArchive = opts?.onArchive;
  const canArchive = opts?.canArchive;

  return [
    {
      id: "memberName",
      accessorFn: (row) => {
        const given = lang === "te" ? row.givenNameTelugu : row.givenNameEnglish;
        const family = lang === "te" ? row.familyNameTelugu : row.familyNameEnglish;
        return `${given} ${family}`.trim();
      },
      header: t.membersBrowse.colName,
      cell: ({ row }) => {
        const given = lang === "te" ? row.original.givenNameTelugu : row.original.givenNameEnglish;
        return (
          <Link
            href={`/members/${row.original.id}`}
            className="font-medium text-primary underline-offset-4 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-sm"
          >
            {given}
          </Link>
        );
      },
    },
    {
      id: "familyName",
      accessorFn: (row) => lang === "te" ? row.familyNameTelugu : row.familyNameEnglish,
      header: t.membersBrowse.colFamilyName,
    },
    {
      accessorKey: "husbandOrFatherName",
      header: t.membersBrowse.colHusbandFather,
    },
    {
      accessorKey: "aadharNumber",
      header: t.membersBrowse.colAadhar,
    },
    {
      accessorKey: "phoneNumber",
      header: t.membersBrowse.colPhone,
    },
    {
      id: "mandal",
      accessorFn: (row) => lang === "te" ? row.mandalTelugu : row.mandalEnglish,
      header: t.membersBrowse.colMandal,
    },
    {
      id: "village",
      accessorFn: (row) => lang === "te" ? row.villageTelugu : row.villageEnglish,
      header: t.membersBrowse.colVillage,
    },
    {
      accessorKey: "savingsBalance",
      header: t.membersBrowse.colSavings,
      cell: ({ row }) => (
        <span className="tabular-nums">{formatInr(row.original.savingsBalance)}</span>
      ),
    },
    {
      accessorKey: "withdrawBalance",
      header: t.membersBrowse.colWithdraw,
      cell: ({ row }) => (
        <span className="tabular-nums">{formatInr(row.original.withdrawBalance)}</span>
      ),
    },
    {
      accessorKey: "laagodiBalance",
      header: t.membersBrowse.colLaagodi,
      cell: ({ row }) => (
        <span className="tabular-nums">{formatInr(row.original.laagodiBalance)}</span>
      ),
    },
    ...(canArchive && onArchive
      ? ([
          {
            id: "actions",
            header: t.membersBrowse.colActions,
            cell: ({ row }) => (
              <Button
                size="sm"
                variant="destructive"
                onClick={async () => {
                  const ok = window.confirm(
                    t.membersBrowse.archiveConfirm,
                  );
                  if (!ok) return;
                  await onArchive(row.original.id);
                }}
              >
                {t.membersBrowse.archiveBtn}
              </Button>
            ),
          } satisfies ColumnDef<MemberRow>,
        ] as ColumnDef<MemberRow>[])
      : []),
  ];
}
