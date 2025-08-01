import React from 'react';
import './MomentumSpike.css';

const MomentumSpike = ({onBack}) => {
  return (
    <div className="momentum-spike-wrapper">
         <header className="momentum-header">
        <div className="momentum-header-container">
          <div className="momentum-logo">
            <span className="momentum-logo-icon">📈</span>
            <span className="momentum-logo-text">stocks4u</span>
          </div>

          <div className="momentum-search">
            <input type="text" placeholder="Search Company" className="momentum-search-input" />
          </div>

          <div className="momentum-user">
            <button className="momentum-back-btn" onClick={onBack}>← Back to Dashboard</button>
          </div>
        </div>
      </header>
      <h2>Momentum Radar</h2>
      <div className="filter-buttons">
                <h3>Filter By:</h3>
                <button className="filter-btn">F&O Stocks</button>
        </div>
      <div className="button-group">
        <div className="spike-section">
          <h4>5 MIN MOMENTUM SPIKE</h4>
          <button className="btn green-btn">Bullish</button>
          <button className="btn red-btn">Bearish</button>
        </div>
        <div className="spike-section">
          <h4>15 MIN MOMENTUM SPIKE</h4>
          <button className="btn green-btn">Bullish</button>
          <button className="btn red-btn">Bearish</button>
        </div>
      </div>
      <div className="chart-are">
        {/* Dummy bar chart layout */}
        <div className="bar-container">
          <div className="legend">
        <span className="legend-box green"></span> Bullish
        <span className="legend-box red"></span> Bearish
      </div>
          <div className="bar-label">LUPIN</div>
          <div className="bar green"></div>
          <div className="bar red"></div>
        </div>
        <div className="bar-container">
          <div className="bar green"></div>
          <div className="bar red"></div>
        </div>
        <div className="bar-container">
          <div className="bar green"></div>
          <div className="bar red"></div>
        </div>
        <div className="bar-container">
          <div className="bar green"></div>
          <div className="bar red"></div>
        </div>
      </div>
      
    </div>
  );
};

export default MomentumSpike;
