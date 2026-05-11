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
      header: "సభ్యుని పేరు",
    },
    {
      accessorKey: "type",
      header: "ట్రాన్సాక్షన్ రకం",
      cell: (info: CellContext<TransactionWithNames, unknown>) => (
        <Badge className={getTransactionTypeColor(String(info.getValue() ?? ""))}>
          {String(info.getValue() ?? "")}
        </Badge>
      ),
    },
    {
      accessorKey: "amount",
      header: "మొత్తం",
      cell: (info: CellContext<TransactionWithNames, unknown>) =>
        formatAmount(Number(info.getValue())),
    },
    {
      accessorKey: "transaction_date",
      header: "ట్రాన్సాక్షన్ తేదీ",
      cell: (info: CellContext<TransactionWithNames, unknown>) =>
        formatDateTime(
          (info.row.original as TransactionWithNames).created_at ||
            String(info.getValue() ?? ""),
        ),
    },
    {
      accessorKey: "supervisor_name",
      header: "సూపర్‌వైజర్ పేరు",
    },
    {
      accessorKey: "comments",
      header: "వ్యాఖ్యలు",
      cell: (info: CellContext<TransactionWithNames, unknown>) =>
        String(info.getValue() ?? "-") as React.ReactNode,
    },
    ...(onInvalidate || onValidate
      ? ([
          {
            id: "actions",
            header: "చర్యలు",
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
                          "ఈ ట్రాన్సాక్షన్‌ను ధృవీకరించాలా?",
                        );
                        if (!ok) return;
                        await onValidate(t.id);
                      }}
                    >
                      {isArchived ? "Approve" : "Approved"}
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
                          "ఈ ట్రాన్సాక్షన్‌ను రద్దు చేయాలా? ఇది బ్యాలెన్స్ ప్రభావాన్ని తిరగమారుస్తుంది.",
                        );
                        if (!ok) return;
                        await onInvalidate(t.id);
                      }}
                    >
                      {isArchived ? "రద్దు" : "రద్దు చేయి"}
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
