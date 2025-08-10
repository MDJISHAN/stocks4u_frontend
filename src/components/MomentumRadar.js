import React, { useState } from 'react';
import './MomentumRadar.css';
import MomentumSpike from './MomentumSpike';
import ThreePercentRulePage from './RuleStrategyPage';


const MomentumRadar = ({ onBack }) => {
  const [viewMode, setViewMode] = useState('default');
  const [pageView, setPageView] = useState('main'); // 'main', '5min', '3percent'

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

  const renderDummyPage = (title) => (
    <div className="custom-page">
      <h2>{title}</h2>
      <p>This is the <strong>{title}</strong> page. Replace with full design later.</p>
      <button className="momentum-back-btn" onClick={() => setPageView('main')}>← Back</button>
    </div>
  );

  if (pageView === '5min') return <MomentumSpike onBack={() => setPageView('main')} />;
if (pageView === '3percent') return <ThreePercentRulePage onBack={() => setPageView('main')} />;

  return (
    <div className="momentum-radar-page">
      {/* HEADER SECTION */}
      <header className="momentum-header">
        <div className="momentum-header-container">
          <div className="logo">
          <img src="images/Final Font Stocks4U1.png" className="logo-text" />
          </div>

          <div className="momentum-search">
            <input type="text" placeholder="Search Company" className="momentum-search-input" />
          </div>

          <div className="momentum-user">
            <button className="momentum-back-btn" onClick={onBack}>← Back to Dashboard</button>
          </div>
        </div>
      </header>

      {/* NEW NAV BUTTONS */}


      {/* EXISTING TOGGLE VIEW */}
     

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
           <div style={{display:"flex"}}>
            <div className="spike-section">
            <h4>LONG SHORT TERM</h4>
            <p>how to use?</p>
             <button className="btn green-btn">UP</button>
            <button className="btn red-btn">DOWN</button>
           </div>
            <div className="spike-section">
             <button className="toggle-design-btn" onClick={() => setViewMode(viewMode === 'default' ? 'modern' : 'default')}>
                Switch 2 DAY HIGH & LOW<br />
                 <button className="btn green-btn">UP</button>
                 <button className="btn red-btn">DOWN</button>
             </button>
            </div>
        <div className="spike-section">
        <button onClick={() => setPageView('5min')} className="toggle-design-btn">5 & 15 min <br /><br />
             <button className="btn green-btn">UP</button>
            <button className="btn red-btn">DOWN</button>
          </button>
        </div>
        <div className="spike-section">
        <button onClick={() => setPageView('3percent')} className="toggle-design-btn">3% Rule<br /><br />
         <button className="btn green-btn">UP</button>
            <button className="btn red-btn">DOWN</button>
        </button>
      </div>
           </div>

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
                    {stock.isStarred ? '★' : '☆'} {index + 1} {stock.name}
                  </span>
                  <span>{stock.ltp}</span>
                  <span>{stock.percent}</span>
                  <span>{stock.afterLOM}</span>
                  <span></span>
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

            <div className="spike-section">
          <h4>2 DAY HIGH & LOW</h4>
          <button className="btn green-btn">UP</button>
          <button className="btn red-btn">DOWN</button>
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
                    {stock.isStarred ? '★' : '☆'} {index + 1} {stock.name}
                  </span>
                  <span>{stock.ltp}</span>
                  <span>{stock.percent}</span>
                  <span>{stock.afterLOM}</span>
                  <span></span>
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
