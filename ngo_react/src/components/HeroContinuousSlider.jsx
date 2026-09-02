import React from 'react';

const BASE = import.meta.env.BASE_URL;

const slideItems = [
  {
    id: 1,
    image: `${BASE}images/child_welfare_care.jpg`,
    title: 'Maternal & Child Health',
    location: 'Sokoto North & South',
    category: 'Healthcare & RMNCAH',
    badge: '1,500+ Reached'
  },
  {
    id: 2,
    image: `${BASE}images/child_nutrition.jpg`,
    title: 'Child Nutrition & School Welfare',
    location: 'Tangaza & Gada LGAs',
    category: 'Nutrition Support',
    badge: 'Active Outreach'
  },
  {
    id: 3,
    image: `${BASE}images/women_empowerment.jpg`,
    title: 'Women & Social Inclusion (GESI)',
    location: 'Dange Shuni LGA',
    category: 'Empowerment',
    badge: 'Community Groups'
  },
  {
    id: 4,
    image: `${BASE}images/disaster_relief.jpg`,
    title: 'Disaster Relief & Rapid Response',
    location: 'Wamakko & Rural Outreaches',
    category: 'Emergency Care',
    badge: 'Relief Aid'
  },
  {
    id: 5,
    image: `${BASE}images/four_children.jpg`,
    title: 'Safe Spaces & Child Protection',
    location: 'Sokoto Metropolis',
    category: 'Child Welfare',
    badge: 'Protection Nexus'
  },
  {
    id: 6,
    image: `${BASE}images/toddler_baby.jpg`,
    title: 'Infant Wellness & Antenatal Care',
    location: '6 Operational LGAs',
    category: 'Child Survival',
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
          <strong>6</strong>
          <span>LGAs (Tangaza added)</span>
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
