const swipeConfidenceThreshold = 10000
const swipePower = (offset, velocity) => {
  return Math.abs(offset) * velocity
}

const variantsSlide = {
  enter: (direction) => {
    return {
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
      transition: {
        duration: 0.2,
      },
    }
  },
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
  },
  exit: (direction) => {
    return {
      zIndex: 0,
      width: '0%',
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
      transition: {
        duration: 0.2,
      },
    }
  },
}

const slideButtonTapVariants = { scale: 0.9, opacity: 0.8 }

const transitionSlideVariants = {
  x: { type: 'spring', stiffness: 300, damping: 30 },
  opacity: { duration: 0.2 },
}

export {
  variantsSlide,
  swipePower,
  swipeConfidenceThreshold,
  slideButtonTapVariants,
  transitionSlideVariants,
}
