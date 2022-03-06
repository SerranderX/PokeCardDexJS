import React from 'react';
import { motion } from 'framer-motion';
import { toUpperCaseIndex } from '../../shared/Utils';
import RadarGraph from '../RadarGraph/RadarGraph';

const CardStatsDescription = ({tabTitle, pokemon, pokemonBackground}) => {
    var asd = 0;

    pokemon.stats.map(item => asd += item.base_stat);

    return (
        <React.Fragment>
            <motion.h1 className="CharacterCard-Description-Title">{toUpperCaseIndex(tabTitle)}</motion.h1>
            <motion.div style={{marginBottom: '10px'}}>
                <RadarGraph stats={pokemon.stats} pokemonBackground={pokemonBackground} />
            </motion.div>
            {pokemon.stats.map(item => (
                <motion.section key={item.stat.name} className="CharacterCard-Description-Text-Stat" >
                    <p>• <b>{toUpperCaseIndex(item.stat.name)}</b> [<em>Base:</em> {item.base_stat}] - [<em>Effort:</em> {item.effort}]</p>
                </motion.section>
            ))}
            <motion.section className="CharacterCard-Description-Text-Stat">
                <p>• <b>Stats sum</b>: [{asd}]</p>
            </motion.section>

        </React.Fragment>
    );
};

export default CardStatsDescription;