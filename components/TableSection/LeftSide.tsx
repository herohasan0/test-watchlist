import { LeftSideProps } from "@/repo/main";
import Image from "next/image";
import React, { FC } from "react";

const LeftSide: FC<LeftSideProps> = ({ dataLength }) => {
  return (
    <div className="flex items-center space-x-2">
      <Image alt="Table" src="/icons/pie-chart.svg" width={24} height={24} />
      <span className="text-xl font-bold">Watchlist</span>
      <div className="font-bold bg-[#ebedef]/40 px-2 py-1 rounded-md">
        ({dataLength})Stocks
      </div>
    </div>
  );
};

export default LeftSide;
