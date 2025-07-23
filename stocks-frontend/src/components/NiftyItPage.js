import React, { useState } from 'react';
import './NiftyItPage.css';

const NiftyItPage = ({ onBack }) => {
  const [activeTab, setActiveTab] = useState('All Stocks');
  const [filterBy, setFilterBy] = useState('Market Cap');

  const niftyItStocks = [
    { 
      name: 'TCS LIMITED', 
      symbol: 'TCS', 
      ltp: 3678.90, 
      change: 45.30,
      changePercent: 1.25,
      volume: '2,34,567',
      marketCap: '13,45,678',
      weight: 12.8,
      pe: 25.4,
      pb: 6.2
    },
    { 
      name: 'INFOSYS LTD', 
      symbol: 'INFY', 
      ltp: 1456.25, 
      change: 28.65,
      changePercent: 2.00,
      volume: '4,56,789',
      marketCap: '6,78,912',
      weight: 10.5,
      pe: 22.1,
      pb: 4.8
    },
    { 
      name: 'WIPRO LTD', 
      symbol: 'WIPRO', 
      ltp: 445.80, 
      change: -8.20,
      changePercent: -1.81,
      volume: '8,90,123',
      marketCap: '2,45,678',
      weight: 3.2,
      pe: 18.7,
      pb: 2.9
    },
    { 
      name: 'HCL TECH LTD', 
      symbol: 'HCLTECH', 
      ltp: 1234.60, 
      change: 15.45,
      changePercent: 1.27,
      volume: '3,45,678',
      marketCap: '3,34,567',
      weight: 4.8,
      pe: 20.5,
      pb: 3.7
    },
    { 
      name: 'TECH MAHINDRA', 
      symbol: 'TECHM', 
      ltp: 1089.30, 
      change: -12.40,
      changePercent: -1.13,
      volume: '2,78,901',
      marketCap: '1,89,234',
      weight: 2.9,
      pe: 15.8,
      pb: 2.4
    },
    { 
      name: 'MPHASIS LTD', 
      symbol: 'MPHASIS', 
      ltp: 2567.90, 
      change: 34.80,
      changePercent: 1.37,
      volume: '1,23,456',
      marketCap: '78,901',
      weight: 1.5,
      pe: 19.2,
      pb: 4.1
    }
  ];

  const tabs = ['All Stocks', 'Top Performers', 'Laggards'];
  const filterOptions = ['Market Cap', 'Volume', 'P/E', 'Change'];

  return (
    <div className="nifty-it-page">
      {/* Header */}
      <header className="nifty-it-header">
        <div className="nifty-it-header-container">
          <div className="nifty-it-logo">
            <span className="nifty-it-logo-icon">💻</span>
            <span className="nifty-it-logo-text">stocks4u</span>
          </div>
          
          <div className="nifty-it-search">
            <input 
              type="text" 
              placeholder="Search IT stocks"
              className="nifty-it-search-input"
            />
          </div>
          
          <div className="nifty-it-user">
            <button className="nifty-it-back-btn" onClick={onBack}>
              ← Back to Index
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="nifty-it-main">
        <div className="nifty-it-container">
          <div className="nifty-it-title">
            <h1>NIFTY IT</h1>
            <div className="nifty-it-info">
              <span className="info-icon">💻</span>
              <span className="info-text">Information Technology Sector</span>
            </div>
          </div>

          {/* Index Overview */}
          <div className="index-overview">
            <div className="overview-card">
              <div className="overview-header">
                <h3>Index Overview</h3>
                <div className="index-value">
                  <span className="current-value">32,876.40</span>
                  <span className="change-value positive">+287.65 (+0.88%)</span>
                </div>
              </div>
              <div className="overview-stats">
                <div className="stat-item">
                  <span className="stat-label">Open</span>
                  <span className="stat-value">32,654.20</span>
                </div>
                <div className="stat-item">
                  <span className="stat-label">High</span>
                  <span className="stat-value">32,945.80</span>
                </div>
                <div className="stat-item">
                  <span className="stat-label">Low</span>
                  <span className="stat-value">32,534.60</span>
                </div>
                <div className="stat-item">
                  <span className="stat-label">52W High</span>
                  <span className="stat-value">35,234.50</span>
                </div>
                <div className="stat-item">
                  <span className="stat-label">52W Low</span>
                  <span className="stat-value">28,567.30</span>
                </div>
                <div className="stat-item">
                  <span className="stat-label">P/E</span>
                  <span className="stat-value">22.4</span>
                </div>
              </div>
            </div>
          </div>

          {/* Tabs */}
          <div className="nifty-it-tabs">
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
          <div className="nifty-it-controls">
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
              <button className="action-btn analysis">Sector Analysis</button>
              <button className="action-btn compare">Compare</button>
              <button className="action-btn export">Export</button>
            </div>
          </div>

          {/* Sector Summary */}
          <div className="sector-summary">
            <div className="summary-card">
              <h3>Sector Performance</h3>
              <div className="summary-stats">
                <div className="stat-item">
                  <span className="stat-icon">📈</span>
                  <span className="stat-label">Advancing</span>
                  <span className="stat-value positive">4</span>
                </div>
                <div className="stat-item">
                  <span className="stat-icon">📉</span>
                  <span className="stat-label">Declining</span>
                  <span className="stat-value negative">2</span>
                </div>
                <div className="stat-item">
                  <span className="stat-icon">📊</span>
                  <span className="stat-label">Avg P/E</span>
                  <span className="stat-value">20.3</span>
                </div>
                <div className="stat-item">
                  <span className="stat-icon">🎯</span>
                  <span className="stat-label">Market Cap</span>
                  <span className="stat-value">₹28.5 L Cr</span>
                </div>
              </div>
            </div>
          </div>

          {/* Stocks Table */}
          <div className="nifty-it-table-container">
            <div className="table-header-info">
              <span className="results-count">Showing {niftyItStocks.length} IT stocks</span>
              <span className="last-updated">Last updated: Real-time</span>
            </div>

            <div className="nifty-it-table">
              <div className="table-row table-header-row">
                <div className="table-cell">Company</div>
                <div className="table-cell">Symbol</div>
                <div className="table-cell">LTP</div>
                <div className="table-cell">Change</div>
                <div className="table-cell">Change %</div>
                <div className="table-cell">Volume</div>
                <div className="table-cell">Market Cap</div>
                <div className="table-cell">Weight</div>
                <div className="table-cell">P/E</div>
                <div className="table-cell">P/B</div>
              </div>

              {niftyItStocks.map((stock, index) => (
                <div key={index} className="table-row stock-row">
                  <div className="table-cell stock-name">
                    <div className="stock-info">
                      <span className="stock-title">{stock.name}</span>
                      <span className="stock-sector">IT Services</span>
                    </div>
                  </div>
                  <div className="table-cell stock-symbol">{stock.symbol}</div>
                  <div className="table-cell stock-price">₹{stock.ltp.toFixed(2)}</div>
                  <div className={`table-cell stock-change ${stock.change >= 0 ? 'positive' : 'negative'}`}>
                    {stock.change >= 0 ? '+' : ''}{stock.change.toFixed(2)}
                  </div>
                  <div className={`table-cell stock-change-percent ${stock.changePercent >= 0 ? 'positive' : 'negative'}`}>
                    {stock.changePercent >= 0 ? '+' : ''}{stock.changePercent.toFixed(2)}%
                  </div>
                  <div className="table-cell stock-volume">{stock.volume}</div>
                  <div className="table-cell stock-market-cap">₹{stock.marketCap} Cr</div>
                  <div className="table-cell stock-weight">
                    <div className="weight-bar">
                      <div 
                        className="weight-fill" 
                        style={{ width: `${(stock.weight / 15) * 100}%` }}
                      ></div>
                      <span className="weight-text">{stock.weight}%</span>
                    </div>
                  </div>
                  <div className="table-cell stock-pe">{stock.pe}</div>
                  <div className="table-cell stock-pb">{stock.pb}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Sector Analysis */}
          <div className="sector-analysis">
            <div className="analysis-card">
              <h3>IT Sector Analysis</h3>
              <div className="analysis-grid">
                <div className="analysis-item">
                  <div className="analysis-label">Revenue Growth</div>
                  <div className="analysis-value positive">+12.5%</div>
                  <div className="analysis-percentage">YoY</div>
                </div>
                <div className="analysis-item">
                  <div className="analysis-label">Export Revenue</div>
                  <div className="analysis-value">78%</div>
                  <div className="analysis-percentage">of total</div>
                </div>
                <div className="analysis-item">
                  <div className="analysis-label">Digital Rev</div>
                  <div className="analysis-value positive">+18.2%</div>
                  <div className="analysis-percentage">Growth</div>
                </div>
                <div className="analysis-item">
                  <div className="analysis-label">Margin Trend</div>
                  <div className="analysis-value">Stable</div>
                  <div className="analysis-percentage">~22%</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default NiftyItPage;