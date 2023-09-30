import React, { FC } from "react";
import Search from "../Search";

interface TableTopSectionProps {
  data: any;
  setData?: React.Dispatch<React.SetStateAction<any>>;
  datas?: any[];
}

const TableTopSection: FC<TableTopSectionProps> = ({
  datas,
  setData,
  data,
}) => (
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
);

export default TableTopSection;
