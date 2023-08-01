import React, { useState } from "react";
import LineGraph from "../charts/lineGraph";

interface Data {
  [date: string]: number;
}

interface LineGraphProps {
  data: Data;
  title: string;
}

function Line({ data, title }: LineGraphProps) {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [datas, setData] = useState(data);

  return (
    <div className="w-full h-full">
      <h1>COVID-19 {title}</h1>
      <LineGraph data={datas} />
    </div>
  );
}

export default Line;
