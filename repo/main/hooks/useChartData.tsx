import { useQuery } from "react-query";
import { getChartData } from "@/repo/main";
import { symbols } from "@/repo/main";

export const useChartData = () => {
  return useQuery(getChartData(symbols));
};
