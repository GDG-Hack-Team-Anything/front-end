import React from 'react'

const GeneralContent = () => {
  return (
    <div className='flex flex-col justify-center items-center'>
        
        <div className='flex justify-between w-full my-12'>
            <p className='text-xl font-sansBold'>General Information</p>
            <button className='py-3 px-8 rounded-md bg-secondary flex gap-2'>Edit<img src='/edit-2.svg' /></button>
        </div>
        <div className='grid grid-cols-2 mb-[5rem]'>
            <div>
                <p>Event name</p>
                <input className='bg-black1 px-3 py-2 rounded-md'/>
            </div>
        </div>
        <img src="/TimeLine.svg" />
        <img src="/GeneralMap.svg" />
    </div>
  )
}

export default GeneralContent