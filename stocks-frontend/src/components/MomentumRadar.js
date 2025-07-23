import React, { useState } from 'react';
import './MomentumRadar.css';

const MomentumRadar = ({ onBack }) => {
  const [activeTab, setActiveTab] = useState('Momentum Radar');
  const [filterBy, setFilterBy] = useState('Volume');

  const momentumData = [
    { 
      name: 'AXIS SECURITIES', 
      symbol: 'AXISSEC', 
      ltp: 1657.50, 
      percentageChange: 4.85, 
      volume: 124587,
      rsi: 78.5,
      chart: 'up',
      momentum: 'Strong'
    },
    { 
      name: 'ADITYA CHEMICALS', 
      symbol: 'ADITYACHEM', 
      ltp: 908.75, 
      percentageChange: 3.92, 
      volume: 89654,
      rsi: 65.2,
      chart: 'up',
      momentum: 'Moderate'
    },
    { 
      name: 'BIRLASOFT GRANULES', 
      symbol: 'BIRLASOFTG', 
      ltp: 2569.30, 
      percentageChange: -2.45, 
      volume: 67543,
      rsi: 35.8,
      chart: 'down',
      momentum: 'Weak'
    },
    { 
      name: 'BAJAJ HINDUSTHAN', 
      symbol: 'BAJAJHIND', 
      ltp: 1845.80, 
      percentageChange: 2.18, 
      volume: 95876,
      rsi: 58.7,
      chart: 'up',
      momentum: 'Moderate'
    }
  ];

  const tabs = ['Momentum Radar', 'RSI Scanner', 'Volume Surge'];
  const filterOptions = ['Volume', 'RSI', 'Momentum', 'Price'];

  return (
    <div className="momentum-radar-page">
      {/* Header */}
      <header className="momentum-header">
        <div className="momentum-header-container">
          <div className="momentum-logo">
            <span className="momentum-logo-icon">📈</span>
            <span className="momentum-logo-text">stocks4u</span>
          </div>
          
          <div className="momentum-search">
            <input 
              type="text" 
              placeholder="Search Stocks"
              className="momentum-search-input"
            />
          </div>
          
          <div className="momentum-user">
            <button className="momentum-back-btn" onClick={onBack}>
              ← Back to Dashboard
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="momentum-main">
        <div className="momentum-container">
          <div className="momentum-title">
            <h1>Momentum Radar</h1>
            <div className="momentum-info">
              <span className="info-icon">ℹ️</span>
              <span className="info-text">Real-time momentum analysis</span>
            </div>
          </div>

          {/* Tabs */}
          <div className="momentum-tabs">
            {tabs.map(tab => (
              <button
                key={tab}
                className={`tab-btn ${activeTab === tab ? 'active' : ''}`}
                onClick={() => setActiveTab(tab)}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Controls */}
          <div className="momentum-controls">
            <div className="filter-section">
              <label>Filter By:</label>
              <select 
                value={filterBy} 
                onChange={(e) => setFilterBy(e.target.value)}
                className="filter-select"
              >
                {filterOptions.map(option => (
                  <option key={option} value={option}>{option}</option>
                ))}
              </select>
            </div>
            
            <div className="action-buttons">
              <button className="action-btn screener">Scanner</button>
              <button className="action-btn export">Export</button>
            </div>
          </div>

          {/* Momentum Chart */}
          <div className="momentum-chart-section">
            <div className="chart-header">
              <h3>Momentum Overview</h3>
              <div className="chart-controls">
                <button className="chart-btn active">5M</button>
                <button className="chart-btn">15M</button>
                <button className="chart-btn">1H</button>
                <button className="chart-btn">1D</button>
              </div>
            </div>
            
            <div className="momentum-chart">
              <div className="chart-container">
                <div className="momentum-bars">
                  <div className="momentum-bar strong">
                    <div className="bar-fill" style={{ height: '80%' }}></div>
                    <span className="bar-label">Strong</span>
                  </div>
                  <div className="momentum-bar moderate">
                    <div className="bar-fill" style={{ height: '60%' }}></div>
                    <span className="bar-label">Moderate</span>
                  </div>
                  <div className="momentum-bar weak">
                    <div className="bar-fill" style={{ height: '30%' }}></div>
                    <span className="bar-label">Weak</span>
                  </div>
                  <div className="momentum-bar neutral">
                    <div className="bar-fill" style={{ height: '50%' }}></div>
                    <span className="bar-label">Neutral</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Stock Table */}
          <div className="momentum-table-container">
            <div className="table-header-info">
              <span className="results-count">Showing {momentumData.length} momentum stocks</span>
              <span className="last-updated">Last updated: 1 minute ago</span>
            </div>

            <div className="momentum-table">
              <div className="table-row table-header-row">
                <div className="table-cell">Name</div>
                <div className="table-cell">Symbol</div>
                <div className="table-cell">LTP</div>
                <div className="table-cell">Change%</div>
                <div className="table-cell">Volume</div>
                <div className="table-cell">RSI</div>
                <div className="table-cell">Momentum</div>
                <div className="table-cell">Chart</div>
              </div>

              {momentumData.map((stock, index) => (
                <div key={index} className="table-row stock-row">
                  <div className="table-cell stock-name">
                    <div className="stock-info">
                      <span className="stock-title">{stock.name}</span>
                      <span className="stock-sector">Technology</span>
                    </div>
                  </div>
                  <div className="table-cell stock-symbol">{stock.symbol}</div>
                  <div className="table-cell stock-price">₹{stock.ltp.toFixed(2)}</div>
                  <div className={`table-cell stock-change ${stock.percentageChange >= 0 ? 'positive' : 'negative'}`}>
                    <span className="change-value">
                      {stock.percentageChange >= 0 ? '+' : ''}{stock.percentageChange.toFixed(2)}%
                    </span>
                  </div>
                  <div className="table-cell stock-volume">{stock.volume.toLocaleString()}</div>
                  <div className="table-cell stock-rsi">
                    <span className={`rsi-value ${stock.rsi > 70 ? 'overbought' : stock.rsi < 30 ? 'oversold' : 'normal'}`}>
                      {stock.rsi}
                    </span>
                  </div>
                  <div className="table-cell stock-momentum">
                    <span className={`momentum-tag ${stock.momentum.toLowerCase()}`}>
                      {stock.momentum}
                    </span>
                  </div>
                  <div className="table-cell stock-chart">
                    <div className="chart-container">
                      <div className={`mini-chart-line ${stock.chart}`}>
                        <div className="chart-area"></div>
                        <div className="chart-points">
                          <div className="point"></div>
                          <div className="point"></div>
                          <div className="point"></div>
                          <div className="point"></div>
                          <div className="point"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Momentum Summary */}
          <div className="momentum-summary">
            <div className="summary-card">
              <h3>Momentum Summary</h3>
              <div className="summary-stats">
                <div className="stat-item">
                  <span className="stat-label">Strong Momentum</span>
                  <span className="stat-value strong">24 stocks</span>
                </div>
                <div className="stat-item">
                  <span className="stat-label">Moderate Momentum</span>
                  <span className="stat-value moderate">18 stocks</span>
                </div>
                <div className="stat-item">
                  <span className="stat-label">Weak Momentum</span>
                  <span className="stat-value weak">12 stocks</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default MomentumRadar;