import React, { ChangeEvent, useEffect, useState } from "react";
import Input from "./Input";
import useDebounce from "@/repo/main/utils/useDebounce";

export default function Search({ datas, setData }: any) {
  const [searchText, setSearchText] = useState("");

  const debouncedText = useDebounce<string>(searchText, 500);

  const searchHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchText(e.target.value);
  };

  useEffect(() => {
    const searchedData = [...datas].filter(
      (e) =>
        e.name.toLowerCase().includes(debouncedText.toLowerCase()) ||
        e.description.toLowerCase().includes(debouncedText.toLowerCase())
    );

    setData(searchedData);
  }, [debouncedText]);

  return (
    <Input placeholder="Search" value={searchText} onChange={searchHandler} />
  );
}
