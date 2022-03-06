import React from 'react';
import { motion } from 'framer-motion';
import { toUpperCaseIndex, transformString } from '../../shared/Utils';

const CardGeneralDescription = ({tabTitle, tabDescriptionData, selectedTab, pokemonData, pokemon}) => {
    let auxDesc = false;
    let pseudoLegendary = false;

    if (pokemon) { 
        console.log("Calc pseudo legendary");
        var sum = 0;
        pokemon.stats.map(item => sum += item.base_stat); 
        if(sum === 600){
            pseudoLegendary = true;
        }
    }

    const transformWeight = (weight) => {
        let weightStr = weight.toString();
        let length = weightStr.length;
        if (length >= 2) {
            return weightStr.slice(0, length - 1) + '.' + weightStr.slice(length - 1);
        }
        return `0.${weightStr}`;
    }


    const getEggGroups = (eggGroups) => {
        let result = "";
        eggGroups.forEach((item, index) => {
            result += toUpperCaseIndex(item.name);
            if ((index + 1) === eggGroups.length) {
                result += ".";
            } else {
                result += ", ";
            }
        })
        return result;
    }

    return (
        <React.Fragment>
            <motion.h1 className="CharacterCard-Description-Title">{toUpperCaseIndex(tabTitle)}</motion.h1>
            <motion.section className="CharacterCard-Description-Text">
                {tabDescriptionData.species?.flavor_text_entries.map(item => {
                    if(item.language.name === "en" && !auxDesc){
                        auxDesc = true;
                        return (
                            <p key={item.flavor_text} ><b>Description: </b> {transformString(item.flavor_text)}</p>
                        )
                    }
                })}
            </motion.section>
            <motion.section className="CharacterCard-Description-Text">
                <h4>{selectedTab.general.types.length > 1 ? ('Types:') : ('Type')}</h4>
                {selectedTab.general.types.map((item) => (
                    item?.typeIcon({ width: "60", height: "23", key: item.logo })
                ))}
            </motion.section>
            <motion.section className="CharacterCard-Description-Text">
                <b>Weight:</b>
                <p>{transformWeight(pokemonData[0].general.weight)} kg</p>
            </motion.section>
            <motion.section className="CharacterCard-Description-Text">
                <b>Height:</b>
                <p>{pokemonData[0].general.height}0 cm</p>
            </motion.section>
            {(tabDescriptionData.species?.capture_rate) && (
                <motion.section className="CharacterCard-Description-Text">
                    <p><b>Capture Rate:</b>{tabDescriptionData.species?.capture_rate}/255</p>
                </motion.section>
            )}
            {(tabDescriptionData.species?.base_happiness) && (
                <motion.section className="CharacterCard-Description-Text">
                    <p><b>Base happiness:</b>{tabDescriptionData.species?.base_happiness}/255</p>
                </motion.section>
            )}
            {(tabDescriptionData.species?.is_legendary && tabDescriptionData.species?.is_mythical) && (
                <motion.section className="CharacterCard-Description-Text">
                    <p><b>Legendary:</b>{(tabDescriptionData.species?.is_legendary || tabDescriptionData.species?.is_mythical) ? "Yes" : "No"}</p>
                </motion.section>
            )}
            {(tabDescriptionData.species?.is_mythical) && (
                <motion.section className="CharacterCard-Description-Text">
                    <p><b>Mythical:</b>{(tabDescriptionData.species?.is_mythical) ? "Yes" : "No"}</p>
                </motion.section>
            )}
            <motion.section className="CharacterCard-Description-Text">
                <p><b>Pseudo Legendary: </b>{(pseudoLegendary) ? "Yes" : "No"}</p>
            </motion.section>
            {(tabDescriptionData.species?.generation?.name) && (
                <motion.section className="CharacterCard-Description-Text">
                    <p><b>Generation:</b>{toUpperCaseIndex(tabDescriptionData.species?.generation?.name)}</p>
                </motion.section>
            )}
            {(tabDescriptionData.species?.evolves_from_species) && (
                <motion.section className="CharacterCard-Description-Text">
                    <p><b>Pre-evolution:</b>{toUpperCaseIndex(tabDescriptionData.species?.evolves_from_species?.name)}</p>
                </motion.section>
            )}
            {(tabDescriptionData.species?.shape?.name) && (
                <motion.section className="CharacterCard-Description-Text">
                    <p><b>Shape:</b>{toUpperCaseIndex(tabDescriptionData.species?.shape.name)}</p>
                </motion.section>
            )}
            {tabDescriptionData.species?.egg_groups?.length > 0 && (
                <motion.section className="CharacterCard-Description-Text">
                    <p><b>{(tabDescriptionData.species.egg_groups.length > 1) ? 'Egg groups:' : 'Egg group:'}</b>{getEggGroups(tabDescriptionData.species.egg_groups)}</p>
                </motion.section>
            )}
            {tabDescriptionData.species?.egg_groups?.length > 0 && (
                <motion.section className="CharacterCard-Description-Text">
                    <p><b>Grouth Rate: </b>{toUpperCaseIndex(tabDescriptionData.species?.growth_rate.name)}</p>
                </motion.section>
            )}
        </React.Fragment>
    )
};

export default CardGeneralDescription;