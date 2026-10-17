import React from 'react';

export default function Packages({ onOpenBooking }) {
  return (
    <section className="section" id="packages">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Periodic Service Tiers</span>
          <h2 className="section-title">Transparent Maintenance Packages</h2>
          <p className="section-desc">Tailored multi-brand car maintenance based on your vehicle's mileage, health, and driving conditions. Genuine OEM parts with zero surprises.</p>
        </div>

        <div className="packages-grid">
          {/* Basic Care */}
          <div className="package-card">
            <div className="package-header">
              <h3 className="package-name">Basic Service</h3>
              <p className="package-desc">Essential interim checkup and engine oil change every 5,000 km.</p>
              <div className="package-scope-badge">
                <i className="fa-solid fa-gauge"></i> Every 5,000 KM / 6 Months
              </div>
            </div>

            <ul className="package-features">
              <li className="package-feature-item"><i className="fa-solid fa-check"></i> Semi-Synthetic Engine Oil</li>
              <li className="package-feature-item"><i className="fa-solid fa-check"></i> OEM Oil Filter Replacement</li>
              <li className="package-feature-item"><i className="fa-solid fa-check"></i> Air & AC Filter Clean</li>
              <li className="package-feature-item"><i className="fa-solid fa-check"></i> Coolant & Wiper Fluid Top-up</li>
              <li className="package-feature-item"><i className="fa-solid fa-check"></i> Exterior Foam Wash</li>
              <li className="package-feature-item excluded"><i className="fa-solid fa-xmark"></i> Computer Engine Scanning</li>
              <li className="package-feature-item excluded"><i className="fa-solid fa-xmark"></i> Complete Brake Pad Servicing</li>
              <li className="package-feature-item excluded"><i className="fa-solid fa-xmark"></i> Wheel Alignment & Balancing</li>
            </ul>

            <button 
              type="button" 
              className="btn btn-outline" 
              onClick={() => onOpenBooking('Basic Service')}
              style={{ width: '100%' }}
            >
              Book Basic Service
            </button>
          </div>

          {/* Standard Care (Recommended / Featured) */}
          <div className="package-card featured">
            <div className="package-ribbon">Most Popular Choice</div>
            <div className="package-header">
              <h3 className="package-name">Standard Service</h3>
              <p className="package-desc">The complete manufacturer-recommended service every 10,000 km or 1 year.</p>
              <div className="package-scope-badge highlight">
                <i className="fa-solid fa-shield-halved"></i> 6 Months / 10,000 KM Warranty
              </div>
            </div>

            <ul className="package-features">
              <li className="package-feature-item"><i className="fa-solid fa-check"></i> 100% Fully Synthetic Engine Oil</li>
              <li className="package-feature-item"><i className="fa-solid fa-check"></i> Genuine Oil Filter Replacement</li>
              <li className="package-feature-item"><i className="fa-solid fa-check"></i> New Engine Air Filter Replacement</li>
              <li className="package-feature-item"><i className="fa-solid fa-check"></i> Cabin AC Filter Antimicrobial Cleaning</li>
              <li className="package-feature-item"><i className="fa-solid fa-check"></i> Computerized OBD-II Engine Scan</li>
              <li className="package-feature-item"><i className="fa-solid fa-check"></i> Front Brake Pads & Rear Shoes Servicing</li>
              <li className="package-feature-item"><i className="fa-solid fa-check"></i> Coolant, Brake Fluid & Battery Water Top-up</li>
              <li className="package-feature-item"><i className="fa-solid fa-check"></i> Full Body Wash + Deep Interior Vacuum</li>
              <li className="package-feature-item"><i className="fa-solid fa-check"></i> 6-Month / 10,000 KM Warranty</li>
            </ul>

            <button 
              type="button" 
              className="btn btn-primary" 
              onClick={() => onOpenBooking('Standard Service')}
              style={{ width: '100%' }}
            >
              Book Standard Service
            </button>
          </div>

          {/* Comprehensive Care */}
          <div className="package-card">
            <div className="package-header">
              <h3 className="package-name">Comprehensive Service</h3>
              <p className="package-desc">Total renewal covering 60 mechanical, electrical, and suspension checkpoints.</p>
              <div className="package-scope-badge">
                <i className="fa-solid fa-award"></i> 1-Year / 15,000 KM Warranty
              </div>
            </div>

            <ul className="package-features">
              <li className="package-feature-item"><i className="fa-solid fa-check"></i> Everything in Standard Package</li>
              <li className="package-feature-item"><i className="fa-solid fa-check"></i> Fuel Filter Replacement</li>
              <li className="package-feature-item"><i className="fa-solid fa-check"></i> Spark Plug Inspection & Cleaning</li>
              <li className="package-feature-item"><i className="fa-solid fa-check"></i> Complete Brake Oil Fluid Flush</li>
              <li className="package-feature-item"><i className="fa-solid fa-check"></i> Radiator Coolant Complete Flush</li>
              <li className="package-feature-item"><i className="fa-solid fa-check"></i> Throttle Body Deep Cleaning</li>
              <li className="package-feature-item"><i className="fa-solid fa-check"></i> 3D Wheel Alignment & Wheel Balancing</li>
              <li className="package-feature-item"><i className="fa-solid fa-check"></i> 1-Year / 15,000 KM Warranty</li>
            </ul>

            <button 
              type="button" 
              className="btn btn-outline" 
              onClick={() => onOpenBooking('Comprehensive Car Service')}
              style={{ width: '100%' }}
            >
              Book Comprehensive Service
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
