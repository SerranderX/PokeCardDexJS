export const variants = {
    open: {
      y: 0,
      opacity: 1,
      transition: {
        y: { stiffness: 1000, velocity: -100 },
      },
    },
    collapsed: {
      y: -20,
      opacity: 0,
      transition: {
        y: { stiffness: 1000 },
        duration: 0.2,
      },
    },
  }