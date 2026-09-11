import React, { useState, useEffect, useRef, useCallback } from 'react';

const BASE = import.meta.env.BASE_URL;

const heroSlides = [
  {
    id: 1,
    image: `${BASE}images/wash_commission/wash_project_signboard.jpg`,
    title: 'WASH Project — School Sanitation',
    location: 'Nana Girls School, Sokoto South LGA'
  },
  {
    id: 2,
    image: `${BASE}images/mnchw_gusau/mnchw_emir_address.jpg`,
    title: 'MNCHW 2026 Flag-Off Ceremony',
    location: 'Emir Palace, Gusau'
  },
  {
    id: 3,
    image: `${BASE}images/dignity_kits/dignity_idp_women_carrying.jpg`,
    title: 'UNICEF Dignity Kits Distribution',
    location: 'IDP Communities, Sokoto'
  },
  {
    id: 4,
    image: `${BASE}images/hepatitis_day/hepatitis_screening_queue.jpg`,
    title: 'World Hepatitis Day Screening',
    location: 'Community Outreach, Sokoto'
  },
  {
    id: 5,
    image: `${BASE}images/capacity_building/workshop_group_banner.jpg`,
    title: 'Capacity Building & WASH Training',
    location: 'Hygiene Promotion Workshop'
  },
  {
    id: 6,
    image: `${BASE}images/reproductive_health/rh_community_outdoors_group.jpg`,
    title: 'Reproductive Health Outreach',
    location: 'Community Sensitization, Sokoto'
  }
];

export default function HeroBackgroundSlider() {
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const autoPlayRef = useRef(null);

  const nextSlide = useCallback(() => {
    setCurrent((prev) => (prev + 1) % heroSlides.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrent((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  }, []);

  useEffect(() => {
    if (!isPaused) {
      autoPlayRef.current = setInterval(nextSlide, 5000);
    }
    return () => {
      if (autoPlayRef.current) clearInterval(autoPlayRef.current);
    };
  }, [isPaused, nextSlide]);

  return (
    <section 
      className="ngo-hero" 
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      aria-label="Saferplace Initiative Hero"
    >
      {/* ── Background Slideshow with Smooth Crossfade & Ken Burns Zoom ── */}
      <div className="ngo-hero-bg-slides" aria-hidden="true">
        {heroSlides.map((slide, index) => {
          const isActive = index === current;
          return (
            <div
              key={slide.id}
              className={`ngo-hero-bg-slide ${isActive ? 'active' : ''}`}
              style={{ backgroundImage: `url(${slide.image})` }}
            />
          );
        })}
      </div>

      {/* ── Balanced Gradient & Vignette Overlays for Visual Clarity ── */}
      <div className="ngo-hero-overlay"></div>
      <div className="ngo-hero-vignette"></div>

      {/* ── Prev / Next Navigation Arrows ── */}
      <button
        onClick={prevSlide}
        aria-label="Previous Slide"
        className="hero-arrow-btn prev"
        style={{
          position: 'absolute',
          left: '1.8rem',
          top: '50%',
          transform: 'translateY(-50%)',
          zIndex: 15,
          background: 'rgba(255,255,255,0.18)',
          backdropFilter: 'blur(12px)',
          WebkitBackdropFilter: 'blur(12px)',
          border: '1px solid rgba(255,255,255,0.3)',
          color: '#FFFFFF',
          width: '50px',
          height: '50px',
          borderRadius: '50%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer',
          fontSize: '1.1rem',
          transition: 'all 0.3s ease',
          boxShadow: '0 8px 24px rgba(0,0,0,0.3)'
        }}
      >
        <i className="fas fa-chevron-left"></i>
      </button>

      <button
        onClick={nextSlide}
        aria-label="Next Slide"
        className="hero-arrow-btn next"
        style={{
          position: 'absolute',
          right: '1.8rem',
          top: '50%',
          transform: 'translateY(-50%)',
          zIndex: 15,
          background: 'rgba(255,255,255,0.18)',
          backdropFilter: 'blur(12px)',
          WebkitBackdropFilter: 'blur(12px)',
          border: '1px solid rgba(255,255,255,0.3)',
          color: '#FFFFFF',
          width: '50px',
          height: '50px',
          borderRadius: '50%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer',
          fontSize: '1.1rem',
          transition: 'all 0.3s ease',
          boxShadow: '0 8px 24px rgba(0,0,0,0.3)'
        }}
      >
        <i className="fas fa-chevron-right"></i>
      </button>

      {/* ── Active Slide Caption Overlay ── */}
      <div className="container" style={{ position: 'relative', zIndex: 10, width: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', minHeight: '62vh', paddingBottom: '3.5rem' }}>
        <div style={{ maxWidth: '620px', textShadow: '0 2px 12px rgba(0,0,0,0.7)' }}>
          <span style={{ display: 'inline-block', fontSize: '0.78rem', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#E9D5FF', marginBottom: '0.6rem', background: 'rgba(108, 43, 217, 0.55)', padding: '0.35rem 0.9rem', borderRadius: '20px', backdropFilter: 'blur(10px)', border: '1px solid rgba(255,255,255,0.25)' }}>
            Field Outreach Gallery · {current + 1} / {heroSlides.length}
          </span>
          <h2 style={{ fontSize: 'clamp(1.8rem, 3.8vw, 2.8rem)', fontWeight: 800, color: '#FFFFFF', margin: '0.4rem 0 0.6rem', lineHeight: '1.2' }}>
            {heroSlides[current].title}
          </h2>
          <p style={{ fontSize: '1.05rem', color: 'rgba(255,255,255,0.92)', margin: 0, display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <i className="fas fa-map-marker-alt" style={{ color: '#C084FC' }}></i>
            {heroSlides[current].location}
          </p>
        </div>
      </div>

      {/* ── Slide Indicator Dots at bottom ── */}
      <div className="ngo-hero-dots" aria-label="Slide navigation">
        {heroSlides.map((slide, idx) => (
          <button
            key={slide.id}
            onClick={() => setCurrent(idx)}
            className={`ngo-hero-dot ${idx === current ? 'active' : ''}`}
            aria-label={`Slide ${idx + 1}: ${slide.title}`}
            title={`${slide.title} (${slide.location})`}
          />
        ))}
      </div>
    </section>
  );
}
