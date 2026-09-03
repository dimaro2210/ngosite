import React, { useState } from 'react';
import InfiniteGallery from '../components/InfiniteGallery';

const mediaList = [
  // Children
  { id: 1, category: 'Children', src: `${import.meta.env.BASE_URL}images/children/four_children.jpg`, alt: 'Community children outreach' },
  { id: 2, category: 'Children', src: `${import.meta.env.BASE_URL}images/children/toddler_baby.jpg`, alt: 'Maternal and toddler health beneficiary' },
  { id: 3, category: 'Children', src: `${import.meta.env.BASE_URL}images/children/sparkly_dress_girl.jpg`, alt: 'Youth empowerment and child protection' },
  { id: 4, category: 'Children', src: `${import.meta.env.BASE_URL}images/children/igbo_attire_boy.jpg`, alt: 'Child dignity and cultural inclusion' },
  { id: 5, category: 'Children', src: `${import.meta.env.BASE_URL}images/children/glasses_boy.jpg`, alt: 'Child vision care and educational support' },
  { id: 6, category: 'Children', src: `${import.meta.env.BASE_URL}images/children/kaftan_boy.jpg`, alt: 'Adolescent health and education' },
  // WASH Project — Nana Girls School Latrine Commissioning
  { id: 7,  category: 'WASH Project', src: `${import.meta.env.BASE_URL}images/wash_commission/wash_project_signboard.jpg`, alt: 'Official Commissioning Signboard — Renovation and upgrade of 4 pit latrines to modern toilet facility for Nana Girls Secondary School' },
  { id: 8,  category: 'WASH Project', src: `${import.meta.env.BASE_URL}images/wash_commission/wash_students_assembly.jpg`, alt: 'Nana Girls School students at latrine commissioning ceremony' },
  { id: 9,  category: 'WASH Project', src: `${import.meta.env.BASE_URL}images/wash_commission/wash_dr_ebri_unicef.jpg`, alt: 'Dr. Ebri — UNICEF WASH Specialist, Sokoto Field Office addressing the commissioning' },
  { id: 10, category: 'WASH Project', src: `${import.meta.env.BASE_URL}images/wash_commission/wash_principal_hajiya.jpg`, alt: 'Principal Hajiya Mohamed — Nana Girls School, Sokoto' },
  { id: 11, category: 'WASH Project', src: `${import.meta.env.BASE_URL}images/wash_commission/wash_mallam_bello_ruwasa.jpg`, alt: 'Mallam Bello — SA to the Hon. Commissioner RUWASA at the commissioning' },
  // MNCHW 2026 — Flag-Off at Emir Palace, Gusau
  { id: 12, category: 'MNCHW 2026', src: `${import.meta.env.BASE_URL}images/mnchw_gusau/mnchw_emir_address.jpg`, alt: 'HRH Emir of Gusau addressing the gathering at the MNCHW 2026 flag-off ceremony' },
  { id: 13, category: 'MNCHW 2026', src: `${import.meta.env.BASE_URL}images/mnchw_gusau/mnchw_speech_emir_palace.jpg`, alt: 'Dignitary speech at the Emir Palace during MNCHW 2026 flag-off' },
  { id: 14, category: 'MNCHW 2026', src: `${import.meta.env.BASE_URL}images/mnchw_gusau/mnchw_emir_vaccine_vial.jpg`, alt: 'Emir of Gusau examining vaccine vial with health officials and partners' },
  { id: 15, category: 'MNCHW 2026', src: `${import.meta.env.BASE_URL}images/mnchw_gusau/mnchw_emir_mother_baby.jpg`, alt: 'Emir of Gusau blessing mother and infant beneficiary with Red Cross health team' },
  { id: 16, category: 'MNCHW 2026', src: `${import.meta.env.BASE_URL}images/mnchw_gusau/mnchw_infant_immunization.jpg`, alt: 'Healthcare worker administering infant immunization during MNCHW 2026' },
];

// Image URLs passed to the 3-D hero
const heroImages = mediaList.map(m => ({ src: m.src, alt: m.alt }));

export default function Gallery() {
  const [filter, setFilter]       = useState('All');
  const [lightboxSrc, setLightboxSrc] = useState(null);

  const categories    = ['All', 'Children', 'WASH Project', 'MNCHW 2026'];

  const categoryDescriptions = {
    'WASH Project': {
      title: 'WASH Project — Nana Girls School Latrine Commissioning',
      text: 'Renovation and upgrade of 1 block of 4 pit toilet to a modern water closet facility for Nana Girls Secondary School Staff Toilet, Sokoto South Local Government Area. By Felix Favour Okpuniyi. Funded by Safer Place Initiative and commissioned by the S.A. to the Executive Governor Sokoto State on RUWASA — Hon. Abubakar Umar Dan Tama, June 2026. Dignitaries present included Dr. Ebri (UNICEF WASH Specialist, Sokoto Field Office), Mallam Bello (SA to the Hon. Commissioner RUWASA), Principal Hajiya Mohamed (Nana Girls School), Vice Principal, and NYSC Local Inspector.',
    },
    'MNCHW 2026': {
      title: 'MNCHW 2026 — Flag-Off at Emir Palace, Gusau',
      text: 'Flag-off ceremony of the Maternal, Newborn and Child Health Week (MNCHW) 2026 held at the Emir Palace in Gusau, Zamfara State. The event was graced by HRH the Emir of Gusau, health officials, Red Cross volunteers, UNICEF partners, and community leaders. Infant immunization drives and maternal-child wellness screenings were conducted on-site to launch the week-long campaign across the state.',
    },
    'Children': {
      title: 'Children — Beneficiary Portraits',
      text: 'Portraits of children and young beneficiaries across Saferplace Initiative community outreach programs in Sokoto State. These photos document real impact — from child welfare and educational support to youth empowerment and cultural inclusion.',
    },
  };

  const filteredMedia = filter === 'All'
    ? (() => {
        const counts = {};
        return mediaList.filter(item => {
          counts[item.category] = (counts[item.category] || 0) + 1;
          return counts[item.category] <= 2;
        });
      })()
    : mediaList.filter(item => item.category === filter);

  return (
    <>
      {/* ══════════════ 3-D INFINITE GALLERY HERO ══════════════ */}
      <section style={{ position: 'relative', background: '#0D1B18' }}>
        {/* Overlay text */}
        <div style={{
          position: 'absolute',
          inset: 0,
          zIndex: 10,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          pointerEvents: 'none',
          textAlign: 'center',
          padding: '1rem',
        }}>
          <span style={{
            color: '#A78BFA',
            fontFamily: 'var(--font-display)',
            fontWeight: 700,
            fontSize: '.85rem',
            letterSpacing: '.2em',
            textTransform: 'uppercase',
            marginBottom: '.8rem',
            display: 'block',
          }}>Our Field Work In Pictures</span>
          <h1 style={{
            fontFamily: 'var(--font-display)',
            fontWeight: 800,
            fontSize: 'clamp(2rem, 5vw, 3.5rem)',
            color: '#fff',
            lineHeight: 1.15,
            marginBottom: '.8rem',
            textShadow: '0 4px 24px rgba(0,0,0,.5)',
          }}>Beneficiary & Impact Gallery</h1>
          <p style={{
            color: 'rgba(255,255,255,.85)',
            fontSize: '1rem',
            maxWidth: '520px',
            textShadow: '0 2px 8px rgba(0,0,0,.5)',
          }}>
            Real beneficiary portraits, project commissions, and maternal-child health outreaches across Northwest Nigeria.
          </p>
          <p style={{
            marginTop: '1.5rem',
            color: 'rgba(255,255,255,.4)',
            fontSize: '.8rem',
            letterSpacing: '.1em',
          }}>
            <i className="fas fa-mouse" style={{ marginRight: '.4rem' }}></i>
            SCROLL TO EXPLORE · HOVER TO INTERACT
          </p>
        </div>

        {/* 3-D Canvas */}
        <InfiniteGallery
          images={heroImages}
          speed={0.8}
          visibleCount={8}
          style={{ height: '80vh', minHeight: '520px' }}
          fadeSettings={{
            fadeIn:  { start: 0.05, end: 0.20 },
            fadeOut: { start: 0.75, end: 0.90 },
          }}
          blurSettings={{
            blurIn:  { start: 0.0,  end: 0.10 },
            blurOut: { start: 0.80, end: 0.95 },
            maxBlur: 6.0,
          }}
        />
      </section>

      {/* ══════════════ FILTER TABS + GRID ══════════════ */}
      <section className="gallery-block">
        <div className="container">

          {/* Category Filter Tabs */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap', marginBottom: '3rem' }}>
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                style={{
                  background:    filter === cat ? '#6C2BD9' : '#FFF',
                  color:         filter === cat ? '#FFF' : 'var(--text-dark)',
                  border:        '1px solid var(--border-color)',
                  borderRadius:  '30px',
                  padding:       '0.6rem 1.5rem',
                  fontSize:      '0.85rem',
                  fontWeight:    '700',
                  cursor:        'pointer',
                  transition:    'var(--transition)',
                  fontFamily:    'var(--font-display)',
                }}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Category Description Banner */}
          {filter !== 'All' && categoryDescriptions[filter] && (
            <div style={{
              background:      'linear-gradient(135deg, rgba(108,43,217,.08), rgba(88,10,94,.06))',
              border:          '1px solid rgba(108,43,217,.15)',
              borderRadius:    'var(--radius-md)',
              padding:         '2rem 2.5rem',
              marginBottom:    '2.5rem',
              textAlign:       'center',
              maxWidth:        '800px',
              margin:          '0 auto 2.5rem',
            }}>
              <h3 style={{
                fontFamily:    'var(--font-display)',
                fontWeight:    800,
                fontSize:      '1.3rem',
                color:         'var(--text-dark)',
                marginBottom:  '.8rem',
              }}>
                {categoryDescriptions[filter].title}
              </h3>
              <p style={{
                color:         'var(--text-muted)',
                fontSize:      '.92rem',
                lineHeight:    1.7,
                margin:        0,
              }}>
                {categoryDescriptions[filter].text}
              </p>
            </div>
          )}

          {/* Media Grid */}
          <div className="gallery-grid">
            {filteredMedia.map(img => (
              <div
                key={img.id}
                className="gallery-item"
                onClick={() => setLightboxSrc(img.src)}
                role="button"
                tabIndex={0}
                onKeyDown={e => e.key === 'Enter' && setLightboxSrc(img.src)}
              >
                <img src={img.src} alt={img.alt} style={{ objectFit: 'cover', height: '320px', width: '100%' }} />
                <div className="gallery-item-overlay">
                  <i className="fas fa-search-plus"></i>
                </div>
                <div style={{
                  position:     'absolute',
                  bottom:       '1rem',
                  left:         '1rem',
                  background:   'rgba(108, 43, 217, 0.95)',
                  color:        '#FFF',
                  padding:      '0.3rem 0.8rem',
                  borderRadius: '20px',
                  fontSize:     '0.75rem',
                  fontWeight:   '700',
                  pointerEvents:'none',
                  zIndex:        2,
                }}>
                  {img.category}
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ══════════════ LIGHTBOX ══════════════ */}
      {lightboxSrc && (
        <div
          className="lightbox"
          onClick={() => setLightboxSrc(null)}
          role="dialog"
          aria-modal="true"
        >
          <div className="lightbox-inner" onClick={e => e.stopPropagation()}>
            <button
              className="lightbox-close"
              onClick={() => setLightboxSrc(null)}
              aria-label="Close"
            >
              <i className="fas fa-times"></i>
            </button>
            <img src={lightboxSrc} alt="Enlarged view" />
          </div>
        </div>
      )}
    </>
  );
}

