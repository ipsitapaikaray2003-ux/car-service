import React, { useState, useMemo } from 'react';

const SEGMENTS = [
  { id: 'hatchback', name: 'Hatchback', example: 'Swift, i20, Tiago, Baleno', multiplier: 1.0 },
  { id: 'sedan', name: 'Sedan', example: 'City, Verna, Dzire, Virtus', multiplier: 1.15 },
  { id: 'suv', name: 'Compact / Mid SUV', example: 'Creta, Brezza, Nexon, Seltos', multiplier: 1.28 },
  { id: 'premium', name: 'Large SUV / Luxury', example: 'Fortuner, XUV700, BMW, Audi', multiplier: 1.6 }
];

const SERVICE_CATALOG = [
  { id: 'basic', name: 'Basic Interim Service (5K KM)', basePrice: 2199, desc: 'Synthetic oil drain, OEM oil filter, fluid top-up & pressure wash' },
  { id: 'standard', name: 'Standard Periodic Care (10K KM)', basePrice: 3699, desc: '100% Fully synthetic oil, new air/oil filters, OBD-II scan, brake check' },
  { id: 'comprehensive', name: 'Comprehensive 60-Point Renewal', basePrice: 5999, desc: 'Bumper-to-bumper deep mechanical renewal, spark plugs, fluids & 1-yr warranty' },
  { id: 'paint-panel', name: 'German Heated Booth Panel Paint', basePrice: 2499, desc: 'Bumper or door panel dent removal, Standox 2K paint, baked at 65°C' },
  { id: 'ceramic', name: '9H Ceramic Coating (3-Yr Shield)', basePrice: 9999, desc: '3-stage swirl correction, dual 9H nano-layer, extreme water beading' },
  { id: 'ac-service', name: 'AC Climate Control & Gas Refill', basePrice: 1499, desc: 'R134a refrigerant recharge, condenser cleaning & ozone cabin treatment' }
];

const ADDONS = [
  { id: 'alignment', name: '3D Laser Wheel Alignment & Balancing', price: 699 },
  { id: 'steam-spa', name: 'Interior Steam Disinfection & Ozone Spa', price: 899 },
  { id: 'engine-flush', name: 'Engine De-carbonizing & Flush Treatment', price: 999 }
];

export default function QuickEstimateSection({ onOpenBooking, onShowToast }) {
  const [selectedSegment, setSelectedSegment] = useState('hatchback');
  const [selectedService, setSelectedService] = useState('standard');
  const [selectedAddons, setSelectedAddons] = useState(['alignment']);
  const [customerPhone, setCustomerPhone] = useState('');
  const [carModel, setCarModel] = useState('');

  // Calculate live price
  const calculation = useMemo(() => {
    const segmentObj = SEGMENTS.find(s => s.id === selectedSegment) || SEGMENTS[0];
    const serviceObj = SERVICE_CATALOG.find(s => s.id === selectedService) || SERVICE_CATALOG[1];
    
    const servicePrice = Math.round(serviceObj.basePrice * segmentObj.multiplier);
    const addonsTotal = selectedAddons.reduce((sum, addonId) => {
      const addon = ADDONS.find(a => a.id === addonId);
      return sum + (addon ? addon.price : 0);
    }, 0);

    const total = servicePrice + addonsTotal;
    const dealerEstimatedPrice = Math.round(total * 1.55);
    const savings = dealerEstimatedPrice - total;

    return {
      servicePrice,
      addonsTotal,
      total,
      dealerEstimatedPrice,
      savings,
      serviceName: serviceObj.name,
      segmentName: segmentObj.name
    };
  }, [selectedSegment, selectedService, selectedAddons]);

  const toggleAddon = (addonId) => {
    setSelectedAddons(prev => 
      prev.includes(addonId) 
        ? prev.filter(id => id !== addonId) 
        : [...prev, addonId]
    );
  };

  const handleBookWithCalculatedPrice = (e) => {
    e.preventDefault();
    if (!customerPhone.trim()) {
      alert('Please enter your 10-digit mobile number.');
      return;
    }

    const addonsText = selectedAddons.length > 0 
      ? selectedAddons.map(id => ADDONS.find(a => a.id === id)?.name).join(', ')
      : 'None';

    const text = encodeURIComponent(
      `*Instant Service Estimate Booking - Multi Brand Car Service Center*\n\n` +
      `🚗 *Vehicle Segment:* ${calculation.segmentName} (${carModel || 'Model Not Specified'})\n` +
      `🛠️ *Primary Service:* ${calculation.serviceName} (₹${calculation.servicePrice.toLocaleString('en-IN')})\n` +
      `➕ *Selected Add-ons:* ${addonsText}\n` +
      `💰 *Estimated Total:* ₹${calculation.total.toLocaleString('en-IN')}\n` +
      `📉 *Dealership Savings:* ~₹${calculation.savings.toLocaleString('en-IN')} (Up to 40% Off)\n` +
      `📞 *Customer Phone:* ${customerPhone}\n\n` +
      `📍 *Workshop:* Village Rehta Mafi, Thana Dilari, Thakurdwara, Moradabad\n` +
      `_Requested from 2026 Instant Pricing Engine_`
    );

    if (onShowToast) {
      onShowToast('Price Locked!', 'Redirecting to WhatsApp Service Advisor with your custom quote...');
    }

    setTimeout(() => {
      window.open(`https://wa.me/919012862412?text=${text}`, '_blank');
    }, 600);
  };

  return (
    <section className="section quick-estimate-section" id="quick-estimate">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Instant Transparent Pricing</span>
          <h2 className="section-title">Configure & Calculate Service Cost</h2>
          <p className="section-desc">
            No hidden fees, no dealership markups. Select your vehicle type and service requirement below 
            for instant transparent pricing with guaranteed 100% genuine OEM parts and warranty.
          </p>
        </div>

        <div className="calc-engine-grid">
          {/* Left Column: Workshop Value Bento & Guarantees */}
          <div className="calc-info-bento">
            <div className="calc-pill-badge">
              <span className="pulse-dot"></span>
              <span>100% Price Transparency • Moradabad Hub</span>
            </div>

            <h3 className="calc-bento-title">Dealership Precision. Direct Fair Pricing.</h3>
            <p className="calc-bento-sub">
              Every job at Multi Brand Car Service Center is logged with computerized diagnostic verification. 
              Enjoy free doorstep valet pickup across Thakurdwara, Dilari, and Moradabad.
            </p>

            <div className="calc-trust-checklist">
              <div className="calc-check-row">
                <div className="calc-check-icon">
                  <i className="fa-solid fa-truck-pickup"></i>
                </div>
                <div>
                  <strong>Free Doorstep Pickup & Drop:</strong>
                  <span>Safe insured valet transit from your home or office across Moradabad district.</span>
                </div>
              </div>

              <div className="calc-check-row">
                <div className="calc-check-icon">
                  <i className="fa-solid fa-shield-halved"></i>
                </div>
                <div>
                  <strong>6 Months / 10,000 KM Warranty:</strong>
                  <span>Rock-solid warranty certificate covering all mechanical repairs and OEM components.</span>
                </div>
              </div>

              <div className="calc-check-row">
                <div className="calc-check-icon">
                  <i className="fa-solid fa-video"></i>
                </div>
                <div>
                  <strong>Live WhatsApp Video Approvals:</strong>
                  <span>Before any extra bolt is touched, you receive HD video clips for your digital thumbs-up.</span>
                </div>
              </div>

              <div className="calc-check-row">
                <div className="calc-check-icon">
                  <i className="fa-solid fa-certificate"></i>
                </div>
                <div>
                  <strong>German Paint Booth & Standox Refinishing:</strong>
                  <span>Dust-free pressurized curing at 65°C for lifetime gloss and zero color mismatch.</span>
                </div>
              </div>
            </div>

            {/* Direct Helpline card */}
            <div className="calc-hotline-card">
              <i className="fa-solid fa-headset calc-hotline-icon"></i>
              <div>
                <span className="calc-hotline-label">Prefer to speak directly with our Master Mechanic?</span>
                <a href="tel:9012862412" className="calc-hotline-number">Call Hotline: 90128 62412</a>
              </div>
            </div>
          </div>

          {/* Right Column: Dynamic Interactive Pricing Calculator */}
          <div className="calculator-widget-card">
            <div className="calculator-card-header">
              <div className="calc-header-title">
                <i className="fa-solid fa-calculator" style={{ color: 'var(--accent-red)' }}></i>
                <span>Instant Service Calculator</span>
              </div>
              <span className="calc-live-pill">Live 2026 Rates</span>
            </div>

            <form onSubmit={handleBookWithCalculatedPrice} className="calc-form">
              {/* Step 1: Vehicle Segment */}
              <div className="calc-step-group">
                <label className="calc-step-label">
                  <span className="step-circle">1</span>
                  <span>Select Vehicle Segment</span>
                </label>
                <div className="calc-segment-pills">
                  {SEGMENTS.map(seg => (
                    <button
                      key={seg.id}
                      type="button"
                      className={`segment-btn ${selectedSegment === seg.id ? 'active' : ''}`}
                      onClick={() => setSelectedSegment(seg.id)}
                    >
                      <span className="segment-btn-name">{seg.name}</span>
                      <span className="segment-btn-ex">{seg.example}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Step 2: Service Selection */}
              <div className="calc-step-group">
                <label className="calc-step-label">
                  <span className="step-circle">2</span>
                  <span>Select Primary Service</span>
                </label>
                <div className="calc-service-list">
                  {SERVICE_CATALOG.map(serv => (
                    <div 
                      key={serv.id}
                      className={`calc-service-option ${selectedService === serv.id ? 'active' : ''}`}
                      onClick={() => setSelectedService(serv.id)}
                    >
                      <div className="calc-radio-circle">
                        {selectedService === serv.id && <span className="calc-radio-dot"></span>}
                      </div>
                      <div className="calc-serv-details">
                        <div className="calc-serv-title-row">
                          <span className="calc-serv-name">{serv.name}</span>
                          <span className="calc-serv-price">
                            ₹{Math.round(serv.basePrice * (SEGMENTS.find(s => s.id === selectedSegment)?.multiplier || 1)).toLocaleString('en-IN')}
                          </span>
                        </div>
                        <p className="calc-serv-desc">{serv.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Step 3: Optional Add-ons */}
              <div className="calc-step-group">
                <label className="calc-step-label">
                  <span className="step-circle">3</span>
                  <span>Recommended Add-ons (Optional)</span>
                </label>
                <div className="calc-addons-grid">
                  {ADDONS.map(addon => {
                    const isChecked = selectedAddons.includes(addon.id);
                    return (
                      <div 
                        key={addon.id} 
                        className={`calc-addon-pill ${isChecked ? 'active' : ''}`}
                        onClick={() => toggleAddon(addon.id)}
                      >
                        <i className={`fa-solid ${isChecked ? 'fa-square-check' : 'fa-square'} addon-checkbox`}></i>
                        <span className="addon-title">{addon.name}</span>
                        <span className="addon-cost">+₹{addon.price}</span>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Car Model & Phone Inputs */}
              <div className="calc-inputs-row">
                <div className="calc-input-wrap">
                  <label className="calc-input-label" htmlFor="calc-car-model">Car Model & Year</label>
                  <input 
                    type="text" 
                    id="calc-car-model"
                    className="calc-input" 
                    placeholder="e.g. Swift 2021 / Creta Diesel" 
                    value={carModel}
                    onChange={(e) => setCarModel(e.target.value)}
                  />
                </div>
                <div className="calc-input-wrap">
                  <label className="calc-input-label" htmlFor="calc-customer-phone">Mobile Number *</label>
                  <input 
                    type="tel" 
                    id="calc-customer-phone"
                    className="calc-input" 
                    placeholder="Enter 10-digit number" 
                    value={customerPhone}
                    onChange={(e) => setCustomerPhone(e.target.value)}
                    required
                  />
                </div>
              </div>

              {/* Live Cost Summary Bar */}
              <div className="calc-total-bar">
                <div className="calc-total-left">
                  <span className="calc-total-title">Estimated Service Cost</span>
                  <div className="calc-total-amount-row">
                    <span className="calc-currency">₹</span>
                    <span className="calc-amount">{calculation.total.toLocaleString('en-IN')}</span>
                    <span className="calc-gst-note">Inclusive of fluids & taxes</span>
                  </div>
                  <div className="calc-savings-badge">
                    <i className="fa-solid fa-arrow-trend-down"></i>
                    <span>Dealership price: ~₹{calculation.dealerEstimatedPrice.toLocaleString('en-IN')} (You save ~₹{calculation.savings.toLocaleString('en-IN')})</span>
                  </div>
                </div>

                <button type="submit" className="btn btn-primary calc-submit-btn">
                  <i className="fa-brands fa-whatsapp"></i>
                  <span>Lock Price & Book via WhatsApp</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
