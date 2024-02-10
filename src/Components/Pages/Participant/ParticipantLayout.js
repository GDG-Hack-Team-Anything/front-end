import React from 'react'
import Navbar from './Navbar'
import Register from '../Auth/Register'
import {Outlet} from "react-router-dom"
import Footer from '../../Shared/Footer'

const ParticipantLayout = () => {
  return (
    <div className='max-w-[100vw] min-h-[100vh] bg-black2'>
        <Navbar />
        <Outlet />
        <Footer />
    </div>
  )
}

export default ParticipantLayout