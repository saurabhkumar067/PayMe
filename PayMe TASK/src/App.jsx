import React from 'react'
import Navbar from './components/navbar/Navbar'
import HeroSection from './components/Hero/HeroSection'
import Logo from './components/company/Partners'
import Data from './components/commitments/Data'
import Banner from './components/CTA/BannerData'
import Works from './components/HowItWorks/WorksData'
import OurWork from './components/OurWork'
import Banner2 from './components/CTA-2/Banner-2'
import HelpData from './components/Help/HelpData'
import BottomData from './components/Bottom/BottomData'
import FooterData from './components/Footer/FooterData'

function App() {
  return (
    <>
    <Navbar/>
    <HeroSection/>
    <Logo/>
    <Data/>
    <Banner/>
    <Works/>
    <OurWork/>
    <Banner2/>
    <HelpData/>
    <BottomData/>
    <FooterData/>
</>
  )
}

export default App
