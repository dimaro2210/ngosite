import React from 'react';
import { motion } from 'framer-motion';
import TestimonialSlider from '../components/TestimonialSlider';
import TeamStack from '../components/TeamStack';
import HopeSection from '../components/HopeSection';
import CTAReveal from '../components/CTAReveal';
import HeroBackgroundSlider from '../components/HeroBackgroundSlider';
import { StackingCards } from '../components/StackingCards';

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
      number: '01',
      category: 'WASH & Clean Sanitation Campaign',
      title: 'Sokoto 10KM Marathon — Unite to End Open Defecation',
      description:
        'Mobilizing 50,000+ runners, youth volunteers, and traditional rulers (Mai Angwan) across Sokoto to eradicate open defecation, install clean school wash blocks, and champion community health hygiene in every LGA.',
      reach: '50,000+ Targeted Citizens',
      location: 'Sokoto Metropolis · 6 LGAs',
      status: 'Active Campaign',
      heroImg: `${BASE}images/marathon_campaign.jpg`,
      heroBadge: 'Marathon Mobilization',
      featuresImg: `${BASE}images/wash_commission/wash_students_assembly.jpg`,
      featuresBadge: 'School WASH Projects',
      showcaseImg: `${BASE}images/wash_commission/wash_project_signboard.jpg`,
      showcaseBadge: 'UNICEF & RUWASA Certified',
      link: '/contact',
    },
    {
      id: 2,
      number: '02',
      category: 'Child Welfare & Infant Nutrition',
      title: 'Maternal & Child Nutrition Support Drive',
      description:
        'Delivering vital nutrient-dense food packs, therapeutic infant feedings, and clinical growth monitoring directly to nursing mothers and severely vulnerable infants across rural health posts.',
      reach: '8,500+ Mothers & Infants',
      location: 'Underserved Communities',
      status: 'Ongoing Outreach',
      heroImg: `${BASE}images/child_nutrition.jpg`,
      heroBadge: 'Nutrition Screening',
      featuresImg: `${BASE}images/maternal_child_nutrition_drive.jpg`,
      featuresBadge: 'Therapeutic Food Supply',
      showcaseImg: `${BASE}images/child_welfare_care.jpg`,
      showcaseBadge: 'Mother & Infant Support',
      link: '/contact',
    },
    {
      id: 3,
      number: '03',
      category: 'Clinical Healthcare & Immunization',
      title: 'RMNCAH Maternal & Child Health Clinical Outreach',
      description:
        'Delivering free Reproductive, Maternal, Newborn, Child, and Adolescent Health clinics, antenatal toolkits, routine childhood immunizations, and vital medical supplies to rural communities.',
      reach: '6,200+ Clinical Checkups',
      location: 'Priority LGAs · Sokoto State',
      status: 'Active Field Clinic',
      heroImg: `${BASE}images/team_health.jpg`,
      heroBadge: 'Clinical Field Officers',
      featuresImg: `${BASE}images/children/four_children.jpg`,
      featuresBadge: 'Pediatric Care & Vaccines',
      showcaseImg: `${BASE}images/rmncah_maternal_child_health.jpg`,
      showcaseBadge: 'Free Maternal Consultations',
      link: '/contact',
    },
    {
      id: 4,
      number: '04',
      category: 'Protection & Dignity Kits',
      title: 'UNICEF Dignity Kits & IDP Survivor Care Support',
      description:
        'In strategic partnership with UNICEF, distributing comprehensive dignity packs, hygiene essentials, trauma-informed psychosocial counseling, and emergency relief supplies to vulnerable displaced families.',
      reach: '1,500+ Displaced Families',
      location: 'IDP Settlements · Sokoto',
      status: 'Field Distribution Active',
      heroImg: `${BASE}images/dignity_kits/dignity_idp_women_carrying.jpg`,
      heroBadge: 'Emergency Kit Handover',
      featuresImg: `${BASE}images/dignity_kits/dignity_idp_women_queue.jpg`,
      featuresBadge: 'Community Safe Queuing',
      showcaseImg: `${BASE}images/dignity_kits/dignity_unicef_box_handover.jpg`,
      showcaseBadge: 'UNICEF Official Partnership',
      link: '/contact',
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

      {/* ========== DIMACODE PORTFOLIO-STYLE STACKING CARDS: ACTIVE INITIATIVES ========== */}
      <section className="stacking-cards-section" id="initiatives">
        <div className="portfolio-section-header" data-reveal="up">
          <span className="portfolio-section-badge">
            ✦ Priority Operations · 2026
          </span>
          <h2 className="portfolio-section-title">
            Support Child Welfare &amp; Protection
          </h2>
          <p className="portfolio-section-desc">
            Explore our flagship field operations across Sokoto State. As you scroll down, each operation card pins, layers, and shuffles smoothly into depth.
          </p>
        </div>

        <StackingCards initiatives={initiatives} />
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
