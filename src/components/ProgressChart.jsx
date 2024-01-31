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

const ProgressChart = (props) => {
  const data = {
    labels: ['06/01/23', '07/01/23', '08/01/23', '09/01/23', '10/01/23', '11/08/23'],
    datasets: [
      {
        label: 'Test Data',
        data: [33, 35, 34, 36, 37, 39],
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

export default ProgressChart