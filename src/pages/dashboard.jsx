import React, { useContext, useEffect, useRef } from 'react'
import Nav from '../components/primary-comp/nav'
import SideBar from '../components/primary-comp/sidebar'
import { useState } from 'react'
import { faCartShopping, faDollar, faNairaSign, faSpinner } from '@fortawesome/free-solid-svg-icons'
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
import AuthContext from '../utils/provider'
import { useNavigate } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useInView, motion } from 'framer-motion'

function Dashboard() {

    const {isAuthenticated, adminUser} = useContext(AuthContext)
    const [clicked, setClicked] = useState(adminUser ? "orders" : "receipts")
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState("")
    const navigate = useNavigate()
    const value = adminUser ? 9 : 2

    const [nav, setNav] = useState(false)
    const [tabObj, setTabObj] = useState([
        { 
            header : "Balance",
            amount : 62456,
            icon : faNairaSign
        }, 
        
        {
            header : "Purchases",
            amount : 95,
            icon : faDollar
        }, 
        {
            header : "total Orders",
            amount : 100,
            icon : faCartShopping
        }, 
        
    ])


   
    const [orders, setOrders] = useState([
    ])
    const [receipts, setReceipts] = useState([
    ])

    const tabList = tabObj.filter(items => tabObj.indexOf(items) != value).map((item, i) => <TabBlock orders={orders.length} key={i} receipts={receipts.length} icon={item.icon} header={item.header} number={item.amount}/>)
    // tab items
    const orderList = orders.map((items, i) => <Orders key={i} {...items}/>)
    const receiptList = receipts.map((items, i) => <Receipts key={i} {...items}/>)

    const moreOrders = useRef(null)
    const inView = useInView(moreOrders)
    const [pageComplete, setPageComplete] = useState(false)

    let data = {
        page : Math.round(orderList.length / 10 + 1), 
        onComplete : setPageComplete
    }

    useEffect(() => {
        if(inView && orderList.length > 0 && clicked === "orders" && pageComplete == false) {
            console.log(inView)
            fetchOrder(setOrders, setLoading, setError, data)
            console.log(orders, 'event')
        }
    }, [inView])
    

    useEffect(() => {
        setOrders([])
        if(adminUser || sessionStorage.getItem('admin')) {
            fetchOrder(setOrders, setLoading, setError, data)

        }
        fetchreceipts(setLoading, setReceipts, setError, 1)
    }, [])

    useEffect(() => {
        if(error == 401) {
            navigate("/authenticate")
        }
    }, [error])


  return (
    <div>
        <Nav onNav={setNav} nav={nav}/>
        {nav && <SideBar nav={nav} />}
        <div className='hidden sm:block z-[20]'>
            <SideBar />
        </div>

        <section className=' sm:pl-[--pdx] py-[.5em] pt-[4em] flex sm:flex-row flex-col gap-[.5em] items-center'>
            <div className={`m-[10px] ${adminUser ? "sm:w-[50%]" :"sm:w-[63%]"}`}>
                <div className='  '>
                    <h1 className='text-[2rem] poppins font-bold'>Welcome to Your DashBoard</h1>
                    <p className='poppins text-[0.9rem]'>View your recent transactions and activity</p>
                </div>
            </div>

            {/* Tab Block */}
            <div className={`flex gap-[0em] ml-[1em] sm:pl-0 ${ adminUser ?  "sm:w-[50%]" : "w-auto"} sm:flex-nowrap flex-wrap sm:px-0 px-[1em] bg-[--nav] justify-between mt-[10px] rounded-[5px] mr-[10px]`}>
                {tabList}
            </div>
            
        </section>
        <nav className='sm:px-[--pdx] px-[1em]'>
            <ul className='flex mt-[1em] sm:w-auto w-[90%] sm:justify-normal justify-between ubun flex-wrap'>
                {adminUser && <li ><button onClick={() => handleOrder(setClicked)}  className={`p-[.5em] ${clicked === 'orders' ? " sm:hover:bg-[--black] bg-[--nav] text-[--black] sm:hover:text-[--nav]"  : " sm:hover:bg-[--nav] bg-[--black] text-[--nav] "} duration-[0.2s] px-[1em]  sm:hover:text-[--black] sm:hover:shadow-md shadow-[--black]`}>Recent Orders</button></li>}
                {adminUser && <li ><button onClick={() => handleUpload(setClicked)}  className={`p-[.5em] ${clicked === 'upload' ? " sm:hover:bg-[--black] bg-[--nav] text-[--black] sm:hover:text-[--nav]"  : " sm:hover:bg-[--nav] bg-[--black] text-[--nav] "} duration-[0.2s] px-[1em]  sm:hover:text-[--black] sm:hover:shadow-md shadow-[--black]`}>Upload</button></li>}
                {!adminUser && <li ><button onClick={() => handleReceipts(setClicked)}  className={`p-[.5em] ${clicked === 'receipts' ? " sm:hover:bg-[--nav] bg-[--nav] sm:hover:text-[--black] text-[--black]"  : " sm:hover:bg-[--nav] bg-[--black] text-[--nav] "} duration-[0.2s] px-[1em]  sm:hover:text-[--black] sm:hover:shadow-md shadow-[--black]`}>Receipts</button></li>}
                {!adminUser && <li ><button onClick={() => handlePayment(setClicked)}  className={`p-[.5em] ${clicked === 'payments' ? " sm:hover:bg-[--nav] bg-[--nav] sm:hover:text-[--black] text-[--black]"  : " sm:hover:bg-[--nav] bg-[--black] text-[--nav] "} duration-[0.2s] px-[1em]  sm:hover:text-[--black] sm:hover:shadow-md shadow-[--black]`}>Payment methods</button></li>}
            </ul>
        </nav>
        <section className='sm:px-[--pdx] px-[1em]'>
            {
                clicked === "orders" && 
                <div className='flex flex-wrap gap-[1em] py-[1em]'>
                    {
                        loading || orderList.length === 0 ?
                         <Loading /> 
                         :
                         orderList

                     }
                </div>
            }

            {clicked === "payments" &&
                <div className='w-[100%] py-[1em]'>
                    <CardForm />
                </div>
            }
            {
               clicked === "upload" && <Upload />
            }
            {
               clicked === "receipts" && 
            <div className='flex flex-wrap sm:flex-col py-[1em]'>
                <h2 className='poppins text-[1.2rem] font-bold m-[10px]'>Receipts</h2>
                <div className='flex flex-wrap gap-[1em]'>
                    {loading && receiptList.length === 0 ? <Loading /> : receiptList}
                </div>
                
            </div>
            }
            { pageComplete ? 
                <div className='p-[2em] text-center'>
                    <h2 className='poppins font-bold text-[2rem] capitalize text-[--black]'>You are caught up!!!</h2>
                </div>
            :

            <motion.div  className='w-full py-[1em]  text-center'>
                        <FontAwesomeIcon ref={moreOrders} icon={faSpinner} className='font-bold text-[3rem] animate-spin text-[--black]'/>
            </motion.div>
            }
        </section>
    </div>
  )
}

export default Dashboard