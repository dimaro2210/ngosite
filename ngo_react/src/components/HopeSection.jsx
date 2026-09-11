import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const BASE = import.meta.env.BASE_URL;

const MEMBERS = [
  { 
    id: '1', 
    name: 'UNICEF', 
    role: "United Nations Children's Fund", 
    category: 'International Partner',
    col: 1,
    icon: 'fas fa-globe-africa',
    image: `${BASE}images/unicef_logo.png`,
    social: { website: 'https://unicef.org' } 
  },
  { 
    id: '2', 
    name: 'Sokoto State Government', 
    role: 'Ministry of Budget & Economic Planning', 
    category: 'State Governance',
    col: 2,
    icon: 'fas fa-landmark',
    image: `${BASE}images/sokoto_state_logo.png`,
    social: { website: '#' } 
  },
  { 
    id: '3', 
    name: 'EL-MAX', 
    role: 'Procurement | Logistics | Event Planning', 
    category: 'Enterprise Partner',
    col: 3,
    icon: 'fas fa-building',
    image: `${BASE}images/elmax_logo.png`,
    social: { website: '#' } 
  },
  { 
    id: '4', 
    name: 'Espring', 
    role: 'Youth & Community Development Partner', 
    category: 'Community Partner',
    col: 1,
    icon: 'fas fa-leaf',
    image: `${BASE}images/partner_espring.jpg`,
    social: { website: '#' } 
  },
  { 
    id: '5', 
    name: 'Saferplace Initiative', 
    role: 'Core Implementing Organization (CAC/IT/NO 7571193)', 
    category: 'Implementing NGO',
    col: 2,
    icon: 'fas fa-shield-alt',
    image: `${BASE}images/logo.jpg`,
    social: { website: '#' } 
  },
  { 
    id: '6', 
    name: 'Egold Technology', 
    role: 'Solar, CCTV Installation & Automation', 
    category: 'Solar & Security Tech',
    col: 3,
    icon: 'fas fa-solar-panel',
    image: `${BASE}images/egold_logo.png`,
    social: { website: '#' } 
  }
];

export default function HopeSection() {
  const [hoveredId, setHoveredId] = useState(null);

  const colWidthsClass = {
    1: 'hope-col-1',
    2: 'hope-col-2',
    3: 'hope-col-3'
  };

  return (
    <section className="hope-section section-padding relative overflow-hidden">
      <div className="hope-grain" aria-hidden="true"></div>

      <div className="container relative z-10">
        
        {/* Section Header */}
        <div className="hope-section-header" data-reveal="up">
          <div className="hope-header-left">
            <div className="hope-tag-row">
              <span className="hope-tag-line"></span>
              <span className="hope-tag-text">STRATEGIC PARTNERS &amp; AFFILIATES</span>
            </div>
            <h2 className="hope-section-title">
              Six pillars behind <br />
              <em className="text-gradient">every single impact.</em>
            </h2>
          </div>
          <p className="hope-header-desc">
            Government agencies, international bodies, and technical collaborators driving sustainable community protection and health operations across Sokoto State.
          </p>
        </div>

        <div className="hope-hairline"></div>

        {/* Interactive Grid & List */}
        <div className="hope-showcase">
          
          {/* Left Column Staggered Photo Grid */}
          <div className="hope-photo-grid">
            
            {/* Column 1 */}
            <div className="hope-grid-column col-1">
              {MEMBERS.filter(m => m.col === 1).map(m => {
                const isActive = hoveredId === m.id;
                const isInactive = hoveredId !== null && hoveredId !== m.id;
                const originalIndex = MEMBERS.indexOf(m) + 1;
                return (
                  <div
                    key={m.id}
                    className={`hope-photo-card ${colWidthsClass[1]} ${isActive ? 'active' : ''} ${isInactive ? 'inactive' : ''}`}
                    onMouseEnter={() => setHoveredId(m.id)}
                    onMouseLeave={() => setHoveredId(null)}
                  >
                    <img src={m.image} alt={m.name} className="hope-card-img" />
                    <div className="hope-card-overlay"></div>
                    <span className="hope-card-index">0{originalIndex}</span>
                  </div>
                );
              })}
            </div>

            {/* Column 2 */}
            <div className="hope-grid-column col-2">
              {MEMBERS.filter(m => m.col === 2).map(m => {
                const isActive = hoveredId === m.id;
                const isInactive = hoveredId !== null && hoveredId !== m.id;
                const originalIndex = MEMBERS.indexOf(m) + 1;
                return (
                  <div
                    key={m.id}
                    className={`hope-photo-card ${colWidthsClass[2]} ${isActive ? 'active' : ''} ${isInactive ? 'inactive' : ''}`}
                    onMouseEnter={() => setHoveredId(m.id)}
                    onMouseLeave={() => setHoveredId(null)}
                  >
                    <img src={m.image} alt={m.name} className="hope-card-img" />
                    <div className="hope-card-overlay"></div>
                    <span className="hope-card-index">0{originalIndex}</span>
                  </div>
                );
              })}
            </div>

            {/* Column 3 */}
            <div className="hope-grid-column col-3">
              {MEMBERS.filter(m => m.col === 3).map(m => {
                const isActive = hoveredId === m.id;
                const isInactive = hoveredId !== null && hoveredId !== m.id;
                const originalIndex = MEMBERS.indexOf(m) + 1;
                return (
                  <div
                    key={m.id}
                    className={`hope-photo-card ${colWidthsClass[3]} ${isActive ? 'active' : ''} ${isInactive ? 'inactive' : ''}`}
                    onMouseEnter={() => setHoveredId(m.id)}
                    onMouseLeave={() => setHoveredId(null)}
                  >
                    <img src={m.image} alt={m.name} className="hope-card-img" />
                    <div className="hope-card-overlay"></div>
                    <span className="hope-card-index">0{originalIndex}</span>
                  </div>
                );
              })}
            </div>

          </div>

          {/* Right Column Interactive List */}
          <div className="hope-members-list">
            {MEMBERS.map((m, idx) => {
              const isActive = hoveredId === m.id;
              const isInactive = hoveredId !== null && hoveredId !== m.id;
              return (
                <div
                  key={m.id}
                  className={`hope-member-row ${isActive ? 'active' : ''} ${isInactive ? 'inactive' : ''}`}
                  onMouseEnter={() => setHoveredId(m.id)}
                  onMouseLeave={() => setHoveredId(null)}
                >
                  <div className="hope-member-row-inner">
                    <span className="hope-marker"></span>
                    <span className="hope-name">{m.name}</span>
                    
                    {/* Social/External link */}
                    <div className="hope-row-socials">
                      <span className="hope-social-icon" style={{ fontSize: '0.85rem' }}>
                        <i className={m.icon || 'fas fa-handshake'}></i>
                      </span>
                    </div>

                    <span className="hope-row-index">0{idx + 1} / 06</span>
                  </div>
                  <p className="hope-role-text">{m.role}</p>
                </div>
              );
            })}
          </div>

        </div>

        <div className="hope-hairline" style={{ marginTop: '4rem' }}></div>

        {/* Footer detail row */}
        <div className="hope-footer-info">
          <span>Index · 01 — 06</span>
          <span className="hope-quote-tag">"Creating safe spaces for every life, everywhere."</span>
          <span>6 STATES · 13 LGAs · NIGERIA</span>
        </div>

      </div>
    </section>
  );
}
