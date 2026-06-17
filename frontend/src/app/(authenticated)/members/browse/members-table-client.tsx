"use client";

import { useMemo, useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import { DataTable } from "@/components/TableView/data-table";
import { MemberRow, getMemberColumns } from "./columns";
import { useLanguage } from "@/i18n/LanguageContext";
import { archiveMember, deleteMember } from "@/lib/api-client";
import { type AccessObject } from "@/lib/roles";
import { useToast } from "@/hooks/use-toast";

export function MembersTableClient({ data }: { data: MemberRow[] }) {
  const router = useRouter();
  const { data: session } = useSession();
  const theToast = useToast();
  const [rows, setRows] = useState(data);
  const [pageIndex, setPageIndex] = useState(0);
  const [pageSize, setPageSize] = useState(10);
  const { t, lang } = useLanguage();
  const [userPermissions, setUserPermissions] = useState<AccessObject | null>(null);

  useEffect(() => {
    setRows(data);
  }, [data]);

  useEffect(() => {
    if (!session?.user?.id || !session?.user?.accessToken) return;

    let mounted = true;
    (async () => {
      try {
        const response = await fetch(
          `/api/users/${session.user.id}/permissions?endpoint=${encodeURIComponent("/members/browse")}`,
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

  const pagedData = useMemo(
    () => rows.slice(pageIndex * pageSize, pageIndex * pageSize + pageSize),
    [rows, pageIndex, pageSize],
  );
  const pageCount = Math.max(1, Math.ceil(rows.length / pageSize));

  const handleArchive = async (memberId: string) => {
    if (!session?.user?.accessToken) return;

    try {
      await archiveMember(memberId, session.user.accessToken);
      setRows((prev) => prev.filter((row) => row.id !== memberId));
      theToast.toast({
        title: t.membersBrowse.archiveSuccess,
        duration: 3000,
      });
      router.refresh();
    } catch (error) {
      theToast.toast({
        title: t.common.error,
        description:
          error instanceof Error ? error.message : t.membersBrowse.archiveError,
        variant: "destructive",
        duration: 5000,
      });
    }
  };

  const handleDelete = async (memberId: string) => {
    if (!session?.user?.accessToken) return;

    try {
      await deleteMember(memberId, session.user.accessToken);
      setRows((prev) => prev.filter((row) => row.id !== memberId));
      theToast.toast({
        title: t.membersBrowse.deleteSuccess,
        duration: 3000,
      });
      router.refresh();
    } catch (error) {
      theToast.toast({
        title: t.common.error,
        description:
          error instanceof Error ? error.message : t.membersBrowse.deleteError,
        variant: "destructive",
        duration: 5000,
      });
    }
  };

  return (
    <DataTable<MemberRow, unknown>
      columns={getMemberColumns(t, lang, {
        canArchive: !!userPermissions?.admin,
        onArchive: handleArchive,
        onDelete: handleDelete,
      })}
      data={pagedData}
      pageCount={pageCount}
      pageIndex={pageIndex}
      pageSize={pageSize}
      isLastPage={pageIndex + 1 >= pageCount}
      hideToolbar={true}
      hidePagination={false}
      isLoading={false}
      onPaginationChange={(nextPageIndex, nextPageSize) => {
        setPageIndex(nextPageIndex);
        setPageSize(nextPageSize);
      }}
    />
  );
}
