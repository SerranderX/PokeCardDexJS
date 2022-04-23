import React, { useContext } from 'react'
import { motion } from 'framer-motion'
import { Link, useNavigate } from 'react-router-dom';
import { AppContext } from '@context/AppContext'
import GitHubIcon from '@icons/social/github'
import LinkedinIcon from '@icons/social/linkedin'
import TwitterIcon from '@icons/social/twitter'
import FacebookIcon from '@icons/social/facebook'
import { ENV } from '@shared/Env'
import './Footer.css'

const Footer = () => {
  const { theme, selectedId, validateCardToClose } = useContext(AppContext)
  const navigate = useNavigate();

  const handleHomeButton = () => {
    if(selectedId) { validateCardToClose() }
    navigate('/')
  }

  const handlePokedexButton = () => {
    if(selectedId) { validateCardToClose() }
    navigate('/pokedex')
  }
  
  return (
    <footer className="Footer-distributed">
      <div className="Footer-right">
        <motion.a
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          href={ENV.developerData.facebook}
        >
          <i className="fa fa-facebook">{FacebookIcon({ theme })}</i>
        </motion.a>
        <motion.a
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          href={ENV.developerData.twitter}
        >
          <i className="fa fa-twitter">{TwitterIcon({ theme })}</i>
        </motion.a>
        <motion.a
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          href={ENV.developerData.linkedin}
        >
          <i className="fa fa-linkedin">{LinkedinIcon({ theme })}</i>
        </motion.a>
        <motion.a
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          href={ENV.developerData.gitHub}
        >
          <i className="fa fa-github">{GitHubIcon({ theme })}</i>
        </motion.a>
      </div>
      <div className="Footer-left">
        <p className="Footer-links">
          <a onClick={handleHomeButton}>Home</a>
          <a onClick={handlePokedexButton}>Pokedex</a>
          <Link to="/about">About</Link>
        </p>
        <p>{ENV.developerData.signature} &copy; 2022</p>
      </div>
    </footer>
  )
}

export { Footer }
