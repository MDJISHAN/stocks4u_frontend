// TradersDiary.js
import React from 'react';
import './TradersDiary.css';

const TradersDiary = ({ onBack }) => {
  return (
    <div className="traders-diary-page">
      <header className="traders-header">
        <div className="header-left">
          <h1>Traders Diary</h1>
        </div>
        <div className="header-right">
          <button className="back-btn" onClick={onBack}>← Back to Dashboard</button>
        </div>
      </header>

      <div className="month-tabs">
        {['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'].map(month => (
          <button className={`month-tab ${month === 'Feb' ? 'active' : ''}`} key={month}>{month}</button>
        ))}
      </div>

      <div className="calendar-section">
        <div className="calendar-grid">
          <div className="day-box green">
            <div className="day-number">01</div>
            <div className="net">+400 (Net)</div>
            <div className="label">Software Breakout</div>
            <div className="plus">+</div>
          </div>
          <div className="day-box red">
            <div className="day-number">03</div>
            <div className="net">-100 (Net)</div>
            <div className="label">Trades</div>
            <div className="plus">+</div>
          </div>
          {[...Array(33)].map((_, idx) => (
            <div className="day-box" key={idx + 4}>01</div>
          ))}
        </div>
        <div className="calendar-mini">
          <h3>February 2021</h3>
          <table>
            <thead>
              <tr>{['Mo','Tu','We','Th','Fr','Sa','Su'].map(day => <th key={day}>{day}</th>)}</tr>
            </thead>
            <tbody>
              {[...Array(5)].map((_, row) => (
                <tr key={row}>
                  {[...Array(7)].map((_, col) => (
                    <td key={col}>{row * 7 + col + 1 <= 28 ? row * 7 + col + 1 : ''}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="statistics-section">
        <h2>Statistics</h2>
        <div className="stats-grid">
          {['Monthly P&L','Total Trades','Highest Wins','Highest Loss','Overall P&L','Highest Winning Streak','Current Winning Streak'].map(stat => (
            <div className="stat-box" key={stat}>
              <div className="stat-title">{stat}</div>
              <div className="stat-value">01</div>
            </div>
          ))}
        </div>
      </div>

      <div className="trades-section">
        <h2>Trades</h2>
        <div className="trades-box">
          <div className="trade-header">
            <button className="active">Top Winning Trades</button>
            <button>Top Losing Trades</button>
          </div>
          <div className="trade-list">
            <div className="trade-item">📈 Stock Name <span className="change">+ Price Change</span></div>
            <div className="trade-item">📈 Stock Name <span className="change">+ Price Change</span></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TradersDiary;
  