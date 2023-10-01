import React, { FC } from "react";
import SelectionSection from "./SelectionSection";
import Image from "next/image";

interface Option {
  label: string;
  value: string | number;
}

interface ChartTopSectionProps {
  optionsSelected: Option;
  stocksSelected: Option;
  stocksSelectionHandler: () => void;
  optionsSelectionHandler: () => void;
}

const ChartTopSection: FC<ChartTopSectionProps> = ({
  optionsSelected,
  stocksSelected,
  stocksSelectionHandler,
  optionsSelectionHandler,
}) => {
  return (
    <div className="flex items-center justify-between mb-8">
      <div className="flex items-center space-x-2 w-full">
        <Image
          src={"/icons/line-chart.svg"}
          alt="Chart"
          width={24}
          height={24}
        />
        <span className="text-xl font-bold">My Chart</span>
      </div>
      <div className="w-full max-w-md">
        <SelectionSection
          optionsSelected={optionsSelected}
          stocksSelected={stocksSelected}
          stocksSelectionHandler={stocksSelectionHandler}
          optionsSelectionHandler={optionsSelectionHandler}
        />
      </div>
    </div>
  );
};

export default ChartTopSection;
