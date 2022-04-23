import React, { useState, useEffect, useContext } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { wrap } from 'popmotion'
import { variantsSlide, pokemonCard, swipePower, swipeConfidenceThreshold, slideButtonTapVariants, transitionSlideVariants } from '@containers/Slide/SlideUtils.js'
import { AppContext } from '@context/AppContext'
import Arrow from '@icons/arrowSlide.jsx'
import "@containers/Slide/Slide.css";

const Slide = ({children}) => {
  const {
    pokedexPage,
    setPokedexPage,
    getPokemonCard,
    theme,
    selectedId
  } = useContext(AppContext)

  const [[page, direction], setPage] = useState([0, 0])
  const pokemonCardIndex = wrap(0, pokemonCard.length, page)

  const paginate = (newDirection) => {
    setPage([page + newDirection, newDirection])
    getPokemonCard(pokemonCard[pokemonCardIndex])
  }

  useEffect(() => {
    if (pokedexPage) {
      setPokedexPage(false)
    }

    if (!selectedId) {
      paginate(1)
    }
  }, [])

  return (
      <div className="Slide">
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            key={page}
            custom={direction}
            variants={variantsSlide}
            initial="enter"
            animate="center"
            exit="exit"
            transition={transitionSlideVariants}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={3}
            onDragEnd={(e, { offset, velocity }) => {
              const swipe = swipePower(offset.x, velocity.x)

              if (swipe < -swipeConfidenceThreshold) {
                paginate(1)
              } else if (swipe > swipeConfidenceThreshold) {
                paginate(-1)
              }
            }}
          >
            {children}
          </motion.div>
        </AnimatePresence>

        <motion.div
          className="next"
          onClick={() => paginate(1)}
          whileHover={{ scale: 1.1 }}
          whileTap={slideButtonTapVariants}
        >
          <Arrow theme={theme} />
        </motion.div>
        <motion.div
          className="prev"
          onClick={() => paginate(-1)}
          whileHover={{ scale: 1.1 }}
          whileTap={slideButtonTapVariants}
          animate={{ rotate: 180, transition: { duration: 0 } }}
        >
          <Arrow theme={theme} />
        </motion.div>
      </div>
  );
};

export default Slide;