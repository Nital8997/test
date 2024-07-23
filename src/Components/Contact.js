import React from 'react'
import Leave from '../pages/contact/Leave'
import Map_location from '../pages/contact/Map_locations'
import Footer from '../Components/Footer'
import Header from '../Components/Header'
function Contact() {
  return (
    <div>
        <Header/>
        <Leave/>
        <Map_location />
        <Footer/>
    </div>
  )
}

export default Contact
