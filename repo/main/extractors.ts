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

export const extractTableData = (responses: any, symbols: string[]) => {
  const result = symbols.map((_: string, index: number) => ({
    name: responses[index].Name,
    description: responses[index].Description,
    address: responses[index].Address,
    dividendYield: responses[index].DividendYield,
    marketCapitalization: responses[index].MarketCapitalization,
  }));
  return result;
};
