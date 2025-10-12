import type { Metadata } from "next";
import { Noto_Sans } from "next/font/google";
import "../globals.css";
import AdminPanelLayout from "@/components/admin-panel/admin-panel-layout";
import { Toaster } from "@/components/ui/toaster";
import { ThemeProvider } from "@/components/theme-provider";

export const metadata: Metadata = {
  title: "DDS App",
  description: "dds-management-system",
};

// const inter = Inter({ subsets: ["latin"] });
const notoSans = Noto_Sans({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <div className={notoSans.className}>
        <AdminPanelLayout>{children}</AdminPanelLayout>
        <Toaster />
      </div>
    </ThemeProvider>
  );
}
