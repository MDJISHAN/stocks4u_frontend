// ✅ SectorRotationFinal.js with updated layout, dropdown, and responsive design
import React, { useState, useEffect } from 'react';
import './SectorRotation.css';

const SectorRotation = ({ onBack }) => {
  const [selectedTimeframe, setSelectedTimeframe] = useState('1D');
  const [selectedSector, setSelectedSector] = useState('Auto');
  const [sectorData, setSectorData] = useState([]);
  const [stockData, setStockData] = useState([]);
  const [abnormalStocks, setAbnormalStocks] = useState([]);
  const [sectorStats, setSectorStats] = useState({ total_stocks_analyzed: 0, median_growth: 0 });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const fetchSectorData = async () => {
    setLoading(true);
    setError('');
    try {
      const response = await fetch(`https://stocks4u-project-o06q.onrender.com/api/sector-abnormal-growth?sector=Auto`);
      const data = await response.json();

      const ranked = data?.ranked_stocks || [];
      const abnormal = data?.abnormal_growth_stocks || [];
      const stats = data?.sector_stats || {};

      if (ranked.length === 0 || abnormal.length === 0) {
        setError('No data available for this sector.');
      }

      const formattedChart = ranked.map(stock => ({
        name: stock.symbol,
        change: stock.avg_growth.toFixed(2),
        height: Math.min(Math.abs(stock.avg_growth) * 20 + 40, 200),
        color: stock.avg_growth >= 0 ? 'green' : 'red'
      }));

      const formattedTable = abnormal.map(stock => ({
        name: stock.symbol,
        symbol: stock.symbol,
        change: stock.avg_growth,
        volatility: stock.growth_volatility,
        volume: stock.volume_traded,
        z_score: stock.z_score,
        rank: stock.rank,
        data_points: stock.data_points,
        action: stock.avg_growth > 0 ? 'BUY' : 'SELL'
      }));

      setSectorData(formattedChart);
      setStockData(formattedTable);
      setAbnormalStocks(abnormal);
      setSectorStats(stats);
    } catch (err) {
      console.error('Failed to fetch data:', err);
      setError('Error fetching data. Please check the sector name or try again.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchSectorData();
    const interval = setInterval(fetchSectorData, 60000);
    return () => clearInterval(interval);
  }, [selectedSector]);

  const timeframes = ['1D', '1W', '1M', '3M', '6M', '1Y'];

  return (
    <div className="sector-rotation-page">
      <header className="header">
        <div className="header-container">
          <div className="logo">
          <img src="images/Final Font Stocks4U1.png" className="logo-text" />
          </div>
          <div className="search-container">
            <input type="text" placeholder="Search markets" className="search-input" />
          </div>
          <button className="back-btn" onClick={onBack}>← Back to Dashboard</button>
        </div>
      </header>

      <main className="main-container">
        <h1 className="page-title">Sector Rotation</h1>

        <div className="chart-panel">
          <div className="controls">
            <div className="timeframe-controls">
              {timeframes.map(t => (
                <button
                  key={t}
                  className={`timeframe-button ${selectedTimeframe === t ? 'active' : ''}`}
                  onClick={() => setSelectedTimeframe(t)}
                >{t}</button>
              ))}
            </div>
            <div className="sector-control">
              <label className="sector-label">Sector:</label>
              <select
                className="sector-select modern-select"
                value={selectedSector}
                onChange={e => setSelectedSector(e.target.value)}
              >
                <option value="Auto">Auto</option>
                <option value="IT">IT</option>
                <option value="Bank">Bank</option>
              </select>
            </div>
          </div>

          <div className="chart-title">
            <h3>📊 Abnormal Growth - {selectedSector}</h3>
          </div>

          {loading ? (
            <div className="loading-message">⏳ Loading sector data...</div>
          ) : error ? (
            <div className="error-message">⚠️ {error}</div>
          ) : (
            <>
              <div className="candlestick-container">
                {sectorData.map((stock, idx) => (
                  <div key={idx} className="candlestick-wrapper">
                    <div className="candlestick-chart">
                      <div
                        className={`candle-body ${stock.color === 'green' ? 'bullish' : 'bearish'}`}
                        style={{ height: `${stock.height}px` }}
                      >
                        <div className="growth-percent">{stock.change}%</div>
                      </div>
                    </div>
                    <div className="stock-symbol">{stock.name}</div>
                  </div>
                ))}
              </div>
              <div className="chart-legend">
                <div className="legend-item"><div className="legend-dot positive"></div>Top Performing</div>
                <div className="legend-item"><div className="legend-dot negative"></div>Under Performing</div>
              </div>
            </>
          )}
        </div>

        <div className="bottom-layout">
          <div className="table-panel">
            <div className="table-header"><h3>Sector Performance</h3></div>
            <div className="data-table">
              <div className="table-headers">
                <div className="header-cell">Stock names</div>
                <div className="header-cell">percentage %</div>
                <div className="header-cell">No.of companices</div>
                <div className="header-cell">Advance/decline</div>
                <div className="header-cell">R-factor</div>
                <div className="header-cell">Index chart</div>
              </div>
              {stockData.map((stock, index) => (
                <div key={index} className="table-row">
                <div className="data-cell">{stock.symbol}</div>
                  <div className="data-celll">+{stock.change}%</div>
                  <div className="data-celll">{stock.volatility}</div>
                  <div className="data-celll">{(stock.volume / 1000).toFixed(0)}K</div>
                  <div className="data-celll">{stock.z_score}</div>
                  <div className="data-celll"><span className="rank-badge">{stock.rank}</span></div>
                  <div className="data-cell">
                    <button className={`action-button ${stock.action === 'BUY' ? 'buy' : 'sell'}`}>{stock.action}</button>
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

export default SectorRotation;
