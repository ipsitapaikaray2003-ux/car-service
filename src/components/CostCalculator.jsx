import React, { useState, useMemo } from 'react';

const PRICING_CONFIG = {
  segments: {
    hatchback: { name: 'Hatchback', examples: 'Swift, i20, Polo, Baleno', multiplier: 1.0 },
    sedan: { name: 'Sedan', examples: 'City, Verna, Ciaz, Slavia', multiplier: 1.25 },
    suv: { name: 'Compact SUV', examples: 'Creta, Seltos, Nexon, Brezza', multiplier: 1.35 },
    luxury: { name: 'Luxury / Supercar', examples: 'BMW, Audi, Benz, Porsche', multiplier: 2.1 }
  },
  services: {
    standard: { name: 'Standard Service (Recommended)', basePrice: 3999, time: '3 - 4 Hours', warranty: '6 Months / 10,000 KM' },
    basic: { name: 'Basic Periodic Care', basePrice: 2499, time: '2 - 3 Hours', warranty: '3 Months / 5,000 KM' },
    comprehensive: { name: 'Comprehensive 60-Point Care', basePrice: 5999, time: '5 - 6 Hours', warranty: '1 Year / 15,000 KM' },
    ceramic: { name: '9H Ceramic Detailing Studio', basePrice: 9999, time: '24 Hours', warranty: '2 to 3 Years' },
    denting: { name: 'Panel Dent & Paint Booth', basePrice: 2200, time: '24 - 48 Hours', warranty: 'Lifetime Paint Gloss' },
    ac: { name: 'AC System Overhaul', basePrice: 2899, time: '2 Hours', warranty: '6 Months' }
  },
  addons: {
    synthetic_oil: { name: 'Synthetic 5W-40 Oil Upgrade', price: 950 },
    interior_spa: { name: 'Deep Interior Steam Spa', price: 1200 },
    brake_resurface: { name: 'Brake Disc Rotor Machining', price: 850 },
    engine_decarb: { name: 'Engine Carbon Cleaning', price: 1400 },
    wheel_alignment: { name: '3D Alignment & Wheel Balancing', price: 650 },
    ac_evaporator: { name: 'AC Evaporator Sanitizer', price: 600 }
  }
};

export default function CostCalculator({ onOpenBookingWithQuote }) {
  const [segment, setSegment] = useState('hatchback');
  const [serviceKey, setServiceKey] = useState('standard');
  const [selectedAddons, setSelectedAddons] = useState(['synthetic_oil']);

  const toggleAddon = (key) => {
    if (selectedAddons.includes(key)) {
      setSelectedAddons(selectedAddons.filter(k => k !== key));
    } else {
      setSelectedAddons([...selectedAddons, key]);
    }
  };

  const calculation = useMemo(() => {
    const seg = PRICING_CONFIG.segments[segment];
    const serv = PRICING_CONFIG.services[serviceKey];
    const baseCalc = Math.round(serv.basePrice * seg.multiplier);

    let addonsSum = 0;
    selectedAddons.forEach(key => {
      if (PRICING_CONFIG.addons[key]) {
        addonsSum += PRICING_CONFIG.addons[key].price;
      }
    });

    const total = baseCalc + addonsSum;

    return {
      segmentName: seg.name,
      serviceName: serv.name,
      baseCalc,
      addonsSum,
      total,
      time: serv.time,
      warranty: serv.warranty
    };
  }, [segment, serviceKey, selectedAddons]);

  const handleBookQuote = () => {
    if (onOpenBookingWithQuote) {
      onOpenBookingWithQuote({
        segment: PRICING_CONFIG.segments[segment].name,
        service: PRICING_CONFIG.services[serviceKey].name,
        addons: selectedAddons.map(k => PRICING_CONFIG.addons[k]?.name).filter(Boolean),
        total: calculation.total,
        warranty: calculation.warranty
      });
    }
  };

  return (
    <section className="section calculator-section" id="calculator">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Interactive Estimator</span>
          <h2 className="section-title">Calculate Your Exact Service Cost</h2>
          <p className="section-desc">Choose your car segment and customize services to get a real-time price quotation immediately.</p>
        </div>

        <div className="calculator-wrapper">
          {/* Controls Column */}
          <div className="calc-controls">
            {/* Step 1: Segment */}
            <div>
              <div className="calc-step-title">
                <span className="calc-step-num">1</span>
                <span>Select Your Car Segment</span>
              </div>
              <div className="segment-selector-grid">
                {Object.keys(PRICING_CONFIG.segments).map((key) => {
                  const s = PRICING_CONFIG.segments[key];
                  return (
                    <div 
                      key={key}
                      className={`segment-btn ${segment === key ? 'active' : ''}`}
                      onClick={() => setSegment(key)}
                    >
                      <div className="segment-icon">
                        <i className={`fa-solid ${key === 'luxury' ? 'fa-gem' : key === 'suv' ? 'fa-truck-monster' : key === 'sedan' ? 'fa-car' : 'fa-car-side'}`}></i>
                      </div>
                      <div className="segment-label">{s.name}</div>
                      <div className="segment-examples">{s.examples}</div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Step 2: Main Service */}
            <div>
              <div className="calc-step-title">
                <span className="calc-step-num">2</span>
                <span>Choose Main Service Package</span>
              </div>
              <div className="service-type-grid">
                {Object.keys(PRICING_CONFIG.services).map((key) => {
                  const serv = PRICING_CONFIG.services[key];
                  return (
                    <div 
                      key={key}
                      className={`service-type-btn ${serviceKey === key ? 'active' : ''}`}
                      onClick={() => setServiceKey(key)}
                    >
                      <div className="type-btn-name">{serv.name}</div>
                      <div className="type-btn-desc">Base: ₹{serv.basePrice.toLocaleString('en-IN')}</div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Step 3: Addons */}
            <div>
              <div className="calc-step-title">
                <span className="calc-step-num">3</span>
                <span>Add Performance & Protection Upgrades</span>
              </div>
              <div className="addons-grid">
                {Object.keys(PRICING_CONFIG.addons).map((key) => {
                  const addon = PRICING_CONFIG.addons[key];
                  const isChecked = selectedAddons.includes(key);
                  return (
                    <div 
                      key={key}
                      className={`addon-card ${isChecked ? 'selected' : ''}`}
                      onClick={() => toggleAddon(key)}
                    >
                      <div className="addon-info">
                        <input 
                          type="checkbox" 
                          className="addon-checkbox" 
                          checked={isChecked}
                          onChange={() => {}} // handled by parent div
                          aria-label={addon.name}
                        />
                        <div>
                          <div className="addon-name">{addon.name}</div>
                          <div className="addon-price">+₹{addon.price.toLocaleString('en-IN')}</div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Summary Sidebar */}
          <div className="calc-summary">
            <div>
              <div className="summary-header">
                <div className="summary-title">Estimate Summary</div>
                <div className="summary-badge-strip">
                  <span className="badge-neon">{calculation.warranty}</span>
                </div>
              </div>

              <div className="summary-lines">
                <div className="summary-line">
                  <span>Selected Vehicle:</span>
                  <span className="summary-line-val">{calculation.segmentName}</span>
                </div>
                <div className="summary-line">
                  <span>Main Package:</span>
                  <span className="summary-line-val">{calculation.serviceName.split(' (')[0]}</span>
                </div>
                <div className="summary-line">
                  <span>Base Package Cost:</span>
                  <span className="summary-line-val">₹{calculation.baseCalc.toLocaleString('en-IN')}</span>
                </div>
                <div className="summary-line">
                  <span>Add-ons Total:</span>
                  <span className="summary-line-val">+₹{calculation.addonsSum.toLocaleString('en-IN')}</span>
                </div>
                <div className="summary-line">
                  <span>Estimated Time:</span>
                  <span className="summary-line-val">{calculation.time}</span>
                </div>
                <div className="summary-line">
                  <span>Doorstep Pickup & Drop:</span>
                  <span className="summary-line-val" style={{ color: 'var(--success-green)' }}>FREE in Bangalore</span>
                </div>
              </div>
            </div>

            <div>
              <div className="summary-total-box">
                <div className="total-label">Total Estimated Investment</div>
                <div className="total-amount">₹{calculation.total.toLocaleString('en-IN')}</div>
                <div className="total-tax-note">Includes OEM filters, fluids, labor & GST • No hidden fees</div>
              </div>

              <div className="summary-cta-group">
                <button 
                  type="button" 
                  className="btn btn-primary btn-lg" 
                  style={{ width: '100%' }}
                  onClick={handleBookQuote}
                >
                  <i className="fa-regular fa-calendar-check"></i>
                  <span>Book This Estimated Quote</span>
                </button>
                <a 
                  href={`https://wa.me/919012862412?text=${encodeURIComponent(
                    `*Estimated Quote - Multi Brand Car Service Center*\n\n` +
                    `🚗 *Segment:* ${calculation.segmentName}\n` +
                    `🔧 *Service:* ${calculation.serviceName}\n` +
                    `💰 *Estimated Total:* ₹${calculation.total.toLocaleString('en-IN')}\n\n` +
                    `Please check slot availability for my vehicle.`
                  )}`} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="btn btn-whatsapp" 
                  style={{ width: '100%' }}
                >
                  <i className="fa-brands fa-whatsapp"></i>
                  <span>Lock Estimate on WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
