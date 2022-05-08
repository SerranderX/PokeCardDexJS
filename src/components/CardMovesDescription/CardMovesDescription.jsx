import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import {
  toUpperCaseIndex,
  transformString,
  transformVerString,
} from '@shared/Utils'
import { InfoBox } from '@components/InfoBox/InfoBox'
import { InfoBoxItem } from '@components/InfoBoxItem/InfoBoxItem'
import { glosaryElements, versions } from '@shared/Utils'
import { Glosary } from '@components/Glosary/Glosary'
import './CardMovesDescription.css'

const CardMovesDescription = ({
  tabTitle,
  pokemonBackground,
  pokemon,
  selectedTab,
  cardDimensions
}) => {
  const [version, setVersion] = useState('')
  const [pokemonVersions, setPokemonVersions] = useState([])
  const [moves, setMoves] = useState([])
  const selectVerWidth = (cardDimensions.cardHeight < 700) ? cardDimensions.cardWidth * 0.6 : '';


  const handleChange = (event) => {
    setVersion(event.target.value)
  }
  
  useEffect(() => {
    if (pokemonVersions.length == 0) {
      let aux = false

      const pokemonAbailableVersions = versions.flatMap((version) => {
        if (version.version.generation_id === pokemon.generation[0] && aux === false) {
          aux = true
        }

        return aux ? version : []
      })

      console.log(pokemonAbailableVersions)

      setPokemonVersions(pokemonAbailableVersions)
      setVersion(pokemonAbailableVersions[0].version.name)
    }

    if (pokemonVersions.length > 0 && version !== '') {
      const auxMove = []

      const movesFiltered = pokemon.moves.flatMap((item) => {
        const filterVer = item.version_group_details.filter(
          (ver) => ver.version_group.name === version
        )
        const filterName = auxMove.filter(
          (moveName) => moveName.name === item.move.name
        )

        if (filterVer.length > 0 && filterName.length === 0) {
          auxMove.push({ name: item.move.name })
          const filtredLearnMethod = glosaryElements[0].data.filter(
            (method) => filterVer[0].move_learn_method.name === method.name
          )
          item.learnedMethod = filtredLearnMethod ? filtredLearnMethod[0] : null
          return item
        } else {
          return []
        }
      })


      setMoves(movesFiltered)
    }
  }, [version])

  return (
    <React.Fragment>
      <section
        className="CharacterCard-Description-Title"
        style={{
          backgroundColor: pokemonBackground.primary('0.1'),
          borderBottom: `1px ${pokemonBackground.primary()} solid`,
          paddingBottom: '1em',
        }}
      >
        <motion.h1>{toUpperCaseIndex(tabTitle)}</motion.h1>
        <p>{selectedTab.description}</p>
        {glosaryElements && 
          <Glosary 
            pokemonPaletteColors={pokemonBackground} 
            glosaryElements={glosaryElements}
          />
        }
        <div className="Pokemon-Version_div">
          <select
            className="Pokemon-Version_select"
            onChange={handleChange}
            style={{ backgroundColor: pokemonBackground.primary(), width: selectVerWidth }}
          >
            {pokemonVersions.length > 0 &&
              pokemonVersions.map((version) => (
                <option key={version.version.name} value={version.version.name}>
                  {toUpperCaseIndex(transformVerString(version.version.name))}
                </option>
              ))}
          </select>
        </div>
        <p style={{ marginTop: '.5em' }}>Select the pokemon game version.</p>
      </section>
      <div className="CharacterCard-Description-Body">
        <InfoBox
          title={`Pokemon ${toUpperCaseIndex(
            transformVerString(version)
          )} moves`}
          pokemonBackground={pokemonBackground}
        >
          {moves.map((move) => (
            <InfoBoxItem
              key={move.move.name}
              pokemonBackground={pokemonBackground}
              endPoint={move.move.url}
              powerTypes={glosaryElements[1].data}
              learnedMethod={move.learnedMethods}
              movesItem={true}
            >
              <img
                src={move.learnedMethod?.src}
                alt={move.learnedMethod?.name}
              />
              <h3>{toUpperCaseIndex(transformString(move.move.name))}</h3>
            </InfoBoxItem>
          ))}
        </InfoBox>
      </div>
    </React.Fragment>
  )
}

export default CardMovesDescription
