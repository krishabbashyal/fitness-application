import React from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const ChartOne = (props) => {
  const data = {
    labels: ['11/08/23', '11/13/23', '11/16/23', '11/20/23', '11/23/23', '11/27/23'],
    datasets: [
      {
        label: 'Test Data',
        data: [160, 155, 165, 180, 185, 175],
        backgroundColor: [
          'rgba(30, 35, 44, 1.0)',
          // ... more colors
        ],
        borderColor: [
          'rgba(30, 35, 44, 1.0)',
          // ... more colors
        ],
        borderWidth: 4,
      },
    ],
  };
  
  const options = {
    scales: {
      y: {
        beginAtZero: false,
      },
    },
    plugins: {
      legend: {

          display: false
        
      }
    }
  };

  return (
    <div className='mt-4'>
      <p className='mb-2'>{props.label}</p>
      <Line data={data} options={options} />
    </div>
  )
}

export default ChartOne