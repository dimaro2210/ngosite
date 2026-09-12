import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

const BASE = import.meta.env.BASE_URL;

export default function ChildProtection() {
  const [activePhoto, setActivePhoto] = useState(null);

  const childrenGallery = [
    {
      id: 1,
      src: `${BASE}images/dignity_kits/dignity_idp_women_queue.jpg`,
      title: 'Right to Safe Spaces & Shared Joy',
      caption: 'Children in our community safe space in Sokoto South, learning and thriving in an environment free from fear.',
      badge: 'Safe Space & Joy',
      amenity: 'Safe Community Environment',
    },
    {
      id: 2,
      src: `${BASE}images/capacity_building/workshop_presentation_female.jpg`,
      title: 'Right to Quality Education & Learning Vision',
      caption: 'Every child deserves the tools, books, and visual health screening necessary to excel in school.',
      badge: 'Access to Education',
      amenity: 'Quality Education',
    },
    {
      id: 3,
      src: `${BASE}images/mnchw_gusau/mnchw_emir_mother_baby.jpg`,
      title: 'Right to Cultural Heritage & Inviolable Dignity',
      caption: 'Upholding each child’s unique identity, culture, and self-worth without discrimination or marginalization.',
      badge: 'Identity & Dignity',
      amenity: 'Protection & Freedom',
    },
    {
      id: 4,
      src: `${BASE}images/wash_commission/wash_students_assembly.jpg`,
      title: 'Freedom from Child Labor & Exploitation',
      caption: 'Rescuing children from early street labor so they can enjoy their childhood and remain in classrooms.',
      badge: 'Anti-Child Labor',
      amenity: 'Protection from Exploitation',
    },
    {
      id: 5,
      src: `${BASE}images/reproductive_health/rh_mothers_mat_session.jpg`,
      title: 'Protection of the Girl-Child & Safe Future',
      caption: 'Empowering young girls with education, hygiene dignity packs, and legal protection against early forced marriage.',
      badge: 'Girl-Child Safeguarding',
      amenity: 'Gender Equality & Protection',
    },
    {
      id: 6,
      src: `${BASE}images/mnchw_gusau/mnchw_infant_immunization.jpg`,
      title: 'Right to Nutritional-Based Food in Infancy',
      caption: 'Protecting infants from acute malnutrition through therapeutic feeding support and growth monitoring.',
      badge: 'Nutrition-Based Food',
      amenity: 'Nutritional Food Access',
    },
    {
      id: 7,
      src: `${BASE}images/hepatitis_day/hepatitis_medical_team.jpg`,
      title: 'Access to Good Hospitals & Clinical Healthcare',
      caption: 'Routine childhood vaccinations, clinical checkups, and free pediatric care in underserved rural communities.',
      badge: 'Good Hospital & Health',
      amenity: 'Healthcare Access',
    },
    {
      id: 8,
      src: `${BASE}images/maternal_child_nutrition_drive.jpg`,
      title: 'Eradicating Starvation & Severe Deprivation',
      caption: 'Field nutritional screening and supplementary food distribution to shield vulnerable families from hunger.',
      badge: 'Zero Starvation',
      amenity: 'Therapeutic Food Screening',
    },
    {
      id: 9,
      src: `${BASE}images/dignity_kits/dignity_child_mat_unicef.jpg`,
      title: 'Emergency Aid for Displaced & Refugee Children',
      caption: 'Distributing clean sleeping mats, hygiene essentials, and psychosocial support to children in IDP settlements.',
      badge: 'Safe Living & Shelter',
      amenity: 'Safe Shelter & Potable Water',
    },
  ];

  return (
    <div className="child-protection-page">
      {/* ── Breadcrumb & Top Bar ── */}
      <section className="cp-header-section">
        <div className="container">
          <div className="cp-breadcrumb">
            <Link to="/">Home</Link>
            <span>/</span>
            <Link to="/about">About &amp; Team</Link>
            <span>/</span>
            <span className="cp-breadcrumb-current">Arnold Nicholas · Child Protection Advocate</span>
          </div>
        </div>
      </section>

      {/* ── Hero Spotlight: Arnold Nicholas ── */}
      <section className="cp-profile-hero">
        <div className="container">
          <div className="cp-profile-grid">
            {/* Portrait Card */}
            <motion.div
              className="cp-portrait-card"
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="cp-portrait-wrapper">
                <img
                  src={`${BASE}images/arnold_nicholas.jpg`}
                  alt="Arnold Nicholas - Child Protection Advocate"
                  className="cp-portrait-img"
                />
                <div className="cp-portrait-badge">
                  <i className="fas fa-shield-alt"></i>
                  <span>Child Protection Advocate</span>
                </div>
              </div>
              <div className="cp-portrait-footer">
                <div className="cp-contact-chip">
                  <i className="far fa-envelope"></i>
                  <span>childprotection@saferplaceinitiative.ng</span>
                </div>
                <div className="cp-contact-chip">
                  <i className="fas fa-map-marker-alt"></i>
                  <span>Saferplace Initiative · Global Child Advocacy</span>
                </div>
              </div>
            </motion.div>

            {/* Profile Intro & Spoken Mission */}
            <motion.div
              className="cp-intro-content"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
            >
              <div className="cp-role-tag">
                <span className="cp-tag-dot"></span>
                <span>Saferplace Initiative · Child Advocacy Lead</span>
              </div>
              <h1 className="cp-hero-name">Arnold Nicholas</h1>
              <p className="cp-hero-subtitle">
                "Standing to advocate for the rights, dignity, and basic life amenities of children across the globe — creating safe spaces where children can thrive to become what they want to be."
              </p>

              <div className="cp-stats-strip">
                <div className="cp-stat-box">
                  <span className="cp-stat-num">100%</span>
                  <span className="cp-stat-label">Child Rights &amp; Protection</span>
                </div>
                <div className="cp-stat-box">
                  <span className="cp-stat-num">Global</span>
                  <span className="cp-stat-label">Advocacy Across the Globe</span>
                </div>
                <div className="cp-stat-box">
                  <span className="cp-stat-num">4 Pillars</span>
                  <span className="cp-stat-label">Basic Life Amenities</span>
                </div>
                <div className="cp-stat-box">
                  <span className="cp-stat-num">Zero</span>
                  <span className="cp-stat-label">Tolerance for Abuse &amp; Labor</span>
                </div>
              </div>

              <div className="cp-action-buttons">
                <a href="#statement" className="btn-primary" style={{ background: '#6C2BD9', borderColor: '#6C2BD9' }}>
                  Read Arnold's Statement <i className="fas fa-arrow-down" style={{ marginLeft: '.5rem' }}></i>
                </a>
                <a href="#gallery" className="btn-secondary" style={{ background: '#10B981', color: '#fff' }}>
                  The Faces We Protect <i className="fas fa-images" style={{ marginLeft: '.5rem' }}></i>
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Official Statement by Arnold Nicholas ── */}
      <section id="statement" className="cp-statement-section section-padding">
        <div className="container">
          <motion.div
            className="cp-statement-card"
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="cp-quote-icon">
              <i className="fas fa-quote-left"></i>
            </div>

            <span className="cp-statement-badge">Official Advocate Statement</span>
            <h2 className="cp-statement-title">
              A Message from Arnold Nicholas: Standing for Children Across the Globe
            </h2>

            <div className="cp-statement-body">
              {/* Direct Words from Arnold */}
              <div className="cp-spoken-quote-banner">
                <p className="lead-paragraph">
                  "Arnold Nicholas is a child advocate of <strong>Saferplace Initiative</strong>, standing to advocate for the rights of children across the globe.
                </p>
                <p className="lead-paragraph">
                  Arnold believes in creating a safe space where children can thrive to become what they want to be.
                </p>
                <p className="lead-paragraph">
                  Arnold stands to advocate for child rights, for child protection, for child access to basic life amenities such as:
                </p>
              </div>

              {/* 4 Core Basic Life Amenities */}
              <div className="cp-principles-grid">
                <div className="cp-principle-item">
                  <div className="cp-principle-icon" style={{ background: '#EDE9FE', color: '#6C2BD9' }}>
                    <i className="fas fa-graduation-cap"></i>
                  </div>
                  <h4>1. Access to Education</h4>
                  <p>
                    Every child deserves quality schooling, learning materials, safe classrooms, and an uninterrupted academic journey to unlock their highest potential.
                  </p>
                </div>

                <div className="cp-principle-item">
                  <div className="cp-principle-icon" style={{ background: '#E0F2FE', color: '#0284C7' }}>
                    <i className="fas fa-tint"></i>
                  </div>
                  <h4>2. Access to Safe &amp; Potable Drinking Water</h4>
                  <p>
                    Clean, potable water is an irreplaceable life right. We construct school WASH blocks and community water points so children never drink from contaminated sources.
                  </p>
                </div>

                <div className="cp-principle-item">
                  <div className="cp-principle-icon" style={{ background: '#FEF3C7', color: '#D97706' }}>
                    <i className="fas fa-apple-alt"></i>
                  </div>
                  <h4>3. Access to Nutritional-Based Food</h4>
                  <p>
                    Proper childhood growth requires nutrient-dense diets and therapeutic infant foods to permanently eradicate stunting, wasting, and severe malnutrition.
                  </p>
                </div>

                <div className="cp-principle-item">
                  <div className="cp-principle-icon" style={{ background: '#DCFCE7', color: '#16A34A' }}>
                    <i className="fas fa-hospital"></i>
                  </div>
                  <h4>4. Access to a Good Hospital &amp; Healthcare</h4>
                  <p>
                    From routine childhood immunizations and pediatric clinics to emergency medication, no child should suffer or perish from preventable illnesses.
                  </p>
                </div>
              </div>

              {/* Personal Appeal */}
              <blockquote className="cp-callout-quote">
                "Join me, Arnold Nicholas, as I advocate for these things for children across the globe. Thank you."
              </blockquote>

              {/* Menaces Arnold Stands Firmly Against */}
              <div className="cp-menaces-block">
                <h3 className="cp-menaces-title">
                  <i className="fas fa-shield-virus" style={{ color: '#EF4444', marginRight: '.6rem' }}></i>
                  What Arnold Nicholas Stands Firmly Against
                </h3>
                <p style={{ color: '#475569', marginBottom: '1.25rem' }}>
                  Arnold and Saferplace Initiative lead an uncompromising, zero-tolerance campaign against the systemic evils and dangers that rob children of their future:
                </p>

                <div className="cp-menaces-grid">
                  <div className="cp-menace-card">
                    <div className="cp-menace-icon"><i className="fas fa-ban"></i></div>
                    <div>
                      <strong>Child Labor</strong>
                      <span>Ending harmful street hawking, quarry labor, and dangerous physical exploitation of minors.</span>
                    </div>
                  </div>

                  <div className="cp-menace-card">
                    <div className="cp-menace-icon"><i className="fas fa-handcuffs"></i></div>
                    <div>
                      <strong>Child Trafficking</strong>
                      <span>Dismantling trafficking rings and illegal movement of vulnerable and displaced children.</span>
                    </div>
                  </div>

                  <div className="cp-menace-card">
                    <div className="cp-menace-icon"><i className="fas fa-bread-slice"></i></div>
                    <div>
                      <strong>Starvation &amp; Severe Hunger</strong>
                      <span>Combating acute nutritional deprivation through immediate clinical intervention and therapeutic food supply.</span>
                    </div>
                  </div>

                  <div className="cp-menace-card">
                    <div className="cp-menace-icon"><i className="fas fa-user-slash"></i></div>
                    <div>
                      <strong>Deprivation &amp; Denial of Rights</strong>
                      <span>Fighting against lack of birth certificates, denial of primary education, and abandonment.</span>
                    </div>
                  </div>

                  <div className="cp-menace-card">
                    <div className="cp-menace-icon"><i className="fas fa-heart-broken"></i></div>
                    <div>
                      <strong>Physical &amp; Sexual Abuse</strong>
                      <span>Zero tolerance for violence against children, offering emergency rescue and psychosocial trauma care.</span>
                    </div>
                  </div>

                  <div className="cp-menace-card">
                    <div className="cp-menace-icon"><i className="fas fa-ring"></i></div>
                    <div>
                      <strong>Early Forced Child Marriage</strong>
                      <span>Advocating for legal enforcement of the Child Rights Act to keep adolescent girls safe in school.</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Signoff Verification */}
              <div className="cp-signoff-row">
                <div className="cp-signoff-info">
                  <strong>Arnold Nicholas</strong>
                  <span>Child Protection Advocate</span>
                  <span className="cp-org-tag">Saferplace Initiative for Women &amp; Child Health &amp; Good Governance</span>
                  <span className="cp-cac-tag">Registered Non-Profit (CAC/IT/NO 7571193) · Sokoto State, Nigeria</span>
                </div>
                <div className="cp-seal-badge">
                  <i className="fas fa-stamp"></i> Official Child Protection Manifesto
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Complete Children Picture Gallery Section ── */}
      <section id="gallery" className="cp-gallery-section section-padding">
        <div className="container">
          <div className="section-header" style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
            <span style={{ color: '#6C2BD9', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', fontSize: '0.84rem' }}>
              ✦ Field Photo Documentary
            </span>
            <h2 style={{ fontSize: 'clamp(2rem, 3.5vw, 2.75rem)', fontWeight: 800, marginTop: '0.5rem', marginBottom: '0.75rem' }}>
              The Faces We Protect: Our Children's Gallery
            </h2>
            <p style={{ maxWidth: '720px', margin: '0 auto', color: 'var(--text-muted)', fontSize: '1.05rem', lineHeight: '1.6' }}>
              Every photo captures a precious life across Sokoto State whose rights to education, safe drinking water, nutritional food, and good healthcare are guarded by Arnold Nicholas and Saferplace Initiative.
            </p>
          </div>

          <div className="cp-children-grid">
            {childrenGallery.map((item, idx) => (
              <motion.div
                key={item.id}
                className="cp-child-card"
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: (idx % 3) * 0.1 }}
                onClick={() => setActivePhoto(item)}
              >
                <div className="cp-child-img-wrap">
                  <img
                    src={item.src}
                    alt={item.title}
                    loading="lazy"
                    className="cp-child-img"
                  />
                  <div className="cp-child-badge">{item.badge}</div>
                  <div className="cp-hover-indicator">
                    <i className="fas fa-search-plus"></i> View Full Story
                  </div>
                </div>
                <div className="cp-child-info">
                  <span className="cp-rights-article">{item.amenity}</span>
                  <h3>{item.title}</h3>
                  <p>{item.caption}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Interactive Modal / Lightbox ── */}
      <AnimatePresence>
        {activePhoto && (
          <motion.div
            className="cp-lightbox-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActivePhoto(null)}
          >
            <motion.div
              className="cp-lightbox-dialog"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="cp-lightbox-close"
                onClick={() => setActivePhoto(null)}
                aria-label="Close dialog"
              >
                <i className="fas fa-times"></i>
              </button>
              <div className="cp-dialog-img-container">
                <img src={activePhoto.src} alt={activePhoto.title} />
              </div>
              <div className="cp-dialog-details">
                <span className="cp-dialog-rights">{activePhoto.amenity}</span>
                <h2>{activePhoto.title}</h2>
                <p>{activePhoto.caption}</p>
                <div className="cp-dialog-meta">
                  <span className="badge-pill">
                    <i className="fas fa-check-circle" style={{ color: '#10B981' }}></i> Active Child Protection Program
                  </span>
                  <span className="badge-pill">
                    <i className="fas fa-user-shield" style={{ color: '#6C2BD9' }}></i> Advocate: Arnold Nicholas
                  </span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── Call To Action: Join Arnold Nicholas in Advocacy ── */}
      <section className="cp-cta-section">
        <div className="container">
          <div className="cp-cta-card">
            <div className="cp-cta-content">
              <span className="cp-cta-tag">Stand with Every Child</span>
              <h2>"Join Me, Arnold Nicholas, as I Advocate for Children Across the Globe"</h2>
              <p>
                Whether you want to partner with us, report child labor and abuse, sponsor safe potable water projects, or provide therapeutic food packs for vulnerable infants, your support saves lives today.
              </p>
              <div className="cp-cta-buttons">
                <Link to="/contact" className="btn-primary" style={{ background: '#6C2BD9', borderColor: '#6C2BD9' }}>
                  Partner with Child Protection Office <i className="fas fa-hand-holding-heart" style={{ marginLeft: '.5rem' }}></i>
                </Link>
                <a href="tel:+2349117622762" className="btn-secondary" style={{ background: '#fff', color: '#1E293B' }}>
                  <i className="fas fa-phone-alt" style={{ marginRight: '.5rem', color: '#10B981' }}></i>
                  Emergency Protection Hotline: +234-9117622762
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
