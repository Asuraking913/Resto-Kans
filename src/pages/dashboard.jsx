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
import Loading from '../components/primary-comp/loading'
import fetchreceipts from '../utils/dashboard/fetchReceipts'
import Receipts from '../components/dashboard/receipts'

function Dashboard() {

    // const recent = useRef(null)
    // const payment = useRef(null)
    // const receipts = useRef(null)
    const [clicked, setClicked] = useState("orders")
    const [loading, setLoading] = useState(false)

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
    ])
    const [receipts, setReceipts] = useState([
    ])

    const tabList = tabObj.map((item, i) => <TabBlock orders={orders.length} key={i} icon={item.icon} header={item.header} number={item.amount}/>)
    // tab items
    const orderList = orders.map((items, i) => <Orders key={i} {...items}/>)
    const receiptList = receipts.map((items, i) => <Receipts key={i} {...items}/>)

    

    useEffect(() => {
        setOrders([])
        if(clicked == "orders") {
            fetchOrder(setOrders, setLoading)
        }
        if(clicked == "receipts") {
            fetchreceipts(setLoading, setReceipts)
        }
    }, [clicked])

    useEffect(() => {
        console.log(receipts)
    }, [receipts])

  return (
    <div>
        <Nav onNav={setNav} nav={nav}/>
        {nav && <SideBar nav={nav} />}
        <div className='hidden sm:block z-[20]'>
            <SideBar />
        </div>

        <section className=' sm:pl-[--pdx] py-[.5em] pt-[4em] flex sm:flex-row flex-col gap-[.5em] items-center'>
            <div className='m-[10px] sm:w-[50%]'>
                <div className='  '>
                    <h1 className='text-[2rem] poppins font-bold'>Welcome to Your DashBoard Israel!!</h1>
                    <p className='poppins text-[0.9rem]'>View your recent transactions and activity</p>
                </div>
            </div>

            {/* Tab Block */}
            <div className='flex gap-[0em] ml-[1em] sm:pl-0 sm:w-[50%] sm:flex-nowrap flex-wrap sm:px-0 px-[1em] bg-[--nav] justify-between mt-[10px] rounded-[5px] mr-[10px]'>
                {tabList}
            </div>
            
        </section>
        <nav className='sm:px-[--pdx] px-[1em]'>
            <ul className='flex mt-[1em] sm:w-auto w-[90%] sm:justify-normal justify-between ubun flex-wrap'>
                <li ><button onClick={() => handleOrder(setClicked)}  className={`p-[.5em] ${clicked === 'orders' ? " sm:hover:bg-[--black] bg-[--nav] text-[--black] sm:hover:text-[--nav]"  : " sm:hover:bg-[--nav] bg-[--black] text-[--nav] "} duration-[0.2s] px-[1em]  sm:hover:text-[--black] sm:hover:shadow-md shadow-[--black]`}>Recent Orders</button></li>
                <li ><button onClick={() => handleUpload(setClicked)}  className={`p-[.5em] ${clicked === 'upload' ? " sm:hover:bg-[--black] bg-[--nav] text-[--black] sm:hover:text-[--nav]"  : " sm:hover:bg-[--nav] bg-[--black] text-[--nav] "} duration-[0.2s] px-[1em]  sm:hover:text-[--black] sm:hover:shadow-md shadow-[--black]`}>Upload</button></li>
                <li ><button onClick={() => handlePayment(setClicked)}  className={`p-[.5em] ${clicked === 'payments' ? " sm:hover:bg-[--nav] bg-[--nav] sm:hover:text-[--black] text-[--black]"  : " sm:hover:bg-[--nav] bg-[--black] text-[--nav] "} duration-[0.2s] px-[1em]  sm:hover:text-[--black] sm:hover:shadow-md shadow-[--black]`}>Payment methods</button></li>
                <li ><button onClick={() => handleReceipts(setClicked)}  className={`p-[.5em] ${clicked === 'receipts' ? " sm:hover:bg-[--nav] bg-[--nav] sm:hover:text-[--black] text-[--black]"  : " sm:hover:bg-[--nav] bg-[--black] text-[--nav] "} duration-[0.2s] px-[1em]  sm:hover:text-[--black] sm:hover:shadow-md shadow-[--black]`}>Receipts</button></li>
            </ul>
        </nav>
        <section className='sm:px-[--pdx] px-[1em]'>
            {
                clicked === "orders" && 
                <div className='flex flex-wrap gap-[1em] py-[1em]'>
                    {loading || orderList.length === 0 ? <Loading /> : orderList}
                </div>
            }

            {clicked === "payments" &&
                <div className='w-[50%] py-[1em]'>
                    <CardForm />
                </div>
            }
            {
               clicked === "upload" && <Upload />
            }
            {
               clicked === "receipts" && 
            <div className='flex flex-wrap gap-[1em] py-[1em]'>
               {loading || receiptList.length === 0 ? <Loading /> : receiptList}
            </div>
            }
        </section>
    </div>
  )
}

export default Dashboard