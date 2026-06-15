"use client";

import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "@/components/ui/chart";
import { Bar, BarChart, CartesianGrid, LabelList, XAxis, YAxis } from "recharts";
import { useLanguage } from "@/i18n/LanguageContext";

export type VillageChartItem = {
  village: string;
  deposits: number;
  loans: number;
};

interface VillageTransactionsChartProps {
  data: VillageChartItem[];
}

export function VillageTransactionsChart({ data }: VillageTransactionsChartProps) {
  const { t } = useLanguage();

  const config = {
    deposits: {
      label: t.dashboard.deposits,
      color: "hsl(var(--chart-1))",
    },
    loans: {
      label: t.dashboard.loans,
      color: "hsl(var(--chart-2))",
    },
  } satisfies ChartConfig;

  return (
      <ChartContainer config={config}>
        <BarChart
          data={data}
          layout="vertical"
          margin={{ right: 40, left: 40, top: 24, bottom: 24 }}
          barCategoryGap={100} // gap between village rows
          barGap={100} // gap between deposits/loans for a village
        >
          <CartesianGrid horizontal={false} />
          <YAxis
            dataKey="village"
            type="category"
            tickLine={false}
            tickMargin={10}
            axisLine={false}
          />
          <XAxis type="number" />
          <ChartTooltip
            cursor={false}
            content={<ChartTooltipContent indicator="line" />}
          />
          <Bar
            dataKey="deposits"
            layout="vertical"
            fill="#3b82f6"
            radius={4}
            barSize={30}
            name={t.dashboard.deposits}
          >
            <LabelList
              dataKey="deposits"
              position="right"
              offset={8}
              className="fill-foreground"
              fontSize={12}
            />
          </Bar>
          <Bar
            dataKey="loans"
            layout="vertical"
            fill="#60a5fa"
            radius={4}
            barSize={30}
            name={t.dashboard.loans}
          >
            <LabelList
              dataKey="loans"
              position="right"
              offset={8}
              className="fill-foreground"
              fontSize={12}
            />
          </Bar>
        </BarChart>
      </ChartContainer>
  );
}

