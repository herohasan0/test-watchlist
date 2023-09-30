import React from "react";
import TableHead from "./TableHead";
import TableBody from "./TableBody";

interface Props {
  flexRender: any;
  table: any;
}

const Table = ({ flexRender, table }: Props) => {
  return (
    <table className="mt-4 w-full">
      <TableHead flexRender={flexRender} table={table} />
      <TableBody flexRender={flexRender} table={table} />
    </table>
  );
};

export default Table;
