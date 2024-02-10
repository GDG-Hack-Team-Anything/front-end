import React, { useEffect, useState } from 'react'
import { useNavigate } from "react-router-dom";
import Card from './Card';

const EventsCards = () => {


    const [eventData ,setEventData] = useState({
        name:"",
        id:0,
        status:"Upcoming",
        
    })
    

    const mockEventData = [
        { id: 1, name: 'Event 1', status: 'Finished', img:"/Rectangle 12.svg" },
        { id: 2, name: 'Event 2', status: 'Running ', img:"/Rectangle 12.svg" },
        { id: 3, name: 'Event 3', status: 'Upcoming', img:"/Rectangle 12.svg" },
        // Add more events as needed
    ];
    
    const [popUp,setPopUp] = useState(false)
    const [events,setEvents] = useState(mockEventData)
    
    console.log(events)

    const addEvent = ()=>{
        setPopUp(true) 
    }

    const navigate = useNavigate()



    function handleChange(e){
        const { name, value } = e.target;
        console.log(name )
        console.log(value )

        console.log("hello")
        setEventData((prevData) => ({
            ...prevData,
            id: prevData.id +1,
            img:"/Rectangle 12.svg" ,
            [name]: value,
        }));
    }



    function createEvent(e){

        console.log(events.length)
        const n = events.length
        // setEvents(prev => (

        mockEventData.push(eventData)
        setEvents(mockEventData)
        
        setPopUp(false)
    }

    

    

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
            <p className='text-xl'>Your events</p>
            <button onClick={addEvent} className='flex items-center  justify-center p-4 rounded-md bg-primary'>NEW EVENT +</button>
        </div>
        {/* cards section */}
        <div className='grid grid-cols-3 gap-10 mt-14 px-[5rem]'>
            {events.map (e =>(
                <Card  
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
                        <p className='mt-10'>Name</p>
                        <input 
                            type='text' 
                            className='text-white mt-4 px-2 w-full h-[50px] bg-black2 rounded-md'
                            name="name"
                            value={eventData.name}
                            onChange={handleChange} />
                        <p className='mt-10'>Description</p>
                        <textarea 
                            className='text-white mt-4 w-full min-h-[100px] max-h-[150px] bg-black2 p-2 rounded-md'
                            name="desc"
                            value={eventData.desc}
                            onChange={handleChange} />
                        <button className='mt-8 self-center bg-primary font-sansBold py-4 px-5 rounded-md' onClick={createEvent }>Create</button>
                    </div>
                </div>
            }
    </div>
  )
}

export default EventsCards