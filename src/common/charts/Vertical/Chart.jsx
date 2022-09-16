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
import { getShortMonth } from "services/dates/format.helpers";

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
  indexAxis: "x",
  scales: {
    x: {
      display: true,
      ticks: {
        minRotation: 90,
        mirror: false,
        color: "#000",
      },
      grid: {
        borderColor: "transparent",
        drawOnChartArea: false,
        drawTicks: true,
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

export function Chart({ content }) {

  let labels = ["Bills", "Food", "Clothes", "Transport", "Fun", "Other"];
  let first = [];
  let second = [];

  labels.forEach((e) => {
      if ([e] in content.first.category) {
        first.push(content.first.category[e]);
      } else {
        first.push(0);
      }
  });

  labels.forEach((e) => {
    if ([e] in content.second.category) {
      second.push(content.second.category[e]);
    } else {
      second.push(0);
    }
});

  const data = {
    labels: ["Expenses", "Bills", "Food", "Clothes", "Transport", "Fun", "Other"],
    datasets: [
      {
        label: getShortMonth(new Date(content.second.year, content.second.month - 1)),
        data: [content.first.expenses, ...second],
        backgroundColor: "#214FF1",
        borderRadius: "50",
        barPercentage: 0.7,
      },
      {
        label: getShortMonth(new Date(content.first.year, content.first.month - 1)),
        data: [content.second.expenses, ...first],
        backgroundColor: ["#3BD0FF"],
        borderRadius: "50",
        barPercentage: 0.7,
      },
    ],
  };

  return <Bar options={options} data={data} />;
}
