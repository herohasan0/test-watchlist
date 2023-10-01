import React, { FC } from "react";
import SelectDropdown from "../SelectDropdown";

const Stocks = [
  {
    label: "AAPL",
    value: "AAPL",
  },
  {
    label: "IBM",
    value: "IBM",
  },
];

const Options = [
  {
    label: "Open",
    value: "open",
  },
  {
    label: "High",
    value: "high",
  },
  {
    label: "Low",
    value: "low",
  },
  {
    label: "Close",
    value: "close",
  },
];

interface DropdownOption {
  label: string;
  value: string | number;
}

interface SelectionSectionProps {
  stocksSelected: DropdownOption;
  optionsSelected: DropdownOption;
  stocksSelectionHandler: () => void;
  optionsSelectionHandler: () => void;
}

const SelectionSection: FC<SelectionSectionProps> = ({
  stocksSelected,
  stocksSelectionHandler,
  optionsSelected,
  optionsSelectionHandler,
}) => {
  return (
    <div className="flex space-x-2">
      <div className="w-3/4">
        <SelectDropdown
          isMulti
          defaultSelect={stocksSelected}
          options={Stocks}
          handleChange={stocksSelectionHandler}
        />
      </div>
      <div className="w-1/4">
        <SelectDropdown
          options={Options}
          handleChange={optionsSelectionHandler}
          defaultSelect={optionsSelected}
        />
      </div>
    </div>
  );
};

export default SelectionSection;
