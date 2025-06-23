import React from 'react'
import Nav from './components/Nav.jsx'
import Hero from './components/Hero_banner.jsx'
import Section1 from './components/Section1.jsx'
import Section2 from './components/Section2.jsx'
import Section3 from './components/Section3.jsx'
import Section4 from './components/Section4.jsx'
import './styles/module.nav.css'
import './styles/module.hero.css'
import './styles/module.section1.css'
import './styles/module.section2.css'



const App = () => {
  return (
    <div>
      <Nav />
      <Hero />
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />

    </div>
  )
}

export default App
