// Distribution.js
import React from 'react';
import './Distribution.css';
import { Doughnut } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

const Distribution = () => {
  const data = {
    labels: ['Clients', 'Pro', 'FII', 'DII'],
    datasets: [
      {
        label: 'OI % Share',
        data: [40, 25, 20, 15],
        backgroundColor: ['#6366f1', '#10b981', '#f59e0b', '#ef4444'],
        borderWidth: 2,
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
    <div className="distribution-container">
         <div className="search-bar">
              <input type="range" />
              <button className="go-btn">GO</button>
            </div>
      <h2 className="chart-title">Distribution</h2>
      <Doughnut data={data} options={options} />
    </div>
  );
};

export default Distribution;
