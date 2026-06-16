"use client";

import * as React from "react";
import { ColumnDef } from "@tanstack/react-table";
import Link from "next/link";
import { MoreVertical, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
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

/**
 * Small cell component that renders the 3-dot kebab menu with a "Delete"
 * option inside and an AlertDialog confirmation before actually firing the
 * callback.
 */
function ActionsCell({
  memberId,
  onDelete,
  t,
}: {
  memberId: string;
  onDelete: (memberId: string) => Promise<void> | void;
  t: ReturnType<typeof useLanguage>["t"];
}) {
  const [showConfirm, setShowConfirm] = React.useState(false);

  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant="ghost"
            size="icon"
            className="h-8 w-8"
            aria-label={t.membersBrowse.colActions}
          >
            <MoreVertical className="!size-4" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuItem
            variant="destructive"
            onClick={() => setShowConfirm(true)}
          >
            <Trash2 className="!size-4" />
            {t.membersBrowse.deleteBtn}
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>

      <AlertDialog open={showConfirm} onOpenChange={setShowConfirm}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>{t.membersBrowse.deleteConfirmTitle}</AlertDialogTitle>
            <AlertDialogDescription>
              {t.membersBrowse.deleteConfirmDesc}
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>{t.membersBrowse.deleteNo}</AlertDialogCancel>
            <AlertDialogAction
              className="bg-destructive text-white hover:bg-destructive/90"
              onClick={async () => {
                await onDelete(memberId);
              }}
            >
              {t.membersBrowse.deleteYes}
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
}

// The columns need access to translations - we pass t and lang as parameters
export function getMemberColumns(
  t: ReturnType<typeof useLanguage>["t"],
  lang: ReturnType<typeof useLanguage>["lang"],
  opts?: {
    onArchive?: (memberId: string) => Promise<void> | void;
    onDelete?: (memberId: string) => Promise<void> | void;
    canArchive?: boolean;
  }
): ColumnDef<MemberRow>[] {
  const onDelete = opts?.onDelete;
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
    ...(canArchive && onDelete
      ? ([
        {
          id: "actions",
          header: t.membersBrowse.colActions,
          cell: ({ row }) => (
            <ActionsCell
              memberId={row.original.id}
              onDelete={onDelete}
              t={t}
            />
          ),
        } satisfies ColumnDef<MemberRow>,
      ] as ColumnDef<MemberRow>[])
      : []),
  ];
}
