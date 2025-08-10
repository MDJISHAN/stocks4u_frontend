import React, { useState } from 'react';
import './Heatmap.css';

const Heatmap = ({ onBack }) => {
  const [selectedSector, setSelectedSector] = useState('NIFTY 50');
  const [selectedTimeframe, setSelectedTimeframe] = useState('1D');

  const heatmapData = [
    { symbol: 'RELIANCE', name: 'Reliance Industries', change: 2.45, size: 'large' },
    { symbol: 'TCS', name: 'Tata Consultancy Services', change: 1.85, size: 'large' },
    { symbol: 'HDFC', name: 'HDFC Bank', change: 3.25, size: 'large' },
    { symbol: 'INFY', name: 'Infosys', change: 2.15, size: 'medium' },
    { symbol: 'ICICI', name: 'ICICI Bank', change: 1.65, size: 'medium' },
    { symbol: 'KOTAK', name: 'Kotak Mahindra Bank', change: 2.85, size: 'medium' },
    { symbol: 'LT', name: 'Larsen & Toubro', change: -1.25, size: 'medium' },
    { symbol: 'WIPRO', name: 'Wipro Ltd', change: 1.45, size: 'small' },
    { symbol: 'AXISBANK', name: 'Axis Bank', change: -0.85, size: 'small' },
    { symbol: 'MARUTI', name: 'Maruti Suzuki', change: -2.15, size: 'small' },
    { symbol: 'HCLTECH', name: 'HCL Technologies', change: 1.95, size: 'small' },
    { symbol: 'BAJFINANCE', name: 'Bajaj Finance', change: 2.65, size: 'medium' },
    { symbol: 'ASIANPAINT', name: 'Asian Paints', change: -1.45, size: 'small' },
    { symbol: 'NESTLEIND', name: 'Nestle India', change: 0.95, size: 'small' },
    { symbol: 'ULTRACEMCO', name: 'UltraTech Cement', change: -0.75, size: 'small' },
    { symbol: 'TITAN', name: 'Titan Company', change: 1.35, size: 'small' },
    { symbol: 'ADANIPORTS', name: 'Adani Ports', change: -3.25, size: 'small' },
    { symbol: 'HINDALCO', name: 'Hindalco Industries', change: 2.25, size: 'small' },
    { symbol: 'POWERGRID', name: 'Power Grid Corp', change: 0.85, size: 'small' },
    { symbol: 'SUNPHARMA', name: 'Sun Pharma', change: -1.85, size: 'small' }
  ];

  const sectors = ['NIFTY 50', 'NIFTY BANK', 'NIFTY IT', 'NIFTY AUTO', 'NIFTY PHARMA', 'NIFTY FMCG'];
  const timeframes = ['1D', '1W', '1M', '3M', '6M', '1Y'];

  const getIntensityClass = (change) => {
    const abs = Math.abs(change);
    if (abs >= 3) return 'intense';
    if (abs >= 2) return 'strong';
    if (abs >= 1) return 'moderate';
    return 'light';
  };

  const getColorClass = (change) => {
    return change >= 0 ? 'positive' : 'negative';
  };

  return (
    <div className="heatmap-page">
      {/* Header */}
      <header className="heatmap-header">
        <div className="heatmap-header-container">
          <div className="logo">
          <img src="images/Final Font Stocks4U1.png" className="logo-text" />
          </div>
          
          <div className="heatmap-search">
            <input 
              type="text" 
              placeholder="Search stocks"
              className="heatmap-search-input"
            />
          </div>
          
          <div className="heatmap-user">
            <button className="heatmap-back-btn" onClick={onBack}>
              ← Back to Dashboard
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="heatmap-main">
        <div className="heatmap-container">
          <div className="heatmap-title">
            <h1>Sector Heatmap</h1>
            <div className="heatmap-info">
              <span className="info-icon">ℹ️</span>
              <span className="info-text">Visual market performance analysis</span>
            </div>
          </div>

          {/* Controls */}
          <div className="heatmap-controls">
            <div className="sector-selector">
              <label>Sector:</label>
              <select 
                value={selectedSector} 
                onChange={(e) => setSelectedSector(e.target.value)}
                className="sector-select"
              >
                {sectors.map(sector => (
                  <option key={sector} value={sector}>{sector}</option>
                ))}
              </select>
            </div>

            <div className="timeframe-selector">
              <label>Timeframe:</label>
              <div className="timeframe-buttons">
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
          </div>

          {/* Heatmap Grid */}
          <div className="heatmap-grid-container">
            <div className="heatmap-grid">
              {heatmapData.map((stock, index) => (
                <div 
                  key={index}
                  className={`heatmap-tile ${stock.size} ${getColorClass(stock.change)} ${getIntensityClass(stock.change)}`}
                  title={`${stock.name}: ${stock.change >= 0 ? '+' : ''}${stock.change}%`}
                >
                  <div className="tile-content">
                    <div className="tile-symbol">{stock.symbol}</div>
                    <div className="tile-change">
                      {stock.change >= 0 ? '+' : ''}{stock.change}%
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Legend */}
          <div className="heatmap-legend">
            <div className="legend-section">
              <h3>Performance Scale</h3>
              <div className="legend-items">
                <div className="legend-item">
                  <div className="legend-color positive intense"></div>
                  <span>Strong Gain (>3%)</span>
                </div>
                <div className="legend-item">
                  <div className="legend-color positive strong"></div>
                  <span>Moderate Gain (2-3%)</span>
                </div>
                <div className="legend-item">
                  <div className="legend-color positive moderate"></div>
                  <span>Small Gain (1-2%)</span>
                </div>
                <div className="legend-item">
                  <div className="legend-color positive light"></div>
                  <span>Minor Gain (0-1%)</span>
                </div>
                <div className="legend-item">
                  <div className="legend-color negative light"></div>
                  <span>Minor Loss (0-1%)</span>
                </div>
                <div className="legend-item">
                  <div className="legend-color negative moderate"></div>
                  <span>Small Loss (1-2%)</span>
                </div>
                <div className="legend-item">
                  <div className="legend-color negative strong"></div>
                  <span>Moderate Loss (2-3%)</span>
                </div>
                <div className="legend-item">
                  <div className="legend-color negative intense"></div>
                  <span>Strong Loss (3-5%)</span>
                </div>
              </div>
            </div>
          </div>

          {/* Market Summary */}
          <div className="market-summary">
            <div className="summary-stats">
              <div className="stat-card">
                <div className="stat-label">Total Stocks</div>
                <div className="stat-value">{heatmapData.length}</div>
              </div>
              <div className="stat-card">
                <div className="stat-label">Gainers</div>
                <div className="stat-value positive">
                  {heatmapData.filter(stock => stock.change > 0).length}
                </div>
              </div>
              <div className="stat-card">
                <div className="stat-label">Losers</div>
                <div className="stat-value negative">
                  {heatmapData.filter(stock => stock.change < 0).length}
                </div>
              </div>
              <div className="stat-card">
                <div className="stat-label">Average Change</div>
                <div className={`stat-value ${heatmapData.reduce((acc, stock) => acc + stock.change, 0) / heatmapData.length >= 0 ? 'positive' : 'negative'}`}>
                  {((heatmapData.reduce((acc, stock) => acc + stock.change, 0) / heatmapData.length)).toFixed(2)}%
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Heatmap;