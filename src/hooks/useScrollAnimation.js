/**
 * Shared Framer Motion animation variants for scroll-triggered reveals.
 * All variants follow: duration 0.5–0.8s, custom cubic-bezier easeOut,
 * viewport once + amount 0.2 (fires when 20% of element is visible).
 */

// Premium custom easing — feels like Apple/Framer quality
export const EASE_OUT = [0.22, 1, 0.36, 1];
export const EASE_IN_OUT = [0.4, 0, 0.2, 1];

export const VIEWPORT = { once: true, amount: 0.2 };

// ── Core variants ─────────────────────────────────────────────
export const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: EASE_OUT },
  },
};

export const fadeIn = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.6, ease: EASE_OUT },
  },
};

export const scaleIn = {
  hidden: { opacity: 0, scale: 0.94 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.65, ease: EASE_OUT },
  },
};

export const slideLeft = {
  hidden: { opacity: 0, x: -40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: EASE_OUT },
  },
};

export const slideRight = {
  hidden: { opacity: 0, x: 40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: EASE_OUT },
  },
};

export const blurUp = {
  hidden: { opacity: 0, y: 30, filter: 'blur(8px)' },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { duration: 0.75, ease: EASE_OUT },
  },
};

// ── Container variant — staggers its children ─────────────────
export const staggerContainer = (stagger = 0.08) => ({
  hidden: {},
  visible: {
    transition: {
      staggerChildren: stagger,
      delayChildren: 0.05,
    },
  },
});

// ── Child chip pop-in ─────────────────────────────────────────
export const chipPopIn = {
  hidden: { opacity: 0, scale: 0.7, y: 8 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.4, ease: EASE_OUT },
  },
};

// ── Bento card reveal ─────────────────────────────────────────
export const bentoCard = {
  hidden: { opacity: 0, y: 44, scale: 0.97 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.65, ease: EASE_OUT },
  },
};

// ── Project card slide-in from right ─────────────────────────
export const projectCard = {
  hidden: { opacity: 0, x: 50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.65, ease: EASE_OUT },
  },
};

// ── Cert card blur-cascade ────────────────────────────────────
export const certCard = {
  hidden: { opacity: 0, y: 32, filter: 'blur(6px)' },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { duration: 0.7, ease: EASE_OUT },
  },
};

// ── Hero social icon ─────────────────────────────────────────
export const socialIcon = {
  hidden: { opacity: 0, scale: 0.6, y: 10 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.45, ease: EASE_OUT },
  },
};
