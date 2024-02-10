import React from 'react'

const JudgementContent = () => {


   
  return (
    <div className='relative'>
        
        <button className='absolute top-[-20px] right-[-22vw] py-3 px-8 rounded-md bg-secondary flex gap-2'>Edit<img src='/edit-2.svg' /></button>
        <div className='mb-5 mt-[5rem]'>
            <p className='text-primary mb-2'>Sub-theme 1</p>
            <div className='w-full grid grid-cols-2 '>
                <div className=' mb-[5px] mr-[50px]'>
                    <p className='text-[15px]'>Criteria 1</p>
                    <input type='number' min={1} className='rounded-md bg-black1 w-[200px] px-4 py-2'/>    
                </div>    
                <div className=' mb-[5px] mr-[50px]'>
                    <p className='text-[15px]'>Criteria 2</p>
                    <input type='number' min={1} className='rounded-md bg-black1 w-[200px] px-4 py-2'/>    
                </div>    
                <div className=' mb-[5px] mr-[50px]'>
                    <p className='text-[15px]'>Criteria 2</p>
                    <input type='number' min={1} className='rounded-md bg-black1 w-[200px] px-4 py-2'/>    
                </div>   
            </div>
        </div>
        <div className='mb-5 mt-10'>
            <p className='text-primary mb-2'>Sub-theme 1</p>
            <div className='w-full grid grid-cols-2 '>
                <div className=' mb-[5px] mr-[50px]'>
                    <p className='text-[15px]'>Criteria 1</p>
                    <input type='number' min={1} className='rounded-md bg-black1 w-[200px] px-4 py-2'/>    
                </div>    
                <div className=' mb-[5px] mr-[50px]'>
                    <p className='text-[15px]'>Criteria 2</p>
                    <input type='number' min={1} className='rounded-md bg-black1 w-[200px] px-4 py-2'/>    
                </div>    
                <div className=' mb-[5px] mr-[50px]'>
                    <p className='text-[15px]'>Criteria 2</p>
                    <input type='number' min={1} className='rounded-md bg-black1 w-[200px] px-4 py-2'/>    
                </div>   
            </div>
        </div>
        <button className='absolute right-[-22vw] py-3 px-8 rounded-md bg-secondary flex gap-2'>Edit<img src='/edit-2.svg' /></button>
        <div className=''>
            <p className='text-primary mb-2 mt-[5rem]'>Judge name 01</p>
            <div className='w-full grid grid-cols-2 '>
                <div className='mt-2'>
                    <p className=' text-[15px]'>Name</p>
                    <input type='text' className='rounded-md bg-black1 w-[200px] px-4 py-2'/>    
                </div>    
                <div className='mt-2'>
                    <p className='text-[15px]'>Email</p>
                    <input type='email' className='rounded-md bg-black1 w-[200px] px-4 py-2'/>    
                </div>    
                <div className='mt-2'>
                    <p className='text-[15px]'>Field</p>
                    <input type='text' className='rounded-md bg-black1 w-[200px] px-4 py-2'/>    
                </div>    
                <div className='mt-2'>
                    <p className='text-[15px]'>Discord</p>
                    <input type='text' className='rounded-md bg-black1 w-[200px] px-4 py-2'/>    
                </div>
                
            </div>
             <div className='grid grid-cols-2 mt-2'>
                    <div>
                        <p className='text-[15px]'>Criteria 1</p>
                        <input type='text' className='rounded-md bg-black1 w-[200px] px-4 py-2'/> 
                    </div>
                    <div>
                        <p className='text-[15px]'>Criteria 2</p>
                        <input type='text' className='rounded-md bg-black1 w-[200px] px-4 py-2'/> 
                    </div>
                    <div>
                        <p className='text-[15px]'>Criteria 3</p>
                        <input type='text' className='rounded-md bg-black1 w-[200px] px-4 py-2'/> 
                    </div>
                </div>
        </div>    
        
        <div></div>

        <div></div>

    </div>
  )
}

export default JudgementContent