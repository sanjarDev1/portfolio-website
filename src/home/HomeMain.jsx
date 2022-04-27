import React from 'react'
import NavSec from './NavSec'
import Reveal from 'react-reveal/Reveal'
import AboutInfo from './AboutInfo'


function HomeMain() {
  return (
    <>
      <Reveal effect="animNav"  duration={750}>
            <NavSec />  
      </Reveal>
      <AboutInfo/>
    </>
  )
}

export default HomeMain