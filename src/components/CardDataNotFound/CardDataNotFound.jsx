import React from 'react'
import Warning from "@images/warning.png"
import "@components/CardDataNotFound/CardDataNotFound.css"

const CardDataNotFound = () => {
  return (
    <section className="CharacterCard-Description_NotFound">
      <img src={Warning} alt="warning-section-img"></img>
      <h4>Sorry, but this section is in maintenance.</h4>
    </section>
  )
}

export default CardDataNotFound
