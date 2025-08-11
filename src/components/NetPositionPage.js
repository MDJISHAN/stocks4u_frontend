import React, { useState } from 'react';
import './NetPositionPage.css';

const NetPositionPage = ({ onBack }) => {
  const [activeTab, setActiveTab] = useState('Holdings');
  const [filterBy, setFilterBy] = useState('P&L');

  const positionData = [
    { 
      symbol: 'RELIANCE',
      name: 'RELIANCE IND',
      qty: 100,
      avgPrice: 2387.50,
      ltp: 2456.75,
      marketValue: 245675,
      dayChange: 2.90,
      totalPL: 6925,
      dayPL: 690,
      invested: 238750
    },
    { 
      symbol: 'TCS',
      name: 'TCS LIMITED',
      qty: 50,
      avgPrice: 3595.00,
      ltp: 3678.90,
      marketValue: 183945,
      dayChange: 2.33,
      totalPL: 4195,
      dayPL: 845,
      invested: 179750
    },
    { 
      symbol: 'INFY',
      name: 'INFOSYS LTD',
      qty: 75,
      avgPrice: 1489.00,
      ltp: 1456.25,
      marketValue: 109218,
      dayChange: -2.20,
      totalPL: -2456,
      dayPL: -623,
      invested: 111675
    },
    { 
      symbol: 'HDFCBANK',
      name: 'HDFC BANK',
      qty: 25,
      avgPrice: 1642.00,
      ltp: 1687.30,
      marketValue: 42182,
      dayChange: 2.76,
      totalPL: 1132,
      dayPL: 285,
      invested: 41050
    }
  ];

  const tabs = ['Holdings', 'Positions', 'Orders'];
  const filterOptions = ['P&L', 'Value', 'Quantity', 'Symbol'];

  const totalInvested = positionData.reduce((sum, item) => sum + item.invested, 0);
  const totalValue = positionData.reduce((sum, item) => sum + item.marketValue, 0);
  const totalPL = positionData.reduce((sum, item) => sum + item.totalPL, 0);
  const totalDayPL = positionData.reduce((sum, item) => sum + item.dayPL, 0);

  return (
    <div className="net-position-page">
      {/* Header */}
      <header className="net-position-header">
        <div className="net-position-header-container">
          <div className="logo">
          <img src="images/Final Font Stocks4U1.png" className="logo-text" />
          </div>
          
          <div className="net-position-search">
            <input 
              type="text" 
              placeholder="Search positions"
              className="net-position-search-input"
            />
          </div>
          
          <div className="net-position-user">
            <button className="net-position-back-btn" onClick={onBack}>
              ← Back to Dashboard
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="net-position-main">
        <div className="net-position-container">
          <div className="net-position-title">
            <h1>Net Position</h1>
            <div className="net-position-info">
              <span className="info-icon">💼</span>
              <span className="info-text">Your portfolio holdings & P&L</span>
            </div>
          </div>

          {/* Portfolio Summary */}
          <div className="portfolio-summary">
            <div className="summary-card">
              <h3>Portfolio Summary</h3>
              <div className="summary-stats">
                <div className="stat-item">
                  <span className="stat-icon">💰</span>
                  <span className="stat-label">Total Invested</span>
                  <span className="stat-value">₹{totalInvested.toLocaleString()}</span>
                </div>
                <div className="stat-item">
                  <span className="stat-icon">📈</span>
                  <span className="stat-label">Current Value</span>
                  <span className="stat-value">₹{totalValue.toLocaleString()}</span>
                </div>
                <div className="stat-item">
                  <span className="stat-icon">🎯</span>
                  <span className="stat-label">Total P&L</span>
                  <span className={`stat-value ${totalPL >= 0 ? 'positive' : 'negative'}`}>
                    ₹{totalPL.toLocaleString()}
                  </span>
                </div>
                <div className="stat-item">
                  <span className="stat-icon">📊</span>
                  <span className="stat-label">Day P&L</span>
                  <span className={`stat-value ${totalDayPL >= 0 ? 'positive' : 'negative'}`}>
                    ₹{totalDayPL.toLocaleString()}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Tabs */}
          <div className="net-position-tabs">
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
          <div className="net-position-controls">
            <div className="filter-section">
              <label>Sort By:</label>
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
              <button className="action-btn buy">Buy</button>
              <button className="action-btn sell">Sell</button>
              <button className="action-btn export">Export</button>
            </div>
          </div>

          {/* Positions Table */}
          <div className="net-position-table-container">
            <div className="table-header-info">
              <span className="results-count">Showing {positionData.length} positions</span>
              <span className="last-updated">Last updated: Real-time</span>
            </div>

            <div className="net-position-table">
              <div className="table-row table-header-row">
                <div className="table-cell">Symbol</div>
                <div className="table-cell">Qty</div>
                <div className="table-cell">Avg Price</div>
                <div className="table-cell">LTP</div>
                <div className="table-cell">Market Value</div>
                <div className="table-cell">Day Change%</div>
                <div className="table-cell">Total P&L</div>
                <div className="table-cell">Day P&L</div>
                <div className="table-cell">Actions</div>
              </div>

              {positionData.map((position, index) => (
                <div key={index} className="table-row position-row">
                  <div className="table-cell position-symbol">
                    <div className="symbol-info">
                      <span className="symbol-title">{position.symbol}</span>
                      <span className="symbol-name">{position.name}</span>
                    </div>
                  </div>
                  <div className="table-cell position-qty">{position.qty}</div>
                  <div className="table-cell position-avg-price">₹{position.avgPrice.toFixed(2)}</div>
                  <div className="table-cell position-ltp">₹{position.ltp.toFixed(2)}</div>
                  <div className="table-cell position-market-value">₹{position.marketValue.toLocaleString()}</div>
                  <div className={`table-cell position-day-change ${position.dayChange >= 0 ? 'positive' : 'negative'}`}>
                    {position.dayChange >= 0 ? '+' : ''}{position.dayChange.toFixed(2)}%
                  </div>
                  <div className={`table-cell position-total-pl ${position.totalPL >= 0 ? 'positive' : 'negative'}`}>
                    ₹{position.totalPL.toLocaleString()}
                  </div>
                  <div className={`table-cell position-day-pl ${position.dayPL >= 0 ? 'positive' : 'negative'}`}>
                    ₹{position.dayPL.toLocaleString()}
                  </div>
                  <div className="table-cell position-actions">
                    <button className="action-btn-small buy">Buy</button>
                    <button className="action-btn-small sell">Sell</button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Performance Analysis */}
          <div className="performance-analysis">
            <div className="analysis-card">
              <h3>Performance Analysis</h3>
              <div className="analysis-grid">
                <div className="analysis-item">
                  <div className="analysis-label">Best Performer</div>
                  <div className="analysis-value positive">TCS</div>
                  <div className="analysis-percentage">+2.33%</div>
                </div>
                <div className="analysis-item">
                  <div className="analysis-label">Worst Performer</div>
                  <div className="analysis-value negative">INFOSYS</div>
                  <div className="analysis-percentage">-2.20%</div>
                </div>
                <div className="analysis-item">
                  <div className="analysis-label">Portfolio Return</div>
                  <div className="analysis-value positive">+1.77%</div>
                  <div className="analysis-percentage">Overall</div>
                </div>
                <div className="analysis-item">
                  <div className="analysis-label">Allocation</div>
                  <div className="analysis-value">4</div>
                  <div className="analysis-percentage">Stocks</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default NetPositionPage;