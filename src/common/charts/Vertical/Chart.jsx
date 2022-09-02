import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

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
  indexAxis: 'x',
  scales: {
    x: {
      display: true,
      ticks: {
        minRotation: 90,
        mirror: false,
        color: '#000',
      },
      grid: {
        borderColor: 'transparent',
        drawOnChartArea: false,
        drawTicks: true,
        tickColor: 'transparent'
      }
    },
    y: {
      display: false
    }
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

// TOTAL >>> передавать как отдельное значение это общий тотал расходов или бюджетаъ
// labels: [total <переменная>, ...]

export const data = {
  labels: ['Totals', 'Bills', 'Food', 'Clothes', 'Transport', 'Fun', 'Other'],
  datasets: [
    {
      label: 'Sept',
      data: [887, 346,233,234,798,238,764,134],
      backgroundColor: '#214FF1',
      borderRadius: '50',
      barPercentage: 0.7,
    },
    {
      label: 'Oct',
      data: [1000, 315, 465, 238, 245, 782,563],
      backgroundColor: ['#3BD0FF'],
      borderRadius: '50',
      barPercentage: 0.7,
    }
  ],
};

export function Chart() {
  return <Bar options={options} data={data} />;
}