import React, { useState } from 'react';

const SERVICE_STEPS = [
  {
    step: '01',
    id: 'diagnostics',
    title: 'Computerized OBD-II Diagnostics & 40-Point Inspection',
    tag: 'Step 1: Digital Scan & Health Check',
    image: '/images/diagnostics.jpg',
    duration: '25 - 30 Mins',
    tool: 'Bosch / Launch X431 Pro Diagnostic Scanner',
    partsCheck: 'ECU, ABS, Airbags, Alternator, Battery & Sensors',
    description: 
      'Upon arrival at our Village Rehta Mafi workshop, master mechanics connect professional OBD-II diagnostic scanners to interrogate the vehicle’s ECU. A comprehensive 40-point health check identifies stored trouble codes, sensor drifts, alternator charging efficiency, and fluid levels before any mechanical work commences. A digital diagnostic health report is shared directly with you via WhatsApp.',
    procedure: 'Full ECU error code read, live telemetry sensor analysis, battery cranking voltage test, and digital vehicle health report generation.',
    checklist: [
      'Complete ECU & Engine Trouble Code (DTC) Diagnostic Scan',
      'Battery Cranking Voltage & High-Load Alternator Test',
      'Under-Hood Fluids, Hoses & Radiator Pipe Pressure Inspection',
      'Tyre Tread Depth & Brake Friction Pad Digital Measurement',
      'Itemized Live WhatsApp Inspection Checklist Sent to Vehicle Owner'
    ]
  },
  {
    step: '02',
    id: 'oil-change',
    title: 'Synthetic Engine Oil Flush & OEM Filter Replacement',
    tag: 'Step 2: Engine Flush & Lubrication',
    image: '/images/engine_oil_service.jpg',
    duration: '35 - 45 Mins',
    tool: 'Hydraulic Vacuum Oil Drainer & Digital Torque Wrench',
    partsCheck: '100% Fully Synthetic Oil (0W-20 / 5W-30 / 5W-40) & Genuine OEM Filter',
    description: 
      'Degraded, contaminated engine oil is completely drained using bottom-sump vacuum extraction to remove micro-sludge. We refill with genuine, sealed fully-synthetic motor oil matching exact manufacturer viscosity specifications (Castrol EDGE / Mobil 1 / Shell Helix). A brand-new genuine OEM oil filter is installed with a fresh crush washer torqued to manufacturer spec.',
    procedure: 'Hot engine vacuum sump evacuation, OEM filter replacement, air and cabin AC filter cleaning, and synthetic oil level dipstick calibration.',
    checklist: [
      'Hot Oil Bottom Sump Vacuum Drain & Sludge Purge',
      'Brand-New High-Efficiency OEM Oil Filter Installed',
      'Fresh Copper Crush Washer & Drain Plug Torqued to Factory Spec',
      'Engine Air Filter & Cabin AC Filter Cleaned / Replaced',
      'Synthetic Engine Oil Level Calibrated via Digital & Manual Dipstick'
    ]
  },
  {
    step: '03',
    id: 'brakes',
    title: 'Four-Wheel Brake Servicing, Disc Machining & Fluid Bleed',
    tag: 'Step 3: Brake Safety & Stopping Power',
    image: '/images/brakes_service.jpg',
    duration: '45 - 60 Mins',
    tool: 'Digital Micrometer, Caliper Spreader & Pressure Bleeder',
    partsCheck: 'Brembo / Bosch / OEM Brake Pads & DOT 4 Synthetic Fluid',
    description: 
      'All four wheels are dismounted on a hydraulic lift. Front disc brake pads and rear drum shoes undergo micrometer thickness measurement. Disc rotors are examined for surface runout, warping, or deep grooving, and skimmed if required. Caliper slide pins are cleaned and greased with high-temperature synthetic lubricant, followed by pressure bleeding of the hydraulic brake circuit with fresh DOT-4 fluid.',
    procedure: 'Four-wheel caliper disassembly, rotor runout dial gauge check, pad friction measurement, synthetic pin greasing, and hydraulic line air purge.',
    checklist: [
      'Brake Pad & Rear Shoe Friction Lining Vernier Caliper Scan',
      'Disc Rotor Surface Runout & Lip Grinding / Resurfacing',
      'Caliper Slider Pin Lubrication with Heat-Resistant Synthetic Grease',
      'Hydraulic Line Pressure Bleed & DOT-4 Fluid Top-Up',
      'Emergency Handbrake Cable Tension & Ratchet Mechanism Adjustment'
    ]
  },
  {
    step: '04',
    id: 'suspension',
    title: 'Suspension, Steering Linkages & Underbody Chassis Torque',
    tag: 'Step 4: Underbody & Suspension Alignment',
    image: '/images/hero_workshop.jpg',
    duration: '40 - 50 Mins',
    tool: 'Heavy-Duty 4-Ton Twin-Post Lift & Precision Torque Wrench',
    partsCheck: 'Struts, Lower Control Arms, Tie Rod Ends, Link Rods & Bushes',
    description: 
      'The car is elevated on our 4-ton twin-post hydraulic lift for comprehensive undercarriage scrutiny. Master mechanics inspect front McPherson struts, shock absorbers, lower control arm rubber bushings, ball joints, sway bar link rods, and steering tie-rod ends for play, tears, or fluid leakage. All critical chassis mounting bolts are re-torqued using calibrated torque wrenches.',
    procedure: 'Chassis underside lift inspection, suspension bushing play assessment, CV axle boot check, steering rack alignment, and underbody bolt torquing.',
    checklist: [
      'Shock Absorber Hydraulic Leakage & Rebound Damping Test',
      'Lower Control Arm & Stabilizer Sway Bar Bushing Wear Inspection',
      'CV Axle Drive Shaft Rubber Boots & Greasing Integrity Check',
      'Electronic Power Steering (EPS) & Rack Linkage Play Calibration',
      'Exhaust System Hangers, Heat Shields & Fuel Line Security Check'
    ]
  },
  {
    step: '05',
    id: 'paint-booth',
    title: 'Dust-Free German Heated Paint Booth & Ceramic Coating',
    tag: 'Step 5: Paint Booth & Surface Restoration',
    image: '/images/paint_booth.jpg',
    duration: '24 - 48 Hours',
    tool: 'Pressurized Negative-Draft Booth, Standox Curing Lamps & Rupes Polisher',
    partsCheck: 'PPG / Standox 2K Clear Coat & 9H Nano-Ceramic Liquid Shield',
    description: 
      'Body panels requiring scratch, dent, or full repainting are treated in our sealed German heated paint booth. Using spectrophotometer digital color matching, exact OEM pigment is applied and baked at 65°C for factory hardness and scratch resistance. For detailing clients, vehicles undergo multi-stage rotary compound polishing followed by permanent 9H hydrophobic nano-ceramic coating application.',
    procedure: 'Computerized paint shade spectroscopy, pressurized 65°C bake chamber curing, 3-stage compound swirl correction, and 9H ceramic shield sealing.',
    checklist: [
      'Spectrophotometer Precision Color Matching with Factory Shade Cards',
      'Dust-Free Pressurized Down-Draft Chamber Spray Application',
      'High-Temperature 65°C Infrared Baking for Permanent Clear-Coat Hardness',
      'Multi-Stage Machine Paint Correction (Swirl Marks & Holograms Removed)',
      'Dual-Layer 9H Ceramic Hydrophobic Shield Sealed with 3-Year Warranty'
    ]
  },
  {
    step: '06',
    id: 'quality-wash',
    title: 'Deep Foam Wash, Interior Sanitization & Road Test Pass',
    tag: 'Step 6: Detailing & Road Test Handover',
    image: '/images/detailing.jpg',
    duration: '30 - 45 Mins',
    tool: 'High-Pressure Snow Foam Lance & Ozone AC Disinfection Gun',
    partsCheck: 'pH-Neutral Car Wash Shampoo, Ceramic Sealant & Microfiber Mitts',
    description: 
      'Every serviced vehicle receives an exterior high-pressure snow foam wash, underbody pressure flush, wheel alloy cleaning, and deep interior vacuuming. AC vents are sanitized with antimicrobial ozone spray. Finally, our senior road-tester takes the car for a high-speed dynamic check on highway stretches near Rehta Mafi before delivery with a certified invoice and warranty card.',
    procedure: 'pH-neutral snow foam bath, wheels and underbody jet wash, interior cabin vacuuming, AC duct ozone sterilization, and highway dynamic road test.',
    checklist: [
      'pH-Neutral Snow Foam Soak & Two-Bucket Scratch-Free Wash',
      'Underbody High-Pressure Water Jet De-greasing & Wheel Bay Clean',
      'Deep Cabin Vacuuming, Dashboard Dressing & Glass Streak-Free Polish',
      'Air Conditioner Duct Antibacterial Ozone Vapor Sterilization',
      'Final 5-KM Dynamic Road-Testing Pass, Digital Invoice & Warranty Handover'
    ]
  }
];

export default function ServiceSteps({ onOpenBooking }) {
  const [activeStepIndex, setActiveStepIndex] = useState(0);
  const currentStep = SERVICE_STEPS[activeStepIndex];

  return (
    <section className="section service-steps-section" id="service-steps">
      <div className="container">
        {/* Section Header - 100% Clean English */}
        <div className="section-header">
          <span className="section-tag">
            <i className="fa-solid fa-screwdriver-wrench"></i> Workshop Transparency
          </span>
          <h2 className="section-title">How Your Car Is Precision Serviced</h2>
          <p className="section-desc">
            Complete step-by-step automotive service journey with genuine OEM parts, computerized diagnostics, 
            and live photo/video updates on WhatsApp throughout every stage at our Village Rehta Mafi workshop.
          </p>
        </div>

        {/* Step Navigation Bar */}
        <div className="steps-nav-scroller">
          <div className="steps-nav-pills">
            {SERVICE_STEPS.map((step, idx) => {
              const isActive = activeStepIndex === idx;
              return (
                <button
                  key={step.id}
                  type="button"
                  className={`step-nav-btn ${isActive ? 'active' : ''}`}
                  onClick={() => setActiveStepIndex(idx)}
                >
                  <span className="step-num-badge">{step.step}</span>
                  <div className="step-btn-text">
                    <span className="step-btn-tag">Step {step.step}</span>
                    <span className="step-btn-name">{step.title.split('&')[0]}</span>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Active Step Spotlight Card */}
        <div className="active-step-spotlight">
          <div className="active-step-visual">
            <div className="step-img-frame">
              <img 
                src={currentStep.image} 
                alt={currentStep.title} 
                className="step-spotlight-img"
              />
              <div className="step-img-overlay-badge">
                <i className="fa-solid fa-clock"></i> Duration: {currentStep.duration}
              </div>
              <div className="step-seq-pill">
                Stage {currentStep.step} of 06
              </div>
            </div>

            <div className="step-meta-strip">
              <div className="step-meta-item">
                <i className="fa-solid fa-wrench"></i>
                <div>
                  <div className="step-meta-label">Equipment Used</div>
                  <div className="step-meta-val">{currentStep.tool}</div>
                </div>
              </div>
              <div className="step-meta-item">
                <i className="fa-solid fa-shield-halved"></i>
                <div>
                  <div className="step-meta-label">OEM Spares & Grade</div>
                  <div className="step-meta-val">{currentStep.partsCheck}</div>
                </div>
              </div>
            </div>
          </div>

          <div className="active-step-info">
            <span className="step-category-pill">{currentStep.tag}</span>
            <h3 className="active-step-title">{currentStep.title}</h3>

            {/* Technical Procedure Card */}
            <div className="step-highlight-box">
              <div className="step-box-header">
                <i className="fa-solid fa-microchip"></i>
                <span>Technical Standard & Procedure:</span>
              </div>
              <p className="step-highlight-text">{currentStep.procedure}</p>
            </div>

            {/* English Description */}
            <p className="step-english-text">{currentStep.description}</p>

            {/* Checklist */}
            <div className="step-checklist-wrapper">
              <h5 className="checklist-heading">
                <i className="fa-solid fa-list-check"></i> Quality Checkpoints in this Step:
              </h5>
              <ul className="step-checklist">
                {currentStep.checklist.map((item, cIdx) => (
                  <li key={cIdx} className="checklist-item">
                    <i className="fa-solid fa-circle-check"></i>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Action Bar */}
            <div className="step-action-bar">
              <button 
                type="button" 
                className="btn btn-primary"
                onClick={() => onOpenBooking ? onOpenBooking(currentStep.title) : null}
              >
                <i className="fa-solid fa-calendar-check"></i> Book Service Now
              </button>
              
              <a 
                href={`https://wa.me/919012862412?text=${encodeURIComponent(`Hello, I want to inquire about Step ${currentStep.step}: ${currentStep.title}`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-whatsapp-step"
              >
                <i className="fa-brands fa-whatsapp"></i> Ask on WhatsApp
              </a>
            </div>
          </div>
        </div>

        {/* 2 Cards Per Row Visual Gallery Grid */}
        <div className="all-steps-header">
          <h3 className="all-steps-title">
            <i className="fa-solid fa-images"></i> Full 6-Stage Workshop Visual Gallery
          </h3>
          <p className="all-steps-sub">
            Click on any service card below to view equipment specifications and certified quality checkpoints.
          </p>
        </div>

        <div className="steps-gallery-grid-2col">
          {SERVICE_STEPS.map((step, idx) => (
            <div 
              key={step.id} 
              className={`step-gallery-card ${activeStepIndex === idx ? 'card-active' : ''}`}
              onClick={() => {
                setActiveStepIndex(idx);
                const el = document.getElementById('service-steps');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              <div className="gallery-card-img-wrapper">
                <img src={step.image} alt={step.title} className="gallery-card-img" loading="lazy" />
                <span className="gallery-card-num">Step {step.step}</span>
                <span className="gallery-card-time">{step.duration}</span>
              </div>
              <div className="gallery-card-content">
                <h4 className="gallery-card-title">{step.title}</h4>
                <p className="gallery-card-summary">{step.procedure}</p>
                <div className="gallery-card-footer">
                  <span className="gallery-view-btn">
                    View Step Details <i className="fa-solid fa-arrow-right"></i>
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Live Workshop Promise Banner */}
        <div className="workshop-promise-banner">
          <div className="promise-icon">
            <i className="fa-solid fa-video"></i>
          </div>
          <div className="promise-content">
            <h4>Live WhatsApp Photo & Video Updates Guaranteed</h4>
            <p>
              During every critical service milestone—engine oil drainage, OEM filter unpacking, brake caliper greasing, 
              and chassis torque checks—high-resolution photos and video verification clips are sent directly to your WhatsApp. 
              No additional part is replaced without your explicit prior authorization.
            </p>
          </div>
          <div className="promise-cta">
            <a href="tel:9012862412" className="btn btn-outline" style={{ whiteSpace: 'nowrap' }}>
              <i className="fa-solid fa-phone"></i> 90128 62412
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
