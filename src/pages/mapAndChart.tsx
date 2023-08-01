import React, { useEffect, useState } from "react";
import Line from "../components/graph/line";
import axios from "axios";
import Map from "../components/map/map";
import { mapCountryData } from "../model";

interface Data {
  [date: string]: number;
}

function MapAndChart() {
  const [casesData, setCasesData] = useState<Data>();
  const [deathsData, setDeathsData] = useState<Data>();
  const [recoveredData, setrecoveredData] = useState<Data>();
  const [mapData, SetMapData] = useState<mapCountryData[]>();

  useEffect(() => {
    axios
      .get("https://disease.sh/v3/covid-19/historical/all?lastdays=all")
      .then((response) => {
        setCasesData({ ...response.data.cases });
        setDeathsData({ ...response.data.deaths });
        setrecoveredData({ ...response.data.recovered });
        // console.log(response.data.cases);
      });
    axios.get("https://disease.sh/v3/covid-19/countries").then((response) => {
      SetMapData(response.data);
    });
  }, []);

  return (
    <div className="flex flex-col h-screen overflow-hidden">
      <div className="p-5">
        <h1 className="text-3xl font-semibold">Graph</h1>
      </div>
      <div className="flex w-full p-5  justify-stretch">
        <div className="h-full w-full ">
          {casesData && <Line data={casesData} title="cases" />}
        </div>
        <div className="h-full w-full">
          {deathsData && <Line data={deathsData} title="deaths" />}
        </div>
        <div className="h-full w-full">
          {recoveredData && <Line data={recoveredData} title="recovered" />}
        </div>
      </div>
      <div>
        <div>
          <h1 className="text-3xl font-semibold">Map</h1>
        </div>
        <div className=" h-2 p-5">{mapData && <Map data={mapData} />}</div>
      </div>
    </div>
  );
}

export default MapAndChart;
