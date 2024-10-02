import React, { useEffect, useRef, useState } from 'react'
import Nav from '../components/primary-comp/nav'
import SideBar from '../components/primary-comp/sidebar'
import OrderCart from '../components/cartOrder/orderCart'
import CartBar from '../components/cartOrder/cartBar'
import cart from "../assets/cart.png"
import times from "../assets/times.png"
import {motion, AnimatePresence, useInView} from "framer-motion"
import Axios from '../utils/Axios'
import fetchFoods from '../utils/order/fetchProducts'
import OrderPrev from '../components/cartOrder/orderPreview'
import { QueryClient, useInfiniteQuery, useQueryClient } from '@tanstack/react-query'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpinner } from '@fortawesome/free-solid-svg-icons'

function OrderPage() {

  const query = useQueryClient()

  const [selectedItems, setSelectedItems] = useState([
])

const [duplicate, setDuplicate] = useState([])
const [deleted, setDeleted] = useState([])
const [order, setOrder] = useState(false)
const [error, setError] = useState("")
const [foodChange, setFoodChange] = useState(false)
const loading = useRef(null)
const inView = useInView(loading)

const [change, setChange] = useState(0)

useEffect(() => {
  selectedItems.forEach(items => {
    if(items.id == change.id) {
      items.quantity = change.quantity
    }
  })
}, [change])


const [foodObjects, setFoodObjects] = useState([
])

useEffect(() => {
  fetchNextPage()
}, [])

const [nav, setNav] = useState(false)
const [cartBar, setCartBar] = useState(false)

  let { data, fetchNextPage, refetch, isFetchingNextPage, error : productError } = useInfiniteQuery({
    queryKey : ['products'], 
    queryFn: async ({pageParam = 1}) => {
      if(pageParam) {

        try {
          const response = await Axios.get(`api/product/?page=${pageParam}`)
  
          if(response.status === 200) {
            return response.data.results
          }
          
        } catch (error) {
          setError("An error Occured")
        }

      }
      
    }, 

    getNextPageParam: (lastPage, page) => {
      return Math.floor(page.flatMap(page => page) / 10 + 1)
    }
  })

  const foodList = data?.pages?.flatMap(pages => pages).map((item, i) => (
   !isFetchingNextPage && <OrderCart  onError={setError} key={i} name={item.name} change={change} deleted={deleted} onDelete={setDeleted} quantity={item.available_stock} id={item.id} onDuplicate={setDuplicate} img={item.image} price={item.price} onSelect={setSelectedItems} selected={selectedItems}/>
))

useEffect(() => {
  query.setQueryData(['products'], { pages : [], pageParam : [] })
  fetchNextPage()
}, [foodChange])

useEffect(() => {
  fetchNextPage()
}, [inView])

  return (
    <>
        {order && <OrderPrev onFood={setFoodChange} onCartBar={setCartBar} onSelecteItems={setSelectedItems} onOrder={setOrder} items={selectedItems.filter(item => !(deleted.includes(item.id)))}/>}

      <div className={`${ order  && "blur"}`}>
        {error && <p className='fixed bg-[--nav] shadow-sm shadow-[--black] top-[2em] p-[1.5em]'>{error}</p>}
        {/* Preview */}
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
            <div className='text-[--bdcolor] sm:w-[80%]  h-[100vh] mt-[4em] sm:mt-[6em] min-[300px]: ml-[.2em] sm:ml-[6em]'>
              <h1 className='sm:text-2xl text-xl sm:text-left text-center font-bold poppins py-[.5em]'>Explore out best menu for today</h1>
              <div className='flex flex-wrap gap-[.4em] sm:justify-normal justify-center sm:gap-2' >
                {foodList}
              </div>
              <div  className=' text-center py-[2em]'>
                {isFetchingNextPage && <FontAwesomeIcon icon={faSpinner} className='text-[3rem] sm:mr-[4em] animate-spin'/>}
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
                <CartBar onOrder={setOrder}  selectedItems={selectedItems.reverse().filter(item => !(deleted.includes(item.id)))} onDelete={setDeleted} onChange={setChange} change={change}/>
              </motion.div>
            }
            </AnimatePresence>
            <div className='hidden sm:block z-[2]'>
              <CartBar onOrder={setOrder}  selectedItems={selectedItems.reverse().filter(item => !(deleted.includes(item.id)))} onDelete={setDeleted} onChange={setChange} change={change}/>
            </div>
          </section>
      </div>
    </>
  )
}

export default OrderPage