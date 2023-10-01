import React, { FC } from "react";
import SelectDropdown from "../SelectDropdown";
import {
  INSIGHTS_OPTIONS,
  SYMBOLS_OPTIONS,
  SelectionSectionProps,
} from "@/repo/main";

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
          options={SYMBOLS_OPTIONS}
          handleChange={stocksSelectionHandler}
        />
      </div>
      <div className="w-1/4">
        <SelectDropdown
          options={INSIGHTS_OPTIONS}
          handleChange={optionsSelectionHandler}
          defaultSelect={optionsSelected}
        />
      </div>
    </div>
  );
};

export default SelectionSection;
