import React from 'react';
import './TopGainers.css';

const TopGainers = ({ onBack }) => {
  const dummyData = [
    { id: 1, name: 'Stock name', ltp: '315.70', change: '', rFactor: '', chart: '📈', highlight: false },
    { id: 2, name: 'Stock name', ltp: '1082.70', change: '+3.0', rFactor: '', chart: '📉', highlight: true },
    { id: 3, name: 'Stock name', ltp: '1082.70', change: '34,823', rFactor: '', chart: '📉', highlight: false },
    { id: 4, name: 'Stock name', ltp: '315.70', change: '5219', rFactor: '', chart: '📈', highlight: false },
  ];

  return (
    <div className="vb-page">
      <header className="intraday-header">
<div className="intraday-header-container">
<div className="logo">
          <img src="images/Final Font Stocks4U1.png" className="logo-text" />
</div>
<div className="intraday-search">
<input type="text" placeholder="Search Company" />
</div>
<div className="intraday-user">
<button onClick={onBack}>← Back to Dashboard</button>
</div>
</div>
</header>
      <div className="vb-content">
        <h1>Intraday Scan <span className="info-icon">ℹ️</span></h1>

        <div className="vb-category-card">
          <h3>Top Gainers</h3>
          <p>How to use ?</p>
        </div>

        <div className="vb-filters">
          <span>Filter By:</span>
          <span>( Criteria Volume )</span>
        </div>

        <div className="vb-table">
          <div className="vb-table-header">
            <span>Name</span>
            <span>LTP</span>
            <span>Percentage Change</span>
            <span>R Factor</span>
            <span>Chart</span>
          </div>

          {dummyData.map((row) => (
            <div key={row.id} className={`vb-table-row ${row.highlight ? 'highlight' : ''}`}>
              <span>{row.highlight ? '⭐' : '☆'}</span>
              <span>{row.name}</span>
              <span>{row.ltp}</span>
              <span>
                {row.change && (
                  <span className={`change-badge ${row.change.includes('+') ? 'positive' : ''}`}>
                    {row.change}
                  </span>
                )}
              </span>
              <span>{row.rFactor}</span>
              <span>{row.chart}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TopGainers;
