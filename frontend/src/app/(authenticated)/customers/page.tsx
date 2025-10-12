"use client";

import React, { useState, useEffect, useMemo } from "react";
import { Loader2 } from "lucide-react";
import { ContentLayout } from "@/components/admin-panel/content-layout";
import { DataTable } from "@/components/TableView/data-table";
import { getUsers, updateUserRoles } from "@/lib/api-client";
import { createColumns } from "./columns";

type UserRow = {
  id: string;
  name: string;
  email: string;
  roles: string[];
};

export default function CustomersPage() {
  const [data, setData] = useState<UserRow[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const [pageIndex, setPageIndex] = useState(0);
  const [pageSize, setPageSize] = useState(10);

  // Load users on mount
  useEffect(() => {
    let mounted = true;
    (async () => {
      setLoading(true);
      setError(null);
      try {
        const users = await getUsers();
        if (!mounted) return;
        setData(users);
      } catch (err) {
        if (!mounted) return;
        setError("Failed to load users");
        console.error("Error loading users:", err);
      } finally {
        if (mounted) setLoading(false);
      }
    })();
    return () => {
      mounted = false;
    };
  }, []);

  const total = data.length;
  const pageCount = Math.max(1, Math.ceil(total / pageSize));
  const pagedData = useMemo(
    () => data.slice(pageIndex * pageSize, pageIndex * pageSize + pageSize),
    [data, pageIndex, pageSize],
  );

  const handleUpdateRoles = async (id: string, roles: string[]) => {
    try {
      await updateUserRoles(id, roles);
      // Update local state
      setData((prev) => prev.map((u) => (u.id === id ? { ...u, roles } : u)));
    } catch (error) {
      console.error("Failed to update user roles:", error);
      // You could add a toast notification here
    }
  };

  const columns = createColumns(handleUpdateRoles);

  return (
    <ContentLayout title="Roles Management">
      <div className="shadow-md bg-background rounded-lg">
        <div className="p-4">
          {loading ? (
            <div className="flex items-center justify-center py-8">
              <Loader2 className="h-8 w-8 animate-spin" />
            </div>
          ) : error ? (
            <div className="flex items-center justify-center py-8">
              <span className="text-destructive">{error}</span>
            </div>
          ) : (
            <DataTable<UserRow, unknown>
              columns={columns}
              data={pagedData}
              pageCount={pageCount}
              pageIndex={pageIndex}
              pageSize={pageSize}
              isLastPage={pageIndex + 1 >= pageCount}
              onPaginationChange={(nextPageIndex, nextPageSize) => {
                setPageIndex(nextPageIndex);
                setPageSize(nextPageSize);
              }}
              hideToolbar={true}
            />
          )}
        </div>
      </div>
    </ContentLayout>
  );
}
