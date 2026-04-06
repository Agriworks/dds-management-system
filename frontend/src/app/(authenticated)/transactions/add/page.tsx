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
import { AccountsDropdown } from "./new-transaction-form/accounts-dropdown";
import { useState } from "react";
import { Loader2 } from "lucide-react";
import { Textarea } from "@/components/ui/textarea";
import { useSession } from "next-auth/react";

const formSchema = z
  .object({
    mandal: z.string().min(1, { message: "Please select a mandal" }),
    village: z.string().min(1, { message: "Please select a village" }),
    customer: z.string().min(1, { message: "Please select a customer" }),
    accountId: z.string().min(1, { message: "Please select an account" }),
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
    comments: z.string().nullable(),
  });

export default function AddTransactionForm() {
  const { data: session } = useSession();
  const theToast = useToast();
  const [loading, setLoading] = useState(false);
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
  const [loadingTypes, setLoadingTypes] = useState<boolean>(false);
  

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      mandal: "",
      village: "",
      customer: "",
      accountId: "",
      amount: "",
      transactionType: "",
      transactionTypeId: "",
      comments: null,
    },
  });

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

  // account types are loaded inside the dropdown component

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

      const now = new Date();
      const transactionDate = new Date(
        now.getFullYear(),
        now.getMonth(),
        now.getDate(),
      );

      // Format the data for API submission
      const transactionData = {
        supervisor_id: supervisorId,
        member_id: values.customer,
        account_id: values.accountId,
        amount: parseInt(values.amount, 10),
        transaction_date: transactionDate.toISOString(),
        comments: values.comments || null,
        transaction_type_id: values.transactionTypeId,
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
                <CardTitle>సంఘం సభ్యుని వివరములు</CardTitle>
              </CardHeader>
              <CardContent className="grid gap-6">
                <div className="space-y-2">
                  <FormField
                    control={form.control}
                    name="mandal"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>
                          మండలం
                          <span className="text-destructive">*</span>
                        </FormLabel>
                        <FormControl>
                          <MandalDropdown
                            value={field.value}
                            onChange={(val) => {
                              field.onChange(val);
                              // Reset village, customer, and account when mandal changes
                              form.setValue("village", "");
                              form.setValue("customer", "");
                              form.setValue("accountId", "");
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
                          ఊరు
                          <span className="text-destructive">*</span>
                        </FormLabel>
                        <FormControl>
                          <VillageDropdown
                            mandalId={form.watch("mandal")}
                            value={field.value}
                            onChange={(val) => {
                              field.onChange(val);
                              // Reset customer and account when village changes
                              form.setValue("customer", "");
                              form.setValue("accountId", "");
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
                          సంఘం సభ్యులు
                          <span className="text-destructive">*</span>
                        </FormLabel>
                        <FormControl>
                          <CustomerDropdown
                            mandalId={form.watch("mandal")}
                            villageId={form.watch("village")}
                            value={field.value}
                            onChange={(val) => {
                              field.onChange(val);
                              // Reset account when customer changes
                              form.setValue("accountId", "");
                            }}
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
                    name="accountId"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>
                          ఖాతా
                          <span className="text-destructive">*</span>
                        </FormLabel>
                        <FormControl>
                          <AccountsDropdown
                            memberId={form.watch("customer")}
                            villageId={form.watch("village")}
                            value={field.value}
                            onChange={(accountId) => {
                              field.onChange(accountId);
                            }}
                            disabled={
                              !form.watch("customer") || !form.watch("village")
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
                        <FormLabel>ఇతర వివరములు</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="ఇతర వివరములు"
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
                <CardTitle>ట్రాన్సాక్షన్ వివరములు</CardTitle>
              </CardHeader>
              <CardContent className="grid gap-6">
                <div className="space-y-2">
                  <FormField
                    control={form.control}
                    name="amount"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>
                          అమౌంట్
                          <span className="text-destructive">*</span>
                        </FormLabel>
                        <FormControl>
                          <Input
                            type="number"
                            placeholder="రూపాయల్లో అమౌంట్ ఇవ్వండి"
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
                          ట్రాన్సాక్షన్ టైప్
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
                                    : "ట్రాన్సాక్షన్ టైప్ ఎంచుకోండి"
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

                <div className="flex flex-col sm:flex-row gap-3 pt-4">
                  <Button
                    type="submit"
                    className="w-full sm:w-auto font-medium"
                    disabled={loading}
                  >
                    {loading ? "ట్రాన్సాక్షన్ సృష్టించుతుంది..." : "ట్రాన్సాక్షన్ సృష్టించు"}
                  </Button>
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => form.reset()}
                    className="w-full sm:w-auto font-medium"
                    disabled={loading}
                  >
                    రీసెట్
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
