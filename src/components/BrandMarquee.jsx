import React from 'react';

const BRANDS = [
  'Mercedes-Benz', 'BMW', 'Audi', 'Porsche', 'Jaguar Land Rover',
  'Volvo', 'Volkswagen', 'Skoda', 'Toyota', 'Honda', 'Hyundai',
  'Kia', 'Tata Motors', 'Mahindra', 'Maruti Suzuki', 'MG Motors',
  'Ford', 'Renault & Nissan'
];

export default function BrandMarquee() {
  return (
    <section className="brand-marquee-section" aria-label="Supported Car Brands">
      <div className="brand-marquee-title">Multi-Brand Precision Care For All Leading Marques</div>
      <div className="marquee-track">
        {BRANDS.map((brand, i) => (
          <div className="brand-badge" key={`brand-1-${i}`}>
            <span className="brand-icon-circ"><i className="fa-solid fa-car"></i></span>
            <span>{brand}</span>
          </div>
        ))}
        {/* Duplicate for seamless infinite loop */}
        {BRANDS.map((brand, i) => (
          <div className="brand-badge" key={`brand-2-${i}`}>
            <span className="brand-icon-circ"><i className="fa-solid fa-car"></i></span>
            <span>{brand}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
