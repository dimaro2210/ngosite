import React from 'react';

const BASE = import.meta.env.BASE_URL;

const slideItems = [
  {
    id: 1,
    image: `${BASE}images/wash_commission/wash_students_assembly.jpg`,
    title: 'WASH School Sanitation Project',
    location: 'Nana Girls School, Sokoto',
    category: 'WASH & Sanitation',
    badge: 'Commissioned 2026'
  },
  {
    id: 2,
    image: `${BASE}images/mnchw_gusau/mnchw_speech_emir_palace.jpg`,
    title: 'MNCHW 2026 Flag-Off',
    location: 'Emir Palace, Gusau',
    category: 'Healthcare & RMNCAH',
    badge: 'State-Wide Campaign'
  },
  {
    id: 3,
    image: `${BASE}images/dignity_kits/dignity_unicef_box_handover.jpg`,
    title: 'UNICEF Dignity Kit Distribution',
    location: 'IDP Communities, Sokoto',
    category: 'Humanitarian Aid',
    badge: 'Relief Aid'
  },
  {
    id: 4,
    image: `${BASE}images/hepatitis_day/hepatitis_blood_test.jpg`,
    title: 'World Hepatitis Day Screening',
    location: 'Community Outreach, Sokoto',
    category: 'Health Screening',
    badge: 'Free Testing'
  },
  {
    id: 5,
    image: `${BASE}images/capacity_building/workshop_facilitators_panel.jpg`,
    title: 'Capacity Building Workshop',
    location: 'Hygiene Promotion Training',
    category: 'Training & Development',
    badge: 'WASH Prefects'
  },
  {
    id: 6,
    image: `${BASE}images/reproductive_health/rh_mothers_mat_session.jpg`,
    title: 'Reproductive Health Outreach',
    location: 'Community Sensitization',
    category: 'Maternal Health',
    badge: 'Grassroots Care'
  }
];

export default function HeroContinuousSlider() {
  // Duplicate array for seamless infinite marquee loop
  const duplicatedItems = [...slideItems, ...slideItems];

  return (
    <div className="hero-continuous-slider-wrap">
      <div className="slider-header-badge">
        <span className="live-pulse-dot"></span>
        <span>Women &amp; Child Field Missions · 6 Sokoto LGAs</span>
      </div>

      <div className="hero-slider-track-container">
        <div className="hero-slider-track">
          {duplicatedItems.map((item, index) => (
            <div key={`${item.id}-${index}`} className="hero-slide-card">
              <div className="hero-slide-img-box">
                <img src={item.image} alt={item.title} loading="lazy" />
                <div className="hero-slide-overlay"></div>
                <span className="hero-slide-tag">{item.category}</span>
                <span className="hero-slide-badge">{item.badge}</span>
              </div>
              <div className="hero-slide-caption">
                <h4>{item.title}</h4>
                <p><i className="fas fa-map-marker-alt"></i> {item.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Interactive Quick Metrics Bar at bottom of slider */}
      <div className="hero-slider-footer-stats">
        <div className="slider-mini-stat">
          <strong>6 States</strong>
          <span>Across 33 LGAs</span>
        </div>
        <div className="slider-mini-divider"></div>
        <div className="slider-mini-stat">
          <strong>1,500+</strong>
          <span>Adolescents, Women &amp; Children</span>
        </div>
        <div className="slider-mini-divider"></div>
        <div className="slider-mini-stat">
          <strong>9</strong>
          <span>Core Focus Areas</span>
        </div>
      </div>
    </div>
  );
}
