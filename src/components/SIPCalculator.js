import React, { useState, useEffect } from "react";
import "./SIPCalculator.css";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

const formatINR = (n) =>
  new Intl.NumberFormat("en-IN", { maximumFractionDigits: 0 }).format(
    Number(Math.round(n || 0))
  );

export default function SIPCalculator({onBack}) {
  const [amount, setAmount] = useState(23000);
  const [rate, setRate] = useState(8);
  const [years, setYears] = useState(21);
  const [results, setResults] = useState({
    invested: 0,
    returns: 0,
    total: 0,
  });

  useEffect(() => {
    calculate();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [amount, rate, years]);

  const calculate = () => {
    const monthlyRate = rate / 100 / 12;
    const months = years * 12;
    let fv =
      amount *
      (((Math.pow(1 + monthlyRate, months) - 1) / monthlyRate) *
        (1 + monthlyRate));
    let invested = amount * months;
    let returns = fv - invested;

    setResults({
      invested,
      returns,
      total: fv,
    });
  };

  const rangeBg = (value, min, max) => {
    const pct = ((value - min) / (max - min)) * 100;
    return `linear-gradient(90deg, #6e2cff ${pct}%, rgba(255,255,255,0.04) ${pct}%)`;
  };

  const chartData = {
    labels: ["Invested Amount", "Est. Returns"],
    datasets: [
      {
        data: [results.invested, results.returns],
        backgroundColor: ["#ff8c2a", "#3d5afe"],
        borderWidth: 0,
      },
    ],
  };

  return (
    <div className="sip-page">
        {/* Header */}
      <header className="oil-header">
        <div className="oil-header-container">
          <div className="oil-logo">
            <span className="oil-logo-icon">🛢️</span>
            <span className="oil-logo-text">stocks4u</span>
          </div>

          <div className="oil-search">
            <input 
              type="text" 
              placeholder="Search OI data"
              className="oil-search-input"
            />
          </div>

          <div className="oil-user">
            <button className="oil-back-btn" onClick={onBack}>
              ← Back to Dashboard
            </button>
          </div>
        </div>
      </header>
      <div className="sip-inner container">
        <h1 className="sip-title">SIP Calculator</h1>
        <p className="sip-desc">
          The SIP calculator helps estimate the potential growth of your
          Systematic Investment Plan (SIP) investment over your chosen time
          frame. SIP is a convenient method to save for your long-term financial
          goals.
        </p>

        <button className="sip-btn">SIP Investment Amount</button>

        <div className="sip-grid">
          {/* LEFT CARD */}
          <div className="sip-card left">
            <h3 className="card-heading">Returns Estimator</h3>
            <p className="subtext">
              Estimation is based on the past performance
            </p>

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
                Select Duration
                <span className="control-value">{years} yr</span>
              </label>
              <input
                type="range"
                min="1"
                max="30"
                value={years}
                onChange={(e) => setYears(Number(e.target.value))}
                style={{ background: rangeBg(years, 1, 30) }}
              />
              <div className="minmax">
                <span>1 yr</span>
                <span>30 yr</span>
              </div>
            </div>

            <div className="control">
              <label className="control-label">
                Expected Rate Of Return
                <span className="control-value">{rate}%</span>
              </label>
              <input
                type="range"
                min="6"
                max="30"
                step="0.5"
                value={rate}
                onChange={(e) => setRate(Number(e.target.value))}
                style={{ background: rangeBg(rate, 6, 30) }}
              />
              <div className="minmax">
                <span>6%</span>
                <span>30%</span>
              </div>
            </div>
          </div>

          {/* RIGHT CARD */}
          <div className="sip-card right">
            <div className="result-title">
              The Total Value Of Your Investment After{" "}
              <span className="highlight">{years} Years</span> Will Be
            </div>
            <div className="result-big">₹ {formatINR(results.total)}</div>

            <div className="chart-box">
              <Doughnut
                data={chartData}
                options={{
                  cutout: "70%",
                  plugins: { legend: { position: "right", labels: { color: "#fff" } } },
                }}
              />
            </div>

            <div className="legend">
              <div className="legend-item">
                <span
                  className="color-dot"
                  style={{ background: "#ff8c2a" }}
                ></span>
                Invested Amount {formatINR(results.invested)}
              </div>
              <div className="legend-item">
                <span
                  className="color-dot"
                  style={{ background: "#3d5afe" }}
                ></span>
                Est. Returns {formatINR(results.returns)}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
