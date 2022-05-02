import React, { useState } from 'react';
import { toUpperCaseIndex, transformString } from '@shared/Utils';
import { motion } from 'framer-motion';
import ArrowDown from '@icons/arrowDown'
import './Glosary.css';

const variants = {
    open: {
      height: 'auto',
      opacity: 1
    },
    closed: {
      height: 0,
      opacity: 0
    }
}

const Glosary = ({ pokemonPaletteColors, glosaryElements }) => {
    const [collapse, setCollapse] = useState(false);

    return (
        <div
          onClick={() => setCollapse(!collapse)}
          className={`Glosary`}
          style={{
            border: `3px ${pokemonPaletteColors.primary()} solid`,
            backgroundColor: collapse ? 'transparent' : pokemonPaletteColors.primary(),
          }}
        >
          <div className="Glosary-title-container">
            <h3 className="Glosary-title"> Glosary </h3>
            <motion.div
              className="Glorasy-icon"
              animate={{ rotate: collapse ? 180 : 0 }}
              transition={{ duration: 0 }}
            >
              <ArrowDown theme={'dark'} />
            </motion.div>
          </div>
          <motion.div
            className="Glosary-content"
            animate={collapse ? 'open' : 'closed'}
            variants={variants}
            initial={collapse}
            transition={{ duration: .3, ease: [0.04, 0.62, 0.23, 0.98] }}
          >
            {(glosaryElements && collapse) && glosaryElements.map( glosaryElement => (
              <div
                key={glosaryElement.name}
                className={`Glosary-types ${glosaryElement.name}-type`}
                style={{ borderTop: `1px ${pokemonPaletteColors.primary()} solid` }}
              >
                <h4>{`${glosaryElement.name} type`}</h4>
                {glosaryElement.data.map( item => (
                  <div 
                    className="Glosary_item" 
                    key={item.name}
                  >
                    <img src={item.src} alt={item.name} />
                    <p>{toUpperCaseIndex(transformString(item.name))}</p>
                  </div>
                ))}
              </div>
            ))}
          </motion.div>  
        </div>
    );
};

export { Glosary };