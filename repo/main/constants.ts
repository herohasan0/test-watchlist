import { SelectDropdownOption } from "@/repo/main";

export const symbols = ["AAPL", "IBM"];

export const SYMBOLS_OPTIONS = symbols.map<SelectDropdownOption>(
  (symbol: string) => ({
    label: symbol,
    value: symbol,
  })
);

export const INSIGHTS_OPTIONS: SelectDropdownOption[] = [
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
