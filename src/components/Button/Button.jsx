import React from 'react'
import { motion } from 'framer-motion'

const Button = ({ name, children, toggle, classType, animation, ariaLabel, buttonHoverState, setButtonHoverState }) => {
  const whileHover = animation?.whileHover || {}
  const whileTap = animation?.whileTap || {}
  const animate = animation?.animate || {}

  return (
    <motion.button
      name={name}
      animate={animate}
      whileHover={whileHover}
      whileTap={whileTap}
      className={classType}
      onClick={toggle}
      aria-label={ariaLabel}
      onMouseEnter={() => setButtonHoverState(!buttonHoverState)}
      onMouseLeave={() => setButtonHoverState(!buttonHoverState)}
    >
      {children}
    </motion.button>
  )
}

export default Button
