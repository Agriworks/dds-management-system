"use client";

import { useState, useEffect } from "react";
import { ContentLayout } from "../../../components/admin-panel/content-layout";
import { VillageTransactionsChart } from "./components/village-transactions-chart";
import { Loader2 } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";

type VillageSummary = {
  villageId: string;
  villageName: string;
  memberCount: number;
  totalDeposits: number;
  totalLoans: number;
};

type DashboardSummaryResponse = {
  villages: VillageSummary[];
  totals: {
    villageCount: number;
    memberCount: number;
    totalDeposits: number;
    totalLoans: number;
  };
};

export default function DashboardPage() {
  const { t } = useLanguage();
  const [data, setData] = useState<VillageSummary[]>([]);
  const [totals, setTotals] = useState<DashboardSummaryResponse["totals"] | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchSummary = async () => {
      try {
        setLoading(true);
        const res = await fetch("/api/dashboard/summary");
        if (!res.ok) {
          throw new Error("Failed to load dashboard summary");
        }
        const json = (await res.json()) as {
          success: boolean;
          data: DashboardSummaryResponse;
          error?: { message: string };
        };

        if (!json.success) {
          throw new Error(json.error?.message || "Failed to load dashboard summary");
        }

        setData(json.data.villages);
        setTotals(json.data.totals);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Unknown error");
      } finally {
        setLoading(false);
      }
    };

    fetchSummary();
  }, []);

  const chartData = data.map((village) => ({
    village: village.villageName,
    deposits: village.totalDeposits,
    loans: village.totalLoans,
  }));

  return (
    <ContentLayout title={t.dashboard.title}>
      {loading ? (
        <div className="flex items-center justify-center h-full">
          <Loader2 className="h-8 w-8 animate-spin" />
        </div>
      ) : error ? (
        <div className="flex items-center justify-center h-full">
          <span className="text-destructive">{error}</span>
        </div>
      ) : (
      <div className="flex flex-col">
        {totals && (
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 p-8 pb-0">
            <div className="rounded-lg border bg-card p-4 shadow-sm">
              <div className="text-sm text-muted-foreground">{t.dashboard.villages}</div>
              <div className="mt-2 text-2xl font-semibold">
                {totals.villageCount}
              </div>
            </div>
            <div className="rounded-lg border bg-card p-4 shadow-sm">
              <div className="text-sm text-muted-foreground">{t.dashboard.members}</div>
              <div className="mt-2 text-2xl font-semibold">
                {totals.memberCount}
              </div>
            </div>
            <div className="rounded-lg border bg-card p-4 shadow-sm">
              <div className="text-sm text-muted-foreground">{t.dashboard.totalDeposits}</div>
              <div className="mt-2 text-2xl font-semibold">
                ₹{totals.totalDeposits.toLocaleString()}
              </div>
            </div>
            <div className="rounded-lg border bg-card p-4 shadow-sm">
              <div className="text-sm text-muted-foreground">{t.dashboard.totalLoans}</div>
              <div className="mt-2 text-2xl font-semibold">
                ₹{totals.totalLoans.toLocaleString()}
              </div>
            </div>
          </div>
        )}

        <div className="flex-1 space-y-8 p-8 pt-4">
          <div className="rounded-lg border bg-card p-4 shadow-sm">
            <div className="mb-4 flex items-center justify-between">
              <div>
                <h2 className="text-lg font-semibold">
                  {t.dashboard.chartTitle}
                </h2>
                <p className="text-sm text-muted-foreground">
                  {t.dashboard.chartSubtitle}
                </p>
              </div>
            </div>
              <VillageTransactionsChart data={chartData} />
          </div>
          </div>
        </div>
      )}
    </ContentLayout>
  );
}
