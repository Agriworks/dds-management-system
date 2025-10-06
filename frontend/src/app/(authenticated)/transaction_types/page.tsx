"use client";

import React, { useState, useEffect, useCallback } from "react";
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
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import { useToast } from "@/hooks/use-toast";
import { Plus, Save, X, Loader2 } from "lucide-react";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { ChevronsUpDown } from "lucide-react";
import Dialog from "@/components/dialog";
import { ContentLayout } from "@/components/admin-panel/content-layout";

// Types
interface TransactionType {
  id: string;
  name: string;
  label_english: string;
  label_telugu: string;
  description?: string | null;
  parent_id?: string | null;
  is_active: boolean;
  created_at: string;
  updated_at: string;
  children?: TransactionType[];
}

interface TransactionTypesResponse {
  success: boolean;
  data: {
    mainTypes: TransactionType[];
    subtypes: TransactionType[];
    allTypes: TransactionType[];
    count: number;
  };
}

// Form validation schema
const transactionTypeSchema = z.object({
  name: z.string().min(1, "Name is required").max(255, "Name too long"),
  label_english: z
    .string()
    .min(1, "English label is required")
    .max(255, "English label too long"),
  label_telugu: z
    .string()
    .min(1, "Telugu label is required")
    .max(255, "Telugu label too long"),
  description: z.string().optional(),
  parent_id: z.string().optional().nullable(),
  is_active: z.boolean(),
});

type TransactionTypeFormData = z.infer<typeof transactionTypeSchema>;

export default function TransactionTypesAdminPage() {
  const { toast } = useToast();
  const [transactionTypes, setTransactionTypes] = useState<TransactionType[]>(
    [],
  );
  const [loading, setLoading] = useState(true);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [selectedParentType, setSelectedParentType] =
    useState<TransactionType | null>(null);

  const form = useForm<TransactionTypeFormData>({
    resolver: zodResolver(transactionTypeSchema),
    defaultValues: {
      name: "",
      label_english: "",
      label_telugu: "",
      description: "",
      parent_id: null,
      is_active: true,
    },
  });

  // Load transaction types
  const loadTransactionTypes = useCallback(async () => {
    try {
      setLoading(true);
      const response = await fetch("/api/transaction-types/admin");
      const data: TransactionTypesResponse = await response.json();

      if (data.success) {
        setTransactionTypes(data.data.allTypes);
      } else {
        toast({
          title: "Error",
          description: "Failed to load transaction types",
          variant: "destructive",
        });
      }
    } catch (error) {
      console.error("Error loading transaction types:", error);
      toast({
        title: "Error",
        description: "Failed to load transaction types",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  }, [toast]);

  useEffect(() => {
    loadTransactionTypes();
  }, [loadTransactionTypes]);

  // Reset form when dialog opens/closes
  useEffect(() => {
    if (isDialogOpen) {
      form.reset({
        name: "",
        label_english: "",
        label_telugu: "",
        description: "",
        parent_id: selectedParentType?.id || null,
        is_active: true,
      });
    }
  }, [isDialogOpen, selectedParentType, form]);

  // Handle form submission
  const onSubmit = async (data: TransactionTypeFormData) => {
    try {
      const response = await fetch("/api/transaction-types", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...data,
          parent_id: selectedParentType?.id || null,
        }),
      });

      const result = await response.json();

      if (result.success) {
        toast({
          title: "Success",
          description: "Transaction type created successfully",
        });

        setIsDialogOpen(false);
        setSelectedParentType(null);
        form.reset();
        loadTransactionTypes();
      } else {
        toast({
          title: "Error",
          description:
            result.error?.message || "Failed to save transaction type",
          variant: "destructive",
        });
      }
    } catch (error) {
      console.error("Error saving transaction type:", error);
      toast({
        title: "Error",
        description: "Failed to save transaction type",
        variant: "destructive",
      });
    }
  };

  // Handle new main type
  const handleNewType = () => {
    setSelectedParentType(null);
    setIsDialogOpen(true);
  };

  // Handle new subtype
  const handleNewSubtype = (parentType: TransactionType) => {
    setSelectedParentType(parentType);
    setIsDialogOpen(true);
  };

  // Handle dialog close
  const handleDialogClose = () => {
    setIsDialogOpen(false);
    setSelectedParentType(null);
    form.reset();
  };

  // Component for individual transaction type with collapsible content
  const TransactionTypeCard = ({ type }: { type: TransactionType }) => {
    const [isOpen, setIsOpen] = useState(false);
    const subtypes = transactionTypes.filter((t) => t.parent_id === type.id);

    return (
      <Collapsible
        open={isOpen}
        onOpenChange={setIsOpen}
        className="flex w-full flex-col gap-2"
      >
        <div className="flex items-center justify-between gap-4 px-4">
          <h4 className="text-sm font-semibold">
            {type.label_english} ({type.label_telugu})
          </h4>
          <CollapsibleTrigger asChild>
            <Button variant="ghost" size="icon" className="size-8">
              <ChevronsUpDown />
              <span className="sr-only">Toggle</span>
            </Button>
          </CollapsibleTrigger>
        </div>
        <div className="rounded-md border px-4 py-2 font-mono text-sm">
          {type.name}
        </div>
        <CollapsibleContent className="flex flex-col gap-2">
          {subtypes.map((subtype) => (
            <div
              key={subtype.id}
              className="rounded-md border px-4 py-2 font-mono text-sm"
            >
              {subtype.label_english} ({subtype.label_telugu})
            </div>
          ))}
          <Button
            variant="outline"
            size="sm"
            onClick={() => handleNewSubtype(type)}
            className="mt-2"
          >
            <Plus className="h-4 w-4 mr-2" />
            Add Subtype
          </Button>
        </CollapsibleContent>
      </Collapsible>
    );
  };

  // Render transaction types with collapsible sections
  const renderTransactionTypesCollapsible = () => {
    const mainTypes = transactionTypes.filter((type) => !type.parent_id);

    return (
      <div className="space-y-6">
        {mainTypes.map((type) => (
          <TransactionTypeCard key={type.id} type={type} />
        ))}
      </div>
    );
  };

  return (
    <ContentLayout title="Transaction Types">
      <div className="p-4 sm:p-6 lg:p-8">
        <div className="mb-6">
          <Button onClick={handleNewType} className="w-full sm:w-auto">
            <Plus className="h-4 w-4 mr-2" />
            Add Transaction Type
          </Button>
        </div>

        <Dialog
          isOpen={isDialogOpen}
          onClose={handleDialogClose}
          dialogTitle={
            selectedParentType ? "Add Subtype" : "Add New Transaction Type"
          }
          dialogDescription={
            selectedParentType
              ? `Create a new subtype under "${selectedParentType.label_english}".`
              : "Create a new transaction type."
          }
        >
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>
                        Name
                        <span className="text-destructive">*</span>
                      </FormLabel>
                      <FormControl>
                        <Input placeholder="e.g., LOAN_PAYMENT" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name="label_english"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>
                        English Label
                        <span className="text-destructive">*</span>
                      </FormLabel>
                      <FormControl>
                        <Input placeholder="e.g., Loan Payment" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="label_telugu"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>
                        Telugu Label
                        <span className="text-destructive">*</span>
                      </FormLabel>
                      <FormControl>
                        <Input placeholder="e.g., లోన్ చెల్లింపు" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <FormField
                control={form.control}
                name="description"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Description (Optional)</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Brief description of this transaction type..."
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="is_active"
                render={({ field }) => (
                  <FormItem className="flex flex-row items-center justify-between rounded-lg border p-4">
                    <div className="space-y-0.5">
                      <FormLabel className="text-base">Active Status</FormLabel>
                      <div className="text-sm text-muted-foreground">
                        Whether this transaction type is active and available
                        for use
                      </div>
                    </div>
                    <FormControl>
                      <Switch
                        checked={field.value}
                        onCheckedChange={field.onChange}
                      />
                    </FormControl>
                  </FormItem>
                )}
              />

              <div className="flex justify-end gap-2">
                <Button
                  type="button"
                  variant="outline"
                  onClick={handleDialogClose}
                >
                  <X className="h-4 w-4 mr-2" />
                  Cancel
                </Button>
                <Button type="submit">
                  <Save className="h-4 w-4 mr-2" />
                  Create
                </Button>
              </div>
            </form>
          </Form>
        </Dialog>

        {/* Transaction Types List */}
        {loading ? (
          <div className="flex items-center justify-center py-8">
            <Loader2 className="h-8 w-8 animate-spin" />
            <span className="ml-2 text-muted-foreground">
              Loading transaction types...
            </span>
          </div>
        ) : transactionTypes.length === 0 ? (
          <div className="text-center py-8">
            <p className="text-muted-foreground mb-4">
              No transaction types found.
            </p>
            <Button onClick={handleNewType}>
              <Plus className="h-4 w-4 mr-2" />
              Add Your First Transaction Type
            </Button>
          </div>
        ) : (
          renderTransactionTypesCollapsible()
        )}
      </div>
    </ContentLayout>
  );
}
