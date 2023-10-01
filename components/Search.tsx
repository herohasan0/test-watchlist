import React, { ChangeEvent, FC, useEffect, useState } from "react";
import Input from "./Input";

interface SearchProps {
  setSearchText: React.Dispatch<React.SetStateAction<any>>;
  searchText: string;
}

const Search: FC<SearchProps> = ({ searchText, setSearchText }) => {
  const searchHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchText(e.target.value);
  };

  return (
    <Input placeholder="Search" value={searchText} onChange={searchHandler} />
  );
};

export default Search;
