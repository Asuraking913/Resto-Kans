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
import SideBar from '../components/primary-comp/sidebar'
import Foot from '../components/primary-comp/foot'
import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleRight } from '@fortawesome/free-solid-svg-icons'
import img from "../assets/land3.png"
import img1 from "../assets/land1.png"

import {Swiper, SwiperSlide} from 'swiper/react'
import {Navigation, Pagination} from "swiper/modules"
import "swiper/css"
import "swiper/css/pagination"
import "swiper/css/navigation"
import MenuList from '../components/landing/menuList'


function Landing() {

    const navigate = useNavigate()
    const [nav, setNav] = useState(false)
    const [isMobileView, setIsMobileView] = useState(window.innerWidth < 640)

    
    const objList = [
      {
        name : "Sumptous Fried Fries",
        price : 2500.00, 
        available: 40, 
        img: food1, 
        id: self.crypto.randomUUID()
      },
      {
        name : "Sausage Delight",
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
        name : "Soul sage",
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
    ] 

    const menuSlide = objList.map((items, i) => <SwiperSlide key={i}> <MenuList name={items.name} img={items.img}/> </SwiperSlide>)

    useEffect(() => {
      const handleResize = () => {
        setIsMobileView(window.innerWidth < 640);
      };
  
      window.addEventListener('resize', handleResize);
      
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }, []);

    useEffect(() => {
      console.log(isMobileView)
    }, [isMobileView])

    const [slides , setSlides] = useState(7) 

  return (
    <div>
        <Nav onNav={setNav} nav={nav}/>
        {nav && <SideBar nav={nav} />}
        <div className='hidden sm:block z-[20]'>
            <SideBar />
        </div>
        

        <section className='h-screen flex items-center px-[1em] sm:px-[6em] justify-between'>
          <div className='sm:w-[50%] flex flex-col gap-[4em]'>
            <div className='flex flex-col'>
              <h1 className='text-[2.5rem] capitalize ubun'>Swift Delivery, Trusted Service  <span className='poppins font-bold sm:block'>Experience</span> the best!</h1>
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
          <div className='w-[50%] h-auto hidden sm:flex items-center justify-end  relative'>
              <div className=' h-[500px] w-[500px] absolute top-[4em] z-[-2] bg-[--blackv] rounded-[50%] blur-[90px] bg-opacity-10'>

              </div>
              <img src={img} alt="" />
          </div>
        </section>
        <section className='sm:px-[6em] px-[1em] flex flex-col justify-center'>

          <h2 className='uppercase text-[--black] poppins font-bold text-[1.5rem] sm:text-[2rem] text-center'>Our Menu</h2>
          <div className='menu  sm:px-[2em]'>
              <Swiper
              modules={[Pagination, Navigation]}
              spaceBetween={1}
              loop={true}
              slidesPerView={isMobileView ? 3 : 7}
              navigation = {true}
              pagination = {{clickable: true}}
              >
                {menuSlide}
              </Swiper>
          </div>
        </section>
        <section className='sm:px-[--pdx] px-[1em] py-[1em]'>
          <h2 className='sm:text-[2rem] text-[1.5rem] font-bold py-[1em] text-[--black] text-center poppins uppercase '>Categories</h2>
          <div className='flex flex-col sm:flex-row justify-between gap-[2em]'>
            <div className='sm:w-[50%]  h-[200px] bg-[--blackv] rounded-[5px] p-[.5em]'>
              <div className='w-full relative rounded-[3px] h-full  back'>
                <div className='absolute rounded-[3px] top-0 w-full bg-[#00000091] h-full flex items-center justify-center gap-[2em]'>
                  
                  <h3 className='sm:text-[2rem] text-[1.5rem] ubun text-white sm:mr-[2em]'>Fast Foods</h3>

                  <ul className='text-[--nav] poppins sm:text-xl list-disc'>
                    <li>Snacks</li>
                    <li>Burgers</li>
                    <li>Hot dogs</li>
                  </ul>
                  <ul className='text-[--nav] poppins text-xl list-disc'>
                    <li>Snacks</li>
                    <li>Burgers</li>
                    <li>Hot dogs</li>
                  </ul>

                </div>
              </div>
            </div>
            <div className='sm:w-[50%] rounded-[5px] h-[200px] bg-[--blackv] p-[.5em]'>
              <div className='w-full rounded-[5px] relative h-full  back1'>
                <div className='absolute rounded-[3px] top-0 w-full bg-[#00000091] h-full flex items-center justify-center gap-[2em]'>
                  <h3 className='sm:text-[2rem] text-[1.5rem] ubun text-white sm:mr-[2em]'>Drinks</h3>

                      <ul className='text-[--nav] poppins sm:text-xl list-disc'>
                        <li>Tea</li>
                        <li>Coffee</li>
                        <li>Soft Drinks</li>
                      </ul>
                      <ul className='text-[--nav] poppins text-xl list-disc'>
                        <li>Wines</li>
                        <li>Latte</li>
                        <li>Hot dogs</li>
                      </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className=' sm:gap-0 gap-[4em]  flex sm:flex-row flex-col-reverse justify-between px-[1em] sm:px-[--pdx] items-center py-[2em]'>

          <div className='w-[50%] flex  items-center justify-center relative'>
              <div className=' sm:h-[500px] h-[240px] w-[240px] sm:w-[500px] absolute top-[2em] z-[-2] bg-[--blackv] rounded-[50%] blur-[90px] bg-opacity-10'>

              </div>
              <img src={img1} className='sm:h-[500px]' alt="" />
          </div>
          <div className='sm:w-[50%] flex flex-col sm:h-auto h-full gap-[20px]'>
            <h3 className='sm:text-[2rem] text-[1.5rem] poppins font-bold poppins text-[--black]  uppercase'>About Us</h3>
              <p className='poppins text-[0.9rem]'>
                At Resto Kans, we are committed to providing an exceptional dining experience with a focus on quality, comfort, and convenience. Our team is dedicated to ensuring that every guest enjoys outstanding service, whether they are dining in or ordering from home. With a menu crafted from the finest ingredients, our chefs prepare delicious meals tailored to every taste.

                We also offer a seamless online ordering system, making it easy to place orders from your phone or computer. Our e-services provide a variety of payment options, including credit cards and digital wallets, ensuring secure and hassle-free transactions</p>
              <button className='flex'>
              <div className='bg-[--black] flex items-center justify-center w-[40px] h-[40px]  text-2xl text-[--nav]'>
                <FontAwesomeIcon icon={faAngleRight}/>
              </div>
              <div className='bg-[--nav] capitalize text-[1.1rem] poppins h-[40px] flex items-center justify-center px-[.5em]'>
                Sign Up with Us
              </div>
            </button>
          </div>
        </section>
        <Foot />
        
    </div>
  )
}

export default Landing