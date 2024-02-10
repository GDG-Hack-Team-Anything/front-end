import React from 'react'


const TeamsContent = () => {


    const DeleteTeam = ()=>{

    }
    const goToSubmission = ()=>{

    }

    
  return (
    <div className='mt-10'>
            <div>
                <div className='flex text-[1rem] font-sans justify-around  w-[60vw]'>
                <p className='text-primary font-sansBold text-lg mb-[10px]'>Team 01</p>
                <div className='flex gap-6'>
                    <p onClick={goToSubmission} className='text-secondary'>View Submission</p>
                    <p onClick={DeleteTeam} className='text-red-600'>Delete</p>
                </div>
                </div>
                <div className='flex flex-col font-sans justify-center items-center'>
                    <div className='flex justify-around h-[45px] py-2 px-3 w-[40vw] mb-[10px] rounded-md bg-black1'>
                        <div className='flex gap-4 items-center'>
                            <img src="/profile.svg" />
                            <p>said</p>
                        </div> 
                        <div className='flex gap-4 items-center'>
                            <img src="/icon2.svg" />
                            <p>said@gmail.com</p>
                        </div> 
                        <div className='flex gap-4 items-center'>
                            <img src="/discordIcon.png" />
                            <p>said</p>
                        </div> 
                    </div>
                    <div className='flex justify-around h-[45px] py-2 px-3 w-[40vw] mb-[10px] rounded-md bg-black1'>
                        <div className='flex gap-4 items-center'>
                            <img src="/profile.svg" />
                            <p>said</p>
                        </div> 
                        <div className='flex gap-4 items-center'>
                            <img src="/icon2.svg" />
                            <p>said@gmail.com</p>
                        </div> 
                        <div className='flex gap-4 items-center'>
                            <img src="/discordIcon.png" />
                            <p>said</p>
                        </div> 
                    </div>
                    <div className='flex justify-around h-[45px] py-2 px-3 w-[40vw] mb-[10px] rounded-md bg-black1'>
                        <div className='flex gap-4 items-center'>
                            <img src="/profile.svg" />
                            <p>said</p>
                        </div> 
                        <div className='flex gap-4 items-center'>
                            <img src="/icon2.svg" />
                            <p>said@gmail.com</p>
                        </div> 
                        <div className='flex gap-4 items-center'>
                            <img src="/discordIcon.png" />
                            <p>said</p>
                        </div> 
                    </div>   
                </div>
            </div>
      </div>
  )
}

export default TeamsContent