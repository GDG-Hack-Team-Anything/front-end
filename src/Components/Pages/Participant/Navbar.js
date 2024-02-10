import React from 'react'

const Navbar = () => {
  return (
    <div className='flex justify-between px-[5rem]  w-full h-[100px]'>
        <img className='w-[150px]' src="/logo.svg" alt="" />
        <div className='flex gap-5 text-white items-center'>
            <img className='w-[40px]' src="/Frame 67.svg" alt="" />
            <p>user id</p>
        </div>
    </div>
  )
}

export default Navbar