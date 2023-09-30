import { useQuery, UseQueryOptions } from "react-query";
import axios from "axios";

interface QueryOptions extends UseQueryOptions<any, Error> {}

const fetchData = async (): Promise<any> => {
  const response = await axios.get<any>("/api/companies");
  return response.data;
};

export const useChartData = (options?: any) => {
  return useQuery(["chartData"], fetchData, options);
};
