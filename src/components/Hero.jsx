import React, { useState, useRef } from 'react';

export default function Hero({ onOpenBooking }) {
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef(null);

  const togglePlay = () => {
    if (videoRef.current) {
      if (videoRef.current.paused) {
        videoRef.current.play();
        setIsPlaying(true);
      } else {
        videoRef.current.pause();
        setIsPlaying(false);
      }
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(videoRef.current.muted);
    }
  };

  return (
    <section className="hero-cinematic" id="home">
      {/* Cinematic Fullscreen Video Layer */}
      <div className="hero-video-wrapper">
        <video 
          ref={videoRef}
          className="hero-clear-video" 
          autoPlay 
          loop 
          muted={isMuted}
          playsInline
        >
          <source src="/car-service.mp4" type="video/mp4" />
          <source src="/car service.mp4" type="video/mp4" />
        </video>

        {/* Cinematic dark glass gradient vignette overlay */}
        <div className="hero-cinematic-overlay"></div>
      </div>

      {/* Hero Content Layer */}
      <div className="container hero-content-container">
        <div className="hero-text-content">
          <div className="hero-status-pill">
            <span className="hero-pulse-dot"></span>
            <span className="hero-status-text">Next-Gen Multi-Brand Automotive Center • Moradabad</span>
          </div>

          <h1 className="hero-headline">
            PRECISION AUTOMOTIVE <br />
            <span className="hero-headline-accent">ENGINEERING & CARE</span>
          </h1>

          <p className="hero-subtext">
            Experience dealership-level precision at our modern workshop in Village Rehta Mafi, Moradabad. 
            Featuring computerized OBD-II diagnostics, German heated paint booth, and 9H ceramic detailing.
          </p>

          <div className="hero-cta-wrapper">
            <button 
              type="button" 
              className="btn btn-primary btn-hero-primary"
              onClick={() => onOpenBooking('Standard Service')}
              id="hero-book-btn"
            >
              <i className="fa-regular fa-calendar-check"></i>
              <span>Book a Service</span>
            </button>

            <a 
              href="tel:9012862412" 
              className="btn btn-glass btn-hero-secondary"
              id="hero-call-btn"
            >
              <i className="fa-solid fa-phone"></i>
              <span>Call 90128 62412</span>
            </a>
          </div>

          {/* Animated Stats Ticker Strip */}
          <div className="hero-stats-grid">
            <div className="hero-stat-card">
              <span className="hero-stat-value">12,500+</span>
              <span className="hero-stat-label">Cars Serviced</span>
            </div>
            <div className="hero-stat-card">
              <span className="hero-stat-value">15+</span>
              <span className="hero-stat-label">Years Experience</span>
            </div>
            <div className="hero-stat-card">
              <span className="hero-stat-value">99.4%</span>
              <span className="hero-stat-label">Customer Satisfaction</span>
            </div>
            <div className="hero-stat-card">
              <span className="hero-stat-value">4.9 ★</span>
              <span className="hero-stat-label">Google Rated Hub</span>
            </div>
          </div>
        </div>
      </div>

      {/* Unobtrusive corner media controls */}
      <div className="hero-corner-controls">
        <button 
          type="button" 
          className="btn-corner-media"
          onClick={togglePlay}
          title={isPlaying ? 'Pause Video' : 'Play Video'}
          aria-label={isPlaying ? 'Pause Video' : 'Play Video'}
        >
          <i className={`fa-solid ${isPlaying ? 'fa-pause' : 'fa-play'}`}></i>
        </button>

        <button 
          type="button" 
          className={`btn-corner-media ${!isMuted ? 'active-audio' : ''}`}
          onClick={toggleMute}
          title={isMuted ? 'Unmute Audio' : 'Mute Audio'}
          aria-label={isMuted ? 'Unmute Audio' : 'Mute Audio'}
        >
          <i className={`fa-solid ${isMuted ? 'fa-volume-xmark' : 'fa-volume-high'}`}></i>
        </button>
      </div>
    </section>
  );
}
