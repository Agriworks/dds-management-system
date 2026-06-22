"use client";

import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "@/components/ui/chart";
import { Pie, PieChart, Cell } from "recharts";
import { useLanguage } from "@/i18n/LanguageContext";

export type MandalPieItem = {
  mandalId: string;
  mandalName: string;
  mandalNameTelugu: string;
  value: number;
};

interface MandalPieChartProps {
  title: string;
  data: MandalPieItem[];
  labelPrefix: string;
}

const PIE_COLORS = [
  "#22d3ee", // cyan
  "#3b82f6", // blue
  "#f59e0b", // amber
  "#ef4444", // red
  "#a855f7", // purple
  "#ec4899", // pink
  "#10b981", // emerald
  "#f97316", // orange
  "#6366f1", // indigo
  "#14b8a6", // teal
];

export function MandalPieChart({ title, data, labelPrefix }: MandalPieChartProps) {
  const { lang } = useLanguage();

  // Build config for ChartContainer
  const config: ChartConfig = {};
  data.forEach((item, idx) => {
    config[item.mandalName] = {
      label: lang === "te" ? item.mandalNameTelugu : item.mandalName,
      color: PIE_COLORS[idx % PIE_COLORS.length],
    };
  });

  // Build pie data
  const pieData = data.map((item, idx) => ({
    name: lang === "te" ? item.mandalNameTelugu : item.mandalName,
    value: item.value,
    fill: PIE_COLORS[idx % PIE_COLORS.length],
  }));

  const hasData = pieData.some((d) => d.value > 0);

  return (
    <div className="rounded-lg border bg-card p-4 shadow-sm flex flex-col" style={{ background: "hsl(var(--card))" }}>
      <h3 className="text-base font-semibold mb-4 text-card-foreground">
        {title}
      </h3>

      {hasData ? (
        <ChartContainer config={config} className="mx-auto aspect-square w-full max-w-[280px]">
          <PieChart>
            <ChartTooltip
              content={
                <ChartTooltipContent
                  formatter={(value) => (
                    <span className="font-medium">₹{Number(value).toLocaleString("en-IN")}</span>
                  )}
                />
              }
            />
            <Pie
              data={pieData}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              innerRadius="30%"
              outerRadius="80%"
              paddingAngle={2}
              strokeWidth={2}
              stroke="hsl(var(--card))"
            >
              {pieData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.fill} />
              ))}
            </Pie>
          </PieChart>
        </ChartContainer>
      ) : (
        <div className="flex items-center justify-center h-[200px] text-muted-foreground text-sm">
          —
        </div>
      )}

      {/* Custom Legend */}
      <div className="mt-4 space-y-2">
        {data.map((item, idx) => (
          <div key={item.mandalId} className="flex items-center gap-2 text-sm">
            <span
              className="inline-block h-3 w-3 rounded-sm shrink-0"
              style={{ backgroundColor: PIE_COLORS[idx % PIE_COLORS.length] }}
            />
            <span className="text-muted-foreground truncate flex-1">
              {lang === "te" ? item.mandalNameTelugu : item.mandalName}
            </span>
            <span className="text-card-foreground font-medium whitespace-nowrap">
              {labelPrefix} ₹{item.value.toLocaleString("en-IN")}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
