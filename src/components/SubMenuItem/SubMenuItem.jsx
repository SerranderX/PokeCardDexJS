import React from 'react';
import { motion } from 'framer-motion';
import "./SubMenuItem.css";

const variants = {
    open: {
      y: 0,
      opacity: 1,
      transition: {
        y: { stiffness: 1000, velocity: -100 }
      }
    },
    collapsed: {
      y: -20,
      opacity: 0,
      transition: {
        y: { stiffness: 1000 },
        duration: 0.2
      }
    }
  }

const SubMenuItem = ({ data, getGeneracion }) => {
    return (
        <motion.li
            variants={variants}
            className="sub-menu-item"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={getGeneracion}
        >
            <div className="sub-icon-placeholder"><motion.img src={data.icons[0].url} /></div>
            <div className="sub-text-placeholder">{data.name}</div>
        </motion.li>
    );
};

export default SubMenuItem;