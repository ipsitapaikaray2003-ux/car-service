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
    <section className="section" id="restoration">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Interactive Showcase</span>
          <h2 className="section-title">Witness The Transformation</h2>
          <p className="section-desc">
            Drag the interactive slider below to see how our 9H ceramic coating and multi-stage paint restoration eliminates deep swirl marks and creates a flawless liquid mirror reflection.
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
          {/* After Image */}
          <div className="ba-image-wrapper">
            <img 
              src="/images/detailing.jpg" 
              alt="After Ceramic Coating Deep Mirror Gloss" 
              className="ba-image-after" 
            />
            <span className="ba-label-after">9H Ceramic Mirror Finish</span>
          </div>

          {/* Before Image with dynamic clip */}
          <div 
            className="ba-image-before-container"
            style={{ width: `${sliderPosition}%` }}
          >
            <img 
              src="/images/detailing.jpg" 
              alt="Before Restoration Faded Paint" 
              className="ba-image-before" 
            />
            <span className="ba-label-before">Before Restoration</span>
          </div>

          {/* Slider Handle */}
          <div 
            className="ba-handle"
            style={{ left: `${sliderPosition}%` }}
          >
            <i className="fa-solid fa-arrows-left-right"></i>
          </div>
        </div>
      </div>
    </section>
  );
}
