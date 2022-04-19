import React from 'react'
import { motion } from 'framer-motion'
import { SlideButton } from '@components/SlideButton/SlideButton'
import './CardFooter.css'

const CardFooter = ({
  setShinny,
  shinny,
  setFamale,
  famale,
  infoShared,
  enableEffect,
  setEnableEffect,
  legendary,
}) => {
  const { hasFamaleData } = infoShared

  console.log(shinny)

  return (
    <motion.div
      className="CharacterCard-Footer"
      animate={{
        opacity: [0, 1],
        y: [10, 0],
        transition: { duration: 0.8 },
        delay: 0.8,
      }}
    >
      {(shinny != undefined) && (
        <SlideButton state={shinny} handler={setShinny} label={'Shinny'} />
      )}
      {hasFamaleData && (
        <SlideButton state={famale} handler={setFamale} label={'Female'} />
      )}
      {legendary && (
        <SlideButton
          state={enableEffect}
          handler={setEnableEffect}
          label={'C.Effect'}
        />
      )}
    </motion.div>
  )
}

export { CardFooter }
