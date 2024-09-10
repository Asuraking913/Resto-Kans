import React from 'react'

function MenuList({img, name}) {
  return (
    <div className='py-[1em]'>
        <div>
            <img src={img} className='w-[150px] object-cover h-[150px] rounded-[5px]' alt="" />
        </div>

        <p className='poppins text-center'>{name}</p>
    </div>
  )
}

export default MenuList