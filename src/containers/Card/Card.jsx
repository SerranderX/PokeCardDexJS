import React, { useCallback } from 'react';
import { motion } from 'framer-motion';
import { variantsCardAnimation, 
    whileHoverCardExit 
} from '../../shared/Animations';
import { CardBody } from '../CardBody/CardBody';
import { CardHead } from '../CardHead/CardHead';
import { CardFooter } from '../CardFooter/CardFooter';
import '../../styles/PokemonTypes.css';
import './Card.css';


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
        generacion,
        enableEffect,
        setEnableEffect,
        pokedexPage
    }) => {

    const legendary = useCallback((pokemon) => { 
        if(!pokemon) return false;

        var sum = 0;
        pokemon.stats.forEach(item => sum += item.base_stat); 
        if(sum === 600){
            return true;
        }

        if(tabDescriptionData){
            if(tabDescriptionData?.species?.is_legendary == true && !legendary){
                return true;
            }

            if(tabDescriptionData?.species?.is_mythical == true && !legendary){
                return true;
            }
        }
    }, [pokemon]);

    return (
        <motion.div
            layoutId={selectedId.name} 
            className={`CharacterCard ${pokemonBackground.name} 
                        ${(enableEffect && legendary) && `${(pokedexPage) ? 'Legendary Legendary_Pokedex' : 'Legendary Legendary_Home'}`} 
                        ${(pokedexPage) ? 'PokedexPosition Pokedex-card_dimensions' : 'Home-card_dimensions'}
                    `} 
            animate={onSound ? "play" : "stop"}
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
                generacion={generacion}
            />
            {!onLoadDescription && 
                (<CardFooter 
                    setShinny={setShinnyOn}
                    shinny={shinnyOn}
                    setFamale={setFamaleOn}
                    famale={famaleOn}
                    infoShared={infoShared}
                    enableEffect={enableEffect}
                    setEnableEffect={setEnableEffect}
                    legendary={legendary}
                />)
            }
        </motion.div>
    );
};

export { Card };