import React, { useRef, useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, useCycle } from 'framer-motion'
import { AppContext } from '@context/AppContext'
import { useDimensions } from '@hooks/useDimensions'
import Button from '@components/Button/Button'
import DarkIcon from '@icons/dark'
import LightIcon from '@icons/light'
import { Navigation } from '@containers/Navigation/Navigation'
import { MenuToggle } from '@containers/MenuToggle/MenuToggle'
import { MenuItem } from '@components/MenuItem/MenuItem'
import { navMenu } from '@shared/Utils'
import SubMenuItem from '@components/SubMenuItem/SubMenuItem'
import PokemonLogo from '@images/pokemon_logo.jsx'
import { ENV } from '@shared/Env'
import { languageData } from '@shared/language'
import {
  variantsSlideSideVar,
  varaintsThemeAnimation,
  variantsNavbar,
  titleNavBarVariant,
  variantsNavSlideButton,
} from '@shared/Animations'
import './Header.css'
import { SlideButton } from '@components/SlideButton/SlideButton'

const Header = () => {
  const {
    typesMiniCard,
    setTypesMiniCard,

    toggleTheme,
    theme,
    getGeneration,
    generacion,
    pokedexPage,
    closePokemonCard,
    autoSound,
    setAutoSound,
  } = useContext(AppContext)

  const [isOpen, toggleOpen] = useCycle(false, true)
  const containerSideMenuRef = useRef(null)
  const { sideMenuRef } = useDimensions(containerSideMenuRef)
  const [expanded, setExpanded] = useState(false)
  const containerHeader = useRef(null)
  const { width } = useDimensions(containerHeader)

  const handleNavIconClick = () => {
    toggleOpen()
    isOpen ? setExpanded(false) : setExpanded(1)
  }

  const handleGetGeneration = (generation) => {
    closePokemonCard()
    getGeneration(generation)
  }

  return (
    <div className="Header" ref={containerHeader}>
        <div className="Header-containerlogo">
          <Link to="/" name="link-to-home">
            <PokemonLogo />
            <h2 className="Logo-text">{languageData.appTitle}</h2>
          </Link>
        </div>

      {width > 768 && (
        <Button
          name="change-theme-button"
          classType={`Theme-button`}
          toggle={() => toggleTheme()}
          animation={varaintsThemeAnimation(1)}
        >
          {theme === 'dark' ? LightIcon({ theme }) : DarkIcon({ theme })}
        </Button>
      )}
      <motion.nav
        className={`navBar ${isOpen && 'open'}`}
        initial={false}
        animate={isOpen ? 'open' : 'closed'}
        custom={sideMenuRef}
        variants={variantsNavbar}
        ref={containerSideMenuRef}
      >
        <motion.h1
          className={`navBar-title ${isOpen && 'open'}`}
          variants={titleNavBarVariant}
        >
          Menu
        </motion.h1>
        <motion.div
          className={`background ${isOpen && 'open'}`}
          variants={variantsSlideSideVar}
        />
        <Navigation animate={isOpen}>
          {navMenu.map((item, index) => {
            const subMenu = (item?.subMenu && pokedexPage) ?? false

            return (
              <MenuItem
                theme={theme}
                i={index}
                key={item.name}
                data={item}
                expanded={expanded}
                setExpanded={setExpanded}
                hasSubMenu={subMenu}
              >
                {subMenu && (
                  <Navigation subMenu={true}>
                    {item.subMenu.map((subItem, subIndex) => {
                      return (
                        <SubMenuItem
                          generacion={generacion}
                          key={subItem.name}
                          data={subItem}
                          index={subIndex + 1}
                          getGeneracion={() =>
                            handleGetGeneration(subIndex + 1)
                          }
                        />
                      )
                    })}
                  </Navigation>
                )}
              </MenuItem>
            )
          })}
          <SlideButton
            show={isOpen}
            state={autoSound}
            handler={setAutoSound}
            label={`Auto card sound ${(autoSound) ? 'enabled' : 'disabled'}`}
            style={{ alignItems: 'center', margin: '5% 8% 0% 8%' }}
            variants={variantsNavSlideButton}
          />
          <SlideButton
            show={isOpen}
            state={typesMiniCard}
            handler={setTypesMiniCard}
            label={`Mini card types ${(typesMiniCard) ? 'enabled' : 'disabled'}`}
            style={{ alignItems: 'center', margin: '0% 8%' }}
            variants={variantsNavSlideButton}
          />

        </Navigation>
        <MenuToggle name="navigation-button" toggle={() => handleNavIconClick()} />
        {width <= 768 && isOpen && (
          <Button
            name="change-theme-button"
            classType={`Theme-button`}
            toggle={() => toggleTheme()}
            animation={varaintsThemeAnimation([0.0, 1])}
          >
            {theme === 'dark' ? LightIcon({ theme }) : DarkIcon({ theme })}
          </Button>
        )}
      </motion.nav>
    </div>
  )
}

export { Header }
