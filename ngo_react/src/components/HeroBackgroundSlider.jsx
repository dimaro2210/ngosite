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

      {/* ── Active Slide Caption Overlay with Bold, High-Contrast Typography ── */}
      <div className="container" style={{ position: 'relative', zIndex: 10, width: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', minHeight: '65vh', paddingBottom: '3.8rem' }}>
        <div style={{ maxWidth: '680px', textShadow: '0 3px 20px rgba(0,0,0,0.9)' }}>
          <span style={{ 
            display: 'inline-block', 
            fontSize: '0.85rem', 
            fontWeight: 800, 
            letterSpacing: '0.1em', 
            textTransform: 'uppercase', 
            color: '#F3E8FF', 
            marginBottom: '0.75rem', 
            background: 'rgba(108, 43, 217, 0.75)', 
            padding: '0.45rem 1.1rem', 
            borderRadius: '24px', 
            backdropFilter: 'blur(12px)', 
            border: '1.5px solid rgba(255,255,255,0.35)',
            boxShadow: '0 4px 16px rgba(0,0,0,0.4)'
          }}>
            Field Outreach Gallery · {current + 1} / {heroSlides.length}
          </span>
          <h1 style={{ 
            fontSize: 'clamp(2.2rem, 4.8vw, 3.5rem)', 
            fontWeight: 900, 
            color: '#FFFFFF', 
            margin: '0.4rem 0 0.85rem', 
            lineHeight: '1.18',
            letterSpacing: '-0.025em',
            textShadow: '0 4px 28px rgba(0,0,0,0.95), 0 2px 8px rgba(0,0,0,0.95)'
          }}>
            {heroSlides[current].title}
          </h1>
          <p style={{ 
            fontSize: '1.25rem', 
            fontWeight: 700, 
            color: '#FFFFFF', 
            margin: 0, 
            display: 'flex', 
            alignItems: 'center', 
            gap: '0.6rem',
            textShadow: '0 2px 14px rgba(0,0,0,0.9)'
          }}>
            <i className="fas fa-map-marker-alt" style={{ color: '#D8B4FE', fontSize: '1.2rem' }}></i>
            {heroSlides[current].location}
          </p>
        </div>
      </div>
    </section>
  );
}
