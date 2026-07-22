import React from 'react';
import { Link } from 'react-router-dom';
import TestimonialSlider from '../components/TestimonialSlider';
import NewsCarousel from '../components/NewsCarousel';
import TeamStack from '../components/TeamStack';
import HopeSection from '../components/HopeSection';
import CTAReveal from '../components/CTAReveal';

export default function Home() {
  const causes = [
    {
      id: 1,
      image: `${import.meta.env.BASE_URL}images/four_children.jpg`,
      title: 'Green Sokoto Initiative 2026 (500 Trees Drive)',
      percent: '44%',
      raised: '₦350,000',
      target: '₦800,000'
    },
    {
      id: 2,
      image: `${import.meta.env.BASE_URL}images/sparkly_dress_girl.jpg`,
      title: 'Protection & Survivor Support Program',
      percent: '65%',
      raised: '₦780,000',
      target: '₦1,200,000'
    },
    {
      id: 3,
      image: `${import.meta.env.BASE_URL}images/toddler_baby.jpg`,
      title: 'RMNCAH Maternal & Child Health Outreach',
      percent: '61%',
      raised: '₦920,000',
      target: '₦1,500,000'
    }
  ];

  const events = [
    {
      id: 1,
      image: `${import.meta.env.BASE_URL}images/saferplace_banner.jpg`,
      day: '06',
      month: 'Jun',
      time: '09:00 AM - 2:00 PM',
      location: 'Sokoto Metropolis, Sokoto',
      title: 'World Tree Planting Day 2026 — Green Sokoto Flag-Off.'
    },
    {
      id: 2,
      image: `${import.meta.env.BASE_URL}images/igbo_attire_boy.jpg`,
      day: '14',
      month: 'Aug',
      time: '10:00 AM - 1:00 PM',
      location: 'Sokoto North LGA',
      title: 'Safe Schools Child Protection & Consent Education.'
    },
    {
      id: 3,
      image: `${import.meta.env.BASE_URL}images/glasses_boy.jpg`,
      day: '20',
      month: 'Sep',
      time: '08:30 AM - 4:00 PM',
      location: 'Dange Shuni LGA',
      title: 'RMNCAH Mobile Antenatal & Child Nutrition Clinic.'
    }
  ];

  const volunteers = [
    { id: 1, name: 'Ejiegbu Chinomso Prince', role: 'Executive Director', image: `${import.meta.env.BASE_URL}images/kaftan_boy.jpg` },
    { id: 2, name: 'Mr. Kolawole Abidemi', role: 'Board Member & Strategic Advisor', image: `${import.meta.env.BASE_URL}images/igbo_attire_boy.jpg` },
    { id: 3, name: 'Dr. Fatima Usman', role: 'Health & RMNCAH Lead', image: `${import.meta.env.BASE_URL}images/sparkly_dress_girl.jpg` },
    { id: 4, name: 'Ibrahim Abubakar', role: 'Climate & Field Operations Lead', image: `${import.meta.env.BASE_URL}images/glasses_boy.jpg` }
  ];

  const testimonials = [
    {
      id: 1,
      quote: "Saferplace Initiative provides vital safe spaces and referral support for vulnerable women and children in Sokoto. Their dedication to dignity and survivor privacy is remarkable.",
      name: 'Hajiya Amina Bello',
      affiliation: 'Community Women Leader, Sokoto',
      imageSrc: `${import.meta.env.BASE_URL}images/four_children.jpg`,
      thumbnailSrc: `${import.meta.env.BASE_URL}images/four_children.jpg`
    },
    {
      id: 2,
      quote: "The Green Sokoto Initiative 2026 addresses the harsh heat stress in our city while empowering students as Tree Guardians. A brilliant climate and protection nexus project.",
      name: 'Malam Usmane Garba',
      affiliation: 'School Principal, Sokoto South',
      imageSrc: `${import.meta.env.BASE_URL}images/kaftan_boy.jpg`,
      thumbnailSrc: `${import.meta.env.BASE_URL}images/kaftan_boy.jpg`
    },
    {
      id: 3,
      quote: "Their RMNCAH medical outreaches reach rural mothers who have no nearby hospital. This is true grassroots empowerment and healthcare access.",
      name: 'Dr. Aliyu Shehu',
      affiliation: 'Public Health Officer, Sokoto State',
      imageSrc: `${import.meta.env.BASE_URL}images/toddler_baby.jpg`,
      thumbnailSrc: `${import.meta.env.BASE_URL}images/toddler_baby.jpg`
    }
  ];

  const news = [
    {
      id: 1,
      image: `${import.meta.env.BASE_URL}images/saferplace_banner.jpg`,
      category: 'Climate & Environment',
      title: 'Green Sokoto Initiative 2026: Planting 500 Trees For World Tree Planting Day',
      desc: 'Targeting 10 strategic sites across Sokoto Metropolis to mitigate extreme heat stress and desertification.',
      date: 'June 06, 2026'
    },
    {
      id: 2,
      image: `${import.meta.env.BASE_URL}images/registration_letter.jpg`,
      category: 'Protection',
      title: 'Operational Registration Submitted To Ministry Of Budget & Economic Planning',
      desc: 'Saferplace Initiative (CAC/IT/NO 7571193) expands formal government partnership in Sokoto State.',
      date: 'July 16, 2026'
    },
    {
      id: 3,
      image: `${import.meta.env.BASE_URL}images/four_children.jpg`,
      category: 'Education',
      title: 'Safe Schools Workshop Reaches 500+ Adolescents In Sokoto Secondary Schools',
      desc: 'Training students on personal safety, digital security, consent education, and peer reporting networks.',
      date: 'August 02, 2026'
    },
    {
      id: 4,
      image: `${import.meta.env.BASE_URL}images/toddler_baby.jpg`,
      category: 'Health',
      title: '50 Community First Responders Trained For Survivor Support & RMNCAH Outreach',
      desc: 'Equipping neighborhood volunteers across 5 LGAs with initial psychosocial and referral tools.',
      date: 'August 18, 2026'
    }
  ];


  return (
    <>
      {/* ========== HERO SECTION ========== */}
      <section className="hero" style={{ background: 'linear-gradient(135deg, #0F172A 0%, #1E1B4B 50%, #4C1D95 100%)' }}>
        <div className="hero-glow-blob"></div>

        <div className="container" style={{ position: 'relative', zIndex: 10 }}>
          <div className="hero-grid">
            
            {/* Left Content Column */}
            <div className="hero-content">
              <div className="hero-award-tag" style={{ background: 'rgba(255,255,255,.12)', borderColor: 'rgba(255,255,255,.25)' }}>
                <span style={{ color: '#fff' }}>CAC/IT/NO 7571193 · SOKOTO STATE</span>
                <i className="fas fa-star" style={{ color: '#A78BFA', fontSize: '.75rem' }}></i>
              </div>
              <h1 className="hero-title" style={{ color: '#fff' }}>
                Creating <br />
                <span className="text-gradient">Safe Spaces</span> <br />
                For Every Life
              </h1>
              <p className="hero-description" style={{ color: 'rgba(255,255,255,.85)' }}>
                Saferplace Initiative is a registered non-profit organization in Sokoto State, Nigeria, dedicated to strengthening community safety, protection, health, and climate resilience for women, children, and young people.
              </p>
              <div className="hero-cta-buttons">
                <Link to="/contact" className="hero-btn-white">
                  Support Our Mission <i className="fas fa-arrow-right" style={{ marginLeft: '.5rem', fontSize: '.85rem' }}></i>
                </Link>
                <Link to="/about" className="hero-btn-outline" style={{ color: '#fff', borderColor: 'rgba(255,255,255,.4)' }}>
                  <i className="fas fa-info-circle" style={{ marginRight: '.6rem', fontSize: '.8rem' }}></i> Our 6 Focus Areas
                </Link>
              </div>
            </div>

            {/* Right Metric Cards Column */}
            <div className="hero-cards-col">
              
              {/* Large Metric Panel */}
              <div className="hero-metric-panel" style={{ background: 'rgba(255,255,255,.08)', backdropFilter: 'blur(10px)', border: '1px solid rgba(255,255,255,.18)' }}>
                <div className="metric-header-row">
                  <div className="metric-icon-wrap" style={{ background: '#6C2BD9' }}>
                    <i className="fas fa-shield-alt" style={{ fontSize: '1.25rem', color: '#fff' }}></i>
                  </div>
                  <div>
                    <h3 style={{ color: '#fff' }}>5 LGAs</h3>
                    <p style={{ color: 'rgba(255,255,255,.8)' }}>Dange Shuni, Gada, Sokoto N/S, Wamakko</p>
                  </div>
                </div>

                <div className="metric-progress-wrap">
                  <div className="progress-label-row">
                    <span style={{ color: 'rgba(255,255,255,.9)' }}>Program Transparency</span>
                    <span style={{ color: '#A78BFA' }}>100%</span>
                  </div>
                  <div className="metric-progress-bg">
                    <div className="metric-progress-fill" style={{ width: '100%', background: '#6C2BD9' }}></div>
                  </div>
                </div>

                <div className="metric-details-grid">
                  <div className="metric-detail-item">
                    <h4 style={{ color: '#fff' }}>500+</h4>
                    <span style={{ color: 'rgba(255,255,255,.7)' }}>STUDENTS</span>
                  </div>
                  <div className="metric-divider"></div>
                  <div className="metric-detail-item">
                    <h4 style={{ color: '#fff' }}>50+</h4>
                    <span style={{ color: 'rgba(255,255,255,.7)' }}>RESPONDERS</span>
                  </div>
                  <div className="metric-divider"></div>
                  <div className="metric-detail-item">
                    <h4 style={{ color: '#fff' }}>6</h4>
                    <span style={{ color: 'rgba(255,255,255,.7)' }}>PILLARS</span>
                  </div>
                </div>

                <div className="metric-badges-row">
                  <span className="metric-badge green">
                    <span className="badge-dot"></span> CAC REGISTERED
                  </span>
                  <span className="metric-badge gold">
                    <i className="fas fa-crown" style={{ marginRight: '.3rem', fontSize: '.75rem' }}></i> SOKOTO BASED
                  </span>
                </div>
              </div>

              {/* Smaller Partners Panel */}
              <div className="hero-partners-panel" style={{ background: 'rgba(255,255,255,.05)', border: '1px solid rgba(255,255,255,.1)' }}>
                <p className="partners-label" style={{ color: 'rgba(255,255,255,.7)' }}>Institutional Stakeholders & Partners</p>
                <div className="partners-logos" style={{ color: '#fff' }}>
                  <span><i className="fas fa-university" style={{ marginRight: '.3rem', color: '#A78BFA' }}></i> Ministry of Budget Sokoto</span>
                  <span><i className="fas fa-leaf" style={{ marginRight: '.3rem', color: '#A78BFA' }}></i> Ministry of Environment</span>
                  <span><i className="fas fa-graduation-cap" style={{ marginRight: '.3rem', color: '#A78BFA' }}></i> UDUS Forestry</span>
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* ========== HOPE OF OTHERS SECTION ========== */}
      <HopeSection />

      {/* ========== STATS SECTION ========== */}
      <section className="stats-section" style={{ background: 'linear-gradient(135deg, #1E1B4B 0%, #4C1D95 100%)' }}>
        <div className="container">
          <div className="stats-grid">
            <div className="stat-card">
              <h3 style={{ color: '#fff' }}>6<span></span></h3>
              <p style={{ color: 'rgba(255,255,255,.8)' }}>Core Focus Areas</p>
            </div>
            <div className="stat-card">
              <h3 style={{ color: '#fff' }}>5<span></span></h3>
              <p style={{ color: 'rgba(255,255,255,.8)' }}>Sokoto LGAs</p>
            </div>
            <div className="stat-card">
              <h3 style={{ color: '#fff' }}>500<span>+</span></h3>
              <p style={{ color: 'rgba(255,255,255,.8)' }}>Adolescents Reached</p>
            </div>
            <div className="stat-card">
              <h3 style={{ color: '#fff' }}>500<span>+</span></h3>
              <p style={{ color: 'rgba(255,255,255,.8)' }}>Trees in Green Drive</p>
            </div>
          </div>
        </div>
      </section>

      {/* ========== POPULAR CAUSES ========== */}
      <section className="causes-section section-padding">
        <div className="container">
          <div className="section-header">
            <span>Active Initiatives</span>
            <h2>Support Active Campaigns</h2>
            <p>Every contribution directly supports survivor protection, maternal-child health, and tree planting drives in Sokoto.</p>
          </div>

          <div className="causes-grid">
            {causes.map((cause, idx) => (
              <div key={cause.id} className="cause-card" data-aos="fade-up" data-delay={String((idx + 1) * 150)}>
                <div className="cause-img">
                  <img src={cause.image} alt={cause.title} />
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
                  <Link to="/contact" className="btn-primary" style={{ width: '100%', justifyContent: 'center', background: '#6C2BD9', borderColor: '#6C2BD9' }}>Donate Now</Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== UPCOMING EVENTS ========== */}
      <section className="events-section section-padding" style={{ background: '#F8FAFC' }}>
        <div className="container">
          <div className="section-header">
            <span>Community Events</span>
            <h2>Upcoming Outreaches & Drives</h2>
            <p>Join our upcoming field activities and tree planting exercises across Sokoto State.</p>
          </div>

          <div className="events-grid">
            {events.map((event, idx) => (
              <div key={event.id} className="event-card" data-aos="fade-up" data-delay={String((idx + 1) * 150)}>
                <div className="event-img-wrap">
                  <img src={event.image} alt={event.title} />
                  <div className="event-date-badge" style={{ background: '#6C2BD9' }}>
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
          <div className="section-header">
            <span>Leadership & Team</span>
            <h2>Meet The Team Behind Saferplace Initiative</h2>
            <p>Our dedicated directors, board members, and field leads in Sokoto State.</p>
          </div>

          <div style={{ display: 'flex', justifyContent: 'center', marginTop: '4rem' }}>
            <TeamStack members={volunteers} />
          </div>
        </div>
      </section>

      {/* ========== PHOTO ROW ========== */}
      <section className="gallery-row">
        <div className="gallery-cell">
          <img src={`${import.meta.env.BASE_URL}images/saferplace_banner.jpg`} alt="Saferplace Roll-up Banner" />
          <div className="gallery-overlay"><i className="fas fa-expand"></i></div>
        </div>
        <div className="gallery-cell">
          <img src={`${import.meta.env.BASE_URL}images/four_children.jpg`} alt="Community children outreach" />
          <div className="gallery-overlay"><i className="fas fa-expand"></i></div>
        </div>
        <div className="gallery-cell">
          <img src={`${import.meta.env.BASE_URL}images/toddler_baby.jpg`} alt="Toddler health beneficiary" />
          <div className="gallery-overlay"><i className="fas fa-expand"></i></div>
        </div>
        <div className="gallery-cell">
          <img src={`${import.meta.env.BASE_URL}images/sparkly_dress_girl.jpg`} alt="Youth empowerment" />
          <div className="gallery-overlay"><i className="fas fa-expand"></i></div>
        </div>
        <div className="gallery-cell">
          <img src={`${import.meta.env.BASE_URL}images/igbo_attire_boy.jpg`} alt="Child dignity" />
          <div className="gallery-overlay"><i className="fas fa-expand"></i></div>
        </div>
        <div className="gallery-cell">
          <img src={`${import.meta.env.BASE_URL}images/registration_letter.jpg`} alt="Ministry Registration Letter" />
          <div className="gallery-overlay"><i className="fas fa-expand"></i></div>
        </div>
      </section>


      {/* ========== CTA REVEAL ========== */}
      <CTAReveal />

      {/* ========== TESTIMONIALS ========== */}
      <section className="testimonials-section section-padding">
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
          <div className="section-header">
            <span>Updates & Articles</span>
            <h2>Latest News & Project Updates</h2>
            <p>Read detailed reports of our field outreaches and tree planting progress in Sokoto State.</p>
          </div>

          <NewsCarousel newsItems={news} />
        </div>
      </section>
    </>
  );
}

