"use client"
import { useState, useEffect } from "react"
import {
  toast
} from "sonner"
import {
  useForm
} from "react-hook-form"
import {
  zodResolver
} from "@hookform/resolvers/zod"
import {
  z
} from "zod"
import {
  Button
} from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
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
import { getMandals, getVillages, getCustomers } from "@/lib/api-client"
import { Mandal, Village, Customer } from "@/types/api"
import { Input } from "@/components/ui/input"

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
  const [mandals, setMandals] = useState<Mandal[]>([]);
  const [villages, setVillages] = useState<Village[]>([]);
  const [customers, setCustomers] = useState<Customer[]>([]);
  const [loadingMandals, setLoadingMandals] = useState(false);
  const [loadingVillages, setLoadingVillages] = useState(false);
  const [loadingCustomers, setLoadingCustomers] = useState(false);

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
  const selectedMandal = form.watch('mandal');
  const selectedVillage = form.watch('village');
  const selectedTransactionType = form.watch('transactionType');
  const selectedLoanType = form.watch('loanType');

  // Load mandals on component mount
  useEffect(() => {
    loadMandals();
  }, []);

  // Load villages when mandal changes
  useEffect(() => {
    if (selectedMandal) {
      loadVillages(selectedMandal);
      // Reset village and customer when mandal changes
      form.setValue('village', '');
      form.setValue('customer', '');
      setCustomers([]);
    } else {
      setVillages([]);
      setCustomers([]);
    }
  }, [selectedMandal, form]);

  // Load customers when village changes
  useEffect(() => {
    if (selectedVillage && selectedMandal) {
      loadCustomers(selectedVillage, selectedMandal);
      // Reset customer when village changes
      form.setValue('customer', '');
    } else {
      setCustomers([]);
    }
  }, [selectedVillage, selectedMandal, form]);

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

  const loadMandals = async () => {
    try {
      setLoadingMandals(true);
      const fetchedMandals = await getMandals();
      setMandals(fetchedMandals);
    } catch (error) {
      console.error('Error loading mandals:', error);
      toast.error('Failed to load mandals');
    } finally {
      setLoadingMandals(false);
    }
  };

  const loadVillages = async (mandalId: string) => {
    try {
      setLoadingVillages(true);
      const fetchedVillages = await getVillages({ mandalId });
      setVillages(fetchedVillages);
    } catch (error) {
      console.error('Error loading villages:', error);
      toast.error('Failed to load villages');
    } finally {
      setLoadingVillages(false);
    }
  };

  const loadCustomers = async (villageId: string, mandalId: string) => {
    try {
      setLoadingCustomers(true);
      const { customers: fetchedCustomers } = await getCustomers({
        villageId,
        mandalId,
        limit: '50', // Load up to 50 customers for the dropdown
      });
      setCustomers(fetchedCustomers);
    } catch (error) {
      console.error('Error loading customers:', error);
      toast.error('Failed to load customers');
    } finally {
      setLoadingCustomers(false);
    }
  };

  function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      // Format the data for API submission
      const submissionData = {
        ...values,
        transactionDate: values.transactionDate?.toISOString(),
        amount: parseInt(values.amount, 10), // Convert to integer as per schema
      };
      
      console.log('Submitting transaction:', submissionData);
      
      // Here you would typically send to your API endpoint
      // await createTransaction(submissionData);
      
      toast.success("Transaction submitted successfully!");
      
      // Show formatted data for now
      toast(
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(submissionData, null, 2)}</code>
        </pre>
      );
    } catch (error) {
      console.error("Form submission error", error);
      toast.error("Failed to submit the transaction. Please try again.");
    }
  }

  return (
    <div className="container mx-auto py-6">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold">Add New Transaction</h1>
          <p className="text-muted-foreground mt-2">
            Create a new financial transaction for a member in the DDS system.
          </p>
        </div>
        
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <FormField
          control={form.control}
          name="mandal"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Mandal *</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder={loadingMandals ? "Loading mandals..." : "Select a mandal"} />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {mandals.map((mandal) => (
                    <SelectItem key={mandal.id} value={mandal.id}>
                      {mandal.name} ({mandal.district})
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <FormDescription>Step 1: Select the Mandal of the Customer</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        
        <FormField
          control={form.control}
          name="village"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Village *</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value} disabled={!selectedMandal}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder={
                      !selectedMandal 
                        ? "Select a mandal first" 
                        : loadingVillages 
                        ? "Loading villages..." 
                        : "Select a village"
                    } />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {villages.map((village) => (
                    <SelectItem key={village.id} value={village.id}>
                      {village.name} {village.pincode && `(${village.pincode})`}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <FormDescription>Step 2: Select a village to display the customers</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        
        <FormField
          control={form.control}
          name="customer"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Customer *</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value} disabled={!selectedVillage}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder={
                      !selectedVillage 
                        ? "Select a village first" 
                        : loadingCustomers 
                        ? "Loading customers..." 
                        : customers.length === 0 
                        ? "No customers found" 
                        : "Select a customer"
                    } />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {customers.map((customer) => (
                    <SelectItem key={customer.id} value={customer.id}>
                      {customer.name} ({customer.phone})
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <FormDescription>Select the name of the customer</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
            </div>

            {/* Transaction Details Section */}
            <div className="space-y-6">
              <h3 className="text-lg font-semibold">Transaction Details</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        
        <FormField
          control={form.control}
          name="transactionDate"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Transaction Date *</FormLabel>
              <FormControl>
                <Input
                  type="date"
                  value={field.value ? new Date(field.value).toISOString().split('T')[0] : ''}
                  onChange={(e) => {
                    if (e.target.value) {
                      field.onChange(new Date(e.target.value));
                    }
                  }}
                />
              </FormControl>
              <FormDescription>Select the date when this transaction occurred</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="amount"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Amount (₹) *</FormLabel>
              <FormControl>
                <Input
                  type="number"
                  placeholder="Enter amount"
                  min="0"
                  step="1"
                  {...field}
                />
              </FormControl>
              <FormDescription>Enter the transaction amount in rupees</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="transactionType"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Transaction Type *</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
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
              <FormDescription>Select the type of transaction</FormDescription>
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
                <FormLabel>Loan Type *</FormLabel>
                <Select onValueChange={field.onChange} value={field.value || undefined}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select loan type" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="LIVESTOCK">Livestock</SelectItem>
                    <SelectItem value="INDIVIDUAL">Individual</SelectItem>
                    <SelectItem value="LAAGODI">Laagodi</SelectItem>
                  </SelectContent>
                </Select>
                <FormDescription>Select the type of loan (required for loan transactions)</FormDescription>
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
                <FormLabel>Fund Type *</FormLabel>
                <Select onValueChange={field.onChange} value={field.value || undefined}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select fund type" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="DDS_FUNDS">DDS Funds</SelectItem>
                    <SelectItem value="PROJECT_FUNDS">Project Funds</SelectItem>
                  </SelectContent>
                </Select>
                <FormDescription>Select the fund type (required for Laagodi loans)</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
        )}

        <FormField
          control={form.control}
          name="comments"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Comments (Optional)</FormLabel>
              <FormControl>
                <Input
                  placeholder="Add any additional comments"
                  {...field}
                  value={field.value || ''}
                />
              </FormControl>
              <FormDescription>Any additional notes about this transaction</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
              </div>
            </div>

        <Button type="submit">Submit</Button>
      </form>
    </Form>
      </div>
    </div>
  )
}