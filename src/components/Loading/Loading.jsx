import React from 'react'
import '@components/Loading/Loading.css'

const Loading = ({centered, miniCardLoading = false}) => {

  return (
    <div className={`Loading-container ${ centered && 'centered'} ${miniCardLoading && 'loading-card_container'}`}>
      <div className="load">
        <div className={`load-one ${miniCardLoading ? 'loading-card' : 'loading-page'}`}></div>
        <div className={`load-two ${miniCardLoading ? 'loading-card' : 'loading-page'}`}></div>
        <div className={`load-three ${miniCardLoading ? 'loading-card' : 'loading-page'}`}></div>
      </div>
    </div>
  )
}

export { Loading }
