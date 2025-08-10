// IntradayBoost.js
import React, { useEffect, useState } from 'react';
import './IntradayBoost.css';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement
} from 'chart.js';

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement);

const IntradayBoost = ({ onBack }) => {
  const [boostData, setBoostData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchBoostData = async () => {
      try {
        const res = await fetch('http://127.0.0.1:5000/top-and-low-growth'); // <-- Your API endpoint
        const data = await res.json();
        setBoostData(data);
      } catch (err) {
        setError('Failed to load data.');
      } finally {
        setLoading(false);
      }
    };

    fetchBoostData();
  }, []);

  const generateChartData = (ltp) => {
    const base = ltp / 1000;
    const points = Array.from({ length: 10 }, (_, i) => base + Math.sin(i) * base * 0.05);
    return {
      labels: points.map((_, i) => i),
      datasets: [{
        data: points,
        borderColor: base > 1 ? '#00FF80' : '#FF4D4D',
        borderWidth: 2,
        pointRadius: 0,
        fill: false,
        tension: 0.4
      }]
    };
  };

  return (
    <div className="intraday-page">
      <header className="intraday-header">
        <div className="intraday-header-container">
<<<<<<< HEAD
<div className="logo">
          <img src="images/Final Font Stocks4U1.png" className="logo-text" /></div>          <div className="intraday-search"><input type="text" placeholder="Search Company" /></div>
=======
          <div className="intraday-logo"><span className="intraday-logo-icon">📈</span><span className="intraday-logo-text">stocks4u</span></div>
          <div className="intraday-search"><input type="text" placeholder="Search Company" /></div>
>>>>>>> 3fa6b625b19d922458b7a7ae2a457254c26ee838
          <div className="intraday-user"><button onClick={onBack}>← Back to Dashboard</button></div>
        </div>
      </header>

      <main className="intraday-main">
        <div className="intraday-top">
          <h1 className="page-title">Intraday Boost <span className="info-icon">ℹ️</span></h1>
        </div>

        <div className="intraday-table-container">
          {loading ? (
            <div className="loading">Loading data...</div>
          ) : error ? (
            <div className="error-message">{error}</div>
          ) : (
            <div className="intraday-table">
              <div className="table-header">
                <div>Rank</div>
              
                <div>LTP</div>
                <div>Percent Change</div>
                <div>Z Score</div>
                <div>Chart</div>
              </div>

              {boostData.map((item, idx) => (
                <div className="table-row" key={item.stock}>
                  <div>{idx + 1}</div>
                  <div>{item.stock}</div>
                  <div>{item.ltp}</div>
                  <div className={item.percent_change >= 0 ? 'positive' : 'negative'}>
                    {item.percent_change >= 0 ? `+${item.percent_change}` : item.percent_change}
                  </div>
                  <div>{item.z_score}</div>
                  <div className="chart-cell">
                    <Line data={generateChartData(item.ltp)} options={{
                      responsive: true,
                      plugins: { legend: { display: false } },
                      scales: { x: { display: false }, y: { display: false } }
                    }} height={40} width={100} />
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default IntradayBoost;
