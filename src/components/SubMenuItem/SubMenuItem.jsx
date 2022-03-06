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
    closed: {
        y: 50,
        opacity: 0,
        transition: {
            y: { stiffness: 1000 }
        }
    }
};

const SubMenuItem = ({ i, children, data, color, getGeneracion }) => {
    return (
        <motion.li
            className="sub-menu-item"
            variants={variants}
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