import { motion } from 'framer-motion';
import { VIEWPORT } from '../hooks/useScrollAnimation';

/**
 * ScrollReveal — wraps children in a viewport-triggered motion.div.
 *
 * @param {object} variant   — Framer Motion variant object { hidden, visible }
 * @param {number} delay     — Extra delay before animation starts (seconds)
 * @param {string} className — Extra CSS classes to pass through
 * @param {string} as        — The rendered element tag (default: 'div')
 */
export default function ScrollReveal({
  children,
  variant,
  delay = 0,
  className = '',
  as = 'div',
  style = {},
}) {
  const Tag = motion[as] || motion.div;

  const variantWithDelay = delay
    ? {
      hidden: variant.hidden,
      visible: {
        ...variant.visible,
        transition: {
          ...variant.visible.transition,
          delay,
        },
      },
    }
    : variant;

  return (
    <Tag
      className={className}
      style={style}
      initial="hidden"
      whileInView="visible"
      // Spread the existing VIEWPORT config (like 'margin' or 'amount') 
      // but explicitly override 'once' to ensure it triggers every time.
      viewport={{ ...VIEWPORT, once: false }}
      variants={variantWithDelay}
    >
      {children}
    </Tag>
  );
}