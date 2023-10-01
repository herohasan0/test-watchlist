import { TableHeadProps } from "@/repo/main";
import React, { FC } from "react";

const TableHead: FC<TableHeadProps> = ({ table, flexRender }) => {
  return (
    <thead className="bg-custom-gray-50 text-custom-gray-60/60 rounded-lg">
      {table.getHeaderGroups().map((headerGroup: any) => (
        <tr key={headerGroup.id}>
          {headerGroup.headers.map((header: any) => (
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
  );
};

export default TableHead;
