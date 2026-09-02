import React from 'react';
import { Link } from 'react-router-dom';
import TestimonialSlider from '../components/TestimonialSlider';
import NewsCarousel from '../components/NewsCarousel';
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
      percent: '30%',
      raised: '₦450,000',
      target: '₦1,500,000'
    },
    {
      id: 2,
      image: `${BASE}images/child_nutrition.jpg`,
      title: 'Maternal & Child Nutrition Support Drive',
      percent: '55%',
      raised: '₦550,000',
      target: '₦1,000,000'
    },
    {
      id: 3,
      image: `${BASE}images/child_welfare_care.jpg`,
      title: 'RMNCAH Maternal & Child Health Outreach',
      percent: '68%',
      raised: '₦920,000',
      target: '₦1,500,000'
    }
  ];

  const events = [
    {
      id: 1,
      image: `${BASE}images/marathon_campaign.jpg`,
      day: '15',
      month: 'Nov',
      time: '06:30 AM - 12:00 PM',
      location: 'Sokoto Metropolis',
      title: 'Sokoto 10KM Marathon — Unite to End Open Defecation'
    },
    {
      id: 2,
      image: `${BASE}images/child_nutrition.jpg`,
      day: '12',
      month: 'Jul',
      time: '09:00 AM - 2:00 PM',
      location: 'Tangaza & Gada LGAs',
      title: 'Community Nutrition & Child Food Security Outreach.'
    },
    {
      id: 3,
      image: `${BASE}images/child_welfare_care.jpg`,
      day: '14',
      month: 'Aug',
      time: '10:00 AM - 1:00 PM',
      location: 'Sokoto North & South LGAs',
      title: 'Safe Schools Child Protection & Consent Education.'
    }
  ];

  const volunteers = [
    { id: 1, name: 'Prince Nicholas', role: 'Founder & Executive Director', image: `${BASE}images/prince_nicholas.jpg` },
    { id: 2, name: 'Kola Odejobi', role: 'Governance & Policy Advocacy Team Lead', image: `${BASE}images/team_director.jpg` },
    { id: 3, name: 'Jemima Karatu', role: 'Disaster & Emergency Management Response Team Lead', image: `${BASE}images/team_board.jpg` },
    { id: 4, name: 'Nefisa Muhammad', role: 'Reproductive Sexual Health & Maternal Newborn Team Lead', image: `${BASE}images/team_health.jpg` },
    { id: 5, name: 'Victory Meschak', role: 'Gender Equality & Inclusion (GESI) Lead', image: `${BASE}images/victory_meschak.jpg` }
  ];

  const testimonials = [
    {
      id: 1,
      quote: "Saferplace Initiative has greatly and tremendously impacted our communities here in Sokoto South Local Government. They have improved the livelihood of women and children of internally displaced persons. They have also impacted the school community in my domain by building toilets and establishing environmental clubs in all the over 50 schools in Sokoto South LGA. Their tree planting campaign has also helped our green life and improved our climatic condition. They are currently embarking on hygiene promotion in the community; this activity has helped greatly in improving environmental and personal hygiene. Solid waste littering has drastically reduced and the rate of sickness such as typhoid, malaria, and cholera has reduced. Our women and children are healthier and our communities are happier for this. Mungode, thank you Saferplace Initiative.",
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

  const news = [
    {
      id: 1,
      image: `${BASE}images/child_nutrition.jpg`,
      category: 'Nutrition & Wellbeing',
      title: 'Maternal & Child Nutrition Drive Expands to Tangaza and Gada LGAs',
      desc: 'Delivering nutritional assessments, micronutrient supplements, and infant care toolkits to underserved communities.',
      date: 'June 20, 2026'
    },
    {
      id: 2,
      image: `${BASE}images/women_empowerment.jpg`,
      category: 'Gender & Inclusion (GESI)',
      title: 'Gender Equality & Social Inclusion (GESI) Safe Space Forums Established',
      desc: 'Saferplace Initiative hosts grassroots dialogues empowering women groups and youth advocates across 6 LGAs.',
      date: 'July 16, 2026'
    },
    {
      id: 3,
      image: `${BASE}images/child_welfare_care.jpg`,
      category: 'Child Protection',
      title: 'Safe Schools Workshop Reaches 1,500+ Adolescents, Women & Children',
      desc: 'Equipping school children with safety kits, emergency contact channels, and peer reporting networks.',
      date: 'August 02, 2026'
    },
    {
      id: 4,
      image: `${BASE}images/disaster_relief.jpg`,
      category: 'Disaster Management',
      title: 'Emergency Relief & Disaster Response Teams Deployed in Sokoto',
      desc: 'Providing immediate food, clean water, and emergency medical kits to flood-prone vulnerable communities.',
      date: 'August 18, 2026'
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
              <h3 style={{ color: '#fff' }}>6</h3>
              <p style={{ color: 'rgba(255,255,255,.8)' }}>Operational LGAs (Tangaza added)</p>
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
            <span className="float-badge">Active Initiatives</span>
            <h2 className="floating-text-glow">Support Child Welfare &amp; Protection</h2>
            <p>Every partnership directly supports maternal health, child nutrition, disaster emergency response, and safe learning spaces in Sokoto.</p>
          </div>

          <div className="causes-grid">
            {causes.map((cause, idx) => (
              <div key={cause.id} className="cause-card" data-reveal="up" data-reveal-delay={String((idx + 1) * 150)}>
                <div className="cause-img">
                  <img src={cause.image} alt={cause.title} style={{ height: '220px', width: '100%', objectFit: 'cover' }} />
                </div>
                <div className="cause-body">
                  <h3>{cause.title}</h3>
                  <div className="cause-progress">
                    <div className="cause-bar-bg">
                      <div className="cause-bar-fill" style={{ width: cause.percent, background: '#6C2BD9' }}></div>
                    </div>
                    <div className="cause-numbers">
                      <span className="raised">Raised: {cause.raised}</span>
                      <span className="target">Goal: {cause.target}</span>
                    </div>
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

      {/* ========== UPCOMING EVENTS ========== */}
      <section className="events-section section-padding" style={{ background: '#F8FAFC' }}>
        <div className="container">
          <div className="section-header" data-reveal="up">
            <span className="float-badge">Community Events</span>
            <h2 className="floating-text-glow">Upcoming Field Outreaches &amp; Clinics</h2>
            <p>Join our scheduled field programs, nutrition drives, and safe schools workshops across Sokoto State.</p>
          </div>

          <div className="events-grid">
            {events.map((event, idx) => (
              <div key={event.id} className="event-card" data-reveal="up" data-reveal-delay={String((idx + 1) * 150)}>
                <div className="event-img-wrap">
                  <img src={event.image} alt={event.title} style={{ height: '200px', width: '100%', objectFit: 'cover' }} />
                  <div className="event-date-badge float-badge" style={{ background: '#6C2BD9' }}>
                    <h4>{event.day}</h4>
                    <span>{event.month}</span>
                  </div>
                </div>
                <div className="event-body">
                  <div className="event-meta">
                    <span><i className="far fa-clock"></i> {event.time}</span>
                    <span><i className="fas fa-map-marker-alt" style={{ color: '#6C2BD9' }}></i> {event.location}</span>
                  </div>
                  <h3>{event.title}</h3>
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
            <span className="float-badge">Leadership &amp; Team</span>
            <h2 className="floating-text-glow">Meet The Team Behind Saferplace Initiative</h2>
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

      {/* ========== LATEST NEWS & BLOG ========== */}
      <section className="news-section section-padding" style={{ background: '#F8FAFC' }}>
        <div className="container">
          <div className="section-header" data-reveal="up">
            <span className="float-badge">Updates &amp; Articles</span>
            <h2 className="floating-text-glow">Latest Field Reports &amp; Program Updates</h2>
            <p>Read detailed reports of our child welfare outreaches, nutrition distributions, and disaster preparedness in Sokoto State.</p>
          </div>

          <NewsCarousel newsItems={news} />
        </div>
      </section>
    </>
  );
}


