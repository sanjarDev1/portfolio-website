import React from 'react'
import { Reveal } from 'react-reveal'
import NavSec from '../home/NavSec'
import Footer from '../footer/footer'
import Main from './Main';
import PageInfo from './PageInfo'
function About() {
  return (
    <>
        <Reveal effect='animNav' duration ={750}>
            <NavSec/>
        </Reveal>
        <Reveal effect='fadeInUp' duration ={1250}>
            <PageInfo />
        </Reveal>
            <Main />
            <Footer/>
    </>
  )
}

export default About