import React, { FC } from "react";
import Search from "../Search";
import Image from "next/image";

interface TableTopSectionProps {
  data: any;
  setSearchText: React.Dispatch<React.SetStateAction<any>>;
  searchText: string;
}

const TableTopSection: FC<TableTopSectionProps> = ({
  data,
  searchText,
  setSearchText,
}) => (
  <div className="flex items-center justify-between">
    <div className="flex items-center space-x-2">
      <Image alt="Table" src="/icons/pie-chart.svg" width={24} height={24} />
      <span className="text-xl font-bold">Watchlist</span>
      <div className="font-bold bg-[#ebedef]/40 px-2 py-1 rounded-md">
        ({data?.length})Stocks
      </div>
    </div>
    <Search searchText={searchText} setSearchText={setSearchText} />
  </div>
);

export default TableTopSection;
