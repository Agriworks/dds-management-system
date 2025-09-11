import { Badge } from "@/components/ui/badge";
import { Transaction } from "@/types/transaction";
import { CellContext, ColumnDef } from "@tanstack/react-table";
import { getTransactionTypeColor, formatDate, formatAmount } from "@/lib/utils";

export const columns: ColumnDef<Transaction>[] = [
  {
    accessorKey: "recipet_number",
    header: "Receipt #",
    cell: (info: CellContext<Transaction, unknown>) =>
      String(info.getValue() ?? ""),
  },
  {
    accessorKey: "type",
    header: "Type",
    cell: (info: CellContext<Transaction, unknown>) => (
      <Badge className={getTransactionTypeColor(String(info.getValue() ?? ""))}>
        {String(info.getValue() ?? "")}
      </Badge>
    ),
  },
  {
    accessorKey: "member_name",
    header: "Member",
  },
  {
    accessorKey: "supervisor_name",
    header: "Supervisor",
  },
  {
    accessorKey: "transaction_date",
    header: "Date",
    cell: (info: CellContext<Transaction, unknown>) =>
      formatDate(String(info.getValue() ?? "")),
  },
  {
    accessorKey: "amount",
    header: "Amount",
    cell: (info: CellContext<Transaction, unknown>) =>
      formatAmount(Number(info.getValue())),
  },
  {
    accessorKey: "comments",
    header: "Comments",
    cell: (info: CellContext<Transaction, unknown>) =>
      String(info.getValue() ?? "-") as React.ReactNode,
  },
  {
    accessorKey: "loan_type",
    header: "Loan Type",
    cell: (info: CellContext<Transaction, unknown>) =>
      String(info.getValue() ?? "-") as React.ReactNode,
  },
  {
    accessorKey: "fund_type",
    header: "Fund Type",
    cell: (info: CellContext<Transaction, unknown>) =>
      String(info.getValue() ?? "-") as React.ReactNode,
  },
];
