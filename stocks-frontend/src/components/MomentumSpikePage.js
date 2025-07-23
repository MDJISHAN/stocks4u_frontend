import React, { useState } from 'react';
import './MomentumSpikePage.css';

const MomentumSpikePage = ({ onBack }) => {
  const [activeTab, setActiveTab] = useState('5 Min Momentum');
  const [filterBy, setFilterBy] = useState('Momentum');

  const momentumData = [
    { 
      name: 'WIPRO LTD', 
      symbol: 'WIPRO', 
      ltp: 445.20, 
      momentum: 12.5,
      volume: '2,456,789',
      change: 3.45,
      volatility: 18.2,
      rsi: 68.5,
      chart: 'spike'
    },
    { 
      name: 'HDFC BANK', 
      symbol: 'HDFCBANK', 
      ltp: 1687.30, 
      momentum: 8.7,
      volume: '1,876,543',
      change: 2.15,
      volatility: 14.7,
      rsi: 72.3,
      chart: 'spike'
    },
    { 
      name: 'BAJAJ FINANCE', 
      symbol: 'BAJFINANCE', 
      ltp: 6743.80, 
      momentum: 15.3,
      volume: '987,654',
      change: 4.25,
      volatility: 22.1,
      rsi: 75.8,
      chart: 'spike'
    },
    { 
      name: 'MARUTI SUZUKI', 
      symbol: 'MARUTI', 
      ltp: 9876.40, 
      momentum: 7.2,
      volume: '1,234,567',
      change: 1.85,
      volatility: 12.9,
      rsi: 65.2,
      chart: 'spike'
    },
    { 
      name: 'ASIAN PAINTS', 
      symbol: 'ASIANPAINT', 
      ltp: 3245.60, 
      momentum: 9.8,
      volume: '765,432',
      change: 2.67,
      volatility: 16.4,
      rsi: 69.7,
      chart: 'spike'
    }
  ];

  const tabs = ['5 Min Momentum', '15 Min Momentum', 'Hourly Momentum'];
  const filterOptions = ['Momentum', 'RSI', 'Volume', 'Volatility'];

  return (
    <div className="momentum-spike-page">
      {/* Header */}
      <header className="momentum-spike-header">
        <div className="momentum-spike-header-container">
          <div className="momentum-spike-logo">
            <span className="momentum-spike-logo-icon">⚡</span>
            <span className="momentum-spike-logo-text">stocks4u</span>
          </div>
          
          <div className="momentum-spike-search">
            <input 
              type="text" 
              placeholder="Search stocks"
              className="momentum-spike-search-input"
            />
          </div>
          
          <div className="momentum-spike-user">
            <button className="momentum-spike-back-btn" onClick={onBack}>
              ← Back to Dashboard
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="momentum-spike-main">
        <div className="momentum-spike-container">
          <div className="momentum-spike-title">
            <h1>5 & 15 Min Momentum Spike</h1>
            <div className="momentum-spike-info">
              <span className="info-icon">⚡</span>
              <span className="info-text">Real-time momentum breakouts</span>
            </div>
          </div>

          {/* Tabs */}
          <div className="momentum-spike-tabs">
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
          <div className="momentum-spike-controls">
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
              <button className="action-btn alerts">Set Alerts</button>
            </div>
          </div>

          {/* Momentum Summary */}
          <div className="momentum-spike-summary">
            <div className="summary-card">
              <h3>Momentum Summary</h3>
              <div className="summary-stats">
                <div className="stat-item">
                  <span className="stat-icon">⚡</span>
                  <span className="stat-label">Strong Momentum</span>
                  <span className="stat-value positive">42</span>
                </div>
                <div className="stat-item">
                  <span className="stat-icon">🔥</span>
                  <span className="stat-label">Momentum Spikes</span>
                  <span className="stat-value">28</span>
                </div>
                <div className="stat-item">
                  <span className="stat-icon">📊</span>
                  <span className="stat-label">Avg RSI</span>
                  <span className="stat-value">67.2</span>
                </div>
                <div className="stat-item">
                  <span className="stat-icon">🎯</span>
                  <span className="stat-label">Breakout %</span>
                  <span className="stat-value positive">73%</span>
                </div>
              </div>
            </div>
          </div>

          {/* Stock Table */}
          <div className="momentum-spike-table-container">
            <div className="table-header-info">
              <span className="results-count">Showing {momentumData.length} momentum spikes</span>
              <span className="last-updated">Last updated: 15 seconds ago</span>
            </div>

            <div className="momentum-spike-table">
              <div className="table-row table-header-row">
                <div className="table-cell">Name</div>
                <div className="table-cell">Symbol</div>
                <div className="table-cell">LTP</div>
                <div className="table-cell">Momentum</div>
                <div className="table-cell">Volume</div>
                <div className="table-cell">Change%</div>
                <div className="table-cell">Volatility</div>
                <div className="table-cell">RSI</div>
                <div className="table-cell">Chart</div>
              </div>

              {momentumData.map((stock, index) => (
                <div key={index} className="table-row stock-row">
                  <div className="table-cell stock-name">
                    <div className="stock-info">
                      <span className="stock-title">{stock.name}</span>
                      <span className="stock-sector">Equity</span>
                    </div>
                  </div>
                  <div className="table-cell stock-symbol">{stock.symbol}</div>
                  <div className="table-cell stock-price">₹{stock.ltp.toFixed(2)}</div>
                  <div className="table-cell stock-momentum">
                    <div className="momentum-indicator">
                      <div className={`momentum-bar ${stock.momentum >= 10 ? 'high' : stock.momentum >= 5 ? 'medium' : 'low'}`}>
                        <div className="momentum-fill" style={{ width: `${Math.min(stock.momentum * 6, 100)}%` }}></div>
                      </div>
                      <span className="momentum-value">{stock.momentum}%</span>
                    </div>
                  </div>
                  <div className="table-cell stock-volume">{stock.volume}</div>
                  <div className={`table-cell stock-change ${stock.change >= 0 ? 'positive' : 'negative'}`}>
                    {stock.change >= 0 ? '+' : ''}{stock.change.toFixed(2)}%
                  </div>
                  <div className="table-cell stock-volatility">
                    <div className="volatility-indicator">
                      <div className={`volatility-bar ${stock.volatility >= 20 ? 'high' : stock.volatility >= 15 ? 'medium' : 'low'}`}>
                        <div className="volatility-fill" style={{ width: `${Math.min(stock.volatility * 3, 100)}%` }}></div>
                      </div>
                      <span className="volatility-value">{stock.volatility}%</span>
                    </div>
                  </div>
                  <div className="table-cell stock-rsi">
                    <div className={`rsi-indicator ${stock.rsi >= 70 ? 'overbought' : stock.rsi >= 30 ? 'normal' : 'oversold'}`}>
                      {stock.rsi.toFixed(1)}
                    </div>
                  </div>
                  <div className="table-cell stock-chart">
                    <div className="chart-container">
                      <div className="momentum-chart spike">
                        <div className="spike-line"></div>
                        <div className="spike-points">
                          <div className="spike-point"></div>
                          <div className="spike-point high"></div>
                          <div className="spike-point"></div>
                          <div className="spike-point"></div>
                          <div className="spike-point"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Momentum Analysis */}
          <div className="momentum-analysis">
            <div className="analysis-card">
              <h3>Momentum Analysis</h3>
              <div className="analysis-grid">
                <div className="analysis-item">
                  <div className="analysis-label">High Momentum</div>
                  <div className="analysis-value positive">15</div>
                  <div className="analysis-percentage">+23.1%</div>
                </div>
                <div className="analysis-item">
                  <div className="analysis-label">Medium Momentum</div>
                  <div className="analysis-value">18</div>
                  <div className="analysis-percentage">+12.4%</div>
                </div>
                <div className="analysis-item">
                  <div className="analysis-label">Overbought</div>
                  <div className="analysis-value negative">9</div>
                  <div className="analysis-percentage">-5.7%</div>
                </div>
                <div className="analysis-item">
                  <div className="analysis-label">Volume Spike</div>
                  <div className="analysis-value positive">26</div>
                  <div className="analysis-percentage">+18.9%</div>
                </div>
              </div>
            </div>
          </div>

          {/* Alert Section */}
          <div className="alert-section">
            <div className="alert-card">
              <h3>Momentum Alerts</h3>
              <div className="alert-list">
                <div className="alert-item">
                  <span className="alert-icon">🔔</span>
                  <span className="alert-text">WIPRO crossed 10% momentum threshold</span>
                  <span className="alert-time">2 min ago</span>
                </div>
                <div className="alert-item">
                  <span className="alert-icon">⚡</span>
                  <span className="alert-text">BAJFINANCE volume spike detected</span>
                  <span className="alert-time">5 min ago</span>
                </div>
                <div className="alert-item">
                  <span className="alert-icon">📈</span>
                  <span className="alert-text">MARUTI momentum breakout confirmed</span>
                  <span className="alert-time">8 min ago</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default MomentumSpikePage;