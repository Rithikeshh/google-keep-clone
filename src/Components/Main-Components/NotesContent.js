import React from 'react'
import SpecialInput from './Assets-Components/SpecialInput'
import NotesCards from './Assets-Components/NotesCards'

function NotesContent() {
  return (
    <div className='flex flex-col justify-center items-center gap-[36px]'>
      <SpecialInput/>
      <NotesCards/>
    </div>
  )
}

export default NotesContent
