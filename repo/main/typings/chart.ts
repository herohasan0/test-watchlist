import { SelectDropdownOption } from "@/repo/main";

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
  stocksSelectionHandler: (e: SelectDropdownOption[]) => void;
  optionsSelectionHandler: (e: SelectDropdownOption) => void;
}

export interface SelectionSectionProps {
  stocksSelected: SelectDropdownOption[];
  optionsSelected: SelectDropdownOption;
  // stocksSelectionHandler: (newValue: MultiValue<SelectDropdownOption>) => void;
  stocksSelectionHandler: any;
  optionsSelectionHandler: any;
  // optionsSelectionHandler: (
  //   newValue: SingleValue<SelectDropdownOption>
  // ) => void;
}
