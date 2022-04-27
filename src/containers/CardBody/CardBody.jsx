import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import CardGeneralDescription from '@components/CardGeneralDescription/CardGeneralDescription'
import CardLoadDescription from '@components/CardLoadDescription/CardLoadDescription'
import CardStatsDescription from '@components/CardStatsDescription/CardStatsDescription'
import CardAbilitiesDescription from '@components/CardAbilitiesDescription/CardAbilitiesDescription'
import CardLocationsDescription from '@components/CardLocationsDescription/CardLocationsDescription'
import CardMovesDescription from '@components/CardMovesDescription/CardMovesDescription'
import { toUpperCaseIndex, backgroundCardImages } from '@shared/Utils'
import './CardBody.css'

const CardBody = ({
  pokemon,
  selectedTab,
  changeSelectedTab,
  selectedId,
  pokemonData,
  onLoadDescription,
  logoType,
  shinny,
  famale,
  tabDescriptionData,
  pokemonBackground,
  generacion,
  cardDimensions
}) => {
  const [indexBkg, setIndexBkg] = useState(0)
  const [indexBkgColor, setIndexBkgColor] = useState(1)
  const mainWidth = (cardDimensions.cardHeight < 700) ? cardDimensions.cardHeight * 0.395 : '83%';

  const handleBackground = () => {
    setIndexBkg(indexBkg === backgroundCardImages.length - 1 ? 0 : indexBkg + 1)
    setIndexBkgColor(
      indexBkgColor === backgroundCardImages.length - 1 ? 1 : indexBkgColor + 1
    )
  }

  const imagen = () => {
    if (shinny && famale) {
      return pokemon.sprites.other.home.front_shiny_female
    } else if (shinny) {
      return pokemon.sprites.other.home.front_shiny
    } else if (famale) {
      return pokemon.sprites.other.home.front_female
    } else {
      return pokemon.sprites.other['official-artwork'].front_default
    }
  }

  const tabKey = selectedTab != null ? selectedTab.key : ''

  return (
    <div className="CharacterCard-Body">
      <div
        className="CharacterCard-Image"
        style={{
          backgroundImage: `url('${backgroundCardImages[indexBkg].img}')`,
        }}
      >
        <img src={imagen()} alt={selectedId.name} />
        <button
          className="CharacterCard-Background_Button"
          name="background-change-button"
          style={{ backgroundColor: backgroundCardImages[indexBkgColor].color }}
          type="button"
          onClick={handleBackground}
        />
      </div>
      <div className="CharacterCard-Description">
        <nav className="CharacterCard-Description-nav">
          <ul className="CharacterCard-Description-ul">
            {pokemonData.map((item) => (
              <li
                key={item.key}
                className={item === selectedTab ? 'selected' : ''}
                style={{
                  backgroundColor:
                    item === selectedTab
                      ? pokemonData[0].general.types[0].color.primary
                      : 'transparent',
                }}
                onClick={() => changeSelectedTab(item)}
              >
                {toUpperCaseIndex(item.key)}
                {item === selectedTab ? (
                  <motion.div
                    className="underline"
                    layoutId="underline"
                    animate={{ opacity: [0, 1], transition: { delay: 0.2 } }}
                  />
                ) : null}
              </li>
            ))}
          </ul>
        </nav>
        <main className="CharacterCard-Description-Content" style={{height:mainWidth}}>
          <AnimatePresence exitBeforeEnter>
            <motion.div
              key={selectedTab ? selectedTab.key : 'empty'}
              animate={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 20 }}
              exit={{ opacity: 0, y: 2 }}
              transition={{ duration: 0.15 }}
              className="CharacterCard-Description-Content-Display"
            >
              {onLoadDescription && <CardLoadDescription logoType={logoType} />}
              {!onLoadDescription &&
                tabDescriptionData &&
                tabKey === 'general' && (
                  <CardGeneralDescription
                    tabTitle={tabKey}
                    tabDescriptionData={tabDescriptionData}
                    pokemonData={pokemonData}
                    selectedTab={selectedTab}
                    pokemon={pokemon}
                    pokemonBackground={pokemonBackground}
                  />
                )}
              {!onLoadDescription &&
                tabDescriptionData &&
                tabKey === 'stats' && (
                  <CardStatsDescription
                    pokemonBackground={pokemonBackground}
                    tabTitle={tabKey}
                    tabDescriptionData={tabDescriptionData}
                    pokemon={pokemon}
                    pokemonData={pokemonData}
                    selectedTab={selectedTab}
                  />
                )}
              {!onLoadDescription &&
                tabDescriptionData &&
                tabKey === 'abilities' && (
                  <CardAbilitiesDescription
                    tabTitle={tabKey}
                    tabDescriptionData={tabDescriptionData}
                    pokemonData={pokemonData}
                    selectedTab={selectedTab}
                    pokemonBackground={pokemonBackground}
                  />
                )}
              {!onLoadDescription &&
                tabDescriptionData &&
                tabKey === 'moves' && (
                  <CardMovesDescription
                    tabTitle={tabKey}
                    tabDescriptionData={tabDescriptionData}
                    pokemonData={pokemonData}
                    selectedTab={selectedTab}
                    pokemonBackground={pokemonBackground}
                    pokemon={pokemon}
                    generacion={generacion}
                    cardDimensions={cardDimensions}
                  />
                )}
              {!onLoadDescription &&
                tabDescriptionData &&
                tabKey === 'locations' && (
                  <CardLocationsDescription
                    tabTitle={tabKey}
                    tabDescriptionData={tabDescriptionData}
                    pokemonData={pokemonData}
                    selectedTab={selectedTab}
                    pokemonBackground={pokemonBackground}
                  />
                )}
            </motion.div>
          </AnimatePresence>
        </main>
      </div>
    </div>
  )
}

export { CardBody }
