import React from 'react';
import { motion } from 'framer-motion';
import TestimonialSlider from '../components/TestimonialSlider';
import TeamStack from '../components/TeamStack';
import HopeSection from '../components/HopeSection';
import CTAReveal from '../components/CTAReveal';
import HeroBackgroundSlider from '../components/HeroBackgroundSlider';
import { StackingCards, StackingCardItem, InitiativeCard } from '../components/StackingCards';

const BASE = import.meta.env.BASE_URL;

const sectionVariants = {
  hidden: { opacity: 0, y: 32, scale: 0.985 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.75,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export default function Home() {
  const initiatives = [
    {
      id: 1,
      category: 'WASH & Clean Sanitation',
      title: 'Sokoto 10KM Marathon — Unite to End Open Defecation',
      description:
        'Mobilizing thousands of runners, youth groups, and traditional rulers (Mai Angwan) across Sokoto to eradicate open defecation, install clean school wash blocks, and champion community health hygiene in every LGA.',
      reach: '50,000+ Targeted',
      location: 'Sokoto Metropolis · 6 LGAs',
      status: 'Active Campaign',
      statusColor: '#10B981',
      image: `${BASE}images/marathon_campaign.jpg`,
      themeGradient: 'linear-gradient(135deg, #181428 0%, #2A103C 50%, #3B124D 100%)',
      accentColor: '#A855F7',
    },
    {
      id: 2,
      category: 'Child Welfare & Nutrition',
      title: 'Maternal & Child Nutrition Support Drive',
      description:
        'Delivering vital nutrient-dense food packs, therapeutic infant feedings, and clinical growth monitoring directly to nursing mothers and severely vulnerable infants across rural health posts.',
      reach: '8,500+ Mothers & Infants',
      location: 'Underserved Communities',
      status: 'Ongoing Outreach',
      statusColor: '#38BDF8',
      image: `${BASE}images/maternal_child_nutrition_drive.jpg`,
      themeGradient: 'linear-gradient(135deg, #0F172A 0%, #162447 50%, #1E3A8A 100%)',
      accentColor: '#38BDF8',
    },
    {
      id: 3,
      category: 'Maternal & Child Health',
      title: 'RMNCAH Maternal & Child Health Outreach',
      description:
        'Delivering free Reproductive, Maternal, Newborn, Child, and Adolescent Health clinics, antenatal toolkits, routine childhood immunizations, and vital medical supplies to rural communities.',
      reach: '6,200+ Clinical Checkups',
      location: 'Priority LGAs · Sokoto State',
      status: 'Active Field Clinic',
      statusColor: '#EC4899',
      image: `${BASE}images/rmncah_maternal_child_health.jpg`,
      themeGradient: 'linear-gradient(135deg, #240E24 0%, #381232 50%, #4D1540 100%)',
      accentColor: '#EC4899',
    },
    {
      id: 4,
      category: 'Protection & Dignity',
      title: 'UNICEF Dignity Kits & Survivor Protection Support',
      description:
        'In strategic partnership with UNICEF, distributing comprehensive dignity packs, hygiene essentials, trauma-informed psychosocial counseling, and emergency relief supplies to vulnerable women and children.',
      reach: '1,500+ Displaced Families',
      location: 'IDP Settlements · Sokoto',
      status: 'Field Distribution Active',
      statusColor: '#10B981',
      image: `${BASE}images/dignity_kits/dignity_idp_women_carrying.jpg`,
      themeGradient: 'linear-gradient(135deg, #0D2818 0%, #133E23 50%, #1A532E 100%)',
      accentColor: '#34D399',
    },
  ];

  const volunteers = [
    { id: 1, name: 'Arnold Nicholas', role: 'Child Protection Advocate', image: `${BASE}images/arnold_nicholas.jpg` },
    { id: 2, name: 'Prince Nicholas', role: 'Founder & Executive Director', image: `${BASE}images/prince_nicholas.jpg` },
    { id: 3, name: 'Kola Odejobi', role: 'Governance & Policy Advocacy Team Lead', image: `${BASE}images/team_director.jpg` },
    { id: 4, name: 'Jemima Karatu', role: 'Disaster & Emergency Management Response Team Lead', image: `${BASE}images/team_board.jpg` },
    { id: 5, name: 'Nefisa Muhammad', role: 'Reproductive Sexual Health & Maternal Newborn Team Lead', image: `${BASE}images/team_health.jpg` },
    { id: 6, name: 'Victory Meschak', role: 'Gender Equality & Inclusion (GESI) Lead', image: `${BASE}images/victory_meschak.jpg` },
  ];

  const testimonials = [
    {
      id: 1,
      quote:
        'Saferplace Initiative has transformed our communities across Sokoto South—uplifting displaced women and children, improving school sanitation, greening our environment, and promoting community hygiene to drastically reduce preventable diseases. Our families are healthier and deeply grateful. Mungode!',
      name: 'Alhaji Sani Umar Jabbi',
      affiliation: 'District Head of GaGi Community · Sarkin Yakin Gagi, Sokoto South LGA',
      imageSrc: `${BASE}images/alhaji_sani_umar_jabbi.jpg`,
      thumbnailSrc: `${BASE}images/alhaji_sani_umar_jabbi.jpg`,
    },
    {
      id: 2,
      quote:
        'Saferplace Initiative provides vital safe spaces and referral support for vulnerable women and children in Sokoto. Their dedication to dignity, child nutrition, and survivor privacy is remarkable.',
      name: 'Hajiya Amina Bello',
      affiliation: 'Community Women Leader, Sokoto',
      imageSrc: `${BASE}images/women_empowerment.jpg`,
      thumbnailSrc: `${BASE}images/women_empowerment.jpg`,
    },
    {
      id: 3,
      quote:
        'Their RMNCAH medical outreaches and maternal nutrition packs reach rural mothers who have no nearby hospital. This is true grassroots healthcare access.',
      name: 'Dr. Aliyu Shehu',
      affiliation: 'Public Health Officer, Sokoto State',
      imageSrc: `${BASE}images/child_nutrition.jpg`,
      thumbnailSrc: `${BASE}images/child_nutrition.jpg`,
    },
  ];

  return (
    <>
      {/* ========== HERO SECTION WITH DYNAMIC BACKGROUND SLIDER ========== */}
      <HeroBackgroundSlider />

      {/* ========== HOPE OF OTHERS SECTION ========== */}
      <motion.div
        className="floating-section-card"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-50px' }}
        variants={sectionVariants}
      >
        <HopeSection />
      </motion.div>

      {/* ========== STATS SECTION ========== */}
      <motion.div
        className="floating-section-card"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-50px' }}
        variants={sectionVariants}
      >
        <section
          className="stats-section"
          style={{ background: 'linear-gradient(135deg, #181428 0%, #3B124D 100%)' }}
        >
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
                <h3 style={{ color: '#fff' }}>
                  1,500<span>+</span>
                </h3>
                <p style={{ color: 'rgba(255,255,255,.8)' }}>Adolescents, Women &amp; Children</p>
              </div>
              <div className="stat-card" data-reveal="zoom" data-reveal-delay="400">
                <h3 style={{ color: '#fff' }}>
                  500<span>+</span>
                </h3>
                <p style={{ color: 'rgba(255,255,255,.8)' }}>Trees in Green Drive</p>
              </div>
            </div>
          </div>
        </section>
      </motion.div>

      {/* ========== 21ST.DEV FLOATING STACKING CARDS: ACTIVE INITIATIVES ========== */}
      <section className="stacking-cards-section">
        <div className="container">
          <div className="section-header" data-reveal="up" style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
            <span style={{ color: '#6C2BD9', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', fontSize: '0.84rem' }}>
              ✦ Priority Operations · 2026
            </span>
            <h2 style={{ fontSize: 'clamp(2rem, 3.2vw, 2.75rem)', fontWeight: 800, marginTop: '0.5rem', marginBottom: '0.75rem' }}>
              Support Child Welfare &amp; Protection
            </h2>
            <p style={{ maxWidth: '680px', margin: '0 auto', color: 'var(--text-muted)', fontSize: '1.05rem', lineHeight: '1.6' }}>
              Scroll down to explore our flagship field initiatives across Sokoto State. Each card pins and layers into view as you journey through our mission.
            </p>
          </div>

          <StackingCards totalCards={initiatives.length} scaleMultiplier={0.035}>
            {initiatives.map((item, idx) => (
              <StackingCardItem
                key={item.id}
                index={idx}
                topOffset={85}
                stepOffset={20}
              >
                <InitiativeCard
                  index={idx}
                  total={initiatives.length}
                  category={item.category}
                  title={item.title}
                  description={item.description}
                  reach={item.reach}
                  location={item.location}
                  status={item.status}
                  statusColor={item.statusColor}
                  image={item.image}
                  themeGradient={item.themeGradient}
                  accentColor={item.accentColor}
                  link="/contact"
                />
              </StackingCardItem>
            ))}
          </StackingCards>
        </div>
      </section>

      {/* ========== MEET OUR VOLUNTEERS ========== */}
      <motion.div
        className="floating-section-card"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-50px' }}
        variants={sectionVariants}
      >
        <section className="volunteers-section section-padding">
          <div className="container">
            <div className="section-header" data-reveal="up">
              <span>Leadership &amp; Team</span>
              <h2>Meet The Team Behind Saferplace Initiative</h2>
              <p>Our dedicated directors, board members, and field leads in Sokoto State.</p>
            </div>

            <div
              style={{ display: 'flex', justifyContent: 'center', marginTop: '4rem' }}
              data-reveal="zoom"
              data-reveal-delay="200"
            >
              <TeamStack members={volunteers} />
            </div>
          </div>
        </section>
      </motion.div>

      {/* ========== CTA REVEAL ========== */}
      <motion.div
        className="floating-section-card"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-50px' }}
        variants={sectionVariants}
      >
        <CTAReveal />
      </motion.div>

      {/* ========== TESTIMONIALS ========== */}
      <motion.div
        className="floating-section-card"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-50px' }}
        variants={sectionVariants}
      >
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
      </motion.div>
    </>
  );
}
