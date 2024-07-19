import React from 'react'
import Header from './Header'
import Section1 from '../pages/Home/Section1'
import Section2 from '../pages/Home/Section2';
import Section3 from '../pages/Home/Section3';
import Section4 from '../pages/Home/Section4';
import Section5 from '../pages/Home/Section5';
import Section6 from '../pages/Home/Section6';
import Section7 from '../pages/Home/Section7';
import Section8 from '../pages/Home/Section8';


function Home() {
  return (
    <div>
        <Header/>
      <Section1/>
      <Section2 />
      <Section3/>
      <Section4/>
      <Section5/>
      <Section6/>
      <Section7/>
      <Section8/>
    </div>
  )
}

export default Home;
