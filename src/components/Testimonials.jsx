import React, { useState, useEffect } from 'react';

const REVIEWS = [
  {
    author: 'Mohd. Rizwan',
    location: 'Thakurdwara Tehsil, Moradabad',
    car: 'Hyundai Creta SX',
    quote: 'Got my Creta serviced at Multi Brand Car Service Center Village Rehta Mafi. The dealer workshop suggested changing unnecessary parts. Their team diagnosed the actual issue with their OBD scanner, used genuine 100% synthetic engine oil, and sent me live WhatsApp video updates at every step. My car drives super smooth!'
  },
  {
    author: 'Vikas Sharma',
    location: 'Thana Dilari Road, Moradabad',
    car: 'Honda City i-VTEC',
    quote: 'Did a complete 9H ceramic coating and suspension overhaul here. The water beading and glossy mirror finish is incredible on dusty highway roads! The mechanics are highly skilled and transparent with all OEM spares. Highly recommended workshop!'
  },
  {
    author: 'Dr. Amit Verma',
    location: 'Moradabad City',
    car: 'Toyota Innova Crysta',
    quote: 'Had a major dent and deep scratch on my rear door and quarter panel. They repaired and baked it in their dust-free German heated paint booth within 36 hours. You cannot tell it was ever damaged — 100% factory color match!'
  }
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % REVIEWS.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % REVIEWS.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + REVIEWS.length) % REVIEWS.length);
  };

  const current = REVIEWS[currentIndex];

  return (
    <section className="section testimonials-section">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Client Testimonials</span>
          <h2 className="section-title">Trusted By 15,000+ Satisfied Car Owners</h2>
          <p className="section-desc">
            Read real reviews from car owners across Moradabad, Thakurdwara, Dilari, and surrounding regions who trust Multi Brand Car Service Center.
          </p>
        </div>

        <div className="testimonials-carousel-wrapper">
          <div className="testimonial-card">
            <div className="quote-mark">“</div>
            <div className="rating-stars">★★★★★</div>
            <p className="testimonial-quote">"{current.quote}"</p>
            <div className="testimonial-author-row">
              <div className="author-details">
                <h4>{current.author}</h4>
                <p>{current.location}</p>
              </div>
              <span className="author-car-pill">{current.car}</span>
            </div>
          </div>

          <div className="carousel-controls">
            <button 
              type="button" 
              className="carousel-btn prev" 
              onClick={prevSlide}
              aria-label="Previous Testimonial"
            >
              <i className="fa-solid fa-chevron-left"></i>
            </button>
            <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
              {currentIndex + 1} / {REVIEWS.length}
            </span>
            <button 
              type="button" 
              className="carousel-btn next" 
              onClick={nextSlide}
              aria-label="Next Testimonial"
            >
              <i className="fa-solid fa-chevron-right"></i>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
