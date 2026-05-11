"use client";

import { useState, useEffect } from "react";
import { ContentLayout } from "@/components/admin-panel/content-layout";
import { getTransactions } from "@/lib/api-client";
import { DataTable } from "@/components/TableView/data-table";
import { getTransactionColumns } from "./columns";
import { TransactionWithNames } from "@/types/transaction";

export default function TransactionsPage() {
  const [transactions, setTransactions] = useState<TransactionWithNames[]>([]);
  const [loading, setLoading] = useState(false);
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

  const handlePageChange = (pageIndex: number, pageSize: number) => {
    fetchTransactions({
      limit: pageSize,
      offset: pageIndex * pageSize,
    });
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
              columns={getTransactionColumns()}
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
