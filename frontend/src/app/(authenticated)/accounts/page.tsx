"use client";

import { useEffect, useState } from "react";
import { ContentLayout } from "@/components/admin-panel/content-layout";
import { DataTable } from "@/components/TableView/data-table";
import { getTransactions, validateTransaction } from "@/lib/api-client";
import { TransactionWithNames } from "@/types/transaction";
import { getTransactionColumns } from "../transactions/browse/columns";

export default function AccountsPage() {
  const [transactions, setTransactions] = useState<TransactionWithNames[]>([]);
  const [loading, setLoading] = useState(false);
  const [pagination, setPagination] = useState({
    total: 0,
    limit: 10,
    offset: 0,
    hasMore: false,
  });

  const fetchTransactions = async (params: {
    limit: number;
    offset: number;
  }) => {
    setLoading(true);
    try {
      const result = await getTransactions({
        ...params,
        isArchived: true,
      });
      setTransactions(result.transactions);
      setPagination(result.pagination);
    } catch (error) {
      console.error("Error fetching transactions for accounts page:", error);
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
    <ContentLayout title="అకౌంట్లు">
          <div className="overflow-x-auto p-4 sm:p-6 lg:p-8">
            <DataTable
              columns={getTransactionColumns({
                onValidate: async (transactionId) => {
                  await validateTransaction(transactionId);
                  await fetchTransactions({
                    limit: pagination.limit,
                    offset: pagination.offset,
                  });
                },
              })}
              data={transactions}
              pageCount={Math.ceil(
                pagination.total / (pagination.limit || 1),
              )}
              pageIndex={Math.floor(
                (pagination.offset || 0) / (pagination.limit || 1),
              )}
              pageSize={pagination.limit}
              totalCount={pagination.total}
              isLastPage={!pagination.hasMore}
              isLoading={loading}
              onPaginationChange={handlePageChange}
              hidePagination={false}
              hideToolbar={true}
            />
          </div>
    </ContentLayout>
  );
}

