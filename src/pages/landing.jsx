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
import {Navigation, Pagination} from "swiper/modules"
import "swiper/css"
import "swiper/css/pagination"
import "swiper/css/navigation"
import MenuList from '../components/landing/menuList'


function Landing() {

    const navigate = useNavigate()
    const [nav, setNav] = useState(false)
    
    const objList = [
        {
            name : "Sumptous Fried Fries",
            img: food1
          },
          {
            name : "Immortal Veggies goodness",
            img: food10
          },
          {
            name : "Pancakes",
            img: food3
          },
          {
            name : "Buger",
            img: food4
          },
          {
            name : "Veggies goodness",
            img: food5
          },
          {
            name : "Delicacy",
            img: food6
          },
          {
            name : "Delicacy",
            img: food7
          },
          {
            name : "pizza",
            img: food8
          },
          {
            name : "Pizzas",
            img: food9
          },
    ] 

    const menuSlide = objList.map((items, i) => <SwiperSlide> <MenuList name={items.name} img={items.img}/> </SwiperSlide>)

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
        <section className='px-[6em] flex flex-col justify-center'>

          <h2 className='uppercase text-[--black] poppins font-bold text-[2rem] text-center'>Our Menu</h2>
          <div className='menu  px-[2em]'>
              <Swiper
              modules={[Pagination, Navigation]}
              spaceBetween={1}
              loop={true}
              slidesPerView={7}
              navigation = {true}
              pagination = {{clickable: true}}
              >
                {menuSlide}
              </Swiper>
          </div>
        </section>
        <section className='px-[--pdx] py-[1em]'>
          <h2 className='text-[2rem] font-bold py-[1em] text-[--black] text-center poppins uppercase '>Categories</h2>
          <div className='flex justify-between gap-[2em]'>
            <div className='w-[50%] h-[300px] bg-black p-[.5em]'>
              <div className='w-full relative h-full  back'>
                <div className='absolute top-0 w-full bg-[#00000091] h-full'>

                </div>
              </div>
            </div>
            <div className='w-[50%] h-[300px] bg-black p-[.5em]'>
              <div className='w-full relative h-full  back1'>
                <div className='absolute top-0 w-full bg-[#00000091] h-full'>

                </div>
              </div>
            </div>
          </div>
        </section>
    </div>
  )
}

export default Landing