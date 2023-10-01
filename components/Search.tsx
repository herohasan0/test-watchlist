import React, { ChangeEvent, FC, useEffect, useState } from "react";
import Input from "./Input";
import useDebounce from "@/repo/main/utils/useDebounce";

interface SearchProps {
  setData: React.Dispatch<React.SetStateAction<any>>;
  tableData: any[];
}

const Search: FC<SearchProps> = ({ tableData, setData }) => {
  const [searchText, setSearchText] = useState("");

  const debouncedText = useDebounce<string>(searchText, 500);

  const searchHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchText(e.target.value);
  };

  useEffect(() => {
    const searchedData = [...tableData].filter(
      (e) =>
        e.name.toLowerCase().includes(debouncedText.toLowerCase()) ||
        e.description.toLowerCase().includes(debouncedText.toLowerCase())
    );

    setData(searchedData);
  }, [debouncedText]);

  return (
    <Input placeholder="Search" value={searchText} onChange={searchHandler} />
  );
};

export default Search;
