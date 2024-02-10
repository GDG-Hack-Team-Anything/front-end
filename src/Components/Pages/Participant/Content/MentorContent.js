import React, { useState } from 'react'

const MentorContent = () => {

    const [selectedTab, setSelectedTab] = useState('Mobile Dev');

    const handleTabClick = (tabName) => {
        setSelectedTab(tabName);
      };
  return (
    <div className='mt-[3rem] flex flex-col items-center'>
        <div className='flex w-full gap-[5rem]'>
        {['Mobile Dev','Web Dev', 'UI/UX', 'Ai'].map((tab) => (
          <button
            key={tab}
            onClick={() => handleTabClick(tab)}
            className={`p-3 rounded-md ${selectedTab === tab ? 'bg-secondary' : 'bg-black1'}`}
          >
            {tab}
          </button>
        ))}
            {/* <button className=''>Mobile Dev</button>
            <button>Web Dev</button>
            <button>UI/UX</button>
            <button>AI</button> */}
        </div>
        <div className='flex flex-col mt-[3rem]'>
            <p className='mt-10 bg-black1 py-3 px-10'>mentor 1</p>
            <p className='mt-10 bg-black1 py-3 px-10'>mentor 2</p>
            <p className='mt-10 bg-black1 py-3 px-10'>mentor 3</p>
            <p className='mt-10 bg-black1 py-3 px-10'>mentor 4</p>
        </div>
        <button className='p-3 rounded-md bg-primary mt-20'>Request mentor</button>
    </div>
  )
}

export default MentorContent