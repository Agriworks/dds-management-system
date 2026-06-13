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
  given_name: z.string().min(1, { message: "Given name is required" }),
  family_name: z.string().min(1, { message: "Family name is required" }),
  mandal: z.string().min(1, { message: "Please select a mandal" }),
  village: z.string().min(1, { message: "Please select a village" }),
  house_number: z.string().min(1, { message: "House number is required" }),
  phone_number: z
    .string()
    .min(1, { message: "Phone number is required" })
    .refine((val) => /^[0-9]{10}$/.test(val.replace(/\D/g, "")), {
      message: "Please enter a valid 10-digit phone number",
    }),
  husband_or_father_name: z
    .string()
    .min(1, { message: "Husband/Father name is required" }),
  aadhar_number: z
    .string()
    .min(1, { message: "Aadhar number is required" })
    .refine((val) => /^[0-9]{12}$/.test(val.replace(/\D/g, "")), {
      message: "Please enter a valid 12-digit Aadhar number",
    }),
});

export default function AddMemberPage() {
  const theToast = useToast();
  const [loading, setLoading] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      given_name: "",
      family_name: "",
      mandal: "",
      village: "",
      house_number: "",
      phone_number: "",
      husband_or_father_name: "",
      aadhar_number: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      setLoading(true);
      console.log("Submitting form with values:", values);
      const cleanPhoneNumber = values.phone_number.replace(/\D/g, "");
      const cleanAadharNumber = values.aadhar_number.replace(/\D/g, "");

      const uniquenessResponse = await fetch(
        `/api/members/check-unique?aadhar_number=${encodeURIComponent(cleanAadharNumber)}`,
      );
      const uniquenessData = await uniquenessResponse.json();

      if (!uniquenessResponse.ok) {
        throw new Error(uniquenessData.error?.message || "సభ్యుని ధృవీకరించలేకపోయాం");
      }

      if (uniquenessData.data?.aadharExists) {
        theToast.toast({
          title: "ఆధార్ నంబర్ ఇప్పటికే ఉంది",
          description: "ఈ ఆధార్ నంబర్‌తో సభ్యుడు ఇప్పటికే ఉన్నారు. దయచేసి వేరే ఆధార్ నంబర్ ఇవ్వండి.",
          variant: "destructive",
          duration: 5000,
        });
        return;
      }

      const response = await fetch("/api/members", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          given_name: values.given_name.trim(),
          family_name: values.family_name.trim(),
          village_id: values.village,
          house_number: values.house_number.trim(),
          phone_number: cleanPhoneNumber,
          husband_or_father_name: values.husband_or_father_name.trim(),
          aadhar_number: cleanAadharNumber,
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();

        // Check if it's an Aadhar number conflict
        if (
          response.status === 409 &&
          errorData.error?.message?.toLowerCase()?.includes("aadhar number already exists")
        ) {
          theToast.toast({
            title: "ఆధార్ నంబర్ ఇప్పటికే ఉంది",
            description: "ఈ ఆధార్ నంబర్‌తో సభ్యుడు ఇప్పటికే ఉన్నారు. దయచేసి వేరే ఆధార్ నంబర్ ఇవ్వండి.",
            variant: "destructive",
            duration: 5000,
          });
          return;
        }

        throw new Error(errorData.error?.message || "Failed to create member");
      }

      await response.json();

      theToast.toast({
        title: "సభ్యుడు విజయవంతంగా నమోదు అయ్యారు!",
        duration: 5000,
      });

      // Reset form
      form.reset();
    } catch (error) {
      console.error("Form submission error", error);
      theToast.toast({
        title: "లోపం",
        description:
          error instanceof Error
            ? error.message
            : "సభ్యుని నమోదు చేయలేకపోయాం. దయచేసి మళ్లీ ప్రయత్నించండి.",
        variant: "destructive",
        duration: 5000,
      });
    } finally {
      setLoading(false);
    }
  }

  return (
    <ContentLayout title="కొత్త సభ్యుడు">
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
                    name="given_name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>
                          పేరు (ఇంగ్లీషు)
                          <span className="text-destructive">*</span>
                        </FormLabel>
                        <FormControl>
                          <Input
                            type="text"
                            placeholder="పేరు ఇంగ్లీషులో ఇవ్వండి"
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
                    name="family_name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>
                          ఇంటి పేరు (ఇంగ్లీషు)
                          <span className="text-destructive">*</span>
                        </FormLabel>
                        <FormControl>
                          <Input
                            type="text"
                            placeholder="ఇంటి పేరు ఇంగ్లీషులో ఇవ్వండి"
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
                          భర్త/తండ్రి పేరు (ఇంగ్లీషు)
                          <span className="text-destructive">*</span>
                        </FormLabel>
                        <FormControl>
                          <Input
                            type="text"
                            placeholder="భర్త/తండ్రి పేరు ఇంగ్లీషులో ఇవ్వండి"
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
                          ఫోన్ నంబర్
                          <span className="text-destructive">*</span>
                        </FormLabel>
                        <FormControl>
                          <Input
                            type="tel"
                            placeholder="ఫోన్ నంబర్ ఇవ్వండి"
                            maxLength={10}
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
                    name="aadhar_number"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>
                          ఆధార్ నంబర్
                          <span className="text-destructive">*</span>
                        </FormLabel>
                        <FormControl>
                          <Input
                            type="text"
                            placeholder="ఆధార్ నంబర్ ఇవ్వండి"
                            maxLength={12}
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
                <CardTitle>స్థాన సమాచారం</CardTitle>
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
                          ఊరు
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
                          ఇంటి నంబర్
                          <span className="text-destructive">*</span>
                        </FormLabel>
                        <FormControl>
                          <Input
                            type="text"
                            placeholder="ఇంటి నంబర్ ఇవ్వండి"
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
                    {loading ? "సంఘం సభ్యుని సృష్టించుతుంది..." : "సంఘం సభ్యుని సృష్టించు"}
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
