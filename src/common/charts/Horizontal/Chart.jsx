import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import { getMonth } from "services/dates/format.helpers";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  aspectRatio: 2.5,
  indexAxis: "y",
  scales: {
    x: {
      display: false,
      ticks: {
        minRotation: 90,
        mirror: false,
        color: "#000",
      },
      grid: {
        borderColor: "transparent",
        drawOnChartArea: false,
        drawTicks: false,
        tickColor: "transparent",
      },
    },
    y: {
      display: false,
    },
  },
  plugins: {
    legend: {
      display: false,
    },
    title: {
      display: false,
    },
  },
};


export function Chart({content, type}) {

  const data = {
    labels: [""],
    datasets: [
      {
        label: getMonth(new Date(content.first.year, content.first.month - 1)),
        data: [content.second[type]],
        backgroundColor: ["#3BD0FF"],
        borderRadius: "50",
        barPercentage: 0.6,
      },
      {
        label: getMonth(new Date(content.second.year, content.second.month - 1)),
        data: [content.first[type]],
        backgroundColor: "#214FF1",
        borderRadius: "50",
        barPercentage: 0.6,
      }
    ],
  };
  

  return <Bar options={options} data={data} />;
}
