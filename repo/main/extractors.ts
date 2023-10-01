import { ChartRow } from "@/repo/main";

export const extractChartData = (rawChartData: any): ChartRow => {
  const xAxis = Object?.keys(rawChartData["Time Series (Daily)"]).reverse();
  const values = Object?.values(rawChartData["Time Series (Daily)"]).reverse();

  const open = values.map((e: any) => e["1. open"]);
  const high = values.map((e: any) => e["2. high"]);
  const low = values.map((e: any) => e["3. low"]);
  const close = values.map((e: any) => e["4. close"]);

  return {
    xAxis,
    open,
    high,
    low,
    close,
  };
};
