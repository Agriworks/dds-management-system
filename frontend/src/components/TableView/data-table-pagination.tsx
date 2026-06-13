import { type Table } from "@tanstack/react-table";

import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";

interface DataTablePaginationProps<TData> {
  table: Table<TData>;
}

export function DataTablePagination<TData>({
  table,
}: DataTablePaginationProps<TData>) {
  const { t } = useLanguage();

  return (
    <div className="flex items-center justify-between px-2">
      <div className="text-sm text-muted-foreground">
        {t.common.page} {table.getState().pagination.pageIndex + 1} /{" "}
        {table.getPageCount()}
      </div>
      <div className="flex items-center space-x-2">
        <Button
          variant="outline"
          className="h-8 w-8 p-0"
          onClick={() => table.previousPage()}
          disabled={!table.getCanPreviousPage()}
        >
          <span className="sr-only">{t.common.previous}</span>
          <ChevronLeft className="h-4 w-4" />
        </Button>
        <Button
          variant="outline"
          className="h-8 w-8 p-0"
          onClick={() => table.nextPage()}
          disabled={!table.getCanNextPage()}
        >
          <span className="sr-only">{t.common.next}</span>
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
}
