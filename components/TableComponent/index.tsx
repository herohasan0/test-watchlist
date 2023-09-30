import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import React, { useState } from "react";
import { TableData, TableRow } from "@/types/data";
import TableCell from "../TableCell";
import HoverContext from "../HoverContext";
import TableTopSection from "./TableTopSection";
import TableHead from "./TableHead";
import TableBody from "./TableBody";

const columnHelper = createColumnHelper<TableRow>();

const columns = [
  columnHelper.accessor("name", {
    header: "Name",
    cell: (props) => <TableCell value={props.getValue()} />,
  }),
  columnHelper.accessor("description", {
    header: "Description",
    cell: (props) => (
      <HoverContext hoverText={props.getValue()}>
        <TableCell value={`${props.getValue()?.substring(0, 15)}..`} />
      </HoverContext>
    ),
  }),
  columnHelper.accessor("address", {
    header: "Address",
    cell: (props) => <TableCell value={props.getValue()} />,
  }),
  columnHelper.accessor("dividendYield", {
    header: "Dividend Yield",
    cell: (props) => <TableCell value={props.getValue()} />,
  }),
  columnHelper.accessor("marketCapitalization", {
    header: "Market Capitalization",
    cell: (props) => <TableCell value={props.getValue()} />,
  }),
];

export default function TableComponent({
  tableData,
}: {
  tableData: TableData;
}) {
  const values = Object.values(tableData);
  const datas = values.map((e: any) => {
    return e.tableData;
  });

  const [data, setData] = useState(() => [...datas]);

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <>
      <TableTopSection data={data} setData={setData} datas={datas} />
      <table className="mt-4 w-full">
        <TableHead flexRender={flexRender} table={table} />
        <TableBody flexRender={flexRender} table={table} />
      </table>
    </>
  );
}
