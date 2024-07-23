import React from 'react'
import Services from '../pages/About/Services'
import ServicesLogo from '../pages/About/ServicesLogo'
import Solution from '../pages/About/Solution'
import Works from '../pages/About/Works'
import Footer from '../Components/Footer'
import Header from '../Components/Header'

function About() {
  return (
    <div>
  <Header/>
  <Services/>
  <ServicesLogo/>
  <Solution/>
  <Works/>
  <Footer/>
    </div>
  )
}

export default About
