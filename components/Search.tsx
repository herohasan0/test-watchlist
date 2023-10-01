import React, { ChangeEvent, FC } from "react";
import Input from "./Input";
import { SearchProps } from "@/repo/main";

const Search: FC<SearchProps> = ({ searchText, setSearchText }) => {
  const searchHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchText(e.target.value);
  };

  return (
    <Input placeholder="Search" value={searchText} onChange={searchHandler} />
  );
};

export default Search;
