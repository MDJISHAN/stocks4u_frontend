import React, { useState } from 'react';
import './HighLowPage.css';

const HighLowPage = ({ onBack }) => {
  const [activeTab, setActiveTab] = useState('2 Day High & Low');
  const [filterBy, setFilterBy] = useState('High');

  const highLowData = [
    { 
      name: 'RELIANCE IND', 
      symbol: 'RELIANCE', 
      ltp: 2456.75, 
      high: 2489.50,
      low: 2398.25,
      volume: '1,245,678',
      change: 2.15,
      chart: 'up'
    },
    { 
      name: 'TCS LIMITED', 
      symbol: 'TCS', 
      ltp: 3678.90, 
      high: 3712.45,
      low: 3589.75,
      volume: '987,654',
      change: 1.85,
      chart: 'up'
    },
    { 
      name: 'HDFC BANK', 
      symbol: 'HDFCBANK', 
      ltp: 1687.30, 
      high: 1698.80,
      low: 1645.20,
      volume: '2,345,789',
      change: -0.95,
      chart: 'down'
    },
    { 
      name: 'INFOSYS LTD', 
      symbol: 'INFY', 
      ltp: 1456.25, 
      high: 1478.90,
      low: 1423.60,
      volume: '1,567,890',
      change: 1.45,
      chart: 'up'
    },
    { 
      name: 'ICICI BANK', 
      symbol: 'ICICIBANK', 
      ltp: 945.80, 
      high: 958.25,
      low: 932.45,
      volume: '1,789,234',
      change: 0.65,
      chart: 'up'
    }
  ];

  const tabs = ['2 Day High & Low', 'Weekly High & Low', 'Monthly High & Low'];
  const filterOptions = ['High', 'Low', 'Volume', 'Change'];

  return (
    <div className="high-low-page">
      {/* Header */}
      <header className="high-low-header">
        <div className="high-low-header-container">
          <div className="high-low-logo">
            <span className="high-low-logo-icon">📈</span>
            <span className="high-low-logo-text">stocks4u</span>
          </div>
          
          <div className="high-low-search">
            <input 
              type="text" 
              placeholder="Search stocks"
              className="high-low-search-input"
            />
          </div>
          
          <div className="high-low-user">
            <button className="high-low-back-btn" onClick={onBack}>
              ← Back to Dashboard
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="high-low-main">
        <div className="high-low-container">
          <div className="high-low-title">
            <h1>2 Day High & Low</h1>
            <div className="high-low-info">
              <span className="info-icon">ℹ️</span>
              <span className="info-text">Track daily high & low breakouts</span>
            </div>
          </div>

          {/* Tabs */}
          <div className="high-low-tabs">
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
          <div className="high-low-controls">
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
              <button className="action-btn screener">Screen</button>
              <button className="action-btn export">Export</button>
            </div>
          </div>

          {/* High/Low Summary */}
          <div className="high-low-summary">
            <div className="summary-card">
              <h3>Market Summary</h3>
              <div className="summary-stats">
                <div className="stat-item">
                  <span className="stat-icon">📊</span>
                  <span className="stat-label">New Highs</span>
                  <span className="stat-value positive">127</span>
                </div>
                <div className="stat-item">
                  <span className="stat-icon">📉</span>
                  <span className="stat-label">New Lows</span>
                  <span className="stat-value negative">43</span>
                </div>
                <div className="stat-item">
                  <span className="stat-icon">🎯</span>
                  <span className="stat-label">Breakouts</span>
                  <span className="stat-value">84</span>
                </div>
                <div className="stat-item">
                  <span className="stat-icon">📈</span>
                  <span className="stat-label">Advancing</span>
                  <span className="stat-value positive">65%</span>
                </div>
              </div>
            </div>
          </div>

          {/* Stock Table */}
          <div className="high-low-table-container">
            <div className="table-header-info">
              <span className="results-count">Showing {highLowData.length} stocks</span>
              <span className="last-updated">Last updated: 30 seconds ago</span>
            </div>

            <div className="high-low-table">
              <div className="table-row table-header-row">
                <div className="table-cell">Name</div>
                <div className="table-cell">Symbol</div>
                <div className="table-cell">LTP</div>
                <div className="table-cell">2D High</div>
                <div className="table-cell">2D Low</div>
                <div className="table-cell">Volume</div>
                <div className="table-cell">Change%</div>
                <div className="table-cell">Chart</div>
              </div>

              {highLowData.map((stock, index) => (
                <div key={index} className="table-row stock-row">
                  <div className="table-cell stock-name">
                    <div className="stock-info">
                      <span className="stock-title">{stock.name}</span>
                      <span className="stock-sector">Equity</span>
                    </div>
                  </div>
                  <div className="table-cell stock-symbol">{stock.symbol}</div>
                  <div className="table-cell stock-price">₹{stock.ltp.toFixed(2)}</div>
                  <div className="table-cell stock-high">₹{stock.high.toFixed(2)}</div>
                  <div className="table-cell stock-low">₹{stock.low.toFixed(2)}</div>
                  <div className="table-cell stock-volume">{stock.volume}</div>
                  <div className={`table-cell stock-change ${stock.change >= 0 ? 'positive' : 'negative'}`}>
                    {stock.change >= 0 ? '+' : ''}{stock.change.toFixed(2)}%
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

          {/* Performance Analysis */}
          <div className="performance-analysis">
            <div className="analysis-card">
              <h3>High & Low Analysis</h3>
              <div className="analysis-grid">
                <div className="analysis-item">
                  <div className="analysis-label">Stocks near High</div>
                  <div className="analysis-value positive">78</div>
                  <div className="analysis-percentage">+12.5%</div>
                </div>
                <div className="analysis-item">
                  <div className="analysis-label">Stocks near Low</div>
                  <div className="analysis-value negative">32</div>
                  <div className="analysis-percentage">-8.2%</div>
                </div>
                <div className="analysis-item">
                  <div className="analysis-label">Breakout Stocks</div>
                  <div className="analysis-value">45</div>
                  <div className="analysis-percentage">+5.7%</div>
                </div>
                <div className="analysis-item">
                  <div className="analysis-label">Breakdown Stocks</div>
                  <div className="analysis-value negative">18</div>
                  <div className="analysis-percentage">-3.1%</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default HighLowPage;