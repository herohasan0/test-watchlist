import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import React, { useState } from "react";
import { TableData, TableRow } from "@/types/data";
import TableCell from "./TableCell";
import Search from "./Search";

const columnHelper = createColumnHelper<TableRow>();

const columns: any = [
  columnHelper.accessor("name", {
    header: "Name",
    cell: (props) => <TableCell value={props.getValue()} />,
  }),
  columnHelper.accessor("description", {
    header: "Description",
    cell: (props) => (
      <TableCell value={`${props.getValue()?.substring(0, 15)}..`} />
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
  const datas = values.map((e: any) => e.tableData);

  const [data, setData] = useState(() => [...datas]);

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <div>
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M10.5 6a7.5 7.5 0 107.5 7.5h-7.5V6z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M13.5 10.5H21A7.5 7.5 0 0013.5 3v7.5z"
            />
          </svg>
          <span className="text-xl font-bold">Watchlist</span>
          <div className="font-bold bg-[#ebedef]/40 px-2 py-1 rounded-md">
            ({data.length})Stocks
          </div>
        </div>
        <Search datas={datas} setData={setData} />
      </div>
      <table className="mt-4 w-full">
        <thead className="bg-custom-gray-50 text-custom-gray-60/60 rounded-lg">
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <th key={header.id} className="py-2 px-4 font-medium text-left">
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map((row) => (
            <tr key={row.id}>
              {row.getVisibleCells().map((cell) => (
                <td key={cell.id}>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
