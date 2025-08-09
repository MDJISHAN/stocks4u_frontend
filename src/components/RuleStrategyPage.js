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
         
    <div className="momentum-header-bar">
              <h1>Momentum Radar</h1>
              <div className="filter-buttons">
                <h3>Filter By: </h3>
                <button className="filter-btn"> F&O Stocks</button>
                <button className="filter-btn active">All Stocks</button>
              </div>
            </div>
          {/* Tabs */}
        

          {/* Strategy Rules */}
         <div className="spike-section">
          <h4>3% RULE STATERGY</h4>
          <button className="btn green-btn">UP</button>
          <button className="btn red-btn">DOWN</button>
        </div>
          {/* Controls */}
         
            
            
      

      

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
          

 
        </div>
      </main>
    </div>
  );
};

export default RuleStrategyPage;