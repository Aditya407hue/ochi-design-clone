import React from 'react'
import { motion } from 'framer-motion'

const Marquee = () => {
    return (
        <div data-scroll data-scroll-section data-scroll-speed=".1" className='w-full py-10 bg-[#004D43] text-white rounded-tl-3xl rounded-tr-3xl '>
            <div className="text border-t-2 border-b-2 border-x-zinc-300 flex whitespace-nowrap  font-['Test_Founders Gotesk X-Cond SmBd'] overflow-hidden">
                <motion.h1 initial={{ x: "0" }} animate={{ x: "-100%" }} transition={{ repeat: Infinity, ease: "linear", duration: 10 }} className='text-[22vw] tracking-tighter leading-none uppercase font-bold pr-6'>We are ochi</motion.h1>
                <motion.h1 initial={{ x: "0" }} animate={{ x: "-100%" }} transition={{ repeat: Infinity, ease: "linear", duration: 10 }} className='text-[22vw] tracking-tighter leading-none uppercase font-bold pr-6'>We are ochi</motion.h1>
            </div>
        </div>
    )
}

export default Marquee