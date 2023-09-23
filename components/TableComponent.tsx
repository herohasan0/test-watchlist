"use client";

import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";

import React, { useState, useReducer } from "react";

type Person = {
  name: string;
  description: string;
  address: string;
  dividendYield: string;
  marketCapitalization: string;
};

const columnHelper = createColumnHelper<Person>();

const defaultData: Person[] = [
  {
    name: "tanner",
    description: "linsley",
    address: "In Relationship",
    dividendYield: "50",
    marketCapitalization: "Demo",
  },
  {
    name: "tandy",
    description: "miller",
    address: "Single",
    dividendYield: "80",
    marketCapitalization: "Demo",
  },
  {
    name: "joe",
    description: "dirte",
    address: "Complicated",
    dividendYield: "10",
    marketCapitalization: "Demo",
  },
];

const columns = [
  columnHelper.accessor("name", {
    header: "Name",
  }),
  columnHelper.accessor("description", {
    header: "Description",
  }),
  columnHelper.accessor("address", {
    header: "Address",
  }),
  columnHelper.accessor("dividendYield", {
    header: "Dividend Yield",
  }),
  columnHelper.accessor("marketCapitalization", {
    header: "Market Capitalization",
  }),
];

export default function TableComponent() {
  const [data, setData] = useState(() => [...defaultData]);
  const rerender = useReducer(() => ({}), {})[1];

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <table>
      <thead>
        {table.getHeaderGroups().map((headerGroup) => (
          <tr key={headerGroup.id}>
            {headerGroup.headers.map((header) => (
              <th key={header.id}>
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
  );
}
