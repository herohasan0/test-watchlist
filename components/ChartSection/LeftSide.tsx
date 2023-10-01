import Image from "next/image";
import React, { FC } from "react";

const LeftSide: FC = () => {
  return (
    <div className="flex items-center space-x-2 w-full">
      <Image src={"/icons/line-chart.svg"} alt="Chart" width={24} height={24} />
      <span className="text-xl font-bold">My Chart</span>
    </div>
  );
};

export default LeftSide;
