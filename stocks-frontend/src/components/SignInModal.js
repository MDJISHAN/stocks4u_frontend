import React, { useState } from 'react';
import './SignInModal.css';

const SignInModal = ({ onClose, onSuccessfulLogin }) => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    rememberMe: false
  });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
    setError('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Simple validation (in real app, this would be server-side)
      if (formData.email && formData.password) {
        // Store user data in localStorage (in real app, use proper auth)
        localStorage.setItem('user', JSON.stringify({
          email: formData.email,
          isAuthenticated: true
        }));
        
        onSuccessfulLogin();
        onClose();
      } else {
        setError('Please enter both email and password');
      }
    } catch (error) {
      setError('Something went wrong. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="signin-modal-container">
      {/* Left Side - Purple Background with Graphics */}
      <div className="signin-modal-left">
        <div className="modal-graphics-container">
          <div className="modal-floating-elements">
            <div className="modal-dot modal-dot-1"></div>
            <div className="modal-dot modal-dot-2"></div>
            <div className="modal-dot modal-dot-3"></div>
            <div className="modal-dot modal-dot-4"></div>
            <div className="modal-dot modal-dot-5"></div>
          </div>
          
          <div className="modal-main-graphic">
            <div className="modal-laptop-container">
              <div className="modal-laptop">
                <div className="modal-laptop-screen">
                  <div className="modal-chart-line"></div>
                  <div className="modal-chart-bars">
                    <div className="modal-bar modal-bar-1"></div>
                    <div className="modal-bar modal-bar-2"></div>
                    <div className="modal-bar modal-bar-3"></div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="modal-geometric-shapes">
              <div className="modal-shape modal-shape-1"></div>
              <div className="modal-shape modal-shape-2"></div>
              <div className="modal-shape modal-shape-3"></div>
            </div>
          </div>
        </div>
        
        <div className="modal-content-text">
          <h1>Turn your ideas into reality.</h1>
          <p>Start for free and get attractive offers from the community</p>
        </div>
      </div>

      {/* Right Side - Sign In Form */}
      <div className="signin-modal-right">
        <div className="modal-form-container">
          <div className="modal-logo-container">
            <div className="modal-logo">
              <div className="modal-logo-icon">
                <div className="modal-logo-shape"></div>
              </div>
            </div>
          </div>
          
          <div className="modal-form-header">
            <h2>Sign In to your Account</h2>
          </div>
          
          <form onSubmit={handleSubmit} className="modal-signin-form">
            <div className="modal-form-group">
              <input
                type="email"
                name="email"
                placeholder="Email address"
                value={formData.email}
                onChange={handleChange}
                className="modal-form-input"
                required
              />
            </div>
            
            <div className="modal-form-group">
              <input
                type="password"
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
                className="modal-form-input"
                required
              />
            </div>
            
            <div className="modal-form-options">
              <label className="modal-checkbox-container">
                <input
                  type="checkbox"
                  name="rememberMe"
                  checked={formData.rememberMe}
                  onChange={handleChange}
                />
                <span className="modal-checkmark"></span>
                Remember me
              </label>
              
              <a href="#" className="modal-forgot-password">
                Forgot password?
              </a>
            </div>
            
            {error && (
              <div className="modal-error-message">
                {error}
              </div>
            )}
            
            <button type="submit" className="modal-signin-button" disabled={isLoading}>
              {isLoading ? 'Signing In...' : 'Sign In'}
            </button>
          </form>
          
          <div className="modal-signup-link">
            <p>Don't have an account? <a href="#">Sign up</a></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignInModal;