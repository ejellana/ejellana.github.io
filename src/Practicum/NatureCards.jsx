import { motion } from 'framer-motion';
import { FiLayout, FiGitMerge, FiMessageSquare, FiFileText } from 'react-icons/fi';

const cardsData = [
  {
    icon: FiLayout,
    title: 'React Analytics Dashboard',
    description: 'Designed and developed a React.js analytics dashboard to visualize B2B lead generation data with interactive charts, lead tables, company profiles, and responsive user interfaces connected to the n8n backend.',
  },
  {
    icon: FiGitMerge,
    title: 'B2B Lead Generation & n8n',
    description: 'Developed and completed an AI-powered B2B Lead Generation workflow using n8n by integrating APIs, databases, HTTP requests, variables, and automation pipelines for lead discovery and enrichment.',
  },
  {
    icon: FiMessageSquare,
    title: 'Smicos AI Chatbot',
    description: 'Created and documented AI chatbot workflows using the Smicos platform, including chatbot flow design, API integration, workflow testing, and technical documentation for client chatbot solutions.',
  },
  {
    icon: FiFileText,
    title: 'Technical Documentation',
    description: 'Prepared Customer Solution Documents (CSD), User Training guides, content inventories, web scraping outputs, and website migration documentation to support software development and client projects.',
  },
];

// Staggered fade-up animation for cards
const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export default function NatureCards() {
  return (
    <>
      <style>{`
        /* Nature Cards Grid */
        .nature-cards-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 1.75rem;
          margin: 0 auto;
          max-width: 1200px;
        }

        /* Individual Card - Premium Left-Aligned Layout */
        .nature-card {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          text-align: left;
          padding: 2.5rem 2rem;
          background: var(--bg-card);
          border: 1px solid var(--border);
          border-radius: 20px;
          height: 100%;
          box-shadow: 
            0 2px 4px rgba(0, 0, 0, 0.01),
            0 10px 30px -10px rgba(0, 0, 0, 0.04);
          will-change: transform, border-color, box-shadow;
          transition:
            background-color var(--transition-theme),
            border-color 0.3s cubic-bezier(0.25, 1, 0.5, 1),
            box-shadow 0.3s cubic-bezier(0.25, 1, 0.5, 1),
            transform 0.3s cubic-bezier(0.25, 1, 0.5, 1);
        }

        .nature-card:hover {
          border-color: var(--border-hover);
          box-shadow: 
            0 0 0 1px var(--border-hover),
            0 12px 38px var(--shadow-hover);
          transform: translateY(-4px);
        }

        /* Icon Badge with Subtle Surface and Gradient */
        .nature-card__icon-badge {
          width: 50px;
          height: 50px;
          border-radius: 50%;
          background: linear-gradient(135deg, rgba(10, 10, 10, 0.03) 0%, rgba(10, 10, 10, 0.06) 100%);
          border: 1px solid rgba(10, 10, 10, 0.04);
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 24px;
          flex-shrink: 0;
          transition: 
            background-color var(--transition-theme),
            border-color var(--transition-theme);
        }

        .dark .nature-card__icon-badge {
          background: linear-gradient(135deg, rgba(255, 255, 255, 0.04) 0%, rgba(255, 255, 255, 0.08) 100%);
          border-color: rgba(255, 255, 255, 0.06);
        }

        .nature-card__icon-badge svg {
          width: 22px;
          height: 22px;
          color: var(--accent);
          transition: color var(--transition-theme);
        }

        .nature-card:hover .nature-card__icon-badge {
          background: rgba(10, 10, 10, 0.08);
        }

        .dark .nature-card:hover .nature-card__icon-badge {
          background: rgba(255, 255, 255, 0.12);
        }

        /* Card Title - SaaS Hierarchy */
        .nature-card__title {
          font-family: "Poppins", sans-serif;
          font-size: 1.15rem;
          font-weight: 600;
          color: var(--text-primary);
          line-height: 1.4;
          letter-spacing: -0.01em;
          margin-bottom: 12px;
          transition: color var(--transition-theme);
        }

        /* Card Description */
        .nature-card__description {
          font-size: 0.875rem;
          font-weight: 400;
          color: var(--text-secondary);
          line-height: 1.65;
          transition: color var(--transition-theme);
        }

        /* Tablet: 2 columns */
        @media (max-width: 1024px) {
          .nature-cards-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 1.5rem;
          }
        }

        /* Mobile: 1 column */
        @media (max-width: 640px) {
          .nature-cards-grid {
            grid-template-columns: 1fr;
            gap: 1.25rem;
          }

          .nature-card {
            padding: 2.25rem 1.75rem;
          }
        }
      `}</style>

      <motion.div
        className="nature-cards-grid"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        {cardsData.map((card, index) => {
          const Icon = card.icon;
          return (
            <motion.div
              key={index}
              className="nature-card"
              variants={cardVariants}
            >
              <div className="nature-card__icon-badge">
                <Icon />
              </div>
              <h3 className="nature-card__title">{card.title}</h3>
              <p className="nature-card__description">{card.description}</p>
            </motion.div>
          );
        })}
      </motion.div>
    </>
  );
}
