// While Hover Animations
const whileHoverCard = { 
  scale: 0.9, 
  opacity: 0.7 
};

const whileHoverCardExit = { 
  scale: 1.1, 
  rotate: 360 
};

const variantsCardAnimation = {
  play: { x: [-3, 3, -3, 3, -3, 3, -3, 0] },
  stop: { x: 0 }
};

const whileHoverSpriteImage = {
  scale: [1, 1.2, 1.2, 1.2, 1.2, 1.2, 1],
  x: [3, -3, 3, -3, 3, -3, 3],
  transition: { duration: 0.5, ease: "easeInOut" }
};

// Variants Animations
const variantsSlideSideVar = {
  open: (height = 1000) => ({
      clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
      transition: {
          type: "spring",
          stiffness: 20,
          restDelta: 2
      }
  }),
  closed: {
      clipPath: "circle(30px at 40px 40px)",
      transition: {
          delay: 0.5,
          type: "spring",
          stiffness: 400,
          damping: 40
      }
  }
};

const variantsNavbar = {
  open: {
      height: "100%",
      width: "22em",
  },
  closed: {
      height: "10%",
      width: "4em",
      transition: {
          delay: 1.5,
      }
  }
};

const varaintsThemeAnimation = (opacityVar) => ({
  whileTap: {
      scale: 0.7,
      transition: {
          duration: .3,
          ease: "easeInOut"
      }
  },
  animate: {
      scale: 1,
      opacity: opacityVar,
      transition: {
          duration: .5,
          ease: "easeInOut"
      }
  }
});

export { whileHoverCard, whileHoverCardExit, whileHoverSpriteImage, variantsCardAnimation, variantsSlideSideVar, varaintsThemeAnimation, variantsNavbar};