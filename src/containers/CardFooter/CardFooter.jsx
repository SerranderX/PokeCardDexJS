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


  return (
    <motion.div className="CharacterCard-Footer">
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
