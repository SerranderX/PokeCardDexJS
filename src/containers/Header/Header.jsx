import { Fragment, useRef, useContext } from 'react';
import { AppContext } from '../../context/AppContext';
import { motion, useCycle } from 'framer-motion';
import { useDimensions } from '../../hooks/useDimensions';
import Button from '../../components/Button/Button';
import DarkIcon from '../../assets/icons/dark.svg';
import LightIcon from '../../assets/icons/light.svg';
import { Navigation } from '../Navigation/Navigation';
import { MenuToggle } from '../MenuToggle/MenuToggle';
import { MenuItem } from '../../components/MenuItem/MenuItem';
import { navMenu } from '../../shared/Utils';
import './Header.css';
import SubMenuItem from '../../components/SubMenuItem/SubMenuItem';

const sidebar = {
    open: (height = 1000) => ({
        clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
        transition: {
            type: "spring",
            stiffness: 20,
            restDelta: 2
        }
    }),
    closed: {
        clipPath: "circle(30px at 40px 40px)",
        transition: {
            delay: 0.5,
            type: "spring",
            stiffness: 400,
            damping: 40
        }
    }
};

const Header = ({ getGeneracion, logoGeneracion, setGeneracion }) => {
    const { toggleTheme, theme } = useContext(AppContext);
    const [isOpen, toggleOpen] = useCycle(false, true);
    const containerRef = useRef(null);
    const { height } = useDimensions(containerRef);
    const icon = theme === 'dark' ? DarkIcon : LightIcon;

    const buttonAnimation = {
        whileHover: {
            scale: 1.1,
            transition: {
                duration: .3,
                ease: "easeInOut"
            }
        },
        whileTap: {
            scale: 0.9
        }
    }

    const themeAnimation = {
        whileTap: {
            scale: 0.1,
            transition: {
                duration: .3,
                ease: "easeInOut"
            }
        },
        animate: {
            scale: 1,
            transition: {
                duration: .3,
                ease: "easeInOut"
            }
        }
    }

    const colors = ["#FF008C", "#D309E1", "#9C1AFF", "#7700FF", "#4400FF", "#4400FF"];

    return (
        <div className='Header'>
            <h1>PokeCardDexJS</h1>
            <Button classType={`Theme-button`} toggle={() => toggleTheme()} animation={themeAnimation}>
                <motion.img
                    src={icon}
                    alt='Theme-icon'
                    className={`Theme-icon ${(theme === 'dark') && 'Dark-theme'}`}
                />
            </Button>
            <motion.nav
                className={`navBar ${isOpen && 'open'}`}
                initial={false}
                animate={isOpen ? "open" : "closed"}
                custom={height}
                ref={containerRef}
            >
                <motion.div className="background" variants={sidebar} />
                <Navigation animate={isOpen}>
                    {navMenu.map((item, index) => {
                        return (
                            <MenuItem i={index} key={item.name} data={item} color={colors[index]}>
                                {(item?.subMenu) && (
                                    <Navigation animate={isOpen} subMenu={true}>{(
                                        item.subMenu.map((subItem, subIndex) => {
                                            return (
                                                <SubMenuItem 
                                                    i={subIndex} 
                                                    key={subItem.name} 
                                                    data={subItem} 
                                                    color={colors[subIndex]} 
                                                    getGeneracion={() => getGeneracion(subIndex + 1)}
                                                />
                                            )
                                        })
                                    )}</Navigation>
                                )}
                            </MenuItem>
                        )
                    })}
                </Navigation>
                <MenuToggle toggle={() => toggleOpen()} />
            </motion.nav>
        </div>
    );

    //             <nav className='Header-navigator'>
    //                 <Button animation={buttonAnimation} classType={`Header-Button`} toggle={() => getGeneracion(1)}>
    //                     <p>Generation I</p>
    //                     <div className="Header-Button-img_container">
    //                         <img src='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png' alt='Generation-PK-1' />
    //                         <img src='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png' alt='Generation-PK-4' />
    //                         <img src='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png' alt='Generation-PK-7' />
    //                     </div>
    //                 </Button>
    //                 <Button animation={buttonAnimation} classType={`Header-Button`} toggle={() => getGeneracion(2)}>
    //                     <p>Generation II</p>
    //                     <div className="Header-Button-img_container">
    //                         <img src='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/152.png' alt='Generation-PK-1' />
    //                         <img src='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/155.png' alt='Generation-PK-4' />
    //                         <img src='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/158.png' alt='Generation-PK-7' />
    //                     </div>
    //                 </Button>
    //                 <Button animation={buttonAnimation} classType={`Header-Button`} toggle={() => getGeneracion(3)}>
    //                     <p>Generation III</p>
    //                     <div className="Header-Button-img_container">
    //                         <img src='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/252.png' alt='Generation-PK-1' />
    //                         <img src='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/255.png' alt='Generation-PK-4' />
    //                         <img src='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/258.png' alt='Generation-PK-7' />
    //                     </div>
    //                 </Button>
    //                 <Button animation={buttonAnimation} classType={`Header-Button`} toggle={() => getGeneracion(4)}>
    //                     <p>Generation IV</p>
    //                     <div className="Header-Button-img_container">
    //                         <img src='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/387.png' alt='Generation-PK-1' />
    //                         <img src='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/390.png' alt='Generation-PK-4' />
    //                         <img src='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/393.png' alt='Generation-PK-7' />
    //                     </div>
    //                 </Button>
    //                 <Button animation={buttonAnimation} classType={`Header-Button`} toggle={() => getGeneracion(5)}>
    //                     <p>Generation V</p>
    //                     <div className="Header-Button-img_container">
    //                         <img src='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/495.png' alt='Generation-PK-1' />
    //                         <img src='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/498.png' alt='Generation-PK-4' />
    //                         <img src='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/501.png' alt='Generation-PK-7' />
    //                     </div>
    //                 </Button>
    //                 <Button animation={buttonAnimation} classType={`Header-Button`} toggle={() => getGeneracion(6)}>
    //                     <p>Generation VI</p>
    //                     <div className="Header-Button-img_container">
    //                         <img src='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/650.png' alt='Generation-PK-1' />
    //                         <img src='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/653.png' alt='Generation-PK-4' />
    //                         <img src='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/656.png' alt='Generation-PK-7' />
    //                     </div>
    //                 </Button>
    //                 <Button animation={buttonAnimation} classType={`Header-Button`} toggle={() => getGeneracion(7)}>
    //                     <p>Generation VII</p>
    //                     <div className="Header-Button-img_container">
    //                         <img src='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/722.png' alt='Generation-PK-1' />
    //                         <img src='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/725.png' alt='Generation-PK-4' />
    //                         <img src='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/728.png' alt='Generation-PK-7' />
    //                     </div>
    //                 </Button>
    //                 <Button animation={buttonAnimation} classType={`Header-Button`} toggle={() => getGeneracion(8)}>
    //                     <p>Generation VIII</p>
    //                     <div className="Header-Button-img_container">
    //                         <img src='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/810.png' alt='Generation-PK-1' />
    //                         <img src='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/813.png' alt='Generation-PK-4' />
    //                         <img src='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/816.png' alt='Generation-PK-7' />
    //                     </div>
    //                 </Button>
    //             </nav>
};

export default Header;