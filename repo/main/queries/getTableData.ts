import axios from "axios";
import { TableData, TableRow } from "@/repo/main/typings/table";
import { TABLE_DATA } from "../utils/DummyData";

export const getTableData = (symbols: string[]) => {
  return {
    queryKey: ["tableData", symbols],
    queryFn: async () => {
      console.log("aha");
      const responses = await Promise.all(
        symbols.map((symbol: string) => {
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
    // queryFn: () => services.overview({ symbol }).then((data) => data.data),
    cacheTime: 5 * 60 * 1000,
  };
};
