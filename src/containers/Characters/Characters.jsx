import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { whileHoverCard } from '../../shared/CharacterAnimations';
import { usePokemonData } from '../../hooks/usePokemonData';
import { toUpperCaseIndex } from '../../shared/Utils';
import { Card } from '../Card/Card';
import './Characters.css';

const Characters = ({ characters, offSet, versions }) => {
    const { 
        openPokemonCard,
        closePokemonCard, 
        selectedId,
        pokemonBackground,
        logoType,
        pokemon,
        selectedTab,
        changeSelectedTab,
        pokemonData,
        playPokemonSound,
        onSound,
        onLoadDescription,
        setShinnyOn,
        shinnyOn,
        setFamaleOn,
        famaleOn,
        infoShared,
        tabDescriptionData
    } = usePokemonData();
    
    const handleItem = (item) => {
        openPokemonCard(item);
    }
    
    

    return (
        <motion.div className="Characters-container" >
            <AnimatePresence>
            { characters.map(( character, index )=> ( 
                <motion.div 
                    className={`Character ${(selectedId !== null && selectedId.name === character.name) ? 'Character-Selected' : ''}`} 
                    key={character.name} 
                    layoutId={character.name} 
                    onClick={() => handleItem(character)}
                    whileHover={whileHoverCard}
                >
                    <motion.h2>{toUpperCaseIndex(character.name)} <em>#{(index + 1) + offSet}</em> </motion.h2>
                    <motion.img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${character.url.split('/')[6]}.png`} alt={character.name} />
                </motion.div>
            ))}

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
                        versions={versions}
                    />
            )}
            </AnimatePresence>
        </motion.div>
    );
};

export default Characters;