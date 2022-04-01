import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import CardGeneralDescription from '../../components/CardGeneralDescription/CardGeneralDescription';
import CardLoadDescription from '../../components/CardLoadDescription/CardLoadDescription';
import CardStatsDescription from '../../components/CardStatsDescription/CardStatsDescription';
import CardAbilitiesDescription from '../../components/CardAbilitiesDescription/CardAbilitiesDescription';
import CardLocationsDescription from '../../components/CardLocationsDescription/CardLocationsDescription';
import CardMovesDescription from '../../components/CardMovesDescription/CardMovesDescription';
import './CardBody.css';

const CardBody = ({ pokemon, selectedTab, changeSelectedTab, selectedId, pokemonData, onLoadDescription, logoType, shinny, famale, tabDescriptionData, pokemonBackground, generacion}) => {

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
        <div className="CharacterCard-Body" >
            <div className="CharacterCard-Image" >
                <img src={imagen()} alt={selectedId.name} />
            </div>
            <div className="CharacterCard-Description" >
                <nav className="CharacterCard-Description-nav">
                    <ul className="CharacterCard-Description-ul">
                        {pokemonData.map((item) => (
                            <li key={item.key}
                                className={item === selectedTab ? "selected" : ""}
                                style={{backgroundColor: item === selectedTab ? pokemonData[0].general.types[0].color.primary : "transparent"}}
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
                            initial={{ opacity: 0, y: 20 }}
                            exit={{ opacity: 0, y: 2 }}
                            transition={{ duration: 0.15 }} 
                            className="CharacterCard-Description-Content-Display"
                        >
                            {onLoadDescription && (<CardLoadDescription logoType={logoType} />)}
                            {(!onLoadDescription && tabDescriptionData && tabKey === "general") && (
                                <CardGeneralDescription tabTitle={tabKey} tabDescriptionData={tabDescriptionData} pokemonData={pokemonData} selectedTab={selectedTab} pokemon={pokemon} pokemonBackground={pokemonBackground}/>
                            )}
                            {(!onLoadDescription && tabDescriptionData && tabKey === "stats") && (
                                <CardStatsDescription pokemonBackground={pokemonBackground} tabTitle={tabKey} tabDescriptionData={tabDescriptionData} pokemon={pokemon} pokemonData={pokemonData} selectedTab={selectedTab} pokemonBackground={pokemonBackground} />
                            )}
                            {(!onLoadDescription && tabDescriptionData && tabKey === "abilities") && (
                                <CardAbilitiesDescription tabTitle={tabKey} tabDescriptionData={tabDescriptionData} pokemonData={pokemonData} selectedTab={selectedTab} pokemonBackground={pokemonBackground} />
                            )}
                            {(!onLoadDescription && tabDescriptionData && tabKey === "moves") && (
                                <CardMovesDescription tabTitle={tabKey} tabDescriptionData={tabDescriptionData} pokemonData={pokemonData} selectedTab={selectedTab} pokemonBackground={pokemonBackground} pokemon={pokemon} generacion={generacion} />
                            )} 
                            {(!onLoadDescription && tabDescriptionData && tabKey === "locations") && (
                                <CardLocationsDescription tabTitle={tabKey} tabDescriptionData={tabDescriptionData} pokemonData={pokemonData} selectedTab={selectedTab} pokemonBackground={pokemonBackground}/>
                            )} 
                        </motion.div>
                    </AnimatePresence>
                </main>
            </div>
        </div>
    );
};

export { CardBody };