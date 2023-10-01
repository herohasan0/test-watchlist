import React, { useState } from "react";
import TableTopSection from "./TableTopSection";
import Table from "./Table";
// import useChartData from "@/repo/main/hooks/useChartData";
import { useTableData } from "@/repo/main";
import { LoadingComponent } from "../LoadingComponent";

export default function TableSection() {
  const { data: tableData, isLoading, isError } = useTableData();

  const [data, setData] = useState(tableData);

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
      <TableTopSection data={data} setData={setData} tableData={tableData} />
      <Table data={data} />
    </>
  );
}
