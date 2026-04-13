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

export function getTransactionColumns(opts?: {
  onInvalidate?: (transactionId: string) => Promise<void> | void;
  onValidate?: (transactionId: string) => Promise<void> | void;
}): ColumnDef<TransactionWithNames>[] {
  const onInvalidate = opts?.onInvalidate;
  const onValidate = opts?.onValidate;

  return [
    {
      accessorKey: "member_name",
      header: "Member Name",
    },
    {
      accessorKey: "type",
      header: "Transaction Type",
      cell: (info: CellContext<TransactionWithNames, unknown>) => (
        <Badge className={getTransactionTypeColor(String(info.getValue() ?? ""))}>
          {String(info.getValue() ?? "")}
        </Badge>
      ),
    },
    {
      accessorKey: "amount",
      header: "Amount",
      cell: (info: CellContext<TransactionWithNames, unknown>) =>
        formatAmount(Number(info.getValue())),
    },
    {
      accessorKey: "transaction_date",
      header: "Transaction Date",
      cell: (info: CellContext<TransactionWithNames, unknown>) =>
        formatDateTime(
          (info.row.original as TransactionWithNames).created_at ||
            String(info.getValue() ?? ""),
        ),
    },
    {
      accessorKey: "supervisor_name",
      header: "Supervisor Name",
    },
    {
      accessorKey: "comments",
      header: "Comments",
      cell: (info: CellContext<TransactionWithNames, unknown>) =>
        String(info.getValue() ?? "-") as React.ReactNode,
    },
    ...(onInvalidate || onValidate
      ? ([
          {
            id: "actions",
            header: "Actions",
            cell: ({ row }) => {
              const t = row.original as TransactionWithNames;
              const isArchived = !!t.is_archived;

              return (
                <div className="flex gap-2">
                  {onValidate && (
                    <Button
                      size="sm"
                      variant={isArchived ? "default" : "secondary"}
                      disabled={!isArchived}
                      onClick={async () => {
                        if (!isArchived) return;
                        const ok = window.confirm(
                          "Validate this transaction?",
                        );
                        if (!ok) return;
                        await onValidate(t.id);
                      }}
                    >
                      {isArchived ? "Validate" : "Validated"}
                    </Button>
                  )}
                  {onInvalidate && (
                    <Button
                      size="sm"
                      variant={isArchived ? "secondary" : "destructive"}
                      disabled={isArchived}
                      onClick={async () => {
                        if (isArchived) return;
                        const ok = window.confirm(
                          "Invalidate this transaction? This will reverse its balance effect.",
                        );
                        if (!ok) return;
                        await onInvalidate(t.id);
                      }}
                    >
                      {isArchived ? "Invalid" : "Invalidate"}
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
