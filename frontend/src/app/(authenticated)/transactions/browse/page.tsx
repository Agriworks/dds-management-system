"use client";

import { useState, useEffect } from "react";
import { ContentLayout } from "@/components/admin-panel/content-layout";
import { getTransactions, archiveTransaction } from "@/lib/api-client";
import { DataTable } from "@/components/TableView/data-table";
import { getTransactionColumns } from "./columns";
import { TransactionWithNames } from "@/types/transaction";
import { useSession } from "next-auth/react";
import { type AccessObject } from "@/lib/roles";
import { useToast } from "@/hooks/use-toast";

export default function TransactionsPage() {
  const { data: session } = useSession();
  const theToast = useToast();
  const [transactions, setTransactions] = useState<TransactionWithNames[]>([]);
  const [loading, setLoading] = useState(false);
  const [userPermissions, setUserPermissions] = useState<AccessObject | null>(null);
  const [pagination, setPagination] = useState({
    total: 0,
    limit: 10,
    offset: 0,
    hasMore: false,
  });

  const fetchTransactions = async (params: {
    limit?: number;
    offset?: number;
  }) => {
    setLoading(true);

    try {
      const result = await getTransactions({ ...params, isArchived: false });
      setTransactions(result.transactions);
      setPagination(result.pagination);
    } catch (err) {
      console.error("Error fetching transactions:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTransactions({ limit: 10, offset: 0 });
  }, []);

  useEffect(() => {
    if (!session?.user?.id || !session?.user?.accessToken) return;

    let mounted = true;
    (async () => {
      try {
        const response = await fetch(
          `/api/users/${session.user.id}/permissions?endpoint=${encodeURIComponent("/transactions/browse")}`,
          {
            method: "GET",
            headers: {
              Authorization: `Bearer ${session.user.accessToken}`,
            },
          },
        );

        if (!response.ok) return;
        const permissions = await response.json();
        if (mounted) setUserPermissions(permissions);
      } catch (error) {
        console.error("Failed to fetch user permissions:", error);
      }
    })();

    return () => {
      mounted = false;
    };
  }, [session?.user?.id, session?.user?.accessToken]);

  const handlePageChange = (pageIndex: number, pageSize: number) => {
    fetchTransactions({
      limit: pageSize,
      offset: pageIndex * pageSize,
    });
  };

  const handleArchive = async (transactionId: string) => {
    if (!session?.user?.accessToken) return;

    try {
      await archiveTransaction(transactionId, session.user.accessToken);
      setTransactions((prev) => prev.filter((t) => t.id !== transactionId));
      setPagination((prev) => ({
        ...prev,
        total: Math.max(0, prev.total - 1),
      }));
      theToast.toast({
        title: "ట్రాన్సాక్షన్ ఆర్కైవ్ అయింది",
        duration: 3000,
      });
    } catch (error) {
      theToast.toast({
        title: "లోపం",
        description:
          error instanceof Error ? error.message : "ట్రాన్సాక్షన్ ఆర్కైవ్ చేయలేకపోయాం",
        variant: "destructive",
        duration: 5000,
      });
    }
  };

  return (
    <ContentLayout title="ట్రాన్సాక్షన్లు">
      <div className="p-4 sm:p-6 lg:p-8">
        <div className="shadow-md bg-background rounded-lg p-2">
            <div className="text-lg sm:text-xl font-semibold py-2">
              ట్రాన్సాక్షన్లు
            </div>
          <div className="overflow-x-auto">
            <DataTable
              columns={getTransactionColumns({
                canArchive: !!userPermissions?.admin,
                onArchive: handleArchive,
              })}
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
    </ContentLayout>
  );
}
