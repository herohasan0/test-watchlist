import React, { useState } from "react";
import ChartTopSection from "./ChartTopSection";
import Chart from "./Chart";

interface Props {
  data: any;
}

type DropdownOption = {
  label: string;
  value: string;
};

const ChartSection = ({ data }: Props) => {
  const [optionsSelected, setOptionsSelected] = useState({
    label: "Open",
    value: "open",
  });

  const [stocksSelected, setStocksSelected] = useState([
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
  ]);

  const xAxis = data.AAPL.chartData.xAxis;

  const series: any = stocksSelected.map((symbol) => {
    const selectedData = data[symbol.value].chartData[
      optionsSelected.value
    ].map((a: string) => parseFloat(a));

    return {
      type: "line",
      name: symbol.value,
      data: selectedData,
    };
  });

  const stocksSelectionHandler = (e: DropdownOption[]) => {
    setStocksSelected(e);
  };

  const optionsSelectionHandler = (e: DropdownOption) => {
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