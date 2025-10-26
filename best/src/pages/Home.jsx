import React from 'react'
import Navbar from '../components/Client/Navbar'
import PlaceOrder from './PlaceOrder'
import Homepage from '../components/Client/Homepage'
import Categories from '../components/Client/Categories'
import Products from '../components/Client/Products'
import Fashion from '../components/Client/Fashion'
import FeaturedBrands from '../components/Client/FeaturedBrands'
import Footer from '../components/Client/Footer'
import Chat from '../components/Client/Chat'

const Home = () => {
  return (
    <div>
      <Navbar/>
      <Homepage/>
      <Categories/>
      <Products/>
      <Fashion/>
      <FeaturedBrands/>
      <Footer/>
      <Chat/>
      
      
      
    </div>
  )
}

export default Home