import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import TeamStack from '../components/TeamStack';

const BASE = import.meta.env.BASE_URL;

export default function ChildProtection() {
  const [activePhoto, setActivePhoto] = useState(null);

  const childAdvocates = [
    {
      id: 1,
      name: 'Arnold Nicholas',
      role: 'Lead Child Right Advocate (Team Lead)',
      image: `${BASE}images/arnold_nicholas.jpg`,
      link: '#statement',
    },
    {
      id: 2,
      hideName: true,
      title: 'Child Right Advocacy',
      role: 'Child Protection & Safe Spaces',
      image: `${BASE}images/child_advocates/advocate_boy_beige.jpg`,
      link: null,
    },
    {
      id: 3,
      hideName: true,
      title: 'Child Right Advocacy',
      role: 'Child Rights & Cultural Dignity',
      image: `${BASE}images/child_advocates/advocate_boy_traditional.jpg`,
      link: null,
    },
    {
      id: 4,
      hideName: true,
      title: 'Child Right Advocacy',
      role: 'Child Education & Healthcare Rights',
      image: `${BASE}images/child_advocates/advocate_boy_glasses.jpg`,
      link: null,
    },
    {
      id: 5,
      hideName: true,
      title: 'Child Right Advocacy',
      role: 'Girls Protection & Education Rights',
      image: `${BASE}images/child_advocates/advocate_girl_sequin.jpg`,
      link: null,
    },
    {
      id: 6,
      hideName: true,
      title: 'Child Right Advocacy',
      role: 'Early Childhood Nutrition & Care',
      image: `${BASE}images/child_advocates/advocate_toddler_bows.jpg`,
      link: null,
    },
    {
      id: 7,
      hideName: true,
      title: 'Child Right Advocacy',
      role: 'Youth Cadre & Safe Spaces',
      image: `${BASE}images/child_advocates/advocate_children_group.jpg`,
      link: null,
    },
  ];

  const childrenGallery = [
    {
      id: 101,
      src: `${BASE}images/child_advocates/advocate_children_group.jpg`,
      title: 'Safe Spaces & Shared Joy for Children',
      caption: 'Children gathered in a secure, nurturing environment where their laughter, education, and childhood rights are fiercely protected.',
      badge: 'Safe Space & Joy',
      amenity: 'Child Rights & Safe Spaces',
    },
    {
      id: 102,
      src: `${BASE}images/child_advocates/advocate_girl_sequin.jpg`,
      title: 'Right to Education & Girl-Child Protection',
      caption: 'Empowering young girls to smile, learn, and grow free from the fear of child labor, deprivation, or early marriage.',
      badge: 'Girl-Child Safeguarding',
      amenity: 'Quality Education & Dignity',
    },
    {
      id: 103,
      src: `${BASE}images/child_advocates/advocate_toddler_bows.jpg`,
      title: 'Right to Infant Nutrition & Clinical Care',
      caption: 'Guarding every infant and toddler with routine immunization, vital nutrient-dense feeding, and compassionate pediatric care.',
      badge: 'Zero Malnutrition',
      amenity: 'Pediatric Healthcare & Nutrition',
    },
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
                <a href="#statement" className="btn-primary" style={{ background: '#6C2BD9', color: '#fff', borderColor: '#6C2BD9' }}>
                  Read Arnold's Statement <i className="fas fa-arrow-down" style={{ marginLeft: '.5rem' }}></i>
                </a>
                <a href="#advocates-team" className="btn-primary" style={{ background: '#1E1B4B', color: '#fff', borderColor: '#1E1B4B' }}>
                  Advocates Team <i className="fas fa-users" style={{ marginLeft: '.5rem' }}></i>
                </a>
                <a href="#gallery" className="btn-secondary" style={{ background: '#FFFFFF', color: '#1E293B', borderColor: '#CBD5E1' }}>
                  The Faces We Protect <i className="fas fa-images" style={{ marginLeft: '.5rem', color: '#6C2BD9' }}></i>
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Official Statement & Manifesto by Arnold Nicholas ── */}
      <section id="statement" className="cp-statement-section section-padding">
        <div className="container">
          {/* Header Banner */}
          <div className="cp-section-badge-header">
            <span className="cp-pill-badge">
              <i className="fas fa-shield-alt"></i> Official Advocate Statement
            </span>
            <h2 className="cp-section-main-title">
              A Message from Arnold Nicholas: Standing for Children Across the Globe
            </h2>
            <div className="cp-title-accent-line"></div>
          </div>

          {/* Arnold's Spoken Manifesto Hero Card */}
          <motion.div
            className="cp-manifesto-hero-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="cp-manifesto-quote-watermark">
              <i className="fas fa-quote-left"></i>
            </div>
            <div className="cp-manifesto-hero-inner">
              <div className="cp-manifesto-avatar-col">
                <div className="cp-manifesto-avatar-frame">
                  <img
                    src={`${BASE}images/arnold_nicholas.jpg`}
                    alt="Arnold Nicholas"
                    className="cp-manifesto-avatar-img"
                  />
                  <div className="cp-manifesto-avatar-badge">
                    <i className="fas fa-check-circle"></i> Verified Lead
                  </div>
                </div>
                <div className="cp-manifesto-author-meta">
                  <h4>Arnold Nicholas</h4>
                  <span>Child Protection Advocate</span>
                  <div className="cp-manifesto-org">Saferplace Initiative</div>
                </div>
              </div>

              <div className="cp-manifesto-speech-col">
                <blockquote className="cp-manifesto-lead-quote">
                  "Arnold Nicholas is a child advocate of <strong className="text-purple-highlight">Saferplace Initiative</strong>, standing to advocate for the rights of children across the globe."
                </blockquote>
                <p className="cp-manifesto-sub-quote">
                  "Arnold believes in creating a safe space where children can thrive to become what they want to be."
                </p>
                <div className="cp-manifesto-bridge-banner">
                  <span className="cp-bridge-icon"><i className="fas fa-bullhorn"></i></span>
                  <p>
                    Arnold stands to advocate for child rights, for child protection, for child access to basic life amenities such as:
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* 4 Core Basic Life Amenities */}
          <div className="cp-amenities-section-wrapper">
            <div className="cp-amenities-header">
              <span className="cp-amenities-badge">4 Fundamental Pillars</span>
              <h3 className="cp-amenities-title">Essential Life Amenities Every Child Must Have</h3>
            </div>

            <div className="cp-amenities-grid">
              {/* Amenity 1 */}
              <motion.div
                className="cp-amenity-card"
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <div className="cp-amenity-card-top">
                  <span className="cp-amenity-index">01</span>
                  <div className="cp-amenity-icon-box">
                    <i className="fas fa-graduation-cap"></i>
                  </div>
                </div>
                <h4>1. Access to Education</h4>
                <p>
                  Every child deserves quality schooling, learning materials, safe classrooms, and an uninterrupted academic journey to unlock their highest potential.
                </p>
                <div className="cp-amenity-card-footer">
                  <span className="cp-amenity-tag"><i className="fas fa-check"></i> Safe Classrooms &amp; Quality Learning</span>
                </div>
              </motion.div>

              {/* Amenity 2 */}
              <motion.div
                className="cp-amenity-card"
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.18 }}
              >
                <div className="cp-amenity-card-top">
                  <span className="cp-amenity-index">02</span>
                  <div className="cp-amenity-icon-box">
                    <i className="fas fa-tint"></i>
                  </div>
                </div>
                <h4>2. Access to Safe &amp; Potable Drinking Water</h4>
                <p>
                  Clean, potable water is an irreplaceable life right. We construct school WASH blocks and community water points so children never drink from contaminated sources.
                </p>
                <div className="cp-amenity-card-footer">
                  <span className="cp-amenity-tag"><i className="fas fa-check"></i> School WASH &amp; Clean Water Points</span>
                </div>
              </motion.div>

              {/* Amenity 3 */}
              <motion.div
                className="cp-amenity-card"
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.26 }}
              >
                <div className="cp-amenity-card-top">
                  <span className="cp-amenity-index">03</span>
                  <div className="cp-amenity-icon-box">
                    <i className="fas fa-apple-alt"></i>
                  </div>
                </div>
                <h4>3. Access to Nutritional-Based Food</h4>
                <p>
                  Proper childhood growth requires nutrient-dense diets and therapeutic infant foods to permanently eradicate stunting, wasting, and severe malnutrition.
                </p>
                <div className="cp-amenity-card-footer">
                  <span className="cp-amenity-tag"><i className="fas fa-check"></i> Therapeutic Foods &amp; Zero Stunting</span>
                </div>
              </motion.div>

              {/* Amenity 4 */}
              <motion.div
                className="cp-amenity-card"
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.34 }}
              >
                <div className="cp-amenity-card-top">
                  <span className="cp-amenity-index">04</span>
                  <div className="cp-amenity-icon-box">
                    <i className="fas fa-hospital"></i>
                  </div>
                </div>
                <h4>4. Access to a Good Hospital &amp; Healthcare</h4>
                <p>
                  From routine childhood immunizations and pediatric clinics to emergency medication, no child should suffer or perish from preventable illnesses.
                </p>
                <div className="cp-amenity-card-footer">
                  <span className="cp-amenity-tag"><i className="fas fa-check"></i> Routine Immunizations &amp; Pediatric Care</span>
                </div>
              </motion.div>
            </div>
          </div>

          {/* High-Impact Midnight Appeal Callout */}
          <motion.div
            className="cp-pledge-callout"
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="cp-pledge-quote-mark">
              <i className="fas fa-quote-left"></i>
            </div>
            <div className="cp-pledge-content">
              <blockquote className="cp-pledge-statement">
                "Join me, Arnold Nicholas, as I advocate for these things for children across the globe. Thank you."
              </blockquote>
              <div className="cp-pledge-author-line">
                <span className="cp-pledge-name">— Arnold Nicholas</span>
                <span className="cp-pledge-role">Child Protection Advocate · Saferplace Initiative</span>
              </div>
            </div>
            <div className="cp-pledge-cta">
              <a href="#advocates-team" className="btn-pledge-join">
                <i className="fas fa-users"></i> Stand With Arnold
              </a>
            </div>
          </motion.div>

          {/* What Arnold Nicholas Stands Firmly Against */}
          <div className="cp-menaces-wrapper">
            <div className="cp-menaces-section-header">
              <span className="cp-pill-badge-dark">
                <i className="fas fa-shield-alt"></i> Zero-Tolerance Defense
              </span>
              <h3 className="cp-menaces-title">What Arnold Nicholas Stands Firmly Against</h3>
              <p className="cp-menaces-subtitle">
                Arnold and Saferplace Initiative lead an uncompromising, zero-tolerance campaign against the systemic evils and dangers that rob children of their future:
              </p>
            </div>

            <div className="cp-menaces-grid">
              {/* Menace 1 */}
              <div className="cp-menace-card">
                <div className="cp-menace-header">
                  <div className="cp-menace-icon-badge">
                    <i className="fas fa-ban"></i>
                  </div>
                  <span className="cp-menace-tag">Strict Prohibition</span>
                </div>
                <h4 className="cp-menace-name">Child Labor</h4>
                <p className="cp-menace-desc">
                  Ending harmful street hawking, quarry labor, and dangerous physical exploitation of minors.
                </p>
              </div>

              {/* Menace 2 */}
              <div className="cp-menace-card">
                <div className="cp-menace-header">
                  <div className="cp-menace-icon-badge">
                    <i className="fas fa-handcuffs"></i>
                  </div>
                  <span className="cp-menace-tag">Rescue &amp; Justice</span>
                </div>
                <h4 className="cp-menace-name">Child Trafficking</h4>
                <p className="cp-menace-desc">
                  Dismantling trafficking rings and illegal movement of vulnerable and displaced children.
                </p>
              </div>

              {/* Menace 3 */}
              <div className="cp-menace-card">
                <div className="cp-menace-header">
                  <div className="cp-menace-icon-badge">
                    <i className="fas fa-bread-slice"></i>
                  </div>
                  <span className="cp-menace-tag">Nutritional Defense</span>
                </div>
                <h4 className="cp-menace-name">Starvation &amp; Severe Hunger</h4>
                <p className="cp-menace-desc">
                  Combating acute nutritional deprivation through immediate clinical intervention and therapeutic food supply.
                </p>
              </div>

              {/* Menace 4 */}
              <div className="cp-menace-card">
                <div className="cp-menace-header">
                  <div className="cp-menace-icon-badge">
                    <i className="fas fa-user-slash"></i>
                  </div>
                  <span className="cp-menace-tag">Legal Identity</span>
                </div>
                <h4 className="cp-menace-name">Deprivation &amp; Denial of Rights</h4>
                <p className="cp-menace-desc">
                  Fighting against lack of birth certificates, denial of primary education, and abandonment.
                </p>
              </div>

              {/* Menace 5 */}
              <div className="cp-menace-card">
                <div className="cp-menace-header">
                  <div className="cp-menace-icon-badge">
                    <i className="fas fa-heart-broken"></i>
                  </div>
                  <span className="cp-menace-tag">Trauma Intervention</span>
                </div>
                <h4 className="cp-menace-name">Physical &amp; Sexual Abuse</h4>
                <p className="cp-menace-desc">
                  Zero tolerance for violence against children, offering emergency rescue and psychosocial trauma care.
                </p>
              </div>

              {/* Menace 6 */}
              <div className="cp-menace-card">
                <div className="cp-menace-header">
                  <div className="cp-menace-icon-badge">
                    <i className="fas fa-ring"></i>
                  </div>
                  <span className="cp-menace-tag">Girls Protection</span>
                </div>
                <h4 className="cp-menace-name">Early Forced Child Marriage</h4>
                <p className="cp-menace-desc">
                  Advocating for legal enforcement of the Child Rights Act to keep adolescent girls safe in school.
                </p>
              </div>
            </div>
          </div>

          {/* Endorsement & Official Manifesto Seal Card */}
          <div className="cp-official-endorsement-bar">
            <div className="cp-endorsement-signatory">
              <div className="cp-endorsement-avatar">
                <img src={`${BASE}images/arnold_nicholas.jpg`} alt="Arnold Nicholas" />
              </div>
              <div className="cp-endorsement-text">
                <span className="cp-endorsement-label">Executive Signatory</span>
                <h4>Arnold Nicholas</h4>
                <p className="cp-endorsement-title">Child Protection Advocate</p>
                <span className="cp-endorsement-org">Saferplace Initiative for Women &amp; Child Health &amp; Good Governance</span>
                <span className="cp-endorsement-legal">
                  Registered Non-Profit (CAC/IT/NO 7571193) · Sokoto State, Nigeria
                </span>
              </div>
            </div>

            <div className="cp-endorsement-seal">
              <div className="cp-seal-ring">
                <i className="fas fa-stamp"></i>
              </div>
              <div className="cp-seal-caption">
                <strong>Official Child Protection Manifesto</strong>
                <span>Verified Non-Profit Endorsement</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CHILD RIGHT ADVOCATES TEAM SECTION ── */}
      <section id="advocates-team" className="volunteers-section section-padding" style={{ background: 'linear-gradient(135deg, #F8FAFC 0%, #F5F3FF 50%, #FAF5FF 100%)', borderTop: '1px solid rgba(108, 43, 217, 0.1)', borderBottom: '1px solid rgba(108, 43, 217, 0.1)' }}>
        <div className="container">
          <div className="section-header" style={{ textAlign: 'center' }}>
            <span style={{ color: '#6C2BD9', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', fontSize: '0.84rem' }}>
              ✦ Peer Leadership &amp; Youth Cadre
            </span>
            <h2 style={{ fontSize: 'clamp(2rem, 3.5vw, 2.75rem)', fontWeight: 800, marginTop: '0.5rem', marginBottom: '0.75rem', color: '#1E1B4B' }}>
              Child Right Advocates Team
            </h2>
            <p style={{ maxWidth: '740px', margin: '0 auto', color: '#4B5563', fontSize: '1.05rem', lineHeight: '1.6' }}>
              Meet our community of young champions standing for child rights, education, and protection across Nigeria. Arnold Nicholas leads the team, mobilizing peers to speak up and create safe spaces for every child.
            </p>
          </div>

          <div style={{ display: 'flex', justifyContent: 'center', marginTop: '4rem' }}>
            <TeamStack members={childAdvocates} />
          </div>
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
                    <i className="fas fa-check-circle" style={{ color: '#6C2BD9' }}></i> Active Child Protection Program
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
                <a href="tel:+2349117622762" className="btn-secondary" style={{ background: '#fff', color: '#1E293B', borderColor: '#E2E8F0' }}>
                  <i className="fas fa-phone-alt" style={{ marginRight: '.5rem', color: '#6C2BD9' }}></i>
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
