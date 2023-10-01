import { services } from "@/services/api";
import axios from "axios";
import { extractChartData } from "../extractors";
import { CHART_DATA } from "../utils/DummyData";

export const getChartData = (symbols: string[]) => {
  return {
    queryKey: ["chartData", symbols],
    queryFn: async () => {
      const responses = await Promise.all(
        symbols.map((symbol: string) => {
          return CHART_DATA[symbol as keyof typeof CHART_DATA];
        })
      );

      const result: any = {};

      symbols.forEach((symbol, index) => {
        Object.assign(result, {
          [symbol]: extractChartData(responses[index]),
        });
      });
      return result;
    },
    // queryFn: () => services.timeSeries({ symbol }).then((data) => data.data),
    cacheTime: 5 * 60 * 1000,
  };
};
