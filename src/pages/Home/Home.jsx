import React, { useState, useContext } from 'react';
import { AppContext } from '../../context/AppContext';
import { motion, AnimatePresence } from "framer-motion";
import { wrap } from "popmotion";
import Arrow from '../../assets/icons/arrowRight.jsx';
import { ENV } from '../../shared/Env';
import { variantsSlide } from '../../shared/Animations.js';
import './Home.css';

const swipeConfidenceThreshold = 10000;
const swipePower = (offset, velocity) => {
  return Math.abs(offset) * velocity;
};

const images = [
  "https://d33wubrfki0l68.cloudfront.net/dd23708ebc4053551bb33e18b7174e73b6e1710b/dea24/static/images/wallpapers/shared-colors@2x.png",
  "https://d33wubrfki0l68.cloudfront.net/49de349d12db851952c5556f3c637ca772745316/cfc56/static/images/wallpapers/bridge-02@2x.png",
  "https://d33wubrfki0l68.cloudfront.net/594de66469079c21fc54c14db0591305a1198dd6/3f4b1/static/images/wallpapers/bridge-01@2x.png"
];

const Home = () => {
    const [[page, direction], setPage] = useState([0, 0]);
    const imageIndex = wrap(0, images.length, page);

    const { pokedexPage, setPokedexPage, theme } = useContext(AppContext);

    const paginate = (newDirection) => {
      setPage([page + newDirection, newDirection]);
    };

    if(pokedexPage) { setPokedexPage(false) }

    return (
        <div className='Home-container'>
            <div className="Home-slide">
                <AnimatePresence initial={false} custom={direction}>
                    <motion.img
                        key={page}
                        src={images[imageIndex]}
                        custom={direction}
                        variants={variantsSlide}
                        initial="enter"
                        animate="center"
                        exit="exit"
                        transition={{
                            x: { type: "spring", stiffness: 300, damping: 30 },
                            opacity: { duration: 0.2 }
                        }}
                        drag="x"
                        dragConstraints={{ left: 0, right: 0 }}
                        dragElastic={1}
                        onDragEnd={(e, { offset, velocity }) => {
                            const swipe = swipePower(offset.x, velocity.x);

                            if (swipe < -swipeConfidenceThreshold) {
                                paginate(1);
                            } else if (swipe > swipeConfidenceThreshold) {
                                paginate(-1);
                            }
                        }}
                    />
                </AnimatePresence>
                <motion.div className="next" onClick={() => paginate(1)} whileHover={{scale: 1.1}} whileTap={{scale: .9, opacity: .8}} >
                    <Arrow theme={theme} />
                </motion.div>
                <motion.div className="prev" onClick={() => paginate(-1)} whileHover={{scale: 1.1}} whileTap={{scale: .9, opacity: .8}} animate={{rotate: 180, transition: { duration: 0 } }}>
                    <Arrow theme={theme} />
                </motion.div>
            </div>
            <div className="Home-info">
                <h3>{ENV.appPresentation}</h3>
            </div>
        </div>
    );
};

export { Home };    