import React from 'react';
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
        versions,
        infoShared,
        setShinnyOn,
        setFamaleOn
    }) => {

    let legendary = false; 

    const handleCloseCard = () => {
        closePokemonCard();
    }

    if (pokemon) { 
        var sum = 0;
        pokemon.stats.forEach(item => sum += item.base_stat); 
        if(sum === 600){
            legendary = true;
        }

        if(tabDescriptionData){
            if(tabDescriptionData?.species?.is_legendary == true && !legendary){
                legendary = true;
            }

            if(tabDescriptionData?.species?.is_mythical == true && !legendary){
                legendary = true;
            }
        }
    }

    return (
        <motion.div
            layoutId={selectedId.name} 
            className={`CharacterCard ${pokemonBackground.name} ${legendary ? 'Legendary' : ''}`} 
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
                pokemonBackground={pokemonBackground}
                versions={versions}
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
    );
};

export { Card };