import { TableRow } from "@/repo/main";
import { TABLE_DATA } from "../utils/DummyData";
import { services } from "@/services/api";
import { queryKeyFor } from "@/repo/main";

export const getTableData = (symbols: string[]) => {
  return {
    queryKey: queryKeyFor({
      operation: "read",
      resourceType: "table",
      params: symbols,
    }),
    queryFn: async () => {
      const responses: any = await Promise.all(
        symbols.map((symbol: string) => {
          // return services.overview({ symbol }).then((data) => {
          //   if (data.data.Symbol) {
          //     return data.data;
          //   }

          //   // Make the Table visible with old data if API reaches its limit
          //   return TABLE_DATA[symbol as keyof typeof TABLE_DATA];
          // });
          return TABLE_DATA[symbol as keyof typeof TABLE_DATA];
        })
      );

      const result: TableRow[] = symbols.map((symbol, index) => ({
        name: responses[index].Name,
        description: responses[index].Description,
        address: responses[index].Address,
        dividendYield: responses[index].DividendYield,
        marketCapitalization: responses[index].MarketCapitalization,
      }));
      return result;
    },
    enabled: Boolean(symbols.length > 0),
    cacheTime: 5 * 60 * 1000,
  };
};
