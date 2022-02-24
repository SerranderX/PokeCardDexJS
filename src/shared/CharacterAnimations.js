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

export { whileHoverCard, whileHoverCardExit, variantsCardAnimation, whileHoverSpriteImage };