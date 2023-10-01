import React, { FC } from "react";
import { TableBodyProps } from "@/repo/main";
import { Cell, Row } from "@tanstack/react-table";

const TableBody: FC<TableBodyProps> = ({ table, flexRender }) => (
  <tbody>
    <>
      {table.getRowModel().rows.map((row: Row<Record<any, any>>) => (
        <tr key={row.id}>
          {row.getVisibleCells().map((cell: Cell<Record<any, any>, any>) => (
            <td key={cell.id}>
              {flexRender(cell.column.columnDef.cell, cell.getContext())}
            </td>
          ))}
        </tr>
      ))}
    </>
  </tbody>
);

export default TableBody;
