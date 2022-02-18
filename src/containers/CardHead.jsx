import React from 'react';
import { motion } from 'framer-motion';
import { whileHoverSpriteImage } from '../shared/CharacterAnimations.js'; 

const CardHead = ({pokemon, selectedId, logoType, handleCloseCard, whileHoverCardExit, playPokemonSound, shinny, famale}) => {

    const soundToggle = (name) => {
        playPokemonSound(0.4, name);
    }

    const imagen = () => {
        if(shinny && famale) {
            return pokemon.sprites.front_shiny_female;
        } else if(shinny) {
            return pokemon.sprites.front_shiny;
        } else if(famale) {
            return pokemon.sprites.front_female;
        } else {
            return pokemon.sprites.front_default;
        }
    }

    return (
        <motion.div className="CharacterCard-Head">
            <motion.div 
                className="CharacterCard-Sprite" 
                whileHover={{scale: 1}}
                onClick={() => soundToggle(selectedId.name)}
            >
                <motion.img 
                    whileHover={whileHoverSpriteImage}
                    src={imagen()} 
                    name="sprite"
                    className="CharacterCard-Sprite-img" 
                />
                <motion.label className="CharacterCard-Sprite-label">sound</motion.label>
            </motion.div>
            
            <motion.h2 className="CharacterCard-Title">{selectedId.name.charAt(0).toUpperCase()}{selectedId.name.slice(1)} <em>#{pokemon.id}</em></motion.h2>
            <motion.button
                onClick={() => handleCloseCard()}
                className="CharacterCard-Button"
            >
                <motion.img whileHover={whileHoverCardExit} className="CharacterCard-Icon-Type" src={logoType} />
                <motion.label>Back</motion.label>
            </motion.button>
        </motion.div>
    );
};

export { CardHead };