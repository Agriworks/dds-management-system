import { useEffect, useState, useMemo, useCallback } from "react";
import { useSession } from "next-auth/react";
import { useLanguage } from "@/i18n/LanguageContext";
import { ContentLayout } from "@/components/admin-panel/content-layout";
import { getTransactions, restoreTransaction } from "@/lib/api-client";
import { DataTable } from "@/components/TableView/data-table";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";
import { ColumnDef } from "@tanstack/react-table";
import { RefreshCw, RotateCcw } from "lucide-react";
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
import { TransactionWithNames } from "@/types/transaction";

export default function DeletedTransactionsPage() {
  const { data: session } = useSession();
  const { t } = useLanguage();
  const theToast = useToast();

  const [transactions, setTransactions] = useState<TransactionWithNames[]>([]);
  const [loading, setLoading] = useState(true);
  const [pagination, setPagination] = useState({
    total: 0,
    limit: 10,
    offset: 0,
    hasMore: false,
  });
  const [restoringId, setRestoringId] = useState<string | null>(null);
  const [showConfirmRestore, setShowConfirmRestore] = useState(false);
  const [selectedTransaction, setSelectedTransaction] = useState<TransactionWithNames | null>(null);

  const fetchDeletedTransactions = useCallback(async (params: {
    limit?: number;
    offset?: number;
  }) => {
    if (!session?.user?.accessToken) return;
    setLoading(true);

    try {
      const result = await getTransactions({
        ...params,
        isArchived: true,
      });
      setTransactions(result.transactions);
      setPagination(result.pagination);
    } catch (err) {
      console.error("Error fetching deleted transactions:", err);
      theToast.toast({
        title: t.common.error,
        description: err instanceof Error ? err.message : "Failed to load deleted transactions",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  }, [session?.user?.accessToken, t.common.error, theToast]);

  useEffect(() => {
    if (session?.user?.accessToken) {
      fetchDeletedTransactions({ limit: 10, offset: 0 });
    }
  }, [session?.user?.accessToken, fetchDeletedTransactions]);

  const handlePageChange = (pageIndex: number, pageSize: number) => {
    fetchDeletedTransactions({
      limit: pageSize,
      offset: pageIndex * pageSize,
    });
  };

  const handleRestore = (tx: TransactionWithNames) => {
    setSelectedTransaction(tx);
    setShowConfirmRestore(true);
  };

  const confirmRestore = async () => {
    if (!selectedTransaction || !session?.user?.accessToken) return;
    const txId = selectedTransaction.id;
    setRestoringId(txId);
    setShowConfirmRestore(false);

    try {
      await restoreTransaction(txId, session.user.accessToken);
      setTransactions((prev) => prev.filter((t) => t.id !== txId));
      setPagination((prev) => ({
        ...prev,
        total: Math.max(0, prev.total - 1),
      }));
      theToast.toast({
        title: t.transactionsBrowse.restoreSuccess,
        duration: 3000,
      });
    } catch (error) {
      theToast.toast({
        title: t.common.error,
        description: error instanceof Error ? error.message : t.transactionsBrowse.restoreError,
        variant: "destructive",
      });
    } finally {
      setRestoringId(null);
      setSelectedTransaction(null);
    }
  };

  const columns = useMemo<ColumnDef<TransactionWithNames>[]>(() => [
    {
      accessorKey: "member_name",
      header: t.transactionsBrowse.colMember,
    },
    {
      accessorKey: "type",
      header: t.transactionsBrowse.colType,
      cell: (info) => (
        <Badge className={getTransactionTypeColor(String(info.getValue() ?? ""))}>
          {String(info.getValue() ?? "")}
        </Badge>
      ),
    },
    {
      accessorKey: "amount",
      header: t.transactionsBrowse.colAmount,
      cell: (info) => formatAmount(Number(info.getValue())),
    },
    {
      accessorKey: "transaction_date",
      header: t.transactionsBrowse.colDate,
      cell: (info) =>
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
      cell: (info) => String(info.getValue() ?? "-"),
    },
    {
      id: "actions",
      header: t.transactionsBrowse.colActions,
      cell: ({ row }) => (
        <Button
          variant="outline"
          size="sm"
          className="flex items-center gap-1"
          disabled={restoringId === row.original.id}
          onClick={() => handleRestore(row.original)}
        >
          <RotateCcw className="h-3.5 w-3.5" />
          {t.transactionsBrowse.restoreBtn}
        </Button>
      ),
    },
  ], [t, restoringId]);

  return (
    <ContentLayout title={t.transactionsBrowse.deletedTitle}>
      <div className="p-4 sm:p-6 lg:p-8">
        <div className="shadow-md bg-background rounded-lg p-4 sm:p-6">
          <div className="flex items-center justify-between mb-4">
            <h1 className="text-xl font-bold">{t.transactionsBrowse.deletedTitle}</h1>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => fetchDeletedTransactions({ limit: pagination.limit, offset: pagination.offset })}
              disabled={loading}
            >
              <RefreshCw className={`h-4 w-4 mr-2 ${loading ? "animate-spin" : ""}`} />
              {t.common.reset}
            </Button>
          </div>
          <div className="overflow-x-auto">
            <DataTable
              columns={columns}
              data={transactions}
              pageCount={Math.ceil(pagination.total / pagination.limit)}
              pageIndex={Math.floor(pagination.offset / pagination.limit)}
              pageSize={pagination.limit}
              totalCount={pagination.total}
              isLastPage={!pagination.hasMore}
              isLoading={loading}
              onPaginationChange={handlePageChange}
              hidePagination={false}
              hideToolbar={true}
            />
          </div>
        </div>
      </div>

      <AlertDialog open={showConfirmRestore} onOpenChange={setShowConfirmRestore}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>{t.transactionsBrowse.restoreConfirmTitle}</AlertDialogTitle>
            <AlertDialogDescription>
              {t.transactionsBrowse.restoreConfirmDesc}
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel onClick={() => setSelectedTransaction(null)}>{t.transactionsBrowse.deleteNo}</AlertDialogCancel>
            <AlertDialogAction
              className="bg-primary text-primary-foreground hover:bg-primary/90"
              onClick={confirmRestore}
            >
              {t.transactionsBrowse.deleteYes}
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </ContentLayout>
  );
}
