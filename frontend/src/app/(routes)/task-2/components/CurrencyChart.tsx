"use client";
import React, { useState } from "react";
import { TrendingUp } from "lucide-react";
import { CartesianGrid, Line, LineChart, XAxis, YAxis } from "recharts";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

export const description = "A multiple line chart";

const fullChartData = [
  { month: "January", value: 100, desktop: 186, mobile: 80 },
  { month: "February", value: 110, desktop: 305, mobile: 200 },
  { month: "March", value: 120, desktop: 237, mobile: 120 },
  { month: "April", value: 130, desktop: 73, mobile: 190 },
  { month: "May", value: 140, desktop: 209, mobile: 130 },
  { month: "June", value: 150, desktop: 214, mobile: 140 },
  { month: "July", value: 160, desktop: 186, mobile: 80 },
  { month: "August", value: 170, desktop: 305, mobile: 200 },
  { month: "September", value: 180, desktop: 237, mobile: 120 },
  { month: "October", value: 190, desktop: 73, mobile: 190 },
  { month: "November", value: 200, desktop: 209, mobile: 130 },
  { month: "December", value: 210, desktop: 214, mobile: 140 },
];

const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "hsl(var(--chart-1))",
  },
  mobile: {
    label: "Mobile",
    color: "hsl(var(--chart-2))",
  },
} satisfies ChartConfig;

interface CurrencyChartProps {
  data: [];
}
export default function CurrencyChart({ data }: CurrencyChartProps) {
  const [timeline, setTimeline] = useState("6M");
  const monthsToShow: any = { "1M": 1, "3M": 3, "6M": 6, "12M": 12 };
  const filteredData = fullChartData.slice(-monthsToShow[timeline]);

  return (
    <Card>
      <CardHeader>
        <CardTitle>Line Chart - Multiple</CardTitle>
        <CardDescription>Dynamic timeline selection</CardDescription>
        <Tabs defaultValue="6M" onValueChange={(value) => setTimeline(value)}>
          <TabsList>
            <TabsTrigger value="1M">1 Month</TabsTrigger>
            <TabsTrigger value="3M">3 Months</TabsTrigger>
            <TabsTrigger value="6M">6 Months</TabsTrigger>
            <TabsTrigger value="12M">12 Months</TabsTrigger>
          </TabsList>
          <TabsContent value="1M">
            Showing data for the last 1 month.
          </TabsContent>
          <TabsContent value="3M">
            Showing data for the last 3 months.
          </TabsContent>
          <TabsContent value="6M">
            Showing data for the last 6 months.
          </TabsContent>
          <TabsContent value="12M">
            Showing data for the last 12 months.
          </TabsContent>
        </Tabs>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <LineChart
            accessibilityLayer
            data={filteredData}
            margin={{
              left: 12,
              right: 12,
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickFormatter={(value) => value}
            />
            <YAxis
              dataKey={"value"}
              orientation="left"
              tickLine={false}
              axisLine={false}
              tickMargin={4}
              tickFormatter={(value) => value}
            />

            <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
            <Line
              dataKey="desktop"
              type="monotone"
              stroke="var(--color-desktop)"
              strokeWidth={2}
              dot={false}
            />
            <Line
              dataKey="mobile"
              type="monotone"
              stroke="var(--color-mobile)"
              strokeWidth={2}
              dot={false}
            />
          </LineChart>
        </ChartContainer>
      </CardContent>
      <CardFooter>
        <div className="flex w-full items-start gap-2 text-sm">
          <div className="grid gap-2">
            <div className="flex items-center gap-2 font-medium leading-none">
              Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
            </div>
            <div className="flex items-center gap-2 leading-none text-muted-foreground">
              Showing total visitors for the last {monthsToShow[timeline]}{" "}
              months
            </div>
          </div>
        </div>
      </CardFooter>
    </Card>
  );
}
