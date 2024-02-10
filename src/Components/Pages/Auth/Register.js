import React from 'react'

const Register = () => {
  return (
    <div className='w-[30vw]'>
        <p className='text-xl font-sansBold'>Create new account</p>
        <p>First Name</p>
        <input type='email' className='h-[30px] w-[80%] bg-black1'/>
        <p>Last Name</p>
        <input type='password' className='h-[30px] w-[80%] bg-black1'/>
        <p>Email</p>
        <input type='email' className='h-[30px] w-[80%] bg-black1'/>
        <p>password</p>
        <input type='email' className='h-[30px] w-[80%] bg-black1'/>
    </div>
  )
}

export default Register