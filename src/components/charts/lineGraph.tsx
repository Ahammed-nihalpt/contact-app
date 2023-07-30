import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJs,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  ChartOptions,
  TimeScale,
} from "chart.js";
import "chartjs-adapter-moment";

interface DataPoint {
  x: string;
  y: number;
}

interface LineGraphProps {
  data: { [key: string]: number };
}

const LineGraph: React.FC<LineGraphProps> = ({ data }) => {
  const chartData: DataPoint[] = Object.keys(data).map((key) => ({
    x: key,
    y: data[key],
  }));

  ChartJs.register(
    LineElement,
    CategoryScale,
    LinearScale,
    PointElement,
    TimeScale
  );

  const chartOptions: ChartOptions<"line"> = {
    responsive: true,
    scales: {
      x: {
        type: "time",
        time: {
          unit: "day",
          parser: "MM/DD/YY",
          tooltipFormat: "ll",
        },
        ticks: {
          source: "auto",
          autoSkip: true,
        },
      },
      y: {
        beginAtZero: true,
        suggestedMax: Math.max(...Object.values(data)) * 1.1,
      },
    },
  };

  const chartDataConfig = {
    labels: chartData.map((point) => point.x),
    datasets: [
      {
        label: "Data",
        data: chartData.map((point) => point.y),
        fill: false,
        borderColor: "rgba(75,192,192,1)",
      },
    ],
  };

  return <Line data={chartDataConfig} options={chartOptions} />;
};

export default LineGraph;
