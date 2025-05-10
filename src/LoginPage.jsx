import React from "react";
import "./LoginPage.css";
import logo from './assets/logo1.png';
import background from './assets/bg@4x 1.png';
import rectangle from './assets/Rectangle.png'
import group from './assets/Group.png'

const LoginPage = () => {
  return (
    <div className="login-page">

      <div className="login-left">
        <div className="login-box">
          <div className="logo">
            <img src={logo} alt="Logo" className="logo-img" />
          </div>
          <h2>Welcome Back</h2>
          <p className="subtext">
            Log into your account for seamless tracking, energy insights, and compliance-ready execution.
          </p>
          <form className="login-form">
            <input type="text" placeholder="Username / Email" />
            <input type="password" placeholder="Password" />
            <div className="form-actions">
              <label>
                <input type="checkbox" /> Remember Me
              </label>
              <a href="#">Forgot Password?</a>
            </div>
            <button type="submit">Login Now</button>
          </form>
        </div>
        <p className="copyright">© Copyright 2025. Best Infra. All Rights Reserved.</p>
      </div>


      <div className="login-right" style={{ backgroundImage: `url(${background})` }}>
        <div className="login-info">
          <h2 class="single-line-heading">Powering precision and building trust</h2>
              
          <div className="cards">
            <div className="card"><img src={rectangle} alt="Card" className="card-image" /></div>
            <div className="card"><img src={rectangle} alt="Card" className="card-image" /></div>
            <div className="card"><img src={rectangle} alt="Card" className="card-image" /></div>
          </div>
          <div className="cards">

            <div className="card1"><img src={rectangle} alt="Card" className="card-image" /></div>
            <div className="card2">
              <div className="card1-header">
                <div>
                  <h4>Feeders</h4>
                  <p className="card1-count">25394</p>
                </div>
                <div className="card1-icon">
                  <img src={group} alt="icon" />
                </div>
              </div>
              <hr />
              <p className="card1-subtitle">Communication Status</p>
              <div className="card1-status">
                <div className="status-up">
                  <span className="arrow green">⬆</span>
                  <span style={{ color: "black" }}>24804</span>
                  <span className="percent green-bg">92%</span>
                </div>
                <div className="status-down">
                  <span className="arrow red">⬇</span>
                  <span style={{ color: "black" }}>685</span>
                  <span className="percent red-bg">06%</span>
                </div>
              </div>
              <div className="unreachable-row">
                <span className="dot red-dot">●</span>
                <span className="unreachable-count">105</span>
                <span className="unreachable-text">Unreachable</span>
              </div>
            </div>

          </div>
        </div>
      </div>

    </div>
  );
};

export default LoginPage;
