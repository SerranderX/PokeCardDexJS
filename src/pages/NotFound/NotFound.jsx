import React, { useContext, useEffect } from 'react'
import { AppContext } from '@context/AppContext'
import NotFoundImg from '@images/notfoundimg.png'
import './NotFound.css'

const NotFound = () => {
  const { pokedexPage, setPokedexPage } = useContext(AppContext)

  useEffect(() => {
    if(pokedexPage) { setPokedexPage(false) }
  }, [])

  return (
    <div className="NotFound-container">
      <h1>Error 404 - Not Found</h1>
      <img src={NotFoundImg} width="256" height="256" alt="404 - Not found image" />
      <p>Sorry, The site you are looking for doesn't exist or maybe has any trouble, please try latter.</p>
    </div>
  )
}

export default NotFound
