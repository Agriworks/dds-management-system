"use client";

import React, { useState } from "react";
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
import { ContentLayout } from "@/components/admin-panel/content-layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { MandalDropdown } from "@/app/(authenticated)/transactions/add/new-transaction-form/mandals-dropdown";
import { VillageDropdown } from "@/app/(authenticated)/transactions/add/new-transaction-form/villages-dropdown";
import { Loader2 } from "lucide-react";

const formSchema = z.object({
  full_name_english: z.string().min(1, { message: "Full name is required" }),
  mandal: z.string().min(1, { message: "Please select a mandal" }),
  village: z.string().min(1, { message: "Please select a village" }),
  house_number: z.string().min(1, { message: "House number is required" }),
  phone_number: z
    .string()
    .min(1, { message: "Phone number is required" })
    .refine((val) => /^[0-9]{10}$/.test(val.replace(/\D/g, "")), {
      message: "Please enter a valid 10-digit phone number",
    }),
  husband_or_father_name: z.string().min(1, { message: "Husband/Father name is required" }),
});

export default function AddMemberPage() {
  const theToast = useToast();
  const [loading, setLoading] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      full_name_english: "",
      mandal: "",
      village: "",
      house_number: "",
      phone_number: "",
      husband_or_father_name: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      setLoading(true);
      console.log("Submitting form with values:", values);

      const response = await fetch("/api/members", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          full_name_english: values.full_name_english.trim(),
          village_id: values.village,
          house_number: values.house_number.trim(),
          phone_number: values.phone_number.replace(/\D/g, ""),
          husband_or_father_name: values.husband_or_father_name.trim(),
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        
        // Check if it's a phone number conflict
        if (response.status === 409 && errorData.error?.message?.includes("phone number already exists")) {
          theToast.toast({
            title: "Phone number already exists",
            description: "A member with this phone number already exists. Please use a different phone number.",
            variant: "destructive",
            duration: 5000,
          });
          // Clear the form
          form.reset();
          return;
        }
        
        throw new Error(errorData.error?.message || "Failed to create member");
      }

      await response.json();

      theToast.toast({
        title: "Member created successfully!",
        duration: 5000,
      });

      // Reset form
      form.reset();
    } catch (error) {
      console.error("Form submission error", error);
      theToast.toast({
        title: "Error",
        description: error instanceof Error ? error.message : "Failed to create member. Please try again.",
        variant: "destructive",
        duration: 5000,
      });
    } finally {
      setLoading(false);
    }
  }

  return (
    <ContentLayout title="Add New Member">
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
                <CardTitle>Personal Information</CardTitle>
              </CardHeader>
              <CardContent className="grid gap-6">
                <div className="space-y-2">
                  <FormField
                    control={form.control}
                    name="full_name_english"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>
                          Full Name (English) (పూర్తి పేరు)
                          <span className="text-destructive">*</span>
                        </FormLabel>
                        <FormControl>
                          <Input
                            type="text"
                            placeholder="Enter full name in English"
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
                    name="husband_or_father_name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>
                          Husband/Father Name (భర్త/తండ్రి పేరు)
                          <span className="text-destructive">*</span>
                        </FormLabel>
                        <FormControl>
                          <Input
                            type="text"
                            placeholder="Enter husband or father name"
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
                    name="phone_number"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>
                          Phone Number (ఫోన్ నంబర్)
                          <span className="text-destructive">*</span>
                        </FormLabel>
                        <FormControl>
                          <Input
                            type="tel"
                            placeholder="Enter 10-digit phone number"
                            maxLength={10}
                            {...field}
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
                <CardTitle>Location Information</CardTitle>
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
                              // Reset village when mandal changes
                              form.setValue("village", "");
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
                            onChange={field.onChange}
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
                    name="house_number"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>
                          House Number (ఇంటి నంబర్)
                          <span className="text-destructive">*</span>
                        </FormLabel>
                        <FormControl>
                          <Input
                            type="text"
                            placeholder="Enter house number"
                            {...field}
                          />
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
                    {loading ? "Creating Member..." : "Create Member"}
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
