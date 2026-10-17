import React, { useState } from 'react';

const BENTO_SERVICES = [
  {
    id: 'paint-booth',
    isHero: true,
    category: 'Restoration & Bodywork',
    title: 'German Heated Paint Booth (Bake at 65°C)',
    badge: 'Lifetime Gloss Warranty',
    image: '/images/paint_booth.jpg',
    tagline: 'Flawless OEM factory finish in our dust-free pressurized negative draft chamber.',
    features: [
      'Digital spectrophotometer exact color shade matching',
      'Standox & PPG European 2K clear coats',
      'Panel dent pulling & seamless bumper blending',
      'High-bake curing for scratch & UV resistance'
    ],
    bookingService: 'Denting & Painting Booth'
  },
  {
    id: 'ceramic-detailing',
    isHero: true,
    category: 'Studio Detailing',
    title: '9H / 10H Ceramic Coating & TPU PPF',
    badge: '3-Year Hydrophobic Shield',
    image: '/images/ceramic_polish_real.jpg',
    tagline: 'Permanent nano-ceramic crystalline barrier with liquid mirror reflections.',
    features: [
      '3-stage swirl & scratch paint correction',
      '190+ micron self-healing optical TPU film',
      'Extreme lotus hydrophobic water beading',
      'Alloy wheels, glass & trim ceramic protection'
    ],
    bookingService: '9H Ceramic & Detailing'
  },
  {
    id: 'periodic-maintenance',
    isHero: false,
    category: 'Preventative Care',
    title: 'Periodic Logbook Service',
    badge: 'Recommended Every 10,000 KM',
    image: '/images/engine_oil_service.jpg',
    tagline: 'Comprehensive scheduled service with 100% genuine synthetic fluids.',
    features: [
      'Fully synthetic motor oil & OEM filter',
      'Air & AC filter ultrasonic cleaning',
      '60-point vital multi-point mechanical inspection'
    ],
    bookingService: 'Standard Periodic Service'
  },
  {
    id: 'obd-diagnostics',
    isHero: false,
    category: 'Computer Diagnostics',
    title: 'Computerized OBD-II Diagnostics',
    badge: 'Digital Scan Report',
    image: '/images/diagnostics.jpg',
    tagline: 'Multi-brand scanner detects check engine, transmission, ABS and airbag faults.',
    features: [
      'Full DTC diagnostic tree fault code read',
      'Live engine telemetry & sensor data monitoring',
      'ECU adaptations & warning light reset'
    ],
    bookingService: 'Computerized Engine Scanning'
  },
  {
    id: 'brakes-safety',
    isHero: false,
    category: 'Safety Systems',
    title: 'Brake Overhaul & Disc Resurfacing',
    badge: 'Stopping Safety Certified',
    image: '/images/brakes_service_real.jpg',
    tagline: 'Crisp, responsive stopping power with Bosch, Brembo, and OEM friction pads.',
    features: [
      'Brembo / Bosch high-temperature brake pads',
      'Rotor disc runout measurement & machining',
      'Caliper pin high-temp synthetic greasing'
    ],
    bookingService: 'Brake System Overhaul'
  },
  {
    id: 'ac-climate',
    isHero: false,
    category: 'Climate & Health',
    title: 'AC Climate Control & Ozone Spa',
    badge: 'Sub-Zero Cooling',
    image: '/images/interior_detailing_real.jpg',
    tagline: 'Restore ice-cold cabin air and eliminate 99.9% of interior bacteria and allergens.',
    features: [
      'R134a refrigerant evacuation & precision gas refill',
      'AC compressor & condenser leak testing',
      'Deep steam & ozone microbial duct sterilization'
    ],
    bookingService: 'Car Air Conditioning Service'
  },
  {
    id: 'suspension-steering',
    isHero: false,
    category: 'Chassis Dynamics',
    title: 'Suspension & Steering Overhaul',
    badge: 'Ride Quality Restored',
    image: '/images/workshop_lift_real.jpg',
    tagline: 'Eliminate thuds and steering vibrations over uneven village and highway roads.',
    features: [
      'Monroe / Gabriel strut & shock absorber replacement',
      'Lower control arm & stabilizer link rod renewal',
      'Hydraulic and EPS steering rack calibration'
    ],
    bookingService: 'Suspension & Steering Repair'
  },
  {
    id: 'wheel-alignment',
    isHero: false,
    category: 'Wheel Dynamics',
    title: '3D Laser Alignment & Tyres',
    badge: 'Highway Stability',
    image: '/images/wheel_tyre_real.jpg',
    tagline: 'Laser accuracy prevents uneven tyre wear and ensures straight high-speed tracking.',
    features: [
      'Computerized 3D camera camber/caster calibration',
      'Dynamic high-speed computerized wheel balancing',
      'Tyre rotation & tread depth safety assessment'
    ],
    bookingService: '3D Wheel Alignment & Balancing'
  }
];

export default function Departments({ onOpenBooking }) {
  const [activeFilter, setActiveFilter] = useState('all');

  const filteredServices = activeFilter === 'all' 
    ? BENTO_SERVICES 
    : BENTO_SERVICES.filter(s => {
        if (activeFilter === 'featured') return s.isHero;
        if (activeFilter === 'mechanical') return ['periodic-maintenance', 'obd-diagnostics', 'brakes-safety', 'suspension-steering'].includes(s.id);
        if (activeFilter === 'body-spa') return ['paint-booth', 'ceramic-detailing', 'ac-climate', 'wheel-alignment'].includes(s.id);
        return true;
      });

  return (
    <section className="section bento-services-section" id="departments">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Specialized Workshop Disciplines</span>
          <h2 className="section-title">Master Automotive Services</h2>
          <p className="section-desc">
            Explore our state-of-the-art service bays in Village Rehta Mafi, Moradabad. 
            Engineered with certified diagnostic rigs, specialized tooling, and authentic OEM spare parts.
          </p>

          {/* Category Filter Pills */}
          <div className="bento-filter-bar">
            <button 
              type="button" 
              className={`bento-filter-btn ${activeFilter === 'all' ? 'active' : ''}`}
              onClick={() => setActiveFilter('all')}
            >
              All Disciplines ({BENTO_SERVICES.length})
            </button>
            <button 
              type="button" 
              className={`bento-filter-btn ${activeFilter === 'featured' ? 'active' : ''}`}
              onClick={() => setActiveFilter('featured')}
            >
              ★ Paint Booth & Detailing Studio
            </button>
            <button 
              type="button" 
              className={`bento-filter-btn ${activeFilter === 'mechanical' ? 'active' : ''}`}
              onClick={() => setActiveFilter('mechanical')}
            >
              Mechanical & Diagnostics
            </button>
            <button 
              type="button" 
              className={`bento-filter-btn ${activeFilter === 'body-spa' ? 'active' : ''}`}
              onClick={() => setActiveFilter('body-spa')}
            >
              Body, Paint & Wheels
            </button>
          </div>
        </div>

        {/* Bento Grid Layout */}
        <div className="bento-services-grid">
          {filteredServices.map((service) => (
            <div 
              key={service.id} 
              className={`bento-card ${service.isHero ? 'bento-card-hero' : ''}`}
              id={`service-card-${service.id}`}
            >
              {/* Authentic Photo Container */}
              <div className="bento-card-media">
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="bento-card-img" 
                  loading="lazy" 
                />
                <div className="bento-media-gradient"></div>
                <span className="bento-badge-pill">{service.badge}</span>
              </div>

              {/* Bento Card Body */}
              <div className="bento-card-body">
                <span className="bento-category-tag">{service.category}</span>
                <h3 className="bento-card-title">{service.title}</h3>
                <p className="bento-card-desc">{service.tagline}</p>

                <ul className="bento-feature-list">
                  {service.features.map((feat, idx) => (
                    <li key={idx} className="bento-feature-item">
                      <i className="fa-solid fa-check bento-check-icon"></i>
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>

                <div className="bento-card-footer">
                  <button 
                    type="button" 
                    className="btn btn-outline bento-book-btn"
                    onClick={() => onOpenBooking(service.bookingService)}
                  >
                    <span>Book Service</span>
                    <i className="fa-solid fa-arrow-right"></i>
                  </button>

                  <a 
                    href={`https://wa.me/919012862412?text=Hello%20Multi%20Brand%20Car%20Service%20Center,%20I%20am%20interested%20in%20${encodeURIComponent(service.title)}.`}
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bento-wa-btn"
                    title="Quick WhatsApp Consultation"
                    aria-label={`WhatsApp for ${service.title}`}
                  >
                    <i className="fa-brands fa-whatsapp"></i>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
