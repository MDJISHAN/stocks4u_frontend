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
                <img src="images/Final Font Stocks4U1.png" className="logo-text" />
          </div>
          
          <nav className={`nav ${isMobileMenuOpen ? 'nav-open' : ''}`}>
            <a href="#home">Home</a>
            <a href="#features">Features</a>
            <a href="#pricing">Pricing</a>
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
   
              </div>
            </div>
            
            <div className="phone phone-2 main-phone">
              <div className="phone-screen">
     
              </div>
            </div>
            
            <div className="phone phone-3">
              <div className="phone-screen">

              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sector Rotation Section */}
      <section className="sector-rotation">
        <div className="container">
          <div className="phone1 phone-sector">
              <div className="phone-screen">
                <img src="images/sector rotation.png" className="phone-image" />

              </div>
            </div>
          <h2>Sector Rotation</h2>
          <p>Stay ahead of market trends with our advanced sector rotation analysis</p>
          

        </div>
        
      </section>

      {/* Introducing Section */}
      <section className="introducing">
        <div className="container">
          <div className="introducing-content">
            <div className="introducing-text">
              <h2>Introducing</h2>
              <h3>Advanced Trading Platform</h3>
              <p style={{marginLeft:'5rem'}}>Experience the future of trading with our cutting-edge platform designed for both beginners and professionals. Get real-time market data, advanced analytics, and seamless trading experience all in one place.</p>
              
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
          </div>
        </div>
      </section>

      {/* Real Time Sector Data */}


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
          
      <div className="phone1 phone-sector">
              <div className="phone-screen">
                <img src="images/index mover.png" className="phone-image" />

              </div>
            </div>
        </div>
      </section>

      {/* SIP & SWAP Calculator */}
     

      {/* Trader Diary Section */}
      

      {/* Oil Monitor Section */}
      <section className="oil-monitor">
            <div className="oil-content">
              <div className="oil-visual">
              <div className="hero-phones">
            <div className="phone phone-1">
              <div className="phone-screen">
                <img src="images/Oi monitor 1.png" className="phone-image" />

              </div>
            </div>
            
           
            
            <div className="phone phone-3">
              <div className="phone-screen">
              <img src="images/OI Monitor 3.png" className="phone-image" />

              </div>
            </div>
          </div>
              </div>
              <div className="oil-info">
                <h2>OI Monitor</h2>
                <p>
                  Unlock the secrets of the top 1% professional institutional traders with the Super Trader VIP Membership. Get unlimited access to powerful institutional trading ideas, in depth trading education and world class technology enabled ecosystem.
                </p>
                <ul>
                  <li>📊 Trade Like Professional Traders</li>
                  <li>💡 Powerful Trade Ideas</li>
                  <li>🧠 10+ Trading Strategies</li>
                </ul>
                <button className="get-started-btn">Get Started</button>
              </div>
            </div>
          </section>
           <div className="section-divider"> </div>

          {/* REPLACED CARD GRID SECTION */}
          <div className="card-grid">
            <div className="card">
              <img src="/images/sip calculator.png" alt="SIP Calculator" className="card-icon" />
              <h3>SIP & SWP Calculator</h3>
              <p>Description</p>
            </div>

            <div className="card">
              <img src="/images/dairy.png" alt="Traders Diary" className="dairy-image" />
              <h3>Traders Diary</h3>
              <p>Make informed trading decisions with access to the minute insights from specific sectors.</p>
            </div>

            <div className="card">
              <div className="chart-box">
                <img src="/images/real data.png" alt="Traders Diary" className="sector-data"/>
                <h3>Realtime Sector Data</h3>
                <p>Description</p>
              </div>
            </div>

            
          </div>

      {/* Why Choose StockFlex Section */}
      <section className="why-choose" id="features">
        <div className="container">
          <h2>Why Choose StockFlex?</h2>
          <p>Discover what makes us the preferred choice for traders worldwide</p>
          
          <div className="choose-grid">
            <div className="choose-card">
              <div className="choose-icon">📈</div>
              <h3>Intraday Scan</h3>
              <p>Identify trades, regions & themes performing</p>
            </div>
            <div className="choose-card">
              <div className="choose-icon">📊</div>
              <h3>Sector Rotation</h3>
              <p>Identify Sector data, regions & themes performing</p>
            </div>
            <div className="choose-card">
              <div className="choose-icon">🛢️</div>
              <h3>OI Monitor</h3>
              <p>Monitors trades, regions & themes performing</p>
            </div>
            <div className="choose-card">
              <div className="choose-icon">📡</div>
              <h3>Momentum rader</h3>
              <p>Identify Momentum, regions & themes performing</p>
            </div>
             <div className="choose-card">
              <div className="choose-icon">🔥</div>
              <h3>Heatmap</h3>
              <p>Trade anywhere, anytime with our award-winning mobile app and seamless synchronization</p>
            </div>
             <div className="choose-card">
              <div className="choose-icon">🎯</div>
              <h3>Swing Zone</h3>
              <p>Trade anywhere, anytime with our award-winning mobile app and seamless synchronization</p>
            </div>
            <div className="choose-card">
              <div className="choose-icon">📊</div>
              <h3>Index Mover</h3>
              <p>Advanced order types and algorithmic trading capabilities for professional traders</p>
            </div>
            <div className="choose-card">
              <div className="choose-icon">📖</div>
              <h3>Trader Dairy</h3>
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
              <button className="subscription-btn" onClick={openSignInModal} >Buy Now</button>
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
              <a href="#" className="social-link">🔔 </a>
              <a href="#" className="social-link">📝</a>
              <a href="#" className="social-link">👤</a>

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