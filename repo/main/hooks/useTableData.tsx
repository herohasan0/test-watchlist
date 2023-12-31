import { useQuery } from "react-query";
import { getTableData } from "@/repo/main";
import { useDebounce } from "@/repo/main";
import { symbols } from "@/repo/main";

export const useTableData = (searchTerm: string) => {
  const { data, isLoading, isError } = useQuery(getTableData(symbols));

  const debouncedText = useDebounce<string>(searchTerm, 500);

  const filteredData = data?.filter(
    (e) =>
      e.name.toLowerCase().includes(debouncedText.toLowerCase()) ||
      e.description.toLowerCase().includes(debouncedText.toLowerCase())
  );

  return { data: filteredData, isLoading, isError };
};
