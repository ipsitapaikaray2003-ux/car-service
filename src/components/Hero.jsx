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
      {/* 100% Clear Video Layer */}
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

        {/* Minimal top and bottom edge framing only, keeping the video completely clear */}
        <div className="hero-video-vignette"></div>
      </div>

      {/* Floating Cinematic Branding & Controls Dock */}
      <div className="container hero-cinematic-dock">
        <div className="hero-floating-glass-bar">
          <div className="bar-brand-group">
            <span className="pulse-dot"></span>
            <div>
              <h1 className="hero-logo-name">Multi Brand Car Service Center</h1>
              <p className="hero-logo-sub">Precision Automotive Engineering & Detailing • Rehta Mafi, Moradabad</p>
            </div>
          </div>

          <div className="bar-actions-group">
            <a href="tel:9012862412" className="btn btn-outline hotline-pill" style={{ fontFamily: 'var(--font-mono)' }}>
              <i className="fa-solid fa-phone-volume"></i>
              <span>90128 62412</span>
            </a>

            <button 
              type="button" 
              className="btn btn-primary"
              onClick={() => onOpenBooking('Standard Service')}
            >
              <i className="fa-regular fa-calendar-check"></i>
              <span>Book Service</span>
            </button>

            <a href="#quick-estimate" className="btn btn-outline">
              <i className="fa-solid fa-calculator"></i>
              <span>Quick Estimate</span>
            </a>

            {/* Video Playback & Audio Controls */}
            <div className="hero-media-buttons">
              <button 
                type="button" 
                className="btn-media-ctrl"
                onClick={togglePlay}
                title={isPlaying ? 'Pause Video' : 'Play Video'}
                aria-label={isPlaying ? 'Pause Video' : 'Play Video'}
              >
                <i className={`fa-solid ${isPlaying ? 'fa-pause' : 'fa-play'}`}></i>
              </button>

              <button 
                type="button" 
                className={`btn-media-ctrl ${!isMuted ? 'active-audio' : ''}`}
                onClick={toggleMute}
                title={isMuted ? 'Unmute Audio' : 'Mute Audio'}
                aria-label={isMuted ? 'Unmute Audio' : 'Mute Audio'}
              >
                <i className={`fa-solid ${isMuted ? 'fa-volume-xmark' : 'fa-volume-high'}`}></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
