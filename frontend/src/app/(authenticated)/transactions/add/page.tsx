"use client";

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
import { useState, useMemo } from "react";
import { Loader2, Plus } from "lucide-react";
import Link from "next/link";
import { Textarea } from "@/components/ui/textarea";
import { useSession } from "next-auth/react";
import { useLanguage } from "@/i18n/LanguageContext";

interface FormSchemaValues {
  mandal: string;
  village: string;
  customer: string;
  accountId: string;
  amount: string;
  transactionType: "credit" | "debit";
  comments: string | null;
}

export default function AddTransactionForm() {
  const { data: session } = useSession();
  const theToast = useToast();
  const [loading, setLoading] = useState(false);
  const { t } = useLanguage();

  const formSchema = useMemo(() => z
    .object({
      mandal: z.string().min(1, { message: t.validation.mandalRequired }),
      village: z.string().min(1, { message: t.validation.villageRequired }),
      customer: z.string().min(1, { message: t.validation.customerRequired }),
      accountId: z.string().min(1, { message: t.validation.accountRequired }),
      amount: z
        .string()
        .min(1, { message: t.validation.amountRequired })
        .refine((val) => !isNaN(Number(val)) && Number(val) > 0, {
          message: t.validation.amountPositive,
        }),
      transactionType: z.enum(["credit", "debit"], {
        errorMap: () => ({ message: t.validation.txTypeRequired }),
      }),
      comments: z.string().nullable(),
    }), [t]);

  const form = useForm<FormSchemaValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      mandal: "",
      village: "",
      customer: "",
      accountId: "",
      amount: "",
      transactionType: undefined,
      comments: null,
    },
  });

  async function onSubmit(values: FormSchemaValues) {
    try {
      setLoading(true);

      if (!session?.user?.id) {
        theToast.toast({
          title: t.transactionAdd.errorTitle,
          description: t.transactionAdd.sessionError,
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

      const transactionData = {
        supervisor_id: supervisorId,
        member_id: values.customer,
        account_id: values.accountId,
        amount: parseInt(values.amount, 10),
        transaction_date: transactionDate.toISOString(),
        comments: values.comments || null,
        transaction_type: values.transactionType,
      };

      const result = await createTransaction(transactionData);

      theToast.toast({
        title: t.transactionAdd.successTitle,
        description: `ID: ${result.id}\n${t.transactionsBrowse.colAmount}: ₹${result.amount}\n${t.transactionsBrowse.colType}: ${result.type}\n${t.membersBrowse.colName}: ${result.member_name}`,
        duration: 5000,
      });

      form.reset();
    } catch (error) {
      console.error("Form submission error", error);
      theToast.toast({
        title: t.transactionAdd.errorTitle,
        description: t.transactionAdd.errorDesc,
        variant: "destructive",
        duration: 5000,
      });
    } finally {
      setLoading(false);
    }
  }

  return (
    <ContentLayout title={t.transactionAdd.title}>
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
          <div className="grid min-w-0 grid-cols-1 gap-6 lg:grid-cols-2">
            <Card className="min-w-0 overflow-hidden bg-background shadow-none">
              <CardHeader>
                <CardTitle>{t.transactionAdd.cardMember}</CardTitle>
              </CardHeader>
              <CardContent className="grid min-w-0 gap-6">
                <div className="space-y-2">
                  <FormField
                    control={form.control}
                    name="mandal"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>
                          {t.transactionAdd.mandal}
                          <span className="text-destructive">*</span>
                        </FormLabel>
                        <FormControl>
                          <MandalDropdown
                            value={field.value}
                            onChange={(val) => {
                              field.onChange(val);
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
                          {t.transactionAdd.village}
                          <span className="text-destructive">*</span>
                        </FormLabel>
                        <FormControl>
                          <VillageDropdown
                            mandalId={form.watch("mandal")}
                            value={field.value}
                            onChange={(val) => {
                              field.onChange(val);
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
                          {t.transactionAdd.member}
                          <span className="text-destructive">*</span>
                        </FormLabel>
                        <div className="flex min-w-0 items-start gap-2">
                          <div className="min-w-0 flex-1">
                          <FormControl>
                            <CustomerDropdown
                              mandalId={form.watch("mandal")}
                              villageId={form.watch("village")}
                              value={field.value}
                              onChange={(val) => {
                                field.onChange(val);
                                form.setValue("accountId", "");
                              }}
                              onVillageChange={(memberVillageId) => {
                                form.setValue("village", memberVillageId);
                                form.setValue("accountId", "");
                              }}
                              disabled={
                                !form.watch("mandal") || !form.watch("village")
                              }
                            />
                          </FormControl>
                          </div>
                          <Button
                            type="button"
                            variant="outline"
                            size="icon"
                            className="shrink-0"
                            asChild
                            disabled={!form.watch("mandal") || !form.watch("village")}
                          >
                            <Link href="/members/add" title={t.nav.addMember}>
                              <Plus className="h-4 w-4" />
                            </Link>
                          </Button>
                        </div>
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
                        <FormLabel>{t.transactionAdd.comments}</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder={t.transactionAdd.commentsPlaceholder}
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

            <Card className="min-w-0 overflow-hidden bg-background shadow-none">
              <CardHeader>
                <CardTitle>{t.transactionAdd.cardTransaction}</CardTitle>
              </CardHeader>
              <CardContent className="grid min-w-0 gap-6">
                <div className="space-y-2">
                  <FormField
                    control={form.control}
                    name="amount"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>
                          {t.transactionAdd.amount}
                          <span className="text-destructive">*</span>
                        </FormLabel>
                        <FormControl>
                          <Input
                            type="number"
                            placeholder={t.transactionAdd.amountPlaceholder}
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
                    name="accountId"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>
                          {t.transactionAdd.account}
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
                    name="transactionType"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>
                          {t.transactionAdd.txType}
                          <span className="text-destructive">*</span>
                        </FormLabel>
                        <FormControl>
                          <Select
                            onValueChange={field.onChange}
                            value={field.value || undefined}
                          >
                            <SelectTrigger className="w-full">
                              <SelectValue placeholder={t.transactionAdd.txTypePlaceholder} />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="credit">{t.transactionAdd.creditOption}</SelectItem>
                              <SelectItem value="debit">{t.transactionAdd.debitOption}</SelectItem>
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
                    {loading ? t.transactionAdd.submittingBtn : t.transactionAdd.submitBtn}
                  </Button>
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => form.reset()}
                    className="w-full sm:w-auto font-medium"
                    disabled={loading}
                  >
                    {t.transactionAdd.resetBtn}
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
