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

export const data = {
  labels: ["Red", "Blue"],
  datasets: [
    {
      label: "# of Votes",
      data: [30, 70],
      backgroundColor: ["#214FF1", "#F8F8F8"],
      borderColor: ["#214FF1", "#214FF1"],
      borderWidth: 2,
      rotation: 0,
      circumference: 360,
      animation: {
        animateRotate: true,
      },
    },
  ],
};

export function Chart({percentage}) {


  const data = {
    labels: ["Spent", "Left"],
    datasets: [
      {
        label: "",
        data: [percentage, percentage > 100 ? 0 : 100 - percentage],
        backgroundColor: ["#214FF1", "#F8F8F8"],
        borderColor: ["#214FF1", "#214FF1"],
        borderWidth: 2,
        rotation: 0,
        circumference: 360,
        animation: {
          animateRotate: true,
        },
      },
    ],
  };

  return <Doughnut options={options} data={data} />;
}