import React from 'react'
import { motion } from 'framer-motion'
import { toUpperCaseIndex } from '@shared/Utils'
import { InfoBox } from '@components/InfoBox/InfoBox'
import { InfoBoxItem } from '@components/InfoBoxItem/InfoBoxItem'
import './CardAbilitiesDescription.css'

const CardAbilitiesDescription = ({
  tabTitle,
  tabDescriptionData,
  pokemonBackground,
  selectedTab,
}) => {
  const abilities = tabDescriptionData?.abilities ?? null
  var aux = false

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
        {(abilities != null) && abilities?.map((item) => {
          aux = false
          return (
            <InfoBox
              key={item.name}
              title={item.name}
              pokemonBackground={pokemonBackground}
            >
              {item?.data?.flavor_text_entries.map((flavorText) => {
                if (flavorText.language.name === 'en' && !aux) {
                  aux = true
                  return (
                    <InfoBoxItem
                      pokemonBackground={pokemonBackground}
                      key={flavorText.flavor_text}
                      content={flavorText.flavor_text}
                    >
                      <h3>{'Description'}</h3>
                    </InfoBoxItem>
                  )
                }
              })}
              {item?.data?.effect_entries.map((effect) => {
                if (effect.language.name === 'en') {
                  return (
                    <React.Fragment key={effect.effect}>
                      <InfoBoxItem
                        pokemonBackground={pokemonBackground}
                        content={effect.short_effect}
                      >
                        <h3>{'Effect short description'}</h3>
                      </InfoBoxItem>
                      <InfoBoxItem
                        pokemonBackground={pokemonBackground}
                        content={effect.effect}
                      >
                        <h3>{'Effect full description'}</h3>
                      </InfoBoxItem>
                    </React.Fragment>
                  )
                }
              })}
            </InfoBox>
          )
        })}
      </div>
    </React.Fragment>
  )
}

export default CardAbilitiesDescription
