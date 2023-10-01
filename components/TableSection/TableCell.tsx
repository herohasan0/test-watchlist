import { TableCellProps } from "@/repo/main";
import React, { FC } from "react";

const TableCell: FC<TableCellProps> = ({ value }) => (
  <div className="px-4 py-4 w-full border-b border-text-custom-gray-50">
    {value}
  </div>
);

export default TableCell;
