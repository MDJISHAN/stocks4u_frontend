import React, { useState } from 'react';
import './IndexMoverPage.css';

const IndexMoverPage = ({ onBack, onNiftyItClick }) => {
  const [activeTab, setActiveTab] = useState('Index Movers');
  const [filterBy, setFilterBy] = useState('Change');

  const indexData = [
    { 
      name: 'NIFTY 50', 
      ltp: 21456.25, 
      change: 124.80,
      changePercent: 0.58,
      volume: '3,45,67,890',
      status: 'up',
      pe: 22.5,
      pb: 3.2
    },
    { 
      name: 'NIFTY IT', 
      ltp: 32876.40, 
      change: 287.65,
      changePercent: 0.88,
      volume: '1,23,45,678',
      status: 'up',
      pe: 18.7,
      pb: 4.8
    },
    { 
      name: 'NIFTY BANK', 
      ltp: 46789.30, 
      change: -156.90,
      changePercent: -0.33,
      volume: '2,34,56,789',
      status: 'down',
      pe: 15.2,
      pb: 2.1
    },
    { 
      name: 'NIFTY FMCG', 
      ltp: 56234.80, 
      change: 78.40,
      changePercent: 0.14,
      volume: '98,76,543',
      status: 'up',
      pe: 45.6,
      pb: 5.9
    },
    { 
      name: 'NIFTY AUTO', 
      ltp: 17345.60, 
      change: -89.20,
      changePercent: -0.51,
      volume: '1,87,65,432',
      status: 'down',
      pe: 28.3,
      pb: 3.7
    },
    { 
      name: 'NIFTY PHARMA', 
      ltp: 14567.90, 
      change: 145.30,
      changePercent: 1.01,
      volume: '76,54,321',
      status: 'up',
      pe: 35.8,
      pb: 4.2
    }
  ];

  const tabs = ['Index Movers', 'Sector Performance', 'Heat Map'];
  const filterOptions = ['Change', 'Volume', 'P/E', 'P/B'];

  const handleIndexClick = (indexName) => {
    if (indexName === 'NIFTY IT' && onNiftyItClick) {
      onNiftyItClick();
    }
  };

  return (
    <div className="index-mover-page">
      {/* Header */}
      <header className="index-mover-header">
        <div className="index-mover-header-container">
          <div className="index-mover-logo">
            <span className="index-mover-logo-icon">📊</span>
            <span className="index-mover-logo-text">stocks4u</span>
          </div>
          
          <div className="index-mover-search">
            <input 
              type="text" 
              placeholder="Search indices"
              className="index-mover-search-input"
            />
          </div>
          
          <div className="index-mover-user">
            <button className="index-mover-back-btn" onClick={onBack}>
              ← Back to Dashboard
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="index-mover-main">
        <div className="index-mover-container">
          <div className="index-mover-title">
            <h1>Index Mover</h1>
            <div className="index-mover-info">
              <span className="info-icon">📊</span>
              <span className="info-text">Track index movements and sector performance</span>
            </div>
          </div>

          {/* Market Status */}
          <div className="market-status">
            <div className="status-card">
              <div className="status-indicator">
                <span className="status-dot open"></span>
                <span className="status-text">Market Open</span>
              </div>
              <div className="market-time">
                <span className="time-label">Market Time:</span>
                <span className="time-value">09:15 AM - 03:30 PM</span>
              </div>
            </div>
          </div>

          {/* Tabs */}
          <div className="index-mover-tabs">
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
          <div className="index-mover-controls">
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
              <button className="action-btn watchlist">Add to Watchlist</button>
              <button className="action-btn compare">Compare</button>
              <button className="action-btn export">Export</button>
            </div>
          </div>

          {/* Index Summary */}
          <div className="index-mover-summary">
            <div className="summary-card">
              <h3>Market Overview</h3>
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
                  <span className="stat-icon">🔄</span>
                  <span className="stat-label">Unchanged</span>
                  <span className="stat-value">0</span>
                </div>
                <div className="stat-item">
                  <span className="stat-icon">🎯</span>
                  <span className="stat-label">Avg Change</span>
                  <span className="stat-value positive">+0.28%</span>
                </div>
              </div>
            </div>
          </div>

          {/* Index Table */}
          <div className="index-mover-table-container">
            <div className="table-header-info">
              <span className="results-count">Showing {indexData.length} indices</span>
              <span className="last-updated">Last updated: Real-time</span>
            </div>

            <div className="index-mover-table">
              <div className="table-row table-header-row">
                <div className="table-cell">Index Name</div>
                <div className="table-cell">LTP</div>
                <div className="table-cell">Change</div>
                <div className="table-cell">Change %</div>
                <div className="table-cell">Volume</div>
                <div className="table-cell">P/E</div>
                <div className="table-cell">P/B</div>
                <div className="table-cell">Trend</div>
              </div>

              {indexData.map((index, idx) => (
                <div key={idx} className="table-row index-row">
                  <div className="table-cell index-name">
                    <div 
                      className="index-info"
                      onClick={() => handleIndexClick(index.name)}
                      style={{ cursor: index.name === 'NIFTY IT' ? 'pointer' : 'default' }}
                    >
                      <span className="index-title">{index.name}</span>
                      <span className="index-type">NSE</span>
                    </div>
                  </div>
                  <div className="table-cell index-ltp">
                    <span className="price-value">{index.ltp.toLocaleString()}</span>
                  </div>
                  <div className={`table-cell index-change ${index.status}`}>
                    <span className="change-value">
                      {index.change >= 0 ? '+' : ''}{index.change.toFixed(2)}
                    </span>
                  </div>
                  <div className={`table-cell index-change-percent ${index.status}`}>
                    <span className="change-percent">
                      {index.changePercent >= 0 ? '+' : ''}{index.changePercent.toFixed(2)}%
                    </span>
                  </div>
                  <div className="table-cell index-volume">
                    <span className="volume-value">{index.volume}</span>
                  </div>
                  <div className="table-cell index-pe">
                    <span className="pe-value">{index.pe.toFixed(1)}</span>
                  </div>
                  <div className="table-cell index-pb">
                    <span className="pb-value">{index.pb.toFixed(1)}</span>
                  </div>
                  <div className="table-cell index-trend">
                    <div className="trend-indicator">
                      <div className={`trend-chart ${index.status}`}>
                        <div className="trend-line"></div>
                        <div className="trend-arrow">
                          {index.status === 'up' ? '↗' : '↘'}
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
              <h3>Index Performance</h3>
              <div className="analysis-grid">
                <div className="analysis-item">
                  <div className="analysis-label">Best Performer</div>
                  <div className="analysis-value positive">NIFTY PHARMA</div>
                  <div className="analysis-percentage">+1.01%</div>
                </div>
                <div className="analysis-item">
                  <div className="analysis-label">Worst Performer</div>
                  <div className="analysis-value negative">NIFTY AUTO</div>
                  <div className="analysis-percentage">-0.51%</div>
                </div>
                <div className="analysis-item">
                  <div className="analysis-label">Highest Volume</div>
                  <div className="analysis-value">NIFTY 50</div>
                  <div className="analysis-percentage">3.46 Cr</div>
                </div>
                <div className="analysis-item">
                  <div className="analysis-label">Most Active</div>
                  <div className="analysis-value">NIFTY BANK</div>
                  <div className="analysis-percentage">2.35 Cr</div>
                </div>
              </div>
            </div>
          </div>

          {/* Sector Heatmap */}
          <div className="sector-heatmap">
            <div className="heatmap-card">
              <h3>Sector Heatmap</h3>
              <div className="heatmap-grid">
                <div className="heatmap-item positive">
                  <div className="sector-name">IT</div>
                  <div className="sector-change">+0.88%</div>
                </div>
                <div className="heatmap-item positive">
                  <div className="sector-name">PHARMA</div>
                  <div className="sector-change">+1.01%</div>
                </div>
                <div className="heatmap-item positive">
                  <div className="sector-name">NIFTY</div>
                  <div className="sector-change">+0.58%</div>
                </div>
                <div className="heatmap-item positive">
                  <div className="sector-name">FMCG</div>
                  <div className="sector-change">+0.14%</div>
                </div>
                <div className="heatmap-item negative">
                  <div className="sector-name">BANK</div>
                  <div className="sector-change">-0.33%</div>
                </div>
                <div className="heatmap-item negative">
                  <div className="sector-name">AUTO</div>
                  <div className="sector-change">-0.51%</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default IndexMoverPage;