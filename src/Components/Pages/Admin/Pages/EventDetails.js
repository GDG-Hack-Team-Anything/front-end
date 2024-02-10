import React, { useEffect, useState } from 'react'
import {useParams} from 'react-router-dom';
import TeamsContent from './TeamsContent';
import JudgementContent from './JudgementContent';
import GeneralContent from './GeneralContent';


const EventDetails = () => {

    const {cardId} = useParams()
    console.log(cardId)


    const [event , setEvent] = useState()
    const [selectedTab, setSelectedTab] = useState('General');

    useEffect(()=>{
        const fetchData = async ()=>{
            const response = await fetch("",{
            })
            const data = await response.json()
            setEvent(data)
        }
        fetchData()
    },[])

    const handleTabClick = (tabName) => {
        setSelectedTab(tabName);
      };

      const tabContent = {
        General:<GeneralContent />,
        Teams: <TeamsContent />,
        Judgement: <JudgementContent />,
        Mentors: <p>This is the Mentors tab content.</p>,
        Submission: <p>This is the Submission tab content.</p>,
        Reports: <p>This is the Reports tab content.</p>,
      };

  return (
    <div className='text-xl font-sansBold mt-[20px] flex text-white flex-col justify-center items-center'>
        <p className=' mb-[20px]'>GDG hack</p>
        <img className='w-[55vw]' src='/Vector.svg' />
        <div className='flex justify-between w-[60vw]'>
        {['General', 'Teams', 'Judgement', 'Mentors', 'Submission', 'Reports'].map((tab) => (
          <button
            key={tab}
            onClick={() => handleTabClick(tab)}
            className={`p-3 rounded-md ${selectedTab === tab ? 'bg-primary' : 'bg-black1'}`}
          >
            {tab}
          </button>
        ))}
        </div>
        {/* <button className='self-end mr-[13rem] mt-10 py-3 px-8 rounded-md bg-secondary'>Edit</button> */}
        <div className='mt-4'>{tabContent[selectedTab]}</div>
    </div>
  )
}

export default EventDetails