import React, { useRef, useState } from 'react'

function NotesPortal({children, onClose}) {
    const [noteText, setNoteText] = useState(children)
    const iconsClassRef = useRef('w-[20px] h-[20px]')
  return (
    <div onClick={onClose} className='w-screen h-screen bg-black/[0.4] fixed top-[0px] left-[0px]'>
        <div onClick={(e) => {
          e.stopPropagation()
        }} className='fixed p-[12px] bg-white rounded-lg w-[600px] max-[760px]:w-[100%] top-[22%] left-[50%] translate-x-[-50%] shadow-[0_0px_2px_2px_rgba(0,0,0,0.2)]'>
            <div className='w-[100%] flex flex-col'>
                <textarea placeholder='Title..' className='card-text-container text-[20px]  outline-none resize-none rounded' cols={1} />
                <textarea placeholder='Take a note...' value={noteText} onInput={(e)=> setNoteText(e.target.value)} className='card-text-container px-[4px] outline-none pt-[4px] pb-[20px] rounded resize-none' cols={4}/>
                <div className='flex justify-between items-center'>
                    <div  className='flex items-center justify-start gap-[40px] mt-[6px]'>
                        <img className={iconsClassRef.current} src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRF1B3AmDAzo5mt2U8Mt4lOnrzdb9p1OZJIhA&usqp=CAU'/>
                        <img className={iconsClassRef.current} src="https://cdn-icons-png.flaticon.com/512/103/103410.png"/>
                        <img className={iconsClassRef.current} src='https://cdn-icons-png.flaticon.com/512/4211/4211763.png'/>
                        <img className={iconsClassRef.current} src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZ_leXk2rciRgRqtpwY1lUAEx9cn2cZGPgDw&usqp=CAU'/>
                        <img className={iconsClassRef.current} src='https://static.thenounproject.com/png/756732-200.png'/>
                    </div>
                    <p className='mr-[10px] cursor-pointer' onClick={onClose}>close</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default NotesPortal
