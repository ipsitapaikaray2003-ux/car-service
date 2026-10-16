import React, { useState, useEffect } from 'react';

export default function FloatingActions() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <aside className="floating-actions-dock" aria-label="Quick Communication">
      {showScrollTop && (
        <button 
          type="button" 
          className="floating-btn"
          onClick={scrollToTop}
          style={{ background: 'var(--bg-surface-elevated)', border: '1px solid var(--border-subtle)', color: 'var(--neon-cyan)' }}
          aria-label="Scroll to top"
        >
          <i className="fa-solid fa-chevron-up"></i>
          <span className="floating-tooltip">Back to Top</span>
        </button>
      )}

      <a 
        href="https://wa.me/919012862412?text=Hello%20Multi%20Brand%20Car%20Service%20Center,%20I%20would%20like%20to%20book%20a%20car%20service%20in%20Bangalore." 
        target="_blank" 
        rel="noopener noreferrer" 
        className="floating-btn floating-whatsapp" 
        aria-label="Chat on WhatsApp"
      >
        <i className="fa-brands fa-whatsapp"></i>
        <span className="floating-tooltip">Chat on WhatsApp (9012862412)</span>
      </a>

      <a 
        href="tel:9012862412" 
        className="floating-btn floating-call" 
        aria-label="Call Hotline"
      >
        <i className="fa-solid fa-phone"></i>
        <span className="floating-tooltip">Call Direct: 9012862412</span>
      </a>
    </aside>
  );
}
