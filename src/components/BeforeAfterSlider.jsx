import React, { useState, useRef } from 'react';

export default function BeforeAfterSlider() {
  const [sliderPosition, setSliderPosition] = useState(50);
  const containerRef = useRef(null);
  const isDragging = useRef(false);

  const updatePosition = (clientX) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    let offsetX = clientX - rect.left;
    if (offsetX < 0) offsetX = 0;
    if (offsetX > rect.width) offsetX = rect.width;
    const percentage = (offsetX / rect.width) * 100;
    setSliderPosition(percentage);
  };

  const handleMouseDown = (e) => {
    isDragging.current = true;
    updatePosition(e.clientX);
  };

  const handleMouseMove = (e) => {
    if (!isDragging.current) return;
    updatePosition(e.clientX);
  };

  const handleMouseUp = () => {
    isDragging.current = false;
  };

  const handleTouchStart = (e) => {
    isDragging.current = true;
    if (e.touches[0]) updatePosition(e.touches[0].clientX);
  };

  const handleTouchMove = (e) => {
    if (!isDragging.current) return;
    if (e.touches[0]) updatePosition(e.touches[0].clientX);
  };

  const handleTouchEnd = () => {
    isDragging.current = false;
  };

  return (
    <section className="section before-after-section" id="restoration">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Interactive Paint Restoration</span>
          <h2 className="section-title">Witness The Transformation</h2>
          <p className="section-desc">
            Drag the interactive slider below to witness how our 3-stage compound paint correction and 9H nano-ceramic coating 
            eliminates deep swirl marks, hazing, and oxidation to reveal deep liquid reflections.
          </p>
        </div>

        <div 
          className="before-after-container"
          ref={containerRef}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {/* After Image: Ceramic Coating Liquid Gloss */}
          <div className="ba-image-wrapper">
            <img 
              src="/images/ceramic_polish_real.jpg" 
              alt="After 9H Ceramic Coating Mirror Gloss" 
              className="ba-image-after" 
            />
            <span className="ba-label-after">
              <i className="fa-solid fa-sparkles"></i> 9H Ceramic Mirror Finish (After)
            </span>
          </div>

          {/* Before Image with dynamic clip container */}
          <div 
            className="ba-image-before-container"
            style={{ width: `${sliderPosition}%` }}
          >
            <img 
              src="/images/ceramic_polish_real.jpg" 
              alt="Before Restoration Swirled Paint" 
              className="ba-image-before" 
            />
            <span className="ba-label-before">
              <i className="fa-solid fa-cloud"></i> Swirled & Oxidized Paint (Before)
            </span>
          </div>

          {/* Center Draggable Handle */}
          <div 
            className="ba-handle"
            style={{ left: `${sliderPosition}%` }}
            aria-label="Drag slider to compare before and after"
          >
            <div className="ba-handle-line"></div>
            <div className="ba-handle-button">
              <i className="fa-solid fa-arrows-left-right"></i>
            </div>
            <div className="ba-handle-line"></div>
          </div>
        </div>

        {/* Supporting micro-features under slider */}
        <div className="ba-metrics-row">
          <div className="ba-metric-item">
            <i className="fa-solid fa-droplet"></i>
            <span>110° Hydrophobic Water Beading</span>
          </div>
          <div className="ba-metric-item">
            <i className="fa-solid fa-shield"></i>
            <span>3-Year High-Gloss Warranty</span>
          </div>
          <div className="ba-metric-item">
            <i className="fa-solid fa-sun"></i>
            <span>UV & Chemical Acid Protection</span>
          </div>
        </div>
      </div>
    </section>
  );
}
