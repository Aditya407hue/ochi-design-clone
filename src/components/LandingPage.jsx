import { motion } from 'framer-motion';
import React from 'react'
import { MdArrowOutward } from "react-icons/md";


const LandingPage = () => {
    return (
        <div data-scroll data-scroll-speed="-.3" className='w-full h-screen pt-1'>
            <div className="textstructure mt-32 px-16">
                {["We Create", "Eye Opening", "Presentations"].map((item, index) => {
                    return (
                        <div className="masker">
                            <div className='w-fit flex items-end overflow-hidden'>
                                {index === 1 && (<motion.div initial={{ width: 0 }} animate={{ width: "8vw" }} transition={{ ease: [0.76, 0, 0.24, 1], duration: 1 }} className='mr-5 w-[8vw] rounded-xl h-[5.7vw] -top-[0.6vw] relative bg-[url("https://ochi.design/wp-content/uploads/2022/04/content-image01.jpg")] bg-cover overflow-hidden '></motion.div>)}
                                <h1 className="uppercase text-8xl leading-none tracking-tighter font-semibold">{item}</h1>
                            </div>
                        </div>
                    )
                })}

            </div>
            <div className='border-t-[1px] border-zinc-700 mt-20 flex justify-between items-center px-8 py-3 font-["Roboto"]'>
                {["For public and private companies", "From the first pitch to IPO"].map((item, index) => <p className='text-md tracking-tight leading-none'>{item}</p>)}
                <div className='start flex items-center gap-5'>
                    <div className='px-3 py-2 border-[1px] border-zinc-600 rounded-full text-sm'>START THE PROJECT</div>
                    <div className='w-10 h-10 border-[1px] border-zinc-600 rounded-full flex items-center justify-center'><MdArrowOutward />
                    </div>
                </div>
            </div>
        </div >
    )
}

export default LandingPage