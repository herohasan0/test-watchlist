import React, { FC } from "react";

interface Props {
  table: any;
  flexRender: any;
}

const TableBody: FC<Props> = ({ table, flexRender }) => {
  return (
    <tbody>
      {table.getRowModel().rows.map((row: any) => (
        <tr key={row.id}>
          {row.getVisibleCells().map((cell: any) => (
            <td key={cell.id}>
              {flexRender(cell.column.columnDef.cell, cell.getContext())}
            </td>
          ))}
        </tr>
      ))}
    </tbody>
  );
};

export default TableBody;
