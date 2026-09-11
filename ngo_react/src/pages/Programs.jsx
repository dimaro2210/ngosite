import { Link } from 'react-router-dom'

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
            <p>A survivor-centered, community-led, and data-driven process across all 13 operational LGAs in 6 Nigerian states.</p>
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

      {/* Programs Grid */}
      <section className="section-padding" style={{ background: 'var(--bg-light)' }}>
        <div className="container">
          <div className="section-header" data-reveal="up">
            <span>Active Initiatives</span>
            <h2>Support Our Ongoing Programs</h2>
            <p>Every partnership directly powers field outreach, survivor protection, disaster relief, child health, and equality across Nigerian communities.</p>
          </div>
          <div className="programs-grid">
            {programs.map((prog, idx) => (
              <div key={prog.id} className="program-card" data-reveal="up" data-reveal-delay={String((idx % 3 + 1) * 120)}>
                {/* Clean Icon & Category Header */}
                <div className="program-card-header">
                  <div className="program-card-icon-wrap">
                    <i className={prog.icon}></i>
                  </div>
                  <span className="program-card-badge">
                    {prog.category}
                  </span>
                </div>

                <div className="program-info" style={{ padding: '0.5rem 0 0 0' }}>
                  <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--text-dark)', marginBottom: '0.75rem', lineHeight: '1.35' }}>{prog.title}</h3>
                  <p style={{ color: 'var(--text-muted)', fontSize: '.92rem', lineHeight: '1.6', marginBottom: '1.25rem' }}>{prog.desc}</p>

                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '.6rem 0', margin: '.6rem 0 1.1rem', borderTop: '1px solid #F1F5F9', borderBottom: '1px solid #F1F5F9', fontSize: '.84rem' }}>
                    <span style={{ color: '#6C2BD9', fontWeight: 600 }}><i className="fas fa-check-circle" style={{ marginRight: '.35rem' }}></i>Active Program</span>
                    <span style={{ color: 'var(--text-muted)' }}><i className="fas fa-tag" style={{ marginRight: '.35rem' }}></i>{prog.tag}</span>
                  </div>

                  {/* Meta Tags */}
                  <div style={{ display: 'flex', gap: '.6rem', flexWrap: 'wrap', marginBottom: '1.4rem', fontSize: '.82rem', color: 'var(--text-muted)' }}>
                    <span><i className="fas fa-users" style={{ color: '#6C2BD9', marginRight: '.3rem' }}></i>{prog.beneficiaries}</span>
                    <span><i className="fas fa-map-marker-alt" style={{ color: 'var(--secondary)', marginRight: '.3rem' }}></i>{prog.states}</span>
                  </div>

                  <Link to="/contact" className="btn-primary" style={{ width: '100%', justifyContent: 'center', background: '#6C2BD9', borderColor: '#6C2BD9', borderRadius: '12px' }}>
                    <i className="fas fa-heart" style={{ marginRight: '0.4rem' }}></i> Support This Initiative
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="stats-section" style={{ background: 'linear-gradient(135deg, #4C1D95 0%, #1E1B4B 100%)' }}>
        <div className="container">
          <div className="stats-grid">
            <div className="stat-card"><h3 style={{ color: '#fff' }}>9</h3><p style={{ color: 'rgba(255,255,255,.8)' }}>Core Focus Areas</p></div>
            <div className="stat-card"><h3 style={{ color: '#fff' }}>6 States</h3><p style={{ color: 'rgba(255,255,255,.8)' }}>Across 13 LGAs</p></div>
            <div className="stat-card"><h3 style={{ color: '#fff' }}>1,500<span>+</span></h3><p style={{ color: 'rgba(255,255,255,.8)' }}>Adolescents, Women &amp; Children</p></div>
            <div className="stat-card"><h3 style={{ color: '#fff' }}>500<span>+</span></h3><p style={{ color: 'rgba(255,255,255,.8)' }}>Trees in Green Drive</p></div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-strip">
        <div className="container cta-strip-container">
          <h2>Creating safe spaces for every life, everywhere. <br />Partner with Saferplace Initiative today.</h2>
          <Link to="/contact" className="btn-primary" style={{ background: '#6C2BD9', borderColor: '#6C2BD9' }}>Donate Now <i className="fas fa-heart"></i></Link>
        </div>
      </section>
    </>
  )
}

