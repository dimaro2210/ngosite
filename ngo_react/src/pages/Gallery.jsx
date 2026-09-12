import React, { useState } from 'react';
import InfiniteGallery from '../components/InfiniteGallery';

const mediaList = [
  // Community Outreach
  { id: 1, category: 'Community Outreach', src: `${import.meta.env.BASE_URL}images/dignity_kits/dignity_idp_women_queue.jpg`, alt: 'IDP women queuing for dignity kit distribution' },
  { id: 2, category: 'Community Outreach', src: `${import.meta.env.BASE_URL}images/dignity_kits/dignity_idp_women_carrying.jpg`, alt: 'Women carrying UNICEF dignity kits' },
  { id: 3, category: 'Community Outreach', src: `${import.meta.env.BASE_URL}images/mnchw_gusau/mnchw_emir_mother_baby.jpg`, alt: 'Mother and baby at MNCHW Gusau event' },
  { id: 4, category: 'Community Outreach', src: `${import.meta.env.BASE_URL}images/mnchw_gusau/mnchw_infant_immunization.jpg`, alt: 'Infant immunization at MNCHW event' },
  { id: 5, category: 'Community Outreach', src: `${import.meta.env.BASE_URL}images/maternal_child_nutrition_drive.jpg`, alt: 'Maternal and child nutrition support drive' },
  { id: 6, category: 'Community Outreach', src: `${import.meta.env.BASE_URL}images/reproductive_health/rh_mothers_mat_session.jpg`, alt: 'Reproductive health mothers session' },
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
  // UNICEF Dignity Kits — Distribution to IDPs
  { id: 17, category: 'Dignity Kits', src: `${import.meta.env.BASE_URL}images/dignity_kits/dignity_idp_women_carrying.jpg`, alt: 'IDP women carrying dignity kit boxes and mats after distribution' },
  { id: 18, category: 'Dignity Kits', src: `${import.meta.env.BASE_URL}images/dignity_kits/dignity_unicef_box_handover.jpg`, alt: 'IDP beneficiary receiving UNICEF dignity kit box during field distribution' },
  { id: 19, category: 'Dignity Kits', src: `${import.meta.env.BASE_URL}images/dignity_kits/dignity_child_mat_unicef.jpg`, alt: 'Young boy carrying UNICEF box and mat — dignity kit distribution to displaced families' },
  { id: 20, category: 'Dignity Kits', src: `${import.meta.env.BASE_URL}images/dignity_kits/dignity_idp_women_queue.jpg`, alt: 'IDP women and girls queuing at distribution point for dignity kits' },
  { id: 21, category: 'Dignity Kits', src: `${import.meta.env.BASE_URL}images/dignity_kits/dignity_unicef_truck_offload.jpg`, alt: 'UNICEF dignity kit boxes being offloaded from delivery truck for IDP distribution' },
  // World Hepatitis Day — Saferplace Initiatives & Lions Club Caliphate Lions
  { id: 22, category: 'Hepatitis Day', src: `${import.meta.env.BASE_URL}images/hepatitis_day/hepatitis_screening_queue.jpg`, alt: 'Community members seated in queue for World Hepatitis Day medical screening' },
  { id: 23, category: 'Hepatitis Day', src: `${import.meta.env.BASE_URL}images/hepatitis_day/hepatitis_blood_test.jpg`, alt: 'Medical staff administering rapid hepatitis diagnostic blood screening to community resident' },
  { id: 24, category: 'Hepatitis Day', src: `${import.meta.env.BASE_URL}images/hepatitis_day/hepatitis_lions_registration.jpg`, alt: 'Lions Club Caliphate Lions volunteer coordinator registering participants for hepatitis screening' },
  { id: 25, category: 'Hepatitis Day', src: `${import.meta.env.BASE_URL}images/hepatitis_day/hepatitis_medical_team.jpg`, alt: 'Volunteer medical doctors and clinical team preparing rapid hepatitis test kits' },
  { id: 26, category: 'Hepatitis Day', src: `${import.meta.env.BASE_URL}images/hepatitis_day/hepatitis_community_women.jpg`, alt: 'Community women gathered for hepatitis health education and clinical testing' },
  // Capacity Building Workshop — Environmental & WASH Club Prefects
  { id: 27, category: 'Capacity Building', src: `${import.meta.env.BASE_URL}images/capacity_building/workshop_group_banner.jpg`, alt: 'Group photograph of facilitators and participants at the hygiene promotion capacity building workshop' },
  { id: 28, category: 'Capacity Building', src: `${import.meta.env.BASE_URL}images/capacity_building/workshop_facilitators_panel.jpg`, alt: 'Workshop facilitators and coordinators seated at the training session table' },
  { id: 29, category: 'Capacity Building', src: `${import.meta.env.BASE_URL}images/capacity_building/workshop_presentation_male.jpg`, alt: 'Facilitator conducting capacity building interactive session with student prefects' },
  { id: 30, category: 'Capacity Building', src: `${import.meta.env.BASE_URL}images/capacity_building/workshop_presentation_female.jpg`, alt: 'Facilitator training environmental and WASH club prefects on school hygiene promotion' },
  { id: 31, category: 'Capacity Building', src: `${import.meta.env.BASE_URL}images/capacity_building/workshop_coordinators_banner.jpg`, alt: 'Saferplace Initiative coordinators in front of workshop banner' },
  // Reproductive Health & Maternal Sensitization Outreach
  { id: 32, category: 'Reproductive Health', src: `${import.meta.env.BASE_URL}images/reproductive_health/rh_community_outdoors_group.jpg`, alt: 'Community group photograph following grassroots reproductive health sensitization outreach' },
  { id: 33, category: 'Reproductive Health', src: `${import.meta.env.BASE_URL}images/reproductive_health/rh_community_elders_session.jpg`, alt: 'Community leaders, elders, and women gathered under canopy for reproductive health dialogue' },
  { id: 34, category: 'Reproductive Health', src: `${import.meta.env.BASE_URL}images/reproductive_health/rh_facilitator_holding_infant.jpg`, alt: 'Saferplace Initiative maternal healthcare facilitator carrying a beneficiary infant' },
  { id: 35, category: 'Reproductive Health', src: `${import.meta.env.BASE_URL}images/reproductive_health/rh_facilitator_sensitization_speech.jpg`, alt: 'Saferplace Initiative health facilitator educating community on safe motherhood and family wellness' },
  { id: 36, category: 'Reproductive Health', src: `${import.meta.env.BASE_URL}images/reproductive_health/rh_mothers_mat_session.jpg`, alt: 'Interactive reproductive health and maternal-child care session with mothers seated on mats' },
];

// Image URLs passed to the 3-D hero
const heroImages = mediaList.map(m => ({ src: m.src, alt: m.alt }));

export default function Gallery() {
  const [filter, setFilter]       = useState('All');
  const [lightboxSrc, setLightboxSrc] = useState(null);

  const categories    = ['All', 'Children', 'WASH Project', 'MNCHW 2026', 'Dignity Kits', 'Hepatitis Day', 'Capacity Building', 'Reproductive Health'];

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
    'Dignity Kits': {
      title: 'UNICEF Dignity Kits — Distribution to IDPs',
      text: 'Distribution of UNICEF dignity kits to Internally Displaced Persons (IDPs) in Sokoto State. Saferplace Initiative was directly involved in the field implementation — coordinating logistics, beneficiary verification, and last-mile delivery of essential relief items including hygiene supplies, sleeping mats, and household necessities to vulnerable displaced women, children, and families.',
    },
    'Hepatitis Day': {
      title: 'World Hepatitis Day — Community Screening & Awareness',
      text: 'World Hepatitis Day outreach organized by Saferplace Initiative in collaboration with Lions Club (Caliphate Lions). The medical outreach provided free voluntary hepatitis screening, viral load awareness, preventive counseling, and clinical guidance to community members, nursing mothers, and families in Sokoto.',
    },
    'Capacity Building': {
      title: 'Capacity Building Workshop — Hygiene Promotion & WASH Clubs',
      text: 'One-day capacity building workshop organized by Saferplace Initiative for selected environmental and WASH club prefects across 10 Government Girls Secondary Schools in Sokoto South Local Government Area. The training empowered student leaders with peer-to-peer hygiene promotion skills, safe water handling, menstrual hygiene management, and environmental stewardship within their schools.',
    },
    'Reproductive Health': {
      title: 'Reproductive Health & Maternal-Child Wellness Sensitization',
      text: 'Grassroots reproductive health sensitization and safe motherhood outreach organized by Saferplace Initiative across underserved community settlements. The intervention provides comprehensive education on maternal-newborn health, family planning counseling, antenatal care adherence, birth spacing, adolescent sexual and reproductive health rights (SRHR), menstrual hygiene, and nutritional guidance to empower women, adolescent girls, and community leaders.',
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

