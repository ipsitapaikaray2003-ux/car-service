import React from 'react';

export default function EmergencyBanner() {
  const handleEmergencyCall = (e) => {
    e.preventDefault();
    const confirmed = window.confirm(
      '🚨 EMERGENCY 24x7 BREAKDOWN ASSISTANCE\n\n' +
      'Need roadside towing, jump-start, or puncture assistance in Moradabad, Thakurdwara or Dilari?\n\n' +
      'Click OK to call Multi Brand Car Service Center Emergency Hotline directly: 90128 62412'
    );
    if (confirmed) {
      window.location.href = 'tel:9012862412';
    }
  };

  return (
    <div className="container" style={{ paddingBottom: '60px' }}>
      <div className="emergency-banner">
        <div className="emergency-content">
          <h3>
            <i className="fa-solid fa-triangle-exclamation" style={{ color: 'var(--accent-crimson)' }}></i>
            <span>Stuck on the Road? Emergency Breakdown Assistance in Moradabad & Thakurdwara</span>
          </h3>
          <p>Flatbed towing, battery jump-start, flat tyre repair, and on-site emergency diagnostics across Dilari, Thakurdwara, Rehta Mafi, and Moradabad.</p>
        </div>
        <a 
          href="tel:9012862412" 
          className="emergency-phone-btn"
          onClick={handleEmergencyCall}
        >
          <i className="fa-solid fa-phone-volume"></i>
          <span>SOS: 90128 62412</span>
        </a>
      </div>
    </div>
  );
}
