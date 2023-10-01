import React, { FC } from "react";
import SelectionSection from "./SelectionSection";
import LeftSide from "./LeftSide";

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
