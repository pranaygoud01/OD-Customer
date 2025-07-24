import React from 'react'
import HNavBar from '../../components/eat-out/HNavBar'
import Hero from '../../components/eat-out/Hero'
import Restaurant from '../../components/eat-out/Restaurants'

const Home = () => {
  return (
    <div className='w-full'>
      <HNavBar/>
      <Hero/>
      <Restaurant/>
    </div>
  )
}

export default Home
