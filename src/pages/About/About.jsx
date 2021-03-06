import React, { useContext, Fragment, useEffect } from 'react'
import { AppContext } from '@context/AppContext'
import { HelmetSection } from '@components/HelmetSection/HelmetSection'
import DevelopmentImage from '@images/development.png'
import { ENV } from '@shared/Env'
import { languageData } from '@shared/language'
import './About.css'

const About = () => {
  const { pokedexPage, setPokedexPage } = useContext(AppContext)

  const pokeApiLink = <a href={ENV.pokeApiURLPage}>PokeApi</a>;

  const pokemonShowdownLink = <a href={ENV.pokemonShowdown}>PokemonShowdown</a>;

  useEffect(() => {
    if(pokedexPage) { setPokedexPage(false) }
  }, [])

  return (
    <Fragment>
      <HelmetSection sectionName={"About site and author"} />
      <div className="About-container">
        <div className="About-Title">
          <h1>{languageData.about.titlePage}</h1>
        </div>
        <div className="About-Image">
          <img src={DevelopmentImage} alt="About-image" />
        </div>
        <div className="About-Content">
          <p className="About-Content_site">{languageData.about.descriptionPage(pokeApiLink, pokemonShowdownLink)}</p>
          
          <h1 className="About-Content_author-title">{languageData.about.titleAuthor}</h1>
          <p className="About-Content_author">{languageData.about.descriptionAuthor}</p>
        </div>
      </div>
    </Fragment>
  )
}

export default About
