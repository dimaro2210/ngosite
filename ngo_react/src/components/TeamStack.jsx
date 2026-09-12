import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function TeamStack({ members }) {
  const [hoveredId, setHoveredId] = useState(null);
  const [mouseOffsets, setMouseOffsets] = useState({ x: 0, rotate: 0 });

  const handleMouseMove = (e, index) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const half = rect.width / 2;
    const offset = x - half;
    const percent = offset / half;

    setMouseOffsets({
      x: percent * 30,
      rotate: percent * 25,
    });
  };

  const handleMouseLeave = () => {
    setHoveredId(null);
    setMouseOffsets({ x: 0, rotate: 0 });
  };

  if (!members || members.length === 0) return null;

  return (
    <div className="team-avatar-stack">
      {members.map((member, index) => {
        const isHovered = hoveredId === index;
        const targetLink =
          member.name === 'Arnold Nicholas' || member.role?.includes('Child Protection')
            ? '/child-protection'
            : member.link;

        const content = (
          <div
            className="team-avatar-item"
            onMouseEnter={() => setHoveredId(index)}
            onMouseLeave={handleMouseLeave}
            onMouseMove={(e) => handleMouseMove(e, index)}
            style={{
              zIndex: isHovered ? 50 : 10 + index,
              cursor: targetLink ? 'pointer' : 'default',
            }}
          >
            {/* Tooltip */}
            <div
              className={`team-tooltip ${isHovered ? 'visible' : ''}`}
              style={{
                transform: isHovered
                  ? `translateX(calc(-50% + ${mouseOffsets.x}px)) rotate(${mouseOffsets.rotate}deg) scale(1)`
                  : 'translateX(-50%) rotate(0deg) scale(0.9)',
              }}
            >
              <div className="tooltip-inner">
                <div className="tooltip-line primary"></div>
                <div className="tooltip-line secondary"></div>
                <span className="tooltip-name">{member.name}</span>
                <span className="tooltip-role">{member.role}</span>
                {targetLink && (
                  <span style={{ fontSize: '0.7rem', color: '#A855F7', marginTop: '0.2rem', display: 'block', fontWeight: 700 }}>
                    View Advocate Profile ➔
                  </span>
                )}
              </div>
            </div>

            {/* Avatar Image */}
            <img
              src={member.image}
              alt={member.name}
              className="team-avatar-img"
            />
          </div>
        );

        return targetLink ? (
          <Link key={index} to={targetLink} style={{ textDecoration: 'none' }}>
            {content}
          </Link>
        ) : (
          <React.Fragment key={index}>{content}</React.Fragment>
        );
      })}
    </div>
  );
}
