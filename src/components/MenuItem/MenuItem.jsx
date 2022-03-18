import { Fragment } from "react";
import { motion, AnimatePresence } from "framer-motion";
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
}

const variantsSection = {
  open: { opacity: 1, height: "auto" },
  collapsed: { opacity: 0, height: 0 }
}

export const MenuItem = ({ i, children, data, expanded, setExpanded, hasSubMenu, theme }) => {
  const isOpen = i === expanded;

  if(hasSubMenu === false){
    return (
      <Fragment>
        <motion.li 
          className="menu-item" 
          variants={variants} 
          whileHover={{ scale: 1.05 }} 
          whileTap={{ scale: 0.95, opacity: [0.5, 1] }} 
        >
          <div className="icon-placeholder icon-first">{data.icon(theme)}</div>
          <div className="text-placeholder">{data.name}</div>
        </motion.li>
      </Fragment>
    );
  } else {
    return (
      <Fragment>
        <motion.li 
          className="menu-item sub-items" 
          variants={variants} 
          whileHover={{ scale: 1.02 }} 
          //Collapse expand
          style={{ backgroundColor: isOpen ? "#457CD3" : "" }}
          onClick={() => setExpanded(isOpen ? false : i)}
        >
          <div className="icon-placeholder icon-first">{data.icon(theme)}</div>
          <div className="text-placeholder">{data.name}</div>
          <motion.div className="icon-placeholder" 
            animate={isOpen ? { rotate: -180, opacity: [0, 0, 1] } : { rotate: 0, opacity: [0, 0, 1] }}
            transition={{ duration: 0.2 }}
          >{data.iconDrag(theme)}</motion.div>
        </motion.li>
        <AnimatePresence initial={false}>
          {isOpen && (
            <motion.section
              key="content"
              initial="collapsed"
              animate="open"
              exit="collapsed"
              variants={variantsSection}
              transition={{ duration: .9, ease: [0.04, 0.62, 0.23, 0.98] }}
            >
              {children}
            </motion.section>
          )}
        </AnimatePresence>
      </Fragment>
    );
  }
};
