import {
  BarElement, CategoryScale, Chart as ChartJS, Legend, LinearScale, Title,
  Tooltip
} from 'chart.js';
import React from 'react';
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
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: true,
      text: 'Status Graph',
    },
  },
};


const Chart = ({value}) => {

  const labels = [...new Set(value.map(item => item.name))];

  const data = {
  labels,
  datasets: [
    {
      label: 'Delivered',
      data: value.map((v) => v._id),
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    },
    {
      label: 'Out Of Delivery',
      data: value.map((v) => v.age),
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
    },
    {
      label: 'Returned',
      data: value.map((v) => v.index),
      backgroundColor: 'rgba(153, 62, 235, 0.5)',
    },
  ],
};

  return (
    <div >
      <Bar style={{'maxHeight':'400px'}} options={options} data={data} />
    </div>
  )
}

export default Chart