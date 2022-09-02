import React from 'react'
import { motion } from 'framer-motion'
import { whileHoverSpriteImage } from '@shared/Animations'
import { toUpperCaseIndex } from '@shared/Utils'
import { useToast } from '@hooks/useToast'
import './CardHead.css'

const CardHead = ({
  pokemon,
  selectedId,
  logoType,
  whileHoverCardExit,
  closePokemonCard,
  playPokemonSound,
  shinny,
  famale,
  pokedexPage,
}) => {
  const soundToggle = (name) => {
    playPokemonSound(0.1, name)
  }

  const handleCloseCard = () => {
    if (pokedexPage) {
      closePokemonCard()
    } else {
      useToast({
        message: 'Close function is not available in home page.',
        type: 'info',
        bkgColor: '#d8c481',
      })
    }
  }

  const imagen = () => {
    if (shinny && famale) {
      return pokemon.sprites.front_shiny_female
    } else if (shinny) {
      return pokemon.sprites.front_shiny
    } else if (famale) {
      return pokemon.sprites.front_female
    } else {
      return pokemon.sprites.front_default
    }
  }

  return (
    <motion.div className="CharacterCard-Head">
      <motion.div
        className="CharacterCard-Sprite"
        whileHover={{ scale: 1 }}
        onClick={() => soundToggle(selectedId.name)}
      >
        <motion.img
          whileHover={whileHoverSpriteImage}
          src={imagen()}
          name="sprite"
          className="CharacterCard-Sprite-img"
          alt="CharacterCard-Sprite-img"
        />
        <label>Sound</label>
      </motion.div>
      <motion.div className="CharacterCard-Title">
        <h2>
          {toUpperCaseIndex(selectedId.name)}{' '}<em>#{pokemon.id}</em>
        </h2>
      </motion.div>
      <motion.button
        onClick={() => handleCloseCard()}
        className="CharacterCard-Button"
      >
        <motion.img
          whileHover={whileHoverCardExit}
          className="CharacterCard-Icon-Type"
          src={logoType}
          alt="CharacterCard-Icon-Type"
        />
        <motion.label>Back</motion.label>
      </motion.button>
    </motion.div>
  )
}

export { CardHead }
