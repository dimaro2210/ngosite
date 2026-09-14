import { useState } from 'react'
import { NavLink, Link } from 'react-router-dom'
import { openDonateModal } from './DonateModal'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const close = () => setOpen(false)

  return (
    <>
      <nav className="navbar">
        <div className="container nav-container">
          <Link to="/" className="logo" onClick={close} style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', textDecoration: 'none' }}>
            <img
              src={`${import.meta.env.BASE_URL}images/logo.jpg`}
              alt="Saferplace Initiative Logo"
              style={{ width: '44px', height: '44px', borderRadius: '10px', objectFit: 'contain', background: '#fff', padding: '2px' }}
            />
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <span style={{ fontWeight: 800, fontSize: '1.2rem', letterSpacing: '-0.02em', color: '#1E293B', lineHeight: 1.1 }}>
                Saferplace <span style={{ color: '#6C2BD9' }}>Initiative</span>
              </span>
              <span style={{ fontSize: '0.65rem', color: '#64748B', fontWeight: 500, letterSpacing: '0.01em' }}>
                ...for Women &amp; Child Health &amp; Good Governance
              </span>
            </div>
          </Link>

          {/* Desktop links */}
          <ul className="nav-links">
            <li><NavLink to="/" end>Home</NavLink></li>
            <li><NavLink to="/about">About</NavLink></li>
            <li><NavLink to="/programs">Programs</NavLink></li>
            <li><NavLink to="/child-protection">Child Protection</NavLink></li>
            <li><NavLink to="/gallery">Gallery</NavLink></li>
            <li><NavLink to="/contact">Contact</NavLink></li>
          </ul>

          <div className="nav-actions">
            <button 
              type="button" 
              className="btn-donate-nav" 
              onClick={() => { close(); openDonateModal('Saferplace General Support'); }} 
              style={{ background: '#6C2BD9', borderColor: '#6C2BD9', cursor: 'pointer', border: 'none', display: 'inline-flex', alignItems: 'center', gap: '0.45rem' }}
            >
              <i className="fas fa-heart"></i> Donate
            </button>
            <button
              className="mobile-toggle"
              onClick={() => setOpen(o => !o)}
              aria-label="Toggle menu"
              aria-expanded={open}
            >
              <i className={`fas ${open ? 'fa-times' : 'fa-bars'}`}></i>
            </button>
          </div>
        </div>
      </nav>

      {/* Dark backdrop overlay */}
      <div
        className={`mobile-drawer-overlay${open ? ' active' : ''}`}
        onClick={close}
        aria-hidden="true"
      ></div>

      {/* Slide-from-right drawer */}
      <aside className={`mobile-drawer${open ? ' open' : ''}`} aria-label="Mobile navigation">
        <div className="mobile-drawer-header">
          <Link to="/" className="logo" onClick={close} style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', textDecoration: 'none' }}>
            <img
              src={`${import.meta.env.BASE_URL}images/logo.jpg`}
              alt="Saferplace Initiative Logo"
              style={{ width: '36px', height: '36px', borderRadius: '8px', objectFit: 'contain', background: '#fff', padding: '2px' }}
            />
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <span style={{ fontWeight: 800, fontSize: '1rem', color: '#fff', lineHeight: 1.1 }}>
                Saferplace <span style={{ color: '#A78BFA' }}>Initiative</span>
              </span>
              <span style={{ fontSize: '0.62rem', color: 'rgba(255,255,255,0.7)', letterSpacing: '0.02em' }}>
                6 States · 33 LGAs
              </span>
            </div>
          </Link>
          <button className="drawer-close-btn" onClick={close} aria-label="Close menu">
            <i className="fas fa-times"></i>
          </button>
        </div>

        <ul className="mobile-drawer-links">
          <li>
            <NavLink to="/" end onClick={close}>
              <div className="drawer-link-left">
                <span className="drawer-icon-box"><i className="fas fa-home"></i></span>
                <span>Home</span>
              </div>
              <i className="fas fa-chevron-right drawer-arrow"></i>
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" onClick={close}>
              <div className="drawer-link-left">
                <span className="drawer-icon-box"><i className="fas fa-info-circle"></i></span>
                <span>About Us</span>
              </div>
              <i className="fas fa-chevron-right drawer-arrow"></i>
            </NavLink>
          </li>
          <li>
            <NavLink to="/programs" onClick={close}>
              <div className="drawer-link-left">
                <span className="drawer-icon-box"><i className="fas fa-project-diagram"></i></span>
                <span>Programs</span>
              </div>
              <i className="fas fa-chevron-right drawer-arrow"></i>
            </NavLink>
          </li>
          <li>
            <NavLink to="/child-protection" onClick={close}>
              <div className="drawer-link-left">
                <span className="drawer-icon-box"><i className="fas fa-shield-alt"></i></span>
                <span>Child Protection</span>
              </div>
              <span style={{ display: 'flex', alignItems: 'center', gap: '.4rem' }}>
                <span style={{ fontSize: '.62rem', background: '#6C2BD9', color: '#fff', padding: '2px 7px', borderRadius: '10px', fontWeight: 700, letterSpacing: '.04em' }}>ADVOCATES</span>
                <i className="fas fa-chevron-right drawer-arrow"></i>
              </span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/gallery" onClick={close}>
              <div className="drawer-link-left">
                <span className="drawer-icon-box"><i className="fas fa-images"></i></span>
                <span>Gallery</span>
              </div>
              <i className="fas fa-chevron-right drawer-arrow"></i>
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" onClick={close}>
              <div className="drawer-link-left">
                <span className="drawer-icon-box"><i className="fas fa-envelope"></i></span>
                <span>Contact</span>
              </div>
              <i className="fas fa-chevron-right drawer-arrow"></i>
            </NavLink>
          </li>
        </ul>

        <div className="mobile-drawer-footer">
          <div className="drawer-footer-badge">
            <i className="fas fa-map-marker-alt"></i>
            <span>Active across 33 LGAs in Nigeria</span>
          </div>
          <button
            type="button"
            className="btn-primary"
            onClick={() => { close(); openDonateModal('Saferplace General Support'); }}
            style={{
              width: '100%',
              textAlign: 'center',
              justifyContent: 'center',
              background: 'linear-gradient(135deg, #6C2BD9 0%, #4C1D95 100%)',
              border: 'none',
              cursor: 'pointer',
              boxShadow: '0 4px 16px rgba(108, 43, 217, 0.35)',
              padding: '0.85rem 1.2rem',
              borderRadius: '12px',
              fontWeight: 700,
              marginBottom: '0.6rem',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem'
            }}
          >
            <i className="fas fa-heart"></i> Donate Now
          </button>
          <Link
            to="/contact?subject=Government%20%26%20Institutional%20Partnership"
            onClick={close}
            style={{
              width: '100%',
              textAlign: 'center',
              justifyContent: 'center',
              padding: '0.75rem 1.2rem',
              borderRadius: '12px',
              fontWeight: 600,
              fontSize: '0.88rem',
              color: '#fff',
              background: 'rgba(255, 255, 255, 0.1)',
              border: '1px solid rgba(255, 255, 255, 0.15)',
              display: 'flex',
              alignItems: 'center',
              textDecoration: 'none',
              gap: '0.5rem'
            }}
          >
            Partner with us <i className="fas fa-handshake"></i>
          </Link>
        </div>
      </aside>
    </>
  )
}

