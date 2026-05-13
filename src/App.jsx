import React from 'react'
import Header from './components/header/header'
import HeroSection from './components/hero-section/herosection'
import AboutMe from './components/about/aboutme'
import Services from './components/services/services'
import MyApproach from './components/approach/approach'
import MyProjects from './components/projects/myprojects'
import GetInTouch from './components/contact/getintouch'
import Footer from './components/footer/footer'

const App = () => {
  return (
    <>
      <Header/>
      <HeroSection/>
      <AboutMe/>
      <Services/>
      <MyApproach/>
      <MyProjects/>
      <GetInTouch/>
      <Footer/>
    </>
  )
}

export default App