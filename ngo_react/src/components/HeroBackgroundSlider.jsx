import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Link } from 'react-router-dom';
import CountUp from './CountUp';

const BASE = import.meta.env.BASE_URL;

const heroSlides = [
  {
    id: 1,
    image: `${BASE}images/child_welfare_care.jpg`,
    title: 'Maternal & Child Health',
    location: 'Sokoto North & South LGAs'
  },
  {
    id: 2,
    image: `${BASE}images/child_nutrition.jpg`,
    title: 'Child Nutrition & Food Security',
    location: 'Tangaza & Gada LGAs'
  },
  {
    id: 3,
    image: `${BASE}images/women_empowerment.jpg`,
    title: 'Women & Social Inclusion (GESI)',
    location: 'Dange Shuni LGA'
  },
  {
    id: 4,
    image: `${BASE}images/disaster_relief.jpg`,
    title: 'Disaster Relief & Rapid Response',
    location: 'Wamakko & Rural Outreaches'
  },
  {
    id: 5,
    image: `${BASE}images/children/four_children.jpg`,
    title: 'Safe Spaces & Child Protection',
    location: 'Sokoto Metropolis'
  },
  {
    id: 6,
    image: `${BASE}images/children/toddler_baby.jpg`,
    title: 'Infant Wellness & Antenatal Care',
    location: '6 Operational LGAs'
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

      <div className="container ngo-hero-container">

        {/* ── LEFT CARD (Branding & CTAs) ── */}
        <div className="ngo-hero-left-card" data-aos="fade-right">

          {/* Headline */}
          <h1 className="ngo-hero-headline">
            Saferplace<br />
            <span className="ngo-hero-gradient-word">Initiative</span>
          </h1>

          {/* Description */}
          <p className="ngo-hero-desc">
            Dedicated to strengthening community safety, resilience, and social protection for vulnerable populations, particularly women, children, and young people in Sokoto State.
          </p>

          {/* CTA Buttons */}
          <div className="ngo-hero-btns">
            <Link to="/contact" className="ngo-btn-solid">
              Get In Touch <i className="fas fa-arrow-right" style={{ marginLeft: '0.4rem', fontSize: '0.85rem' }}></i>
            </Link>
            <Link to="/about#team" className="ngo-btn-outline">
              Meet Leadership <i className="fas fa-users" style={{ marginLeft: '0.4rem', fontSize: '0.85rem' }}></i>
            </Link>
          </div>
        </div>

        {/* ── RIGHT METRIC CARD ── */}
        <div className="ngo-hero-right-card" data-aos="fade-left" data-aos-delay="100">

          {/* Metric Header Row */}
          <div className="ngo-metric-header">
            <div className="ngo-metric-icon-wrap">
              <i className="fas fa-shield-alt"></i>
            </div>
            <div>
              <h2 className="ngo-metric-big">6 LGAs</h2>
              <p className="ngo-metric-sub">Active Coverage in Sokoto</p>
            </div>
          </div>

          {/* Progress Section */}
          <div className="ngo-progress-wrap">
            <div className="ngo-progress-label-row">
              <span>COMMUNITY PROTECTION &amp; INTEGRITY</span>
              <span className="ngo-progress-percent">100%</span>
            </div>
            <div className="ngo-progress-track">
              <div className="ngo-progress-fill" style={{ width: '100%' }}></div>
            </div>
          </div>

          {/* Stats 3-Col Grid */}
          <div className="ngo-stats-row">
            <div className="ngo-stat-item">
              <strong className="ngo-stat-number"><CountUp end={500} suffix="+" /></strong>
              <span className="ngo-stat-label">STUDENTS</span>
            </div>
            <div className="ngo-stat-divider"></div>
            <div className="ngo-stat-item">
              <strong className="ngo-stat-number"><CountUp end={50} suffix="+" /></strong>
              <span className="ngo-stat-label">CHAMPIONS</span>
            </div>
            <div className="ngo-stat-divider"></div>
            <div className="ngo-stat-item">
              <strong className="ngo-stat-number">6</strong>
              <span className="ngo-stat-label">PILLARS</span>
            </div>
          </div>

          {/* Status Badges Row */}
          <div className="ngo-badge-row">
            <span className="ngo-status-badge registered">
              <span className="ngo-dot green"></span> CAC REGISTERED
            </span>
            <span className="ngo-status-badge sokoto">
              <i className="fas fa-crown" style={{ marginRight: '0.35rem', fontSize: '0.7rem' }}></i>
              SOKOTO BASED
            </span>
          </div>

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
