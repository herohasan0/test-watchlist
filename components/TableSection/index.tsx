import Table from "./Table";
import React, { useState } from "react";
import { useTableData } from "@/repo/main";
import TableTopSection from "./TableTopSection";
import LoadingComponent from "../LoadingComponent";

const TableSection = () => {
  const [searchText, setSearchText] = useState("");
  const { data: tableData, isLoading, isError } = useTableData(searchText);

  if (isLoading) {
    return (
      <div className="grid h-screen place-items-center bg-custom-gray-50">
        <LoadingComponent />
      </div>
    );
  }

  if (isError) return "An error has occurred: ";

  return (
    <>
      <TableTopSection
        data={tableData}
        searchText={searchText}
        setSearchText={setSearchText}
      />
      <Table data={tableData} />
    </>
  );
};

export default TableSection;
