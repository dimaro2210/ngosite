import React from 'react';
import { Link } from 'react-router-dom';
import TestimonialSlider from '../components/TestimonialSlider';
import TeamStack from '../components/TeamStack';
import HopeSection from '../components/HopeSection';
import CTAReveal from '../components/CTAReveal';
import HeroBackgroundSlider from '../components/HeroBackgroundSlider';

const BASE = import.meta.env.BASE_URL;

export default function Home() {
  const causes = [
    {
      id: 1,
      image: `${BASE}images/marathon_campaign.jpg`,
      title: 'Sokoto 10KM Marathon — Unite to End Open Defecation',
      category: 'WASH & Clean Sanitation',
      reach: '50,000+ Targeted',
      status: 'Active Campaign'
    },
    {
      id: 2,
      image: `${BASE}images/maternal_child_nutrition_drive.jpg`,
      title: 'Maternal & Child Nutrition Support Drive',
      category: 'Child Nutrition',
      reach: 'Underserved Communities',
      status: 'Ongoing Outreach'
    },
    {
      id: 3,
      image: `${BASE}images/rmncah_maternal_child_health.jpg`,
      title: 'RMNCAH Maternal & Child Health Outreach',
      category: 'Maternal & Child Health',
      reach: '8,500+ Mothers & Children',
      status: 'Active Clinic'
    }
  ];

  const volunteers = [
    { id: 1, name: 'Arnold Nicholas', role: 'Child Protection Advocate', image: `${BASE}images/arnold_nicholas.jpg` },
    { id: 2, name: 'Prince Nicholas', role: 'Founder & Executive Director', image: `${BASE}images/prince_nicholas.jpg` },
    { id: 3, name: 'Kola Odejobi', role: 'Governance & Policy Advocacy Team Lead', image: `${BASE}images/team_director.jpg` },
    { id: 4, name: 'Jemima Karatu', role: 'Disaster & Emergency Management Response Team Lead', image: `${BASE}images/team_board.jpg` },
    { id: 5, name: 'Nefisa Muhammad', role: 'Reproductive Sexual Health & Maternal Newborn Team Lead', image: `${BASE}images/team_health.jpg` },
    { id: 6, name: 'Victory Meschak', role: 'Gender Equality & Inclusion (GESI) Lead', image: `${BASE}images/victory_meschak.jpg` }
  ];

  const testimonials = [
    {
      id: 1,
      quote: "Saferplace Initiative has transformed our communities across Sokoto South—uplifting displaced women and children, improving school sanitation, greening our environment, and promoting community hygiene to drastically reduce preventable diseases. Our families are healthier and deeply grateful. Mungode!",
      name: 'Alhaji Sani Umar Jabbi',
      affiliation: 'District Head of GaGi Community · Sarkin Yakin Gagi, Sokoto South LGA',
      imageSrc: `${BASE}images/alhaji_sani_umar_jabbi.jpg`,
      thumbnailSrc: `${BASE}images/alhaji_sani_umar_jabbi.jpg`
    },
    {
      id: 2,
      quote: "Saferplace Initiative provides vital safe spaces and referral support for vulnerable women and children in Sokoto. Their dedication to dignity, child nutrition, and survivor privacy is remarkable.",
      name: 'Hajiya Amina Bello',
      affiliation: 'Community Women Leader, Sokoto',
      imageSrc: `${BASE}images/women_empowerment.jpg`,
      thumbnailSrc: `${BASE}images/women_empowerment.jpg`
    },
    {
      id: 3,
      quote: "Their RMNCAH medical outreaches and maternal nutrition packs reach rural mothers who have no nearby hospital. This is true grassroots healthcare access.",
      name: 'Dr. Aliyu Shehu',
      affiliation: 'Public Health Officer, Sokoto State',
      imageSrc: `${BASE}images/child_nutrition.jpg`,
      thumbnailSrc: `${BASE}images/child_nutrition.jpg`
    }
  ];

  return (
    <>
      {/* ========== HERO SECTION WITH DYNAMIC BACKGROUND SLIDER ========== */}
      <HeroBackgroundSlider />

      {/* ========== HOPE OF OTHERS SECTION ========== */}
      <HopeSection />

      {/* ========== STATS SECTION ========== */}
      <section className="stats-section" style={{ background: 'linear-gradient(135deg, #181428 0%, #3B124D 100%)' }}>
        <div className="container">
          <div className="stats-grid">
            <div className="stat-card" data-reveal="zoom" data-reveal-delay="100">
              <h3 style={{ color: '#fff' }}>9</h3>
              <p style={{ color: 'rgba(255,255,255,.8)' }}>Core Focus Areas</p>
            </div>
            <div className="stat-card" data-reveal="zoom" data-reveal-delay="200">
              <h3 style={{ color: '#fff' }}>6 States</h3>
              <p style={{ color: 'rgba(255,255,255,.8)' }}>Across 13 LGAs in Nigeria</p>
            </div>
            <div className="stat-card" data-reveal="zoom" data-reveal-delay="300">
              <h3 style={{ color: '#fff' }}>1,500<span>+</span></h3>
              <p style={{ color: 'rgba(255,255,255,.8)' }}>Adolescents, Women &amp; Children</p>
            </div>
            <div className="stat-card" data-reveal="zoom" data-reveal-delay="400">
              <h3 style={{ color: '#fff' }}>500<span>+</span></h3>
              <p style={{ color: 'rgba(255,255,255,.8)' }}>Trees in Green Drive</p>
            </div>
          </div>
        </div>
      </section>

      {/* ========== POPULAR CAUSES ========== */}
      <section className="causes-section section-padding">
        <div className="container">
          <div className="section-header" data-reveal="up">
            <span>Active Initiatives</span>
            <h2>Support Child Welfare &amp; Protection</h2>
            <p>Every partnership directly supports maternal health, child nutrition, disaster emergency response, and safe learning spaces in Sokoto.</p>
          </div>

          <div className="causes-grid">
            {causes.map((cause, idx) => (
              <div key={cause.id} className="cause-card" data-reveal="up" data-reveal-delay={String((idx + 1) * 150)}>
                <div className="cause-img">
                  <img src={cause.image} alt={cause.title} style={{ height: '220px', width: '100%', objectFit: 'cover' }} />
                </div>
                <div className="cause-body">
                  <span style={{ fontSize: '.78rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '.06em', color: '#6C2BD9', display: 'block', marginBottom: '.4rem' }}>{cause.category}</span>
                  <h3>{cause.title}</h3>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '.75rem 0', borderTop: '1px solid #F1F5F9', borderBottom: '1px solid #F1F5F9', margin: '1rem 0 1.25rem', fontSize: '.85rem' }}>
                    <span style={{ color: 'var(--text-muted)' }}><i className="fas fa-users" style={{ color: '#6C2BD9', marginRight: '.4rem' }}></i>{cause.reach}</span>
                    <span style={{ fontWeight: 600, color: '#10B981', background: '#ECFDF5', padding: '.2rem .6rem', borderRadius: '12px', fontSize: '.78rem' }}>{cause.status}</span>
                  </div>
                  <Link to="/contact" className="btn-primary" style={{ width: '100%', justifyContent: 'center', background: '#6C2BD9', borderColor: '#6C2BD9' }}>
                    Partner with us <i className="fas fa-handshake" style={{ marginLeft: '.5rem' }}></i>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== MEET OUR VOLUNTEERS ========== */}
      <section className="volunteers-section section-padding">
        <div className="container">
          <div className="section-header" data-reveal="up">
            <span>Leadership &amp; Team</span>
            <h2>Meet The Team Behind Saferplace Initiative</h2>
            <p>Our dedicated directors, board members, and field leads in Sokoto State.</p>
          </div>

          <div style={{ display: 'flex', justifyContent: 'center', marginTop: '4rem' }} data-reveal="zoom" data-reveal-delay="200">
            <TeamStack members={volunteers} />
          </div>
        </div>
      </section>

      {/* ========== CTA REVEAL ========== */}
      <CTAReveal />

      {/* ========== TESTIMONIALS ========== */}
      <section className="testimonials-section section-padding" data-reveal="up">
        <div className="container">
          <div className="section-header">
            <span>Testimonials</span>
            <h2>What Community Leaders Say</h2>
            <p>Hear from traditional leaders, school principals, and health officers in Sokoto State.</p>
          </div>

          <TestimonialSlider reviews={testimonials} />
        </div>
      </section>
    </>
  );
}


