import { useQuery } from "react-query";
import { getChartData } from "@/repo/main";

const symbols = ["AAPL", "IBM"];

export const useChartData = () => {
  return useQuery(getChartData(symbols));
};
