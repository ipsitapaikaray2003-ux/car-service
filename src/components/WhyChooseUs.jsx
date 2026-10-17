import React from 'react';

const WHY_CARDS = [
  {
    icon: 'fa-certificate',
    title: '100% Genuine OEM Spares',
    badge: 'Certified Parts',
    desc: 'We source certified lubricants and genuine spare parts directly from authorized distributors including Bosch, Shell, Mobil 1, Valeo, and Brembo.'
  },
  {
    icon: 'fa-shield-halved',
    title: '6-Month / 10,000 KM Warranty',
    badge: 'Guaranteed Peace of Mind',
    desc: 'Every mechanical repair and spare part replacement is backed by our rock-solid guarantee. Drive through Moradabad and regional highways with complete confidence.'
  },
  {
    icon: 'fa-truck-fast',
    title: 'Free Contactless Pickup & Drop',
    badge: 'Doorstep Convenience',
    desc: 'Save valuable time. Our insured pilots pick up your car directly from your residence or office across Thakurdwara, Dilari, and Moradabad.'
  },
  {
    icon: 'fa-video',
    title: 'Live WhatsApp Video Approvals',
    badge: '100% Transparency',
    desc: 'Complete digital transparency at every step. You receive photos and video inspection clips before any additional work or parts are approved.'
  },
  {
    icon: 'fa-temperature-arrow-up',
    title: 'German Heated Paint Booth (65°C)',
    badge: 'Showroom Finish',
    desc: 'Our pressurized booth prevents dust specks and bakes paint at factory temperatures for unmatched depth, scratch resistance, and lifetime gloss.'
  },
  {
    icon: 'fa-users-gear',
    title: 'Multi-Brand Certified Master Technicians',
    badge: 'Expert Master Guild',
    desc: 'Trained master mechanics with specialized tools for European, Japanese, Korean, and domestic platforms ensuring factory-standard precision.'
  }
];

export default function WhyChooseUs() {
  return (
    <section className="section why-us-section" id="why-us">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Precision Service Advantage</span>
          <h2 className="section-title">Built On Trust, Driven By Excellence</h2>
          <p className="section-desc">
            We don’t just fix cars — we elevate their performance, aesthetics, and longevity with dealership-level precision at up to 40% lower costs.
          </p>
        </div>

        <div className="why-us-grid">
          {WHY_CARDS.map((card, idx) => (
            <div className="why-card" key={idx}>
              <div className="why-card-top">
                <div className="why-icon-circle">
                  <i className={`fa-solid ${card.icon}`}></i>
                </div>
                <span className="why-card-badge">{card.badge}</span>
              </div>
              <h3 className="why-card-title">{card.title}</h3>
              <p className="why-card-desc">{card.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
