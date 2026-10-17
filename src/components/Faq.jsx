import React, { useState } from 'react';

const FAQS = [
  {
    q: 'How does Multi Brand Car Service Center compare with authorized dealerships?',
    a: 'Multi Brand Car Service Center uses the same OEM-grade lubricants, computer diagnostic software, and manufacturer repair checklists as authorized dealers. Furthermore, we provide 100% transparency via live WhatsApp photo/video updates and never replace parts without your direct consent.'
  },
  {
    q: 'Is doorstep pickup and drop available across Moradabad, Thakurdwara, and Dilari?',
    a: 'Yes! For all scheduled periodic services and major repair bookings, we provide doorstep pickup and drop across Village Rehta Mafi, Thana Dilari, Tehsil Thakurdwara, and Moradabad district areas.'
  },
  {
    q: 'What warranty do I receive on car parts and service?',
    a: 'All mechanical repairs and periodic services come with our comprehensive 6-Month / 10,000 KM warranty. Ceramic coatings feature 2 to 3-year warranty cards, while PPF installations include up to 10-year manufacturer anti-yellowing warranties.'
  },
  {
    q: 'How long does a standard periodic service take?',
    a: 'A Standard Service typically takes 3 to 4 hours. If your car is picked up in the morning (between 8:30 AM and 10:30 AM), it is delivered back to your doorstep clean and inspected on the same evening.'
  },
  {
    q: 'Do you service European and luxury cars like BMW, Audi, and Mercedes?',
    a: 'Yes, our master technicians are experienced with German and luxury marques. We have specialized OBD diagnostic software, synthetic oils meeting BMW Longlife and VW 502/505 standards, and genuine OEM parts for luxury vehicles.'
  }
];

export default function Faq() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggle = (idx) => {
    setOpenIndex(openIndex === idx ? -1 : idx);
  };

  return (
    <section className="section" id="faq">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Got Questions?</span>
          <h2 className="section-title">Frequently Asked Questions</h2>
          <p className="section-desc">
            Everything you need to know about our multi-brand workshop policies, warranties, and service procedures.
          </p>
        </div>

        <div className="faq-grid">
          {FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div className={`faq-item ${isOpen ? 'active' : ''}`} key={idx}>
                <div className="faq-question" onClick={() => toggle(idx)}>
                  <span>{faq.q}</span>
                  <div className="faq-toggle-icon">
                    <i className="fa-solid fa-chevron-down"></i>
                  </div>
                </div>
                <div className="faq-answer">
                  {faq.a}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
