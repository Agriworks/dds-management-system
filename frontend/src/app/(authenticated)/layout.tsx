import type { Metadata } from "next";
import { Noto_Sans } from "next/font/google";
import "../globals.css";
import AdminPanelLayout from "@/components/admin-panel/admin-panel-layout";
import { Toaster } from "@/components/ui/toaster";

export const metadata: Metadata = {
  title: "DDS App",
  description: "dds-management-system",
};

const notoSans = Noto_Sans({ subsets: ["latin"] });

export default function AuthenticatedLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className={notoSans.className}>
      <AdminPanelLayout>{children}</AdminPanelLayout>
      <Toaster />
    </div>
  );
}
