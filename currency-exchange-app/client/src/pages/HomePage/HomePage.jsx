import React from 'react'
import './HomePage.css'
import mmeTransparent from '../../imgs/mmetransparent.png'


function HomePage() {

  return (
    <div>
      <h1 className="welcome-title">Welcome to Mega Money Exchange </h1>
    <img src={mmeTransparent} alt="logo" className="mme-logo-homepage" />
    </div>
  )
}

export default HomePage  