import React from 'react';
import { motion } from "framer-motion";
import "./Navigation.css";

const variantsNav = ({closedType}) => ({
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 }
  },
  [closedType]: {
    transition: { staggerChildren: 3, staggerDirection: -1 }
  }
});

const Navigation = ({children, subMenu, parentIndex, expanded}) => {

  if(subMenu === true) {
    return (
      <div className={`subMenu collapse`}>
        <motion.ul variants={variantsNav('close')} className={`subMenu-ul`}>
          {children}
        </motion.ul>
      </div>
    );
  } else {
    return (
      <motion.ul variants={variantsNav('collapsed')} className={`navBar-ul`}>
        {children}
      </motion.ul>
    );
  }
};

export { Navigation };