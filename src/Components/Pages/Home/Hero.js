import React from 'react'
import { useNavigate } from "react-router-dom";


export const Hero = () => {
    const navigate = useNavigate()
    const handleClick = () => {
        navigate("/admin/events")
    }

    const redirectAdmin =()=>{
        navigate("/admin/events")
    }
    const redirectParticipant =()=>{
        navigate('/participant/events')
    }

  return (
    <div className="relative">
    <div className='font-sansBold text-white text-center bg-black2 h-[85vh] w-[40vw] mx-auto flex flex-col items-center justify-center'>
        <img className='self-end w-[70px]' src='Rectangle 11.svg' alt='' />
        <h2 className='flex gap-4 text-[3rem] mr-[12rem]'>Good Experience <img className='w-[30px]' src='heroIcon.svg' /></h2>
        <h2 className='text-[3rem]  ml-[10rem]'>Successful Event</h2>
        <img className='w-[80px] self-start mb-[5rem]' src='Rectangle 10.svg' alt='' />
        <p className='font-sans mb-[5rem] w-[80%] '>Creating memorable moments that resonate with joy and success,
        your events bring participants, mentors, and judges together in a
        tapestry of inspiration.</p>
        <button onClick={redirectAdmin} className='flex justify-center items-center gap-2 bg-primary p-3 rounded-lg mb-[2rem]'>START THE JOURNEY(example as an admin) <img src='arrow.svg' alt='arrow' /></button>
        <button onClick={redirectParticipant} className='flex justify-center items-center gap-2 bg-primary p-3 rounded-lg'>START THE JOURNEY(example as a participant) <img src='arrow.svg' alt='arrow' /></button>
    </div>
        <img className='absolute bottom-[-20px] right-10  self-end' src="IconBackground.svg" />
    </div>
  )
}
