import React, { useState } from 'react';

export default function QuickEstimateSection({ onOpenBooking, onShowToast }) {
  const [formData, setFormData] = useState({
    brand: '',
    model: '',
    service: 'Standard Periodic Service',
    phone: ''
  });

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!formData.phone) {
      alert('Please enter your phone number.');
      return;
    }

    const text = encodeURIComponent(
      `*Quick Quote Request - Multi Brand Car Service Center*\n\n` +
      `🚗 *Car Brand:* ${formData.brand || 'Multi-Brand'}\n` +
      `🚘 *Model/Year:* ${formData.model || 'Standard Variant'}\n` +
      `🛠️ *Requested Service:* ${formData.service}\n` +
      `📞 *Customer Phone:* ${formData.phone}\n\n` +
      `_Requested from Quick Booking Portal_`
    );

    if (onShowToast) {
      onShowToast('Quote Request Received!', 'Connecting with Service Advisor on WhatsApp...');
    }

    setTimeout(() => {
      window.open(`https://wa.me/919012862412?text=${text}`, '_blank');
    }, 600);

    setFormData({ brand: '', model: '', service: 'Standard Periodic Service', phone: '' });
  };

  return (
    <section className="section quick-estimate-section" id="quick-estimate">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Instant Booking & Overview</span>
          <h2 className="section-title">Multi Brand Car Service Center</h2>
          <p className="section-desc">
            Precision engineering, computerized diagnostics, certified master mechanics, and German heated paint booth refinishing in Village Rehta Mafi, Dilari, Thakurdwara, Moradabad.
          </p>
        </div>

        <div className="quick-estimate-grid">
          {/* Left Column: Workshop Pillars & Features */}
          <div className="quick-estimate-info">
            <div className="badge-strip" style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', marginBottom: '20px' }}>
              <span className="badge-neon">
                <i className="fa-solid fa-award"></i> Multi Brand Precision
              </span>
              <span className="badge-amber">
                <i className="fa-solid fa-phone"></i> Hotline: 90128 62412
              </span>
            </div>

            <h3 style={{ fontSize: '1.8rem', color: '#fff', marginBottom: '14px', lineHeight: 1.25 }}>
              Expert Attention Tailored to Every Make & Model
            </h3>

            <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', lineHeight: 1.7, marginBottom: '24px' }}>
              At Multi Brand Car Service Center, we treat every vehicle with dealership-grade precision without the dealership markup. From routine logbook servicing to complex transmission, suspension, and high-gloss ceramic restorations in Moradabad district.
            </p>

            <div className="features-checklist">
              <div className="hero-check-item">
                <span className="hero-check-icon"><i className="fa-solid fa-check"></i></span>
                <div>
                  <strong style={{ color: '#fff' }}>Free Doorstep Pickup & Drop:</strong> Available across Thakurdwara, Dilari, Rehta Mafi, Moradabad, Kashipur Road & nearby belts.
                </div>
              </div>
              <div className="hero-check-item">
                <span className="hero-check-icon"><i className="fa-solid fa-check"></i></span>
                <div>
                  <strong style={{ color: '#fff' }}>6-Month / 10,000 KM Warranty:</strong> Genuine peace of mind on all mechanical repairs and spare parts.
                </div>
              </div>
              <div className="hero-check-item">
                <span className="hero-check-icon"><i className="fa-solid fa-check"></i></span>
                <div>
                  <strong style={{ color: '#fff' }}>100% Genuine OEM / OES Spares:</strong> Shell, Mobil 1, Bosch, Valeo, Brembo, and certified parts.
                </div>
              </div>
              <div className="hero-check-item">
                <span className="hero-check-icon"><i className="fa-solid fa-check"></i></span>
                <div>
                  <strong style={{ color: '#fff' }}>Live WhatsApp Video Reports:</strong> Complete digital transparency before any parts are replaced.
                </div>
              </div>
            </div>

            <div style={{ display: 'flex', gap: '16px', marginTop: '30px', flexWrap: 'wrap' }}>
              <button 
                type="button" 
                className="btn btn-primary btn-lg"
                onClick={() => onOpenBooking('Standard Service')}
              >
                <i className="fa-regular fa-calendar-check"></i>
                <span>Schedule Service Now</span>
              </button>
              <a href="tel:9012862412" className="btn btn-outline btn-lg" style={{ fontFamily: 'var(--font-mono)' }}>
                <i className="fa-solid fa-phone"></i>
                <span>Call 90128 62412</span>
              </a>
            </div>
          </div>

          {/* Right Column: Instant Quote Form */}
          <div className="quick-estimate-card">
            <div className="widget-header">
              <div className="widget-title">
                <span>Fast Service Estimate</span>
                <span className="badge-green">Instant WhatsApp Quote</span>
              </div>
              <p className="widget-subtitle">Connect with our master mechanic for your specific car in seconds</p>
            </div>

            <form className="widget-form" onSubmit={handleFormSubmit}>
              <div className="form-group">
                <label htmlFor="qe-brand" className="form-label">Car Manufacturer</label>
                <select 
                  id="qe-brand" 
                  className="form-select" 
                  value={formData.brand}
                  onChange={(e) => setFormData({ ...formData, brand: e.target.value })}
                  required
                >
                  <option value="" disabled>Select Your Car Brand</option>
                  <option value="Maruti Suzuki">Maruti Suzuki</option>
                  <option value="Hyundai">Hyundai</option>
                  <option value="Tata Motors">Tata Motors</option>
                  <option value="Mahindra">Mahindra</option>
                  <option value="Honda">Honda</option>
                  <option value="Toyota">Toyota</option>
                  <option value="Volkswagen">Volkswagen</option>
                  <option value="Skoda">Skoda</option>
                  <option value="Kia">Kia</option>
                  <option value="MG Motors">MG Motors</option>
                  <option value="BMW">BMW</option>
                  <option value="Mercedes-Benz">Mercedes-Benz</option>
                  <option value="Audi">Audi</option>
                  <option value="Other">Other Multi-Brand Car</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="qe-model" className="form-label">Car Model & Year</label>
                <input 
                  type="text" 
                  id="qe-model" 
                  className="form-input" 
                  placeholder="e.g. Swift VXI or Creta Diesel 2021"
                  value={formData.model}
                  onChange={(e) => setFormData({ ...formData, model: e.target.value })}
                  required 
                />
              </div>

              <div className="form-group">
                <label htmlFor="qe-service" className="form-label">Desired Service</label>
                <select 
                  id="qe-service" 
                  className="form-select"
                  value={formData.service}
                  onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                  required
                >
                  <option value="Standard Periodic Service">Standard Periodic Service (Recommended)</option>
                  <option value="Basic Service">Basic Routine Maintenance</option>
                  <option value="Comprehensive 60-Point Service">Comprehensive 60-Point Service</option>
                  <option value="Ceramic Coating / Detailing">9H Ceramic Coating & Detailing</option>
                  <option value="Bumper / Panel Dent & Paint">Denting & Painting Booth</option>
                  <option value="AC Cooling & Gas Refill">AC Cooling & Gas Overhaul</option>
                  <option value="Suspension Noise Inspection">Suspension & Steering Overhaul</option>
                  <option value="Clutch / Brake Replacement">Brake & Clutch Repair</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="qe-phone" className="form-label">Your Phone Number</label>
                <input 
                  type="tel" 
                  id="qe-phone" 
                  className="form-input" 
                  placeholder="Enter 10-digit mobile number"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  required 
                  pattern="[0-9]{10}" 
                />
              </div>

              <button type="submit" className="btn btn-primary" style={{ width: '100%', padding: '14px' }}>
                <i className="fa-solid fa-bolt"></i>
                <span>Get Instant WhatsApp Estimate</span>
              </button>

              <div className="widget-perks-row">
                <div className="widget-perk-item">
                  <i className="fa-solid fa-shield-halved" style={{ color: 'var(--neon-cyan)' }}></i>
                  <span>Zero Hidden Costs</span>
                </div>
                <div className="widget-perk-item">
                  <i className="fa-solid fa-clock-rotate-left" style={{ color: 'var(--amber-gold)' }}></i>
                  <span>Same Day Delivery</span>
                </div>
                <div className="widget-perk-item">
                  <i className="fa-solid fa-truck" style={{ color: 'var(--success-green)' }}></i>
                  <span>Free Pickup</span>
                </div>
              </div>
            </form>
          </div>
        </div>

        {/* Stats Counter Strip */}
        <div className="hero-stats-strip" style={{ marginTop: '50px' }}>
          <div className="stat-item">
            <div className="stat-number">10,000<span>+</span></div>
            <div className="stat-label">Cars Serviced in Moradabad Region</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">100<span>%</span></div>
            <div className="stat-label">Genuine OEM / OES Spares</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">1<span></span></div>
            <div className="stat-label">Hi-Tech Multi-Brand Facility</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">4.9<span>★</span></div>
            <div className="stat-label">Customer Satisfaction Rating</div>
          </div>
        </div>
      </div>
    </section>
  );
}
