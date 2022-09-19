import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const Chart = () => {
  const options = {
    scales: {
      x: {
        // min: 2, //отображать данные от 5 по оси Х
        // max: 12, //отображать данные до 9, ось Х
        grid: {
          color: "transparent",
          borderColor: "transparent",
          tickColor: "transparent",
        },
        ticks: {
          color: "#214FF1",
        },
      },
      y: {
        display: false,
      },
    },
    responsive: true,
    // aspectRatio: 2.5,
    plugins: {
      legend: {
        display: false,
      },
    },
  };

  const data = {
    labels: [1,2,3,4,5,6,7,8,9,10,11],
    datasets: [
      {
        label: "",
        data: [457,234,5668,767,24346,235,23,653,467,32,154],
        backgroundColor: ["#214FF1"],
        borderColor: "#9BA5F8",
        // borderWidth: 3,
        // rotation: 0,
        // circumference: 360,
        pointRadius: 4,
        animation: {
          animateRotate: true,
        },
      },
    ],
  };

  return <Line options={options} data={data} />;
};
