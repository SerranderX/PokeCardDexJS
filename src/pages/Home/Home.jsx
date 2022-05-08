import React, { useContext, useEffect, Fragment } from 'react'
import { motion} from 'framer-motion'
import { useNavigate } from 'react-router-dom';
import { AppContext } from '@context/AppContext'
import { ENV } from '@shared/Env'
import { Card } from '@containers/Card/Card'
import { HelmetSection } from '@components/HelmetSection/HelmetSection'
import ArrowRight from '@icons/arrowRight.jsx'
import '@pages/Home/Home.css'
import Slide from '@containers/Slide/Slide'
import { Loading } from '@components/Loading/Loading'

const Home = () => {
  const {
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
    enableEffect,
    setEnableEffect,
    legendary,
    setPokedexPage,
    validateCardToClose
  } = useContext(AppContext)

  const navigate = useNavigate();

  useEffect(() => {
    setPokedexPage(false)
  }, [])

  const handleToPokedexButton = () => {
    validateCardToClose()
    navigate('/pokedex')
  }

  return (
    <Fragment>
      <HelmetSection sectionName={"Home"} />
      <div className="Home-info_presentation">
        <h2>{ENV.appPresentationTitle}</h2>
        <h3>{ENV.appPresentation}</h3>
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={handleToPokedexButton}
        >
          Go to Pokedex
          <ArrowRight theme={theme} />
        </motion.div>
      </div>
      <div className="Home-container">
        <Slide>
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
              enableEffect={enableEffect}
              setEnableEffect={setEnableEffect}
              pokedexPage={false}
              legendary={legendary}
            />
          )}
          {!selectedId && ( <Loading /> )}
        </Slide>
      </div>
      <div className="Home-info_explain">
        <h3>{ENV.appDescription}</h3>
      </div>
    </Fragment>
  )
}

export { Home }
