import React, { useState } from 'react';

const DEPARTMENTS_DATA = {
  'dept-periodic': {
    name: 'Periodic Services',
    icon: 'fa-wrench',
    services: [
      {
        id: 'standard-service',
        title: 'Standard Car Service (Most Popular)',
        badge: 'Recommended 10K KM Care',
        time: '3 - 4 Hours',
        desc: 'Comprehensive scheduled service designed for regional driving conditions. Recommended every 10,000 km or 1 year.',
        inclusions: [
          'Advanced OBD-II Computer Engine Scanning',
          'High-Grade Fully Synthetic Oil & Oil Filter Replacement',
          'Engine Air Filter & Cabin AC Filter Cleaning',
          'Front Brake Pads & Rear Brake Shoes Servicing',
          'Coolant, Brake Fluid & Wiper Fluid Top-up',
          'Complete Foam Wash & Deep Interior Vacuuming'
        ]
      },
      {
        id: 'basic-service',
        title: 'Basic Periodic Service',
        badge: 'Interim 5K KM Check',
        time: '2 - 3 Hours',
        desc: 'Essential routine checkup and lubrication for daily commuters running between major service intervals.',
        inclusions: [
          'Engine Oil Drain & Fresh Synthetic Blend Refill',
          'Genuine OEM Oil Filter Replacement',
          'Air Filter & AC Filter Dust Cleaning',
          '25-Point Vital Systems Visual Check',
          'Complete Exterior Car Body Pressure Wash'
        ]
      },
      {
        id: 'comprehensive-service',
        title: 'Comprehensive 60-Point Care',
        badge: '1-Year Warranty Included',
        time: '5 - 6 Hours',
        desc: 'Total bumper-to-bumper deep mechanical renewal for older cars, out-of-warranty luxury vehicles, or pre-highway trips.',
        inclusions: [
          'All Standard Service Inclusions Included',
          'Fuel Filter Replacement & Spark Plug Inspection',
          'Brake Oil & Clutch Fluid Flush & Bleed',
          'Radiator Coolant Flush & Throttle Body Cleaning',
          '3D Wheel Alignment & Wheel Balancing (4 Wheels)'
        ]
      },
      {
        id: 'brake-pads',
        title: 'Brake System Overhaul',
        badge: 'Stopping Safety Certified',
        time: '1.5 Hours',
        desc: 'Restore crisp, safe braking performance with genuine Brembo, Bosch, or OEM friction pads and disc rotor machining.',
        inclusions: [
          'Bosch / Brembo / OEM Brake Pads Fitting',
          'Brake Disc Rotor Thickness & Runout Inspection',
          'Rear Drum Brake De-dusting & Spring Adjustment',
          'Caliper Pin Lubrication & High-Temp Greasing'
        ]
      }
    ]
  },

  'dept-denting': {
    name: 'Denting & Painting',
    icon: 'fa-spray-can',
    services: [
      {
        id: 'full-body-paint',
        title: 'Full Car Body Dent & Paint',
        badge: 'Lifetime Gloss Warranty',
        time: '4 - 6 Days',
        desc: 'Complete exterior transformation in our pressurized, dust-free German heated paint booth. Baked at 65°C for OEM factory hardness.',
        inclusions: [
          'Computerized Color Spectrophotometer Matching',
          'Standox / Nippon / PPG Premium 2K Base & Clear Coat',
          'Precision Panel Line Re-alignment & Dent Pulling',
          'Multi-Stage Rubbing, Polishing & 3-Year Gloss Warranty'
        ]
      },
      {
        id: 'panel-paint',
        title: 'Individual Panel Dent & Paint',
        badge: 'OEM Shade Match Guarantee',
        time: '24 - 48 Hours',
        desc: 'Eliminate scratches and dents on bumpers, bonnet, doors, fenders, quarter panels, running boards, or roof.',
        inclusions: [
          'Front / Rear Bumper Dent & Paint',
          'Left / Right Door & Quarter Panel Match',
          'Bonnet & Boot Lid Surface Refinishing',
          'Seamless Blending with Surrounding Panels'
        ]
      },
      {
        id: 'alloy-paint',
        title: 'Alloy Wheel Refurbishing & Painting',
        badge: 'Scratch-Proof Coat',
        time: '1 Day',
        desc: 'Upgrade curb-rashed or faded wheels with Piano Black, Hyper Silver, Gunmetal Grey, or custom powder-coated finishes.',
        inclusions: [
          'Curb-Rash Filling & Precision Lip Sanding',
          'High-Heat Resistant Primer & Top Clear Coat',
          'Brake Caliper Neon / Red Sport Accent Painting'
        ]
      }
    ]
  },

  'dept-detailing': {
    name: 'Ceramic & Detailing',
    icon: 'fa-shield-halved',
    services: [
      {
        id: 'ceramic-coating',
        title: '9H / 10H Premium Ceramic Coating',
        badge: '3-Year Hydrophobic Warranty',
        time: '24 Hours',
        desc: 'Permanent nano-ceramic shield offering extreme hydrophobic water beading, chemical resistance, and deep mirror gloss.',
        inclusions: [
          '3-Step Paint Correction (Swirl & Scratch Removal)',
          'Dual Layer 9H Hardness Nano-Shield Application',
          'Alloy Wheel & Exterior Trim Ceramic Coating',
          '2 to 3 Years Warranty with Free Maintenance Top-up'
        ]
      },
      {
        id: 'ppf-film',
        title: 'TPU Paint Protection Film (PPF)',
        badge: 'Self-Healing TPU Film',
        time: '2 - 3 Days',
        desc: 'Self-healing thermoplastic polyurethane film that shields your factory paint against stone chips, scratches, and gravel.',
        inclusions: [
          'Optical Clarity 190+ Micron TPU Film',
          'Heat-Activated Instant Self-Healing Layer',
          'Computer-Cut Edge Wrapping for Seamless Install',
          '5 to 10 Year Anti-Yellowing Warranty'
        ]
      },
      {
        id: 'interior-spa',
        title: 'Premium Interior Deep Detailing',
        badge: 'Germ-Free Deep Spa',
        time: '4 Hours',
        desc: 'Restore showroom freshness inside the cabin. Eliminates deep stains, microbes, bacteria, odors, and food spills.',
        inclusions: [
          'High-Pressure Steam Disinfection & Extraction',
          'Leather Seat Conditioning & Fabric Shampooing',
          'Roof Liner, Door Pads & Boot Deep Cleaning',
          'AC Duct Ozone Odor Removal Treatment'
        ]
      }
    ]
  },

  'dept-inspection': {
    name: 'Diagnostics & Inspection',
    icon: 'fa-laptop-code',
    services: [
      {
        id: 'engine-scanning',
        title: 'OBD-II Computerized Engine Scanning',
        badge: 'Digital Scan Report',
        time: '45 Mins',
        desc: 'Check engine light on? Our OEM diagnostic tools scan ECM, TCM, ABS, Airbag, and powertrain sensors to detect fault codes instantly.',
        inclusions: [
          'Full DTC Fault Code Read & Diagnostic Tree Analysis',
          'Live Telemetry Sensor Data Monitoring (O2, MAF, Fuel Trim)',
          'Warning Light Reset & ECU Adaptations Calibration'
        ]
      },
      {
        id: 'second-hand-inspection',
        title: '120-Point Pre-Purchase Car Inspection',
        badge: 'Pre-Purchase Assurance',
        time: '2 Hours',
        desc: 'Buying a used car? Avoid hidden accidents, tampered odometers, flood damage, and costly engine repair surprises with a full report.',
        inclusions: [
          'Paint Depth Gauge Check for Accident Repainting',
          'Engine Compression, Blow-by & Fluid Leakage Check',
          'Suspension, Chassis Rust & Underbody Inspection',
          'Comprehensive PDF Health Report with Valuation Advice'
        ]
      },
      {
        id: 'road-trip-inspection',
        title: 'Road Trip Safety 40-Point Inspection',
        badge: 'Highway Safety Pass',
        time: '1 Hour',
        desc: 'Heading on long highway journeys? Ensure uninterrupted peace of mind before driving at high speeds.',
        inclusions: [
          'Tyre Tread Depth, Cuts & Wheel Nut Torque Check',
          'Brake Pad Life & Fluid Boiling Point Test',
          'Radiator Hose, Belts & Cooling System Stress Test',
          'Battery Health & Cranking Voltage Test'
        ]
      }
    ]
  },

  'dept-suspension': {
    name: 'Suspension Repair',
    icon: 'fa-car-side',
    services: [
      {
        id: 'shock-absorber',
        title: 'Front & Rear Shock Absorber Replacement',
        badge: 'OEM Strut Warranty',
        time: '3 Hours',
        desc: 'Say goodbye to thudding sounds over rough roads and excessive bouncing. We install genuine Monroe, Gabriel, or OEM struts.',
        inclusions: [
          'Strut Assembly Removal, Spring Compression & Fitting',
          'Strut Mount & Bearing Inspection/Replacement',
          'Bump Stop & Dust Boot Renewal'
        ]
      },
      {
        id: 'lower-arm',
        title: 'Control Lower Arm & Link Rod',
        badge: 'Genuine Rubber Bushes',
        time: '2 Hours',
        desc: 'Eliminate steering vibrations, erratic wheel pulling, and squeaking noise caused by torn rubber bushings and loose ball joints.',
        inclusions: [
          'Lower Control Arm Replacement with Pre-Pressed Bushings',
          'Sway Bar Stabilizer Link Rod Replacement',
          'Tie Rod Ends & Steering Rack Boot Alignment'
        ]
      },
      {
        id: 'steering-rack',
        title: 'Steering Rack & Drive Shaft Repair',
        badge: 'Precision Torque Checked',
        time: '1 Day',
        desc: 'Heavy steering, rattling on rough roads, or clicking sounds while taking sharp U-turns? Expert hydraulic and EPS steering rack repair.',
        inclusions: [
          'Constant Velocity (CV) Joint & Axle Shaft Overhaul',
          'EPS Motor & Torque Sensor Calibration',
          'Steering Fluid Leakage Seal Replacement'
        ]
      }
    ]
  },

  'dept-transmission': {
    name: 'Transmission & Clutch',
    icon: 'fa-gears',
    services: [
      {
        id: 'clutch-set',
        title: 'Clutch Set Replacement (Valeo / LuK / OEM)',
        badge: 'Smooth Shift Guarantee',
        time: '4 - 6 Hours',
        desc: 'Restore smooth pickup and eliminate hard pedal, clutch slippage, shuddering, and high-RPM engine racing without acceleration.',
        inclusions: [
          'Friction Clutch Disc & Pressure Plate Replacement',
          'Clutch Release Bearing (Throw-out Bearing) Renewal',
          'Flywheel Resurfacing & Alignment',
          'Fresh 75W-90 / 80W-90 Gearbox Oil Flush'
        ]
      },
      {
        id: 'gearbox-oil',
        title: 'Gearbox Oil Replacement (Manual & Automatic)',
        badge: 'Synthetic Gear Lubricant',
        time: '1.5 Hours',
        desc: 'Maintain buttery-smooth gear shifting and protect synchros and planetary gear assemblies against thermal breakdown.',
        inclusions: [
          'Manual Transmission GL-4 / GL-5 Synthetic Fluid',
          'Automatic Transmission (ATF) / CVT / DSG Oil Flush',
          'Drain Plug Magnetic Washer De-sludge'
        ]
      },
      {
        id: 'clutch-cylinder',
        title: 'Clutch Master & Slave Cylinder Repair',
        badge: 'Zero Hydraulic Leakage',
        time: '2 Hours',
        desc: 'Clutch pedal sticking to the floor or sinking without engagement? We replace leaking hydraulic master and slave cylinders.',
        inclusions: [
          'Primary & Secondary Hydraulic Cylinder Replacement',
          'Hydraulic Clutch Line DOT 4 Bleeding & Pressure Test',
          'Clutch Pedal Free Play Adjustment'
        ]
      }
    ]
  },

  'dept-ac': {
    name: 'Car AC Services',
    icon: 'fa-snowflake',
    services: [
      {
        id: 'ac-gas-regular',
        title: 'Regular Car AC Service & Gas Top-up',
        badge: 'Chilling Cabin Guarantee',
        time: '1.5 Hours',
        desc: 'Keep your cabin icy cool during scorching summer afternoons. Evacuates moisture, cleans cabin filters, and charges pure R134a refrigerant.',
        inclusions: [
          'Deep Vacuuming & Leak Testing of AC Lines',
          'Pure DuPont / Sub-Zero R134a Refrigerant Refill',
          'Synthetic PAG Compressor Lubricant Top-up',
          'AC Condenser Fins De-clogging with Jet Wash'
        ]
      },
      {
        id: 'ac-high-perf',
        title: 'High Performance AC Overhaul',
        badge: 'Deep Cooling Overhaul',
        time: '3 Hours',
        desc: 'For cars suffering from weak cooling in heavy traffic, unpleasant odors, or noisy compressors.',
        inclusions: [
          'All Regular AC Service Inclusions Included',
          'Dashboard Cooling Coil (Evaporator) Chemical Wash',
          'Expansion Valve & Receiver Drier Bottle Inspection',
          'AC Compressor Magnetic Clutch Relay Test'
        ]
      },
      {
        id: 'cooling-coil-rep',
        title: 'Cooling Coil & Condenser Replacement',
        badge: 'OEM Subros / Denso Core',
        time: '1 Day',
        desc: 'Permanent fix for persistent AC refrigerant leaks, hissing noises from dashboard, or stone-punctured front condensers.',
        inclusions: [
          'Clean Dashboard Removal by Interior Specialists',
          'Brand New Subros / Denso / Behr Evaporator Core',
          'High-Efficiency Aluminum Condenser Replacement'
        ]
      }
    ]
  },

  'dept-electrical': {
    name: 'Electricals & Battery',
    icon: 'fa-car-battery',
    services: [
      {
        id: 'battery-replacement',
        title: 'Battery Replacement & Free Doorstep Fitment',
        badge: 'Genuine Exide / Amaron',
        time: '30 Mins',
        desc: '100% genuine Exide, Amaron & SF Sonic batteries with instant on-site installation, terminal greasing, and old scrap battery discount.',
        inclusions: [
          'Up to 66-Month Manufacturer Warranty',
          'Alternator Charging & Parasitic Draw Test',
          'Express Doorstep Delivery & Fitting Available'
        ]
      },
      {
        id: 'alternator-repair',
        title: 'Alternator & Starter Motor Repair',
        badge: 'Bench Tested Output',
        time: '3 Hours',
        desc: 'Car won’t crank or battery discharging while driving? Overhaul alternators, voltage regulators, starter carbon brushes, and bendix drives.',
        inclusions: [
          'Armature Testing & Commutator Resurfacing',
          'Starter Solenoid Switch & Pinion Drive Renewal',
          'High Output Load Bench Testing'
        ]
      },
      {
        id: 'dashcam-install',
        title: 'Dashcam & Tech Accessories Installation',
        badge: 'Coupler-to-Coupler Wiring',
        time: '2 Hours',
        desc: 'Neat, fuse-tapped hidden wire installation without voiding your car warranty. Dashcams, 360-degree cameras, and Android head units.',
        inclusions: [
          'Dual Channel Front & Rear 4K Dashcam Hardwiring',
          '24-Hour Parking Surveillance Kit Hookup',
          'Zero Wire Splicing (100% Coupler to Coupler)'
        ]
      }
    ]
  }
};

export default function Departments({ activeDept, onSelectDept, onOpenBooking }) {
  const [searchQuery, setSearchQuery] = useState('');

  const currentDeptKey = activeDept || 'dept-periodic';
  const currentDept = DEPARTMENTS_DATA[currentDeptKey] || DEPARTMENTS_DATA['dept-periodic'];

  // Search logic across all services
  const allServicesList = Object.keys(DEPARTMENTS_DATA).flatMap((key) =>
    DEPARTMENTS_DATA[key].services.map((s) => ({ ...s, deptKey: key }))
  );

  const displayServices = searchQuery.trim()
    ? allServicesList.filter(
        (s) =>
          s.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          s.desc.toLowerCase().includes(searchQuery.toLowerCase()) ||
          s.inclusions.some((i) => i.toLowerCase().includes(searchQuery.toLowerCase()))
      )
    : currentDept.services;

  return (
    <section className="section" id="departments" style={{ background: '#08090c' }}>
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Specialized Workshop Divisions</span>
          <h2 className="section-title">Multi-Brand Workshop Services</h2>
          <p className="section-desc">
            Explore our specialized automotive departments. Genuine OEM parts, certified master technicians, 
            and transparent inspection before every job.
          </p>
        </div>

        {/* Search Bar */}
        <div className="service-search-wrapper">
          <div className="service-search-bar">
            <i className="fa-solid fa-magnifying-glass search-icon"></i>
            <input
              type="text"
              placeholder="Search by repair type (e.g. Brake pad, Paint booth, AC gas, Ceramic, Engine scan)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="service-search-input"
            />
            {searchQuery && (
              <button 
                type="button" 
                className="search-clear-btn" 
                onClick={() => setSearchQuery('')}
                aria-label="Clear search"
              >
                <i className="fa-solid fa-xmark"></i>
              </button>
            )}
          </div>
        </div>

        {/* Department Tab Buttons */}
        {!searchQuery && (
          <div className="dept-tabs-nav">
            {Object.keys(DEPARTMENTS_DATA).map((deptKey) => {
              const dept = DEPARTMENTS_DATA[deptKey];
              const isActive = deptKey === currentDeptKey;
              return (
                <button
                  key={deptKey}
                  type="button"
                  className={`dept-tab-btn ${isActive ? 'active' : ''}`}
                  onClick={() => onSelectDept(deptKey)}
                >
                  <i className={`fa-solid ${dept.icon}`}></i>
                  <span>{dept.name}</span>
                </button>
              );
            })}
          </div>
        )}

        {/* Service Cards Grid */}
        <div className="services-cards-grid">
          {displayServices.length > 0 ? (
            displayServices.map((service) => (
              <div className="service-card" key={service.id}>
                <div>
                  <div className="service-card-top">
                    <div className="service-icon-box">
                      <i className={`fa-solid ${DEPARTMENTS_DATA[service.deptKey || currentDeptKey]?.icon || 'fa-wrench'}`}></i>
                    </div>
                    <span className="service-feature-badge">
                      <i className="fa-solid fa-circle-check"></i> {service.badge}
                    </span>
                  </div>

                  <div className="service-card-body">
                    <h3>{service.title}</h3>
                    <p>{service.desc}</p>
                    <ul className="service-inclusions-list">
                      {service.inclusions.map((item, idx) => (
                        <li className="service-inclusion-item" key={idx}>
                          <i className="fa-solid fa-check"></i>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="service-card-bottom">
                  <span className="service-timing">
                    <i className="fa-regular fa-clock"></i> {service.time}
                  </span>
                  <button 
                    type="button" 
                    className="btn btn-outline"
                    onClick={() => onOpenBooking(service.title)}
                  >
                    Book Service
                  </button>
                </div>
              </div>
            ))
          ) : (
            <div style={{ gridColumn: '1 / -1', textAlign: 'center', padding: '60px 20px', color: 'var(--text-muted)' }}>
              <i className="fa-solid fa-triangle-exclamation" style={{ fontSize: '2rem', marginBottom: '12px', color: 'var(--amber-gold)' }}></i>
              <p>No services match your search query "{searchQuery}". Try searching for 'brakes', 'oil', 'paint', or 'ac'.</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
