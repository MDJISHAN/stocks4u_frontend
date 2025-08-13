import React, { useEffect, useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import './OilMonitor.css';
import NetPosition from './NetPosition';
import Distribution from './Distribution';

const OilMonitor = ({ onBack }) => {
  const [chartData, setChartData] = useState([]);
   const [activeTab, setActiveTab] = useState('main');

  useEffect(() => {
    fetch('http://31.97.232.39:5000/api/oi') // Replace with your actual backend URL
      .then(response => response.json())
      .then(data => {
        const merged = mergeOI(data.data[0]);
        setChartData(merged);
      })
      .catch(error => console.error('Error fetching OI data:', error));
  }, []);

  const mergeOI = (data) => {
    const grouped = {};

    data.forEach(item => {
      const strike = item['Strike Price'];
      if (!grouped[strike]) {
        grouped[strike] = { strike: strike, CE: 0, PE: 0 };
      }
      if (item['Option Type'] === 'CE') grouped[strike].CE = -item.OI;
      if (item['Option Type'] === 'PE') grouped[strike].PE = item.OI;
    });

    return Object.values(grouped).sort((a, b) => a.strike - b.strike);
  };

  return (
    <div className="oil-monitor-page">
      {/* Header */}
      <header className="oil-header">
        <div className="oil-header-container">
          <div className="logo">
          <img src="images/Final Font Stocks4U1.png" className="logo-text" />
          </div>

          <div className="oil-search">
            <input 
              type="text" 
              placeholder="Search OI data"
              className="oil-search-input"
            />
          </div>

          <div className="oil-user">
            <button className="oil-back-btn" onClick={onBack}>
              ← Back to Dashboard
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
       {activeTab === 'main' && (
        <>
          {/* ORIGINAL OIL MONITOR HEADER SECTION */}
          <div className="oil-header-wrapper">
            <h1 className="oil-title">OI Monitor</h1>
            <div className="button-row">
              <button className="tab-button" onClick={() => setActiveTab('net')}>Net Position</button>
              <button className="tab-button" onClick={() => setActiveTab('distribution')}>Distribution</button>
            </div>
            <div className="search-bar">
               9:15<input type="range" />  3:30
              <button className="go-btn">GO</button>
            </div>
          </div>

          {/* MAIN CONTENT */}
          <div className="main-oil-content">
            {/* Insert your full original content layout here */}
          </div>
        </>
      )}

      {activeTab === 'net' && (
        <>
          <button onClick={() => setActiveTab('main')} className="tab-back">← Back</button>
          <NetPosition />
        </>
      )}

      {activeTab === 'distribution' && (
        <>
          <button onClick={() => setActiveTab('main')} className="tab-back">← Back</button>
          <Distribution />
        </>
      )}
      <main className="oil-main">
        <div className="oil-container">
          <div className="oil-title">
            <h1>OI Monitor</h1>
            <div className="oil-info">
              <span className="info-icon">ℹ️</span>
              <span className="info-text">Live Option Interest Data</span>
            </div>
          </div>

          <div className="oil-chart">
            <ResponsiveContainer width="100%" height={600}>
              <BarChart
                data={chartData}
                layout="vertical"
                margin={{ top: 20, right: 50, bottom: 20, left: 100 }}
              >
                <XAxis type="number" stroke="#ccc" />
                <YAxis dataKey="strike" type="category" stroke="#ccc" />
                <Tooltip contentStyle={{ backgroundColor: "#1f2937", borderColor: "#374151" }} />
                <Legend />
                <Bar dataKey="CE" fill="#f87171" barSize={20} name="Bears (CE)" />
                <Bar dataKey="PE" fill="#4ade80" barSize={20} name="Bulls (PE)" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </main>
    </div>
  );
};

export default OilMonitor;
