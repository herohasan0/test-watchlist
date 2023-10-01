import axios from "axios";
import { TableData } from "@/repo/main/typings/table";

export const getTableData = () => {
  return {
    queryKey: "tableData",
    queryFn: () =>
      axios.get<TableData>("/api/companies").then((data) => {
        const tableData = Object.values(data.data).map((e: any) => e.tableData);
        return tableData;
      }),
    cacheTime: 5 * 60 * 1000,
  };
};
