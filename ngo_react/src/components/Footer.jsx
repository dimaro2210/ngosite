import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-col">
            <span className="footer-logo" style={{ display: 'flex', flexDirection: 'column', gap: '0.2rem' }}>
              <span style={{ color: '#fff', fontSize: '1.4rem', fontWeight: 800 }}>Saferplace <span style={{ color: '#A78BFA' }}>Initiative</span></span>
              <span style={{ color: '#94A3B8', fontSize: '0.75rem', fontWeight: 400 }}>...for Women & Child Health & Good Governance</span>
            </span>
            <p style={{ marginTop: '1rem' }}>Registered non-profit in Sokoto State, Nigeria (CAC/IT/NO 7571193). Dedicated to strengthening community safety, resilience, and social protection for vulnerable populations.</p>
          </div>

          <div className="footer-col">
            <h4>About Us</h4>
            <ul className="footer-links">
              <li><Link to="/about">About Our NGO</Link></li>
              <li><Link to="/programs">9 Core Focus Areas</Link></li>
              <li><Link to="/gallery">Field Gallery</Link></li>
              <li><Link to="/contact">Partner with us</Link></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Operational LGAs (6)</h4>
            <ul className="footer-links">
              <li><Link to="/programs">Dange Shuni LGA</Link></li>
              <li><Link to="/programs">Gada LGA</Link></li>
              <li><Link to="/programs">Sokoto North LGA</Link></li>
              <li><Link to="/programs">Sokoto South LGA</Link></li>
              <li><Link to="/programs">Wamakko LGA</Link></li>
              <li><Link to="/programs">Tangaza LGA</Link></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Contact Info</h4>
            <ul className="footer-contact">
              <li><i className="fas fa-map-marker-alt" style={{ color: '#A78BFA' }}></i> Sokoto Metropolis, Sokoto State, Nigeria</li>
              <li><i className="fas fa-phone-alt" style={{ color: '#A78BFA' }}></i> +234-(0)-9117622762</li>
              <li><i className="far fa-envelope" style={{ color: '#A78BFA' }}></i> saferplaceinitiativeng@gmail.com</li>
              <li><i className="fas fa-globe" style={{ color: '#A78BFA' }}></i> www.saferplaceinitiative.ng</li>
            </ul>
            <div className="footer-social-strip" style={{ display: 'flex', gap: '0.6rem', marginTop: '1.2rem' }}>
              <a href="https://facebook.com/saferplaceinitiative" target="_blank" rel="noreferrer" className="footer-social-btn" aria-label="Facebook" style={{ width: '38px', height: '38px', borderRadius: '50%', background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', textDecoration: 'none', transition: 'all 0.3s' }}><i className="fab fa-facebook-f"></i></a>
              <a href="https://instagram.com/saferplaceinitiative" target="_blank" rel="noreferrer" className="footer-social-btn" aria-label="Instagram" style={{ width: '38px', height: '38px', borderRadius: '50%', background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', textDecoration: 'none', transition: 'all 0.3s' }}><i className="fab fa-instagram"></i></a>
              <a href="https://tiktok.com/@saferplaceinitiative" target="_blank" rel="noreferrer" className="footer-social-btn" aria-label="TikTok" style={{ width: '38px', height: '38px', borderRadius: '50%', background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', textDecoration: 'none', transition: 'all 0.3s' }}><i className="fab fa-tiktok"></i></a>
            </div>
          </div>
        </div>

        <div className="footer-divider"></div>
        <div className="footer-bottom">
          <p>© 2026 Saferplace Initiative (CAC/IT/NO 7571193). All rights reserved.</p>
          <p>6 States · 13 LGAs · Nigeria</p>
        </div>
      </div>
    </footer>
  )
}

