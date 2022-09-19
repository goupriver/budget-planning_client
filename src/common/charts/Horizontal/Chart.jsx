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

export const data = {
  labels: ["Totals"],
  datasets: [
    {
      label: "Sept",
      data: [887],
      backgroundColor: "#214FF1",
      borderRadius: "50",
      barPercentage: 0.6,
    },
    {
      label: "Oct",
      data: [1000],
      backgroundColor: ["#3BD0FF"],
      borderRadius: "50",
      barPercentage: 0.6,
    },
  ],
};

export function Chart() {
  return <Bar options={options} data={data} />;
}
