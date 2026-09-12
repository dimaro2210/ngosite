import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';

/**
 * Dimacode Portfolio-style Stacked Shuffling Cards
 * Based directly on https://adminsuiteteam-ux.github.io/Portfolio/ Projects section
 */

function CardItem({ initiative, index, totalCards, progress }) {
  // Target scale when scrolling through the stack: earlier cards scale down smoothly
  const targetScale = 1 - (totalCards - 1 - index) * 0.035;
  const scale = useTransform(progress, [index / totalCards, 1], [1, targetScale]);

  return (
    <div
      className="portfolio-stack-wrapper"
      style={{
        top: `calc(5.2rem + ${index * 24}px)`,
      }}
    >
      <motion.div
        style={{ scale, transformOrigin: 'top center' }}
        className="portfolio-stack-card"
      >
        {/* Top Header Row */}
        <div className="portfolio-card-topbar">
          <div className="portfolio-card-meta-left">
            <span className="portfolio-card-number">{initiative.number}</span>
            <div className="portfolio-card-headings">
              <span className="portfolio-card-category">{initiative.category}</span>
              <h3 className="portfolio-card-title">{initiative.title}</h3>
            </div>
          </div>
          <Link to={initiative.link || '/contact'} className="portfolio-pill-btn">
            <span>Partner with Us</span>
            <i className="fas fa-arrow-up-right-from-square" style={{ fontSize: '0.78rem' }}></i>
          </Link>
        </div>

        {/* 12-Column Multi-Perspective Showcase Grid */}
        <div className="portfolio-card-grid">
          {/* Left 5 Columns: 2 Stacked Preview Cards */}
          <div className="portfolio-grid-left">
            <div className="portfolio-preview-box">
              <img
                src={initiative.heroImg}
                alt={`${initiative.title} - Preview 1`}
                loading="lazy"
                className="portfolio-preview-img"
              />
              <div className="portfolio-glass-badge">
                <span className="badge-dot"></span>
                <span>{initiative.heroBadge || 'Field Operation'}</span>
              </div>
            </div>

            <div className="portfolio-preview-box">
              <img
                src={initiative.featuresImg}
                alt={`${initiative.title} - Preview 2`}
                loading="lazy"
                className="portfolio-preview-img"
              />
              <div className="portfolio-glass-badge">
                <span className="badge-dot" style={{ background: '#38BDF8' }}></span>
                <span>{initiative.featuresBadge || 'Community Outreach'}</span>
              </div>
            </div>
          </div>

          {/* Right 7 Columns: 1 Large Live Showcase with overlay info */}
          <div className="portfolio-grid-right">
            <div className="portfolio-preview-box portfolio-showcase-box">
              <img
                src={initiative.showcaseImg}
                alt={`${initiative.title} - Full Showcase`}
                loading="lazy"
                className="portfolio-showcase-img"
              />
              <div className="portfolio-glass-badge portfolio-glass-badge-lg">
                <i className="fas fa-certificate" style={{ color: '#F59E0B' }}></i>
                <span>{initiative.showcaseBadge || 'Verified Live Initiative'}</span>
              </div>

              {/* Bottom Quick Facts Overlay */}
              <div className="portfolio-card-bottom-overlay">
                <p className="portfolio-overlay-desc">{initiative.description}</p>
                <div className="portfolio-metrics-pills">
                  <span className="portfolio-metric-chip">
                    <i className="fas fa-users" style={{ color: '#A855F7' }}></i>
                    {initiative.reach}
                  </span>
                  <span className="portfolio-metric-chip">
                    <i className="fas fa-map-marker-alt" style={{ color: '#F59E0B' }}></i>
                    {initiative.location}
                  </span>
                  <span className="portfolio-metric-chip portfolio-status-chip">
                    <span className="live-pulse-dot"></span>
                    {initiative.status}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export function StackingCards({ initiatives = [] }) {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  return (
    <div className="portfolio-cards-container" ref={containerRef}>
      {initiatives.map((item, index) => (
        <CardItem
          key={item.id || item.number || index}
          initiative={item}
          index={index}
          totalCards={initiatives.length}
          progress={scrollYProgress}
        />
      ))}
    </div>
  );
}

export default StackingCards;
