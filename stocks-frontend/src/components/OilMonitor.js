import React, { useEffect, useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import './OilMonitor.css';

const OilMonitor = ({ onBack }) => {
  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    fetch('${process.env.REACT_APP_API_BASE_URL}/api/oi') // Replace with your actual backend URL
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
          <div className="oil-logo">
            <span className="oil-logo-icon">🛢️</span>
            <span className="oil-logo-text">stocks4u</span>
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
