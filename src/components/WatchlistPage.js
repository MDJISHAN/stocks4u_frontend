import React, { useState } from 'react';
import './WatchlistPage.css';

const WatchlistPage = ({ onBack }) => {
  const [watchlistData] = useState([
    { 
      symbol: 'RELIANCE',
      name: 'RELIANCE IND',
      ltp: 2456.75,
      change: 45.30,
      changePercent: 1.87,
      volume: '1,245,678',
      marketCap: '16,67,234',
      chart: 'up'
    },
    { 
      symbol: 'TCS',
      name: 'TCS LIMITED',
      ltp: 3678.90,
      change: 78.45,
      changePercent: 2.18,
      volume: '987,654',
      marketCap: '13,45,123',
      chart: 'up'
    },
    { 
      symbol: 'HDFCBANK',
      name: 'HDFC BANK',
      ltp: 1687.30,
      change: -23.45,
      changePercent: -1.37,
      volume: '2,345,789',
      marketCap: '9,23,456',
      chart: 'down'
    },
    { 
      symbol: 'INFY',
      name: 'INFOSYS LTD',
      ltp: 1456.25,
      change: 34.60,
      changePercent: 2.43,
      volume: '1,567,890',
      marketCap: '6,12,345',
      chart: 'up'
    },
    { 
      symbol: 'ICICIBANK',
      name: 'ICICI BANK',
      ltp: 945.80,
      change: 12.35,
      changePercent: 1.32,
      volume: '1,789,234',
      marketCap: '6,78,901',
      chart: 'up'
    }
  ]);

  return (
    <div className="watchlist-page">
      <header className="watchlist-header">
        <div className="watchlist-header-container">
          <div className="watchlist-logo">
            <span className="watchlist-logo-icon">⭐</span>
            <span className="watchlist-logo-text">stocks4u</span>
          </div>
          
          <div className="watchlist-search">
            <input 
              type="text" 
              placeholder="Search watchlist"
              className="watchlist-search-input"
            />
          </div>
          
          <div className="watchlist-user">
            <button className="watchlist-back-btn" onClick={onBack}>
              ← Back to Dashboard
            </button>
          </div>
        </div>
      </header>

      <main className="watchlist-main">
        <div className="watchlist-container">
          <div className="watchlist-title">
            <h1>My Watchlist</h1>
            <div className="watchlist-info">
              <span className="info-icon">⭐</span>
              <span className="info-text">Track your favorite stocks</span>
            </div>
          </div>

          <div className="watchlist-summary">
            <div className="summary-card">
              <h3>Watchlist Summary</h3>
              <div className="summary-stats">
                <div className="stat-item">
                  <span className="stat-icon">📈</span>
                  <span className="stat-label">Gainers</span>
                  <span className="stat-value positive">4</span>
                </div>
                <div className="stat-item">
                  <span className="stat-icon">📉</span>
                  <span className="stat-label">Losers</span>
                  <span className="stat-value negative">1</span>
                </div>
                <div className="stat-item">
                  <span className="stat-icon">🎯</span>
                  <span className="stat-label">Total Stocks</span>
                  <span className="stat-value">5</span>
                </div>
                <div className="stat-item">
                  <span className="stat-icon">📊</span>
                  <span className="stat-label">Avg Change</span>
                  <span className="stat-value positive">+1.08%</span>
                </div>
              </div>
            </div>
          </div>

          <div className="watchlist-table-container">
            <div className="table-header-info">
              <span className="results-count">Showing {watchlistData.length} stocks</span>
              <span className="last-updated">Last updated: Real-time</span>
            </div>

            <div className="watchlist-table">
              <div className="table-row table-header-row">
                <div className="table-cell">Symbol</div>
                <div className="table-cell">Name</div>
                <div className="table-cell">LTP</div>
                <div className="table-cell">Change</div>
                <div className="table-cell">Change %</div>
                <div className="table-cell">Volume</div>
                <div className="table-cell">Market Cap</div>
                <div className="table-cell">Chart</div>
                <div className="table-cell">Actions</div>
              </div>

              {watchlistData.map((stock, index) => (
                <div key={index} className="table-row stock-row">
                  <div className="table-cell stock-symbol">{stock.symbol}</div>
                  <div className="table-cell stock-name">{stock.name}</div>
                  <div className="table-cell stock-price">₹{stock.ltp.toFixed(2)}</div>
                  <div className={`table-cell stock-change ${stock.change >= 0 ? 'positive' : 'negative'}`}>
                    {stock.change >= 0 ? '+' : ''}{stock.change.toFixed(2)}
                  </div>
                  <div className={`table-cell stock-change-percent ${stock.changePercent >= 0 ? 'positive' : 'negative'}`}>
                    {stock.changePercent >= 0 ? '+' : ''}{stock.changePercent.toFixed(2)}%
                  </div>
                  <div className="table-cell stock-volume">{stock.volume}</div>
                  <div className="table-cell stock-market-cap">₹{stock.marketCap} Cr</div>
                  <div className="table-cell stock-chart">
                    <div className="chart-container">
                      <div className={`mini-chart ${stock.chart}`}>
                        <div className="chart-line"></div>
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
                  <div className="table-cell stock-actions">
                    <button className="action-btn remove">Remove</button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default WatchlistPage;