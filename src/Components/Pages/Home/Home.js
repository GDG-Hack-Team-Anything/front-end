import React from 'react'
import Navbar from './Navbar'
import { Hero } from './Hero'

const Home = () => {
  return (
    <div className='bg-black2 h-[100vh] w-[100vw]'>
        <Navbar />
        <Hero />
    </div>
  )
}

export default Home