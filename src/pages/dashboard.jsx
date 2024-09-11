import React from 'react'
import Nav from '../components/primary-comp/nav'
import SideBar from '../components/primary-comp/sidebar'
import { useState } from 'react'
import { faCartShopping, faDollar, faNairaSign } from '@fortawesome/free-solid-svg-icons'

import TabBlock from '../components/dashboard/tabBlock'

function Dashboard() {

    const [clicked, setClicked] = useState("order")


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
        {
            orderId: self.crypto.randomUUID(), 
            date : "may 12, 2024",
            items : [
                {
                    name : "Pancakes",
                    price : 1000, 
                    quantity : 4
                }, 
                {
                    name : "Sausage roll",
                    price : 1000, 
                    quantity : 10
                }, 
                {
                    name : "Pancakes",
                    price : 1000, 
                    quantity : 6
                }
            ]
        }, 
        {
            orderId: self.crypto.randomUUID(), 
            date : "september 12, 2024",
            items : [
                {
                    name : "Pancakes",
                    price : 1000, 
                    quantity : 4
                }, 
                {
                    name : "Sausage roll",
                    price : 1000, 
                    quantity : 10
                }, 
                {
                    name : "Pancakes",
                    price : 1000, 
                    quantity : 6
                }
            ]
        }, 
        {
            orderId: self.crypto.randomUUID(), 
            date : "December 23, 2024",
            items : [
                {
                    name : "Pancakes",
                    price : 1000, 
                    quantity : 4
                }, 
                {
                    name : "Sausage roll",
                    price : 1000, 
                    quantity : 10
                }, 
                {
                    name : "Pancakes",
                    price : 1000, 
                    quantity : 6
                }
            ]
        }
    ])

    const tabList = tabObj.map((item, i) => <TabBlock key={i} icon={item.icon} header={item.header} number={item.amount}/>)

  return (
    <div>
        <Nav onNav={setNav} nav={nav}/>
        {nav && <SideBar nav={nav} />}
        <div className='hidden sm:block z-[20]'>
            <SideBar />
        </div>

        <section className='h-screen px-[--pdx] py-[4em]'>
            <div className='mt-[1em] m-[10px]'>
                <div className='  '>
                    <h1 className='text-[2rem] poppins font-bold'>Welcome to Your DashBoard Israel!!</h1>
                    <p className='poppins text-[0.9rem]'>View your recent transactions and activity</p>
                </div>
                <ul className='flex mt-[1em] gap-[1em] ubun'>
                    <li className='underline'>Orders</li>
                    <li className='underline'>Payment methods</li>
                    <li className='underline'>Receipts</li>
                </ul>
            </div>

            {/* Tab Block */}
            <div className='flex gap-[1em]'>
                {tabList}
            </div>
        </section>
    </div>
  )
}

export default Dashboard