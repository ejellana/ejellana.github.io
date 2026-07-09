import { useScroll, useSpring, motion } from 'framer-motion';

/**
 * ScrollProgress — renders a thin progress bar fixed at the very top of the
 * viewport, tracking how far the user has scrolled down the page.
 * Styled to match the black/white palette with a subtle shimmer.
 */
export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();

  // Smooth spring so the bar doesn't jump
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 200,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <motion.div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        height: '2px',
        background: 'linear-gradient(90deg, #000 0%, #555 50%, #000 100%)',
        transformOrigin: '0%',
        scaleX,
        zIndex: 9999,
        pointerEvents: 'none',
      }}
      aria-hidden="true"
    />
  );
}
