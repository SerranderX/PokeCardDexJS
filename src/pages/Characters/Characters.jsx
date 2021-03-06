import React, { useEffect, useContext, useMemo, Fragment, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { AppContext } from '@context/AppContext'
import { Card } from '@containers/Card/Card'
import { Loading } from '@components/Loading/Loading'
import { MiniCard } from '@containers/MiniCard/MiniCard'
import { HelmetSection } from '@components/HelmetSection/HelmetSection'
import './Characters.css'

const Characters = () => {
  const {
    typesMiniCard,

    characters,
    offSet,
    loading,
    error,
    setPokedexPage,
    pokedexPage,
    handleSearch,
    search,

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
    tabDescriptionData,
    enableEffect,
    setEnableEffect,
    legendary,
    characterSelect
  } = useContext(AppContext)

  useEffect(() => {
    if(!pokedexPage) { setPokedexPage(true) }
  }, [])

  const filtredPokemons = useMemo(() => {
    let searchStr = "";
    if(typeof search !== 'string') {
      searchStr = search.toString();
    } else {
      searchStr = search;
    }

    return characters.filter((item) => {
        const nameAndTypesAndID = item.types.map((type) => type.type.name) + item.name + item.id.toString();
        return nameAndTypesAndID.toLowerCase().includes(searchStr.toLowerCase())
      }
    )
  }, [search, characters])

  if (!loading && !error) {
    return (
      <Fragment>
        <HelmetSection sectionName={"Pokedex"} />
        <div className="Pokedex-container">
          <div className="Pokedex-container_head">
            <motion.input
              type="text"
              className="Search-box"
              name="Search-box"
              id="Search-box"
              placeholder="Search pokemon by name or type."
              value={search}
              onChange={handleSearch}
            />
            <p>
              Search any pokemon and click on the miniature to display the pokemon
              card data and pictures.
            </p>
          </div>
          <motion.div className="Pokedex-container_body">
            {filtredPokemons.map((character, index) => (
              <MiniCard
                key={character.name}
                selectedId={selectedId}
                character={character}
                index={index}
                offSet={offSet}
                typesMiniCard={typesMiniCard}
                openPokemonCard={openPokemonCard}
                characterSelect={characterSelect}
              />
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
                  pokedexPage={pokedexPage}
                  enableEffect={enableEffect}
                  setEnableEffect={setEnableEffect}
                  legendary={legendary}
                />
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </Fragment>
    )
  } else if (!loading && error) {
    return (
      <Fragment>
        <HelmetSection sectionName={"Pokedex"} />
        <div className="Pokedex-container">
          <h1>Ha ocurrido un error...</h1>
        </div>
      </Fragment>
    )
  } else {
    return (
      <Fragment>
        <HelmetSection sectionName={"Pokedex"} />
        <Loading centered={true} />
      </Fragment>
    )  
  }
}

export default Characters
