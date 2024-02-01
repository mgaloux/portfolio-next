export const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      duration: 2,
      staggerChildren: 0.2, // Apply staggered animation to children
    },
  },
}

export const item = {
  hidden: {
    y: '-100%',
    opacity: 1,
    zIndex: -5,
  },
  show: {
    y: '0%',
    opacity: 1,
    zIndex: 1,
    transition: {
      ease: 'easeInOut',
      duration: 0.1,
    },
  },
}
