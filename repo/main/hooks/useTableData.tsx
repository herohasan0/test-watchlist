import { useQuery } from "react-query";
import { getTableData } from "@/repo/main";

const symbols = ["AAPL", "IBM"];

export const useTableData = () => {
  return useQuery(getTableData(symbols));
};
