"use client";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
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
import { createTransaction } from "@/lib/api-client";
import { Input } from "@/components/ui/input";
import { ContentLayout } from "@/components/admin-panel/content-layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { MandalDropdown } from "./new-transaction-form/mandals-dropdown";
import { VillageDropdown } from "./new-transaction-form/villages-dropdown";
import { CustomerDropdown } from "./new-transaction-form/customer-search";
import { useState } from "react";
import { Loader2, CalendarIcon } from "lucide-react";
import { Textarea } from "@/components/ui/textarea";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { format } from "date-fns";

const formSchema = z
  .object({
    mandal: z.string().min(1, { message: "Please select a mandal" }),
    village: z.string().min(1, { message: "Please select a village" }),
    customer: z.string().min(1, { message: "Please select a customer" }),
    transactionDate: z.date({ message: "Please select a transaction date" }),
    amount: z
      .string()
      .min(1, { message: "Please enter an amount" })
      .refine((val) => !isNaN(Number(val)) && Number(val) > 0, {
        message: "Amount must be a positive number",
      }),
    transactionType: z.enum(["DEPOSIT", "WITHDRAWL", "LOAN", "PAYBACK"], {
      message: "Please select a transaction type",
    }),
    loanType: z.enum(["LIVESTOCK", "INDIVIDUAL", "LAAGODI"]).nullable(),
    fundType: z.enum(["DDS_FUNDS", "PROJECT_FUNDS"]).nullable(),
    comments: z.string().nullable(),
  })
  .refine(
    (data) => {
      // Make loanType required when transactionType is LOAN
      if (data.transactionType === "LOAN" && !data.loanType) {
        return false;
      }
      // Make fundType required when loanType is LAAGODI
      if (data.loanType === "LAAGODI" && !data.fundType) {
        return false;
      }
      return true;
    },
    {
      message: "Please complete all required fields",
      path: ["loanType"], // This will show the error on the loanType field
    },
  );

export default function AddTransactionForm() {
  const theToast = useToast();
  const [loading, setLoading] = useState(false);
  const [calendarOpen, setCalendarOpen] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      mandal: "",
      village: "",
      customer: "",
      amount: "",
      transactionType: undefined,
      loanType: null,
      fundType: null,
      comments: null,
    },
  });

  // Watch form values for dependent loading
  const selectedTransactionType = form.watch("transactionType");
  const selectedLoanType = form.watch("loanType");

  // Reset loan type when transaction type changes (if not LOAN)
  useEffect(() => {
    if (selectedTransactionType !== "LOAN") {
      form.setValue("loanType", null);
      form.setValue("fundType", null);
    }
  }, [selectedTransactionType, form]);

  // Reset fund type when loan type changes (if not LAAGODI)
  useEffect(() => {
    if (selectedLoanType !== "LAAGODI") {
      form.setValue("fundType", null);
    }
  }, [selectedLoanType, form]);

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      setLoading(true);
      // TODO: For now we'll use a default supervisor ID
      // In a real app, this would come from the logged-in user's session
      const defaultSupervisorId = "d7e868c6-a19b-4680-b846-575a1d9c2c06";

      // Format the data for API submission
      const transactionData = {
        supervised_by: defaultSupervisorId,
        member: values.customer,
        type: values.transactionType,
        amount: parseInt(values.amount, 10),
        transaction_date: values.transactionDate.toISOString(),
        comments: values.comments || null,
        loan_type: values.loanType || null,
        fund_type: values.fundType || null,
      };

      console.log("Submitting transaction:", transactionData);

      // Submit to API
      const result = await createTransaction(transactionData);

      // Show the created transaction details in a single toast
      theToast.toast({
        title: "Transaction created successfully!",
        description: `ID: ${result.id}\nAmount: ₹${result.amount}\nType: ${result.type}\nMember: ${result.member_name}`,
        duration: 5000,
      });

      // Reset form
      form.reset();
    } catch (error) {
      console.error("Form submission error", error);
      theToast.toast({
        title: "Error",
        description: "Failed to submit the transaction. Please try again.",
        variant: "destructive",
        duration: 5000,
      });
    } finally {
      setLoading(false);
    }
  }

  return (
    <ContentLayout title="Add New Transaction">
      {loading && (
        <div className="absolute inset-0 bg-background/80 flex items-center justify-center z-50 rounded-md">
          <Loader2 className="h-8 w-8 animate-spin text-primary" />
        </div>
      )}
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="h-full flex flex-col space-y-6 p-6"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card className="bg-background shadow-none">
              <CardHeader>
                <CardTitle>Customer Information</CardTitle>
              </CardHeader>
              <CardContent className="grid gap-6">
                <div className="space-y-2">
                  <FormField
                    control={form.control}
                    name="mandal"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>
                          Mandal (మండల్)
                          <span className="text-destructive">*</span>
                        </FormLabel>
                        <FormControl>
                          <MandalDropdown
                            value={field.value}
                            onChange={(val) => {
                              field.onChange(val);
                              // Reset village and customer when mandal changes
                              form.setValue("village", "");
                              form.setValue("customer", "");
                            }}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <div className="space-y-2">
                  <FormField
                    control={form.control}
                    name="village"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>
                          Village (విలేజ్)
                          <span className="text-destructive">*</span>
                        </FormLabel>
                        <FormControl>
                          <VillageDropdown
                            mandalId={form.watch("mandal")}
                            value={field.value}
                            onChange={(val) => {
                              field.onChange(val);
                              // Reset customer when village changes
                              form.setValue("customer", "");
                            }}
                            disabled={!form.watch("mandal")}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <div className="space-y-2">
                  <FormField
                    control={form.control}
                    name="customer"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>
                          Customer (కస్టమర్)
                          <span className="text-destructive">*</span>
                        </FormLabel>
                        <FormControl>
                          <CustomerDropdown
                            mandalId={form.watch("mandal")}
                            villageId={form.watch("village")}
                            value={field.value}
                            onChange={field.onChange}
                            disabled={
                              !form.watch("mandal") || !form.watch("village")
                            }
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <div className="space-y-2">
                  <FormField
                    control={form.control}
                    name="comments"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Comments (కామెంట్స్)</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="Any additional comments"
                            {...field}
                            value={field.value || ""}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </CardContent>
            </Card>

            <Card className="bg-background shadow-none">
              <CardHeader>
                <CardTitle>Transaction Details</CardTitle>
              </CardHeader>
              <CardContent className="grid gap-6">
                <div className="space-y-2">
                  <FormField
                    control={form.control}
                    name="transactionDate"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>
                          Transaction Date (ట్రాన్సాక్షన్ డేట్)
                          <span className="text-destructive">*</span>
                        </FormLabel>
                        <FormControl>
                          <Popover
                            open={calendarOpen}
                            onOpenChange={setCalendarOpen}
                          >
                            <PopoverTrigger asChild>
                              <Button
                                variant="outline"
                                className={cn(
                                  "w-full justify-start text-left font-normal h-10 px-3 py-2",
                                  !field.value && "text-muted-foreground",
                                )}
                              >
                                <span className="text-sm">
                                  {field.value
                                    ? format(new Date(field.value), "PPP")
                                    : "Select transaction date"}
                                </span>
                                <CalendarIcon className="h-4 w-4 opacity-50 ml-auto" />
                              </Button>
                            </PopoverTrigger>
                            <PopoverContent
                              className="w-auto p-0"
                              align="start"
                            >
                              <Calendar
                                mode="single"
                                selected={
                                  field.value
                                    ? new Date(field.value)
                                    : undefined
                                }
                                onSelect={(date) => {
                                  if (date) {
                                    field.onChange(date);
                                    setCalendarOpen(false);
                                  }
                                }}
                                initialFocus
                              />
                            </PopoverContent>
                          </Popover>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <div className="space-y-2">
                  <FormField
                    control={form.control}
                    name="amount"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>
                          Amount (అమౌంట్)
                          <span className="text-destructive">*</span>
                        </FormLabel>
                        <FormControl>
                          <Input
                            type="number"
                            placeholder="Enter amount in rupees"
                            min="0"
                            step="1"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <div className="space-y-2">
                  <FormField
                    control={form.control}
                    name="transactionType"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>
                          Transaction Type (ట్రాన్సాక్షన్ టైప్)
                          <span className="text-destructive">*</span>
                        </FormLabel>
                        <FormControl>
                          <Select
                            onValueChange={field.onChange}
                            value={field.value ?? ""}
                          >
                            <SelectTrigger className="w-full">
                              <SelectValue placeholder="Select transaction type" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="DEPOSIT">Deposit</SelectItem>
                              <SelectItem value="WITHDRAWL">
                                Withdrawal
                              </SelectItem>
                              <SelectItem value="LOAN">Loan</SelectItem>
                              <SelectItem value="PAYBACK">Payback</SelectItem>
                            </SelectContent>
                          </Select>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                {selectedTransactionType === "LOAN" && (
                  <div className="space-y-2">
                    <FormField
                      control={form.control}
                      name="loanType"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>
                            Loan Type (లోన్ టైప్)
                            <span className="text-destructive">*</span>
                          </FormLabel>
                          <FormControl>
                            <Select
                              onValueChange={field.onChange}
                              value={field.value || undefined}
                            >
                              <SelectTrigger className="w-full">
                                <SelectValue placeholder="Select loan type" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="LIVESTOCK">
                                  Livestock
                                </SelectItem>
                                <SelectItem value="INDIVIDUAL">
                                  Individual
                                </SelectItem>
                                <SelectItem value="LAAGODI">Laagodi</SelectItem>
                              </SelectContent>
                            </Select>
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                )}

                {selectedLoanType === "LAAGODI" && (
                  <div className="space-y-2">
                    <FormField
                      control={form.control}
                      name="fundType"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>
                            Fund Type (ఫండ్ టైప్)
                            <span className="text-destructive">*</span>
                          </FormLabel>
                          <FormControl>
                            <Select
                              onValueChange={field.onChange}
                              value={field.value || undefined}
                            >
                              <SelectTrigger className="w-full">
                                <SelectValue placeholder="Select fund type" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="DDS_FUNDS">
                                  DDS Funds
                                </SelectItem>
                                <SelectItem value="PROJECT_FUNDS">
                                  Project Funds
                                </SelectItem>
                              </SelectContent>
                            </Select>
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                )}

                <div className="flex flex-col sm:flex-row gap-3 pt-4">
                  <Button
                    type="submit"
                    className="w-full sm:w-auto font-medium"
                    disabled={loading}
                  >
                    {loading ? "Creating Transaction..." : "Create Transaction"}
                  </Button>
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => form.reset()}
                    className="w-full sm:w-auto font-medium"
                    disabled={loading}
                  >
                    Reset
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </form>
      </Form>
    </ContentLayout>
  );
}
