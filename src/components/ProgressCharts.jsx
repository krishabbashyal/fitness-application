import React from 'react'
import { Line } from 'react-chartjs-2';


const ProgressCharts = (props) => {
  const data = {
    labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
    datasets: [
      {
        label: 'Test Data',
        data: [12, 9, 13, 15, 12, 13],
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

export default ProgressCharts