import React, { useRef, useContext, useState } from 'react';
import { AppContext } from '../../context/AppContext';
import { motion, useCycle } from 'framer-motion';
import { useDimensions } from '../../hooks/useDimensions';
import Button from '../../components/Button/Button';
import DarkIcon from '../../assets/icons/dark';
import LightIcon from '../../assets/icons/light';
import { Navigation } from '../Navigation/Navigation';
import { MenuToggle } from '../MenuToggle/MenuToggle';
import { MenuItem } from '../../components/MenuItem/MenuItem';
import { navMenu } from '../../shared/Utils';
import SubMenuItem from '../../components/SubMenuItem/SubMenuItem';
import PokemonLogo  from '../../assets/images/pokemon_logo.jsx';
import { ENV } from '../../shared/Env';
import { variantsSlideSideVar, varaintsThemeAnimation, variantsNavbar, titleNavBarVariant } from '../../shared/Animations';
import './Header.css';

const Header = () => {
    const { toggleTheme, theme, getGeneration, generacion, pokedexPage, closePokemonCard } = useContext(AppContext);

    const [isOpen, toggleOpen] = useCycle(false, true);
    const containerSideMenuRef = useRef(null);
    const { sideMenuRef } = useDimensions(containerSideMenuRef);
    const [expanded, setExpanded] = useState(0);
    const containerHeader = useRef(null);
    const { width } = useDimensions(containerHeader);
    
    const handleNavIconClick = () => {
        toggleOpen();
        if(expanded != false) { setExpanded(false) }
    }

    const handleGetGeneration = (generation) => {
        closePokemonCard()
        getGeneration(generation)
    }

    return (
        <div className='Header' ref={containerHeader}>
            <div className='Header-containerlogo'>
                <PokemonLogo />
                <h2>{ENV.appTitle}</h2>
            </div>
            { width > 768 && (
                <Button classType={`Theme-button`} toggle={() => toggleTheme()} animation={varaintsThemeAnimation(1)}>
                    {theme === 'dark' ? LightIcon({theme}) : DarkIcon({theme})}
                </Button>
            )}
            <motion.nav
                className={`navBar ${isOpen && 'open'}`}
                initial={false}
                animate={isOpen ? "open" : "closed"}
                custom={sideMenuRef}
                variants={variantsNavbar}
                ref={containerSideMenuRef}
            >
                <motion.h1 className={`navBar-title ${isOpen && 'open'}`} variants={titleNavBarVariant}>Menu</motion.h1>
                <motion.div className={`background ${isOpen && 'open'}`} variants={variantsSlideSideVar} />
                <Navigation animate={isOpen}>
                    {navMenu.map((item, index) => {
                        const subMenu = (item?.subMenu && pokedexPage) ?? false;

                        return (
                            <MenuItem theme={theme} i={index} key={item.name} data={item} expanded={expanded} setExpanded={setExpanded} hasSubMenu={subMenu}>
                                {(subMenu) && (
                                    <Navigation subMenu={true}>{(
                                        item.subMenu.map((subItem, subIndex) => {
                                            return (
                                                <SubMenuItem
                                                    generacion={generacion}
                                                    key={subItem.name}
                                                    data={subItem}
                                                    index={(subIndex + 1)}
                                                    getGeneracion={() => handleGetGeneration(subIndex + 1)}
                                                />
                                            )
                                        })
                                    )}</Navigation>
                                )}
                            </MenuItem>
                        )
                    })}
                </Navigation>
                <MenuToggle toggle={() => handleNavIconClick()} />
                { (width <= 768 && isOpen) && (
                    <Button classType={`Theme-button`} toggle={() => toggleTheme()} animation={varaintsThemeAnimation([.0, 1])}>
                        {theme === 'dark' ? LightIcon({theme}) : DarkIcon({theme})}
                    </Button>
                )}
            </motion.nav>
        </div>
    );
};

export { Header };