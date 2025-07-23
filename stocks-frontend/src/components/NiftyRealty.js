import React, { useState } from 'react';
import './NiftyRealty.css';

const NiftyRealty = ({ onBack }) => {
  const [selectedTimeframe, setSelectedTimeframe] = useState('1D');
  
  const realtyStocks = [
    {
      name: 'Stock name',
      symbol: 'STOCKSYM',
      ltp: 749.25,
      percentageChange: 2.45,
      volume: 89654,
      chart: 'up',
      action: 'BUY'
    },
    {
      name: 'Stock name',
      symbol: 'STOCKSYM',
      ltp: 624.80,
      percentageChange: 1.85,
      volume: 67543,
      chart: 'up',
      action: 'BUY'
    },
    {
      name: 'Stock name',
      symbol: 'STOCKSYM',
      ltp: 1049.50,
      percentageChange: -1.20,
      volume: 45876,
      chart: 'down',
      action: 'SELL'
    },
    {
      name: 'Stock name',
      symbol: 'STOCKSYM',
      ltp: 567.75,
      percentageChange: 0.95,
      volume: 98765,
      chart: 'up',
      action: 'BUY'
    }
  ];

  const timeframes = ['1D', '1W', '1M', '3M', '6M', '1Y'];

  return (
    <div className="nifty-realty-page">
      {/* Header */}
      <header className="nifty-header">
        <div className="nifty-header-container">
          <div className="nifty-logo">
            <span className="nifty-logo-icon">📈</span>
            <span className="nifty-logo-text">stocks4u</span>
          </div>
          
          <div className="nifty-search">
            <input 
              type="text" 
              placeholder="Search markets"
              className="nifty-search-input"
            />
          </div>
          
          <div className="nifty-user">
            <button className="nifty-back-btn" onClick={onBack}>
              ← Back to Dashboard
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="nifty-main">
        <div className="nifty-container">
          <div className="nifty-title">
            <h1>NIFTY Realty</h1>
            <div className="nifty-info">
              <span className="nifty-index">Today's top movers</span>
            </div>
          </div>

          {/* Content Grid */}
          <div className="nifty-content">
            {/* Left Panel - Chart */}
            <div className="nifty-chart-panel">
              <div className="chart-header">
                <h3>Price Chart</h3>
                <div className="chart-timeframes">
                  {timeframes.map(timeframe => (
                    <button
                      key={timeframe}
                      className={`timeframe-btn ${selectedTimeframe === timeframe ? 'active' : ''}`}
                      onClick={() => setSelectedTimeframe(timeframe)}
                    >
                      {timeframe}
                    </button>
                  ))}
                </div>
              </div>

              <div className="chart-container">
                <div className="price-chart">
                  <div className="chart-grid">
                    <div className="grid-line horizontal"></div>
                    <div className="grid-line horizontal"></div>
                    <div className="grid-line horizontal"></div>
                    <div className="grid-line horizontal"></div>
                    <div className="grid-line vertical"></div>
                    <div className="grid-line vertical"></div>
                    <div className="grid-line vertical"></div>
                    <div className="grid-line vertical"></div>
                  </div>
                  <div className="chart-line-main"></div>
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

              <div className="chart-info">
                <div className="chart-stats">
                  <div className="stat">
                    <span className="stat-label">Current Price</span>
                    <span className="stat-value">₹485.75</span>
                  </div>
                  <div className="stat">
                    <span className="stat-label">Change</span>
                    <span className="stat-value positive">+12.45 (2.63%)</span>
                  </div>
                  <div className="stat">
                    <span className="stat-label">Volume</span>
                    <span className="stat-value">2,45,678</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Panel - Stock List */}
            <div className="nifty-stocks-panel">
              <div className="stocks-header">
                <h3>Top Stocks</h3>
                <div className="stocks-filters">
                  <select className="filter-select">
                    <option value="all">All Stocks</option>
                    <option value="gainers">Top Gainers</option>
                    <option value="losers">Top Losers</option>
                  </select>
                </div>
              </div>

              <div className="stocks-table">
                <div className="table-header">
                  <div className="table-cell">Name</div>
                  <div className="table-cell">LTP</div>
                  <div className="table-cell">% Change</div>
                  <div className="table-cell">Volume</div>
                  <div className="table-cell">Chart</div>
                </div>

                {realtyStocks.map((stock, index) => (
                  <div key={index} className="stock-row">
                    <div className="table-cell stock-name">
                      <div className="stock-details">
                        <span className="stock-title">{stock.name}</span>
                        <span className="stock-symbol">{stock.symbol}</span>
                      </div>
                    </div>
                    <div className="table-cell stock-price">₹{stock.ltp}</div>
                    <div className={`table-cell stock-change ${stock.percentageChange >= 0 ? 'positive' : 'negative'}`}>
                      {stock.percentageChange >= 0 ? '+' : ''}{stock.percentageChange}%
                    </div>
                    <div className="table-cell stock-volume">{stock.volume.toLocaleString()}</div>
                    <div className="table-cell stock-chart">
                      <div className="mini-chart">
                        <div className={`mini-chart-line ${stock.chart}`}></div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom Section - Market Overview */}
          <div className="market-overview">
            <div className="overview-card">
              <h3>Market Overview</h3>
              <div className="overview-stats">
                <div className="overview-stat">
                  <span className="stat-label">Market Cap</span>
                  <span className="stat-value">₹2,45,678 Cr</span>
                </div>
                <div className="overview-stat">
                  <span className="stat-label">P/E Ratio</span>
                  <span className="stat-value">24.56</span>
                </div>
                <div className="overview-stat">
                  <span className="stat-label">Dividend Yield</span>
                  <span className="stat-value">1.85%</span>
                </div>
              </div>
            </div>

            <div className="overview-card">
              <h3>Sector Performance</h3>
              <div className="sector-performance">
                <div className="performance-bar">
                  <span className="performance-label">Residential</span>
                  <div className="performance-value">
                    <div className="performance-fill positive" style={{ width: '75%' }}></div>
                    <span className="performance-text">+2.45%</span>
                  </div>
                </div>
                <div className="performance-bar">
                  <span className="performance-label">Commercial</span>
                  <div className="performance-value">
                    <div className="performance-fill positive" style={{ width: '60%' }}></div>
                    <span className="performance-text">+1.85%</span>
                  </div>
                </div>
                <div className="performance-bar">
                  <span className="performance-label">Industrial</span>
                  <div className="performance-value">
                    <div className="performance-fill negative" style={{ width: '45%' }}></div>
                    <span className="performance-text">-0.65%</span>
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

export default NiftyRealty;