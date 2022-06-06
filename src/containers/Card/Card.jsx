import React, { useRef } from 'react'
import { motion } from 'framer-motion'
import {
  variantsCardAnimation,
  whileHoverCardExit,
} from '@shared/Animations'
import { CardBody } from '@containers/CardBody/CardBody'
import { CardHead } from '@containers/CardHead/CardHead'
import { CardFooter } from '@containers/CardFooter/CardFooter'
import { useChangeCardDimensions } from '@hooks/useChangeCardDimensions'
import '@styles/PokemonTypes.css'
import './Card.css'

const Card = ({
  selectedId,
  onSound,
  pokemonBackground,
  closePokemonCard,
  logoType,
  pokemon,
  playPokemonSound,
  shinnyOn,
  famaleOn,
  selectedTab,
  changeSelectedTab,
  pokemonData,
  onLoadDescription,
  tabDescriptionData,
  infoShared,
  setShinnyOn,
  setFamaleOn,
  enableEffect,
  setEnableEffect,
  pokedexPage,
  legendary
}) => {
  
  const cardRef = useRef(null)
  const { cardDimensions } = useChangeCardDimensions()

  return (
    <motion.div
      ref={cardRef}
      style={{width: cardDimensions.cardWidth, height: cardDimensions.cardHeight}}
      layoutId={selectedId.name}
      className={`CharacterCard ${pokemonBackground.name} 
              ${ enableEffect && legendary && `${pokedexPage ? 'Legendary Legendary_Pokedex' : 'Legendary Legendary_Home'}`} 
              ${ pokedexPage ? 'PokedexPosition Pokedex-card_dimensions' : 'Home-card_dimensions'}`}
      animate={onSound ? 'play' : 'stop'}
      variants={variantsCardAnimation}
    >
      <CardHead
        selectedId={selectedId}
        pokemon={pokemon}
        logoType={logoType}
        whileHoverCardExit={whileHoverCardExit}
        playPokemonSound={playPokemonSound}
        closePokemonCard={closePokemonCard}
        pokedexPage={pokedexPage}
        shinny={shinnyOn}
      />
      <CardBody
        cardDimensions={cardDimensions}
        pokemon={pokemon}
        selectedTab={selectedTab}
        changeSelectedTab={changeSelectedTab}
        selectedId={selectedId}
        pokemonData={pokemonData}
        logoType={logoType}
        onLoadDescription={onLoadDescription}
        shinny={shinnyOn}
        famale={famaleOn}
        tabDescriptionData={tabDescriptionData}
        pokemonBackground={pokemonBackground}
      />
      <CardFooter
        setShinny={setShinnyOn}
        shinny={shinnyOn}
        setFamale={setFamaleOn}
        famale={famaleOn}
        infoShared={infoShared}
        enableEffect={enableEffect}
        setEnableEffect={setEnableEffect}
        legendary={legendary}
      />
    </motion.div>
  )
}

export { Card }
