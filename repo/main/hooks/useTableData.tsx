import { useQuery } from "react-query";
import { getTableData } from "@/repo/main";

export const useTableData = () => {
  return useQuery(getTableData());
};
