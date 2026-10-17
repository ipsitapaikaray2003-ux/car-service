import React, { useState, useEffect } from 'react';
import confetti from 'canvas-confetti';

export default function BookingModal({ isOpen, onClose, initialService, quoteData, onShowToast }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    car: '',
    service: 'Standard Service',
    hub: 'Main Workshop (Village Rehta Mafi, Thana Dilari, Thakurdwara)',
    date: '',
    time: 'Morning (08:30 AM - 11:00 AM)',
    doorstep: true,
    notes: ''
  });

  useEffect(() => {
    if (initialService) {
      setFormData(prev => ({ ...prev, service: initialService }));
    }
    if (quoteData) {
      const addonsStr = quoteData.addons?.length ? ` | Add-ons: ${quoteData.addons.join(', ')}` : '';
      setFormData(prev => ({
        ...prev,
        car: quoteData.segment || prev.car,
        service: quoteData.service || prev.service,
        notes: `Selected Service: ${quoteData.service || ''}${addonsStr}`
      }));
    }
  }, [initialService, quoteData]);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name.trim() || !formData.phone.trim()) {
      alert('Please fill in your name and phone number.');
      return;
    }

    // Trigger celebratory confetti
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 }
    });

    const text = encodeURIComponent(
      `*New Service Appointment Booking - Multi Brand Car Service Center*\n\n` +
      `👤 *Name:* ${formData.name}\n` +
      `📱 *Phone:* ${formData.phone}\n` +
      `🚗 *Vehicle:* ${formData.car || 'Not specified'}\n` +
      `🔧 *Service:* ${formData.service}\n` +
      `📍 *Workshop Hub:* ${formData.hub}\n` +
      `📅 *Date:* ${formData.date || 'Earliest available'}\n` +
      `⏰ *Time Slot:* ${formData.time}\n` +
      `🚚 *Pickup Requested:* ${formData.doorstep ? 'Yes (Doorstep Pickup & Drop)' : 'No (Direct Workshop Drop)'}\n` +
      (formData.notes ? `📝 *Notes:* ${formData.notes}\n` : '') +
      `\n_Direct Hotline: 90128 62412 (Village Rehta Mafi, Dilari, Thakurdwara, Moradabad)_`
    );

    if (onShowToast) {
      onShowToast('Appointment Confirmed!', 'Connecting with Service Desk via WhatsApp...');
    }

    onClose();

    setTimeout(() => {
      window.open(`https://wa.me/919012862412?text=${text}`, '_blank');
    }, 700);

    setFormData({
      name: '',
      phone: '',
      car: '',
      service: 'Standard Service',
      hub: 'Village Rehta Mafi, Thana Dilari, Thakurdwara, Moradabad',
      date: '',
      time: 'Morning (08:30 AM - 11:00 AM)',
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
          <span className="badge-neon" style={{ marginBottom: '8px' }}>Online Service Booking</span>
          <h2 className="modal-title">Schedule Your Car Service</h2>
          <p className="modal-subtitle">Multi Brand Car Service Center • Moradabad (Hotline: 90128 62412)</p>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="form-grid-2">
            <div className="form-group">
              <label htmlFor="modal-name" className="form-label">Full Name *</label>
              <input 
                type="text" 
                id="modal-name" 
                className="form-input" 
                placeholder="e.g. Ramesh Kumar"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required 
              />
            </div>

            <div className="form-group">
              <label htmlFor="modal-phone" className="form-label">Phone Number *</label>
              <input 
                type="tel" 
                id="modal-phone" 
                className="form-input" 
                placeholder="10-digit mobile number"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                required 
                pattern="[0-9]{10}" 
              />
            </div>
          </div>

          <div className="form-grid-2" style={{ marginTop: '14px' }}>
            <div className="form-group">
              <label htmlFor="modal-car" className="form-label">Car Model & Fuel Type</label>
              <input 
                type="text" 
                id="modal-car" 
                className="form-input" 
                placeholder="e.g. Honda City Petrol or Creta Diesel"
                value={formData.car}
                onChange={(e) => setFormData({ ...formData, car: e.target.value })}
              />
            </div>

            <div className="form-group">
              <label htmlFor="modal-service-select" className="form-label">Service Package *</label>
              <select 
                id="modal-service-select" 
                className="form-select"
                value={formData.service}
                onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                required
              >
                <option value="Standard Service">Standard Periodic Service (Most Popular)</option>
                <option value="Basic Service">Basic Periodic Service</option>
                <option value="Comprehensive Car Service">Comprehensive 60-Point Service</option>
                <option value="Car Full Body Dent Paint">Car Full Body Dent & Paint Booth</option>
                <option value="Panel Dent Paint">Individual Panel Scratch / Dent Paint</option>
                <option value="Premium Ceramic Coating">9H / 10H Ceramic Coating Studio</option>
                <option value="PPF Paint Protection Film">TPU Paint Protection Film (PPF)</option>
                <option value="Premium Car Interior Detailing">Deep Interior Steam Spa</option>
                <option value="OBD-II Computer Engine Scanning">OBD-II Computer Engine Scanning</option>
                <option value="Front Shock Absorber Replacement">Suspension & Shock Absorber Repair</option>
                <option value="Car Clutch Set Replacement">Clutch Plate & Flywheel Repair</option>
                <option value="Car Regular AC Service">Car AC Cooling & Gas Recharge</option>
                <option value="Car Battery Replacement">Battery Replacement & Doorstep Fit</option>
                <option value="Second Hand Car Inspection">120-Point Pre-Purchase Car Inspection</option>
              </select>
            </div>
          </div>

          <div className="form-grid-2" style={{ marginTop: '14px' }}>
            <div className="form-group">
              <label htmlFor="modal-hub-select" className="form-label">Preferred Workshop Hub</label>
              <select 
                id="modal-hub-select" 
                className="form-select"
                value={formData.hub}
                onChange={(e) => setFormData({ ...formData, hub: e.target.value })}
              >
                <option value="Main Workshop (Village Rehta Mafi, Thana Dilari, Thakurdwara)">Main Workshop (Village Rehta Mafi, Thana Dilari, Thakurdwara)</option>
                <option value="Doorstep Pickup in Thakurdwara / Dilari">Doorstep Pickup in Thakurdwara / Dilari</option>
                <option value="Doorstep Pickup in Moradabad City & Bypass">Doorstep Pickup in Moradabad City & Bypass</option>
                <option value="Doorstep Pickup along Kashipur / Surjan Nagar Belt">Doorstep Pickup along Kashipur / Surjan Nagar Belt</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="modal-date" className="form-label">Preferred Date</label>
              <input 
                type="date" 
                id="modal-date" 
                className="form-input"
                value={formData.date}
                onChange={(e) => setFormData({ ...formData, date: e.target.value })} 
              />
            </div>
          </div>

          <div className="form-grid-2" style={{ marginTop: '14px' }}>
            <div className="form-group">
              <label htmlFor="modal-time" className="form-label">Time Slot</label>
              <select 
                id="modal-time" 
                className="form-select"
                value={formData.time}
                onChange={(e) => setFormData({ ...formData, time: e.target.value })}
              >
                <option value="Morning (08:30 AM - 11:00 AM)">Morning (08:30 AM - 11:00 AM) [Recommended]</option>
                <option value="Afternoon (11:00 AM - 02:00 PM)">Afternoon (11:00 AM - 02:00 PM)</option>
                <option value="Evening (02:00 PM - 06:00 PM)">Evening (02:00 PM - 06:00 PM)</option>
              </select>
            </div>

            <div className="form-group" style={{ justifyContent: 'center' }}>
              <label className="form-label">Doorstep Pickup</label>
              <label style={{ display: 'flex', alignItems: 'center', gap: '10px', cursor: 'pointer', color: 'var(--text-primary)', fontSize: '0.9rem', marginTop: '8px' }}>
                <input 
                  type="checkbox" 
                  checked={formData.doorstep}
                  onChange={(e) => setFormData({ ...formData, doorstep: e.target.checked })}
                  style={{ width: '20px', height: '20px', accentColor: 'var(--accent-blue)' }} 
                />
                <span>Yes, arrange doorstep pickup across Moradabad / Thakurdwara</span>
              </label>
            </div>
          </div>

          <div className="form-group" style={{ marginTop: '14px' }}>
            <label htmlFor="modal-notes" className="form-label">Specific Symptoms or Notes (Optional)</label>
            <textarea 
              id="modal-notes" 
              className="form-textarea" 
              rows={2} 
              placeholder="e.g. AC cooling feels weak, mild brake squeal, scratch on left door..."
              value={formData.notes}
              onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
            ></textarea>
          </div>

          <div style={{ marginTop: '24px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <button type="submit" className="btn btn-primary btn-lg" style={{ width: '100%' }}>
              <i className="fa-brands fa-whatsapp"></i>
              <span>Confirm & Connect on WhatsApp</span>
            </button>
            <p style={{ textAlign: 'center', fontSize: '0.78rem', color: 'var(--text-muted)' }}>
              🔒 Your details are safe with us. No spam. A service advisor will confirm slot within 10 minutes.
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}
