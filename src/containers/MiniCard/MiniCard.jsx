import React from 'react'
import { motion } from 'framer-motion'
import { toUpperCaseIndex } from '@shared/Utils'
import { Loading } from '@components/Loading/Loading'
import { PokemonTypeBox } from '@components/PokemonTypeBox/PokemonTypeBox'
import { whileHoverCard } from '@containers/MiniCard/animations'
import { useNearScreen } from '@hooks/useNearScreen' 
import '@containers/MiniCard/MiniCard.css'

const MiniCard = ({ selectedId, character, openPokemonCard, characterSelect, typesMiniCard }) => {
  const loadingCard = (characterSelect != null) ? characterSelect.name == character.name : false;
  const [show, ref] = useNearScreen();

  const handleItem = (item) => {
    openPokemonCard(item)
  }
  
  return (
    <section ref={ref} style={{padding:'10px', minHeight: '170px', minWidth: '230px'}}>
      {show && (
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
            <em>#{character.id}</em>
          </motion.h2>
          <section>
            {loadingCard && <Loading miniCardLoading={true} />}
            {!loadingCard && 
              <motion.img
                src={character.sprites.front_default}
                alt={character.name}
                width="96px"
                height="96px"
              />
            }
            {typesMiniCard && (
              <div className="Types">
                {character.types.map((item, index) => 
                  <PokemonTypeBox 
                    key={`${item.type.name}-${index}`}
                    name={item.type.name} 
                    backgroundColor={character.pokemonTypeUtils[index].color.primary()} 
                    border={`1px solid ${character.pokemonTypeUtils[index].color.primary("0.1")}`} 
                  />
                )}
              </div>
            )}
          </section>
        </motion.div>
      )}
    </section>
  )
}

export { MiniCard }
