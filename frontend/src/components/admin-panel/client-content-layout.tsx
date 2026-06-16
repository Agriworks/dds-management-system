"use client";

import { useLanguage } from "@/i18n/LanguageContext";
import { ContentLayout } from "@/components/admin-panel/content-layout";
import { type Translations } from "@/i18n/translations/te";

type TitleKey = keyof Translations;

interface ClientContentLayoutProps {
  titleKey: TitleKey;
  subKey: string;
  children: React.ReactNode;
  className?: string;
}

export function ClientContentLayout({
  titleKey,
  subKey,
  children,
  className,
}: ClientContentLayoutProps) {
  const { t } = useLanguage();
  // Access the nested translation value
  const section = t[titleKey] as Record<string, string>;
  const title = section?.[subKey] ?? String(subKey);

  return (
    <ContentLayout title={title} className={className}>
      {children}
    </ContentLayout>
  );
}
