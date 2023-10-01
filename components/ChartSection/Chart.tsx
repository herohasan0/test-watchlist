import React, { FC, useRef } from "react";
import * as Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

const Chart: FC<HighchartsReact.Props> = (props) => {
  const options: Highcharts.Options = {
    tooltip: {
      valueDecimals: 2,
    },
    title: {
      text: "",
    },
    xAxis: {
      categories: props.xAxis,
      type: "linear",
    },
    series: props.series,
  };

  const chartComponentRef = useRef<HighchartsReact.RefObject>(null);

  return (
    <div className="w-full">
      <HighchartsReact
        highcharts={Highcharts}
        options={options}
        ref={chartComponentRef}
        {...props}
      />
    </div>
  );
};

export default Chart;
