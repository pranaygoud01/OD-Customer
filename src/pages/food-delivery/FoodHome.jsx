import React from 'react'
import HeaderCarousel from '../../components/food-delivery/HCarousel'
import FoodNav from '../../components/food-delivery/FoodNav'
import Category from '../../components/food-delivery/Category'
import Footer from '../../components/Footer'
import Restaurant from '../../components/food-delivery/Restaurants'

const FoodHome = () => {
  return (
    <div className='bg-neutral-100'>
       <FoodNav/>
       <HeaderCarousel/>
       <Category/>
       <Restaurant/>
       <Footer/>
    </div>
  )
}

export default FoodHome
