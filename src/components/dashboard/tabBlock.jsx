import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function TabBlock({icon, header, number}) {
  return (
    <div className='flex min-w-[150px] gap-[1.5em] justify-between p-[10px] h-[80px] px-[15px] bg-[--nav] rounded-[5px] shadow-sm shadow-[--blackv]'>
        <div className='flex items-center text-[1.5rem]'>
            <FontAwesomeIcon className='text-[--black]' icon={icon}/>
        </div>
        <div className='flex text-[--black] justify-center flex-col poppins capitalize '>
            <h2 className='text-[1.2rem]'>{header}</h2>
            <p className='poppins text-[1.5rem] font-semibold'>{number.toLocaleString()}</p>
        </div>
    </div>
  )
}

export default TabBlock