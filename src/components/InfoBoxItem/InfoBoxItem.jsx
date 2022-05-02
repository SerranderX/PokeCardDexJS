import React, { useState, Fragment, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import ArrowDown from '@icons/arrowDown'
import { transformString, toUpperCaseIndex } from '@shared/Utils'
import './InfoBoxItem.css'
import axios from 'axios'

const InfoBoxItem = ({
  children,
  content,
  pokemonBackground,
  endPoint,
  powerTypes,
  movesItem
}) => {
  const [isOpen, setIsOpen] = useState(false)
  const [isOpenEndPoint, setIsOpenEndPoint] = useState(false)
  const [contentRes, setContentRes] = useState(null)

  const toggleOpen = () => {
    if (!endPoint) {
      setIsOpen(!isOpen)
    } else {
      if (!contentRes) {
        setIsOpenEndPoint(true)
      } else {
        setIsOpen(!isOpen)
      }
    }
  }

  const getPowerTypeIcon = (nameType) => {
    const powerTypeFiltred = powerTypes.filter(
      (powerType) => nameType === powerType.name
    )
    return powerTypeFiltred.length > 0 ? (
      <img
        src={powerTypeFiltred[0].src}
        alt={powerTypeFiltred[0].name}
        width="32"
        height="22"
      />
    ) : null
  }

  useEffect(() => {
    const fetchData = async (url) => {
      const res = await axios
        .get(url)
        .then((response) => response.data)
        .catch(() => null)
      setContentRes(res)
      setIsOpen(!isOpen)
    }

    if (isOpenEndPoint && !contentRes) {
      fetchData(endPoint)
    }
  }, [isOpenEndPoint])


  return (
    <Fragment>
      <motion.li
        layout
        onClick={toggleOpen}
        className="InfoBox-item"
        whileTap={{ scale: 0.9 }}
      >
        <div
          className={`InfoBox-item_title`}
          style={{ backgroundColor: pokemonBackground.primary() }}
        >
          <div
            className={`InfoBox-item_content ${
              movesItem && 'InfoBox-item_icon'
            }`}
          >
            {children}
          </div>
          <motion.div
            className="InfoBox-item_icon"
            animate={{ rotate: isOpen ? 180 : 0 }}
            transition={{ duration: 0.5 }}
          >
            <ArrowDown theme={'dark'} />
          </motion.div>
        </div>
      </motion.li>
      <AnimatePresence>
        {isOpen && (
          <motion.li
            layout
            initial="collapsed"
            animate="open"
            exit="collapsed"
            variants={{
              open: { opacity: 1, height: 'auto' },
              collapsed: { opacity: 0, height: 0 },
            }}
            transition={{ duration: 0.5, ease: [0.04, 0.62, 0.23, 0.98] }}
            className="InfoBox-item-col_content"
          >
            <p>{content}</p>
            {contentRes !== null && (
              <ul className="Move-Data_ul">
                <li
                  style={{
                    borderBottom: `1px ${pokemonBackground.primary()} solid`,
                  }}
                >
                  <p>
                    <b>Power: </b>
                    {contentRes.power}
                  </p>
                </li>
                <li
                  style={{
                    borderBottom: `1px ${pokemonBackground.primary()} solid`,
                  }}
                >
                  <p>
                    <b>PP: </b>
                    {contentRes.pp}
                  </p>
                </li>
                <li
                  style={{
                    borderBottom: `1px ${pokemonBackground.primary()} solid`,
                  }}
                >
                  <p>
                    <b>Type: </b>{' '}
                    {getPowerTypeIcon(contentRes.damage_class?.name)}{' '}
                  </p>
                </li>
                <li
                  style={{
                    borderBottom: `1px ${pokemonBackground.primary()} solid`,
                  }}
                >
                  <p>
                    <b>Effect: </b>
                    {transformString(contentRes.effect_entries[0].short_effect)}
                  </p>
                </li>
                {contentRes.contest_type?.name && (
                  <li
                    style={{
                      borderBottom: `1px ${pokemonBackground.primary()} solid`,
                    }}
                  >
                    <p>
                      <b>Contest type: </b>
                      {toUpperCaseIndex(contentRes.contest_type?.name)}
                    </p>
                  </li>
                )}
                {contentRes.contest_type?.name && (
                  <li
                    style={{
                      borderBottom: `1px ${pokemonBackground.primary()} solid`,
                    }}
                  >
                    <p>
                      <b>Target: </b>
                      {toUpperCaseIndex(contentRes.target?.name)}
                    </p>
                  </li>
                )}
                <li>
                  <p>
                    <b>Description: </b>
                    {contentRes.flavor_text_entries[0].flavor_text}
                  </p>
                </li>
              </ul>
            )}
          </motion.li>
        )}
      </AnimatePresence>
    </Fragment>
  )
}

export { InfoBoxItem }
