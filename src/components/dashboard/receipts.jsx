import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCopy } from '@fortawesome/free-solid-svg-icons'
import OrderItems from './orderItems'

function Receipts({date, orderId, items}) {

    const [userName, setUserName] = useState("Israel")

  return (
    <div className='w-[400px]  rounded-[5px] p-[10px]   bg-[--nav] flex flex-col gap-[5px]'>
        <div className='flex justify-between items-center'>
            <p className='font-bold text-[1rem] poppins flex justify-between items-center'>Resto Kans</p>
            <p className='text-[0.7rem] capitalize poppins'><span className='font-bold'>order_id:</span> {orderId}</p>
        </div>
        <p className='text-[0.9rem] capitalize poppins'>Thank you for your order {userName}</p>
        <div className='flex justify-between'>
            <p className='poppins text-[0.9rem] font-bold'>Ordered</p>
            <p className='poppins text-[0.9rem]'>{items.length} Items</p>
        </div>
        <div className=' flex flex-col gap-[10px] max-h-[250px] sm:h-[250px] overflow-scroll py-[1em] hide-scrollbar'>
            {items.map((items, i) => <OrderItems key={i} {...items}/>)}
        </div>
        <div className='h-[80px]  border-b-[--blackv] border-b-[1.5px]'>

        </div>
    </div>
  )
}

export default Receipts