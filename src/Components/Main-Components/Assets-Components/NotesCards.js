import React, { useState, useRef } from 'react'
import { createPortal } from 'react-dom';
import NotesPortal from '../Portals/NotesPortal';

function NotesCards() {
    
  return (
    <div className='flex gap-[20px] w-[100%] justify-start flex-wrap mr-[8px]'>           
        <Card>H;knsd</Card>     
        <Card>hsv sknseo</Card>     
        <Card>jdbonxfgkbl,</Card>         
        Implement local stroage
    </div>
  )
}
function Card({children}){
    const [isVisible, setIsVisible] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const iconsClassRef = useRef('w-[20px] h-[20px]')
    function handleVisibility(){
        setIsVisible(true)
    }
    function handleHide(){
        setIsVisible(false)
    }
    function closeModel(){
        setShowModal(false)
    }
    return(
        <>
        <div onClick={()=>{setShowModal(true)}} onMouseEnter={handleVisibility} onMouseLeave={handleHide} className='p-[12px] w-[220px] min-h-[160px] max-[760px]:grow shadow-[0_0px_1px_1px_rgba(0,0,0,0.2)] rounded-lg'>
            <div className='w-[100%] h-[100%] flex flex-col'>
                <div className='card-text-container px-[4px] h-[124px] pt-[4px] pb-[20px] overflow-scroll break-words '>{children}</div>
                <div style={{visibility:`${isVisible ? 'visible':'hidden'}`}} className='flex items-center justify-start gap-[28px] mt-[6px]'>
                    <img className={iconsClassRef.current} src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRF1B3AmDAzo5mt2U8Mt4lOnrzdb9p1OZJIhA&usqp=CAU'/>
                    <img className={iconsClassRef.current} src="https://cdn-icons-png.flaticon.com/512/103/103410.png"/>
                    <img className={iconsClassRef.current} src='https://cdn-icons-png.flaticon.com/512/4211/4211763.png'/>
                    <img className={iconsClassRef.current} src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZ_leXk2rciRgRqtpwY1lUAEx9cn2cZGPgDw&usqp=CAU'/>
                    <img className={iconsClassRef.current} src='https://static.thenounproject.com/png/756732-200.png'/>
                </div>
            </div>
        </div>
        {showModal && createPortal(
            <NotesPortal onClose={closeModel}>{children}</NotesPortal>,
            document.body
        )}
        </>
        
    )
}
export default NotesCards
