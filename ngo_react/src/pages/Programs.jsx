import { Link } from 'react-router-dom'
import { openDonateModal } from '../components/DonateModal'

const BASE = import.meta.env.BASE_URL;

const programs = [
  {
    id: 0,
    icon: 'fas fa-running',
    category: 'Active Campaign',
    title: 'Sokoto 10KM Marathon — Unite to End Open Defecation',
    desc: 'A state-wide 10KM marathon race to raise awareness, mobilize communities, and advocate for clean sanitation across Sokoto. Runners unite to end open defecation and promote WASH hygiene in every LGA.',
    beneficiaries: '50,000+ residents targeted',
    states: 'Sokoto Metropolis (all 6 LGAs)',
    tag: '#sokoto10km',
    image: null,
  },
  {
    id: 1,
    icon: 'fas fa-venus-mars',
    category: 'Gender & Inclusion',
    title: 'Gender Equality & Social Inclusion (GESI)',
    desc: "Advancing equal rights, women's socio-economic empowerment, youth leadership, disability inclusion, and community dialogues to eradicate marginalization across Sokoto State.",
    beneficiaries: '4,500+ women, youth & persons with disabilities',
    states: 'Sokoto Metropolis & Rural LGAs',
    tag: '#gesi',
    image: `${BASE}images/capacity_building/workshop_presentation_female.jpg`,
  },
  {
    id: 2,
    icon: 'fas fa-first-aid',
    category: 'Disaster & Relief',
    title: 'Disaster Management & Emergency Response',
    desc: 'Deploying rapid disaster preparedness, mobile emergency relief kits, flood mitigation support, and safe shelter assistance for vulnerable families across flood-prone LGAs.',
    beneficiaries: '6,000+ flood-affected residents',
    states: 'Dange Shuni, Wamakko, Gada & Tangaza',
    tag: '#disasterresponse',
    image: `${BASE}images/dignity_kits/dignity_unicef_truck_offload.jpg`,
  },
  {
    id: 3,
    icon: 'fas fa-tree',
    category: 'Climate Resilience',
    title: 'Green Sokoto Initiative 2026',
    desc: 'Planting 500 drought-resistant indigenous trees (Neem, Baobab, Moringa, Bagaruwa) across 10 sites in Sokoto Metropolis for World Tree Planting Day (June 6, 2026).',
    beneficiaries: '2,000+ residents daily',
    states: 'Sokoto North, South, Wamakko',
    tag: '#greensokoto',
    image: `${BASE}images/capacity_building/workshop_group_banner.jpg`,
  },
  {
    id: 4,
    icon: 'fas fa-shield-alt',
    category: 'Protection',
    title: 'Protection & Survivor Support',
    desc: 'Providing safe reporting channels, psychosocial support, legal aid referrals, and emergency shelter resources for survivors of abuse and gender-based violence.',
    beneficiaries: '1,200+ survivors & families',
    states: 'Dange Shuni, Gada, Sokoto South',
    tag: '#protection',
    image: `${BASE}images/dignity_kits/dignity_idp_women_carrying.jpg`,
  },
  {
    id: 5,
    icon: 'fas fa-heartbeat',
    category: 'Health',
    title: 'RMNCAH & Community Health',
    desc: 'Delivering Reproductive, Maternal, Newborn, Child, and Adolescent Health clinics, vaccines, antenatal toolkits, and nutritional support across rural Sokoto LGAs.',
    beneficiaries: '8,500+ mothers & children',
    states: 'Sokoto State (6 LGAs)',
    tag: '#rmncah',
    image: `${BASE}images/mnchw_gusau/mnchw_infant_immunization.jpg`,
  },
  {
    id: 6,
    icon: 'fas fa-user-graduate',
    category: 'Education & Prevention',
    title: 'Safe Schools & Social Norm Change',
    desc: 'Conducting interactive workshops on child safety, consent, digital security, and conflict resolution for over 500 adolescents across secondary schools in Sokoto.',
    beneficiaries: '500+ adolescents',
    states: 'Sokoto North & South LGAs',
    tag: '#safeschools',
    image: `${BASE}images/yiaga_africa_training/yiaga_training_banner_hall.jpg`,
  },
  {
    id: 7,
    icon: 'fas fa-tint',
    category: 'WASH & Hygiene',
    title: 'WASH & Community Hygiene Drive',
    desc: 'Installing clean solar boreholes, sanitation blocks, and hygiene toolkits to prevent waterborne diseases in underserved communities across Sokoto.',
    beneficiaries: '10,000+ residents',
    states: 'Gada, Wamakko, Dange Shuni',
    tag: '#wash',
    image: `${BASE}images/wash_commission/wash_students_assembly.jpg`,
  },
  {
    id: 8,
    icon: 'fas fa-balance-scale',
    category: 'Governance & Advocacy',
    title: 'Governance & Policy Advocacy',
    desc: 'Training community safety champions, engaging traditional rulers (Mai Angwan), and advocating for government policies that protect human dignity.',
    beneficiaries: '50+ trained champions',
    states: 'Sokoto Metropolis',
    tag: '#advocacy',
    image: `${BASE}images/yiaga_africa_training/yiaga_keynote_podium_speech.jpg`,
  },
]

const howWeHelp = [
  { icon: 'fas fa-search-location', step: '01', title: 'Community Assessment', desc: 'Our field officers survey LGAs to identify vulnerable groups, protection risks, and health gaps.' },
  { icon: 'fas fa-project-diagram', step: '02', title: 'Evidence-Based Planning', desc: 'Programs are co-designed with community leaders, traditional rulers (Mai Angwan), and local experts.' },
  { icon: 'fas fa-hand-holding-heart', step: '03', title: 'Direct Field Dispatch', desc: 'Resources, medical supplies, survivor support, and tree planting drives are deployed directly on the ground.' },
  { icon: 'fas fa-chart-line', step: '04', title: 'Monitoring & Guardianship', desc: 'We assign local Tree Guardians and field monitors to ensure sustained, 100% transparent outcomes.' },
]

export default function Programs() {
  return (
    <>
      {/* Page Header */}
      <section className="page-header" style={{ background: 'linear-gradient(135deg, #1E1B4B 0%, #4C1D95 100%)' }}>
        <div className="container">
          <h1 style={{ color: '#fff' }}>Our Core Focus Areas &amp; Campaigns</h1>
          <p style={{ color: 'rgba(255,255,255,.85)' }}>Saferplace Initiative operates across 9 key pillars to strengthen protection, health, equality, and resilience in Sokoto State.</p>
        </div>
      </section>

      {/* How We Help */}
      <section style={{ background: '#F8FAFC', padding: '5rem 0' }}>
        <div className="container">
          <div className="section-header" data-reveal="up">
            <span>Our Approach</span>
            <h2>How We Deliver Impact</h2>
            <p>A survivor-centered, community-led, and data-driven process across all 33 operational LGAs in 6 Nigerian states.</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '2rem' }}>
            {howWeHelp.map((step, i) => (
              <div key={i} style={{ background: '#fff', borderRadius: '16px', padding: '2rem', textAlign: 'center', border: '1px solid var(--border-color)', position: 'relative' }} data-reveal="up" data-reveal-delay={String((i + 1) * 100)}>
                <span style={{ position: 'absolute', top: '1rem', right: '1.2rem', fontSize: '2.5rem', fontWeight: 800, color: 'rgba(108, 43, 217, .08)', fontFamily: 'var(--font-display)' }}>{step.step}</span>
                <i className={step.icon} style={{ fontSize: '2rem', color: '#6C2BD9', marginBottom: '1rem', display: 'block' }}></i>
                <h4 style={{ marginBottom: '.5rem' }}>{step.title}</h4>
                <p style={{ color: 'var(--text-muted)', fontSize: '.9rem' }}>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Programs Grid — new tall card UI */}
      <section className="section-padding" style={{ background: 'var(--bg-light)' }}>
        <div className="container">
          <div className="section-header" data-reveal="up">
            <span>Active Initiatives</span>
            <h2>Support Our Ongoing Programs</h2>
            <p>Every partnership directly powers field outreach, survivor protection, disaster relief, child health, and equality across Nigerian communities.</p>
          </div>

          <div className="prog-grid">
            {programs.map((prog, idx) => (
              <div
                key={prog.id}
                className="prog-card"
                data-reveal="up"
                data-reveal-delay={String((idx % 3 + 1) * 120)}
              >
                {/* Full-bleed background image */}
                <div className="prog-card-img">
                  {prog.image ? (
                    <img src={prog.image} alt={prog.title} />
                  ) : (
                    <div className="prog-card-img-blank">
                      <i className={prog.icon}></i>
                    </div>
                  )}
                </div>

                {/* Dark gradient overlay */}
                <div className="prog-card-overlay"></div>

                {/* Floating badges */}
                <span className="prog-cat-badge">
                  <i className={prog.icon}></i>
                  {prog.category}
                </span>
                <span className="prog-tag-badge">{prog.tag}</span>

                {/* All text content — floats over overlay at bottom */}
                <div className="prog-card-body">
                  <h3 className="prog-card-title">
                    {prog.title}
                    <span className="prog-title-badge">
                      <i className="fas fa-check"></i>
                    </span>
                  </h3>
                  <p className="prog-card-desc">{prog.desc}</p>

                  {/* 3-column stats with dividers */}
                  <div className="prog-stats-row">
                    <div className="prog-stat">
                      <div className="prog-stat-value">
                        <i className="fas fa-users"></i>
                        {prog.beneficiaries.split(' ')[0]}
                      </div>
                      <div className="prog-stat-label">Reached</div>
                    </div>
                    <div className="prog-stat">
                      <div className="prog-stat-value">
                        <i className="fas fa-map-marker-alt"></i>
                        {prog.states.split(',')[0]}
                      </div>
                      <div className="prog-stat-label">Location</div>
                    </div>
                    <div className="prog-stat">
                      <div className="prog-stat-value">
                        <i className="fas fa-check-circle"></i>
                        Active
                      </div>
                      <div className="prog-stat-label">Status</div>
                    </div>
                  </div>

                  {/* Buttons: wide white pill + dark round icon */}
                  <div className="prog-btn-row">
                    <button 
                      type="button" 
                      onClick={() => openDonateModal(prog.title)} 
                      className="prog-card-btn"
                    >
                      <i className="fas fa-heart"></i>
                      Support This Initiative
                    </button>
                    <Link 
                      to="/contact?subject=Government%20%26%20Institutional%20Partnership" 
                      className="prog-icon-btn" 
                      title="Partner on this initiative"
                    >
                      <i className="fas fa-handshake"></i>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Redesigned Unified Impact & Action Showcase */}
      <section className="impact-cta-showcase">
        <div className="impact-cta-glow impact-cta-glow-1"></div>
        <div className="impact-cta-glow impact-cta-glow-2"></div>

        <div className="container impact-cta-container">
          
          {/* Top Section Header */}
          <div className="impact-cta-header" data-reveal="up">
            <span className="impact-badge">
              <i className="fas fa-chart-pie"></i> Verified Operational Scale
            </span>
            <h2>Proven Field Impact Across Northern Nigeria</h2>
            <p>
              Measurable grassroots change delivering frontline healthcare, dignified WASH infrastructure, child protection desks, and ecological safeguards.
            </p>
          </div>

          {/* 4 Premium Glass Metric Cards */}
          <div className="impact-stats-grid">
            
            <div className="impact-metric-card" data-reveal="up" data-reveal-delay="50">
              <div className="impact-metric-icon">
                <i className="fas fa-layer-group"></i>
              </div>
              <div className="impact-metric-num">9</div>
              <div className="impact-metric-label">Core Focus Areas</div>
              <div className="impact-metric-desc">Health, WASH, GESI, Climate &amp; Protection</div>
            </div>

            <div className="impact-metric-card" data-reveal="up" data-reveal-delay="100">
              <div className="impact-metric-icon">
                <i className="fas fa-map-location-dot"></i>
              </div>
              <div className="impact-metric-num">6 <span>States</span></div>
              <div className="impact-metric-label">Operational Footprint</div>
              <div className="impact-metric-desc">Across 33 Local Government Areas</div>
            </div>

            <div className="impact-metric-card" data-reveal="up" data-reveal-delay="150">
              <div className="impact-metric-icon">
                <i className="fas fa-hands-holding-child"></i>
              </div>
              <div className="impact-metric-num">1,500<span>+</span></div>
              <div className="impact-metric-label">Direct Beneficiaries</div>
              <div className="impact-metric-desc">Adolescents, vulnerable women &amp; infants</div>
            </div>

            <div className="impact-metric-card" data-reveal="up" data-reveal-delay="200">
              <div className="impact-metric-icon">
                <i className="fas fa-seedling"></i>
              </div>
              <div className="impact-metric-num">500<span>+</span></div>
              <div className="impact-metric-label">Trees In Green Drive</div>
              <div className="impact-metric-desc">Combating desertification in Sokoto</div>
            </div>

          </div>

        </div>
      </section>
    </>
  )
}

