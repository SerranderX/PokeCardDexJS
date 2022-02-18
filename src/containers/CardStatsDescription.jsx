import React from 'react';
import { motion } from 'framer-motion';
import { toUpperCaseIndex } from '../shared/Utils';

const CardStatsDescription = ({tabTitle, tabDescriptionData, selectedTab, pokemonData, pokemon}) => {


    return (
        <React.Fragment>
            <motion.h1 className="CharacterCard-Description-Title">{toUpperCaseIndex(tabTitle)}</motion.h1>
            {pokemon.stats.map((item, index) => (
                <motion.section key={item.stat.name} className="CharacterCard-Description-Text-Stat" >
                    <p>• <b>{toUpperCaseIndex(item.stat.name)}</b> [<em>Base:</em> {item.base_stat}] - [<em>Effort:</em> {item.effort}]</p>
                </motion.section>
            ))}

        </React.Fragment>
    );
};

export default CardStatsDescription;