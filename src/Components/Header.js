import React from 'react'

function Header() {
  return (
    <div className='flex justify-between gap-[20px] p-[8px] border-b-[1px] items-center'>
        <div className='flex gap-[80px] grow'>
            <div className='flex items-center ml-[16px] gap-[12px]'>
                <div className="text-gray-500 flex"><svg className='shrink-0 h-[28px]' focusable="false" viewBox="0 0 24 24"><path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"></path></svg></div>
                <img className="" src="https://www.gstatic.com/images/branding/product/1x/keep_2020q4_48dp.png" srcset="https://www.gstatic.com/images/branding/product/1x/keep_2020q4_48dp.png 1x, https://www.gstatic.com/images/branding/product/2x/keep_2020q4_48dp.png 2x " alt="" aria-hidden="true" role="presentation" style={{width:40+"px",height:40+"px"}}></img>
                <h1 className='text-2xl font-medium text-gray-600 cursor-pointer' >Keep</h1>
            </div>
            <div className='flex grow bg-slate-100 max-w-[720px] items-center rounded-md h-[50px]'>
                <button className='px-[12px]'><svg focusable="false" height="24px" viewBox="0 0 24 24" width="24px" xmlns="http://www.w3.org/2000/svg"><path d="M20.49,19l-5.73-5.73C15.53,12.2,16,10.91,16,9.5C16,5.91,13.09,3,9.5,3S3,5.91,3,9.5C3,13.09,5.91,16,9.5,16 c1.41,0,2.7-0.47,3.77-1.24L19,20.49L20.49,19z M5,9.5C5,7.01,7.01,5,9.5,5S14,7.01,14,9.5S11.99,14,9.5,14S5,11.99,5,9.5z"></path><path d="M0,0h24v24H0V0z" fill="none"></path></svg></button>
                <input className='bg-slate-100 outline-none pl-[10px]' type='text' placeholder='Search...'/>
            </div>
        </div>
      <div className='flex'>
        <img className='w-[28px] h-[28px] mr-[20px] shrink-0' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVYAkkrHmW2miWPXbVmbmj2jzKo-t1dSEQgQ&usqp=CAU'/>
      </div>
    </div>
  )
}

export default Header
