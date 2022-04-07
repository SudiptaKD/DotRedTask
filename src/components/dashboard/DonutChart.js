import { ArcElement, Chart as ChartJS, Legend, Tooltip } from 'chart.js';
import React from 'react';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

const DonutChart = ({value}) => {

    const data = {
        labels: ['Delivered', 'Out of delivery', 'Returned', 'RTO', 'Late Orders'],
        datasets: [
          {
            label: '# of Votes',
            data: [value._id, value.age, value.latitude, value.index, value.longitude],
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(153, 102, 255, 0.2)',
            ],
            borderColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)',
            ],
            borderWidth: 1,
          },
        ],
      };

  return (
    <Doughnut style={{'maxHeight':'300px','marginBottom':'5px'}} data={data} />
  )
}

export default DonutChart

