import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

// ── RESPONSIVE HOOK ───────────────────────────────────────────
function useIsMobile(breakpoint = 768) {
  const [isMobile, setIsMobile] = useState(
    typeof window !== 'undefined' ? window.innerWidth < breakpoint : false
  );

  useEffect(() => {
    const handler = () => setIsMobile(window.innerWidth < breakpoint);
    window.addEventListener('resize', handler);
    return () => window.removeEventListener('resize', handler);
  }, [breakpoint]);

  return isMobile;
}

// ── DATA ──────────────────────────────────────────────────────
const phases = [
  {
    phase: 'Phase 1',
    icon: 'rocket_launch',
    title: 'Company Orientation & Initial Training',
    description:
      'Company orientation, introduction to the organization, onboarding activities, familiarization with company policies, development tools, Smicos platform, GitHub repositories, and project workflows.',
    bullets: null,
    hours: 40,
  },
  {
    phase: 'Phase 2',
    icon: 'settings',
    title: 'OJT Practice, Skill Development & Project Implementation',
    description:
      'Hands-on training through software development, AI workflow automation, and collaboration with supervisors through Daily Stand-Up (DSU) meetings and project reviews.',
    bullets: [
      'AI-Powered B2B Lead Generation System',
      'React.js Analytics Dashboard',
      'n8n Workflow Automation',
      'Smicos AI Chatbot Documentation',
      'Customer Solution Documents (CSD)',
      'User Training Documentation',
      'Website Migration',
      'Web Scraping',
      'Content Inventory',
      'Daily Stand-Ups (DSU)',
    ],
    hours: 320,
  },
  {
    phase: 'Phase 3',
    icon: 'target',
    title: 'Application of Knowledge to Client Projects',
    description:
      'Applied acquired knowledge and technical skills to real client projects, including the AI-Powered B2B Lead Generation System, React Analytics Dashboard, documentation deliverables, website migration tasks, and other software development and business analysis assignments.',
    bullets: null,
    hours: 120,
  },
];

// ── PHASE CARD ────────────────────────────────────────────────
function PhaseCard({ data, index, isMobile }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.15 }}
      transition={{
        duration: 0.55,
        delay: isMobile ? index * 0.1 : index * 0.12,
        ease: [0.22, 1, 0.36, 1],
      }}
      whileHover={{
        y: -5,
        transition: { duration: 0.3, ease: [0.25, 1, 0.5, 1] },
      }}
      style={{
        flex: isMobile ? '1 1 100%' : 1,
        minWidth: 0,
        width: isMobile ? '100%' : undefined,
        background: 'var(--bg-secondary)',
        border: '1px solid var(--border)',
        borderRadius: '1.25rem',
        padding: isMobile ? '1.4rem' : '1.75rem',
        display: 'flex',
        flexDirection: 'column',
        gap: '1rem',
        cursor: 'default',
        position: 'relative',
        overflow: 'hidden',
        boxSizing: 'border-box',
      }}
    >
      {/* Top accent line */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: '1.75rem',
        right: '1.75rem',
        height: '2px',
        background: 'linear-gradient(90deg, var(--accent, #6c63ff) 0%, transparent 100%)',
        opacity: 0.35,
        borderRadius: '0 0 2px 2px',
      }} />

      {/* ── Header: icon + phase label ── */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
        <div style={{
          width: '2rem',
          height: '2rem',
          borderRadius: '0.55rem',
          background: 'var(--bg-tertiary)',
          border: '1px solid var(--border)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexShrink: 0,
        }}>
          <span
            className="material-symbols-outlined"
            style={{ fontSize: '0.95rem', color: 'var(--text-secondary)' }}
          >
            {data.icon}
          </span>
        </div>
        <span style={{
          fontSize: '0.68rem',
          fontWeight: 700,
          letterSpacing: '0.1em',
          textTransform: 'uppercase',
          color: 'var(--text-muted)',
        }}>
          {data.phase}
        </span>
      </div>

      {/* ── Hours badge ── */}
      <div style={{
        display: 'inline-flex',
        alignSelf: 'flex-start',
        alignItems: 'baseline',
        gap: '0.3rem',
        padding: '0.4rem 0.85rem',
        borderRadius: '0.6rem',
        background: 'var(--bg-tertiary)',
        border: '1px solid var(--border)',
      }}>
        <span style={{
          fontSize: '1.4rem',
          fontWeight: 800,
          lineHeight: 1,
          color: 'var(--text-primary)',
          letterSpacing: '-0.02em',
        }}>
          {data.hours}
        </span>
        <span style={{
          fontSize: '0.65rem',
          fontWeight: 600,
          letterSpacing: '0.08em',
          textTransform: 'uppercase',
          color: 'var(--text-muted)',
        }}>
          hrs
        </span>
      </div>

      {/* ── Title ── */}
      <h3 style={{
        margin: 0,
        fontSize: '0.95rem',
        fontWeight: 700,
        color: 'var(--text-primary)',
        lineHeight: 1.4,
      }}>
        {data.title}
      </h3>

      {/* ── Description ── */}
      <p style={{
        margin: 0,
        fontSize: '0.83rem',
        color: 'var(--text-secondary)',
        lineHeight: 1.7,
        flexGrow: 1,
      }}>
        {data.description}
      </p>

      {/* ── Bullet list (Phase 2 only) ── */}
      {data.bullets && (
        <ul style={{
          margin: 0,
          padding: 0,
          listStyle: 'none',
          display: 'flex',
          flexDirection: 'column',
          gap: '0.35rem',
        }}>
          {data.bullets.map((item) => (
            <li
              key={item}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                fontSize: '0.8rem',
                color: 'var(--text-secondary)',
              }}
            >
              <span style={{
                width: '4px',
                height: '4px',
                borderRadius: '50%',
                background: 'var(--text-muted)',
                flexShrink: 0,
                opacity: 0.7,
              }} />
              {item}
            </li>
          ))}
        </ul>
      )}
    </motion.div>
  );
}

// ── TOTAL CARD ────────────────────────────────────────────────
function TotalCard({ isMobile }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.2 }}
      transition={{ duration: 0.6, delay: 0.36, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{
        y: -5,
        transition: { duration: 0.3, ease: [0.25, 1, 0.5, 1] },
      }}
      style={{
        background: 'var(--bg-secondary)',
        border: '1px solid var(--border)',
        borderRadius: '1.25rem',
        padding: isMobile ? '1.4rem' : '1.75rem 2.25rem',
        display: 'flex',
        flexDirection: isMobile ? 'column' : 'row',
        alignItems: isMobile ? 'flex-start' : 'center',
        justifyContent: 'space-between',
        gap: isMobile ? '1.25rem' : '2rem',
        cursor: 'default',
        position: 'relative',
        overflow: 'hidden',
        boxSizing: 'border-box',
      }}
    >
      {/* Full-width top accent */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        height: '2px',
        background: 'linear-gradient(90deg, var(--accent, #6c63ff) 0%, transparent 80%)',
        opacity: 0.5,
      }} />

      {/* Left — icon + text */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: '1rem',
        flex: 1,
        minWidth: 0,
      }}>
        <div style={{
          width: '2.6rem',
          height: '2.6rem',
          borderRadius: '0.75rem',
          background: 'var(--bg-tertiary)',
          border: '1px solid var(--border)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexShrink: 0,
        }}>
          <span
            className="material-symbols-outlined"
            style={{ fontSize: '1.2rem', color: 'var(--text-secondary)' }}
          >
            timer
          </span>
        </div>
        <div>
          <p style={{
            margin: 0,
            fontSize: '0.7rem',
            fontWeight: 700,
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            color: 'var(--text-muted)',
            marginBottom: '0.25rem',
          }}>
            Total Internship Hours
          </p>
          <p style={{
            margin: 0,
            fontSize: '0.88rem',
            color: 'var(--text-secondary)',
            lineHeight: 1.55,
          }}>
            Successfully completed all internship phases involving software development,
            automation, technical documentation, and business analysis.
          </p>
        </div>
      </div>

      {/* Right — big number */}
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '0.75rem 1.75rem',
        borderRadius: '0.75rem',
        background: 'var(--bg-tertiary)',
        border: '1px solid var(--border)',
        flexShrink: 0,
        alignSelf: isMobile ? 'stretch' : 'auto',
      }}>
        <span style={{
          fontSize: '2.4rem',
          fontWeight: 800,
          lineHeight: 1,
          color: 'var(--text-primary)',
          letterSpacing: '-0.03em',
        }}>
          480
        </span>
        <span style={{
          fontSize: '0.65rem',
          fontWeight: 600,
          letterSpacing: '0.1em',
          textTransform: 'uppercase',
          color: 'var(--text-muted)',
          marginTop: '0.3rem',
        }}>
          Hours Completed
        </span>
      </div>
    </motion.div>
  );
}

// ── MAIN EXPORT ───────────────────────────────────────────────
export default function NatureCards() {
  const isMobile = useIsMobile(768);

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '1.25rem',
      width: '100%',
      fontFamily: '"Poppins", sans-serif',
    }}>

      {/* Phase cards — row on desktop, column on mobile */}
      <div style={{
        display: 'flex',
        flexDirection: isMobile ? 'column' : 'row',
        gap: '1.25rem',
        alignItems: 'stretch',
        width: '100%',
      }}>
        {phases.map((phase, i) => (
          <PhaseCard key={phase.phase} data={phase} index={i} isMobile={isMobile} />
        ))}
      </div>

      {/* Divider */}
      <div style={{
        height: '1px',
        background: 'var(--border)',
        margin: '0.25rem 0',
        opacity: 0.5,
      }} />

      {/* Total summary card */}
      <TotalCard isMobile={isMobile} />
    </div>
  );
}