import { faNairaSign, faShoppingCart, faSpinner, faTimes } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import PrevComp from './previewComponents'
import handleOrders from '../../utils/order/handleOrders'

function OrderPrev({items, onOrder}) {

    const listItems = items.filter(items => items.quantity != 0).map((items, i) => <PrevComp key={i} {...items} />)
    const total = items.reverse().filter(item => item.quantity != 0).reduce((value, item) => {
        if(item.quantity > 1) {
            let newValue = value + Math.floor(item.price) * item.quantity
            return newValue
        }

        let newValue = value + Math.floor(item.price) 

        return newValue
    }, 0)
    const [loading, setLoading] = useState(false)

  return (
    <section className='w-full z-[30] h-screen fixed bg-[--blackv] flex items-center justify-center'>
        <div className='w-[30%] max-h-[80vh] bg-[--nav] mt-[2em] rounded-[10px] flex flex-col justify-between pb-[10px]'>
            <div className='w-full  p-[1em] items-center border-b-[1.5px] border-[--black] flex justify-between'>
                {/* <p className='poppins font-bold text-[1.4rem]'>Resto Kans</p> */}
                <FontAwesomeIcon className='text-xl text-[--black]' icon={faShoppingCart}/>
                <button onClick={() => onOrder(false)}>
                    <FontAwesomeIcon className='text-[1.4rem] text-[--black]' icon={faTimes}/>
                </button>   
            </div>
            <div className='flex flex-col gap-[10px] py-[10px] h-[70%] overflow-scroll hide-scrollbar px-[1em]'>
                {listItems}
            </div>
            {/* <div className='w-full px-[1em]'>
                <p className='text-right poppins'>Total: {total}</p>
            </div> */}
            <div className='px-[1em] flex justify-center'>
                <button onClick={() => handleOrders(items, setLoading)} className='p-[10px] sm:hover:w-[95%] duration-[0.5s] bg-[--black] w-full text-[--nav] poppins sm:text-[1.2rem] rounded-[5px]'>{!loading && "Pay"} <span className='text-[1rem]'>{loading ? <FontAwesomeIcon icon={faSpinner} className='text-xl text-[--nav] animate-spin'/>  : <FontAwesomeIcon className='pl-[1em]' icon={faNairaSign}/>} {!loading && total}</span></button>
            </div>
        </div>
    </section>
  )
}

export default OrderPrev