import { TableRow } from "@/repo/main";
import { TABLE_DATA } from "../utils/DummyData";
import { services } from "@/services/api";
import { queryKeyFor } from "@/repo/main";
import { extractTableData } from "../extractors";

export const getTableData = (symbols: string[]) => {
  return {
    queryKey: queryKeyFor({
      operation: "read",
      resourceType: "table",
      params: symbols,
    }),
    queryFn: async () => {
      const responses = await Promise.all(
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

      const result: TableRow[] = extractTableData(responses, symbols);
      return result;
    },
    enabled: Boolean(symbols.length > 0),
    cacheTime: 5 * 60 * 1000,
  };
};
