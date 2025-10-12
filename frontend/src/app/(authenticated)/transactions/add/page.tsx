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
import { useSession } from "next-auth/react";

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
    transactionType: z
      .string()
      .min(1, { message: "Please select a transaction type" }),
    transactionTypeId: z
      .string()
      .min(1, { message: "Please select a transaction type" }),
    transactionSubtype: z.string().optional(),
    transactionSubtypeId: z.string().optional(),
    childSubtype: z.string().optional(),
    childSubtypeId: z.string().optional(),
    comments: z.string().nullable(),
  })
  .refine(
    () => {
      // If there are child subtypes available, child subtype is required
      // This will be checked dynamically in the component
      return true;
    },
    {
      message: "Please select all required subtype details",
      path: ["childSubtype"],
    },
  );

export default function AddTransactionForm() {
  const { data: session } = useSession();
  const theToast = useToast();
  const [loading, setLoading] = useState(false);
  const [calendarOpen, setCalendarOpen] = useState(false);
  // Backend-driven types
  type TransactionType = {
    id: string;
    name: string;
    label_english: string;
    label_telugu: string;
    parent_id?: string | null;
    description?: string;
  };
  const [mainTypes, setMainTypes] = useState<TransactionType[]>([]);
  const [subtypes, setSubtypes] = useState<TransactionType[]>([]);
  const [childSubtypes, setChildSubtypes] = useState<TransactionType[]>([]);
  const [loadingTypes, setLoadingTypes] = useState<boolean>(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      mandal: "",
      village: "",
      customer: "",
      amount: "",
      transactionType: "",
      transactionTypeId: "",
      transactionSubtype: "",
      transactionSubtypeId: "",
      childSubtype: undefined,
      childSubtypeId: undefined,
      comments: null,
    },
  });

  // Watch form values for dependent loading
  const selectedTransactionType = form.watch("transactionType");
  const selectedTransactionSubtype = form.watch("transactionSubtype");

  // Load main transaction types from backend
  useEffect(() => {
    const loadMainTypes = async () => {
      try {
        setLoadingTypes(true);
        const typesRes = await fetch("/api/transaction-types");
        if (typesRes.ok) {
          const typesData = await typesRes.json();
          const types: TransactionType[] = typesData?.data?.mainTypes ?? [];
          setMainTypes(types);
        }
      } catch (e) {
        console.error("Failed loading main transaction types", e);
      } finally {
        setLoadingTypes(false);
      }
    };
    loadMainTypes();
  }, []);

  // Reset subtypes when transaction type changes
  useEffect(() => {
    form.setValue("transactionSubtype", undefined);
    form.setValue("transactionSubtypeId", undefined);
    form.setValue("childSubtype", undefined);
    form.setValue("childSubtypeId", undefined);
    setSubtypes([]);
    setChildSubtypes([]);
  }, [selectedTransactionType, form]);

  // When user selects a transaction type, fetch subtypes from backend
  useEffect(() => {
    const fetchTransactionSubtypes = async () => {
      try {
        const selectedType = mainTypes.find(
          (t) => t.name === selectedTransactionType,
        );
        if (selectedType?.id) {
          const subRes = await fetch(
            `/api/transaction-types/subtypes?parentId=${selectedType.id}`,
          );
          if (subRes.ok) {
            const subData = await subRes.json();
            const subs: TransactionType[] = subData?.data?.subtypes ?? [];
            setSubtypes(subs);
          }
        }
      } catch (e) {
        console.error("Failed to fetch transaction subtypes", e);
      }
    };

    if (selectedTransactionType && mainTypes.length > 0) {
      fetchTransactionSubtypes();
    }
  }, [selectedTransactionType, mainTypes]);

  // Reset child subtypes when parent subtype changes
  useEffect(() => {
    form.setValue("childSubtype", undefined);
    form.setValue("childSubtypeId", undefined);
    setChildSubtypes([]);
  }, [selectedTransactionSubtype, form]);

  // When user selects a transaction subtype, check if it has child subtypes
  useEffect(() => {
    const fetchChildSubtypes = async () => {
      try {
        const selectedSubtype = subtypes.find(
          (s) => s.name === selectedTransactionSubtype,
        );
        if (selectedSubtype?.id) {
          const subRes = await fetch(
            `/api/transaction-types/subtypes?parentId=${selectedSubtype.id}`,
          );
          if (subRes.ok) {
            const subData = await subRes.json();
            const childs: TransactionType[] = subData?.data?.subtypes ?? [];
            setChildSubtypes(childs);
          }
        }
      } catch (e) {
        console.error("Failed to fetch child subtypes", e);
      }
    };

    if (selectedTransactionSubtype && subtypes.length > 0) {
      fetchChildSubtypes();
    }
  }, [selectedTransactionSubtype, subtypes]);

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      setLoading(true);

      // Get the supervisor ID from the logged-in user's session
      if (!session?.user?.id) {
        theToast.toast({
          title: "Error",
          description: "User session not found. Please log in again.",
          variant: "destructive",
          duration: 5000,
        });
        return;
      }

      const supervisorId = session.user.id;

      // Use the deepest subtype (child subtype if available, otherwise parent subtype, otherwise main type)
      const finalTypeId =
        values.childSubtypeId ||
        values.transactionSubtypeId ||
        values.transactionTypeId;

      // Format the data for API submission
      const transactionData = {
        supervised_by: supervisorId,
        member: values.customer,
        amount: parseInt(values.amount, 10),
        transaction_date: values.transactionDate.toISOString(),
        comments: values.comments || null,
        transaction_type_id: finalTypeId,
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
                          Member (మెంబర్)
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
                            onValueChange={(value) => {
                              const selectedType = mainTypes.find(
                                (t) => t.name === value,
                              );
                              field.onChange(value);
                              form.setValue(
                                "transactionTypeId",
                                selectedType?.id || "",
                              );
                            }}
                            value={field.value || undefined}
                            disabled={loadingTypes}
                          >
                            <SelectTrigger className="w-full">
                              <SelectValue
                                placeholder={
                                  loadingTypes
                                    ? "Loading transaction types..."
                                    : "Select transaction type"
                                }
                              />
                            </SelectTrigger>
                            <SelectContent>
                              {loadingTypes ? (
                                <div className="flex items-center justify-center py-2 px-3 text-sm text-muted-foreground">
                                  <Loader2 className="h-4 w-4 animate-spin mr-2" />{" "}
                                  Loading...
                                </div>
                              ) : (
                                mainTypes.map((t) => (
                                  <SelectItem key={t.id} value={t.name}>
                                    {t.label_english} ({t.label_telugu})
                                  </SelectItem>
                                ))
                              )}
                            </SelectContent>
                          </Select>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                {subtypes.length > 0 && (
                  <div className="space-y-2">
                    <FormField
                      control={form.control}
                      name="transactionSubtype"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>
                            Transaction Subtype (ట్రాన్సాక్షన్ సబ్‌టైప్)
                            <span className="text-destructive">*</span>
                          </FormLabel>
                          <FormControl>
                            <Select
                              onValueChange={(value) => {
                                const selectedSubtype = subtypes.find(
                                  (s) => s.name === value,
                                );
                                field.onChange(value);
                                form.setValue(
                                  "transactionSubtypeId",
                                  selectedSubtype?.id || "",
                                );
                              }}
                              value={field.value || undefined}
                              disabled={loadingTypes}
                            >
                              <SelectTrigger className="w-full">
                                <SelectValue
                                  placeholder={
                                    loadingTypes
                                      ? "Loading subtypes..."
                                      : "Select transaction subtype"
                                  }
                                />
                              </SelectTrigger>
                              <SelectContent>
                                {loadingTypes ? (
                                  <div className="flex items-center justify-center py-2 px-3 text-sm text-muted-foreground">
                                    <Loader2 className="h-4 w-4 animate-spin mr-2" />{" "}
                                    Loading...
                                  </div>
                                ) : (
                                  subtypes.map((s) => (
                                    <SelectItem key={s.id} value={s.name}>
                                      {s.label_english} ({s.label_telugu})
                                    </SelectItem>
                                  ))
                                )}
                              </SelectContent>
                            </Select>
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                )}

                {childSubtypes.length > 0 && (
                  <div className="space-y-2">
                    <FormField
                      control={form.control}
                      name="childSubtype"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>
                            Subtype Detail (సబ్‌టైప్ వివరాలు)
                            <span className="text-destructive">*</span>
                          </FormLabel>
                          <FormControl>
                            <Select
                              onValueChange={(value) => {
                                const selectedChild = childSubtypes.find(
                                  (s) => s.name === value,
                                );
                                field.onChange(value);
                                form.setValue(
                                  "childSubtypeId",
                                  selectedChild?.id || undefined,
                                );
                              }}
                              value={field.value || undefined}
                              disabled={loadingTypes}
                            >
                              <SelectTrigger className="w-full">
                                <SelectValue
                                  placeholder={
                                    loadingTypes
                                      ? "Loading subtypes..."
                                      : "Select subtype detail"
                                  }
                                />
                              </SelectTrigger>
                              <SelectContent>
                                {loadingTypes ? (
                                  <div className="flex items-center justify-center py-2 px-3 text-sm text-muted-foreground">
                                    <Loader2 className="h-4 w-4 animate-spin mr-2" />{" "}
                                    Loading...
                                  </div>
                                ) : (
                                  childSubtypes.map((s) => (
                                    <SelectItem key={s.id} value={s.name}>
                                      {s.label_english} ({s.label_telugu})
                                    </SelectItem>
                                  ))
                                )}
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
