import React, { useState } from 'react';
import './MomentumRadar.css';

const MomentumRadar = ({ onBack }) => {
  const [viewMode, setViewMode] = useState('default');
  const [data] = useState([
    {
      id: 1,
      name: 'Stock name',
      ltp: 315.70,
      percent: '',
      afterLOM: '',
      chart: 'up',
      isStarred: false
    },
    {
      id: 2,
      name: 'Stock name',
      ltp: 1082.70,
      percent: 34.823,
      afterLOM: 34.823,
      chart: 'down',
      isStarred: true
    },
    {
      id: 3,
      name: 'Stock name',
      ltp: 1082.70,
      percent: 34.823,
      afterLOM: 34.823,
      chart: 'down',
      isStarred: false
    },
    {
      id: 4,
      name: 'Stock name',
      ltp: 315.70,
      percent: '',
      afterLOM: 5219,
      chart: 'up',
      isStarred: false
    }
  ]);

  return (
    <div className="momentum-radar-page">
      {/* HEADER SECTION */}
      <header className="momentum-header">
        <div className="momentum-header-container">
          <div className="momentum-logo">
            <span className="momentum-logo-icon">📈</span>
            <span className="momentum-logo-text">stocks4u</span>
          </div>

          <div className="momentum-search">
            <input
              type="text"
              placeholder="Search Company"
              className="momentum-search-input"
            />
          </div>

          <div className="momentum-user">
            <button className="momentum-back-btn" onClick={onBack}>
              ← Back to Dashboard
            </button>
          </div>
        </div>
      </header>

      {/* TOGGLE BUTTON */}
      <div className="toggle-design-btn-container">
        <button
          className="toggle-design-btn"
          onClick={() => setViewMode(viewMode === 'default' ? 'modern' : 'default')}
        >
          Switch 2 DAY HIGH & LOW
        </button>
      </div>
      {/* MAIN BODY */}
      <main className="momentum-radar">
        {viewMode === 'default' ? (
          <>
            <div className="momentum-header-bar">
              <h1>Momentum Radar</h1>
              <div className="filter-buttons">
                <h3>Filter By:</h3>
                <button className="filter-btn">F&O Stocks</button>
                <button className="filter-btn active">All Stocks</button>
              </div>
            </div>

            <section className="lom-box">
              <h3>LOM SHORT TERM</h3>
              <p>How to use?</p>
              <div className="btn-group">
                <button className="btn-up">Up</button>
                <button className="btn-down">Down</button>
              </div>
            </section>

            <section className="table-container">
              <div className="table-head">
                <span>Name</span>
                <span>Date & Time</span>
                <span>Percentage</span>
                <span>Percentage After LOM</span>
                <span>Chart</span>
              </div>
              {data.map((stock, index) => (
                <div key={index} className={`table-row ${stock.isStarred ? 'highlight' : ''}`}>
                  <span className="logo-cell">
                    {stock.isStarred ? <span className="star">★</span> : <span className="star">☆</span>}
                    {index + 1} {stock.name}
                  </span>
                  <span>{stock.ltp}</span>
                  <span>{stock.percent}</span>
                  <span>{stock.afterLOM}</span>
                  <span>
                  </span>
                </div>
              ))}
            </section>
          </>
        ) : (
          <>
            <div className="momentum-header-bar">
              <h1>Momentum Radar</h1>
              <div className="filter-buttons">
                <h3>Filter By:</h3>
                <button className="filter-btn">F&O Stocks</button>
                <button className="filter-btn active">All Stocks</button>
              </div>
            </div>

            <div className="lom-box alt">
              <h3>2 DAY HIGH & LOW</h3>
              <p>How to use ?</p>
              <div className="btn-group">
                <button className="btn-up">Up</button>
                <button className="btn-down">Down</button>
              </div>
            </div>

            <section className="table-container alt">
              <div className="table-head">
                <span>Name</span>
                <span>Date & Time</span>
                <span>Percentage</span>
                <span>Percentage After B.O</span>
                <span>Chart</span>
              </div>
              {data.map((stock, index) => (
                <div key={index} className={`table-row ${stock.isStarred ? 'highlight' : ''}`}>
                  <span className="logo-cell">
                    {stock.isStarred ? <span className="star">★</span> : <span className="star">☆</span>}
                    {index + 1} {stock.name}
                  </span>
                  <span>{stock.ltp}</span>
                  <span>{stock.percent}</span>
                  <span>{stock.afterLOM}</span>
                  
                   
                </div>
              ))}
            </section>
          </>
        )}
      </main>
    </div>
  );
};

export default MomentumRadar;
