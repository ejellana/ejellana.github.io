/**
 * useScrollAnimation.js
 * ─────────────────────────────────────────────────────────────────────────────
 * Shared Framer Motion animation variants — premium SaaS motion system.
 *
 * Design principles:
 *  • Only GPU-accelerated properties: opacity, transform (translate, scale)
 *  • No filter/blur in staggered lists (repaints every frame on mid-tier GPUs)
 *  • Small reveal distances (20–28px) — effortless, never dramatic
 *  • Slightly longer durations so nothing feels rushed
 */

// ── Easing curves ──────────────────────────────────────────────────────────
// Silky Apple/Framer-style deceleration — feels confident, not bouncy
export const EASE_OUT   = [0.25, 1, 0.5, 1];
// Extra-smooth expo for large section entrances
export const EASE_EXPO  = [0.16, 1, 0.3, 1];
// Classic Material-style for UI controls (theme toggle, drawer)
export const EASE_IN_OUT = [0.4, 0, 0.2, 1];

// ── Viewport config ────────────────────────────────────────────────────────
// VIEWPORT defaults to once: false for repeated reveal triggers on scrolling
export const VIEWPORT      = { once: false, amount: 0.15 };
// Lazy — fires once (once: true) for horizontally scrollable card tracks (projects/certs)
export const VIEWPORT_LAZY = { once: true, amount: 0.05 };

// ── Core reveal variants ───────────────────────────────────────────────────

/** Standard scroll reveal: gentle fade + small upward drift */
export const fadeUp = {
  hidden:  { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.75, ease: EASE_OUT },
  },
};

/** Pure opacity fade — for subtitles/descriptions */
export const fadeIn = {
  hidden:  { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.65, ease: EASE_OUT },
  },
};

/** Scale reveal — for images, profile card */
export const scaleIn = {
  hidden:  { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.7, ease: EASE_OUT },
  },
};

/** Slide in from left — About text column */
export const slideLeft = {
  hidden:  { opacity: 0, x: -28 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: EASE_EXPO },
  },
};

/** Slide in from right — About image column */
export const slideRight = {
  hidden:  { opacity: 0, x: 28 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: EASE_EXPO },
  },
};

/**
 * blurUp — use only for hero/singular focal elements, NOT in staggered lists.
 * Kept intentionally subtle (4px max) so the GPU cost stays minimal.
 */
export const blurUp = {
  hidden:  { opacity: 0, y: 20, filter: 'blur(4px)' },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { duration: 0.8, ease: EASE_EXPO },
  },
};

// ── Container variant — staggers its children ─────────────────
/**
 * Wraps children and staggers their `visible` animation.
 * delayChildren: 0.1 gives the container itself time to enter the viewport
 * before its children start animating.
 */
export const staggerContainer = (stagger = 0.08) => ({
  hidden: {},
  visible: {
    transition: {
      staggerChildren: stagger,
      delayChildren: 0.1,
    },
  },
});

// ── Child variants ─────────────────────────────────────────────────────────

/** Hero entrance — used for greeting, name, tagline, buttons */
export const heroChild = {
  hidden:  { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: EASE_EXPO },
  },
};

/** Skill chip / small badge pop-in */
export const chipPopIn = {
  hidden:  { opacity: 0, scale: 0.82, y: 6 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.45, ease: EASE_OUT },
  },
};

/**
 * Premium card reveal — used for BOTH project cards AND certificate cards.
 * Small vertical rise + very subtle scale — no horizontal slide (which looks
 * heavy in a horizontal-scroll context), no blur (GPU-expensive in lists).
 */
export const cardReveal = {
  hidden:  { opacity: 0, y: 22, scale: 0.97 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.72, ease: EASE_EXPO },
  },
};

/** Bento card reveal — legacy alias kept for compatibility */
export const bentoCard = {
  hidden:  { opacity: 0, y: 32, scale: 0.97 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.7, ease: EASE_OUT },
  },
};

/**
 * projectCard — now an alias for cardReveal.
 * Kept as a named export so no import changes are needed in Home.jsx.
 */
export const projectCard = cardReveal;

/**
 * certCard — now matches projectCard (consistent reveal system).
 * Previously used blur which caused repaints on every stagger frame.
 */
export const certCard = cardReveal;

/** Hero social icon / action button */
export const socialIcon = {
  hidden:  { opacity: 0, scale: 0.75, y: 8 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.5, ease: EASE_OUT },
  },
};
