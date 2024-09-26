import React, { useEffect, useRef } from 'react'
import Nav from '../components/primary-comp/nav'
import SideBar from '../components/primary-comp/sidebar'
import { useState } from 'react'
import { faCartShopping, faDollar, faNairaSign } from '@fortawesome/free-solid-svg-icons'
import food from "../assets/food10.jpeg"
import food2 from "../assets/food8.jpeg"
import food3 from "../assets/food9.jpg" 
import food4 from "../assets/food.jpeg"
import TabBlock from '../components/dashboard/tabBlock'
import Orders from '../components/dashboard/order'
import CardForm from '../components/dashboard/cardForm'
import handleUpload from '../utils/tabswitch'
import { handleOrder, handlePayment, handleReceipts } from '../utils/tabswitch'
import Upload from '../components/dashboard/upload'
import fetchOrder from '../utils/dashboard/fetchorders'

function Dashboard() {

    const recent = useRef(null)
    const payment = useRef(null)
    const receipts = useRef(null)
    const [clicked, setClicked] = useState("orders")

    const [nav, setNav] = useState(false)
    const [tabObj, setTabObj] = useState([
        {
            header : "total Orders",
            amount : 100,
            icon : faCartShopping
        }, 
        {
            header : "Purchases",
            amount : 95,
            icon : faDollar
        }, 
        {
            header : "Balance",
            amount : 62456,
            icon : faNairaSign
        }, 
    ])


   
    const [orders, setOrders] = useState([
        // {
        //     orderId: self.crypto.randomUUID(), 
        //     date : "may 12, 2024",
        //     items : [
        //         {
        //             name : "Pancakes",
        //             price : 1000, 
        //             quantity : 4, 
        //             img: food2
        //         }, 
        //         {
        //             name : "Sausage roll",
        //             price : 800, 
        //             quantity : 10, 
        //             img: food3
        //         }, 
        //         {
        //             name : "Pancakes",
        //             price : 1000, 
        //             quantity : 6, 
        //             img: food
        //         }
        //     ]
        // }, 
        // {
        //     orderId: self.crypto.randomUUID(), 
        //     date : "september 12, 2024",
        //     items : [
        //         {
        //             name : "Pancakes",
        //             price : 15000, 
        //             quantity : 4, 
        //             img: food3
        //         }, 
        //         {
        //             name : "Sausage roll",
        //             price : 1900, 
        //             quantity : 10, 
        //             img: food4
        //         }, 
        //         {
        //             name : "Pancakes",
        //             price : 1000, 
        //             quantity : 6, 
        //             img: food2
        //         }
        //     ]
        // }, 
        // {
        //     orderId: self.crypto.randomUUID(), 
        //     date : "December 23, 2024",
        //     items : [
        //         {
        //             name : "Pancakes",
        //             price : 1000, 
        //             quantity : 4, 
        //             img: food
        //         }, 
        //         {
        //             name : "Sausage roll",
        //             price : 1000, 
        //             quantity : 10, 
        //             img: food2
        //         }, 
        //         {
        //             name : "Pancakes",
        //             price : 1000, 
        //             quantity : 6, 
        //             img: food
        //         }
        //     ]
        // },
        // {
        //     orderId: self.crypto.randomUUID(), 
        //     date : "December 23, 2024",
        //     items : [
        //         {
        //             name : "Pancakes",
        //             price : 1000, 
        //             quantity : 4, 
        //             img: food
        //         }, 
        //         {
        //             name : "Sausage roll",
        //             price : 1000, 
        //             quantity : 10, 
        //             img: food2
        //         }, 
        //         {
        //             name : "Pancakes",
        //             price : 1000, 
        //             quantity : 6, 
        //             img: food
        //         }
        //     ]
        // },
        // {
        //     orderId: self.crypto.randomUUID(), 
        //     date : "December 23, 2024",
        //     items : [
        //         {
        //             name : "Pancakes",
        //             price : 1000, 
        //             quantity : 4, 
        //             img: food
        //         }, 
        //         {
        //             name : "Sausage roll",
        //             price : 1000, 
        //             quantity : 10, 
        //             img: food2
        //         }, 
        //         {
        //             name : "Pancakes",
        //             price : 1000, 
        //             quantity : 6, 
        //             img: food
        //         }
        //     ]
        // }
    ])

    const tabList = tabObj.map((item, i) => <TabBlock key={i} icon={item.icon} header={item.header} number={item.amount}/>)
    // tab items
    const orderList = orders.map((items, i) => <Orders key={i} {...items}/>)

    

    useEffect(() => {
        fetchOrder(setOrders)
    }, [])

    console.log(orders)



  return (
    <div>
        <Nav onNav={setNav} nav={nav}/>
        {nav && <SideBar nav={nav} />}
        <div className='hidden sm:block z-[20]'>
            <SideBar />
        </div>

        <section className=' px-[--pdx] py-[.5em] pt-[4em] flex flex-col gap-[.5em]'>
            <div className='m-[10px]'>
                <div className='  '>
                    <h1 className='text-[2rem] poppins font-bold'>Welcome to Your DashBoard Israel!!</h1>
                    <p className='poppins text-[0.9rem]'>View your recent transactions and activity</p>
                </div>
            </div>

            {/* Tab Block */}
            <div className='flex gap-[1em]'>
                {tabList}
            </div>
            
        </section>
        <nav className='px-[--pdx]'>
            <ul className='flex mt-[1em] gap-[10px] ubun'>
                <li ><button onClick={() => handleOrder(setClicked)}  className={`p-[.5em] ${clicked === 'orders' ? " sm:hover:bg-[--black] bg-[--nav] text-[--black] sm:hover:text-[--nav]"  : " sm:hover:bg-[--nav] bg-[--black] text-[--nav] "} duration-[0.2s] px-[1em]  rounded-[5px] sm:hover:text-[--black] sm:hover:shadow-md shadow-[--black]`}>Recent Orders</button></li>
                <li ><button onClick={() => handleUpload(setClicked)}  className={`p-[.5em] ${clicked === 'upload' ? " sm:hover:bg-[--black] bg-[--nav] text-[--black] sm:hover:text-[--nav]"  : " sm:hover:bg-[--nav] bg-[--black] text-[--nav] "} duration-[0.2s] px-[1em]  rounded-[5px] sm:hover:text-[--black] sm:hover:shadow-md shadow-[--black]`}>Upload</button></li>
                <li ><button onClick={() => handlePayment(setClicked)}  className={`p-[.5em] ${clicked === 'payments' ? " sm:hover:bg-[--nav] bg-[--nav] sm:hover:text-[--black] text-[--black]"  : " sm:hover:bg-[--nav] bg-[--black] text-[--nav] "} duration-[0.2s] px-[1em]  rounded-[5px] sm:hover:text-[--black] sm:hover:shadow-md shadow-[--black]`}>Payment methods</button></li>
                <li ><button onClick={() => handleReceipts(setClicked)}  className={`p-[.5em] ${clicked === 'receipts' ? " sm:hover:bg-[--nav] bg-[--nav] sm:hover:text-[--black] text-[--black]"  : " sm:hover:bg-[--nav] bg-[--black] text-[--nav] "} duration-[0.2s] px-[1em]  rounded-[5px] sm:hover:text-[--black] sm:hover:shadow-md shadow-[--black]`}>Receipts</button></li>
            </ul>
        </nav>
        <section className='px-[--pdx]'>
            {
                clicked == "orders" && 
                <div className='flex flex-wrap gap-[1em] py-[1em]'>
                {orderList}
            </div>
            }

            {clicked == "payments" &&
                <div className='w-[50%] py-[1em]'>
                    <CardForm />
                </div>
            }
            {
               clicked == "upload" && <Upload />
            }
        </section>
    </div>
  )
}

export default Dashboard