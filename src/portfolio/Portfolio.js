import React from 'react';
import NavSec from '../home/NavSec'
import Reveal from 'react-reveal/Reveal'
import PageInfo from './pageInfo';
import Project from './Project';
import Footer from '../footer/footer';

function Portfolio() {
  return (
    <>
       <Reveal effect="animNav"  duration={750}>
            <NavSec />  
      </Reveal> 
      <Reveal effect='fadeInUp' duration={1250}>
            <PageInfo/>
      </Reveal>
      <Reveal effect='portfolioAnim' duration={1800}>
            <Project/>
      </Reveal>
      <Footer/>
    </>
  )
}

export default Portfolio