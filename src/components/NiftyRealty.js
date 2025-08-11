import React, { useState } from 'react';
import './NiftyRealty.css';

const NiftyRealty = ({ onBack }) => {
  const [filter, setFilter] = useState('all');
  const [category, setCategory] = useState('10 DAY BREAKOUT');

  const stocks = [
    { id: 1, name: 'Stock name', time: '315.70', percentage: '+3.0', afterBO: '+3.0', volume: '34,823', chart: 'up' },
    { id: 2, name: 'Stock name', time: '1082.70', percentage: '+3.0', afterBO: '+3.0', volume: '34,823', chart: 'down' },
    { id: 3, name: 'Stock name', time: '1082.70', percentage: '+3.0', afterBO: '+3.0', volume: '34,823', chart: 'down' },
    { id: 4, name: 'Stock name', time: '315.70', percentage: '+3.0', afterBO: '+3.0', volume: '5219', chart: 'up' },
        { id: 4, name: 'Stock name', time: '315.70', percentage: '+3.0', afterBO: '+3.0', volume: '5219', chart: 'up' },    { id: 4, name: 'Stock name', time: '315.70', percentage: '+3.0', afterBO: '+3.0', volume: '5219', chart: 'up' },
    { id: 4, name: 'Stock name', time: '315.70', percentage: '+3.0', afterBO: '+3.0', volume: '5219', chart: 'up' },

  ];

  return (
    <div className="nifty-realty-page">
      {/* Header */}
      <header className="nifty-header">
        <div className="nifty-header-container">
         <div className="logo">
          <img src="images/Final Font Stocks4U1.png" className="logo-text" />
          </div>
          <div className="nifty-search">
            <input
              type="text"
              placeholder="Search Company"
              className="nifty-search-input"
            />
          </div>
          <div className="nifty-user">
            <button className="nifty-back-btn" onClick={onBack}>← Back to Dashboard</button>
          </div>
        </div>
      </header>

      {/* Main Section */}
      <main className="nifty-main">
        <div className="nifty-container">
           
          <div className="nifty-title">
            <h1>Swing Zone <span className="info-icon">ℹ️</span></h1>
            <p className="warning">In Swing zone data will be shown for 10 days</p>
             <div className="filter-right">
              <span className="filter-label">Filter By:</span>
              <button className="filter-btn">F&O Stocks</button>
              <button className="filter-btn active">All Stocks</button>
            </div>
            <h2 className="category-heading">Categories</h2>
            <div className="breakout-buttons">
                 <button
                className={category === 'LONG TERM CHANNEL BREAKOUT' ? 'breakout-btn active' : 'breakout-btn'}
                onClick={() => setCategory('LONG TERM CHANNEL BREAKOUT')}
              >
                LONG TERM CHANNEL BREAKOUT
                <p className="subtext">How to use ?</p>
              </button>
              <button
                className={category === '10 DAY BREAKOUT' ? 'breakout-btn active' : 'breakout-btn'}
                onClick={() => setCategory('10 DAY BREAKOUT')}
              >
                10 DAY BREAKOUT
                <p className="subtext">How to use ?</p>
              </button>
              <button
                className={category === '50 DAY BREAKOUT' ? 'breakout-btn active' : 'breakout-btn'}
                onClick={() => setCategory('50 DAY BREAKOUT')}
              >
                50 DAY BREAKOUT
                <p className="subtext">How to use ?</p>
              </button>
            </div>
          </div>

          <div className="filter-row">
            <div className="filter-left">
              <div className="btn-group">
                              <span className="filter-label">Filter By:</span>

                <button className={filter === 'bullish' ? 'active' : ''} onClick={() => setFilter('bullish')} style={{backgroundColor:'green'}}>Bullish</button>
                <button className={filter === 'bearish' ? 'active' : ''} onClick={() => setFilter('bearish')} style={{backgroundColor:'red'}}>Bearish</button>
              </div>
            </div>
           
          </div>

          <div className="nifty-table">
            <div className="table-head">
              <span>Name</span>
              <span>Date & Time</span>
              <span>Percentage</span>
              <span>Percentage Change After BO</span>
              <span style={{marginLeft:"30px"}}>Volume</span>
            </div>

            {stocks.map(stock => (
              <div className="table-row" key={stock.id}>
                <span><span className="star">★</span> {stock.id} {stock.name}</span>
                <span>{stock.time}</span>
                <span className="positive">{stock.percentage}</span>
                <span className="positive">{stock.afterBO}</span>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default NiftyRealty;
