"use client";

import * as React from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { TransactionWithNames } from "@/types/transaction";
import { CellContext, ColumnDef } from "@tanstack/react-table";
import { MoreVertical, Trash2 } from "lucide-react";
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
import {
  getTransactionTypeColor,
  formatDateTime,
  formatAmount,
} from "@/lib/utils";
import { type Translations } from "@/i18n/translations/te";

function ActionsCell({
  transactionId,
  onDelete,
  t,
}: {
  transactionId: string;
  onDelete: (transactionId: string) => Promise<void> | void;
  t: Translations;
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
            aria-label={t.transactionsBrowse.colActions}
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
            {t.transactionsBrowse.deleteBtn}
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>

      <AlertDialog open={showConfirm} onOpenChange={setShowConfirm}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>{t.transactionsBrowse.deleteConfirmTitle}</AlertDialogTitle>
            <AlertDialogDescription>
              {t.transactionsBrowse.deleteConfirmDesc}
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>{t.transactionsBrowse.deleteNo}</AlertDialogCancel>
            <AlertDialogAction
              className="bg-destructive text-white hover:bg-destructive/90"
              onClick={async () => {
                await onDelete(transactionId);
              }}
            >
              {t.transactionsBrowse.deleteYes}
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
}

export function getTransactionColumns(
  t: Translations,
  opts?: {
    onInvalidate?: (transactionId: string) => Promise<void> | void;
    onValidate?: (transactionId: string) => Promise<void> | void;
    onDelete?: (transactionId: string) => Promise<void> | void;
    canDelete?: boolean;
  },
): ColumnDef<TransactionWithNames>[] {
  const onInvalidate = opts?.onInvalidate;
  const onValidate = opts?.onValidate;
  const onDelete = opts?.onDelete;
  const canDelete = opts?.canDelete;

  return [
    {
      accessorKey: "member_name",
      header: t.transactionsBrowse.colMember,
    },
    {
      accessorKey: "type",
      header: t.transactionsBrowse.colType,
      cell: (info: CellContext<TransactionWithNames, unknown>) => (
        <Badge className={getTransactionTypeColor(String(info.getValue() ?? ""))}>
          {String(info.getValue() ?? "")}
        </Badge>
      ),
    },
    {
      accessorKey: "amount",
      header: t.transactionsBrowse.colAmount,
      cell: (info: CellContext<TransactionWithNames, unknown>) =>
        formatAmount(Number(info.getValue())),
    },
    {
      accessorKey: "transaction_date",
      header: t.transactionsBrowse.colDate,
      cell: (info: CellContext<TransactionWithNames, unknown>) =>
        formatDateTime(
          (info.row.original as TransactionWithNames).created_at ||
            String(info.getValue() ?? ""),
        ),
    },
    {
      accessorKey: "supervisor_name",
      header: t.transactionsBrowse.colSupervisor,
    },
    {
      accessorKey: "comments",
      header: t.transactionsBrowse.colComments,
      cell: (info: CellContext<TransactionWithNames, unknown>) =>
        String(info.getValue() ?? "-") as React.ReactNode,
    },
    ...(onInvalidate || onValidate || (canDelete && onDelete)
      ? ([
          {
            id: "actions",
            header: t.transactionsBrowse.colActions,
            cell: ({ row }) => {
              const tx = row.original as TransactionWithNames;
              const isArchived = !!tx.is_archived;

              return (
                <div className="flex flex-wrap gap-2">
                  {onValidate && (
                    <Button
                      size="sm"
                      variant={isArchived ? "default" : "secondary"}
                      disabled={!isArchived}
                      onClick={async () => {
                        if (!isArchived) return;
                        const ok = window.confirm(t.transactionsBrowse.confirmValidate);
                        if (!ok) return;
                        await onValidate(tx.id);
                      }}
                    >
                      {isArchived ? t.transactionsBrowse.approve : t.transactionsBrowse.approved}
                    </Button>
                  )}
                  {onInvalidate && (
                    <Button
                      size="sm"
                      variant={isArchived ? "secondary" : "destructive"}
                      disabled={isArchived}
                      onClick={async () => {
                        if (isArchived) return;
                        const ok = window.confirm(t.transactionsBrowse.confirmInvalidate);
                        if (!ok) return;
                        await onInvalidate(tx.id);
                      }}
                    >
                      {isArchived ? t.transactionsBrowse.cancel : t.transactionsBrowse.cancelDone}
                    </Button>
                  )}
                  {canDelete && onDelete && (
                    <ActionsCell
                      transactionId={tx.id}
                      onDelete={onDelete}
                      t={t}
                    />
                  )}
                </div>
              );
            },
          } satisfies ColumnDef<TransactionWithNames>,
        ] as ColumnDef<TransactionWithNames>[])
      : []),
  ];
}
