import React, { useEffect } from 'react'
import Nav from '../components/primary-comp/nav'
import { easeInOut, motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import food1 from "../assets/food1.jpeg"
import food3 from "../assets/food3.jpeg"
import food4 from "../assets/food4.jpeg"
import food5 from "../assets/food5.jpg"
import food6 from "../assets/food6.jpg"
import food7 from "../assets/food7.jpg"
import food8 from "../assets/food8.jpeg"
import food9 from "../assets/food9.jpg"
import food10 from "../assets/food10.jpeg"
import yoshina from "../assets/yoshina.jpeg"
import Foot from '../components/primary-comp/foot'
import SideBar from '../components/primary-comp/sidebar'
import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleRight } from '@fortawesome/free-solid-svg-icons'
import img from "../assets/land3.png"

import {Swiper, SwiperSlide} from 'swiper/react'
import "swiper/css" 


function Landing() {

    const navigate = useNavigate()
    const [nav, setNav] = useState(false)
    
    const objList = [
        {
            name : "Sumptous Fried Fries",
            price : "2500.00", 
            available: 40, 
            img: food1
          },
          {
            name : "Immortal Veggies goodness",
            price : "1600.00", 
            available: 20, 
            img: food10
          },
          {
            name : "Pancakes",
            price : "9000.00", 
            available: 10, 
            img: food3
          },
          {
            name : "Buger",
            price : "3000.00", 
            available: 30, 
            img: food4
          },
          {
            name : "Veggies goodness",
            price : "1400.00", 
            available: 5, 
            img: food5
          },
          {
            name : "Delicacy",
            price : "4000.00", 
            available: 30, 
            img: food6
          },
          {
            name : "Delicacy",
            price : "1900.00", 
            available: 10, 
            img: food7
          },
          {
            name : "pizza",
            price : "20000.00", 
            available: 50, 
            img: food8
          },
          {
            name : "Pizzas",
            price : "15000.00", 
            available: 15, 
            img: food9
          },
    ] 

  return (
    <div>
        <Nav onNav={setNav} nav={nav}/>
        {nav && <SideBar nav={nav} />}
        <div className='hidden sm:block z-[20]'>
            <SideBar />
        </div>
        

        <section className='h-screen flex items-center px-[6em] justify-between'>
          <div className='w-[50%] flex flex-col gap-[4em]'>
            <div className='flex flex-col'>
              <h1 className='text-[2.5rem] capitalize ubun'>Swift Delivery, Trusted Service <br /> <span className='poppins font-bold'>Experience</span> the best!</h1>
              <p className='poppins text-[1.2rem]'>
                Craving something yummy?? <br />
                Place an order
              </p>
            </div>

            <button className='flex'>
              <div className='bg-[--black] flex items-center justify-center w-[40px] h-[40px]  text-2xl text-[--nav]'>
                <FontAwesomeIcon icon={faAngleRight}/>
              </div>
              <div className='bg-[--nav] text-[1.1rem] poppins h-[40px] flex items-center justify-center px-[.5em]'>
                Place an order
              </div>
            </button>

          </div>
          <div className='w-[50%] h-auto flex items-center justify-end  relative'>
              <div className=' h-[500px] w-[500px] absolute top-[4em] z-[-2] bg-[--blackv] rounded-[50%] blur-[90px] bg-opacity-10'>

              </div>
              <img src={img} alt="" />
          </div>
        </section>
        <section className='px-[--pdx] min-h-[40vh]'>

          <h1 className='uppercase ubun font-bold text-[2rem] text-center'>Our Menu</h1>
          <div>

          </div>
        </section>
    </div>
  )
}

export default Landing