import React from 'react';
import './ThreePercentRule.css';

const ThreePercentRule = () => {
  const dummyData = [
    { rank: 1, name: 'Stock name', ltp: 315.70, percent: '+3.0', points: '40 Pts', trend: 'up' },
    { rank: 2, name: 'Stock name', ltp: 1092.70, percent: '3.4', points: '', trend: 'down' },
    { rank: 3, name: 'Stock name', ltp: 1092.70, percent: '3.4', points: '', trend: 'down' },
    { rank: 4, name: 'Stock name', ltp: 315.70, percent: '2.1', points: '', trend: 'up' },
  ];

  return (
    <div className="three-percent-wrapper">
      <h2>Momentum Radar</h2>
      <div className="filter-row">
        <button className="strategy-btn">3% RULE STRATEGY</button>
        <div className="filter-toggle">
          <button>F&O Stocks</button>
          <button>All Stocks</button>
        </div>
      </div>
      <div className="table-wrapper">
        <p className="ranking-label">(Ranking by percentage)</p>
        <table>
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>LTP</th>
              <th>Percentage</th>
              <th>Points</th>
              <th>Chart</th>
            </tr>
          </thead>
          <tbody>
            {dummyData.map((row, index) => (
              <tr key={index}>
                <td>★</td>
                <td>{row.name}</td>
                <td>{row.ltp}</td>
                <td className={row.percent.startsWith('+') ? 'green' : 'red'}>{row.percent}</td>
                <td>{row.points}</td>
                <td>
                  <div className={`trend-chart ${row.trend}`}></div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ThreePercentRule;
