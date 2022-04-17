import React, { useContext, Fragment } from 'react'
import { AppContext } from '@context/AppContext'
import { HelmetSection } from '@components/HelmetSection/HelmetSection'
import DevelopmentImage from '@images/development.png'
import { ENV } from '@shared/Env'
import './About.css'

const About = () => {
  const { pokedexPage, setPokedexPage } = useContext(AppContext)

  if (pokedexPage) {
    setPokedexPage(false)
  }

  return (
    <Fragment>
      <HelmetSection sectionName={"About site and author"} />
      <div className="About-container">
        <div className="About-Title">
          <h1>{ENV.about.title}</h1>
        </div>
        <div className="About-Image">
          <img src={DevelopmentImage} alt="About-image" />
        </div>
        <p className="About-Text">{ENV.about.description}</p>
      </div>
    </Fragment>
  )
}

export { About }
