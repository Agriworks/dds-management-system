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

const formSchema = z.object({
  mandal: z.string(),
  village: z.string(),
  customer: z.string()
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
    },
  });

  // Watch form values for dependent loading
  const selectedMandal = form.watch('mandal');
  const selectedVillage = form.watch('village');

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
      console.log(values);
      toast(
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(values, null, 2)}</code>
        </pre>
      );
    } catch (error) {
      console.error("Form submission error", error);
      toast.error("Failed to submit the form. Please try again.");
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 max-w-3xl mx-auto py-10">
        
        <FormField
          control={form.control}
          name="mandal"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Mandal</FormLabel>
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
              <FormLabel>Village</FormLabel>
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
              <FormLabel>Customer</FormLabel>
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
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  )
}