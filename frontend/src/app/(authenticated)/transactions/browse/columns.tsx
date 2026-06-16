"use client";

import * as React from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { TransactionWithNames } from "@/types/transaction";
import { CellContext, ColumnDef } from "@tanstack/react-table";
import {
  getTransactionTypeColor,
  formatDateTime,
  formatAmount,
} from "@/lib/utils";
import { type Translations } from "@/i18n/translations/te";

export function getTransactionColumns(
  t: Translations,
  opts?: {
    onInvalidate?: (transactionId: string) => Promise<void> | void;
    onValidate?: (transactionId: string) => Promise<void> | void;
    onArchive?: (transactionId: string) => Promise<void> | void;
    canArchive?: boolean;
  },
): ColumnDef<TransactionWithNames>[] {
  const onInvalidate = opts?.onInvalidate;
  const onValidate = opts?.onValidate;
  const onArchive = opts?.onArchive;
  const canArchive = opts?.canArchive;

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
    ...(onInvalidate || onValidate || (canArchive && onArchive)
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
                  {canArchive && onArchive && (
                    <Button
                      size="sm"
                      variant="destructive"
                      onClick={async () => {
                        const ok = window.confirm(
                          t.transactionsBrowse.archiveConfirm,
                        );
                        if (!ok) return;
                        await onArchive(tx.id);
                      }}
                    >
                      {t.transactionsBrowse.archiveBtn}
                    </Button>
                  )}
                </div>
              );
            },
          } satisfies ColumnDef<TransactionWithNames>,
        ] as ColumnDef<TransactionWithNames>[])
      : []),
  ];
}
