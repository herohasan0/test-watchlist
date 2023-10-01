import React, { FC } from "react";
import LeftSide from "./LeftSide";
import SelectionSection from "./SelectionSection";
import { ChartTopSectionProps } from "@/repo/main";

const ChartTopSection: FC<ChartTopSectionProps> = ({
  optionsSelected,
  stocksSelected,
  stocksSelectionHandler,
  optionsSelectionHandler,
}) => {
  return (
    <div className="flex items-center justify-between mb-8">
      <LeftSide />
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
