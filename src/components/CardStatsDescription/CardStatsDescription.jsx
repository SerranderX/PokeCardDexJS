import React from 'react'
import { motion } from 'framer-motion'
import { toUpperCaseIndex } from '@shared/Utils'
import RadarGraph from '@components/RadarGraph/RadarGraph'
import './CardStatsDescription.css'

const CardStatsDescription = ({
  tabTitle,
  pokemon,
  pokemonBackground,
  selectedTab,
}) => {
  return (
    <React.Fragment>
      <section
        className="CharacterCard-Description-Title"
        style={{
          backgroundColor: pokemonBackground.secondary,
          borderBottom: `1px ${pokemonBackground.primary} solid`,
        }}
      >
        <motion.h1>{toUpperCaseIndex(tabTitle)}</motion.h1>
        <p>{selectedTab.description}</p>
      </section>
      <div className="CharacterCard-Description-Body">
        <motion.div className="Stat-Description-Graph_container">
          <RadarGraph
            stats={pokemon.stats}
            pokemonBackground={pokemonBackground}
          />
        </motion.div>
        <div className="Stat-Description-Table">
          <div
            className="Stat-Description-Table_head"
            style={{
              backgroundColor: pokemonBackground.secondary,
              border: `1px ${pokemonBackground.primary} solid`,
            }}
          >
            <table>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Base</th>
                  <th>Effort</th>
                </tr>
              </thead>
            </table>
          </div>
          <div
            className="Stat-Description-Table_body"
            style={{ border: `1px ${pokemonBackground.primary} solid` }}
          >
            <table>
              <tbody>
                {pokemon.stats.map((item) => (
                  <tr key={item.stat.name}>
                    <td
                      style={{
                        borderBottom: `1px ${pokemonBackground.primary} solid`,
                      }}
                    >
                      <b>{toUpperCaseIndex(item.stat.name)}</b>
                    </td>
                    <td
                      style={{
                        borderBottom: `1px ${pokemonBackground.primary} solid`,
                      }}
                    >
                      {item.base_stat}
                    </td>
                    <td
                      style={{
                        borderBottom: `1px ${pokemonBackground.primary} solid`,
                      }}
                    >
                      {item.effort}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default CardStatsDescription
