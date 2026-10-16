import React from 'react';

export default function Topbar() {
  return (
    <div className="topbar">
      <div className="container topbar-container">
        <div className="topbar-left">
          <div className="topbar-highlight">
            <span className="live-dot-pulse"></span>
            <span><strong>Multi Brand Car Service Center:</strong> Village Rehta Mafi, Dilari, Moradabad</span>
          </div>
          <div className="topbar-link">
            <i className="fa-solid fa-truck-pickup" style={{ color: 'var(--accent-gold)' }}></i>
            <span>Free Doorstep Pickup & Roadside SOS Across Moradabad Region</span>
          </div>
        </div>
        <div className="topbar-right">
          <a href="tel:9012862412" className="topbar-link topbar-hotline-highlight">
            <i className="fa-solid fa-phone-volume" style={{ color: 'var(--accent-crimson)' }}></i>
            <span>Direct Hotline: <strong className="topbar-phone">90128 62412</strong></span>
          </a>
          <div className="topbar-link topbar-hours">
            <i className="fa-regular fa-clock" style={{ color: 'var(--accent-gold)' }}></i>
            <span>Mon–Sun: 8:00 AM – 9:00 PM</span>
          </div>
        </div>
      </div>
    </div>
  );
}
