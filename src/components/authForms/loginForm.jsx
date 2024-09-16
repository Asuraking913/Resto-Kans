import React from 'react'
import logo1 from "../../assets/logo1.svg"
import { motion, AnimatePresence } from 'framer-motion'

function LoginForm({onLogin}) {


  return (
    <form action="#" className='w-full flex flex-col gap-[1em]'>
        <h2 className='text-2xl poppins text-center font-bold text-[--black]'>Login</h2>
            <p className='poppins'>
              <label htmlFor="email">Email Address</label>
              <input className='block border-[--blackv] border-[1.5px] w-full p-[8px] rounded-[5px]' type="email" name="email" id="email" />
            </p>
            <p>
              <label htmlFor="password">Password</label>
              <input className='block border-[--blackv] border-[1.5px] w-full p-[8px] rounded-[5px]' type="password" name="password" id="password" />
            </p>

            <div className='flex justify-end'>
              <span className='poppins text-[0.9rem] underline hover:opacity-80'>
                Forgotten Password
              </span>
            </div>

            <button className='p-[10px] bg-[--black] rounded-[5px] shadow-sm shadow-[--blackv] text-[--nav] poppins font-bold' type="submit">Log In</button>

            <div className='flex justify-center border-b-[1px] border-[--black] relative mt-[2em]'>
              <p className='backdrop-blur-md  absolute top-[-8px] poppins border-transparent border-[0px] w-[100px] flex items-center justify-center'>or</p>
            </div>

            <span className='p-[10px] bg-[--nav] justify-center flex items-center rounded-[5px] shadow-sm shadow-[--blackv] text-[--black] poppins  mt-[1em]'>
              <div className='flex gap-[1em] capitalize'>
                <img src={logo1} className='w-[20px] h-[20px]' alt="" />
                <span>Continue with google</span>
              </div>
            </span>
            <span onClick={() => onLogin(false)} className='text-center text-[0.9rem] poppins underline hover:opacity-80'>Sign Up?</span>
          </form>
  )
}

export default LoginForm