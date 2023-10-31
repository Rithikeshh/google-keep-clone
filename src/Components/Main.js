import React from 'react'
import { useRef } from 'react'
import MainNavBar from './Main-Components/MainNavBar'
import NotesContent from './Main-Components/NotesContent'
import ReminderContent from './Main-Components/ReminderContent'
import { Outlet } from 'react-router-dom'
function Main() {
    
  return (
    <div className='flex gap-[20px]'>
        <div className='max-w-[300px] w-[260px] min-w-[260px]'>
            <MainNavBar/>
        </div>
        <div className='grow'>
          <Outlet/>
          {/* <NotesContent/> */}
          {/* <ReminderContent/> */}
        </div>
      
    </div>
  )
}

export default Main
