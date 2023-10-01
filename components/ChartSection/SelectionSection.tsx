import React, { FC } from "react";
import SelectDropdown from "../SelectDropdown";
import { MultiValue, SingleValue } from "react-select";

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

interface SelectDropdownOption {
  label: string;
  value: string | number;
}

interface SelectionSectionProps {
  stocksSelected: SelectDropdownOption[];
  optionsSelected: SelectDropdownOption;
  // stocksSelectionHandler: (newValue: MultiValue<SelectDropdownOption>) => void;
  stocksSelectionHandler: any;
  optionsSelectionHandler: any;
  // optionsSelectionHandler: (
  //   newValue: SingleValue<SelectDropdownOption>
  // ) => void;
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
