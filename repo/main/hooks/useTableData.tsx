import { useQuery } from "react-query";
import { getTableData } from "../queries/getTableData";

export const useTableData = () => {
  return useQuery(getTableData());
};
