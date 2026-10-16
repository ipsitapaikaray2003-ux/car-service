import React from 'react';

export default function Locations() {
  const mapSearchQuery = encodeURIComponent('Village Rehta Mafi, Dilari, Thakurdwara, Moradabad, Uttar Pradesh');

  return (
    <section className="section locations-section" id="locations">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Workshop Location & Map</span>
          <h2 className="section-title">Visit Our Multi-Brand Workshop</h2>
          <p className="section-desc">
            Conveniently situated in Village Rehta Mafi, Thana Dilari, Tehsil Thakurdwara, District Moradabad. Equipped with multi-brand computerized scanning, hydraulic service bays, and German heated paint booth.
          </p>
        </div>

        {/* Location Details & Map Layout */}
        <div className="workshop-location-layout">
          {/* Workshop Details Card */}
          <div className="workshop-info-card">
            <div className="location-badge">
              <span className="pulse-dot"></span>
              <span>Primary Workshop Hub • Open 7 Days</span>
            </div>

            <h3 className="workshop-main-title">Multi Brand Car Service Center</h3>
            <p className="workshop-tagline">Authorized Multi-Brand Automotive Service & Detailing Studio</p>

            <div className="workshop-details-list">
              <div className="workshop-detail-item">
                <div className="detail-icon-circ">
                  <i className="fa-solid fa-location-dot"></i>
                </div>
                <div>
                  <strong className="detail-label">Full Address:</strong>
                  <p className="detail-value">
                    Village Rehta Mafi, Thana Dilari,<br />
                    Tehsil Thakurdwara, District Moradabad,<br />
                    Uttar Pradesh — Pin: 244401
                  </p>
                </div>
              </div>

              <div className="workshop-detail-item">
                <div className="detail-icon-circ" style={{ color: 'var(--accent-crimson)' }}>
                  <i className="fa-solid fa-phone-volume"></i>
                </div>
                <div>
                  <strong className="detail-label">Direct Hotline:</strong>
                  <p className="detail-value">
                    <a href="tel:9012862412" className="phone-highlight-link">
                      90128 62412
                    </a>
                  </p>
                </div>
              </div>

              <div className="workshop-detail-item">
                <div className="detail-icon-circ" style={{ color: '#25D366' }}>
                  <i className="fa-brands fa-whatsapp"></i>
                </div>
                <div>
                  <strong className="detail-label">WhatsApp Bookings & Estimates:</strong>
                  <p className="detail-value">
                    <a href="https://wa.me/919012862412?text=Hello%20Multi%20Brand%20Car%20Service%20Center%20Rehta%20Mafi,%20I%20would%20like%20to%20book%20a%20car%20service." target="_blank" rel="noopener noreferrer" className="phone-highlight-link">
                      90128 62412
                    </a>
                  </p>
                </div>
              </div>

              <div className="workshop-detail-item">
                <div className="detail-icon-circ">
                  <i className="fa-regular fa-clock"></i>
                </div>
                <div>
                  <strong className="detail-label">Working Hours:</strong>
                  <p className="detail-value">
                    Monday – Sunday: 8:00 AM – 9:00 PM (Open All 7 Days)
                  </p>
                </div>
              </div>

              <div className="workshop-detail-item">
                <div className="detail-icon-circ" style={{ color: 'var(--success-green)' }}>
                  <i className="fa-solid fa-truck-pickup"></i>
                </div>
                <div>
                  <strong className="detail-label">Doorstep Pickup & SOS Coverage:</strong>
                  <p className="detail-value">
                    Thakurdwara, Dilari, Moradabad, Kashipur Road, Surjan Nagar, Kanth & nearby rural belts.
                  </p>
                </div>
              </div>
            </div>

            <div className="workshop-cta-actions">
              <a href="tel:9012862412" className="btn btn-primary" style={{ flex: 1 }}>
                <i className="fa-solid fa-phone"></i>
                <span>Call 90128 62412</span>
              </a>
              <a 
                href={`https://www.google.com/maps/search/?api=1&query=${mapSearchQuery}`} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn btn-outline"
                style={{ flex: 1 }}
              >
                <i className="fa-solid fa-diamond-turn-right"></i>
                <span>Get Directions</span>
              </a>
            </div>
          </div>

          {/* Interactive Google Map Embed */}
          <div className="workshop-map-container">
            <div className="map-glass-header">
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span className="live-dot-pulse"></span>
                <strong>Live GPS Map:</strong> Village Rehta Mafi, Dilari, Moradabad
              </div>
              <a 
                href={`https://www.google.com/maps/search/?api=1&query=${mapSearchQuery}`} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="map-fullscreen-btn"
              >
                <i className="fa-solid fa-arrow-up-right-from-square"></i> Open Google Maps
              </a>
            </div>

            <div className="map-iframe-frame">
              <iframe
                title="Multi Brand Car Service Center - Rehta Mafi, Dilari, Thakurdwara, Moradabad Map"
                src="https://maps.google.com/maps?q=Rehta+Mafi,+Dilari,+Thakurdwara,+Moradabad,+Uttar+Pradesh&t=&z=13&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="440"
                style={{ border: 0, display: 'block', filter: 'contrast(1.05) saturate(1.1)' }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
