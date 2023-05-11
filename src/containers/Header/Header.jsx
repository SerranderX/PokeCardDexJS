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
import { useOutsideClickEvent } from '@hooks/useOutsideClickEvent'
import { useWindowsDimensions } from '@hooks/useWindowsDimensions'

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
  const [menuDesc, setmMenuDesc] = useState(false)
  const { windowDimenion } = useWindowsDimensions()

  const handleNavIconClick = () => {
    toggleOpen()
    isOpen ? setExpanded(false) : setExpanded(1)
  }

  const handleGetGeneration = (generation) => {
    closePokemonCard()
    getGeneration(generation)
  }

  useOutsideClickEvent(containerSideMenuRef, isOpen, handleNavIconClick)

  return (
    <div className="Header">
      <div className="Header-containerlogo">
        <Link to="/" name="link-to-home">
          <PokemonLogo />
          <h2 className="Logo-text">{languageData.appTitle}</h2>
        </Link>
      </div>

      {windowDimenion.winWidth > 768 && (
        <Button
          classType={`Theme-button`}
          toggle={() => toggleTheme()}
          animation={varaintsThemeAnimation(1)}
          ariaLabel="change-theme-button"
          buttonHoverState={menuDesc}
          setButtonHoverState={setmMenuDesc}
        >
          {theme === 'dark' ? LightIcon({ theme }) : DarkIcon({ theme })}
          <motion.span
            style={{ color: theme === 'dark' ? 'white' : 'black' }}
            animate={menuDesc ? 'visible' : 'invisible'}
            variants={{ visible: { opacity: 1 }, invisible: { opacity: 0 } }}
            transition={{ delay: 0.2 }}
          >
            Theme
          </motion.span>
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
            label={`Auto card sound ${autoSound ? 'enabled' : 'disabled'}`}
            style={{ alignItems: 'center', margin: '5% 8% 0% 8%' }}
            variants={variantsNavSlideButton}
          />
          <SlideButton
            show={isOpen}
            state={typesMiniCard}
            handler={setTypesMiniCard}
            label={`Mini card types ${typesMiniCard ? 'enabled' : 'disabled'}`}
            style={{ alignItems: 'center', margin: '0% 8%' }}
            variants={variantsNavSlideButton}
          />
        </Navigation>
        <MenuToggle
          name="navigation-button"
          toggle={() => handleNavIconClick()}
          show={isOpen}
        ></MenuToggle>
        {windowDimenion.winWidth <= 768 && isOpen && (
          <Button
            classType={`Theme-button`}
            toggle={() => toggleTheme()}
            animation={varaintsThemeAnimation([0.0, 1])}
            ariaLabel="change-theme-button"
            buttonHoverState={menuDesc}
            setButtonHoverState={setmMenuDesc}
          >
            {theme === 'dark' ? LightIcon({ theme }) : DarkIcon({ theme })}
            <motion.span
              style={{ color: theme === 'dark' ? 'white' : 'black' }}
              animate={menuDesc && !isOpen ? 'visible' : 'invisible'}
              variants={{ visible: { opacity: 1 }, invisible: { opacity: 0 } }}
              transition={{ delay: 0.2 }}
            >
              Theme
            </motion.span>
          </Button>
        )}
      </motion.nav>
    </div>
  )
}

export { Header }
