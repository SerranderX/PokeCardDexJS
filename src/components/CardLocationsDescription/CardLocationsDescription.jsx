import React from 'react'
import { motion } from 'framer-motion'
import { toUpperCaseIndex } from '@shared/Utils'
import CardDataNotFound from '@components/CardDataNotFound/CardDataNotFound'

import './CardLocationsDescription.css'

const CardLocationsDescription = ({
  tabTitle,
  tabDescriptionData,
  pokemonBackground,
  selectedTab,
}) => {
  return (
    <React.Fragment>
      <section
        className="CharacterCard-Description-Title"
        style={{
          backgroundColor: pokemonBackground.primary('0.1'),
          borderBottom: `1px ${pokemonBackground.primary()} solid`,
        }}
      >
        <motion.h1>{toUpperCaseIndex(tabTitle)}</motion.h1>
        <p>{selectedTab.description}</p>
      </section>
      <div className="CharacterCard-Description-Body">
        {/* {tabDescriptionData.location.length > 0 && (

        )}
        {tabDescriptionData.location.length === 0 && <CardDataNotFound />} */}
        <CardDataNotFound />
      </div>
    </React.Fragment>
  )
}

export default CardLocationsDescription
