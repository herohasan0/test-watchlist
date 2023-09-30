import { useQuery } from "react-query";
import { getChartData } from "../queries/getChartData";

export const useChartData = () => {
  return useQuery(getChartData());
};
