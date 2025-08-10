import React, { useState, useEffect } from "react";
import "./SWPCalculator.css";

const formatINR = (n) =>
  new Intl.NumberFormat("en-IN", { maximumFractionDigits: 0 }).format(
    Number(Math.round(n || 0))
  );

export default function SWPCalculator({ onBack }) {
  // defaults chosen to match the visual example
  const [amount, setAmount] = useState(197765);
  const [withdrawal, setWithdrawal] = useState(500);
  const [rate, setRate] = useState(8);
  const [years, setYears] = useState(1);
  const [results, setResults] = useState({
    invested: amount,
    totalWithdrawn: 0,
    finalValue: amount,
  });

  // recalc whenever inputs change
  useEffect(() => {
    calculate();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [amount, withdrawal, rate, years]);

  const calculate = () => {
    const monthlyRate = parseFloat(rate) / 100 / 12;
    const months = parseInt(years, 10) * 12;
    let balance = parseFloat(amount) || 0;
    let totalWithdrawn = 0;

    // simulate monthly growth + withdrawal (simple discrete model)
    for (let i = 0; i < months; i++) {
      balance = balance * (1 + monthlyRate);
      const w = Math.min(balance, parseFloat(withdrawal) || 0);
      balance -= w;
      totalWithdrawn += w;
      if (balance <= 0) {
        balance = 0;
        break;
      }
    }

    setResults({
      invested: amount || 0,
      totalWithdrawn: totalWithdrawn || 0,
      finalValue: balance || 0,
    });
  };

  // helper to paint the range input with a purple gradient up to the thumb
  const rangeBg = (value, min, max) => {
    const pct = ((value - min) / (max - min)) * 100;
    return `linear-gradient(90deg, #6e2cff ${pct}%, rgba(255,255,255,0.04) ${pct}%)`;
  };

  return (
    <div className="swp-page">
      <header className="heatmap-header">
        <div className="heatmap-header-container">
<<<<<<< HEAD
          <div className="logo">
          <img src="images/Final Font Stocks4U1.png" className="logo-text" />
=======
          <div className="heatmap-logo">
            <span className="heatmap-logo-icon">📈</span>
            <span className="heatmap-logo-text">stocks4u</span>
>>>>>>> 3fa6b625b19d922458b7a7ae2a457254c26ee838
          </div>
          
          <div className="heatmap-search">
            <input 
              type="text" 
              placeholder="Search stocks"
              className="heatmap-search-input"
            />
          </div>
          
          <div className="heatmap-user">
            <button className="heatmap-back-btn" onClick={onBack}>
              ← Back to Dashboard
            </button>
          </div>
        </div>
      </header>
      <div className="swp-inner container">
        <h1 className="swp-title">SWP Calculator</h1>

        <p className="swp-desc">
          An SWP calculator is used to calculate the amount that you will earn
          from your investment in an SWP or Systematic Withdrawal Plan. The SWP
          calculator is thus a useful tool that will help you to easily choose
          the right SWP scheme for yourself, based on the returns that you will
          get from the scheme.
        </p>

        <div className="swp-grid">
          {/* LEFT BOX */}
          <div className="swp-card left">
            <h3 className="card-heading">Total Investment</h3>

            <div className="amount-box">
              <input
                type="number"
                className="amount-input"
                value={amount}
                onChange={(e) => setAmount(Number(e.target.value || 0))}
                placeholder="Enter Amount"
              />
            </div>

            <div className="control">
              <label className="control-label">
                Money Withdrawal
                <span className="control-value">{formatINR(withdrawal)}</span>
              </label>
              <input
                type="range"
                min="500"
                max="50000"
                step="100"
                value={withdrawal}
                onChange={(e) => setWithdrawal(Number(e.target.value))}
                style={{ background: rangeBg(withdrawal, 500, 50000) }}
              />
              <div className="minmax">
                <span>500</span>
                <span>50000</span>
              </div>
            </div>

            <div className="control">
              <label className="control-label">
                Expected Rate Of Return
                <span className="control-value">{rate}%</span>
              </label>
              <input
                type="range"
                min="8"
                max="30"
                step="0.5"
                value={rate}
                onChange={(e) => setRate(Number(e.target.value))}
                style={{ background: rangeBg(rate, 8, 30) }}
              />
              <div className="minmax">
                <span>8%</span>
                <span>30%</span>
              </div>
            </div>

            <div className="control">
              <label className="control-label">
                Select Duration
                <span className="control-value">{years}Yr</span>
              </label>
              <input
                type="range"
                min="1"
                max="30"
                step="1"
                value={years}
                onChange={(e) => setYears(Number(e.target.value))}
                style={{ background: rangeBg(years, 1, 30) }}
              />
              <div className="minmax">
                <span>1 yr</span>
                <span>30 yr</span>
              </div>
            </div>
          </div>

          {/* RIGHT BOX */}
          <div className="swp-card right">
            <div className="result-block">
              <div className="result-label">Invested Amount</div>
              <div className="result-value">₹ {formatINR(results.invested)}</div>
            </div>

            <div className="result-block">
              <div className="result-label">Total Withdrawal</div>
              <div className="result-value">₹ {formatINR(results.totalWithdrawn)}</div>
            </div>

            <div className="result-block">
              <div className="result-label">Final Value</div>
              <div className="result-value">₹ {formatINR(results.finalValue)}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
