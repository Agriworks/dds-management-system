"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ShieldAlert } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";

export default function AccessRestricted() {
  const { t } = useLanguage();

  return (
    <div className="flex items-center justify-center min-h-screen bg-background">
      <Card className="w-[420px] shadow-lg">
        <CardHeader className="text-center">
          <div className="flex justify-center mb-4">
            <ShieldAlert className="h-12 w-12 text-destructive" />
          </div>
          <CardTitle className="text-2xl">{t.accessRestricted.title}</CardTitle>
          <CardDescription>
            {t.accessRestricted.description}
          </CardDescription>
        </CardHeader>
        <CardContent className="text-center text-muted-foreground">
          {t.accessRestricted.contactAdmin}
        </CardContent>
      </Card>
    </div>
  );
}
