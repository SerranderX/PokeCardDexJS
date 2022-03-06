import React from 'react';
import { motion } from 'framer-motion';
import { toUpperCaseIndex } from '../../shared/Utils';
import './CardAbilitiesDescription.css';

const CardAbilitiesDescription = ({tabTitle, tabDescriptionData, selectedTab, pokemonData}) => {
    const abilities = tabDescriptionData?.abilities ?? null;
    var aux = false;

    return (
        <React.Fragment>
            <motion.h1 className="CharacterCard-Description-Title">{toUpperCaseIndex(tabTitle)}</motion.h1>
            {abilities?.map((item, index) => {
                aux = false;
                return (
                    <motion.section key={item.name} className="CharacterCard-Description-Text-Ability">
                        <h3>{index + 1}. {toUpperCaseIndex(item.name)}</h3>
                        <ul className='CharacterCard-Description-Text-Ability-Detail'>
                            {item.data.flavor_text_entries.forEach(flavorText => {
                                if(flavorText.language.name === "en" && !aux){
                                    aux = true;
                                    return (
                                        <li key={flavorText.flavor_text} ><em>• Description: </em>{flavorText.flavor_text}</li>
                                    )
                                }
                            })}
                            {item.data.effect_entries.forEach(effect => {
                                if(effect.language.name === "en"){
                                    return (
                                        <React.Fragment key={effect.effect}>
                                            <li><em>• Effect short description: </em>{effect.short_effect}</li>
                                            <li><em>• Effect detail: </em>{effect.effect}</li>
                                        </React.Fragment> 
                                    )
                                }
                            })}
                        </ul>
                    </motion.section>
                )}
            )}
        </React.Fragment>
    );
};

export default CardAbilitiesDescription;