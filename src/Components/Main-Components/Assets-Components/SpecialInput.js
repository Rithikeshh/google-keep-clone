import React, { useEffect, useRef } from 'react'
import { useState } from 'react';
import { createPortal } from 'react-dom';
import NotesPortal from '../Portals/NotesPortal';

function SpecialInput() {
  const [showModal, setShowModal] = useState(false);
  let modalRef = useRef(showModal)
  const iconsClassRef = useRef('w-[20px] h-[20px]')
  useEffect(()=>{
    document.querySelector('body').addEventListener('click', closeModel)
  },[])
  function closeModel(){
    // working
    // if(modalRef.current){
    //   setShowModal(false)
    //   modalRef.current = false;
    // }
    // else modalRef.current = true;

    // Not working
    console.log(showModal, "inside closeModel func")
    if(showModal){
      console.log(showModal, "inside if")
      setShowModal(false)
    }
  }
  return (
    <>
      {!showModal && <div className='flex max-w-[600px] w-[96%] h-[40px] justify-between items-center rounded-lg shadow-[0_0px_2px_2px_rgba(0,0,0,0.2)] mt-[36px]'>
        <input onClick={()=>{
          setShowModal(true)
        }} className='w-[70%] pl-[12px] outline-none text-gray-500' placeholder='Take a note...' type='text'/>
        {/* <div className='w-[70%] pl-[12px] cursor-text text-gray-500'>Take a note...</div> */}
        {/* space for list */}
      </div>}
      {showModal &&
        <div onClick={(e)=>e.stopPropagation()} className='p-[12px] bg-white max-w-[600px] w-[96%] rounded-lg shadow-[0_1px_2px_2px_rgba(0,0,0,0.2)] mt-[36px]'>
          {/* {console.log(showModal)} */}
            <div className='w-[100%] flex flex-col'>
                <textarea placeholder='Title..' className=' card-text-container font-medium pb-[4px] outline-none resize-none rounded' rows={1} />
                <textarea placeholder='Take a note...'  className='card-text-container px-[4px] outline-none pt-[8px] pb-[20px] rounded resize-none'/>
                <div className='flex justify-between items-center'>
                    <div  className='flex items-center justify-start gap-[40px] mt-[6px]'>
                        <img className={iconsClassRef.current} src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRF1B3AmDAzo5mt2U8Mt4lOnrzdb9p1OZJIhA&usqp=CAU'/>
                        <img className={iconsClassRef.current} src="https://cdn-icons-png.flaticon.com/512/103/103410.png"/>
                        <img className={iconsClassRef.current} src='https://cdn-icons-png.flaticon.com/512/4211/4211763.png'/>
                        <img className={iconsClassRef.current} src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZ_leXk2rciRgRqtpwY1lUAEx9cn2cZGPgDw&usqp=CAU'/>
                        <img className={iconsClassRef.current} src='https://static.thenounproject.com/png/756732-200.png'/>
                    </div>
                    <p className='mr-[10px] cursor-pointer' >close</p>
                </div>
            </div>
        </div>
      }
    </>

  )
}

export default SpecialInput
