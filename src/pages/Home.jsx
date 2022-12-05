import React from 'react'
import Announcement from '../components/Announcement'
import Categories from '../components/Categories'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Newletters from '../components/Newletters'
import Products from '../components/Products'
import Slider from '../components/Slider'


function Home() {
  return (
    <div>
        <Announcement/>
        <Navbar/>
        <Slider/>
        <Categories/>
        <Products/>
        <Newletters/>
        <Footer/>
    </div>
  )
}

export default Home