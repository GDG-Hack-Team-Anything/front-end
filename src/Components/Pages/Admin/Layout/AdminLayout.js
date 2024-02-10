import React from 'react'
import {Outlet} from 'react-router-dom'
import Navbar from './Navbar'
import Footer from '../../../Shared/Footer'

const AdminLayout = () => {
  return (
    <div className='max-w-[100vw] min-h-[100vh] bg-black2'> 
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  )
}

export default AdminLayout