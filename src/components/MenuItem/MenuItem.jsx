import { Fragment } from "react";
import { motion } from "framer-motion";
import Icon from "../../assets/icons/dark.svg";
import "./MenuItem.css";

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


export const MenuItem = ({ i, children, data, color }) => {
  return (
    <Fragment>
      <motion.li 
        className="menu-item" 
        variants={variants} 
        whileHover={{ scale: 1.1 }} 
        whileTap={{ scale: 0.95 }} 
      >
        <div className="icon-placeholder"><motion.img src={Icon} /></div>
        <div className="text-placeholder">{data.name}</div>
      </motion.li>
        {children}  
    </Fragment>
  );
};
