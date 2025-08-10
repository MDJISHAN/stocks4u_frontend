import React, { useEffect, useState } from 'react';
import './IntradayScan.css';
import { Line } from 'react-chartjs-2';
import IntradayBoost from './Intradayboost.js';
import TopGainers from './TopGainers';
import TopLevelStocks from './TopLevelStocks';
import LowLevelStocks from './LowLevelStocks';
import VolumeBoost from './VolumeBoost.js';



import {
Chart as ChartJS,
LineElement,
CategoryScale,
LinearScale,
PointElement,
} from 'chart.js';

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement);

const IntradayScan = ({ onBack }) => {
const [stockData, setStockData] = useState([]);
const [loading, setLoading] = useState(true);
const [error, setError] = useState('');
const [showBoost, setShowBoost] = useState(false);
const [showGainers, setShowGainers] = useState(false);
const [showTopLevel, setShowTopLevel] = useState(false);
const [showLowLevel, setShowLowLevel] = useState(false);
const [ShowVolume, setShowVolume] = useState(false);






const fetchTurnoverStocks = async () => {
setLoading(true);
try {
const res = await fetch('http://127.0.0.1:5000/high-turnover-stocks?top=10');
const data = await res.json();
  const formatted = [...(data.fo_stocks || []), ...(data.non_fo_stocks || [])].map((stock, index) => {
    const turnoverCr = stock.turnover / 1e7;
    const wavePoints = Array.from({ length: 12 }, (_, i) =>
      turnoverCr + Math.sin(i) * turnoverCr * 0.05
    );

    return {
      rank: index + 1,
      symbol: stock.symbol,
      turnover: turnoverCr.toFixed(2),
      chartData: {
        labels: wavePoints.map((_, i) => i),
        datasets: [
          {
            data: wavePoints,
            borderColor: turnoverCr > 50 ? '#00FF80' : '#FF4D4D',
            borderWidth: 2,
            pointRadius: 0,
            tension: 0.4,
            fill: false,
          },
        ],
      },
    };
  });

  if (formatted.length === 0) {
    setError('No high turnover stock data found.');
  }

  setStockData(formatted);
} catch (err) {
  setError('Failed to load data.');
}
setLoading(false);
};

useEffect(() => {
fetchTurnoverStocks();
}, []);
if (showBoost) {
  return <IntradayBoost onBack={() => setShowBoost(false)} />;
}
if (showBoost) return <IntradayBoost onBack={() => setShowBoost(false)} />;
if (showGainers) return <TopGainers onBack={() => setShowGainers(false)} />;
if (showTopLevel) return <TopLevelStocks onBack={() => setShowTopLevel(false)} />;
if (showLowLevel) return <LowLevelStocks onBack={() => setShowLowLevel(false)} />;
if (ShowVolume) return <VolumeBoost onBack={() => setShowVolume(false)} />;



return (
<div className="intraday-page">
{/* Header */}
<header className="intraday-header">
<div className="intraday-header-container">
<<<<<<< HEAD
<div className="logo">
          <img src="images/Final Font Stocks4U1.png" className="logo-text" />
=======
<div className="intraday-logo">
<span className="intraday-logo-icon">📈</span>
<span className="intraday-logo-text">stocks4u</span>
>>>>>>> 3fa6b625b19d922458b7a7ae2a457254c26ee838
</div>
<div className="intraday-search">
<input type="text" placeholder="Search Company" />
</div>
<div className="intraday-user">
<button onClick={onBack}>← Back to Dashboard</button>
</div>
</div>
</header>

  {/* Page Content */}
  <main className="intraday-main">
    <div className="intraday-top">
      <h1 className="page-title">
        Intraday Scan <span className="info-icon">ℹ️</span>
      </h1>
      <div className="categories">
        <button className="active">High Turnover Stocks</button>
        <button onClick={() => setShowBoost(true)} className='Intraday-buttons'>Intraday Boost</button>

        <button onClick={() => setShowVolume(true)} className='Intraday-buttons'>Volume Boost</button>
        <button onClick={() => setShowGainers(true)} className='Intraday-buttons'>Top Gainers</button>
        <button onClick={() => setShowTopLevel(true)} className='Intraday-buttons'>Top Level Stocks</button>
       <button onClick={() => setShowLowLevel(true)} className='Intraday-buttons'>Low Level Stocks</button>

      </div>
      <div className="filters">
        <span>Filter By:</span>
        <button className="bullish">Bullish</button>
        <button className="bearish">Bearish</button>
      </div>
    </div>

    {/* Table Section */}
    <div className="intraday-table-container">
      {loading ? (
        <div className="loading">⏳ Loading stock data...</div>
      ) : error ? (
        <div className="error-message">⚠️ {error}</div>
      ) : (
        <div className="intraday-table">
          <div className="table-header">
            <div>Rank</div>
            <div>Symbol</div>
            <div>Turnover (₹ Cr)</div>
           
          </div>

          {stockData.map((stock) => (
            <div key={stock.symbol} className="table-row">
              <div>{stock.rank}</div>
              <div style={{paddingLeft: '70px' }}>{stock.symbol}</div>
              <div style={{paddingLeft: '430px' }}>{stock.turnover}</div>
              <div className="chart-cell" style={{paddingLeft: '110px' }}>
                <Line
                  data={stock.chartData}
                  options={{
                    responsive: true,
                    plugins: { legend: { display: false } },
                    scales: { x: { display: false }, y: { display: false } },
                  }}
                  height={40}
                  width={100}
                />
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

export default IntradayScan;
