import { useQuery } from "react-query";
import { getChartData } from "@/repo/main";

export const useChartData = () => {
  return useQuery(getChartData());
};
