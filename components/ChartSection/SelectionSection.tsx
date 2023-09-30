import React from "react";
import SelectDropdown from "../SelectDropdown";

const Stocks = [
  {
    label: "AAPL",
    value: "AAPL",
  },
  {
    label: "MSFT",
    value: "MSFT",
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

export default function SelectionSection({
  stocksSelected,
  stocksSelectionHandler,
  optionsSelected,
  optionsSelectionHandler,
}: any) {
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
}
