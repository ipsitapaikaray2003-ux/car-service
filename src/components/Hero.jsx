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

      {/* Minimal unobtrusive corner media controls only */}
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
