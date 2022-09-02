import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
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

export const data = {
  labels: ['Totals', 'Bills', 'Food', 'Clothes', 'Transport', 'Fun', 'Other'],
  datasets: [
    {
      label: 'Sept',
      data: [887, 346,233,234,798,238,764,134],
      backgroundColor: '#214FF1',
      borderRadius: '50',
      barPercentage: 0.4,
    },
  ],
};

export function Chart() {
  return <Bar options={options} data={data} />;
}