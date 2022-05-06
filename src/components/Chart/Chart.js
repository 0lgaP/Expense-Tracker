import React from "react";
import "./Chart.css";
import ChartBar from "./ChartBar";

const Chart = (props) => {
  const { dataPoints } = props;
  const dataPointValues = dataPoints.map((data) => data.value);
  const totalMax = Math.max(...dataPointValues); //max needs args not array, so we spread the dataPointValues
  return (
    <div className="chart">
      {dataPoints.map((data) => (
        <ChartBar
          key={data.label}
          value={data.value}
          maxValue={totalMax}
          label={data.label}
        />
      ))}
    </div>
  );
};

export default Chart;
