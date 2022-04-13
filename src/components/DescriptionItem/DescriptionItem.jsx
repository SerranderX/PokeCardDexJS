import React from 'react'
import './DescriptionItem.css'

const DescriptionItem = ({
  name,
  data,
  backgroundColor,
  borderColor,
  typesContainer,
  children,
}) => {
  return (
    <li
      className="Description-Item"
      style={{
        backgroundColor: backgroundColor,
        border: `1px ${borderColor} solid`,
      }}
    >
      <p className={`${typesContainer && 'Types-Container'} `}>
        <b>{name}: </b>
        {data && data}{' '}
      </p>
      {children && children}
    </li>
  )
}

export { DescriptionItem }
