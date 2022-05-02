import React, { useCallback } from 'react'
import { motion } from 'framer-motion'
import { toUpperCaseIndex, transformString } from '@shared/Utils'
import { DescriptionItem } from '@components/DescriptionItem/DescriptionItem'
import '@components/CardGeneralDescription/CardGeneralDescription.css'
import { PokemonTypeBox } from '@components/PokemonTypeBox/PokemonTypeBox'

const CardGeneralDescription = ({
  tabTitle,
  tabDescriptionData,
  selectedTab,
  pokemonData,
  pokemon,
  pokemonBackground,
}) => {
  let auxDesc = false
  const pseudoLegendary = useCallback(
    (pokemon) => {
      if (pokemon) {
        var sum = 0
        pokemon.stats.forEach((item) => (sum += item.base_stat))
        if (sum === 600) {
          return true
        } else {
          return false
        }
      }
    },
    [pokemon]
  )

  const transformWeight = useCallback((weight) => {
    let weightStr = weight.toString()
    let length = weightStr.length
    if (length >= 2) {
      return weightStr.slice(0, length - 1) + '.' + weightStr.slice(length - 1)
    }
    return `0.${weightStr}`
  }, [])

  const getEggGroups = useCallback((eggGroups) => {
    let result = ''
    if (eggGroups) {
      eggGroups.forEach((item, index) => {
        result += toUpperCaseIndex(item.name)
        if (index + 1 === eggGroups.length) {
          result += '.'
        } else {
          result += ', '
        }
      })
    }
    return result
  }, [])

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
        <ul className="General-Description_list">
          {tabDescriptionData?.species?.flavor_text_entries.map((item) => {
            if (item.language.name === 'en' && !auxDesc) {
              auxDesc = true
              return (
                <DescriptionItem
                  key={item.flavor_text}
                  backgroundColor={pokemonBackground.primary("0.1")}
                  borderColor={pokemonBackground.primary()}
                  name={'Description'}
                  data={transformString(item.flavor_text)}
                />
              )
            }
          })}
          <DescriptionItem
            backgroundColor={pokemonBackground.primary('0.1')}
            borderColor={pokemonBackground.primary()}
            name={selectedTab.general.types.length > 1 ? 'Types' : 'Type'}
            typesContainer={true}
          >
            <div className="Description-Item_content">
              {selectedTab.general.types.map((item) => 
                <PokemonTypeBox 
                  key={`${item.color.name}-Card`}
                  name={item.color.name} 
                  backgroundColor={item.color.primary()}
                  border={`1px solid ${item.color.secondary}`}
                />
              )}
            </div>
          </DescriptionItem>
          <DescriptionItem
            backgroundColor={pokemonBackground.primary('0.1')}
            borderColor={pokemonBackground.primary()}
            name={'Weight'}
            data={`${transformWeight(pokemonData[0].general.weight)} kg`}
          />
          <DescriptionItem
            backgroundColor={pokemonBackground.primary('0.1')}
            borderColor={pokemonBackground.primary()}
            name={'Height'}
            data={`${pokemonData[0].general.height}0 cm`}
          />
          <DescriptionItem
            backgroundColor={pokemonBackground.primary('0.1')}
            borderColor={pokemonBackground.primary()}
            name={'Capture Rate'}
            data={`${
              tabDescriptionData?.species?.capture_rate
                ? tabDescriptionData.species?.capture_rate
                : 0
            }/255`}
          />
          <DescriptionItem
            backgroundColor={pokemonBackground.primary('0.1')}
            borderColor={pokemonBackground.primary()}
            name={'Capture Rate'}
            data={`${
              tabDescriptionData?.species?.capture_rate
                ? tabDescriptionData.species?.capture_rate
                : 0
            }/255`}
          />
          <DescriptionItem
            backgroundColor={pokemonBackground.primary('0.1')}
            borderColor={pokemonBackground.primary()}
            name={'Base happiness'}
            data={`${
              tabDescriptionData?.species?.base_happiness
                ? tabDescriptionData?.species?.base_happiness
                : 0
            }/255`}
          />
          <DescriptionItem
            backgroundColor={pokemonBackground.primary('0.1')}
            borderColor={pokemonBackground.primary()}
            name={'Legendary'}
            data={
              tabDescriptionData?.species?.is_legendary ||
              tabDescriptionData?.species?.is_mythical
                ? 'Yes'
                : 'No'
            }
          />
          <DescriptionItem
            backgroundColor={pokemonBackground.primary('0.1')}
            borderColor={pokemonBackground.primary()}
            name={'Mythical'}
            data={tabDescriptionData?.species?.is_mythical ? 'Yes' : 'No'}
          />
          <DescriptionItem
            backgroundColor={pokemonBackground.primary('0.1')}
            borderColor={pokemonBackground.primary()}
            name={'Pseudo Legendary'}
            data={pseudoLegendary(pokemon) ? 'Yes' : 'No'}
          />
          {tabDescriptionData?.species?.generation?.name && (
            <DescriptionItem
              backgroundColor={pokemonBackground.primary('0.1')}
              borderColor={pokemonBackground.primary()}
              name={'Generation'}
              data={toUpperCaseIndex(
                tabDescriptionData.species?.generation?.name
              )}
            />
          )}
          {tabDescriptionData?.species?.evolves_from_species && (
            <DescriptionItem
              backgroundColor={pokemonBackground.primary('0.1')}
              borderColor={pokemonBackground.primary()}
              name={'Pre-evolution'}
              data={toUpperCaseIndex(
                tabDescriptionData.species?.evolves_from_species?.name
              )}
            />
          )}
          {tabDescriptionData?.species?.shape?.name && (
            <DescriptionItem
              backgroundColor={pokemonBackground.primary('0.1')}
              borderColor={pokemonBackground.primary()}
              name={'Shape'}
              data={toUpperCaseIndex(tabDescriptionData.species?.shape.name)}
            />
          )}
          {tabDescriptionData?.species?.egg_groups?.length > 0 && (
            <DescriptionItem
              backgroundColor={pokemonBackground.primary('0.1')}
              borderColor={pokemonBackground.primary()}
              name={
                tabDescriptionData.species.egg_groups.length > 1
                  ? 'Egg groups'
                  : 'Egg group'
              }
              data={getEggGroups(tabDescriptionData.species.egg_groups)}
            />
          )}
          {tabDescriptionData?.species?.egg_groups?.length > 0 && (
            <DescriptionItem
              backgroundColor={pokemonBackground.primary('0.1')}
              borderColor={pokemonBackground.primary()}
              name={'Grouth Rate'}
              data={toUpperCaseIndex(
                tabDescriptionData.species?.growth_rate.name
              )}
            />
          )}
        </ul>
      </div>
    </React.Fragment>
  )
}

export default CardGeneralDescription
