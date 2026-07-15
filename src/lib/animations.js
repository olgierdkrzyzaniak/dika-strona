/**
 * Shared framer-motion animation variants.
 * Used by Navbar and Menu for staggered item entrance.
 */

export const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.5,
      staggerChildren: 0.1,
    },
  },
};

export const staggerItem = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};
