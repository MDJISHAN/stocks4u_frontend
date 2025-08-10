import React, { useState } from 'react';
import './DistributionPage.css';

const DistributionPage = ({ onBack }) => {
  const [activeTab, setActiveTab] = useState('Sector');
  const [viewMode, setViewMode] = useState('Percentage');

  const sectorDistribution = [
    { sector: 'Information Technology', allocation: 35.2, amount: 1875000, color: '#0EA5E9' },
    { sector: 'Banking & Finance', allocation: 28.7, amount: 1526000, color: '#10B981' },
    { sector: 'Healthcare', allocation: 15.3, amount: 814000, color: '#8B5CF6' },
    { sector: 'Energy & Power', allocation: 12.8, amount: 681000, color: '#F59E0B' },
    { sector: 'Consumer Goods', allocation: 8.0, amount: 425000, color: '#EF4444' }
  ];

  const marketCapDistribution = [
    { category: 'Large Cap', allocation: 65.5, amount: 3484000, color: '#10B981' },
    { category: 'Mid Cap', allocation: 25.3, amount: 1347000, color: '#F59E0B' },
    { category: 'Small Cap', allocation: 9.2, amount: 490000, color: '#EF4444' }
  ];

  const tabs = ['Sector', 'Market Cap', 'Asset Class'];
  const viewModes = ['Percentage', 'Amount'];

  const currentData = activeTab === 'Sector' ? sectorDistribution : marketCapDistribution;

  return (
    <div className="distribution-page">
      {/* Header */}
      <header className="distribution-header">
        <div className="distribution-header-container">
<<<<<<< HEAD
          <div className="logo">
          <img src="images/Final Font Stocks4U1.png" className="logo-text" />
=======
          <div className="distribution-logo">
            <span className="distribution-logo-icon">📊</span>
            <span className="distribution-logo-text">stocks4u</span>
>>>>>>> 3fa6b625b19d922458b7a7ae2a457254c26ee838
          </div>
          
          <div className="distribution-search">
            <input 
              type="text" 
              placeholder="Search distribution"
              className="distribution-search-input"
            />
          </div>
          
          <div className="distribution-user">
            <button className="distribution-back-btn" onClick={onBack}>
              ← Back to Dashboard
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="distribution-main">
        <div className="distribution-container">
          <div className="distribution-title">
            <h1>Portfolio Distribution</h1>
            <div className="distribution-info">
              <span className="info-icon">📊</span>
              <span className="info-text">Analyze your portfolio allocation</span>
            </div>
          </div>

          {/* Tabs */}
          <div className="distribution-tabs">
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

          {/* View Mode Toggle */}
          <div className="view-mode-toggle">
            <label>View Mode:</label>
            <div className="toggle-buttons">
              {viewModes.map(mode => (
                <button
                  key={mode}
                  className={`toggle-btn ${viewMode === mode ? 'active' : ''}`}
                  onClick={() => setViewMode(mode)}
                >
                  {mode}
                </button>
              ))}
            </div>
          </div>

          {/* Distribution Chart */}
          <div className="distribution-chart">
            <div className="chart-container">
              <h3>{activeTab} Distribution</h3>
              <div className="donut-chart">
                <svg width="300" height="300" viewBox="0 0 300 300">
                  <circle cx="150" cy="150" r="80" fill="none" stroke="#1a1a1a" strokeWidth="60"/>
                  {currentData.map((item, index) => {
                    const angle = (item.allocation / 100) * 360;
                    const startAngle = currentData.slice(0, index).reduce((sum, prev) => sum + (prev.allocation / 100) * 360, 0);
                    const endAngle = startAngle + angle;
                    
                    const x1 = 150 + 80 * Math.cos((startAngle - 90) * Math.PI / 180);
                    const y1 = 150 + 80 * Math.sin((startAngle - 90) * Math.PI / 180);
                    const x2 = 150 + 80 * Math.cos((endAngle - 90) * Math.PI / 180);
                    const y2 = 150 + 80 * Math.sin((endAngle - 90) * Math.PI / 180);
                    
                    const largeArcFlag = angle > 180 ? 1 : 0;
                    
                    return (
                      <path
                        key={index}
                        d={`M 150 150 L ${x1} ${y1} A 80 80 0 ${largeArcFlag} 1 ${x2} ${y2} Z`}
                        fill={item.color}
                        stroke="#0a0a0a"
                        strokeWidth="2"
                      />
                    );
                  })}
                </svg>
                <div className="chart-center">
                  <div className="total-value">₹53.21L</div>
                  <div className="total-label">Total Value</div>
                </div>
              </div>
            </div>
          </div>

          {/* Distribution Table */}
          <div className="distribution-table-container">
            <div className="table-header-info">
              <span className="results-count">Showing {currentData.length} categories</span>
              <span className="last-updated">Last updated: Real-time</span>
            </div>

            <div className="distribution-table">
              <div className="table-row table-header-row">
                <div className="table-cell">{activeTab}</div>
                <div className="table-cell">Allocation %</div>
                <div className="table-cell">Amount</div>
                <div className="table-cell">Visualization</div>
              </div>

              {currentData.map((item, index) => (
                <div key={index} className="table-row distribution-row">
                  <div className="table-cell category-name">
                    <div className="category-info">
                      <div className="color-indicator" style={{ backgroundColor: item.color }}></div>
                      <span className="category-title">{item.sector || item.category}</span>
                    </div>
                  </div>
                  <div className="table-cell allocation-percent">
                    <span className="percent-value">{item.allocation.toFixed(1)}%</span>
                  </div>
                  <div className="table-cell allocation-amount">
                    <span className="amount-value">₹{(item.amount / 100000).toFixed(1)}L</span>
                  </div>
                  <div className="table-cell allocation-bar">
                    <div className="bar-container">
                      <div 
                        className="bar-fill" 
                        style={{ 
                          width: `${item.allocation}%`,
                          backgroundColor: item.color
                        }}
                      ></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Distribution Summary */}
          <div className="distribution-summary">
            <div className="summary-card">
              <h3>Distribution Summary</h3>
              <div className="summary-stats">
                <div className="stat-item">
                  <span className="stat-icon">🎯</span>
                  <span className="stat-label">Largest Allocation</span>
                  <span className="stat-value">{currentData[0]?.allocation.toFixed(1)}%</span>
                </div>
                <div className="stat-item">
                  <span className="stat-icon">📊</span>
                  <span className="stat-label">Categories</span>
                  <span className="stat-value">{currentData.length}</span>
                </div>
                <div className="stat-item">
                  <span className="stat-icon">⚖️</span>
                  <span className="stat-label">Diversification</span>
                  <span className="stat-value">Good</span>
                </div>
                <div className="stat-item">
                  <span className="stat-icon">💎</span>
                  <span className="stat-label">Risk Level</span>
                  <span className="stat-value">Moderate</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default DistributionPage;