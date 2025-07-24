import React, { useState } from 'react';
import SectorRotation from './SectorRotation';
import IntradayScan from './IntradayScan';
import NiftyRealty from './NiftyRealty';
import MomentumRadar from './MomentumRadar';
import Heatmap from './Heatmap';
import OilMonitor from './OilMonitor';
import './Dashboard.css';

const Dashboard = ({ onLogout, onWatchlistClick, onHighLowClick, onMomentumClick, onRuleStrategyClick, onIndexMoverClick, onNetPositionClick, onDistributionClick }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState('dashboard');

  const handleSearch = (e) => {
    e.preventDefault();
    console.log('Search query:', searchQuery);
  };

  const handleGetStarted = (toolName) => {
    console.log('Getting started with:', toolName);
    // Navigate to the appropriate page based on tool name
    switch(toolName) {
      case 'Sector Rotation':
        setCurrentPage('sector-rotation');
        break;
      case 'Intraday Scan':
        setCurrentPage('intraday-scan');
        break;
      case 'Swing Zone':
        setCurrentPage('nifty-realty');
        break;
      case 'Oil Monitor':
        setCurrentPage('oil-monitor');
        break;
      case 'Momentum Radar':
        setCurrentPage('momentum-radar');
        break;
      case 'Heatmap':
        setCurrentPage('heatmap');
        break;
      case 'Index Movers':
        if (onIndexMoverClick) onIndexMoverClick();
        break;
      case 'Block Deals':
        setCurrentPage('block-deals');
        break;
      case 'Traders Diary':
        setCurrentPage('traders-diary');
        break;
      case 'Watchlist':
        if (onWatchlistClick) onWatchlistClick();
        break;
      default:
        setCurrentPage('dashboard');
    }
  };

  const handleBackToDashboard = () => {
    setCurrentPage('dashboard');
  };

  // Render different pages based on current page
  if (currentPage === 'sector-rotation') {
    return <SectorRotation onBack={handleBackToDashboard} />;
  }
  
  if (currentPage === 'intraday-scan') {
    return <IntradayScan onBack={handleBackToDashboard} scanType="intraday" />;
  }
  
  if (currentPage === 'nifty-realty') {
    return <NiftyRealty onBack={handleBackToDashboard} />;
  }
  
  if (currentPage === 'oil-monitor') {
    return <OilMonitor onBack={handleBackToDashboard} />;
  }
  
  if (currentPage === 'momentum-radar') {
    return <MomentumRadar onBack={handleBackToDashboard} />;
  }
  
  if (currentPage === 'heatmap') {
    return <Heatmap onBack={handleBackToDashboard} />;
  }

  // Default dashboard view
  return renderDashboard();

  function renderDashboard() {

  const tradingTools = [
    {
      id: 1,
      icon: '📊',
      title: 'Sector Rotation',
      subtitle: 'Identify sectors, regions & themes performing well',
      color: '#8B5CF6'
    },
    {
      id: 2,
      icon: '📈',
      title: 'Intraday Scan',
      subtitle: 'Identify trades, regions & themes performing well',
      color: '#10B981'
    },
    {
      id: 3,
      icon: '🎯',
      title: 'Swing Zone',
      subtitle: 'Identify trades, regions & themes performing well',
      color: '#F59E0B'
    },
    {
      id: 4,
      icon: '🛢️',
      title: 'Oil Monitor',
      subtitle: 'Identify trades, regions & themes performing well',
      color: '#EF4444'
    },
    {
      id: 5,
      icon: '📡',
      title: 'Momentum Radar',
      subtitle: 'Identify trades, regions & themes performing well',
      color: '#8B5CF6'
    },
    {
      id: 6,
      icon: '🔥',
      title: 'Heatmap',
      subtitle: 'Identify trades, regions & themes performing well',
      color: '#EF4444'
    },
    {
      id: 7,
      icon: '📊',
      title: 'Index Movers',
      subtitle: 'Track index movements and sector performance',
      color: '#10B981'
    },
    {
      id: 8,
      icon: '📦',
      title: 'Block Deals',
      subtitle: 'Identify trades, regions & themes performing well',
      color: '#8B5CF6'
    },
    {
      id: 9,
      icon: '📖',
      title: 'Traders Diary',
      subtitle: 'Identify trades, regions & themes performing well',
      color: '#F59E0B'
    },
    {
      id: 10,
      icon: '⭐',
      title: 'Watchlist',
      subtitle: 'Track your favorite stocks',
      color: '#3B82F6'
    },
  
  ];

  const footerSections = [
    {
      title: 'Social',
      links: ['Twitter', 'Facebook', 'Instagram', 'LinkedIn']
    },
    {
      title: 'Company',
      links: ['About Us', 'Careers', 'Press', 'Blog']
    },
    {
      title: 'Resources',
      links: ['Help Center', 'Contact', 'Privacy', 'Terms']
    }
  ];

  return (
    <div className="dashboard">
      {/* Header */}
      <header className="dashboard-header">
        <div className="dashboard-header-container">
          <div className="dashboard-logo">
            <span className="logo-icon">📈</span>
            <span className="logo-text">stocks4u</span>
          </div>
          
          <form className="dashboard-search" onSubmit={handleSearch}>
            <input
              type="text"
              placeholder="Search markets"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="search-input"
            />
            <button type="submit" className="search-button">
              🔍
            </button>
          </form>
          
          <div className="dashboard-user">
            <button className="user-button" onClick={onLogout}>
              Sign Out
            </button>
          </div>
        </div>
        
        {/* Navigation */}
        <nav className="dashboard-nav">
          <div className="dashboard-nav-container">
            <div className="nav-links">
              <a href="#nifty50" className="nav-link active">NIFTY 50</a>
              <a href="#banknifty" className="nav-link">BANK NIFTY</a>
              <a href="#sensex" className="nav-link">SENSEX</a>
              <a href="#finnifty" className="nav-link">FINNIFTY</a>
              <a href="#midcap" className="nav-link">MIDCAP</a>
              <a href="#linux" className="nav-link">LINUX</a>
            </div>
            
            <div className="nav-mobile-toggle">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        </nav>
      </header>

      {/* Main Content */}
      <main className="dashboard-main">
        <div className="dashboard-container">
          {/* Welcome Section */}
          <section className="welcome-section">
            <h1 className="welcome-title">Welcome Traders,</h1>
            
            <div className="tutorial-section">
              <div className="tutorial-content">
                <h2 className="tutorial-title">Tutorial Video</h2>
                <p className="tutorial-subtitle">Step by step</p>
                <button className="play-button">
                  <span className="play-icon">▶️</span>
                  <span className="play-text">Click here to play tutorial video</span>
                </button>
              </div>
            </div>
          </section>

          {/* Trading Tools Grid */}
          <section className="tools-section">
            <div className="tools-grid">
              {tradingTools.map((tool) => (
                <div key={tool.id} className="tool-card">
                  <div className="tool-icon" style={{ color: tool.color }}>
                    {tool.icon}
                  </div>
                  <div className="tool-content">
                    <h3 className="tool-title">{tool.title}</h3>
                    <p className="tool-subtitle">{tool.subtitle}</p>
                    <button 
                      className="tool-button"
                      onClick={() => handleGetStarted(tool.title)}
                    >
                      Get Started
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Mobile Apps Section */}
          <section className="apps-section">
            <div className="apps-grid">
              <div className="app-card ios-app">
                <div className="app-icon">
                  🍎
                </div>
                <div className="app-content">
                  <h3 className="app-title">Add Our iOS App</h3>
                  <p className="app-subtitle">
                    Access your trading account and live trading signals on the go with our iOS app
                  </p>
                  <button className="app-button">
                    📱 Download
                  </button>
                </div>
              </div>
              
              <div className="app-card android-app">
                <div className="app-icon">
                  🤖
                </div>
                <div className="app-content">
                  <h3 className="app-title">Add Our Android App</h3>
                  <p className="app-subtitle">
                    Access your trading account and live trading signals on the go with our Android app
                  </p>
                  <button className="app-button">
                    📱 Download
                  </button>
                </div>
              </div>
            </div>
          </section>

          {/* App Screenshots */}
          <section className="screenshots-section">
            <div className="screenshots-grid">
              <div className="screenshot-card">
                <div className="screenshot-image">
                  <div className="phone-mockup">
                    <div className="phone-screen">
                      <div className="screen-header">
                        <div className="screen-title">Market Watch</div>
                        <div className="screen-menu">⋯</div>
                      </div>
                      <div className="screen-content">
                        <div className="market-item">
                          <div className="market-name">NIFTY 50</div>
                          <div className="market-price">19,745.00</div>
                          <div className="market-change positive">+152.30</div>
                        </div>
                        <div className="market-item">
                          <div className="market-name">SENSEX</div>
                          <div className="market-price">66,230.00</div>
                          <div className="market-change positive">+421.80</div>
                        </div>
                        <div className="market-item">
                          <div className="market-name">BANK NIFTY</div>
                          <div className="market-price">45,120.00</div>
                          <div className="market-change negative">-89.50</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="screenshot-footer">
                  <div className="footer-links">
                    <div className="footer-section">
                      <div className="footer-title">Social</div>
                      <div className="footer-link">Twitter</div>
                      <div className="footer-link">Facebook</div>
                      <div className="footer-link">Instagram</div>
                      <div className="footer-link">LinkedIn</div>
                    </div>
                  </div>
                  <button className="footer-button">Learn More</button>
                </div>
              </div>
              
              <div className="screenshot-card">
                <div className="screenshot-image">
                  <div className="phone-mockup">
                    <div className="phone-screen">
                      <div className="screen-header">
                        <div className="screen-title">Portfolio</div>
                        <div className="screen-menu">⋯</div>
                      </div>
                      <div className="screen-content">
                        <div className="portfolio-chart">
                          <div className="chart-line"></div>
                          <div className="chart-points">
                            <div className="point"></div>
                            <div className="point"></div>
                            <div className="point"></div>
                          </div>
                        </div>
                        <div className="portfolio-stats">
                          <div className="stat">
                            <div className="stat-label">Total</div>
                            <div className="stat-value">₹1,24,530</div>
                          </div>
                          <div className="stat">
                            <div className="stat-label">P&L</div>
                            <div className="stat-value positive">+₹2,450</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="screenshot-footer">
                  <div className="footer-links">
                    <div className="footer-section">
                      <div className="footer-title">Company</div>
                      <div className="footer-link">About Us</div>
                      <div className="footer-link">Careers</div>
                      <div className="footer-link">Press</div>
                      <div className="footer-link">Blog</div>
                    </div>
                  </div>
                  <button className="footer-button">Learn More</button>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>

      {/* Footer */}
      <footer className="dashboard-footer">
        <div className="dashboard-container">
          <div className="footer-content">
            <div className="footer-logo">
              <span className="footer-logo-icon">📈</span>
              <span className="footer-logo-text">stocks4u</span>
            </div>
            
            <div className="footer-text">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.</p>
            </div>
            
            <div className="footer-social">
              <a href="#" className="social-icon">📧</a>
              <a href="#" className="social-icon">📞</a>
              <a href="#" className="social-icon">📱</a>
              <a href="#" className="social-icon">🌐</a>
            </div>
          </div>
          
          <div className="footer-table">
            <div className="table-header">
              <div className="table-title">Header Text</div>
              <div className="table-title">Header Text</div>
              <div className="table-title">Header Text</div>
            </div>
            <div className="table-rows">
              <div className="table-row">
                <div className="table-cell">Content</div>
                <div className="table-cell">Content</div>
                <div className="table-cell">Content</div>
              </div>
              <div className="table-row">
                <div className="table-cell">Content</div>
                <div className="table-cell">Content</div>
                <div className="table-cell">Content</div>
              </div>
              <div className="table-row">
                <div className="table-cell">Content</div>
                <div className="table-cell">Content</div>
                <div className="table-cell">Content</div>
              </div>
            </div>
          </div>
          
          <div className="footer-bottom">
            <div className="footer-copyright">
              <p>©Design & Technology Copyright 2024</p>
              <p>All rights reserved by <span className="highlight">stocks4u</span></p>
            </div>
            <div className="footer-badges">
              <span className="badge">Subscribe 🇮🇳 🔒</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
  }
};

export default Dashboard;