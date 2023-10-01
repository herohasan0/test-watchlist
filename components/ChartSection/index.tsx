import React, { useState } from "react";
import ChartTopSection from "./ChartTopSection";
import Chart from "./Chart";
import {
  INSIGHTS_OPTIONS,
  SYMBOLS_OPTIONS,
  SelectDropdownOption,
  useChartData,
} from "@/repo/main";
import LoadingComponent from "../LoadingComponent";

const ChartSection = () => {
  const [optionsSelected, setOptionsSelected] = useState<SelectDropdownOption>(
    INSIGHTS_OPTIONS[0]
  );

  const [stocksSelected, setStocksSelected] =
    useState<SelectDropdownOption[]>(SYMBOLS_OPTIONS);

  const { data, isLoading, isError } = useChartData();

  if (isLoading) {
    return (
      <div className="grid h-screen place-items-center bg-custom-gray-50">
        <LoadingComponent />
      </div>
    );
  }

  if (isError) return "An error has occurred: ";

  const xAxis = data.AAPL.xAxis;

  const series = stocksSelected.map((symbol) => {
    const selectedData = data[symbol.value][optionsSelected.value].map(
      (a: string) => parseFloat(a)
    );

    return {
      type: "line",
      name: symbol.value,
      data: selectedData,
    };
  });

  const stocksSelectionHandler = (e: SelectDropdownOption[]) => {
    setStocksSelected(e);
  };

  const optionsSelectionHandler = (e: SelectDropdownOption) => {
    setOptionsSelected(e);
  };

  return (
    <div className="w-full">
      <ChartTopSection
        optionsSelected={optionsSelected}
        stocksSelected={stocksSelected}
        stocksSelectionHandler={stocksSelectionHandler}
        optionsSelectionHandler={optionsSelectionHandler}
      />
      <Chart xAxis={xAxis} series={series} />
    </div>
  );
};

export default ChartSection;
