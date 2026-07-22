import React, { useState } from 'react';
import InfiniteGallery from '../components/InfiniteGallery';

const mediaList = [
  { id: 1,  category: 'Accreditation', src: `${import.meta.env.BASE_URL}images/registration_letter.jpg`, alt: 'Official Ministry of Budget & Economic Planning Registration Letter' },
  { id: 2,  category: 'Child Welfare', src: `${import.meta.env.BASE_URL}images/four_children.jpg`, alt: 'Community children outreach' },
  { id: 3,  category: 'Infant Health', src: `${import.meta.env.BASE_URL}images/toddler_baby.jpg`, alt: 'Maternal and toddler health beneficiary' },
  { id: 4,  category: 'Youth',         src: `${import.meta.env.BASE_URL}images/sparkly_dress_girl.jpg`, alt: 'Youth empowerment and child protection' },
  { id: 5,  category: 'Cultural',      src: `${import.meta.env.BASE_URL}images/igbo_attire_boy.jpg`, alt: 'Child dignity and cultural inclusion' },
  { id: 6,  category: 'Health',        src: `${import.meta.env.BASE_URL}images/glasses_boy.jpg`, alt: 'Child vision care and educational support' },
  { id: 7,  category: 'Adolescent',    src: `${import.meta.env.BASE_URL}images/kaftan_boy.jpg`, alt: 'Adolescent health and education' },
  { id: 8,  category: 'Accreditation', src: `${import.meta.env.BASE_URL}images/registration_letter.jpg`, alt: 'Official Ministry of Budget & Economic Planning Registration Letter' },
];

// Image URLs passed to the 3-D hero
const heroImages = mediaList.map(m => ({ src: m.src, alt: m.alt }));

export default function Gallery() {
  const [filter, setFilter]       = useState('All');
  const [lightboxSrc, setLightboxSrc] = useState(null);

  const categories    = ['All', 'Branding', 'Child Welfare', 'Infant Health', 'Youth', 'Cultural', 'Health', 'Accreditation'];
  const filteredMedia = filter === 'All'
    ? mediaList
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
            Real beneficiary portraits, official accreditation letters, and community outreach photos across Sokoto State.
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

