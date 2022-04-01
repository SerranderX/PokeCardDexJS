import React, {useEffect, useState, useContext} from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { AppContext } from '../../context/AppContext';
import { Card } from '../../containers/Card/Card';
import { Loading } from '../../components/Loading/Loading';
import { MiniCard } from '../../containers/MiniCard/MiniCard';
import './Characters.css';

const Characters = () => {
    const { 
        characters, 
        offSet, 
        loading, 
        error, 
        setPokedexPage, 
        pokedexPage, 
        handleSearch, 
        search,
        generacion,

        openPokemonCard,
        closePokemonCard, 
        selectedId,
        pokemonBackground,
        logoType,
        pokemon,
        selectedTab,
        changeSelectedTab,
        pokemonData,
        playPokemonSound,
        onSound,
        onLoadDescription,
        setShinnyOn,
        shinnyOn,
        setFamaleOn,
        famaleOn,
        infoShared,
        tabDescriptionData
    } = useContext(AppContext);
    const [pokemons, setPokemons] = useState([]);

    useEffect(() => {
        if(!pokedexPage) { setPokedexPage(true) }
        if(search.length > 0){
            const filteredPokemons = characters.filter(item => item.name.toLowerCase().includes(search.toLowerCase()));
            setPokemons(filteredPokemons);
        } else {
            setPokemons(characters);
        }
    }, [search, characters]);

    if(!loading && !error){
        return (
            <div className="Pokedex-container">
                <div className="Pokedex-container_head" >
                    <motion.input type="text" className="Search-box" name="Search-box" id="Search-box" placeholder="Search pokemon by name." value={search} onChange={handleSearch}/>
                    <p>Search any pokemon and click on the miniature to display the pokemon card data and pictures.</p>
                </div>
                <motion.div className="Pokedex-container_body">
                    {pokemons.map(( character, index ) => ( 
                        <MiniCard key={character.name} selectedId={selectedId} character={character} index={index} offSet={offSet} openPokemonCard={openPokemonCard} />
                    ))}

                    <AnimatePresence>
                        {selectedId && (
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
                            />
                        )}
                    </AnimatePresence>
                </motion.div>
            </div>
        )
    } else if(!loading && error) {
        return (
            <div className="Pokedex-container">
                <h1>Ha ocurrido un error...</h1>
            </div>
        );
    } else {
        return (<Loading/>);
    }
};

export { Characters };