import React, { useEffect, useState } from "react";
import Line from "../components/graph/line";
import { lineProps } from "../model";
import axios from "axios";

interface Data {
  [date: string]: number;
}

function MapAndChart() {
  const [casesData, setCasesData] = useState<Data>();

  useEffect(() => {
    axios
      .get("https://disease.sh/v3/covid-19/historical/all?lastdays=all")
      .then((response) => {
        setCasesData({ ...response.data.cases });
        // console.log(response.data.cases);
      });
  }, []);

  return (
    <div className="flex flex-col">
      <div className="w-full flex">
        <div className="w-52">{casesData && <Line data={casesData} />}</div>
        <div className="w-52">{casesData && <Line data={casesData} />}</div>
      </div>
    </div>
  );
}

export default MapAndChart;
