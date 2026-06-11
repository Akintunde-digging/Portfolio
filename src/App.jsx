import React, { useEffect } from 'react'
import Header from './components/header/header'
import HeroSection from './components/hero-section/herosection'
import AboutMe from './components/about/aboutme'
import Services from './components/services/services'
import MyApproach from './components/approach/approach'
import MyProjects from './components/projects/myprojects'
import GetInTouch from './components/contact/getintouch'
import Footer from './components/footer/footer'


const useDynamicFavicon = () => {
  useEffect(() => {
    const colors = [
      "#EF9F27", "#3C3489", "#ffffff", "#000000"
    ];
    const hex = colors[Math.floor(Math.random() * colors.length)];

    const canvas = document.createElement("canvas");
    canvas.width = canvas.height = 64;
    const ctx = canvas.getContext("2d");
    ctx.fillStyle = hex;
    ctx.beginPath();
    ctx.roundRect(0, 0, 64, 64, 13);
    ctx.fill();

    let link = document.querySelector("link[rel~='icon']");
    if (!link) {
      link = document.createElement("link");
      link.rel = "icon";
      document.head.appendChild(link);
    }
    link.type = "image/png";
    link.href = canvas.toDataURL("image/png");
  }, []);
};

const App = () => {
  useDynamicFavicon();
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