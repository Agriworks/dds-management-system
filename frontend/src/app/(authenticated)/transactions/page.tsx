'use client';

import { useState, useEffect } from 'react';
import { Search } from 'lucide-react';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from '@/components/ui/form';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select';
import { DatePickerWithRange } from '@/components/ui/date-picker-with-range'; // You'll need to create this component
import { cn } from '@/lib/utils';

const formSchema = z.object({
    customer: z.string().min(1, { message: 'Please select a customer' }),
    product: z.string().min(1, { message: 'Please select a product' }),
    transactionId: z.string().optional(),
    dateRange: z.object({
        from: z.date().optional(),
        to: z.date().optional(),
    }).optional(),
    amount: z.string().optional(),
});

type Customer = {
    id: string;
    name: string;
};

type Product = {
    id: string;
    name: string;
};

export default function TransactionsPage() {
    const [customers, setCustomers] = useState<Customer[]>([]);
    const [products, setProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        // In a real application, fetch data from API
        // This is just mock data
        setCustomers([
            { id: '1', name: 'John Doe' },
            { id: '2', name: 'Jane Smith' },
            { id: '3', name: 'Robert Johnson' },
            // More customers...
        ]);

        setProducts([
            { id: '1', name: 'Product A' },
            { id: '2', name: 'Product B' },
            { id: '3', name: 'Product C' },
            // More products...
        ]);
    }, []);

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            customer: '',
            product: '',
            transactionId: '',
            amount: '',
        },
    });

    function onSubmit(values: z.infer<typeof formSchema>) {
        setLoading(true);
        console.log('Form values:', values);
        
        // In a real application, submit to API
        setTimeout(() => {
            setLoading(false);
        }, 1000);
    }

    return (
        <div className="p-6">
            <h1 className="text-2xl font-bold mb-6">Transaction Management</h1>
            
            <Card className="mb-6">
                <CardContent className="pt-6">
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                                <FormField
                                    control={form.control}
                                    name="customer"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Customer</FormLabel>
                                            <Select 
                                                onValueChange={field.onChange} 
                                                defaultValue={field.value}
                                            >
                                                <FormControl>
                                                    <SelectTrigger>
                                                        <SelectValue placeholder="Search for customer" />
                                                    </SelectTrigger>
                                                </FormControl>
                                                <SelectContent>
                                                    {customers.map((customer) => (
                                                        <SelectItem key={customer.id} value={customer.id}>
                                                            {customer.name}
                                                        </SelectItem>
                                                    ))}
                                                </SelectContent>
                                            </Select>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />

                                <FormField
                                    control={form.control}
                                    name="product"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Product</FormLabel>
                                            <Select 
                                                onValueChange={field.onChange} 
                                                defaultValue={field.value}
                                            >
                                                <FormControl>
                                                    <SelectTrigger>
                                                        <SelectValue placeholder="Search for product" />
                                                    </SelectTrigger>
                                                </FormControl>
                                                <SelectContent>
                                                    {products.map((product) => (
                                                        <SelectItem key={product.id} value={product.id}>
                                                            {product.name}
                                                        </SelectItem>
                                                    ))}
                                                </SelectContent>
                                            </Select>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />

                                <FormField
                                    control={form.control}
                                    name="transactionId"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Transaction ID</FormLabel>
                                            <FormControl>
                                                <Input placeholder="Enter transaction ID" {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />

                                <FormField
                                    control={form.control}
                                    name="dateRange"
                                    render={({ field }) => (
                                        <FormItem className="col-span-1 md:col-span-2">
                                            <FormLabel>Date Range</FormLabel>
                                            <FormControl>
                                                <DatePickerWithRange 
                                                    date={field.value} 
                                                    setDate={field.onChange} 
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
                                            <FormLabel>Amount</FormLabel>
                                            <FormControl>
                                                <div className="relative">
                                                    <div className="absolute left-3 top-1/2 -translate-y-1/2">$</div>
                                                    <Input 
                                                        type="number" 
                                                        placeholder="Enter amount" 
                                                        className="pl-6" 
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

                            <div className="flex gap-2">
                                <Button 
                                    type="submit"
                                    disabled={loading}
                                    className={cn(loading && "opacity-70")}
                                >
                                    {loading ? (
                                        <>Loading...</>
                                    ) : (
                                        <>
                                            <Search className="h-4 w-4 mr-2" />
                                            Search Transactions
                                        </>
                                    )}
                                </Button>
                                <Button 
                                    type="button" 
                                    variant="outline" 
                                    onClick={() => form.reset()}
                                >
                                    Reset
                                </Button>
                            </div>
                        </form>
                    </Form>
                </CardContent>
            </Card>

            <Card>
                <CardHeader>
                    <CardTitle>Transaction Results</CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="text-center py-10 text-muted-foreground">
                        Search for transactions to see results
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}