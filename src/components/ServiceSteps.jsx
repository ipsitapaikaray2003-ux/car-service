import React, { useState } from 'react';

const SERVICE_STEPS = [
  {
    step: '01',
    id: 'diagnostics',
    title: 'Computerized OBD-II Diagnostics & 40-Point Inspection',
    tag: 'Step 1: Digital Scan & Health Check',
    hindiTitle: 'कंप्यूटरीकृत OBD-II डायग्नोस्टिक और 40-बिंदु निरीक्षण',
    image: '/images/diagnostics.jpg',
    duration: '25 - 30 Mins',
    tool: 'Bosch / Launch X431 Pro Diagnostic Scanner',
    partsCheck: 'ECU, ABS, Airbags, Alternator, Battery & Sensors',
    description: 
      'गाड़ी वर्कशॉप में पहुंचते ही सबसे पहले हमारे सर्टिफाइड मास्टर मैकेनिक एडवांस्ड OBD-II डिजिटल स्कैनर को कार के ECU पोर्ट से कनेक्ट करते हैं। इससे इंजन, ट्रांसमिशन, सेंसर्स, एबीएस (ABS) और बैटरी वोल्टेज का लाइव कंप्यूटर टेस्ट होता है। कोई भी काम शुरू करने से पहले ग्राहक को डिजिटल हेल्थ रिपोर्ट भेजी जाती है।',
    englishDesc: 
      'Upon arrival at our Village Rehta Mafi workshop, master mechanics connect professional OBD-II diagnostic scanners to interrogate the vehicle’s ECU. A comprehensive 40-point health check identifies stored trouble codes, sensor drifts, and fluid health before any work begins.',
    checklist: [
      'Complete ECU & Engine Error Code Scanning',
      'Battery Cranking Voltage & Alternator Charging Test',
      'Under-Hood Fluids & Hose Pipe Leakage Check',
      'Tyre Tread Depth & Brake Pad Thickness Digital Measurement',
      'Live WhatsApp Inspection Checklist sent to Owner'
    ]
  },
  {
    step: '02',
    id: 'oil-change',
    title: 'Synthetic Engine Oil Flush & OEM Filter Replacement',
    tag: 'Step 2: Engine Flush & Lubrication',
    hindiTitle: 'सिंथेटिक इंजन ऑयल ड्रेन और नया OEM फिल्टर रिप्लेसमेंट',
    image: '/images/engine_oil_service.jpg',
    duration: '35 - 45 Mins',
    tool: 'Hydraulic Vacuum Oil Drainer & Torque Wrench',
    partsCheck: '100% Fully Synthetic Oil (0W-20 / 5W-30 / 5W-40) & OEM Filter',
    description: 
      'पुराना काला और दूषित इंजन ऑयल नीचे लगे ड्रेन प्लग से पूरी तरह निकाला जाता है। इसके बाद कंपनी के मानक के अनुसार 100% ओरिजिनल फुली-सिंथेटिक इंजन ऑयल (Castrol EDGE / Mobil 1 / Shell) और नया OEM ऑयल फिल्टर लगाया जाता है। साथ ही इंजन एयर फिल्टर और एसी केबिन फिल्टर को रिप्लेस या डी-डस्ट किया जाता है।',
    englishDesc: 
      'Old degraded engine oil is completely drained with bottom-sump vacuum extraction. We refill with genuine, sealed fully-synthetic engine oil matching OEM viscosity specifications, alongside a brand-new original oil filter and fresh sump washer.',
    checklist: [
      'Hot Oil Bottom Sump Vacuum Drain',
      'Brand-New OEM High-Filtration Oil Filter Fitted',
      'Crush Washer & Sump Bolt Torqued to Exact Spec',
      'Engine Air Filter & AC Cabin Filter Replacement / Clean',
      'Synthetic Engine Oil Level Calibrated via Dipstick'
    ]
  },
  {
    step: '03',
    id: 'brakes',
    title: 'Four-Wheel Brake Servicing, Disc Machining & Fluid Bleed',
    tag: 'Step 3: Brake Safety & Stopping Power',
    hindiTitle: 'चारों पहियों की ब्रेक सर्विसिंग, रोटर चेक और फ्लूइड ब्लीड',
    image: '/images/brakes_service.jpg',
    duration: '45 - 60 Mins',
    tool: 'Digital Micrometer, Caliper Spreader & Pressure Bleeder',
    partsCheck: 'Brembo / Bosch / TVS Girling / OEM Brake Pads & DOT 4 Fluid',
    description: 
      'गाड़ी को हाइड्रोलिक लिफ्ट पर उठाकर चारों पहिए खोले जाते हैं। फ्रंट डिस्क ब्रेक पैड्स और रियर ड्रम ब्रेक शूज को बाहर निकालकर मोटाई मापी जाती है। डिस्क रोटर्स पर यदि कोई लाइनिंग या खरोंच है तो उसे री-फेस किया जाता है। कैलिपर्स में हाई-टेम्परेचर सिलिकॉन ग्रीस लगाकर नया DOT-4 ब्रेक फ्लूइड ब्लीड किया जाता है।',
    englishDesc: 
      'All four wheels are removed on a dual-post hydraulic lift. Brake pads, caliper slide pins, and disc rotors undergo micrometer measurement. Brake calipers are greased with anti-seize compound and hydraulic lines pressure-bled with fresh DOT-4 fluid for responsive braking.',
    checklist: [
      'Brake Pad & Shoe Friction Lining Thickness Vernier Scan',
      'Disc Rotor Surface Runout & Lip Grinding / Resurfacing',
      'Caliper Slider Pin Lubrication with Heat-Resistant Synthetic Grease',
      'Hydraulic Line Air Purge & DOT-4 Fluid Top-Up',
      'Emergency Handbrake Cable Tension & Ratchet Calibration'
    ]
  },
  {
    step: '04',
    id: 'suspension',
    title: 'Suspension, Steering Linkages & Underbody Chassis Torque',
    tag: 'Step 4: Underbody & Suspension Alignment',
    hindiTitle: 'सस्पेंशन, स्टीयरिंग लिंकेज और अंडरबॉडी टॉर्क चेक',
    image: '/images/hero_workshop.jpg',
    duration: '40 - 50 Mins',
    tool: 'Heavy-Duty 4-Ton Twin-Post Lift & Precision Torque Wrench',
    partsCheck: 'Struts, Lower Control Arms, Tie Rod Ends, Link Rods & Bushes',
    description: 
      'हाइड्रोलिक लिफ्ट पर गाड़ी को 6 फीट ऊपर उठाकर नीचे का पूरा हिस्सा चेक किया जाता है। लोअर आर्म बुश, शॉक एब्जॉर्बर, लिंक रॉड, स्टीयरिंग रैक, साइलेंसर और ड्राइव शाफ्ट बूट्स की जांच होती है। सभी नट-बोल्ट्स को कंपनी टॉर्क स्पेसिफिकेशन पर टाइट किया जाता है ताकि गड्ढों या ऊबड़-खाबड़ रास्तों पर कोई आवाज न आए।',
    englishDesc: 
      'Elevated on our heavy-duty lift, our technicians inspect every undercarriage component: lower control arms, rubber bushes, tie rod ends, link rods, strut mounts, and exhaust hangers. All fasteners are torqued to OEM specifications.',
    checklist: [
      'Shock Absorber Hydraulic Seal & Rebound Bounce Test',
      'Lower Arm Rubber Bushing Cracking & Free-Play Inspection',
      'Steering Rack, Tie-Rod & Ball Joint Tightness Check',
      'Exhaust Pipe Heat-Shield & Catalytic Converter Secure Mounts',
      'Drive Shaft Rubber Boot & Wheel Bearing Smoothness Verification'
    ]
  },
  {
    step: '05',
    id: 'paint-booth',
    title: 'Dust-Free German Heated Paint Booth & Panel Refinishing',
    tag: 'Step 5: Heated Booth Paint Restoration',
    hindiTitle: 'डस्ट-फ्री जर्मन हीटेड पेंट बूथ और बॉडी स्क्रैच रिपेयर',
    image: '/images/paint_booth.jpg',
    duration: 'Same Day / 24 Hours (if paint repairs opted)',
    tool: 'Downdraft Heated Spray Booth & Spectrophotometer Color Match',
    partsCheck: 'PPG / DuPont / Glasurit Paint & 2K Scratch-Resistant Clear Coat',
    description: 
      'यदि कार में कोई डेंट या स्क्रैच है, तो गाड़ी हमारे सील्ड जर्मन हीटेड पेंट बूथ में जाती है। कंप्यूटर स्पेक्ट्रोफोटोमीटर से 100% ओरिजिनल पेंट कोड मैच किया जाता है। एंटी-रस्ट प्राइमर, बेस कोट और 2K सिरेमिक क्लियर कोट लगाकर 60°C पर बेक किया जाता है, जिससे पेंट कभी फीका नहीं पड़ता और बिल्कुल नई गाड़ी जैसी चमक आती है।',
    englishDesc: 
      'For any dent or scratch repairs, vehicles enter our dust-free German heated down-draft paint booth. Paint codes are computer-matched with spectrophotometer accuracy, applied under positive pressure, and baked at 60°C for lifetime gloss.',
    checklist: [
      'Computer Spectrophotometer Color Shade Matching',
      'Anti-Corrosion Epoxy Primer & Micro-Putty Levelling',
      'High-Solid 2K Clear Coat Spray in Dust-Free Positive Pressure Booth',
      '60°C Infrared Thermal Oven Baking for Rock-Hard Finish',
      'Zero Dust Bubbles & 100% Factory Gloss Guarantee'
    ]
  },
  {
    step: '06',
    id: 'detailing',
    title: 'Interior Steam Spa, AC Deodorization & 9H Ceramic Gloss Wash',
    tag: 'Step 6: Showroom Finish & Quality Handover',
    hindiTitle: 'इंटीरियर स्टीम स्पा, एसी सैनिटाइजेशन और 9H ग्लॉस वॉश',
    image: '/images/detailing.jpg',
    duration: '45 - 60 Mins',
    tool: 'High-Pressure Steam Gun, Kärcher Snow Foam Jet & Dual-Action Polisher',
    partsCheck: 'pH-Neutral Foam Shampoo, Meguiar\'s UV Protectant & Hydrophobic Sealant',
    description: 
      'सर्विस का अंतिम और सबसे शानदार चरण! गाड़ी के पूरे केबिन की हाई-सक्शन वैक्यूमिंग, सीट्स और कार्पेट की जर्मन स्टीम सैनिटाइजेशन, एसी वेंट्स बैक्टीरिया डिसइंफेक्शन और डैशबोर्ड यूवी पॉलिश की जाती है। बाहर पीएच-न्यूट्रल स्नो फोम वॉश और हाइड्रोफोबिक ग्लॉस सीलेंट लगाया जाता है। इसके बाद 5-KM फाइनल रोड टेस्ट और कस्टमर को गाड़ी डिलीवर की जाती है।',
    englishDesc: 
      'The final touch of perfection: high-temperature steam sanitization eliminates cabin bacteria, AC vents are sanitized, and leather/dashboard surfaces are conditioned. The exterior receives a snow-foam wash, hydrophobic gloss coat, and tyre dressing followed by a final road test.',
    checklist: [
      'High-Temperature Deep Steam Cabin & Upholstery Sanitization',
      'Air Conditioning Air Duct Antimicrobial Deodorizing',
      'pH-Neutral Snow Foam Body Wash & Underbody Mud Blast',
      'Hydrophobic Paint Gloss Sealant & Tyre Dressing Treatment',
      '5-KM Final Master Mechanic Road Test & WhatsApp Delivery Video'
    ]
  }
];

export default function ServiceSteps({ onOpenBooking }) {
  const [activeStepIndex, setActiveStepIndex] = useState(0);

  const currentStep = SERVICE_STEPS[activeStepIndex];

  return (
    <section className="section service-steps-section" id="service-steps">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-tag">
            <i className="fa-solid fa-screwdriver-wrench"></i> Workshop Transparency
          </span>
          <h2 className="section-title">
            वर्कशॉप में आपकी कार की सर्विस कैसे होती है?
          </h2>
          <p className="section-desc">
            Complete step-by-step automotive service journey with genuine OEM parts, computerized diagnostics, 
            and live photo/video updates on WhatsApp throughout every stage at our Village Rehta Mafi workshop.
          </p>
        </div>

        {/* Step Selector Horizontal Pills */}
        <div className="steps-selector-tabs">
          {SERVICE_STEPS.map((stepItem, idx) => (
            <button
              key={stepItem.id}
              type="button"
              className={`step-tab-btn ${activeStepIndex === idx ? 'active' : ''}`}
              onClick={() => setActiveStepIndex(idx)}
              aria-label={`Select ${stepItem.title}`}
            >
              <span className="step-tab-number">{stepItem.step}</span>
              <span className="step-tab-text">
                <span className="step-tab-badge">{stepItem.tag.split(':')[0]}</span>
                <span className="step-tab-name">{stepItem.title.split('&')[0]}</span>
              </span>
            </button>
          ))}
        </div>

        {/* Active Step Featured Spotlight Display */}
        <div className="active-step-spotlight">
          <div className="active-step-media">
            <div className="active-step-image-box">
              <img 
                src={currentStep.image} 
                alt={currentStep.title} 
                className="active-step-photo" 
                loading="eager"
              />
              <div className="active-step-overlay-tag">
                <span className="badge-step-num">Step {currentStep.step}</span>
                <span className="badge-step-duration">
                  <i className="fa-regular fa-clock"></i> {currentStep.duration}
                </span>
              </div>
            </div>
            
            {/* Quick Meta Cards */}
            <div className="step-meta-cards">
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
            <h4 className="active-step-hindi-title">{currentStep.hindiTitle}</h4>

            {/* Hindi Explanation Highlight Box */}
            <div className="step-hindi-box">
              <div className="step-box-header">
                <i className="fa-solid fa-circle-info"></i>
                <span>सरल हिंदी में समझें (क्या काम होता है):</span>
              </div>
              <p className="step-hindi-text">{currentStep.description}</p>
            </div>

            {/* English Detail */}
            <p className="step-english-text">{currentStep.englishDesc}</p>

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

        {/* All 6 Steps Visual Card Grid (Complete Overview) */}
        <div className="all-steps-header">
          <h3 className="all-steps-title">
            <i className="fa-solid fa-images"></i> Full 6-Stage Workshop Visual Gallery
          </h3>
          <p className="all-steps-sub">
            Click on any service card below to view equipment specs and quality checklist.
          </p>
        </div>

        <div className="steps-gallery-grid">
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
                <p className="gallery-card-hindi">{step.hindiTitle}</p>
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
              हमारें यहाँ कार सर्विसिंग के दौरान हर मुख्य स्टेप (इंजन ऑयल ड्रेन, नया फिल्टर अनपैकिंग, ब्रेक पैड कंडीशन और अंडरबॉडी चेक) का 
              फोटो व वीडियो आपके व्हाट्सएप नंबर पर भेजा जाता है। बिना आपकी सहमति कोई भी नया पार्ट नहीं बदला जाता।
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
