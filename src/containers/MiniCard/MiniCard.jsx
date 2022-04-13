import React from 'react'
import { motion } from 'framer-motion'
import { whileHoverCard } from '@shared/Animations'
import { toUpperCaseIndex } from '@shared/Utils'
import './MiniCard.css'

const MiniCard = ({ selectedId, character, openPokemonCard }) => {
  const handleItem = (item) => {
    openPokemonCard(item)
  }

  return (
    <motion.div
      className={`MiniCard ${
        selectedId !== null && selectedId.name === character.name
          ? 'MiniCard-Selected'
          : ''
      }`}
      layoutId={character.name}
      onClick={() => handleItem(character)}
      whileHover={whileHoverCard}
    >
      <motion.h2 className="MiniCard-Title">
        {toUpperCaseIndex(character.name)}{' '}
        <em>#{character.url.split('/')[6]}</em>
      </motion.h2>
      <motion.img
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
          character.url.split('/')[6]
        }.png`}
        alt={character.name}
      />
    </motion.div>
  )
}

export { MiniCard }
