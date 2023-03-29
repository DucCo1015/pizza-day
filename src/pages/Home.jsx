import React from 'react'
import HeroSlider from '../components/UI/HeroSlider'
import '../style/home.css'
import PopularMenu from '../components/Popular/PopularMenu'
import ChooseUs from '../components/Choose-us/ChooseUs'
import MenuPack from '../components/Menu-Pack/MenuPack'
import Testimonials from '../components/Testimonials/Testimonials'
import DownloadSection from '../components/download-section/DownloadSection'

const Home = () => {
  return (
    <div className='home'>
      <section>
        <HeroSlider/>
        <PopularMenu />
        <ChooseUs/>
        <MenuPack/>
        <Testimonials/>
        <DownloadSection/>
      </section>
    </div>
  )
}

export default Home