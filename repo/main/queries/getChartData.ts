import { services } from "@/services/api";
import { extractChartData } from "../extractors";
import { CHART_DATA } from "../utils/DummyData";

export const getChartData = (symbols: string[]) => {
  return {
    queryKey: ["chartData", symbols],
    queryFn: async () => {
      const responses = await Promise.all(
        symbols.map((symbol: string) => {
          // return services.timeSeries({ symbol }).then((data) => {
          //   if (data.data["Time Series (Daily)"]) {
          //     return data.data;
          //   }

          //   // Make the Chart visible with old data if API reaches its limit
          //   return CHART_DATA[symbol as keyof typeof CHART_DATA];
          // });
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
    cacheTime: 5 * 60 * 1000,
  };
};
