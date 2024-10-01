import React, { useEffect, useRef } from 'react'
import Nav from '../components/primary-comp/nav'
import { easeInOut, motion, useInView } from 'framer-motion'
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
import { faAngleRight, faSpinner } from '@fortawesome/free-solid-svg-icons'
import img from "../assets/land3.png"
import img1 from "../assets/land1.png"

import {Swiper, SwiperSlide} from 'swiper/react'
import {Navigation, Pagination, Autoplay} from "swiper/modules"
import "swiper/css"
import "swiper/css/pagination"
import "swiper/css/navigation"
import MenuList from '../components/landing/menuList'
import fetchFoods from '../utils/order/fetchProducts'


function Landing() {

    const navigate = useNavigate()
    const [nav, setNav] = useState(false)
    const [isMobileView, setIsMobileView] = useState(window.innerWidth < 640)
    const ref = useRef(null)
    const inView = useInView(ref, {once : true})
    
    const [objList, setObjList] = useState([
    ]) 

    const menuSlide = objList.map((items, i) => <SwiperSlide key={i}> <MenuList name={items.name} img={items.img}/> </SwiperSlide>)

    useEffect(() => {
      fetchFoods(setObjList)

      const handleResize = () => {
        setIsMobileView(window.innerWidth < 640);
      };
  
      window.addEventListener('resize', handleResize);
      
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }, []);

  return (
    <div>
        <Nav onNav={setNav} nav={nav}/>
        {nav && <SideBar nav={nav} />}
        <div className='hidden sm:block z-[20]'>
            <SideBar />
        </div>
        

        <section className='h-screen flex items-center px-[1em] sm:px-[6em] justify-between'>
          <div className='sm:w-[90%] flex flex-col gap-[4em]'>
            <motion.div
            initial={{
              x: "-40px",
              opacity: 0
            }}

            transition={{
              duration: 1
            }}

            animate={{
              x: 0,
              opacity: [0, 0.1, 0.3, 0.5, 0.7, 1]
            }}

             className='flex flex-col'>
              <h1 className='sm:text-[3.4rem] text-[2.4em] capitalize ubun'>Swift Delivery, Trusted Service,  <span className='poppins font-bold '>Experience</span> the best!</h1>
              <p className='poppins text-[1.2rem]'>
                Craving something yummy?? 
                Place an order
              </p>
            </motion.div>

            <motion.button
              initial={{
                x: "-300px",
                opacity: 0
              }}

              transition={{
                duration: .5
              }}

              whileHover={{
                x: "2em"
              }}

              animate={{
                x: 0,
                opacity: [0, 0.1, 0.3, 0.5, 0.7, 1]
              }}

              onClick={() => navigate("/menu")}
             className='flex'>
              <div className='bg-[--black] flex items-center justify-center w-[40px] h-[40px]  text-2xl text-[--nav]'>
                <FontAwesomeIcon icon={faAngleRight}/>
              </div>
              <div className='bg-[--nav] capitalize text-[1.1rem] poppins h-[40px] flex items-center justify-center px-[.5em]'>
                Go To our menu
              </div>
            </motion.button>

          </div>
          <div className='w-[50%] h-auto hidden sm:flex items-center justify-end  relative'>
              <div className=' h-[500px] w-[500px] absolute top-[4em] z-[-2] bg-[--blackv] rounded-[50%] blur-[90px] bg-opacity-10'>

              </div>
              <img className='' src={img} alt="" />
          </div>
        </section>
        <section className='sm:px-[6em] px-[1em] flex flex-col justify-center'>

          <h2 className='uppercase text-[--black] poppins font-bold text-[1.5rem] sm:text-[2rem] text-center'>Our Menu</h2>
          <div className='menu  sm:px-[2em]'>
              {
                menuSlide.length <= 0 ?

                <div className='w-full text-center py-[2em] animate-spin'>
                  <FontAwesomeIcon icon={faSpinner} className='text-[4rem]'/>
                </div>

                :

                <Swiper
              modules={[Pagination, Navigation, Autoplay]}
              spaceBetween={1}
              loop={true}
              autoplay={{delay : 3000}}
              slidesPerView={isMobileView ? 3 : 7}
              navigation = {true}
              pagination = {{clickable: true}}
              >
                {menuSlide}
              </Swiper>
              }
          </div>
        </section>
        <section className='sm:px-[--pdx] px-[1em] py-[1em]'>
          <h2 className='sm:text-[2rem] text-[1.5rem] font-bold py-[1em] text-[--black] text-center poppins uppercase '>Categories</h2>
          <div ref={ref} className='flex flex-col sm:flex-row justify-between gap-[2em]'>
            <motion.div
              style={{
                y: !inView ? "4em" : "0",
                transition: "1s"
              }}
  
             className='sm:w-[50%]  h-[200px] bg-[--blackv] rounded-[5px] p-[.5em]'>
              <div className='w-full relative rounded-[3px] h-full  back'>
                <div className='absolute rounded-[3px] top-0 w-full bg-[#00000091] h-full flex items-center justify-center gap-[2em]'>
                  
                  <h3 className='sm:text-[2rem] text-[1.5rem] ubun text-white sm:mr-[2em]'>Fast Foods</h3>

                  <ul className='text-[--nav] poppins sm:text-xl list-disc'>
                    <li>Snacks</li>
                    <li>Burgers</li>
                    <li>Hot dogs</li>
                  </ul>
                  <ul className='text-[--nav] poppins sm:text-xl list-disc'>
                    <li>Snacks</li>
                    <li>Burgers</li>
                    <li>Hot dogs</li>
                  </ul>

                </div>
              </div>
            </motion.div>
            <motion.div
              style={{
                y: !inView ? "6em" : "0",
                transition: "1s"
              }}
             className='sm:w-[50%] rounded-[5px] h-[200px] bg-[--blackv] p-[.5em]'>
              <div className='w-full rounded-[5px] relative h-full  back1'>
                <div className='absolute rounded-[3px] top-0 w-full bg-[#00000091] h-full flex items-center justify-center gap-[2em]'>
                  <h3 className='sm:text-[2rem] text-[1.5rem] ubun text-white sm:mr-[2em]'>Drinks</h3>

                      <ul className='text-[--nav] poppins sm:text-xl list-disc'>
                        <li>Tea</li>
                        <li>Coffee</li>
                        <li>Soft Drinks</li>
                      </ul>
                      <ul className='text-[--nav] poppins sm:text-xl list-disc'>
                        <li>Wines</li>
                        <li>Latte</li>
                        <li>Hot dogs</li>
                      </ul>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
        <section ref={ref} className=' sm:gap-0 gap-[4em]  flex sm:flex-row flex-col-reverse justify-between px-[1em] sm:px-[--pdx] items-center py-[2em]'>
          <motion.div
          style={{
            x: !inView ? "-9em" : "0", 
            transition: "1s"
            // opacity: !inView ? [0, 0.1, 0.3, 0.5, 0.7, 1] : 0
          }}

           className='w-[50%] flex  items-center justify-center relative'>
              <div className=' sm:h-[500px] h-[240px] w-[240px] sm:w-[500px] absolute top-[2em] z-[-2] bg-[--blackv] rounded-[50%] blur-[90px] bg-opacity-10'>

              </div>
              <img src={img1} className='sm:h-[500px]' alt="" />
          </motion.div>
          <motion.div
          initial={{
            x: "2em",
            opacity: 0
          }}

          transition={{
            duration: .9
          }}

          whileInView={{
            x: 0,
            opacity: 1
          }}
           className='sm:w-[50%] w-[90%] flex flex-col sm:h-auto h-full gap-[20px]'>
            <h3 className='sm:text-[2rem] text-[1.5rem] poppins font-bold poppins text-[--black]  uppercase'>About Us</h3>
              <p className='poppins text-[0.9rem]'>
                At Resto Kans, we are committed to providing an exceptional dining experience with a focus on quality, comfort, and convenience. Our team is dedicated to ensuring that every guest enjoys outstanding service, whether they are dining in or ordering from home. With a menu crafted from the finest ingredients, our chefs prepare delicious meals tailored to every taste.

                We also offer a seamless online ordering system, making it easy to place orders from your phone or computer. Our e-services provide a variety of payment options, including credit cards and digital wallets, ensuring secure and hassle-free transactions</p>
              <motion.button
                whileHover={{
                  x: '2em'
                }}
                
                transition={{
                  duration: .5
                }}
               className='flex'>
                <div className='bg-[--black] flex items-center justify-center w-[40px] h-[40px]  text-2xl text-[--nav]'>
                  <FontAwesomeIcon icon={faAngleRight}/>
                </div>
                <div onClick={() => navigate("/authenticate")} className='bg-[--nav] capitalize text-[1.1rem] poppins h-[40px] flex items-center justify-center px-[.5em]'>
                   Log in
                </div>
            </motion.button>
          </motion.div>
        </section>
        <Foot />
        
    </div>
  )
}

export default Landing