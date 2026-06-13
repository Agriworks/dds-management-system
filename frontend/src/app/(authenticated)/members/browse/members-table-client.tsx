"use client";

import { useMemo, useState } from "react";
import { DataTable } from "@/components/TableView/data-table";
import { MemberRow, getMemberColumns } from "./columns";
import { useLanguage } from "@/i18n/LanguageContext";

export function MembersTableClient({ data }: { data: MemberRow[] }) {
  const [pageIndex, setPageIndex] = useState(0);
  const [pageSize, setPageSize] = useState(10);
  const { t, lang } = useLanguage();
  const pagedData = useMemo(
    () => data.slice(pageIndex * pageSize, pageIndex * pageSize + pageSize),
    [data, pageIndex, pageSize],
  );
  const pageCount = Math.max(1, Math.ceil(data.length / pageSize));

  return (
    <DataTable<MemberRow, unknown>
      columns={getMemberColumns(t, lang)}
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
