import React, { FC } from "react";
import TableHead from "./TableHead";
import TableBody from "./TableBody";
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";

import { TableRow } from "@/repo/main";
import TableCell from "./TableCell";
import HoverContext from "../HoverContext";

interface Props {
  data: TableRow[] | undefined;
}

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

const Table: FC<Props> = ({ data }) => {
  const table = useReactTable({
    data: data ?? [],
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <table className="mt-4 w-full">
      <TableHead flexRender={flexRender} table={table} />
      <TableBody flexRender={flexRender} table={table} />
    </table>
  );
};

export default Table;
