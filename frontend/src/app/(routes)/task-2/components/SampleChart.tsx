"use client";
import React, { useEffect, useState } from "react";
import { TrendingUp } from "lucide-react";
import {
  CartesianGrid,
  Line,
  LineChart,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

// Modify the interface to include openPrice
interface DataPoint {
  date: string;
  openPrice: number;
  highestPrice: number;
  lowestPrice: number;
}

interface CurrencyChartProps {
  data: string[][];
}

export default function SampleChart({ data }: CurrencyChartProps) {
  const [timeline, setTimeline] = useState("1M");
  const monthsToShow: { [key: string]: number } = {
    "1M": 30,
    "3M": 90,
    "6M": 180,
    "12M": 365,
  };

  // Update the processData function to include openPrice
  const processData = (rawData: string[][]): DataPoint[] => {
    return rawData
      .map((item) => ({
        date: item[0],
        openPrice: parseFloat(item[1]), // index 0 for open price
        highestPrice: parseFloat(item[2]), // index 1 for highest price
        lowestPrice: parseFloat(item[3]), // index 2 for lowest price
      }))
      .reverse();
  };

  const getFilteredData = () => {
    const processedData = processData(data);
    return processedData.slice(-monthsToShow[timeline]);
  };

  // Calculate price change percentage
  // Calculate price change percentage
  const calculatePriceChange = (): number => {
    if (data.length < 2) return 0;
    const latest = parseFloat(data[0][1]);
    const previous = parseFloat(data[1][1]);
    return ((latest - previous) / previous) * 100;
  };

  const chartConfig = {
    open: {
      label: "Open Price",
      color: "hsl(var(--chart-1))",
    },
    highest: {
      label: "Highest Price",
      color: "hsl(var(--chart-2))",
    },
    lowest: {
      label: "Lowest Price",
      color: "hsl(var(--chart-3))",
    },
  };

  useEffect(() => {
    console.log("DATA", chartConfig);
  }, [chartConfig]);

  return (
    <Card>
      <CardHeader>
        <CardTitle>Exchange Rate Chart</CardTitle>
        <CardDescription>Historical exchange rate trends</CardDescription>
        <Tabs defaultValue="1M" onValueChange={(value) => setTimeline(value)}>
          <TabsList>
            <TabsTrigger value="1M">1 Month</TabsTrigger>
            <TabsTrigger value="3M">3 Months</TabsTrigger>
            <TabsTrigger value="6M">6 Months</TabsTrigger>
            <TabsTrigger value="12M">12 Months</TabsTrigger>
          </TabsList>
        </Tabs>
      </CardHeader>
      <CardContent>
        <LineChart
          width={800}
          height={400}
          data={getFilteredData()}
          margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis
            dataKey="date"
            tickFormatter={(value) => value.split(",")[0]}
          />
          <YAxis
            domain={["auto", "auto"]}
            tickFormatter={(value) => value.toFixed(2)}
          />
          <Tooltip />
          <Line
            type="monotone"
            dataKey="openPrice"
            stroke="#ff7300" // Different color for open price
            name="Open Price"
          />
          <Line
            type="monotone"
            dataKey="highestPrice"
            stroke="#82ca9d"
            name="Highest Price"
          />
          <Line
            type="monotone"
            dataKey="lowestPrice"
            stroke="#8884d8"
            name="Lowest Price"
          />
        </LineChart>
      </CardContent>
      <CardFooter>
        <div className="flex w-full items-start gap-2 text-sm">
          <div className="grid gap-2">
            <div className="flex items-center gap-2 font-medium leading-none">
              {calculatePriceChange() > 0 ? "Up" : "Down"} by{" "}
              {Math.abs(calculatePriceChange()).toFixed(2)}%
              <TrendingUp className="h-4 w-4" />
            </div>

            <div className="flex items-center gap-2 leading-none text-muted-foreground">
              Showing exchange rates for the last {timeline}
            </div>
          </div>
        </div>
      </CardFooter>
    </Card>
  );
}
