import React from 'react'
import { useNavigate } from "react-router-dom";


const Card = (props) => {
    const navigate = useNavigate()
    const goToDetails = ()=>{
        navigate(`/admin/event/${props.id}`)        
    }
  return (
    <div onClick={goToDetails} className='bg-black3 h-[19vw] border-none rounded-md cursor-pointer'>
        
        <img className='w-full h-[75%]' src={props.img}></img>
        
        <div className='h-[25%] bg-black1 rounded-b-md flex justify-between px-10 items-center'>
            <p className='font-sansBold text-md text-white'>{props.name}</p>
            <p className={`font-sans ${props.status === "Finished" ? "text-green-700" : props.status ==="Upcoming" ? "text-orange-600 ":"text-red-700" }`}>{props.status}</p>
        </div>
    </div>
  )
}

export default Card