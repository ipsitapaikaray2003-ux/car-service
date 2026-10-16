import React from 'react';

const STEPS = [
  {
    num: '01',
    title: 'Book in 60 Seconds',
    desc: 'Select your car and preferred package online, or chat with our service advisors directly on WhatsApp.'
  },
  {
    num: '02',
    title: 'Doorstep Pickup & Drop',
    desc: 'Our dedicated pilot arrives at your location across Thakurdwara, Dilari, or Moradabad, documents vehicle condition, and transports it safely.'
  },
  {
    num: '03',
    title: 'Inspection & Approval',
    desc: 'Master technicians run complete OBD-II scanning and send itemized digital estimates with photos for your thumbs-up.'
  },
  {
    num: '04',
    title: 'Road-Ready Delivery',
    desc: 'Your car is delivered back fully sanitized, road-tested, and sparkling clean with invoice and warranty certificate.'
  }
];

export default function Workflow() {
  return (
    <section className="section" id="workflow">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Seamless Experience</span>
          <h2 className="section-title">How It Works In 4 Simple Steps</h2>
          <p className="section-desc">
            Getting your car professionally serviced in Moradabad, Thakurdwara, and Dilari has never been this simple and effortless.
          </p>
        </div>

        <div className="workflow-grid">
          {STEPS.map((step, idx) => (
            <div className="step-card" key={idx}>
              <div className="step-number-bubble">{step.num}</div>
              <h3 className="step-title">{step.title}</h3>
              <p className="step-desc">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
