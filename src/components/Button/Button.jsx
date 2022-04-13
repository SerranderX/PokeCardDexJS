import React from 'react'
import { motion } from 'framer-motion'

const Button = ({ children, toggle, classType, animation }) => {
  const whileHover = animation?.whileHover || {}
  const whileTap = animation?.whileTap || {}
  const animate = animation?.animate || {}

  return (
    <motion.button
      animate={animate}
      whileHover={whileHover}
      whileTap={whileTap}
      className={classType}
      onClick={toggle}
    >
      {children}
    </motion.button>
  )
}

export default Button
