import React, { Fragment, useContext, useState } from 'react'
import { AppContext } from '@context/AppContext'
import { motion } from 'framer-motion'
import '@containers/MenuToggle/MenuToggle.css'

const Path = (props) => (
  <motion.path
    fill="transparent"
    strokeWidth="3"
    strokeLinecap="round"
    {...props}
  />
)

const MenuToggle = ({ toggle, show }) => {
  const { theme } = useContext(AppContext)
  const [menuDesc, setMenuDesc] = useState(false)

  return (
    <Fragment>
      <button
        onClick={toggle} 
        onMouseEnter={() => setMenuDesc(!menuDesc)}
        onMouseLeave={() => setMenuDesc(!menuDesc)}
      >
        <svg width="23" height="23" viewBox="0 0 23 23">
          <Path
            stroke={theme === 'dark' ? 'hsl(0, 100%, 100%)' : 'hsl(0, 0%, 0%)'}
            variants={{
              closed: { d: 'M 2 2.5 L 20 2.5' },
              open: { d: 'M 3 16.5 L 17 2.5' },
            }}
          />
          <Path
            d="M 2 9.423 L 20 9.423"
            variants={{
              closed: { opacity: 1 },
              open: { opacity: 0 },
            }}
            stroke={theme === 'dark' ? 'hsl(0, 100%, 100%)' : 'hsl(0, 0%, 0%)'}
            transition={{ duration: 0.1 }}
          />
          <Path
            stroke={theme === 'dark' ? 'hsl(0, 100%, 100%)' : 'hsl(0, 0%, 0%)'}
            variants={{
              closed: { d: 'M 2 16.346 L 20 16.346' },
              open: { d: 'M 3 2.5 L 17 16.346' },
            }}
          />
        </svg>
          <motion.span 
            className="MenuToggle-description" 
            style={{color: theme === 'dark' ? 'white' : 'black'}} 
            animate={menuDesc && !show ? 'visible' : 'invisible'}
            variants={{visible: { opacity: 1 }, invisible: { opacity: 0 }}}
            transition={{ delay: .2 }}
          >
            Menu
          </motion.span>
      </button>
    </Fragment>
  )
}

export { MenuToggle }
