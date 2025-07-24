import React from 'react'
import HNavBar from '../../components/eat-out/HNavBar'
import Hero from '../../components/eat-out/Hero'
import Restaurant from '../../components/eat-out/Restaurants'
import Footer from '../../components/Footer'

const Home = () => {
  return (
    <div className='w-full bg-neutral-100'>
      <HNavBar/>
      <Hero/>
      <Restaurant/>
      <Footer/>
    </div>
  )
}

export default Home
