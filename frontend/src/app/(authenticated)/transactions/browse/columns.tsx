import { Badge } from "@/components/ui/badge";
import { TransactionWithNames } from "@/types/transaction";
import { CellContext, ColumnDef } from "@tanstack/react-table";
import { getTransactionTypeColor, formatDate, formatAmount } from "@/lib/utils";

export const columns: ColumnDef<TransactionWithNames>[] = [
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
    header: "Date",
    cell: (info: CellContext<TransactionWithNames, unknown>) =>
      formatDate(String(info.getValue() ?? "")),
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
];
