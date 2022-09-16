import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

const options = {
  responsive: true,
  aspectRatio: 2.5,
  plugins: {
    legend: {
      display: false,
    },
  },
};

export function Chart({ percentage }) {
  const data = {
    labels: ["Spent", "Left"],
    datasets: [
      {
        label: "",
        data: [percentage, percentage > 100 ? 0 : 100 - percentage],
        backgroundColor: ["#214FF1", "#F8F8F8"],
        rotation: 270,
        circumference: 180,
        animation: {
          animateRotate: true,
        },
      },
    ],
  };

  return <Doughnut options={options} data={data} />;
}
