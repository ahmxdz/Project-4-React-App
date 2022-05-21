import React from 'react'
import './About.css'
import mmeLogo from '../../imgs/mmelogo.jpeg'

function About() {
  return (
    <div className="about">
      <h1 className="title">About Us</h1>
      <img src={mmeLogo} alt="logo" />
      <p>
        Send Money easy and quickly through Mega Money Exchange founded in 2000. 
        With the best exchange rates and great customer service. Located in Mississauga.
      
      </p>
    </div>
  )
}

export default About