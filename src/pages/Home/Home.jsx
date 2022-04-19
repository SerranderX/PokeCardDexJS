import React, { useState, useContext, useEffect, Fragment } from 'react'
import { Link } from 'react-router-dom'
import { AppContext } from '@context/AppContext'
import { motion, AnimatePresence } from 'framer-motion'
import { wrap } from 'popmotion'
import { ENV } from '@shared/Env'
import { variantsSlide, pokemonCard, swipePower, swipeConfidenceThreshold } from '@pages/Home/SlideUtils.js'
import { Card } from '@containers/Card/Card'
import { HelmetSection } from '@components/HelmetSection/HelmetSection'
import Arrow from '@icons/arrowSlide.jsx'
import ArrowRight from '@icons/arrowRight.jsx'
import './Home.css'

const Home = () => {
  const [[page, direction], setPage] = useState([0, 0])
  const pokemonCardIndex = wrap(0, pokemonCard.length, page)

  const {
    pokedexPage,
    setPokedexPage,
    theme,

    selectedId,
    pokemon,

    onSound,
    logoType,
    pokemonBackground,
    closePokemonCard,
    playPokemonSound,
    shinnyOn,
    setShinnyOn,
    selectedTab,
    changeSelectedTab,
    pokemonData,
    onLoadDescription,
    setFamaleOn,
    famaleOn,
    infoShared,
    tabDescriptionData,
    generacion,
    getPokemonCard,
    enableEffect,
    setEnableEffect,
    legendary
  } = useContext(AppContext)

  const paginate = (newDirection) => {
    setPage([page + newDirection, newDirection])
    getPokemonCard(pokemonCard[pokemonCardIndex])
  }

  useEffect(() => {
    if (pokedexPage) {
      setPokedexPage(false)
    }

    if (!selectedId) {
      paginate(1)
    }
  }, [])

  return (
    <Fragment>
      <HelmetSection sectionName={"Home"} />
      <div className="Home-info_presentation">
        <h2>{ENV.appPresentationTitle}</h2>
        <h3>{ENV.appPresentation}</h3>
        <Link to="/pokedex" name="link-to-pokedex">
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Go to Pokedex
            <ArrowRight theme={theme} />
          </motion.div>
        </Link>
      </div>
      <div className="Home-container">
        <div className="Home-slide Card-container">
          <AnimatePresence initial={false} custom={direction}>
            <motion.div
              key={page}
              custom={direction}
              variants={variantsSlide}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: 'spring', stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 },
              }}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={1}
              onDragEnd={(e, { offset, velocity }) => {
                const swipe = swipePower(offset.x, velocity.x)

                if (swipe < -swipeConfidenceThreshold) {
                  paginate(1)
                } else if (swipe > swipeConfidenceThreshold) {
                  paginate(-1)
                }
              }}
            >
              {selectedId && (
                <Card
                  selectedId={selectedId}
                  pokemon={pokemon}
                  onSound={onSound}
                  logoType={logoType}
                  pokemonBackground={pokemonBackground}
                  closePokemonCard={closePokemonCard}
                  playPokemonSound={playPokemonSound}
                  shinnyOn={shinnyOn}
                  setShinnyOn={setShinnyOn}
                  selectedTab={selectedTab}
                  changeSelectedTab={changeSelectedTab}
                  pokemonData={pokemonData}
                  onLoadDescription={onLoadDescription}
                  setFamaleOn={setFamaleOn}
                  famaleOn={famaleOn}
                  infoShared={infoShared}
                  tabDescriptionData={tabDescriptionData}
                  generacion={generacion}
                  enableEffect={enableEffect}
                  setEnableEffect={setEnableEffect}
                  pokedexPage={false}
                  legendary={legendary}
                />
              )}
            </motion.div>
          </AnimatePresence>

          <motion.div
            className="next"
            onClick={() => paginate(1)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9, opacity: 0.8 }}
          >
            <Arrow theme={theme} />
          </motion.div>
          <motion.div
            className="prev"
            onClick={() => paginate(-1)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9, opacity: 0.8 }}
            animate={{ rotate: 180, transition: { duration: 0 } }}
          >
            <Arrow theme={theme} />
          </motion.div>
        </div>
      </div>
      <div className="Home-info_explain">
        <h3>{ENV.appDescription}</h3>
      </div>
    </Fragment>
  )
}

export { Home }
