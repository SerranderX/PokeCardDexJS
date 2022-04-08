import React, { useState, useContext, useEffect, Fragment } from 'react';
import { AppContext } from '../../context/AppContext';
import { motion, AnimatePresence } from "framer-motion";
import { wrap } from "popmotion";
import { ENV } from '../../shared/Env';
import { variantsSlide } from '../../shared/Animations.js';
import { Card } from '../../containers/Card/Card';
import Arrow from '../../assets/icons/arrowSlide.jsx';
import ArrowRight from '../../assets/icons/arrowRight.jsx';
import './Home.css';

const swipeConfidenceThreshold = 10000;
const swipePower = (offset, velocity) => {
  return Math.abs(offset) * velocity;
};

const pokemonCard = [
    {name: 'pikachu', url: `${ENV.pokeApiURL}25/`},
    {name: 'mew', url: `${ENV.pokeApiURL}151/`},
    {name: 'moltres', url: `${ENV.pokeApiURL}146/`},
    {name: 'aegislash-shield', url: `${ENV.pokeApiURL}681/`},
    {name: 'kyogre', url: `${ENV.pokeApiURL}382/`},
    {name: 'sylveon', url: `${ENV.pokeApiURL}700/`},
    {name: 'lucario', url: `${ENV.pokeApiURL}448/`},
    {name: 'buzzwole', url: `${ENV.pokeApiURL}794/`},
    {name: 'gengar-gmax', url: `${ENV.pokeApiURL}10202/`},
    {name: 'bouffalant', url: `${ENV.pokeApiURL}626/`},
    {name: 'toxicroak', url: `${ENV.pokeApiURL}454/`},
    {name: 'sableye', url: `${ENV.pokeApiURL}302/`},
    {name: 'tyranitar', url: `${ENV.pokeApiURL}248/`},
    {name: 'corvisquire', url: `${ENV.pokeApiURL}822/`}
];

const Home = () => {
    const [[page, direction], setPage] = useState([0, 0]);
    const pokemonCardIndex = wrap(0, pokemonCard.length, page);


    const {
        pokedexPage,
        setPokedexPage,
        theme,

        selectedId,
        pokemon,

        onSound,
        logoType,
        pokemonBackground,
        closePokemonCard,
        playPokemonSound,
        shinnyOn,
        setShinnyOn,
        selectedTab,
        changeSelectedTab,
        pokemonData,
        onLoadDescription,
        setFamaleOn,
        famaleOn,
        infoShared,
        tabDescriptionData,
        generacion,
        getPokemonCard,
        enableEffect,
        setEnableEffect,
    } = useContext(AppContext);

    const paginate = (newDirection) => {
        setPage([page + newDirection, newDirection]);
        getPokemonCard(pokemonCard[pokemonCardIndex]);
    };


    useEffect(() => {
        if(pokedexPage) { setPokedexPage(false) }

        if(!selectedId){
            paginate(1);
        }
    }, []);

    return (
        <Fragment>
            <div className="Home-info_presentation">
                <h2>{ENV.appPresentationTitle}</h2>
                <h3>{ENV.appPresentation}</h3>
                <motion.a href="/pokedex" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} >
                    Go to Pokedex 
                    <ArrowRight theme={theme}/>
                </motion.a>
            </div>
            <div className='Home-container'>
                <div className="Home-slide Card-container">
                    <AnimatePresence initial={false} custom={direction}>
                        <motion.div
                            key={page}
                            custom={direction}
                            variants={variantsSlide}
                            initial="enter"
                            animate="center"
                            exit="exit"
                            transition={{
                                x: { type: "spring", stiffness: 300, damping: 30 },
                                opacity: { duration: 0.2 }
                            }}
                            drag="x"
                            dragConstraints={{ left: 0, right: 0 }}
                            dragElastic={1}
                            onDragEnd={(e, { offset, velocity }) => {
                                const swipe = swipePower(offset.x, velocity.x);
                                
                                if (swipe < -swipeConfidenceThreshold) {
                                    paginate(1);
                                } else if (swipe > swipeConfidenceThreshold) {
                                    paginate(-1);
                                }
                            }}
                        >
                            {(selectedId) &&
                                <Card
                                    selectedId={selectedId}
                                    pokemon={pokemon}
                                    onSound={onSound}
                                    logoType={logoType}
                                    pokemonBackground={pokemonBackground}
                                    closePokemonCard={closePokemonCard}
                                    playPokemonSound={playPokemonSound}
                                    shinnyOn={shinnyOn}
                                    setShinnyOn={setShinnyOn}
                                    selectedTab={selectedTab}
                                    changeSelectedTab={changeSelectedTab}
                                    pokemonData={pokemonData}
                                    onLoadDescription={onLoadDescription}
                                    setFamaleOn={setFamaleOn}
                                    famaleOn={famaleOn}
                                    infoShared={infoShared}
                                    tabDescriptionData={tabDescriptionData}
                                    generacion={generacion}
                                    pokedexPage={false}
                                    enableEffect={enableEffect}
                                    setEnableEffect={setEnableEffect}
                                />
                            }
                        </motion.div>
                    </AnimatePresence>

                    <motion.div className="next" onClick={() => paginate(1)} whileHover={{scale: 1.1}} whileTap={{scale: .9, opacity: .8}} >
                        <Arrow theme={theme} />
                    </motion.div>
                    <motion.div className="prev" onClick={() => paginate(-1)} whileHover={{scale: 1.1}} whileTap={{scale: .9, opacity: .8}} animate={{rotate: 180, transition: { duration: 0 } }}>
                        <Arrow theme={theme} />
                    </motion.div>
                </div>
            </div>
            <div className="Home-info_explain">
                <h3>{ENV.appDescription}</h3>
            </div>
        </Fragment>
    );
};

export { Home };