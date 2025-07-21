/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import * as React from "react";
import {
  type ColumnDef,
  type ColumnFiltersState,
  type SortingState,
  type VisibilityState,
  flexRender,
  getCoreRowModel,
  getFacetedRowModel,
  getFacetedUniqueValues,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
  type RowSelectionState,
  getExpandedRowModel,
} from "@tanstack/react-table";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { DataTableToolbar } from "./data-table-toolbar";
import { DataTablePagination } from "./data-table-pagination";

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
  pageCount?: number;
  pageIndex?: number;
  pageSize?: number;
  totalCount?: number;
  isLastPage?: boolean;
  onPaginationChange?: (pageIndex: number, pageSize: number) => void;
  isLoading?: boolean;
  onExport?: (selectedData: TData[]) => void;
  expandedContent?: (row: TData) => React.ReactNode;
  expandedTitle?: string;
  hideToolbar?: boolean;
  hidePagination?: boolean;
  onSearch?: (value: string) => void;
}

export function DataTable<TData, TValue>({
  columns,
  data,
  pageCount,
  pageIndex = 0,
  pageSize = 10,
  isLastPage = false,
  onPaginationChange,
  isLoading = false,
  onExport,
  expandedContent,
  expandedTitle,
  hideToolbar = false,
  hidePagination = false,
  onSearch,
}: DataTableProps<TData, TValue>) {
  const [sorting, setSorting] = React.useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>([]);
  const [columnVisibility, setColumnVisibility] = React.useState<VisibilityState>({});
  const [rowSelection, setRowSelection] = React.useState<RowSelectionState>({});
  const [expanded, setExpanded] = React.useState({});

  const table = useReactTable({
    data,
    columns,
    state: {
      sorting,
      columnVisibility,
      rowSelection,
      columnFilters,
      expanded,
      pagination: {
        pageIndex,
        pageSize,
      },
    },
    pageCount: pageCount ?? -1,
    onPaginationChange: (updater) => {
      if (typeof updater === 'function') {
        const newState = updater({ pageIndex, pageSize });
        onPaginationChange?.(newState.pageIndex, newState.pageSize);
      } else {
        onPaginationChange?.(updater.pageIndex, updater.pageSize);
      }
    },
    manualPagination: true,
    enableRowSelection: true,
    onRowSelectionChange: setRowSelection,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    onColumnVisibilityChange: setColumnVisibility,
    onExpandedChange: setExpanded,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getExpandedRowModel: getExpandedRowModel(),
  });

  const handleExport = () => {
    const selectedRows = Object.keys(rowSelection).filter(
      (key) => rowSelection[key],
    );
    const selectedData = selectedRows.map((rowId) => data[Number(rowId)]);
    onExport?.(selectedData);
    setRowSelection({});
  };

  return (
    <div className="space-y-4">
      {!hideToolbar && <DataTableToolbar table={table} printSelectedRows={handleExport} onSearch={onSearch} />}
      <div className="rounded-md border">
        <Table>
          <TableHeader className="whitespace-nowrap">
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <TableHead key={header.id}>
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                        header.column.columnDef.header,
                        header.getContext(),
                      )}
                  </TableHead>
                ))}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {isLoading ? (
              <TableRow>
                <TableCell colSpan={columns.length} className="h-24 text-center">
                  <span className="loader" /> Loading...
                </TableCell>
              </TableRow>
            ) : data.length === 0 ? (
              <TableRow>
                <TableCell colSpan={columns.length} className="h-24 text-center overflow-hidden text-ellipsis">
                  {isLastPage ? "End of the Table" : "No results found"}
                </TableCell>
              </TableRow>
            ) : table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <React.Fragment key={row.id}>
                  <TableRow onClick={() => row.toggleExpanded()}>
                    {row.getVisibleCells().map((cell) => (
                      <TableCell
                        key={cell.id}
                        data-state={row.getIsSelected() && "selected"}
                        className="whitespace-nowrap overflow-hidden text-ellipsis"
                      >
                        {flexRender(
                          cell.column.columnDef.cell,
                          cell.getContext(),
                        )}
                      </TableCell>
                    ))}
                  </TableRow>

                  {row.getIsExpanded() && expandedContent && (
                    <TableRow>
                      <TableCell colSpan={columns.length}>
                        <div className="p-4 rounded-md bg-background text-foreground">
                          {expandedTitle && (
                            <h3 className="font-bold">{expandedTitle}</h3>
                          )}
                          {expandedContent(row.original)}
                        </div>
                      </TableCell>
                    </TableRow>
                  )}
                </React.Fragment>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center"
                >
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      {!hidePagination && <DataTablePagination table={table} />}
    </div>
  );
}
