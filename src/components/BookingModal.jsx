import React, { useState, useEffect } from 'react';
import confetti from 'canvas-confetti';

const SERVICE_PRICING_GUIDE = {
  'Standard Service': { price: '₹3,699', time: '3 - 4 Hours', warranty: '6 Months / 10,000 KM' },
  'Basic Service': { price: '₹2,199', time: '2 Hours', warranty: '3 Months / 5,000 KM' },
  'Comprehensive Service': { price: '₹5,999', time: '5 - 6 Hours', warranty: '1 Year Warranty' },
  'Denting & Painting Booth': { price: '₹2,499 per panel', time: '24 - 48 Hours', warranty: 'Lifetime Gloss Warranty' },
  '9H Ceramic & Detailing': { price: '₹9,999', time: '24 Hours', warranty: '3-Year Hydrophobic Shield' },
  'Computerized Engine Scanning': { price: '₹499', time: '45 Mins', warranty: 'Digital Diagnostic Report' },
  'Brake System Overhaul': { price: '₹1,899', time: '1.5 Hours', warranty: 'Stopping Safety Certified' },
  'Car Air Conditioning Service': { price: '₹1,499', time: '1.5 Hours', warranty: 'Sub-Zero Cooling Guarantee' },
  'Suspension & Steering Repair': { price: 'Inspection-based', time: '3 - 4 Hours', warranty: 'OEM Strut Warranty' },
  '3D Wheel Alignment & Balancing': { price: '₹699', time: '45 Mins', warranty: 'Laser Accuracy Check' }
};

export default function BookingModal({ isOpen, onClose, initialService, quoteData, onShowToast }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    carBrand: '',
    carModel: '',
    service: 'Standard Service',
    hub: 'Village Rehta Mafi Main Workshop Hub (Moradabad)',
    date: '',
    time: 'Morning (08:30 AM - 11:30 AM)',
    doorstep: true,
    notes: ''
  });

  useEffect(() => {
    if (initialService) {
      setFormData(prev => ({ ...prev, service: initialService }));
    }
    if (quoteData) {
      setFormData(prev => ({
        ...prev,
        carModel: quoteData.segment || prev.carModel,
        service: quoteData.service || prev.service,
        notes: quoteData.addons?.length ? `Selected Add-ons: ${quoteData.addons.join(', ')}` : ''
      }));
    }
  }, [initialService, quoteData]);

  if (!isOpen) return null;

  const currentPriceInfo = SERVICE_PRICING_GUIDE[formData.service] || {
    price: 'Fair Estimate on Inspection',
    time: '2 - 4 Hours',
    warranty: 'Warranty Included'
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name.trim() || !formData.phone.trim()) {
      alert('Please fill in your name and phone number.');
      return;
    }

    // Trigger celebratory confetti
    try {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 }
      });
    } catch (_) {}

    const text = encodeURIComponent(
      `*New Service Appointment Booking - Multi Brand Car Service Center*\n\n` +
      `👤 *Customer Name:* ${formData.name}\n` +
      `📱 *Mobile Phone:* ${formData.phone}\n` +
      `🚗 *Vehicle:* ${formData.carBrand} ${formData.carModel || ''}\n` +
      `🛠️ *Service Discipline:* ${formData.service} (Estimated: ${currentPriceInfo.price})\n` +
      `🛡️ *Coverage:* ${currentPriceInfo.warranty}\n` +
      `📍 *Workshop Hub:* ${formData.hub}\n` +
      `📅 *Preferred Date:* ${formData.date || 'Earliest Available'}\n` +
      `⏰ *Time Slot:* ${formData.time}\n` +
      `🚚 *Pickup Requested:* ${formData.doorstep ? 'Yes (Free Valet Pickup & Drop)' : 'No (Direct Self-Drop)'}\n` +
      (formData.notes ? `📝 *Notes/Issues:* ${formData.notes}\n` : '') +
      `\n📍 *Workshop Location:* Village Rehta Mafi, Thana Dilari, Tehsil Thakurdwara, Moradabad (Hotline: 90128 62412)`
    );

    if (onShowToast) {
      onShowToast('Appointment Confirmed!', 'Connecting with Service Desk on WhatsApp...');
    }

    onClose();

    setTimeout(() => {
      window.open(`https://wa.me/919012862412?text=${text}`, '_blank');
    }, 700);

    setFormData({
      name: '',
      phone: '',
      carBrand: '',
      carModel: '',
      service: 'Standard Service',
      hub: 'Village Rehta Mafi Main Workshop Hub (Moradabad)',
      date: '',
      time: 'Morning (08:30 AM - 11:30 AM)',
      doorstep: true,
      notes: ''
    });
  };

  return (
    <div className="modal-overlay open" onClick={onClose} role="dialog" aria-modal="true">
      <div className="modal-card" onClick={(e) => e.stopPropagation()}>
        <button type="button" className="modal-close-btn" onClick={onClose} aria-label="Close modal">
          <i className="fa-solid fa-xmark"></i>
        </button>

        <div className="modal-header">
          <span className="badge-neon" style={{ marginBottom: '8px' }}>
            <span className="pulse-dot"></span>
            <span>Online Booking Desk</span>
          </span>
          <h2 className="modal-title">Schedule Precision Service</h2>
          <p className="modal-subtitle">Multi Brand Car Service Center • Moradabad (Direct Desk: 90128 62412)</p>
        </div>

        {/* Live Service Price & Warranty Banner */}
        <div className="modal-price-strip">
          <div className="modal-price-meta">
            <span className="modal-service-name">{formData.service}</span>
            <span className="modal-service-price">{currentPriceInfo.price}</span>
          </div>
          <div className="modal-badge-group">
            <span className="modal-pill"><i className="fa-solid fa-shield-halved"></i> {currentPriceInfo.warranty}</span>
            <span className="modal-pill"><i className="fa-regular fa-clock"></i> Est. {currentPriceInfo.time}</span>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="modal-form-body">
          <div className="form-grid-2">
            <div className="form-group">
              <label htmlFor="b-name" className="form-label">Full Name *</label>
              <input 
                type="text" 
                id="b-name" 
                className="form-input" 
                placeholder="e.g. Rahul Sharma" 
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required 
              />
            </div>

            <div className="form-group">
              <label htmlFor="b-phone" className="form-label">Phone Number *</label>
              <input 
                type="tel" 
                id="b-phone" 
                className="form-input" 
                placeholder="10-digit mobile number" 
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                required 
              />
            </div>
          </div>

          <div className="form-grid-2">
            <div className="form-group">
              <label htmlFor="b-brand" className="form-label">Car Manufacturer</label>
              <select 
                id="b-brand" 
                className="form-select"
                value={formData.carBrand}
                onChange={(e) => setFormData({ ...formData, carBrand: e.target.value })}
              >
                <option value="">Select Brand</option>
                <option value="Maruti Suzuki">Maruti Suzuki</option>
                <option value="Hyundai">Hyundai</option>
                <option value="Tata Motors">Tata Motors</option>
                <option value="Mahindra">Mahindra</option>
                <option value="Honda">Honda</option>
                <option value="Toyota">Toyota</option>
                <option value="Kia">Kia</option>
                <option value="Volkswagen / Skoda">Volkswagen / Skoda</option>
                <option value="Luxury (BMW / Audi / Benz)">Luxury (BMW / Audi / Benz)</option>
                <option value="Other Brand">Other Brand</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="b-model" className="form-label">Car Model & Year</label>
              <input 
                type="text" 
                id="b-model" 
                className="form-input" 
                placeholder="e.g. Swift 2022 / Scorpio" 
                value={formData.carModel}
                onChange={(e) => setFormData({ ...formData, carModel: e.target.value })}
              />
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="b-service" className="form-label">Selected Service Package</label>
            <select 
              id="b-service" 
              className="form-select"
              value={formData.service}
              onChange={(e) => setFormData({ ...formData, service: e.target.value })}
            >
              <option value="Standard Service">Standard Periodic Service (100% Synthetic Oil + OBD-II Scan)</option>
              <option value="Basic Service">Basic Periodic Service (Oil Change + Fluid Top-up)</option>
              <option value="Comprehensive Service">Comprehensive 60-Point Care (Complete Renewal)</option>
              <option value="Denting & Painting Booth">German Heated Paint Booth (Panel or Full Body)</option>
              <option value="9H Ceramic & Detailing">9H Ceramic Coating & TPU PPF Shield</option>
              <option value="Computerized Engine Scanning">Computerized Engine & Electrical Diagnostic Scan</option>
              <option value="Brake System Overhaul">Brake Pads & Rotor Disc Machining</option>
              <option value="Car Air Conditioning Service">Car Air Conditioning Recovery & Gas Refill</option>
              <option value="Suspension & Steering Repair">Suspension Overhaul & Shock Absorbers</option>
              <option value="3D Wheel Alignment & Balancing">3D Laser Wheel Alignment & Balancing</option>
            </select>
          </div>

          <div className="form-grid-2">
            <div className="form-group">
              <label htmlFor="b-date" className="form-label">Preferred Date</label>
              <input 
                type="date" 
                id="b-date" 
                className="form-input" 
                value={formData.date}
                onChange={(e) => setFormData({ ...formData, date: e.target.value })}
              />
            </div>

            <div className="form-group">
              <label htmlFor="b-time" className="form-label">Preferred Time Slot</label>
              <select 
                id="b-time" 
                className="form-select"
                value={formData.time}
                onChange={(e) => setFormData({ ...formData, time: e.target.value })}
              >
                <option value="Morning (08:30 AM - 11:30 AM)">Morning (08:30 AM - 11:30 AM)</option>
                <option value="Afternoon (11:30 AM - 02:30 PM)">Afternoon (11:30 AM - 02:30 PM)</option>
                <option value="Evening (02:30 PM - 06:30 PM)">Evening (02:30 PM - 06:30 PM)</option>
              </select>
            </div>
          </div>

          {/* Doorstep Valet Pickup Toggle */}
          <div className="form-group" style={{ margin: '14px 0' }}>
            <label className="checkbox-label" style={{ display: 'flex', alignItems: 'center', gap: '10px', cursor: 'pointer' }}>
              <input 
                type="checkbox" 
                checked={formData.doorstep} 
                onChange={(e) => setFormData({ ...formData, doorstep: e.target.checked })}
                style={{ width: '18px', height: '18px', accentColor: 'var(--accent-red)' }}
              />
              <span style={{ fontSize: '0.95rem', color: 'var(--text-primary)' }}>
                <strong>Request Free Doorstep Pickup & Drop</strong> (Available in Thakurdwara, Dilari, Moradabad)
              </span>
            </label>
          </div>

          <div className="form-group">
            <label htmlFor="b-notes" className="form-label">Specific Car Issues or Notes (Optional)</label>
            <textarea 
              id="b-notes" 
              className="form-input" 
              rows="2"
              placeholder="e.g. Squeaking noise when braking, AC not cooling fast, dent on left fender..."
              value={formData.notes}
              onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
            ></textarea>
          </div>

          <button type="submit" className="btn btn-primary" style={{ width: '100%', marginTop: '10px' }}>
            <i className="fa-brands fa-whatsapp"></i>
            <span>Confirm Booking via WhatsApp (90128 62412)</span>
          </button>
        </form>
      </div>
    </div>
  );
}
