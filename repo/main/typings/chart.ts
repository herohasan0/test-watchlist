import { SelectDropdownOption } from "@/repo/main";
import { MultiValue, SingleValue } from "react-select";

export interface ChartRow {
  xAxis: string[];
  open: string[];
  low: string[];
  high: string[];
  close: string[];
}

export interface ChartTopSectionProps {
  optionsSelected: SelectDropdownOption;
  stocksSelected: SelectDropdownOption[];
  stocksSelectionHandler: (newValue: MultiValue<SelectDropdownOption>) => void;
  optionsSelectionHandler: (
    newValue: SingleValue<SelectDropdownOption>
  ) => void;
}

export interface SelectionSectionProps {
  stocksSelected: SelectDropdownOption[];
  optionsSelected: SelectDropdownOption;
  stocksSelectionHandler: any;
  optionsSelectionHandler: any;
  // stocksSelectionHandler: (newValue: MultiValue<SelectDropdownOption>) => void;
  // optionsSelectionHandler: (
  //   newValue: SingleValue<SelectDropdownOption>
  // ) => void;
}
