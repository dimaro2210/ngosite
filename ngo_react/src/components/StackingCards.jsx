import React, { createContext, useContext, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';

const StackingCardsContext = createContext(null);

export function StackingCards({
  children,
  className = '',
  scaleMultiplier = 0.035,
  totalCards = 4,
  ...props
}) {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  return (
    <StackingCardsContext.Provider
      value={{ progress: scrollYProgress, scaleMultiplier, totalCards }}
    >
      <div
        className={`stacking-cards-container ${className}`}
        ref={containerRef}
        style={{ '--total-cards': totalCards }}
        {...props}
      >
        {children}
      </div>
    </StackingCardsContext.Provider>
  );
}

export function StackingCardItem({
  index,
  topOffset = 90,
  stepOffset = 20,
  className = '',
  children,
  ...props
}) {
  const context = useContext(StackingCardsContext);
  const progress = context?.progress;
  const totalCards = context?.totalCards || 4;
  const scaleMultiplier = context?.scaleMultiplier ?? 0.035;

  // Earlier cards gently scale down as newer cards scroll up and overlay them
  const targetScale = 1 - (totalCards - 1 - index) * scaleMultiplier;
  const rangeScale = [index / totalCards, 1];

  const scale = progress ? useTransform(progress, rangeScale, [1, targetScale]) : 1;
  const top = `calc(${topOffset}px + ${index * stepOffset}px)`;

  return (
    <div
      className={`stacking-card-item-wrapper ${className}`}
      style={{
        position: 'sticky',
        top,
        zIndex: index + 10,
      }}
      {...props}
    >
      <motion.div
        className="stacking-card-motion"
        style={{
          scale,
          transformOrigin: 'top center',
          width: '100%',
        }}
      >
        {children}
      </motion.div>
    </div>
  );
}

export function InitiativeCard({
  index,
  total = 4,
  category,
  title,
  description,
  reach,
  location,
  status,
  statusColor = '#10B981',
  image,
  link = '/contact',
  themeGradient = 'linear-gradient(135deg, #181428 0%, #29113B 50%, #3B124D 100%)',
  accentColor = '#A855F7',
}) {
  return (
    <div
      className="initiative-stack-card"
      style={{
        background: themeGradient,
        borderColor: 'rgba(255, 255, 255, 0.14)',
      }}
    >
      {/* Top Meta Bar */}
      <div className="initiative-card-topbar">
        <div
          className="initiative-category-badge"
          style={{ borderColor: `${accentColor}40`, color: '#E9D5FF' }}
        >
          <span
            className="initiative-category-dot"
            style={{ background: accentColor }}
          ></span>
          {category}
        </div>
        <div className="initiative-index-pill">
          0{index + 1} <span style={{ opacity: 0.4 }}>/ 0{total}</span>
        </div>
      </div>

      {/* Main Grid Content */}
      <div className="initiative-card-content-grid">
        {/* Left text column */}
        <div className="initiative-card-info">
          <h3 className="initiative-card-title">{title}</h3>
          <p className="initiative-card-desc">{description}</p>

          {/* Key metadata pills */}
          <div className="initiative-metrics-row">
            <div className="initiative-metric-pill">
              <i className="fas fa-users" style={{ color: accentColor }}></i>
              <span>{reach}</span>
            </div>
            <div className="initiative-metric-pill">
              <i className="fas fa-map-marker-alt" style={{ color: '#F59E0B' }}></i>
              <span>{location}</span>
            </div>
            <div
              className="initiative-metric-pill"
              style={{
                background: 'rgba(16, 185, 129, 0.12)',
                borderColor: 'rgba(16, 185, 129, 0.3)',
                color: '#6EE7B7',
              }}
            >
              <span
                style={{
                  width: '6px',
                  height: '6px',
                  borderRadius: '50%',
                  background: '#10B981',
                  boxShadow: '0 0 8px #10B981',
                  display: 'inline-block',
                }}
              ></span>
              <span>{status}</span>
            </div>
          </div>

          {/* Action Row */}
          <div className="initiative-action-row">
            <Link to={link} className="initiative-cta-btn">
              <span>Partner with this Initiative</span>
              <i className="fas fa-arrow-right"></i>
            </Link>
            <span className="initiative-audit-tag">
              <i className="fas fa-shield-alt"></i> Verified Field Outreach
            </span>
          </div>
        </div>

        {/* Right image column */}
        <div className="initiative-card-visual">
          <div className="initiative-img-wrapper">
            <img src={image} alt={title} className="initiative-card-img" />
            <div className="initiative-img-overlay"></div>
            <div className="initiative-badge-overlay">
              <i className="fas fa-check-circle" style={{ color: '#10B981' }}></i>
              <span>100% Direct Impact Delivery</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StackingCards;
