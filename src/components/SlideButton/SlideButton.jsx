import React from 'react'
import { motion } from 'framer-motion'
import './SlideButton.css'

const spring = {
  type: 'spring',
  stiffness: 700,
  damping: 30,
}

const SlideButton = ({
  state,
  handler,
  label,
  style,
  show,
  variants = null,
}) => {
  const toggleSwitch = () => handler(!state)

  if (show === undefined || (show !== undefined && show)) {
    return (
      <motion.div className="Slide-container" style={style} variants={variants}>
        <p>{label}</p>
        <div className="switch" data-on={state} onClick={toggleSwitch}>
          <motion.div
            className="handle"
            layout
            transition={spring}
            animate={{ opacity: [0, 0.5, 1], transition: { delay: 0.7 } }}
          />
        </div>
      </motion.div>
    )
  } else {
    return null
  }
}

export { SlideButton }
