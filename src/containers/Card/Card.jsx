import React from 'react';
import { motion } from 'framer-motion';
import { variantsCardAnimation, whileHoverCardExit } from '../../shared/CharacterAnimations';
import { CardBody } from '../CardBody';
import { CardHead } from '../CardHead';
import { CardFooter } from '../CardFooter';
import '../../styles/PokemonTypes.css';
import './Card.css';


const Card = ({
        selectedId, 
        pokemon, 
        onSound,
        pokemonBackground,
        logoType,
        closePokemonCard,
        playPokemonSound,
        shinnyOn,
        famaleOn,
        selectedTab,
        changeSelectedTab,
        pokemonData,
        onLoadDescription,
        infoShared,
        tabDescriptionData,
        setShinnyOn,
        setFamaleOn,
        versions
    }) => {

    const handleCloseCard = () => {
        closePokemonCard();
    }

    return (
        <motion.div
            layoutId={selectedId.name} 
            className={`CharacterCard ${pokemonBackground.name}`} 
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