import React, { useState } from 'react';
import './IndexMoverPage.css';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip
} from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip);

const IndexMoverPage = ({ onBack, onNiftyItClick }) => {
  const [activeTab, setActiveTab] = useState('Index Movers');
  const [filterBy, setFilterBy] = useState('Change');
  const [startDate, setStartDate] = useState(new Date(2025, 1, 17)); // Feb = month index 1
  const [endDate, setEndDate] = useState(new Date(2025, 1, 17));

    const chartData = {
    labels: ['NIFTY', 'BANKNIFTY', 'FINNIFTY'],
    datasets: [
      {
        label: 'Change',
        data: [1.2, 0.9, -0.6], // Hardcoded sample data for now
        backgroundColor: ['#00c46a', '#00c46a', '#ff2f4c'],
        borderRadius: 8,
        barThickness: 30,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: { display: false },
      tooltip: {
        callbacks: {
          label: (ctx) => `${ctx.raw}%`
        }
      }
    },
    scales: {
      x: {
        grid: { display: false },
        ticks: { color: '#ccc', font: { size: 14 } }
      },
      y: {
        grid: { display: false },
        ticks: {
          callback: (value) => `${value}%`,
          color: '#ccc',
          font: { size: 14 }
        }
      }
    }
  };

  return (
    <div className="index-mover-page">
      {/* Header */}
      <header className="index-mover-header">
        <div className="index-mover-header-container">
          <div className="index-mover-logo">
            <span className="index-mover-logo-icon">📊</span>
            <span className="index-mover-logo-text">stocks4u</span>
          </div>
          
          <div className="index-mover-search">
            <input 
              type="text" 
              placeholder="Search indices"
              className="index-mover-search-input"
            />
          </div>
          
          <div className="index-mover-user">
            <button className="index-mover-back-btn" onClick={onBack}>
              ← Back to Dashboard
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      {/* Your existing Header/Nav bar remains untouched above this */}
      <main className="index-mover-main">
  <div className="index-mover-container new-index-page">
    {/* Top Category Buttons */}
    <div className="category-buttons">
      {["Nifty 50", "Nifty Next 50", "Bank Nifty", "Fin Nifty", "Mid Cap Nifty", "Sensex", "Nifty Next 500"].map((label) => (
        <button key={label} className="category-btn">{label}</button>
      ))}
    </div>

    {/* Date + Net Position */}
  
          <div className="date-bar">
      {/* Start Date */}
      <div className="date-selector">
        Start Date <br />
        <DatePicker
          selected={startDate}
          onChange={(date) => setStartDate(date)}
          dateFormat="dd MMM, yyyy"
          customInput={<span className="purple-badge clickable">{startDate.toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' })}</span>}
          popperPlacement="bottom-start"
        />
      </div>

      {/* End Date */}
      <div className="date-selector">
        End Date <br />
        <DatePicker
          selected={endDate}
          onChange={(date) => setEndDate(date)}
          dateFormat="dd MMM, yyyy"
          customInput={<span className="purple-badge clickable">{endDate.toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' })}</span>}
          popperPlacement="bottom-start"
        />
      </div>

      {/* Net Position */}
      <div className="net-position">
        Net Position <br />
        <span className="green-badge">+532 Pts</span>
      </div>

      {/* Last Updated */}
      <div className="last-updated">
        Last Updated at <strong>10:05 AM</strong>
      </div>
 
      
    </div>

    {/* Line Chart Placeholder */}
    <div className="index-line-chart">
      <img src="/images/index mover graph.png" style={{ width: "100%", height:"100%", marginLeft:"1rem"}}/>

    </div>

    {/* Summary Pointers */}
    <div className="summary-pointers">
      <div className="green-summary">Net Positive (35): <span className="green-box">115 pts</span></div>
      <div className="index-mover-label">Today Index Mover</div>
      <div className="red-summary">Net Negative (25): <span className="red-box">100 pts</span></div>
    </div>

    {/* Horizontal Split Bar */}
    <div className="horizontal-bar-wrapper">
      <div className="stock-left"><strong>VISHAL MEGA</strong><br />50% (2 pt)</div>
      <div className="bar-chart-section">
        <div className="green-bar" style={{ width: "46%" }}></div>
        <div className="red-bar" style={{ width: "39%" }}></div>
      </div>
      <div className="stock-right">30%<br /><strong>HDFC Bank</strong></div>
    </div>
       <div className="horizontal-bar-wrapper">
      <div className="stock-left"><strong>VISHAL MEGA</strong><br />50% (2 pt)</div>
      <div className="bar-chart-section">
        <div className="green-bar" style={{ width: "39%" , marginLeft:"7rem"}}></div>
        <div className="red-bar" style={{ width: "30%" }}></div>
      </div>
      <div className="stock-right">30%<br /><strong>TCS</strong></div>
    </div>
       <div className="horizontal-bar-wrapper">
      <div className="stock-left"><strong>VISHAL MEGA</strong><br />50% (2 pt)</div>
      <div className="bar-chart-section">
        <div className="green-bar" style={{ width: "39%", marginLeft:"17rem" }}></div>
        <div className="red-bar" style={{ width: "70%" }}></div>
      </div>
      <div className="stock-right">30%<br /><strong>ICICI BANK</strong></div>
    </div>
       <div className="horizontal-bar-wrapper">
      <div className="stock-left"><strong>VISHAL MEGA</strong><br />50% (2 pt)</div>
      <div className="bar-chart-section">
        <div className="green-bar" style={{ width: "36%",  marginLeft:"10rem"}}></div>
        <div className="red-bar" style={{ width: "30%" }}></div>
      </div>
      <div className="stock-right">30%<br /><strong>FEDERAL</strong></div>
    </div>
    <div className="horizontal-bar-wrapper">
      <div className="stock-left"><strong>VISHAL MEGA</strong><br />50% (2 pt)</div>
      <div className="bar-chart-section">
        <div className="green-bar" style={{ width: "46%" }}></div>
        <div className="red-bar" style={{ width: "50%" }}></div>
      </div>
      
      <div className="stock-right">30%<br /><strong>ICICI BANK</strong></div>
    </div>
    <div className="horizontal-bar-wrapper">
      <div className="stock-left"><strong>VISHAL MEGA</strong><br />50% (2 pt)</div>
      <div className="bar-chart-section">
        <div className="green-bar" style={{ width: "29%" , marginLeft:"17rem"}}></div>
        <div className="red-bar" style={{ width: "20%" }}></div>
      </div>
      
      <div className="stock-right">30%<br /><strong>ICICI BANK</strong></div>
    </div>

  </div>
</main>
</div>
  )}
  export default IndexMoverPage;