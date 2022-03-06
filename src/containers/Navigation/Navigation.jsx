import * as React from "react";
import { motion } from "framer-motion";
import "./Navigation.css";

const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 }
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 }
  }
};

const Navigation = ({children, isOpen, subMenu}) => {
  if(subMenu === true) {
    return (
      <div className={`subMenu collapse`}>
        <motion.ul variants={variants} className={`subMenu-ul ${isOpen} && open`}>
          {children}
        </motion.ul>
      </div>
    );
  } else {
    return (
      <motion.ul variants={variants} className={`navBar-ul ${isOpen} && open`}>
        {children}
      </motion.ul>
    );
  }
};

export { Navigation };