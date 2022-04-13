import React from 'react'
import { motion } from 'framer-motion'

function Icon({ theme }) {
  return (
    <motion.svg
      xmlns="http://www.w3.org/2000/svg"
      x="0"
      y="0"
      enableBackground="new 0 0 455 455"
      version="1.1"
      viewBox="0 0 455 455"
      xmlSpace="preserve"
      animate={{ opacity: 0.5 }}
      className={`${theme === 'dark' ? 'Dark-theme' : 'Light-theme'}`}
    >
      <path d="M227.5 0C101.855 0 0 101.855 0 227.5S101.855 455 227.5 455 455 353.145 455 227.5 353.145 0 227.5 0zm-28.024 355.589l-21.248-21.178L284.791 227.5 178.228 120.589l21.248-21.178L327.148 227.5 199.476 355.589z"></path>
    </motion.svg>
  )
}

export default Icon
