import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import QuickEstimateSection from './components/QuickEstimateSection';
import BrandMarquee from './components/BrandMarquee';
import Departments from './components/Departments';
import Packages from './components/Packages';
import ServiceSteps from './components/ServiceSteps';
import BeforeAfterSlider from './components/BeforeAfterSlider';
import WhyChooseUs from './components/WhyChooseUs';
import Workflow from './components/Workflow';
import Locations from './components/Locations';
import Testimonials from './components/Testimonials';
import Faq from './components/Faq';
import Footer from './components/Footer';
import BookingModal from './components/BookingModal';
import FloatingActions from './components/FloatingActions';

export default function App() {
  const [modalOpen, setModalOpen] = useState(false);
  const [initialService, setInitialService] = useState('Standard Service');
  const [quoteData, setQuoteData] = useState(null);
  const [activeDept, setActiveDept] = useState('dept-periodic');
  const [toast, setToast] = useState({ show: false, title: '', message: '' });

  const showToast = (title, message) => {
    setToast({ show: true, title, message });
    setTimeout(() => {
      setToast(prev => ({ ...prev, show: false }));
    }, 4500);
  };

  const handleOpenBooking = (serviceName = 'Standard Service') => {
    setInitialService(serviceName);
    setQuoteData(null);
    setModalOpen(true);
  };

  const handleOpenBookingWithQuote = (quote) => {
    setQuoteData(quote);
    setInitialService(quote.service);
    setModalOpen(true);
  };

  const handleSelectDepartment = (deptId) => {
    setActiveDept(deptId);
  };

  return (
    <div className="app-root">
      {/* Main Navbar - Logo Only, Transparent & Premium */}
      <Navbar 
        onOpenBooking={handleOpenBooking} 
        onSelectDepartment={handleSelectDepartment}
      />

      {/* Hero Section - Crystal Clear 100% Video Theater */}
      <Hero 
        onOpenBooking={handleOpenBooking} 
      />

      {/* Multi-Brand Infinite Marquee Ticker */}
      <BrandMarquee />

      {/* Quick Estimate & Workshop Overview (Content moved from Hero) */}
      <QuickEstimateSection 
        onOpenBooking={handleOpenBooking}
        onShowToast={showToast}
      />

      {/* Specialized Departments */}
      <Departments 
        activeDept={activeDept}
        onSelectDept={setActiveDept}
        onOpenBooking={handleOpenBooking}
      />

      {/* Maintenance Packages */}
      <Packages 
        onOpenBooking={handleOpenBooking}
      />

      {/* Step-by-Step Service Process with Photos & Explanations */}
      <ServiceSteps 
        onOpenBooking={handleOpenBooking}
      />

      {/* Interactive Before & After Slider */}
      <BeforeAfterSlider />

      {/* Why Choose Us */}
      <WhyChooseUs />

      {/* 4-Step Process */}
      <Workflow />

      {/* 3 Bangalore Locations */}
      <Locations />

      {/* Client Testimonials */}
      <Testimonials />

      {/* FAQ Accordion */}
      <Faq />


      {/* Footer */}
      <Footer 
        onOpenBooking={handleOpenBooking}
      />

      {/* Floating Action Buttons */}
      <FloatingActions />

      {/* Interactive Appointment Modal */}
      <BookingModal 
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        initialService={initialService}
        quoteData={quoteData}
        onShowToast={showToast}
      />

      {/* Toast Notification */}
      <div className={`toast-notice ${toast.show ? 'show' : ''}`} role="alert">
        <div className="toast-icon">✓</div>
        <div>
          <div className="toast-title">{toast.title}</div>
          <div className="toast-message">{toast.message}</div>
        </div>
      </div>
    </div>
  );
}
