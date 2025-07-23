import React, { useState } from 'react';
import './RuleStrategyPage.css';

const RuleStrategyPage = ({ onBack }) => {
  const [activeTab, setActiveTab] = useState('3% Rule');
  const [filterBy, setFilterBy] = useState('Risk');

  const strategyData = [
    { 
      name: 'RELIANCE IND', 
      symbol: 'RELIANCE', 
      ltp: 2456.75, 
      entryPrice: 2387.50,
      stopLoss: 2315.88,
      target: 2525.00,
      change: 2.90,
      riskReward: '1:2.5',
      status: 'Active',
      chart: 'up'
    },
    { 
      name: 'HDFC BANK', 
      symbol: 'HDFCBANK', 
      ltp: 1687.30, 
      entryPrice: 1642.00,
      stopLoss: 1593.34,
      target: 1741.00,
      change: 2.76,
      riskReward: '1:2.0',
      status: 'Active',
      chart: 'up'
    },
    { 
      name: 'INFOSYS LTD', 
      symbol: 'INFY', 
      ltp: 1456.25, 
      entryPrice: 1489.00,
      stopLoss: 1444.73,
      target: 1533.27,
      change: -2.20,
      riskReward: '1:1.8',
      status: 'Triggered',
      chart: 'down'
    },
    { 
      name: 'TCS LIMITED', 
      symbol: 'TCS', 
      ltp: 3678.90, 
      entryPrice: 3595.00,
      stopLoss: 3487.15,
      target: 3810.00,
      change: 2.33,
      riskReward: '1:2.2',
      status: 'Active',
      chart: 'up'
    },
    { 
      name: 'ASIAN PAINTS', 
      symbol: 'ASIANPAINT', 
      ltp: 3245.60, 
      entryPrice: 3315.00,
      stopLoss: 3215.55,
      target: 3512.00,
      change: -2.09,
      riskReward: '1:1.9',
      status: 'Triggered',
      chart: 'down'
    }
  ];

  const tabs = ['3% Rule', '5% Rule', '2% Rule'];
  const filterOptions = ['Risk', 'Reward', 'Status', 'Change'];

  return (
    <div className="rule-strategy-page">
      {/* Header */}
      <header className="rule-strategy-header">
        <div className="rule-strategy-header-container">
          <div className="rule-strategy-logo">
            <span className="rule-strategy-logo-icon">🎯</span>
            <span className="rule-strategy-logo-text">stocks4u</span>
          </div>
          
          <div className="rule-strategy-search">
            <input 
              type="text" 
              placeholder="Search stocks"
              className="rule-strategy-search-input"
            />
          </div>
          
          <div className="rule-strategy-user">
            <button className="rule-strategy-back-btn" onClick={onBack}>
              ← Back to Dashboard
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="rule-strategy-main">
        <div className="rule-strategy-container">
          <div className="rule-strategy-title">
            <h1>3% Rule Strategy</h1>
            <div className="rule-strategy-info">
              <span className="info-icon">🎯</span>
              <span className="info-text">Risk-managed trading strategy</span>
            </div>
          </div>

          {/* Tabs */}
          <div className="rule-strategy-tabs">
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

          {/* Strategy Rules */}
          <div className="strategy-rules">
            <div className="rules-card">
              <h3>3% Rule Strategy Guidelines</h3>
              <div className="rules-grid">
                <div className="rule-item">
                  <div className="rule-icon">📊</div>
                  <div className="rule-title">Entry Rule</div>
                  <div className="rule-desc">Enter when price breaks above resistance with 3% risk</div>
                </div>
                <div className="rule-item">
                  <div className="rule-icon">🛡️</div>
                  <div className="rule-title">Stop Loss</div>
                  <div className="rule-desc">Set stop loss at 3% below entry price</div>
                </div>
                <div className="rule-item">
                  <div className="rule-icon">🎯</div>
                  <div className="rule-title">Target</div>
                  <div className="rule-desc">Minimum 1:2 risk-reward ratio</div>
                </div>
                <div className="rule-item">
                  <div className="rule-icon">⚖️</div>
                  <div className="rule-title">Position Size</div>
                  <div className="rule-desc">Risk max 3% of portfolio per trade</div>
                </div>
              </div>
            </div>
          </div>

          {/* Controls */}
          <div className="rule-strategy-controls">
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
              <button className="action-btn backtest">Backtest</button>
            </div>
          </div>

          {/* Strategy Summary */}
          <div className="rule-strategy-summary">
            <div className="summary-card">
              <h3>Strategy Performance</h3>
              <div className="summary-stats">
                <div className="stat-item">
                  <span className="stat-icon">📈</span>
                  <span className="stat-label">Active Trades</span>
                  <span className="stat-value positive">8</span>
                </div>
                <div className="stat-item">
                  <span className="stat-icon">🎯</span>
                  <span className="stat-label">Win Rate</span>
                  <span className="stat-value positive">72%</span>
                </div>
                <div className="stat-item">
                  <span className="stat-icon">💰</span>
                  <span className="stat-label">Total P&L</span>
                  <span className="stat-value positive">+₹45,680</span>
                </div>
                <div className="stat-item">
                  <span className="stat-icon">⚖️</span>
                  <span className="stat-label">Avg R:R</span>
                  <span className="stat-value">1:2.1</span>
                </div>
              </div>
            </div>
          </div>

          {/* Stock Table */}
          <div className="rule-strategy-table-container">
            <div className="table-header-info">
              <span className="results-count">Showing {strategyData.length} strategy trades</span>
              <span className="last-updated">Last updated: 1 minute ago</span>
            </div>

            <div className="rule-strategy-table">
              <div className="table-row table-header-row">
                <div className="table-cell">Name</div>
                <div className="table-cell">Symbol</div>
                <div className="table-cell">LTP</div>
                <div className="table-cell">Entry</div>
                <div className="table-cell">Stop Loss</div>
                <div className="table-cell">Target</div>
                <div className="table-cell">Change%</div>
                <div className="table-cell">R:R</div>
                <div className="table-cell">Status</div>
                <div className="table-cell">Chart</div>
              </div>

              {strategyData.map((stock, index) => (
                <div key={index} className="table-row stock-row">
                  <div className="table-cell stock-name">
                    <div className="stock-info">
                      <span className="stock-title">{stock.name}</span>
                      <span className="stock-sector">Equity</span>
                    </div>
                  </div>
                  <div className="table-cell stock-symbol">{stock.symbol}</div>
                  <div className="table-cell stock-price">₹{stock.ltp.toFixed(2)}</div>
                  <div className="table-cell stock-entry">₹{stock.entryPrice.toFixed(2)}</div>
                  <div className="table-cell stock-stop">₹{stock.stopLoss.toFixed(2)}</div>
                  <div className="table-cell stock-target">₹{stock.target.toFixed(2)}</div>
                  <div className={`table-cell stock-change ${stock.change >= 0 ? 'positive' : 'negative'}`}>
                    {stock.change >= 0 ? '+' : ''}{stock.change.toFixed(2)}%
                  </div>
                  <div className="table-cell stock-rr">
                    <span className="rr-ratio">{stock.riskReward}</span>
                  </div>
                  <div className="table-cell stock-status">
                    <span className={`status-badge ${stock.status.toLowerCase()}`}>
                      {stock.status}
                    </span>
                  </div>
                  <div className="table-cell stock-chart">
                    <div className="chart-container">
                      <div className={`strategy-chart ${stock.chart}`}>
                        <div className="chart-line"></div>
                        <div className="chart-levels">
                          <div className="level entry" title="Entry Price"></div>
                          <div className="level stop" title="Stop Loss"></div>
                          <div className="level target" title="Target"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Strategy Analysis */}
          <div className="strategy-analysis">
            <div className="analysis-card">
              <h3>Strategy Analysis</h3>
              <div className="analysis-grid">
                <div className="analysis-item">
                  <div className="analysis-label">Max Drawdown</div>
                  <div className="analysis-value negative">-8.5%</div>
                  <div className="analysis-percentage">Within limit</div>
                </div>
                <div className="analysis-item">
                  <div className="analysis-label">Profit Factor</div>
                  <div className="analysis-value positive">2.4</div>
                  <div className="analysis-percentage">Excellent</div>
                </div>
                <div className="analysis-item">
                  <div className="analysis-label">Sharpe Ratio</div>
                  <div className="analysis-value positive">1.8</div>
                  <div className="analysis-percentage">Good</div>
                </div>
                <div className="analysis-item">
                  <div className="analysis-label">Max Risk</div>
                  <div className="analysis-value">3.0%</div>
                  <div className="analysis-percentage">Per trade</div>
                </div>
              </div>
            </div>
          </div>

          {/* Trading Rules */}
          <div className="trading-rules">
            <div className="rules-card">
              <h3>Trading Rules Checklist</h3>
              <div className="rules-list">
                <div className="rule-checklist">
                  <div className="check-item">
                    <span className="check-icon">✅</span>
                    <span className="check-text">Never risk more than 3% of capital per trade</span>
                  </div>
                  <div className="check-item">
                    <span className="check-icon">✅</span>
                    <span className="check-text">Always set stop loss before entering trade</span>
                  </div>
                  <div className="check-item">
                    <span className="check-icon">✅</span>
                    <span className="check-text">Maintain minimum 1:2 risk-reward ratio</span>
                  </div>
                  <div className="check-item">
                    <span className="check-icon">✅</span>
                    <span className="check-text">Exit trade if stop loss is hit</span>
                  </div>
                  <div className="check-item">
                    <span className="check-icon">✅</span>
                    <span className="check-text">Book profits at target levels</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default RuleStrategyPage;