"use client";

import { useState, useEffect } from "react";
import { Search } from "lucide-react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { DatePickerWithRange } from "@/components/ui/date-picker-with-range";
import { cn } from "@/lib/utils";
import { DateRange } from "react-day-picker";
import { ContentLayout } from "@/components/admin-panel/content-layout";
import { getTransactions } from "@/lib/api-client";
import { DataTable } from "@/components/TableView/data-table";
import { columns } from "./columns";
import { TransactionWithNames } from "@/types/transaction";

const formSchema = z.object({
  memberId: z.string().optional(),
  supervisorId: z.string().optional(),
  type: z.enum(["DEPOSIT", "WITHDRAWL", "LOAN", "PAYBACK"]).optional(),
  dateRange: z.custom<DateRange>().optional(),
  amount: z.string().optional(),
});

export default function TransactionsPage() {
  const [transactions, setTransactions] = useState<TransactionWithNames[]>([]);
  const [loading, setLoading] = useState(false);
  const [pagination, setPagination] = useState({
    total: 0,
    limit: 10,
    offset: 0,
    hasMore: false,
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      memberId: "",
      supervisorId: "",
      type: undefined,
      amount: "",
    },
  });

  const fetchTransactions = async (params: {
    limit?: number;
    offset?: number;
    memberId?: string;
    supervisorId?: string;
    type?: "DEPOSIT" | "WITHDRAWL" | "LOAN" | "PAYBACK";
  }) => {
    setLoading(true);

    try {
      const result = await getTransactions(params);
      setTransactions(result.transactions);
      setPagination(result.pagination);
    } catch (err) {
      console.error("Error fetching transactions:", err);
    } finally {
      setLoading(false);
    }
  };

  // Load initial transactions
  useEffect(() => {
    fetchTransactions({ limit: 10, offset: 0 });
  }, []);

  function onSubmit(values: z.infer<typeof formSchema>) {
    const params: {
      limit: number;
      offset: number;
      memberId?: string;
      supervisorId?: string;
      type?: "DEPOSIT" | "WITHDRAWL" | "LOAN" | "PAYBACK";
    } = {
      limit: 10,
      offset: 0,
    };

    if (values.memberId) params.memberId = values.memberId;
    if (values.supervisorId) params.supervisorId = values.supervisorId;
    if (values.type) params.type = values.type;

    fetchTransactions(params);
  }

  const handlePageChange = (newOffset: number) => {
    const currentValues = form.getValues();
    const params: {
      limit: number;
      offset: number;
      memberId?: string;
      supervisorId?: string;
      type?: "DEPOSIT" | "WITHDRAWL" | "LOAN" | "PAYBACK";
    } = {
      limit: pagination.limit,
      offset: newOffset,
    };

    if (currentValues.memberId) params.memberId = currentValues.memberId;
    if (currentValues.supervisorId)
      params.supervisorId = currentValues.supervisorId;
    if (currentValues.type) params.type = currentValues.type;

    fetchTransactions(params);
  };

  return (
    <ContentLayout title="Transactions">
      <div className="p-4 sm:p-6 lg:p-8">
        {/* Search Form Card */}
        <Card className="mb-6 shadow-md bg-background">
          <CardHeader className="pb-4">
            <CardTitle className="text-lg sm:text-xl">
              Search Transactions
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="flex flex-col gap-4"
              >
                {/* Member and Supervisor Row */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                  <FormField
                    control={form.control}
                    name="memberId"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-sm font-medium">
                          Member ID (మెంబర్ ఐడి)
                        </FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Enter member ID"
                            className="w-full"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="supervisorId"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-sm font-medium">
                          Supervisor ID (సూపర్వైజర్ ఐడి)
                        </FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Enter supervisor ID"
                            className="w-full"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                {/* Transaction Type and Amount Row */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                  <FormField
                    control={form.control}
                    name="type"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-sm font-medium">
                          Transaction Type (ట్రాన్సాక్షన్ రకం)
                        </FormLabel>
                        <Select
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                        >
                          <FormControl>
                            <SelectTrigger className="w-full">
                              <SelectValue placeholder="Select transaction type" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="DEPOSIT">
                              Deposit (డిపాజిట్)
                            </SelectItem>
                            <SelectItem value="WITHDRAWL">
                              Withdrawal (విత్‌డ్రావల్)
                            </SelectItem>
                            <SelectItem value="LOAN">Loan (లోన్)</SelectItem>
                            <SelectItem value="PAYBACK">
                              Payback (పేబ్యాక్)
                            </SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="amount"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-sm font-medium">
                          Amount (అమౌంట్)
                        </FormLabel>
                        <FormControl>
                          <div className="relative w-full">
                            <div className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">
                              ₹
                            </div>
                            <Input
                              type="number"
                              placeholder="Enter amount"
                              className="pl-6 w-full"
                              {...field}
                              min={0}
                              step={0.01}
                            />
                          </div>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                {/* Date Range - Full Width */}
                <FormField
                  control={form.control}
                  name="dateRange"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-sm font-medium">
                        Date Range (డేట్ రేంజ్)
                      </FormLabel>
                      <FormControl className="w-full">
                        <div className="w-full">
                          <DatePickerWithRange
                            date={field.value}
                            setDate={field.onChange}
                            className="w-full"
                          />
                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row sm:gap-4 gap-3 mt-4">
                  <Button
                    type="submit"
                    disabled={loading}
                    className={cn(
                      "w-full sm:flex-1 text-xs sm:text-sm font-medium h-9 sm:h-10",
                      loading && "opacity-70",
                    )}
                  >
                    {loading ? (
                      <>Loading...</>
                    ) : (
                      <>
                        <Search className="h-4 w-4 sm:h-5 sm:w-5 mr-2" />
                        Search Transactions
                      </>
                    )}
                  </Button>
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => {
                      form.reset();
                      fetchTransactions({ limit: 10, offset: 0 });
                    }}
                    className="w-full sm:flex-1 text-xs sm:text-sm font-medium h-9 sm:h-10"
                  >
                    Reset
                  </Button>
                </div>
              </form>
            </Form>
          </CardContent>
        </Card>

        {/* Results Card */}
        <div className="shadow-md bg-background rounded-lg">
          <div className="pb-4 flex justify-between items-center border-b px-6 pt-6">
            <span className="text-lg sm:text-xl font-semibold">
              Transaction Results
            </span>
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
              onPaginationChange={(pageIndex, pageSize) => {
                handlePageChange(pageIndex * pageSize);
              }}
              hidePagination={true}
              hideToolbar={true}
            />
          </div>
        </div>
      </div>
    </ContentLayout>
  );
}
