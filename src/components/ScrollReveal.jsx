import { motion } from 'framer-motion';

/**
 * ScrollReveal — wraps children in a viewport-triggered motion.div.
 *
 * @param {object} variant   — Framer Motion variant object { hidden, visible }
 * @param {number} delay     — Extra delay before animation starts (seconds)
 * @param {string} className — Extra CSS classes to pass through
 * @param {string} as        — The rendered element tag (default: 'div')
 * @param {object} style     — Inline styles to pass through
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

  // Merge delay into the visible transition without mutating the shared variant.
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
      // will-change hints the browser to promote this element to its own
      // compositor layer before animation begins — eliminates the jank
      // caused by layer promotion happening mid-animation.
      style={{ willChange: 'transform, opacity', ...style }}
      initial="hidden"
      whileInView="visible"
      viewport={{
        once: false,  // ← Animates repeatedly every time it enters the viewport
        amount: 0.15, // ← fire when 15% of element is visible
        margin: '-40px', // ← small negative margin so it fires slightly before element reaches center
      }}
      variants={variantWithDelay}
    >
      {children}
    </Tag>
  );
}