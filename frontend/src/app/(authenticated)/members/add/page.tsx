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
import { useLanguage } from "@/i18n/LanguageContext";

interface FormSchemaValues {
  given_name: string;
  family_name: string;
  mandal: string;
  village: string;
  house_number: string;
  phone_number: string;
  husband_or_father_name: string;
  aadhar_number: string;
}

export default function AddMemberPage() {
  const theToast = useToast();
  const [loading, setLoading] = useState(false);
  const { t } = useLanguage();

  const formSchema = React.useMemo(() => z.object({
    given_name: z.string().min(1, { message: t.validation.givenNameRequired }),
    family_name: z.string().min(1, { message: t.validation.familyNameRequired }),
    mandal: z.string().min(1, { message: t.validation.mandalRequired }),
    village: z.string().min(1, { message: t.validation.villageRequired }),
    house_number: z.string().min(1, { message: t.validation.houseNumberRequired }),
    phone_number: z
      .string()
      .min(1, { message: t.validation.phoneRequired })
      .refine((val) => /^[0-9]{10}$/.test(val.replace(/\D/g, "")), {
        message: t.validation.phoneInvalid,
      }),
    husband_or_father_name: z
      .string()
      .min(1, { message: t.validation.husbandFatherRequired }),
    aadhar_number: z
      .string()
      .min(1, { message: t.validation.aadharRequired })
      .refine((val) => /^[0-9]{12}$/.test(val.replace(/\D/g, "")), {
        message: t.validation.aadharInvalid,
      }),
  }), [t]);

  const form = useForm<FormSchemaValues>({
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

  async function onSubmit(values: FormSchemaValues) {
    try {
      setLoading(true);
      console.log("Submitting form with values:", values);
      const cleanPhoneNumber = values.phone_number.replace(/\D/g, "");
      const cleanAadharNumber = values.aadhar_number.replace(/\D/g, "");

      const uniquenessResponse = await fetch(
        `/api/members/check-unique?phone_number=${encodeURIComponent(cleanPhoneNumber)}&aadhar_number=${encodeURIComponent(cleanAadharNumber)}`,
      );
      const uniquenessData = await uniquenessResponse.json();

      if (!uniquenessResponse.ok) {
        throw new Error(uniquenessData.error?.message || t.memberAdd.verifyError);
      }

      if (uniquenessData.data?.phoneExists) {
        theToast.toast({
          title: t.memberAdd.phoneExistsTitle,
          description: t.memberAdd.phoneExistsDesc,
          variant: "destructive",
          duration: 5000,
        });
        return;
      }

      if (uniquenessData.data?.aadharExists) {
        theToast.toast({
          title: t.memberAdd.aadharExistsTitle,
          description: t.memberAdd.aadharExistsDesc,
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

        if (
          response.status === 409 &&
          errorData.error?.message?.toLowerCase()?.includes("phone number already exists")
        ) {
          theToast.toast({
            title: t.memberAdd.phoneExistsTitle,
            description: t.memberAdd.phoneExistsDesc,
            variant: "destructive",
            duration: 5000,
          });
          return;
        }

        if (
          response.status === 409 &&
          errorData.error?.message?.toLowerCase()?.includes("aadhar number already exists")
        ) {
          theToast.toast({
            title: t.memberAdd.aadharExistsTitle,
            description: t.memberAdd.aadharExistsDesc,
            variant: "destructive",
            duration: 5000,
          });
          return;
        }

        throw new Error(errorData.error?.message || "Failed to create member");
      }

      await response.json();

      theToast.toast({
        title: t.memberAdd.successTitle,
        duration: 5000,
      });

      form.reset();
    } catch (error) {
      console.error("Form submission error", error);
      theToast.toast({
        title: t.memberAdd.errorTitle,
        description:
          error instanceof Error
            ? error.message
            : t.memberAdd.errorDesc,
        variant: "destructive",
        duration: 5000,
      });
    } finally {
      setLoading(false);
    }
  }

  return (
    <ContentLayout title={t.memberAdd.title}>
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
                <CardTitle>{t.memberAdd.cardPersonal}</CardTitle>
              </CardHeader>
              <CardContent className="grid gap-6">
                <div className="space-y-2">
                  <FormField
                    control={form.control}
                    name="given_name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>
                          {t.memberAdd.givenName}
                          <span className="text-destructive">*</span>
                        </FormLabel>
                        <FormControl>
                          <Input
                            type="text"
                            placeholder={t.memberAdd.givenNamePlaceholder}
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
                          {t.memberAdd.familyName}
                          <span className="text-destructive">*</span>
                        </FormLabel>
                        <FormControl>
                          <Input
                            type="text"
                            placeholder={t.memberAdd.familyNamePlaceholder}
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
                          {t.memberAdd.husbandFather}
                          <span className="text-destructive">*</span>
                        </FormLabel>
                        <FormControl>
                          <Input
                            type="text"
                            placeholder={t.memberAdd.husbandFatherPlaceholder}
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
                          {t.memberAdd.phone}
                          <span className="text-destructive">*</span>
                        </FormLabel>
                        <FormControl>
                          <Input
                            type="tel"
                            placeholder={t.memberAdd.phonePlaceholder}
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
                          {t.memberAdd.aadhar}
                          <span className="text-destructive">*</span>
                        </FormLabel>
                        <FormControl>
                          <Input
                            type="text"
                            placeholder={t.memberAdd.aadharPlaceholder}
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
                <CardTitle>{t.memberAdd.cardLocation}</CardTitle>
              </CardHeader>
              <CardContent className="grid gap-6">
                <div className="space-y-2">
                  <FormField
                    control={form.control}
                    name="mandal"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>
                          {t.memberAdd.mandal}
                          <span className="text-destructive">*</span>
                        </FormLabel>
                        <FormControl>
                          <MandalDropdown
                            value={field.value}
                            onChange={(val) => {
                              field.onChange(val);
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
                          {t.memberAdd.village}
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
                          {t.memberAdd.houseNumber}
                          <span className="text-destructive">*</span>
                        </FormLabel>
                        <FormControl>
                          <Input
                            type="text"
                            placeholder={t.memberAdd.houseNumberPlaceholder}
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
                    {loading ? t.memberAdd.submittingBtn : t.memberAdd.submitBtn}
                  </Button>
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => form.reset()}
                    className="w-full sm:w-auto font-medium"
                    disabled={loading}
                  >
                    {t.memberAdd.resetBtn}
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
