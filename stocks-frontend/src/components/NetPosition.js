// NetPosition.js
import React from 'react';
import './NetPosition.css';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend);

const NetPosition = () => {
  const data = {
    labels: ['Clients', 'Pro', 'FII', 'DII'],
    datasets: [
      {
        label: 'Long',
        data: [120, 80, 150, 60],
        backgroundColor: '#22c55e',
      },
      {
        label: 'Short',
        data: [100, 90, 100, 70],
        backgroundColor: '#ef4444',
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'bottom',
      },
    },
  };

  return (
    
    <div className="net-position-container">
         <div className="search-bar">
              <input type="range" />
              <button className="go-btn">GO</button>
            </div>
      <h2 className="chart-title">Net Position</h2>
      
      <Bar data={data} options={options} />
      <div className="pcr-text">PCR: 1.21</div>
    </div>
  );
};

export default NetPosition;
