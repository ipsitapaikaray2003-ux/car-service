import React from 'react';

export default function Footer({ onOpenBooking }) {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          {/* Col 1: Brand & About */}
          <div className="footer-col">
            <div className="logo-brand" style={{ marginBottom: '6px' }}>
              <div className="logo-badge-wrapper" style={{ width: '56px', height: '56px' }}>
                <img src="/logo.png" alt="Multi Brand Car Service Center Logo" className="logo-badge-img" />
              </div>
              <div className="logo-text-group">
                <span className="logo-title" style={{ fontSize: '1.15rem' }}>Multi Brand Car Service Center</span>
                <span className="logo-sub">Precision Automotive Care</span>
              </div>
            </div>
            <p className="footer-desc">
              Moradabad district's premier destination for multi-brand automotive care, computerized precision diagnostics, German-finish paint booth, and studio ceramic detailing. Driven by excellence, powered by trust.
            </p>
            <div className="footer-contact-items">
              <a href="tel:9012862412" className="footer-contact-link">
                <i className="fa-solid fa-phone" style={{ color: 'var(--accent-crimson)' }}></i>
                <span>Direct Hotline: <strong style={{ color: '#fff', fontSize: '1.1rem' }}>90128 62412</strong></span>
              </a>
              <a href="https://wa.me/919012862412" target="_blank" rel="noopener noreferrer" className="footer-contact-link">
                <i className="fa-brands fa-whatsapp" style={{ color: '#25D366' }}></i>
                <span>WhatsApp Desk: 90128 62412</span>
              </a>
              <a href="mailto:service@multibrandcarservice.com" className="footer-contact-link">
                <i className="fa-solid fa-envelope" style={{ color: 'var(--accent-gold)' }}></i>
                <span>service@multibrandcarservice.com</span>
              </a>
            </div>
          </div>

          {/* Col 2: Services */}
          <div className="footer-col">
            <h4 className="footer-col-title">Our Services</h4>
            <ul className="footer-links-list">
              <li className="footer-link-item"><a href="#departments">Standard Car Service</a></li>
              <li className="footer-link-item"><a href="#departments">Denting & Painting Booth</a></li>
              <li className="footer-link-item"><a href="#departments">9H Ceramic & Graphene Coating</a></li>
              <li className="footer-link-item"><a href="#departments">Paint Protection Film (PPF)</a></li>
              <li className="footer-link-item"><a href="#departments">OBD-II Computer Scanning</a></li>
              <li className="footer-link-item"><a href="#departments">Suspension & Steering Overhaul</a></li>
              <li className="footer-link-item"><a href="#departments">Transmission & Clutch Set</a></li>
              <li className="footer-link-item"><a href="#departments">Car Air Conditioning Refill</a></li>
            </ul>
          </div>

          {/* Col 3: Quick Links */}
          <div className="footer-col">
            <h4 className="footer-col-title">Company & Links</h4>
            <ul className="footer-links-list">
              <li className="footer-link-item"><a href="#home">Home</a></li>
              <li className="footer-link-item"><a href="#quick-estimate">Quick Estimate</a></li>
              <li className="footer-link-item"><a href="#packages">Service Packages</a></li>
              <li className="footer-link-item"><a href="#service-steps">6-Stage Service Steps</a></li>
              <li className="footer-link-item"><a href="#restoration">Detailing Gallery</a></li>
              <li className="footer-link-item"><a href="#why-us">Why Choose Us</a></li>
              <li className="footer-link-item"><a href="#locations">Village Rehta Mafi Hub</a></li>
              <li className="footer-link-item"><a href="#locations">Interactive Google Map</a></li>
            </ul>
          </div>

          {/* Col 4: Timings & Address */}
          <div className="footer-col">
            <h4 className="footer-col-title">Workshop Address & Hours</h4>
            <p className="footer-desc">
              <strong>Main Workshop Hub:</strong><br />
              Village Rehta Mafi, Thana Dilari<br />
              Tehsil Thakurdwara, Dist. Moradabad, UP<br />
              Mon – Sun: 8:00 AM – 9:00 PM (Daily Open)
            </p>
            <p className="footer-desc" style={{ marginTop: '4px' }}>
              <strong>Coverage Area:</strong><br />
              Thakurdwara, Dilari, Moradabad, Kashipur Road & nearby rural belts.
            </p>
            <button 
              type="button" 
              className="btn btn-primary" 
              onClick={() => onOpenBooking('Standard Service')}
              style={{ marginTop: '10px', width: '100%' }}
            >
              <i className="fa-regular fa-calendar-check"></i> Book Doorstep Service
            </button>
          </div>
        </div>

        <div className="footer-bottom">
          <div>Copyright © 2026 Multi Brand Car Service Center. All rights reserved.</div>
          <div className="footer-developer-credit">
            <span>Developed by </span>
            <a 
              href="https://www.qubnixtechnology.com/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="developer-agency-link"
            >
              <i className="fa-solid fa-code"></i> Qubnix Technology
            </a>
          </div>
          <div style={{ display: 'flex', gap: '14px', alignItems: 'center' }}>
            <span>Village Rehta Mafi, Moradabad, UP</span>
            <span>•</span>
            <a href="tel:9012862412" style={{ color: 'var(--accent-red)', fontWeight: 700, textDecoration: 'none' }}>
              <i className="fa-solid fa-phone"></i> 90128 62412
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
