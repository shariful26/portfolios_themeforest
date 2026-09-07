// Centralized Premium Motion & Animation System for Framer Motion

export const TRANSITION_SMOOTH = {
  duration: 0.6,
  ease: [0.215, 0.61, 0.355, 1], // cubic-bezier smooth ease-out
};

export const TRANSITION_SPRING = {
  type: "spring",
  stiffness: 300,
  damping: 25,
};

export const TRANSITION_SLOW = {
  duration: 0.9,
  ease: [0.16, 1, 0.3, 1],
};

// Global Animation Variants
export const fadeUp = {
  hidden: { opacity: 0, y: 35 },
  visible: (custom = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.215, 0.61, 0.355, 1],
      delay: custom * 0.1,
    },
  }),
};

export const fadeDown = {
  hidden: { opacity: 0, y: -30 },
  visible: (custom = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.215, 0.61, 0.355, 1],
      delay: custom * 0.1,
    },
  }),
};

export const fadeLeft = {
  hidden: { opacity: 0, x: -40 },
  visible: (custom = 0) => ({
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: [0.215, 0.61, 0.355, 1],
      delay: custom * 0.1,
    },
  }),
};

export const fadeRight = {
  hidden: { opacity: 0, x: 40 },
  visible: (custom = 0) => ({
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: [0.215, 0.61, 0.355, 1],
      delay: custom * 0.1,
    },
  }),
};

export const scaleIn = {
  hidden: { opacity: 0, scale: 0.92 },
  visible: (custom = 0) => ({
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: [0.215, 0.61, 0.355, 1],
      delay: custom * 0.1,
    },
  }),
};

export const blurReveal = {
  hidden: { opacity: 0, filter: "blur(12px)", y: 20 },
  visible: (custom = 0) => ({
    opacity: 1,
    filter: "blur(0px)",
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.16, 1, 0.3, 1],
      delay: custom * 0.1,
    },
  }),
};

// Container Stagger Variant
export const staggerContainer = (staggerChildren = 0.1, delayChildren = 0) => ({
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren,
      delayChildren,
    },
  },
});

export const staggerItem = {
  hidden: { opacity: 0, y: 35 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

export const staggerItemUp = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.75,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

export const staggerItemDown = {
  hidden: { opacity: 0, y: -50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.75,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

// Micro-interaction presets
export const hoverLift = {
  hover: {
    y: -6,
    transition: { duration: 0.25, ease: "easeOut" },
  },
  tap: {
    scale: 0.98,
  },
};

export const hoverScale = {
  hover: {
    scale: 1.03,
    transition: { duration: 0.25, ease: "easeOut" },
  },
  tap: {
    scale: 0.97,
  },
};

export const hoverZoomImage = {
  hover: {
    scale: 1.07,
    transition: { duration: 0.5, ease: [0.215, 0.61, 0.355, 1] },
  },
};

// Page Transition Preset
export const pageTransitionVariants = {
  initial: {
    opacity: 0,
    y: 12,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: [0.215, 0.61, 0.355, 1],
    },
  },
  exit: {
    opacity: 0,
    y: -12,
    transition: {
      duration: 0.25,
      ease: "easeIn",
    },
  },
};

// Floating Animation Preset (for badges/decorative elements)
export const floatingAnimation = {
  animate: {
    y: [-4, 5, -4],
    transition: {
      duration: 4,
      repeat: Infinity,
      repeatType: "mirror",
      ease: "easeInOut",
    },
  },
};

export const pulseGlowAnimation = {
  animate: {
    opacity: [0.4, 0.75, 0.4],
    scale: [0.98, 1.03, 0.98],
    transition: {
      duration: 5,
      repeat: Infinity,
      repeatType: "mirror",
      ease: "easeInOut",
    },
  },
};
