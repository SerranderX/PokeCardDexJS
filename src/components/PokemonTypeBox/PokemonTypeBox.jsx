import React from 'react'
import { toUpperCaseIndex } from '@shared/Utils'
import "@components/PokemonTypeBox/PokemonTypeBox.css"

const PokemonTypeBox = ({ name, backgroundColor, border }) => {
  return (
    <div
      key={name}
      className="Pokemon-type_Icon"
      style={{ backgroundColor: backgroundColor, border: border }}
    >
      <p>{toUpperCaseIndex(name)}</p>
    </div>
  )
}

export { PokemonTypeBox }
