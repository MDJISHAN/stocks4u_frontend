import React, { useState } from 'react';
import Modal from './Modal';
import SignInModal from './SignInModal';
import './MainPage.css';

const MainPage = ({ onSuccessfulLogin }) => {
  const [isSignInModalOpen, setIsSignInModalOpen] = useState(false);
  const [email, setEmail] = useState('');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const openSignInModal = () => {
    setIsSignInModalOpen(true);
  };

  const closeSignInModal = () => {
    setIsSignInModalOpen(false);
  };

  const handleEmailSubmit = (e) => {
    e.preventDefault();
    console.log('Email submitted:', email);
    setEmail('');
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="main-page">
      {/* Header */}
      <header className="header">
        <div className="header-container">
          <div className="logo">
            <span className="logo-text">T</span>
          </div>
          
          <nav className={`nav ${isMobileMenuOpen ? 'nav-open' : ''}`}>
            <a href="#home">Home</a>
            <a href="#features">Features</a>
            <a href="#pricing">Pricing</a>
            <a href="#tools">Tools</a>
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
          </nav>
          
          <div className="header-buttons">
            <button className="login-btn" onClick={openSignInModal}>Login</button>
            <button className="get-started-btn" onClick={openSignInModal}>Get Started</button>
            <button className={`mobile-menu-toggle ${isMobileMenuOpen ? 'active' : ''}`} onClick={toggleMobileMenu}>
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero" id="home">
        <div className="hero-content">
          <h1 className="hero-title">Watch. Analyse. Trade.</h1>
          <p className="hero-subtitle">Real-time market insights at your fingertips</p>
          
          <div className="hero-phones">
            <div className="phone phone-1">
              <div className="phone-screen">
                <div className="phone-content">
                  <div className="phone-header">
                    <div className="phone-time">9:41</div>
                    <div className="phone-status">
                      <div className="signal-bars">
                        <div className="bar"></div>
                        <div className="bar"></div>
                        <div className="bar"></div>
                        <div className="bar"></div>
                      </div>
                      <div className="wifi-icon">📶</div>
                      <div className="battery">🔋</div>
                    </div>
                  </div>
                  <div className="phone-app">
                    <div className="app-header">
                      <h3>Portfolio</h3>
                      <span className="app-menu">⋯</span>
                    </div>
                    <div className="portfolio-chart">
                      <div className="chart-line-animated"></div>
                      <div className="chart-points">
                        <div className="point active"></div>
                        <div className="point"></div>
                        <div className="point"></div>
                        <div className="point"></div>
                      </div>
                    </div>
                    <div className="portfolio-stats">
                      <div className="stat-item">
                        <span className="stat-label">Total</span>
                        <span className="stat-value">$48,520</span>
                      </div>
                      <div className="stat-item">
                        <span className="stat-label">Profit</span>
                        <span className="stat-value green">+$2,420</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="phone phone-2 main-phone">
              <div className="phone-screen">
                <div className="phone-content">
                  <div className="phone-header">
                    <div className="phone-time">9:41</div>
                    <div className="phone-status">
                      <div className="signal-bars">
                        <div className="bar"></div>
                        <div className="bar"></div>
                        <div className="bar"></div>
                        <div className="bar"></div>
                      </div>
                      <div className="wifi-icon">📶</div>
                      <div className="battery">🔋</div>
                    </div>
                  </div>
                  <div className="phone-app">
                    <div className="app-header">
                      <h3>Market Watch</h3>
                      <span className="app-menu">⋯</span>
                    </div>
                    <div className="market-list">
                      <div className="market-item">
                        <div className="market-icon nifty">N</div>
                        <div className="market-info">
                          <div className="market-name">NIFTY 50</div>
                          <div className="market-price">19,745.00</div>
                        </div>
                        <div className="market-change positive">+152.30</div>
                      </div>
                      <div className="market-item">
                        <div className="market-icon sensex">S</div>
                        <div className="market-info">
                          <div className="market-name">SENSEX</div>
                          <div className="market-price">66,230.00</div>
                        </div>
                        <div className="market-change positive">+421.80</div>
                      </div>
                      <div className="market-item">
                        <div className="market-icon banknifty">B</div>
                        <div className="market-info">
                          <div className="market-name">BANK NIFTY</div>
                          <div className="market-price">45,120.00</div>
                        </div>
                        <div className="market-change negative">-89.50</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="phone phone-3">
              <div className="phone-screen">
                <div className="phone-content">
                  <div className="phone-header">
                    <div className="phone-time">9:41</div>
                    <div className="phone-status">
                      <div className="signal-bars">
                        <div className="bar"></div>
                        <div className="bar"></div>
                        <div className="bar"></div>
                        <div className="bar"></div>
                      </div>
                      <div className="wifi-icon">📶</div>
                      <div className="battery">🔋</div>
                    </div>
                  </div>
                  <div className="phone-app">
                    <div className="app-header">
                      <h3>News & Analysis</h3>
                      <span className="app-menu">⋯</span>
                    </div>
                    <div className="news-feed">
                      <div className="news-item">
                        <div className="news-title">Market Outlook</div>
                        <div className="news-content">Bulls maintain control as indices hit new highs...</div>
                        <div className="news-time">2 min ago</div>
                      </div>
                      <div className="news-item">
                        <div className="news-title">Sector Focus</div>
                        <div className="news-content">IT stocks surge on strong earnings...</div>
                        <div className="news-time">5 min ago</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sector Rotation Section */}
      <section className="sector-rotation" id="features">
        <div className="container">
          <h2>Sector Rotation</h2>
          <p>Stay ahead of market trends with our advanced sector rotation analysis</p>
          
          <div className="sector-grid">
            <div className="sector-card">
              <div className="sector-icon technology">
                <span className="sector-symbol">💻</span>
              </div>
              <div className="sector-info">
                <h3>Technology</h3>
                <div className="sector-stats">
                  <span className="sector-price">₹2,847.50</span>
                  <span className="sector-change positive">+2.45%</span>
                </div>
                <div className="sector-trend">
                  <div className="trend-line up"></div>
                </div>
              </div>
            </div>
            
            <div className="sector-card">
              <div className="sector-icon healthcare">
                <span className="sector-symbol">🏥</span>
              </div>
              <div className="sector-info">
                <h3>Healthcare</h3>
                <div className="sector-stats">
                  <span className="sector-price">₹1,925.30</span>
                  <span className="sector-change negative">-1.20%</span>
                </div>
                <div className="sector-trend">
                  <div className="trend-line down"></div>
                </div>
              </div>
            </div>
            
            <div className="sector-card">
              <div className="sector-icon finance">
                <span className="sector-symbol">🏦</span>
              </div>
              <div className="sector-info">
                <h3>Finance</h3>
                <div className="sector-stats">
                  <span className="sector-price">₹3,128.75</span>
                  <span className="sector-change positive">+0.80%</span>
                </div>
                <div className="sector-trend">
                  <div className="trend-line up"></div>
                </div>
              </div>
            </div>
            
            <div className="sector-card">
              <div className="sector-icon energy">
                <span className="sector-symbol">⚡</span>
              </div>
              <div className="sector-info">
                <h3>Energy</h3>
                <div className="sector-stats">
                  <span className="sector-price">₹2,456.90</span>
                  <span className="sector-change positive">+3.15%</span>
                </div>
                <div className="sector-trend">
                  <div className="trend-line up"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Introducing Section */}
      <section className="introducing">
        <div className="container">
          <div className="introducing-content">
            <div className="introducing-text">
              <h2>Introducing</h2>
              <h3>Advanced Trading Platform</h3>
              <p>Experience the future of trading with our cutting-edge platform designed for both beginners and professionals. Get real-time market data, advanced analytics, and seamless trading experience all in one place.</p>
              
              <div className="features-grid">
                <div className="feature-item">
                  <div className="feature-icon">📊</div>
                  <div className="feature-content">
                    <h4>Real-time Analytics</h4>
                    <p>Advanced charting tools and market analysis</p>
                  </div>
                </div>
                <div className="feature-item">
                  <div className="feature-icon">🔒</div>
                  <div className="feature-content">
                    <h4>Secure Trading</h4>
                    <p>Bank-level security with encrypted transactions</p>
                  </div>
                </div>
                <div className="feature-item">
                  <div className="feature-icon">📱</div>
                  <div className="feature-content">
                    <h4>Mobile First</h4>
                    <p>Trade anywhere, anytime with our mobile app</p>
                  </div>
                </div>
                <div className="feature-item">
                  <div className="feature-icon">⚡</div>
                  <div className="feature-content">
                    <h4>Fast Execution</h4>
                    <p>Lightning-fast order execution and processing</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="introducing-visual">
              <div className="platform-preview">
                <div className="preview-header">
                  <div className="preview-dots">
                    <div className="dot red"></div>
                    <div className="dot yellow"></div>
                    <div className="dot green"></div>
                  </div>
                  <div className="preview-title">StockFlex Dashboard</div>
                </div>
                <div className="preview-content">
                  <div className="dashboard-stats">
                    <div className="stat-card">
                      <div className="stat-title">Portfolio Value</div>
                      <div className="stat-amount">₹1,24,530</div>
                      <div className="stat-change">+₹2,450 (2.01%)</div>
                    </div>
                    <div className="stat-card">
                      <div className="stat-title">Today's P&L</div>
                      <div className="stat-amount">₹3,240</div>
                      <div className="stat-change">+1.85%</div>
                    </div>
                  </div>
                  <div className="dashboard-chart">
                    <div className="chart-container">
                      <div className="chart-line main-chart"></div>
                      <div className="chart-area"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Real Time Sector Data */}
      <section className="real-time-sector">
        <div className="container">
          <h2>Real Time Sector Data</h2>
          <p>Live sector performance and market movements</p>
          
          <div className="sector-data-grid">
            <div className="sector-data-card">
              <div className="sector-header">
                <h3>NIFTY IT</h3>
                <span className="sector-index">30,248.75</span>
              </div>
              <div className="sector-change positive">+2.45% (+724.30)</div>
              <div className="sector-chart">
                <div className="mini-chart">
                  <div className="chart-line-mini up"></div>
                </div>
              </div>
            </div>
            
            <div className="sector-data-card">
              <div className="sector-header">
                <h3>NIFTY BANK</h3>
                <span className="sector-index">45,120.50</span>
              </div>
              <div className="sector-change negative">-0.89% (-405.25)</div>
              <div className="sector-chart">
                <div className="mini-chart">
                  <div className="chart-line-mini down"></div>
                </div>
              </div>
            </div>
            
            <div className="sector-data-card">
              <div className="sector-header">
                <h3>NIFTY AUTO</h3>
                <span className="sector-index">15,847.25</span>
              </div>
              <div className="sector-change positive">+1.23% (+193.50)</div>
              <div className="sector-chart">
                <div className="mini-chart">
                  <div className="chart-line-mini up"></div>
                </div>
              </div>
            </div>
            
            <div className="sector-data-card">
              <div className="sector-header">
                <h3>NIFTY PHARMA</h3>
                <span className="sector-index">12,965.80</span>
              </div>
              <div className="sector-change positive">+0.75% (+96.40)</div>
              <div className="sector-chart">
                <div className="mini-chart">
                  <div className="chart-line-mini up"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Index Mover Section */}
      <section className="index-mover">
        <div className="container">
          <h2>Index Mover</h2>
          <p>Top gainers and losers in major indices</p>
          
          <div className="mover-tabs">
            <div className="tab active">Top Gainers</div>
            <div className="tab">Top Losers</div>
            <div className="tab">Most Active</div>
          </div>
          
          <div className="mover-grid">
            <div className="mover-card">
              <div className="company-info">
                <div className="company-logo">TCS</div>
                <div className="company-details">
                  <div className="company-name">Tata Consultancy Services</div>
                  <div className="company-sector">Information Technology</div>
                </div>
              </div>
              <div className="price-info">
                <div className="current-price">₹3,847.50</div>
                <div className="price-change positive">+5.25%</div>
              </div>
            </div>
            
            <div className="mover-card">
              <div className="company-info">
                <div className="company-logo">INFY</div>
                <div className="company-details">
                  <div className="company-name">Infosys Limited</div>
                  <div className="company-sector">Information Technology</div>
                </div>
              </div>
              <div className="price-info">
                <div className="current-price">₹1,542.30</div>
                <div className="price-change positive">+4.80%</div>
              </div>
            </div>
            
            <div className="mover-card">
              <div className="company-info">
                <div className="company-logo">RELIANCE</div>
                <div className="company-details">
                  <div className="company-name">Reliance Industries</div>
                  <div className="company-sector">Oil & Gas</div>
                </div>
              </div>
              <div className="price-info">
                <div className="current-price">₹2,456.75</div>
                <div className="price-change positive">+3.45%</div>
              </div>
            </div>
            
            <div className="mover-card">
              <div className="company-info">
                <div className="company-logo">HDFC</div>
                <div className="company-details">
                  <div className="company-name">HDFC Bank</div>
                  <div className="company-sector">Banking</div>
                </div>
              </div>
              <div className="price-info">
                <div className="current-price">₹1,789.20</div>
                <div className="price-change positive">+2.95%</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SIP & SWAP Calculator */}
      <section className="sip-swap-calculator" id="tools">
        <div className="container">
          <h2>SIP & SWAP Calculator</h2>
          <p>Calculate your systematic investment plan returns and swap strategies</p>
          
          <div className="calculator-grid">
            <div className="calculator-card">
              <div className="calculator-header">
                <h3>SIP Calculator</h3>
                <div className="calculator-icon">📈</div>
              </div>
              <div className="calculator-form">
                <div className="form-group">
                  <label>Monthly Investment</label>
                  <input type="number" placeholder="₹5,000" />
                </div>
                <div className="form-group">
                  <label>Time Period (Years)</label>
                  <input type="number" placeholder="10" />
                </div>
                <div className="form-group">
                  <label>Expected Return (%)</label>
                  <input type="number" placeholder="12" />
                </div>
                <button className="calculate-btn">Calculate Returns</button>
              </div>
              <div className="calculator-result">
                <div className="result-item">
                  <span className="result-label">Invested Amount</span>
                  <span className="result-value">₹6,00,000</span>
                </div>
                <div className="result-item">
                  <span className="result-label">Expected Returns</span>
                  <span className="result-value">₹5,77,435</span>
                </div>
                <div className="result-item total">
                  <span className="result-label">Total Value</span>
                  <span className="result-value">₹11,77,435</span>
                </div>
              </div>
            </div>
            
            <div className="calculator-card">
              <div className="calculator-header">
                <h3>SWAP Calculator</h3>
                <div className="calculator-icon">🔄</div>
              </div>
              <div className="calculator-form">
                <div className="form-group">
                  <label>From Stock</label>
                  <select>
                    <option>Select Stock</option>
                    <option>TCS</option>
                    <option>INFY</option>
                    <option>RELIANCE</option>
                  </select>
                </div>
                <div className="form-group">
                  <label>To Stock</label>
                  <select>
                    <option>Select Stock</option>
                    <option>HDFC</option>
                    <option>ICICI</option>
                    <option>AXIS</option>
                  </select>
                </div>
                <div className="form-group">
                  <label>Quantity</label>
                  <input type="number" placeholder="100" />
                </div>
                <button className="calculate-btn">Calculate Swap</button>
              </div>
              <div className="calculator-result">
                <div className="result-item">
                  <span className="result-label">Swap Cost</span>
                  <span className="result-value">₹450</span>
                </div>
                <div className="result-item">
                  <span className="result-label">Tax Implication</span>
                  <span className="result-value">₹2,340</span>
                </div>
                <div className="result-item total">
                  <span className="result-label">Net Benefit</span>
                  <span className="result-value">₹8,210</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trader Diary Section */}
      <section className="trader-diary">
        <div className="container">
          <h2>Trader Diary</h2>
          <p>Track your trading performance and maintain detailed records</p>
          
          <div className="diary-content">
            <div className="diary-stats">
              <div className="stat-card">
                <div className="stat-icon">📊</div>
                <div className="stat-info">
                  <h3>Total Trades</h3>
                  <div className="stat-number">1,247</div>
                </div>
              </div>
              
              <div className="stat-card">
                <div className="stat-icon">💹</div>
                <div className="stat-info">
                  <h3>Win Rate</h3>
                  <div className="stat-number">68.5%</div>
                </div>
              </div>
              
              <div className="stat-card">
                <div className="stat-icon">💰</div>
                <div className="stat-info">
                  <h3>Total P&L</h3>
                  <div className="stat-number">₹2,45,670</div>
                </div>
              </div>
              
              <div className="stat-card">
                <div className="stat-icon">📈</div>
                <div className="stat-info">
                  <h3>Avg. Return</h3>
                  <div className="stat-number">15.2%</div>
                </div>
              </div>
            </div>
            
            <div className="diary-table">
              <div className="table-header">
                <h3>Recent Trades</h3>
                <button className="add-trade-btn" onClick={openSignInModal}>Add Trade</button>
              </div>
              <div className="trade-table">
                
                <div className="table-row">
                  <div className="col">Dec 15, 2024</div>
                  <div className="col">TCS</div>
                  <div className="col buy">BUY</div>
                  <div className="col">50</div>
                  <div className="col">₹3,847.50</div>
                  <div className="col positive">+₹2,450</div>
                </div>
                <div className="table-row">
                  <div className="col">Dec 14, 2024</div>
                  <div className="col">INFY</div>
                  <div className="col sell">SELL</div>
                  <div className="col">100</div>
                  <div className="col">₹1,542.30</div>
                  <div className="col positive">+₹1,890</div>
                </div>
                <div className="table-row">
                  <div className="col">Dec 13, 2024</div>
                  <div className="col">RELIANCE</div>
                  <div className="col buy">BUY</div>
                  <div className="col">25</div>
                  <div className="col">₹2,456.75</div>
                  <div className="col negative">-₹780</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Oil Monitor Section */}
      <section className="oil-monitor">
        <div className="container">
          <h2>Oil Monitor</h2>
          <p>Track crude oil prices and energy sector movements with real-time data</p>
          
          <div className="oil-content">
            <div className="oil-info">
              <div className="oil-price-card">
                <div className="oil-header">
                  <h3>Crude Oil (Brent)</h3>
                  <div className="oil-icon">🛢️</div>
                </div>
                <div className="oil-price">$84.50</div>
                <div className="oil-change positive">+2.45% (+$2.02)</div>
                <div className="oil-stats">
                  <div className="stat-row">
                    <span className="stat-label">24h High</span>
                    <span className="stat-value">$85.20</span>
                  </div>
                  <div className="stat-row">
                    <span className="stat-label">24h Low</span>
                    <span className="stat-value">$82.15</span>
                  </div>
                  <div className="stat-row">
                    <span className="stat-label">Volume</span>
                    <span className="stat-value">2.4M</span>
                  </div>
                </div>
              </div>
              
              <div className="oil-related">
                <h4>Related Stocks</h4>
                <div className="related-stocks">
                  <div className="stock-item">
                    <div className="stock-name">ONGC</div>
                    <div className="stock-price">₹245.80</div>
                    <div className="stock-change positive">+3.2%</div>
                  </div>
                  <div className="stock-item">
                    <div className="stock-name">IOC</div>
                    <div className="stock-price">₹132.50</div>
                    <div className="stock-change positive">+2.8%</div>
                  </div>
                  <div className="stock-item">
                    <div className="stock-name">BPCL</div>
                    <div className="stock-price">₹398.75</div>
                    <div className="stock-change positive">+1.9%</div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="oil-chart">
              <div className="chart-header">
                <h4>Price Movement (24h)</h4>
                <div className="chart-controls">
                  <button className="chart-btn active">1H</button>
                  <button className="chart-btn">4H</button>
                  <button className="chart-btn">1D</button>
                  <button className="chart-btn">1W</button>
                </div>
              </div>
              <div className="chart-container">
                <div className="chart-grid">
                  <div className="grid-line horizontal"></div>
                  <div className="grid-line horizontal"></div>
                  <div className="grid-line horizontal"></div>
                  <div className="grid-line horizontal"></div>
                  <div className="grid-line vertical"></div>
                  <div className="grid-line vertical"></div>
                  <div className="grid-line vertical"></div>
                  <div className="grid-line vertical"></div>
                </div>
                <div className="oil-price-line"></div>
                <div className="chart-area"></div>
                <div className="chart-points">
                  <div className="point"></div>
                  <div className="point"></div>
                  <div className="point"></div>
                  <div className="point"></div>
                  <div className="point"></div>
                  <div className="point"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose StockFlex Section */}
      <section className="why-choose">
        <div className="container">
          <h2>Why Choose StockFlex?</h2>
          <p>Discover what makes us the preferred choice for traders worldwide</p>
          
          <div className="choose-grid">
            <div className="choose-card">
              <div className="choose-icon">⚡</div>
              <h3>Lightning Fast</h3>
              <p>Execute trades in milliseconds with our advanced infrastructure and real-time data processing</p>
            </div>
            <div className="choose-card">
              <div className="choose-icon">🔐</div>
              <h3>Bank-Level Security</h3>
              <p>Your funds and data are protected with military-grade encryption and multi-factor authentication</p>
            </div>
            <div className="choose-card">
              <div className="choose-icon">📊</div>
              <h3>Advanced Analytics</h3>
              <p>Make informed decisions with our comprehensive market analysis and AI-powered insights</p>
            </div>
            <div className="choose-card">
              <div className="choose-icon">🌍</div>
              <h3>Global Markets</h3>
              <p>Trade stocks from over 50 countries and exchanges worldwide with unified platform</p>
            </div>
            <div className="choose-card">
              <div className="choose-icon">🎯</div>
              <h3>Precision Trading</h3>
              <p>Advanced order types and algorithmic trading capabilities for professional traders</p>
            </div>
            <div className="choose-card">
              <div className="choose-icon">📱</div>
              <h3>Mobile First</h3>
              <p>Trade anywhere, anytime with our award-winning mobile app and seamless synchronization</p>
            </div>
          </div>
        </div>
      </section>

      {/* Subscriptions Section */}
      <section className="subscriptions" id="pricing">
        <div className="container">
          <h2>Subscriptions</h2>
          <p>Choose the perfect plan for your trading journey</p>
          
          <div className="subscription-grid">
            <div className="subscription-card">
              <div className="subscription-header">
                <h3>Basic</h3>
                <div className="subscription-price">
                  <span className="price">₹0</span>
                  <span className="period">/month</span>
                </div>
              </div>
              <div className="subscription-features">
                <div className="feature">✓ Real-time quotes (15 min delay)</div>
                <div className="feature">✓ Basic charting tools</div>
                <div className="feature">✓ 5 watchlists</div>
                <div className="feature">✓ Email alerts</div>
                <div className="feature">✓ Mobile app access</div>
              </div>
              <button className="subscription-btn" onClick={openSignInModal}>Get Started</button>
            </div>
            
            <div className="subscription-card featured">
              <div className="popular-badge">Most Popular</div>
              <div className="subscription-header">
                <h3>Pro</h3>
                <div className="subscription-price">
                  <span className="price">₹999</span>
                  <span className="period">/month</span>
                </div>
              </div>
              <div className="subscription-features">
                <div className="feature">✓ Everything in Basic</div>
                <div className="feature">✓ Real-time market data</div>
                <div className="feature">✓ Advanced analytics</div>
                <div className="feature">✓ Unlimited watchlists</div>
                <div className="feature">✓ Priority support</div>
                <div className="feature">✓ Trading signals</div>
                <div className="feature">✓ Options trading</div>
              </div>
              <button className="subscription-btn" onClick={openSignInModal}>Buy Now</button>
            </div>
            
            <div className="subscription-card">
              <div className="subscription-header">
                <h3>Enterprise</h3>
                <div className="subscription-price">
                  <span className="price">₹2,999</span>
                  <span className="period">/month</span>
                </div>
              </div>
              <div className="subscription-features">
                <div className="feature">✓ Everything in Pro</div>
                <div className="feature">✓ API access</div>
                <div className="feature">✓ Custom integrations</div>
                <div className="feature">✓ Dedicated support</div>
                <div className="feature">✓ Advanced reporting</div>
                <div className="feature">✓ Algorithmic trading</div>
                <div className="feature">✓ Institutional features</div>
              </div>
              <button className="subscription-btn" onClick={openSignInModal}>Buy Now</button>
            </div>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="about-us" id="about">
        <div className="container">
          <div className="about-content">
            <div className="about-text">
              <h2>About Us</h2>
              <p>StockFlex is India's leading financial technology company, dedicated to democratizing access to financial markets. Founded in 2018, we've revolutionized how millions of Indians invest and trade.</p>
              
              <div className="about-stats">
                <div className="stat-item">
                  <div className="stat-number">5M+</div>
                  <div className="stat-label">Active Users</div>
                </div>
                <div className="stat-item">
                  <div className="stat-number">₹2T+</div>
                  <div className="stat-label">Volume Traded</div>
                </div>
                <div className="stat-item">
                  <div className="stat-number">99.9%</div>
                  <div className="stat-label">Uptime</div>
                </div>
              </div>
              
              <div className="mission-section">
                <h3>Our Mission</h3>
                <p>To make financial markets accessible to every Indian by providing cutting-edge technology, transparent pricing, and world-class education.</p>
              </div>
            </div>
            
            <div className="about-newsletter">
              <div className="newsletter-card">
                <h3>Stay Updated</h3>
                <p>Get the latest market insights and trading tips delivered to your inbox</p>
                
                <form onSubmit={handleEmailSubmit} className="newsletter-form">
                  <div className="form-group">
                    <input
                      type="email"
                      placeholder="Enter your email address"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      className="email-input"
                    />
                  </div>
                  <button type="submit" className="join-now-btn">Join Now</button>
                </form>
                
                <div className="newsletter-benefits">
                  <div className="benefit">📈 Daily market updates</div>
                  <div className="benefit">💡 Trading tips & strategies</div>
                  <div className="benefit">🎯 Exclusive research reports</div>
                  <div className="benefit">🚀 New feature announcements</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer" id="contact">
        {/* Stock Ticker */}
        <div className="stock-ticker">
          <div className="ticker-wrapper">
            <div className="ticker-content">
              <div className="ticker-item">
                <span className="ticker-symbol">NIFTY 50</span>
                <span className="ticker-price">19,745.00</span>
                <span className="ticker-change positive">+152.30</span>
              </div>
              <div className="ticker-item">
                <span className="ticker-symbol">SENSEX</span>
                <span className="ticker-price">66,230.00</span>
                <span className="ticker-change positive">+421.80</span>
              </div>
              <div className="ticker-item">
                <span className="ticker-symbol">BANK NIFTY</span>
                <span className="ticker-price">45,120.00</span>
                <span className="ticker-change negative">-89.50</span>
              </div>
              <div className="ticker-item">
                <span className="ticker-symbol">NIFTY IT</span>
                <span className="ticker-price">30,248.75</span>
                <span className="ticker-change positive">+724.30</span>
              </div>
              <div className="ticker-item">
                <span className="ticker-symbol">RELIANCE</span>
                <span className="ticker-price">2,456.75</span>
                <span className="ticker-change positive">+84.50</span>
              </div>
              <div className="ticker-item">
                <span className="ticker-symbol">TCS</span>
                <span className="ticker-price">3,847.50</span>
                <span className="ticker-change positive">+192.25</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="footer-content">
          <div className="footer-section">
            <h4>StockFlex</h4>
            <p>India's most trusted trading platform. Empowering millions of traders with cutting-edge technology.</p>
            <div className="social-links">
              <a href="#" className="social-link">📘</a>
              <a href="#" className="social-link">🐦</a>
              <a href="#" className="social-link">📸</a>
              <a href="#" className="social-link">💼</a>
            </div>
          </div>
          
          <div className="footer-section">
            <h4>Trading</h4>
            <a href="#stocks">Stocks</a>
            <a href="#options">Options</a>
            <a href="#futures">Futures</a>
            <a href="#commodities">Commodities</a>
            <a href="#currencies">Currencies</a>
          </div>
          
          <div className="footer-section">
            <h4>Tools & Features</h4>
            <a href="#charts">Advanced Charts</a>
            <a href="#screener">Stock Screener</a>
            <a href="#calculator">SIP Calculator</a>
            <a href="#diary">Trader Diary</a>
            <a href="#alerts">Price Alerts</a>
          </div>
          
          <div className="footer-section">
            <h4>Support</h4>
            <a href="#help">Help Center</a>
            <a href="#contact">Contact Us</a>
            <a href="#docs">API Documentation</a>
            <a href="#tutorials">Video Tutorials</a>
            <a href="#webinars">Webinars</a>
          </div>
          
          <div className="footer-section">
            <h4>Company</h4>
            <a href="#about">About StockFlex</a>
            <a href="#careers">Careers</a>
            <a href="#press">Press</a>
            <a href="#partners">Partners</a>
            <a href="#legal">Legal</a>
          </div>
        </div>
        
        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <p>&copy; 2024 StockFlex Technologies Pvt Ltd. All rights reserved.</p>
            <div className="footer-links">
              <a href="#privacy">Privacy Policy</a>
              <a href="#terms">Terms of Service</a>
              <a href="#disclaimer">Risk Disclaimer</a>
            </div>
          </div>
        </div>
      </footer>

      {/* Sign In Modal */}
      <Modal isOpen={isSignInModalOpen} onClose={closeSignInModal}>
        <SignInModal onClose={closeSignInModal} onSuccessfulLogin={onSuccessfulLogin} />
      </Modal>
    </div>
  );
};

export default MainPage;