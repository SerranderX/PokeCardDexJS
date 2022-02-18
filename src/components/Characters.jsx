import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import {whileHoverCard, whileHoverCardExit, variantsCardAnimation} from './../shared/CharacterAnimations';
import { usePokemonData } from '../hooks/usePokemonData';
import { CardBody } from '../containers/CardBody';
import { CardHead } from '../containers/CardHead';
import { CardFooter } from '../containers/CardFooter';
import { toUpperCaseIndex } from '../shared/Utils';
import '../styles/Characters.css';
import '../styles/Card.css';

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
    
    const handleCloseCard = () => {
        closePokemonCard();
    }

    return (
        <motion.div className="Characters" >
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
                    <motion.div 
                        layoutId={selectedId.name} 
                        className={`CharacterCard ${pokemonBackground}`} 
                        animate={onSound ? "play" : "stop"}
                        variants={variantsCardAnimation}
                    >
                        <CardHead 
                            selectedId={selectedId}
                            pokemon={pokemon}
                            logoType={logoType}
                            handleCloseCard={handleCloseCard}
                            whileHoverCardExit={whileHoverCardExit}
                            playPokemonSound={playPokemonSound}
                            shinny={shinnyOn}
                        />
                        <CardBody 
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
                        />
                        {!onLoadDescription && 
                            (<CardFooter 
                                setShinny={setShinnyOn}
                                shinny={shinnyOn}
                                setFamale={setFamaleOn}
                                famale={famaleOn}
                                infoShared={infoShared}
                                versions={versions}
                            />)
                        }
                    </motion.div>
            )}
            </AnimatePresence>
        </motion.div>
    );
};

export default Characters;