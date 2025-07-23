import React, { useState } from 'react';
import './SignIn.css';

const SignIn = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    rememberMe: false
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <div className="signin-container">
      {/* Left Side - Purple Background with Graphics */}
      <div className="signin-left">
        <div className="graphics-container">
          <div className="floating-elements">
            <div className="dot dot-1"></div>
            <div className="dot dot-2"></div>
            <div className="dot dot-3"></div>
            <div className="dot dot-4"></div>
            <div className="dot dot-5"></div>
          </div>
          
          <div className="main-graphic">
            <div className="laptop-container">
              <div className="laptop">
                <div className="laptop-screen">
                  <div className="chart-line"></div>
                  <div className="chart-bars">
                    <div className="bar bar-1"></div>
                    <div className="bar bar-2"></div>
                    <div className="bar bar-3"></div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="geometric-shapes">
              <div className="shape shape-1"></div>
              <div className="shape shape-2"></div>
              <div className="shape shape-3"></div>
            </div>
          </div>
        </div>
        
        <div className="content-text">
          <h1>Turn your ideas into reality.</h1>
          <p>Start for free and get attractive offers from the community</p>
        </div>
      </div>

      {/* Right Side - Sign In Form */}
      <div className="signin-right">
        <div className="form-container">
          <div className="logo-container">
            <div className="logo">
              <div className="logo-icon">
                <div className="logo-shape"></div>
              </div>
            </div>
          </div>
          
          <div className="form-header">
            <h2>Sign In to your Account</h2>
          </div>
          
          <form onSubmit={handleSubmit} className="signin-form">
            <div className="form-group">
              <input
                type="email"
                name="email"
                placeholder="Email address"
                value={formData.email}
                onChange={handleChange}
                className="form-input"
                required
              />
            </div>
            
            <div className="form-group">
              <input
                type="password"
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
                className="form-input"
                required
              />
            </div>
            
            <div className="form-options">
              <label className="checkbox-container">
                <input
                  type="checkbox"
                  name="rememberMe"
                  checked={formData.rememberMe}
                  onChange={handleChange}
                />
                <span className="checkmark"></span>
                Remember me
              </label>
              
              <a href="#" className="forgot-password">
                Forgot password?
              </a>
            </div>
            
            <button type="submit" className="signin-button">
              Sign In
            </button>
          </form>
          
          <div className="signup-link">
            <p>Don't have an account? <a href="#">Sign up</a></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;