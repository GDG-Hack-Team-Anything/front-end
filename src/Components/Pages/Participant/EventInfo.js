import React, { useEffect } from 'react'
import {useParams,useNavigate } from "react-router-dom"


const EventInfo = (props) => {

    const navigate = useNavigate()
    let {cardId} = useParams()
    console.log(cardId)

    console.log(props)

    useEffect(()=>{
        
    },[])


    const goToDetails = ()=>{
        navigate(`/participant/event/details/${props.id}`)
    }
  return (
    <div className='w-full flex flex-col gap-10 items-center  text-white' >
        <div className='font-sansBold text-xl'>Devfest post 22</div>
        <img className='h-[250px] w-[550px] ' src ="/Rectangle 12.svg"  />
        <div className='flex flex-col gap-5 w-[40%]'>
            <p className='font-sansBold text-lg'>Description</p> 
            <p>
                Lorem ipsum dolor sit amet consectetur. Cursus aenean egestas tellus quam dui viverra egestas.
                Elit elementum pulvinar congue turpis diam integer. Malesuada diam pharetra aliquet habitasse.
                Nunc risus nisi duis pretium nullam fermentum ante netus.
            </p>
            <p className='font-sansBold text-lg'>Theme</p> 
            <p>
                Lorem ipsum dolor sit amet consectetur. Cursus aenean egestas tellus quam dui viverra egestas.
                Elit elementum pulvinar congue turpis diam integer. Malesuada diam pharetra aliquet habitasse.
                Nunc risus nisi duis pretium nullam fermentum ante netus.
            </p>
            <p className='font-sansBold text-lg'>Sub themes</p> 
            <p>
                Lorem ipsum dolor sit amet consectetur. Cursus aenean egestas tellus quam dui viverra egestas.
                Elit elementum pulvinar congue turpis diam integer. Malesuada diam pharetra aliquet habitasse.
                Nunc risus nisi duis pretium nullam fermentum ante netus.
            </p>
            
        </div>

        <button className='p-4 bg-primary rounded-md font-sansBold ' onClick={goToDetails}>see all detail</button>
    </div>
  )
}

export default EventInfo