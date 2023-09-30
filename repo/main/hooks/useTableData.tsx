import { useQuery, UseQueryOptions } from "react-query";
import axios from "axios";
import { TableData, TableRow } from "@/types/data";

interface QueryOptions extends UseQueryOptions<TableData, Error> {}

const fetchData = async (): Promise<TableRow[]> => {
  const response = await axios.get<TableData>("/api/companies");
  const tableData = Object.values(response.data).map((e: any) => e.tableData);
  return tableData;
};

export const useTableData = (options?: any) => {
  return useQuery(["tableData"], fetchData, options);
};
