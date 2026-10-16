import React, { useState, useEffect } from 'react';

export default function Navbar({ onOpenBooking, onSelectDepartment }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleDeptClick = (deptId) => {
    if (onSelectDepartment) onSelectDepartment(deptId);
    setMobileMenuOpen(false);
    setMobileDropdownOpen(false);
    const el = document.getElementById('departments');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const closeMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`} id="main-header">
      <div className="container nav-container">
        {/* Logo ONLY - Clean circular badge with subtle breathing gold aura, NO side text */}
        <a href="#home" className="logo-brand logo-only" aria-label="Multi Brand Car Service Center" onClick={closeMenu}>
          <div className="logo-badge-wrapper navbar-logo-badge">
            <img src="/logo.png" alt="Multi Brand Car Service Center Logo" className="logo-badge-img" />
          </div>
        </a>

        {/* Streamlined Minimalist Navigation Links */}
        <nav aria-label="Main Navigation">
          <ul className={`nav-menu ${mobileMenuOpen ? 'open' : ''}`}>
            <li className="nav-item">
              <a href="#home" className="nav-link" onClick={closeMenu}>Home</a>
            </li>
            <li className="nav-item">
              <a href="#quick-estimate" className="nav-link" onClick={closeMenu}>Quick Quote</a>
            </li>
            <li className="nav-item">
              <a href="#departments" className="nav-link" onClick={closeMenu}>Services</a>
            </li>
            <li className="nav-item">
              <a href="#packages" className="nav-link" onClick={closeMenu}>Packages</a>
            </li>
            <li className="nav-item">
              <a href="#service-steps" className="nav-link" onClick={closeMenu}>Service Steps</a>
            </li>
            <li className="nav-item">
              <a href="#restoration" className="nav-link" onClick={closeMenu}>Gallery</a>
            </li>
            <li className="nav-item">
              <a href="#locations" className="nav-link" onClick={closeMenu}>Locations</a>
            </li>
          </ul>
        </nav>

        {/* Action Buttons: Hotline & Primary CTA */}
        <div className="nav-actions">
          <a href="tel:9012862412" className="nav-hotline-pill" aria-label="Call 90128 62412">
            <span className="nav-hotline-dot"></span>
            <i className="fa-solid fa-phone"></i>
            <span className="nav-phone-num">90128 62412</span>
          </a>
          <button 
            type="button" 
            className="btn btn-primary btn-nav-cta"
            onClick={() => onOpenBooking('Standard Service')}
          >
            <i className="fa-regular fa-calendar-check"></i>
            <span>Book Service</span>
          </button>
          <button 
            type="button" 
            className="mobile-toggle" 
            aria-label="Toggle navigation menu"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <i className={`fa-solid ${mobileMenuOpen ? 'fa-xmark' : 'fa-bars'}`}></i>
          </button>
        </div>
      </div>
    </header>
  );
}
