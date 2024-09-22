import React, { useEffect, useState } from 'react'
import Nav from '../components/primary-comp/nav'
import SideBar from '../components/primary-comp/sidebar'
import OrderCart from '../components/cartOrder/orderCart'
import CartBar from '../components/cartOrder/cartBar'
import food1 from "../assets/food1.jpeg"
import food3 from "../assets/food3.jpeg"
import food4 from "../assets/food4.jpeg"
import food5 from "../assets/food5.jpg"
import food6 from "../assets/food6.jpg"
import food7 from "../assets/food7.jpg"
import food8 from "../assets/food8.jpeg"
import food9 from "../assets/food9.jpg"
import food10 from "../assets/food10.jpeg"
import cart from "../assets/cart.png"
import times from "../assets/times.png"
import {motion, AnimatePresence} from "framer-motion"
import Axios from '../utils/Axios'
import fetchFoods from '../utils/order/fetchProducts'

function OrderPage() {

  const [selectedItems, setSelectedItems] = useState([
])

const [duplicate, setDuplicate] = useState([])
const [deleted, setDeleted] = useState([])

const [change, setChange] = useState(0)

useEffect(() => {
  selectedItems.forEach(items => {
    if(items.id == change.id) {
      items.quantity = change.quantity
    }
  })
}, [change])


const [foodObjects, setFoodObjects] = useState([
  {
    name : "Sumptous Fried Fries",
    price : 2500.00, 
    available: 40, 
    img: food1, 
    id: self.crypto.randomUUID()
  },
  {
    name : "Immortal Veggies goodness",
    price : 1600.00, 
    available: 20, 
    img: food10,
    id: self.crypto.randomUUID()
  },
  {
    name : "Pancakes",
    price : 9000.00, 
    available: 10, 
    img: food3, 
    id: self.crypto.randomUUID()
  },
  {
    name : "Buger",
    price : 3000.00, 
    available: 30, 
    img: food4, 
    id: self.crypto.randomUUID()
  },
  {
    name : "Veggies goodness",
    price : 1400.00, 
    available: 5, 
    img: food5, 
    id: self.crypto.randomUUID()
  },
  {
    name : "Delicacy",
    price : 4000.00, 
    available: 30, 
    img: food6, 
    id: self.crypto.randomUUID()
  },
  {
    name : "Delicacy",
    price : 1900.00, 
    available: 10, 
    img: food7, 
    id: self.crypto.randomUUID()
  },
  {
    name : "pizza",
    price : 20000.00, 
    available: 50, 
    img: food8, 
    id: self.crypto.randomUUID()
  },
  {
    name : "Pizzas",
    price : 15000.00, 
    available: 15, 
    img: food9, 
    id: self.crypto.randomUUID()
  },
  {
    name : "Sumptous Fried Fries",
    price : 2500.00, 
    available: 40, 
    img: food1, 
    id: self.crypto.randomUUID()
  },
  {
    name : "Immortal Veggies goodness",
    price : 1600.00, 
    available: 20, 
    img: food10,
    id: self.crypto.randomUUID()
  },
  {
    name : "Pancakes",
    price : 9000.00, 
    available: 10, 
    img: food3, 
    id: self.crypto.randomUUID()
  },
  {
    name : "Buger",
    price : 3000.00, 
    available: 30, 
    img: food4, 
    id: self.crypto.randomUUID()
  },
  {
    name : "Veggies goodness",
    price : 1400.00, 
    available: 5, 
    img: food5, 
    id: self.crypto.randomUUID()
  },
  {
    name : "Delicacy",
    price : 4000.00, 
    available: 30, 
    img: food6, 
    id: self.crypto.randomUUID()
  },
  {
    name : "Delicacy",
    price : 1900.00, 
    available: 10, 
    img: food7, 
    id: self.crypto.randomUUID()
  },
  {
    name : "pizza",
    price : 20000.00, 
    available: 50, 
    img: food8, 
    id: self.crypto.randomUUID()
  },
  {
    name : "Pizzas",
    price : 15000.00, 
    available: 15, 
    img: food9, 
    id: self.crypto.randomUUID()
  },
  
])

useEffect(() => {
  fetchFoods(setFoodObjects)
}, [])

const [nav, setNav] = useState(false)
const [cartBar, setCartBar] = useState(false)

  const foodList = foodObjects.map((item, i) => (
      <OrderCart key={i} name={item.name} change={change} deleted={deleted} onDelete={setDeleted} quantity={item.available} id={item.id} onDuplicate={setDuplicate} img={item.img} price={item.price} onSelect={setSelectedItems} selected={selectedItems}/>
  ))

  return (
    <div className=' '>
        <Nav onNav={setNav} nav={nav}/>
        <div onClick={() => selectedItems.reverse().filter(item => !(deleted.includes(item.id))).length > 0  && setCartBar(!cartBar)} className={`fixed ${!cartBar ? 'top-[80%]' : 'top-[12%]' } bg-[--bg] p-2 sm:hidden shadow-md shadow-black rounded-[50%] right-[1em] z-[4]`}>
          <div className='relative'>
            <p className='absolute top-[-15px] right-[-5px] bg-red-500 px-[.5em] rounded-[50%] text-white'>{selectedItems.reverse().filter(item => item.quantity != 0).length}</p>
            <img src={!cartBar ? cart : times} className='w-[30px] h-[30px]' alt="" />
          </div>
        </div>
        <section className='flex '>
          
          <div className='hidden sm:block z-[20]'>
            <SideBar />
          </div>
          {nav && 
              <SideBar nav={nav}/>
          }
          <div className='text-[--bdcolor] sm:w-[80%]  h-[200vh] mt-[4em] sm:mt-[6em] min-[300px]: ml-[.2em] sm:ml-[6em]'>
            <h1 className='sm:text-2xl text-xl sm:text-left text-center font-bold poppins py-[.5em]'>Explore out best menu for today</h1>
            <div className='flex flex-wrap gap-[.4em] sm:justify-normal justify-center sm:gap-2' >
              {foodList}
            </div> 
          </div>
          <AnimatePresence>
          {cartBar && 
            <motion.div
            key={cartBar}
            initial={{
              x: "50em",
              backgroundColor: "var(--black)"
            }}
            transition={{
              duration: .9
            }}
            whileInView={{
              backgroundColor: "rgba(0,0,0,0.53)"
            }}
            animate={{
              x:0,
              backgroundColor: "var(--black)"
            }}
            exit={{
              x: "50em",
              backgroundColor: "var(--black)"
            }}
             className='w-full h-full fixed right-0 z-[2] bg-[#00000088]'>
              <CartBar  selectedItems={selectedItems.reverse().filter(item => !(deleted.includes(item.id)))} onDelete={setDeleted} onChange={setChange} change={change}/>
            </motion.div>
          }
          </AnimatePresence>
          <div className='hidden sm:block'>
            <CartBar  selectedItems={selectedItems.reverse().filter(item => !(deleted.includes(item.id)))} onDelete={setDeleted} onChange={setChange} change={change}/>
          </div>
        </section>
    </div>
  )
}

export default OrderPage