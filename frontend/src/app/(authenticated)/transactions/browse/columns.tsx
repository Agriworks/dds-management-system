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
}): ColumnDef<TransactionWithNames>[] {
  const onInvalidate = opts?.onInvalidate;

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
      accessorKey: "loan_type",
      header: "Transaction Subtype",
      cell: (info: CellContext<TransactionWithNames, unknown>) =>
        String(info.getValue() ?? "-") as React.ReactNode,
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
    ...(onInvalidate
      ? ([
          {
            id: "actions",
            header: "Actions",
            cell: ({ row }) => {
              const t = row.original as TransactionWithNames;
              const isInvalid = !!t.is_archived;

              return (
                <Button
                  size="sm"
                  variant={isInvalid ? "secondary" : "destructive"}
                  disabled={isInvalid}
                  onClick={async () => {
                    if (isInvalid) return;
                    const ok = window.confirm(
                      "Invalidate this transaction? This will reverse its balance effect.",
                    );
                    if (!ok) return;
                    await onInvalidate(t.id);
                  }}
                >
                  {isInvalid ? "Invalid" : "Invalidate"}
                </Button>
              );
            },
          } satisfies ColumnDef<TransactionWithNames>,
        ] as ColumnDef<TransactionWithNames>[])
      : []),
  ];
}
