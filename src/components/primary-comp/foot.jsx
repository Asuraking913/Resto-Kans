import React from 'react'
import {motion} from "framer-motion"

function Foot() {
  return (
    <motion.div 
    initial={{
        y: "3em"
    }}

    transition={{
        duration: 1
    }}

    whileInView={{
        y: 0
    }}
    className='flex w-full bg-black justify-center py-[.5em]' >
        <p className='text-white poppins sm:text-xl'>&copy; Kans Resto</p>
    </motion.div>
  )
}

export default Foot