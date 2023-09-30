import React from "react";
import SelectionSection from "./SelectionSection";

interface Props {
  optionsSelected: any;
  stocksSelected: any;
  stocksSelectionHandler: any;
  optionsSelectionHandler: any;
}

const ChartTopSection = ({
  optionsSelected,
  stocksSelected,
  stocksSelectionHandler,
  optionsSelectionHandler,
}: Props) => {
  return (
    <div className="flex items-center justify-between mb-8">
      <div className="flex items-center space-x-2 w-full">
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
            d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5M9 11.25v1.5M12 9v3.75m3-6v6"
          />
        </svg>

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
