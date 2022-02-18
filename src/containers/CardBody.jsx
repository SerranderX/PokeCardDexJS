import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import '../styles/Characters.css';
import CardGeneralDescription from './CardGeneralDescription';
import CardLoadDescription from './CardLoadDescription';
import CardStatsDescription from './CardStatsDescription';
import CardAbilitiesDescription from './CardAbilitiesDescription';
import CardLocationsDescription from './CardLocationsDescription';
import CardMovesDescription from './CardMovesDescription';

const CardBody = ({ pokemon, selectedTab, changeSelectedTab, selectedId, pokemonData, onLoadDescription, logoType, shinny, famale, tabDescriptionData }) => {

    const imagen = () => {
        if (shinny && famale) {
            return pokemon.sprites.other.home.front_shiny_female;
        } else if (shinny) {
            return pokemon.sprites.other.home.front_shiny;
        } else if (famale) {
            return pokemon.sprites.other.home.front_female;
        } else {
            return pokemon.sprites.other['official-artwork'].front_default;
        }
    }

    const tabKey = (selectedTab != null) ? selectedTab.key : ""; 

    return (
        <React.Fragment>
            <motion.div className="CharacterCard-Body">
                <motion.div className="CharacterCard-Image" >
                    <motion.img height="200" className="CharacterCard-Image-Pokemon" src={imagen()} alt={selectedId.name} />
                </motion.div>
            </motion.div>
            <motion.div className="CharacterCard-Description">
                <nav>
                    <ul>
                        {pokemonData.map((item) => (
                            <li
                                key={item.key}
                                className={item === selectedTab ? "selected" : ""}
                                onClick={() => changeSelectedTab(item)}
                            >
                                {item.key.charAt(0).toUpperCase()}{item.key.slice(1)}
                                {item === selectedTab ? (
                                    <motion.div className="underline" layoutId="underline" />
                                ) : null}
                            </li>
                        ))}
                    </ul>
                </nav>
                <main className="CharacterCard-Description-Content">
                    <AnimatePresence exitBeforeEnter>
                        <motion.div
                            key={selectedTab ? selectedTab.key : "empty"}
                            animate={{ opacity: 1, y: 0 }}
                            initial={{ opacity: 0, y: 2 }}
                            exit={{ opacity: 0, y: 2 }}
                            transition={{ duration: 0.15 }}
                            className="CharacterCard-Description-Content-Display"
                        >
                            {onLoadDescription && (<CardLoadDescription logoType={logoType} />)}
                            {(!onLoadDescription && tabKey === "general") && (
                                <CardGeneralDescription tabTitle={tabKey} tabDescriptionData={tabDescriptionData} pokemonData={pokemonData} selectedTab={selectedTab}/>
                            )}
                            {(!onLoadDescription && tabKey === "stats") && (
                                <CardStatsDescription tabTitle={tabKey} tabDescriptionData={tabDescriptionData} pokemon={pokemon} pokemonData={pokemonData} selectedTab={selectedTab}/>
                            )}
                            {(!onLoadDescription && tabKey === "abilities") && (
                                <CardAbilitiesDescription tabTitle={tabKey} tabDescriptionData={tabDescriptionData} pokemonData={pokemonData} selectedTab={selectedTab}/>
                            )}
                            {(!onLoadDescription && tabKey === "moves") && (
                                <CardMovesDescription tabTitle={tabKey} tabDescriptionData={tabDescriptionData} pokemonData={pokemonData} selectedTab={selectedTab}/>
                            )} 
                            {(!onLoadDescription && tabKey === "locations") && (
                                <CardLocationsDescription tabTitle={tabKey} tabDescriptionData={tabDescriptionData} pokemonData={pokemonData} selectedTab={selectedTab}/>
                            )} 
                        </motion.div>
                    </AnimatePresence>
                </main>
            </motion.div>
        </React.Fragment>
    );
};

export { CardBody };