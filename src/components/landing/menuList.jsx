import React from 'react'

function MenuList({img, name}) {
  return (
    <div className='sm:py-[1em] py-[1.5em]'>
        <div>
            <img src={img} className='w-[150px] object-cover h-[150px] rounded-[5px]' alt="" />
        </div>

        <p className='poppins text-center'>{name}</p>
    </div>
  )
}

export default MenuList