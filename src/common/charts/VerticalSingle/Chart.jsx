import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(CategoryScale, LinearScale, BarElement);

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

export function Chart({ expenses }) {
  const arrFlat =
    Object.values(expenses).length && Object.values(expenses).flat();

  const expensesSum = arrFlat.reduce((acc, cur) => acc + cur.amount, 0);

  let obj = {};

  arrFlat.forEach((e) => {
    if (e.category in obj) {
      obj[e.category] += e.amount;
    } else {
      obj[e.category] = e.amount;
    }
  });

  let category = ["Expenses", ...Object.keys(obj)];
  let amount = [expensesSum, ...Object.values(obj)];

  const data = {
    labels: category,
    datasets: [
      {
        label: "Sept",
        data: amount,
        backgroundColor: "#214FF1",
        borderRadius: "50",
        barPercentage: 0.4,
      },
    ],
  };

  return <Bar options={options} data={data} />;
}
