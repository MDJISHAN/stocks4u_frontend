import React, { useState, useEffect } from 'react';
import MainPage from './components/MainPage';
import Dashboard from './components/Dashboard';
import WatchlistPage from './components/WatchlistPage';
import HighLowPage from './components/HighLowPage';
//import MomentumSpikePage from './components/MomentumSpikePage';
import RuleStrategyPage from './components/RuleStrategyPage';
import IndexMoverPage from './components/IndexMoverPage';
import NiftyItPage from './components/NiftyItPage';
import NetPositionPage from './components/NetPositionPage';
import DistributionPage from './components/DistributionPage';
import './App.css';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState('dashboard');

  useEffect(() => {
    // Check if user is already authenticated
    const userData = localStorage.getItem('user');
    if (userData) {
      try {
        const user = JSON.parse(userData);
        setIsAuthenticated(user.isAuthenticated);
      } catch (error) {
        console.error('Error parsing user data:', error);
        localStorage.removeItem('user');
      }
    }
    setIsLoading(false);
  }, []);

  const handleSuccessfulLogin = () => {
    setIsAuthenticated(true);
  };

  const handleLogout = () => {
    localStorage.removeItem('user');
    setIsAuthenticated(false);
    setCurrentPage('dashboard');
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'dashboard':
        return <Dashboard 
          onLogout={handleLogout}
          onWatchlistClick={() => setCurrentPage('watchlist')}
          onHighLowClick={() => setCurrentPage('highlow')}
          onMomentumClick={() => setCurrentPage('momentum')}
          onRuleStrategyClick={() => setCurrentPage('rule-strategy')}
          onIndexMoverClick={() => setCurrentPage('index-mover')}
          onNetPositionClick={() => setCurrentPage('net-position')}
          onDistributionClick={() => setCurrentPage('distribution')}
        />;
      case 'watchlist':
        return <WatchlistPage 
          onBack={() => setCurrentPage('dashboard')} 
        />;
      case 'highlow':
        return <HighLowPage 
          onBack={() => setCurrentPage('dashboard')} 
        />;
      
      case 'rule-strategy':
        return <RuleStrategyPage 
          onBack={() => setCurrentPage('dashboard')} 
        />;
      case 'index-mover':
        return <IndexMoverPage 
          onBack={() => setCurrentPage('dashboard')}
          onNiftyItClick={() => setCurrentPage('nifty-it')}
        />;
      case 'nifty-it':
        return <NiftyItPage 
          onBack={() => setCurrentPage('index-mover')} 
        />;
      case 'net-position':
        return <NetPositionPage 
          onBack={() => setCurrentPage('dashboard')} 
        />;
      case 'distribution':
        return <DistributionPage 
          onBack={() => setCurrentPage('dashboard')} 
        />;
      default:
        return <Dashboard 
          onLogout={handleLogout}
          onWatchlistClick={() => setCurrentPage('watchlist')}
          onHighLowClick={() => setCurrentPage('highlow')}
          onMomentumClick={() => setCurrentPage('momentum')}
          onRuleStrategyClick={() => setCurrentPage('rule-strategy')}
          onIndexMoverClick={() => setCurrentPage('index-mover')}
          onNetPositionClick={() => setCurrentPage('net-position')}
          onDistributionClick={() => setCurrentPage('distribution')}
        />;
    }
  };

  if (isLoading) {
    return (
      <div className="App">
        <div className="loading-container">
          <div className="loading-spinner"></div>
          <p>Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="App">
      {isAuthenticated ? (
        renderPage()
      ) : (
        <MainPage onSuccessfulLogin={handleSuccessfulLogin} />
      )}
    </div>
  );
}

export default App;
