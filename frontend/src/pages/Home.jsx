import React from 'react'
import HeroSection from "../components/HeroSection"
import About from '../components/About'
import Qualities from '../components/Qualities'
import WhoAreWe from '../components/WhoAreWe'
import Menu from '../components/Menu'
import Team from '../components/Team'
import Reservation from '../components/Reservation'
import Footer from '../components/Footer'
const Home = () => {
  return (
    <>
        <HeroSection/>
        <About></About>
        <Qualities></Qualities>
        <Menu/>
        <WhoAreWe></WhoAreWe>
        <Team></Team>
        <Reservation></Reservation>
        <Footer></Footer>
    </>
  )
}

export default Home
