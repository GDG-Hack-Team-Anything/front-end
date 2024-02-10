import React, { useEffect, useState } from 'react'
import {useNavigate ,useParams}from "react-router-dom"
import EventCard from './EventCard'

const Events = () => {
    
    const mockEventData = [
        { id: 1, name: 'Event 1', status: 'Finished' ,img:"/Rectangle 12.svg" },
        { id: 2, name: 'Event 2', status: 'Inactive',img:"/Rectangle 12.svg" },
        { id: 3, name: 'Event 3', status: 'Upcoming',img:"/Rectangle 12.svg" },
        // Add more events as needed
      ];
    const [popUp,setPopUp] = useState(false)
    const [events,setEvents] = useState(mockEventData)


    const addEvent = ()=>{
        setPopUp(true)
    }

    const navigate = useNavigate()



    
      
    useEffect(()=>{
        const fetchData = async ()=>{
            const response = await fetch("",{

            })
            const data = await response.json()
            setEvents(data)
        }
        fetchData()
        setEvents(mockEventData)
    },[])


  return (
    <div className='relative w-full p-[3rem]'>
        <div className='font-sansBold flex items-center justify-between text-white px-[10rem] w-full'>
            <p className='text-xl'>Recent Events</p>
        </div>
        {/* cards section */}
        <div className='grid grid-cols-3 gap-10 mt-14 px-[5rem]'>
            {/* <div className='bg-black3 h-[15vw] border-none rounded-md cursor-pointer'>
                <div className='h-[75%]'></div>
                <div className='h-[25%] bg-black1 rounded-b-md flex justify-between px-10 items-center'>
                    <p className='font-sansBold text-md text-white'> Devfest 23</p>
                    <p className='font-sans text-green-700 '> finished </p>
                </div>
            </div>
            <div className='bg-black3 h-[15vw] border-none rounded-md cursor-pointer'>
                <div className='h-[75%]'></div>
                <div className='h-[25%] bg-black1 rounded-b-md flex justify-between px-10 items-center'>
                    <p className='font-sansBold text-md text-white'> Devfest 23</p>
                    <p className='font-sans text-green-700 '> finished </p>
                </div>
            </div>
            <div className='bg-black3 h-[15vw] border-none rounded-md cursor-pointer'>
                <div className='h-[75%]'></div>
                <div className='h-[25%] bg-black1 rounded-b-md flex justify-between px-10 items-center'>
                    <p className='font-sansBold text-md text-white'> Devfest 23</p>
                    <p className='font-sans text-green-700 '> finished </p>
                </div>
            </div>
            <div className='bg-black3 h-[15vw] border-none rounded-md cursor-pointer'>
                <div className='h-[75%]'></div>
                <div className='h-[25%] bg-black1 rounded-b-md flex justify-between px-10 items-center'>
                    <p className='font-sansBold text-md text-white'> Devfest 23</p>
                    <p className='font-sans text-green-700 '>finished </p>
                </div>
            </div>
            <div className='bg-black3 h-[15vw] border-none rounded-md cursor-pointer'>
                <div className='h-[75%]'></div>
                <div className='h-[25%] bg-black1 rounded-b-md flex justify-between px-10 items-center'>
                    <p className='font-sansBold text-md text-white'> Devfest 23</p>
                    <p className='font-sans text-green-700 '> finished </p>
                </div>
            </div> */}
            {events.map (e =>(
                <EventCard  
                    id={e.id}
                    name={e.name}
                    status = {e.status}
                    img ={e.img}
                    />
            ))}
            </div>

            
            {popUp &&
                <div className='text-white flex justify-center items-center fixed top-0 right-0 bottom-0 left-0 bg-black bg-opacity-80 z-50'>
                    <div className='flex flex-col  h-[500px] w-[400px] bg-black1 z-50 p-5'>
                        <p className='text-center text-xl font-sansBold'>Create new event here</p>
                        <p className='mt-10'>Email</p>
                        <input type='email' className='text-white mt-4 px-2 w-full h-[50px] bg-black2 rounded-md' />
                        <p className='mt-10'>Description</p>
                        <textarea className='text-white mt-4 w-full min-h-[100px] max-h-[150px] bg-black2 p-2 rounded-md' />
                        <button className='mt-8 self-center bg-primary font-sansBold py-4 px-5 rounded-md' onClick={() => setPopUp(false)}>Create</button>
                    </div>
                </div>
            }
    </div>
  )
}

export default Events