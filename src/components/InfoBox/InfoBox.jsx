import React from 'react'
import { motion, AnimateSharedLayout } from 'framer-motion'
import { toUpperCaseIndex } from '@shared/Utils'
import './InfoBox.css'

const InfoBox = ({ children, title, pokemonBackground }) => {
  return (
    <AnimateSharedLayout>
      <motion.section
        className="InfoBox"
        style={{
          backgroundColor: pokemonBackground.primary("0.1"),
          border: `1px ${pokemonBackground.primary()} solid`,
        }}
      >
        <h2>{toUpperCaseIndex(title)}</h2>
        <motion.ul layout>{children}</motion.ul>
      </motion.section>
    </AnimateSharedLayout>
  )
}

export { InfoBox }
