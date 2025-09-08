"use client"
import { useEffect } from "react"
import {useForm} from "react-hook-form"
import {zodResolver} from "@hookform/resolvers/zod"
import {z} from "zod"
import {Button} from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "@/components/ui/select"
import { createTransaction } from "@/lib/api-client"
import { Input } from "@/components/ui/input"
import { ContentLayout } from "@/components/admin-panel/content-layout"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { useToast } from "@/hooks/use-toast"
import { MandalDropdown } from "./new-transaction-form/mandals-dropdown";
import { VillageDropdown } from "./new-transaction-form/villages-dropdown";
import { CustomerDropdown } from "./new-transaction-form/customer-search";
import { useState } from "react"
import { Loader2 } from "lucide-react"

const formSchema = z.object({
  mandal: z.string().min(1, { message: "Please select a mandal" }),
  village: z.string().min(1, { message: "Please select a village" }),
  customer: z.string().min(1, { message: "Please select a customer" }),
  transactionDate: z.date({ message: "Please select a transaction date" }),
  amount: z.string().min(1, { message: "Please enter an amount" }).refine(
    (val) => !isNaN(Number(val)) && Number(val) > 0,
    { message: "Amount must be a positive number" }
  ),
  transactionType: z.enum(["DEPOSIT", "WITHDRAWL", "LOAN", "PAYBACK"], {
    message: "Please select a transaction type"
  }),
  loanType: z.enum(["LIVESTOCK", "INDIVIDUAL", "LAAGODI"]).nullable(),
  fundType: z.enum(["DDS_FUNDS", "PROJECT_FUNDS"]).nullable(),
  comments: z.string().nullable()
}).refine((data) => {
  // Make loanType required when transactionType is LOAN
  if (data.transactionType === "LOAN" && !data.loanType) {
    return false;
  }
  // Make fundType required when loanType is LAAGODI
  if (data.loanType === "LAAGODI" && !data.fundType) {
    return false;
  }
  return true;
}, {
  message: "Please complete all required fields",
  path: ["loanType"] // This will show the error on the loanType field
});

export default function AddTransactionForm() {
  const theToast = useToast();
  const [loading, setLoading] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      mandal: '',
      village: '',
      customer: '',
      amount: '',
      transactionType: undefined,
      loanType: null,
      fundType: null,
      comments: null,
    },
  });

  // Watch form values for dependent loading
  const selectedTransactionType = form.watch('transactionType');
  const selectedLoanType = form.watch('loanType');

  // Reset loan type when transaction type changes (if not LOAN)
  useEffect(() => {
    if (selectedTransactionType !== "LOAN") {
      form.setValue('loanType', null);
      form.setValue('fundType', null);
    }
  }, [selectedTransactionType, form]);

  // Reset fund type when loan type changes (if not LAAGODI)
  useEffect(() => {
    if (selectedLoanType !== "LAAGODI") {
      form.setValue('fundType', null);
    }
  }, [selectedLoanType, form]);

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      setLoading(true);
      // TODO: For now we'll use a default supervisor ID
      // In a real app, this would come from the logged-in user's session
      const defaultSupervisorId = "22222222-2222-2222-2222-222222222221";
      
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
      
      console.log('Submitting transaction:', transactionData);
      
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
      <div className="px-4 sm:px-6 lg:px-8 py-6 w-full flex justify-center">
        <div className="w-full max-w-4xl">
          <div className="mb-6">
            <p className="text-muted-foreground text-sm">
              Create a new financial transaction for a member in the DDS system.
            </p>
          </div>

          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              
              {/* Customer Selection Card */}
              <Card className="shadow-md bg-background">
                <CardHeader>
                  <CardTitle className="text-lg">Customer Selection</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <FormField
                    control={form.control}
                    name="mandal"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>
                          Mandal (మండల్) <span className="text-destructive">*</span>
                        </FormLabel>
                        <MandalDropdown value={field.value} onChange={(val) => {
                          field.onChange(val);
                          // Reset village and customer when mandal changes
                          form.setValue('village', '');
                          form.setValue('customer', '');
                        }} />
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="village"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>
                          Village (విలేజ్) <span className="text-destructive">*</span>
                        </FormLabel>
                        <VillageDropdown
                          mandalId={form.watch('mandal')}
                          value={field.value}
                          onChange={(val) => {
                            field.onChange(val);
                            // Reset customer when village changes
                            form.setValue('customer', '');
                          }}
                          disabled={!form.watch('mandal')}
                        />
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="customer"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>
                          Customer (కస్టమర్) <span className="text-destructive">*</span>
                        </FormLabel>
                        <CustomerDropdown
                          mandalId={form.watch('mandal')}
                          villageId={form.watch('village')}
                          value={field.value}
                          onChange={field.onChange}
                          disabled={!form.watch('mandal') || !form.watch('village')}
                        />
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </CardContent>
              </Card>

              {/* Transaction Details Card */}
              <Card className="shadow-md bg-background">
                <CardHeader>
                  <CardTitle className="text-lg">Transaction Details</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <FormField
                      control={form.control}
                      name="transactionDate"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>
                            Transaction Date (ట్రాన్సాక్షన్ డేట్) <span className="text-destructive">*</span>
                          </FormLabel>
                          <FormControl>
                            <Input
                              type="date"
                              className="w-full"
                              value={field.value ? new Date(field.value).toISOString().split('T')[0] : ''}
                              onChange={(e) => {
                                if (e.target.value) {
                                  field.onChange(new Date(e.target.value));
                                }
                              }}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="amount"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>
                            Amount (అమౌంట్) <span className="text-destructive">*</span>
                          </FormLabel>
                          <FormControl>
                            <Input
                              type="number"
                              className="w-full"
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

                  <FormField
                    control={form.control}
                    name="transactionType"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>
                          Transaction Type (ట్రాన్సాక్షన్ టైప్) <span className="text-destructive">*</span>
                        </FormLabel>
                        <Select onValueChange={field.onChange} value={field.value ?? ""}>
                          <FormControl>
                            <SelectTrigger className="w-full">
                              <SelectValue placeholder="Select transaction type" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="DEPOSIT">Deposit</SelectItem>
                            <SelectItem value="WITHDRAWL">Withdrawal</SelectItem>
                            <SelectItem value="LOAN">Loan</SelectItem>
                            <SelectItem value="PAYBACK">Payback</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  {selectedTransactionType === "LOAN" && (
                    <FormField
                      control={form.control}
                      name="loanType"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>
                            Loan Type (లోన్ టైప్) <span className="text-destructive">*</span>
                          </FormLabel>
                          <Select onValueChange={field.onChange} value={field.value || undefined}>
                            <FormControl>
                              <SelectTrigger className="w-full">
                                <SelectValue placeholder="Select loan type" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="LIVESTOCK">Livestock</SelectItem>
                              <SelectItem value="INDIVIDUAL">Individual</SelectItem>
                              <SelectItem value="LAAGODI">Laagodi</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  )}

                  {selectedLoanType === "LAAGODI" && (
                    <FormField
                      control={form.control}
                      name="fundType"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>
                            Fund Type (ఫండ్ టైప్) <span className="text-destructive">*</span>
                          </FormLabel>
                          <Select onValueChange={field.onChange} value={field.value || undefined}>
                            <FormControl>
                              <SelectTrigger className="w-full">
                                <SelectValue placeholder="Select fund type" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="DDS_FUNDS">DDS Funds</SelectItem>
                              <SelectItem value="PROJECT_FUNDS">Project Funds</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  )}
                </CardContent>
              </Card>

              {/* Comments Card */}
              <Card className="shadow-md bg-background">
                <CardHeader>
                  <CardTitle className="text-lg">Additional Information</CardTitle>
                </CardHeader>
                <CardContent>
                  <FormField
                    control={form.control}
                    name="comments"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Comments (కామెంట్స్)</FormLabel>
                        <FormControl>
                          <Input
                            className="w-full"
                            placeholder="Any additional comments"
                            {...field}
                            value={field.value || ''}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </CardContent>
              </Card>

              <div className="flex flex-col sm:flex-row gap-3 pt-4">
                <Button type="submit" className="w-full sm:w-auto font-medium">Submit</Button>
                <Button type="button" variant="outline" onClick={() => form.reset()} className="w-full sm:w-auto font-medium">Reset</Button>
              </div>
            </form>
          </Form>
        </div>
      </div>
    </ContentLayout>
  )
}