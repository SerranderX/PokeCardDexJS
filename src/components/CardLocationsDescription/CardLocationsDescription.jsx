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
          backgroundColor: pokemonBackground.secondary,
          borderBottom: `1px ${pokemonBackground.primary} solid`,
        }}
      >
        <motion.h1>{toUpperCaseIndex(tabTitle)}</motion.h1>
        <p>{selectedTab.description}</p>
      </section>
      <div className="CharacterCard-Description-Body">
        {tabDescriptionData.location.length > 0 && (
          <React.Fragment>
            <p>asasdasd</p>
            <select className="Versions-Select">
              <option value="volvo">Volvo</option>
              <option value="saab">Saab</option>
              <option value="mercedes">Mercedes</option>
              <option value="audi">Audi</option>
            </select>
          </React.Fragment>
        )}
        {tabDescriptionData.location.length === 0 && <CardDataNotFound />}
      </div>
    </React.Fragment>
  )
}

export default CardLocationsDescription
