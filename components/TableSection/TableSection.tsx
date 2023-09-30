import React, { useState } from "react";
import TableTopSection from "./TableTopSection";
import Table from "./Table";
// import useChartData from "@/repo/main/hooks/useChartData";
import { useChartData } from "@/repo/main";
import { LoadingComponent } from "../LoadingComponent";

export default function TableSection() {
  const { data: tableData, isLoading, isError } = useChartData();

  // const values = Object.values(tableData);
  // const datas = values.map((e: any) => {
  //   return e.tableData;
  // });

  // const [data, setData] = useState(() => [...datas]);

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
      {/* <TableTopSection data={data} setData={setData} datas={datas} /> */}
      <Table data={tableData} />
    </>
  );
}
