import React, { useState } from "react";
import LineGraph from "../charts/lineGraph";
import { lineProps } from "../../model";

// const datas = {
//   "1/22/20": 557,
//   "1/23/20": 657,
//   "1/24/20": 944,
//   "1/25/20": 1437,
//   "1/26/20": 2120,
//   "1/27/20": 2929,
//   "1/28/20": 5580,
//   "1/29/20": 6169,
//   "1/30/20": 8237,
//   "1/31/20": 9927,
//   "2/1/20": 12038,
//   "2/2/20": 16787,
//   "2/3/20": 19887,
//   "2/4/20": 23899,
//   "2/5/20": 27644,
//   "2/6/20": 30806,
//   "2/7/20": 34400,
//   "2/8/20": 37131,
//   "2/9/20": 40162,
// };

interface Data {
  [date: string]: number;
}

interface LineGraphProps {
  data: Data;
}

function Line({ data }: LineGraphProps) {
  const [datas, setData] = useState(data);
  const [key, setKey] = useState(0);

  // Function to update the chart data
  const updateChartData = () => {
    // Update your data here
    setData(datas);

    // Increment the key to trigger re-rendering with a new chart instance
    setKey((prevKey) => prevKey + 1);
  };
  return (
    <div>
      <button onClick={updateChartData}>Update Chart Data</button>
      <h1>COVID-19 Cases</h1>
      <LineGraph data={datas} key={key} />
    </div>
  );
}

export default Line;
