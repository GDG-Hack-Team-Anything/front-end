import React from 'react'

const GeneralContent = () => {

    const date = new Date()
    console.log(date.getHours())
  return (
    <div className='mt-[4rem] flex flex-col justify-center items-center'>
        <div>{date.getHours()} h {date.getMinutes()} m {date.getSeconds()} s</div>
        <img className='' src="/FrameAgenda.svg" />
        <img src="/FrameMap.svg" />
        <div className='mt-[10rem] w-[60vw]'>
            <p className='mb-[2rem] text-center text-[2.4rem]'>Challenges</p>
            <div className='mb-[1rem]'>
                <p className='mb-[1rem]'>Theme</p>
                <p className='font-sans ml-[2rem]'>Lorem ipsum dolor sit amet consectetur.</p>
            </div>
            <div className='flex flex-col justify-start'>
                <p>Sub-Themes</p>
                <ul className='ml-[2rem]'>
                    <br />
                    <li className='font-sans'>
                        Lorem ipsum dolor sit :Lorem ipsum dolor sit amet consectetur. Cursus aenean egestas tellus quam dui viverra egestas.
                        Elit elementum pulvinar congue turpis diam integer. Malesuada diam pharetra aliquet habitasse. Nunc risus nisi duis 
                        pretium nullam fermentum ante netus. 
                    </li>
                    <br />
                    <li className='font-sans'>
                        amet consectetur : Lorem ipsum dolor sit amet consectetur. Cursus aenean egestas tellus quam dui viverra egestas. Elit
                        elementum pulvinar congue turpis diam integer. Malesuada diam pharetra aliquet habitasse. Nunc risus nisi duis pretium
                        nullam fermentum ante netus.
                    </li>
                    <br />
                    <li className='font-sans'>
                        Something else : Lorem ipsum dolor sit amet consectetur. Cursus aenean egestas tellus quam dui viverra egestas. Elit
                        elementum pulvinar congue turpis diam integer. Malesuada diam pharetra aliquet habitasse. Nunc risus nisi duis pretium
                        nullam fermentum ante netus.
                    </li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default GeneralContent