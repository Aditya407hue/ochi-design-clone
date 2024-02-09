import React from 'react'

const About = () => {
    return (
        <div data-scroll data-scroll-section data-scroll-speed="-.3" className='w-full p-20 bg-[#CDEA68] rounded-tl-3xl rounded-tr-3xl text-black font-[NeueMontreal] '>
            <h1 className="font-[NeueMontreal] text-[4vw] leading-[3.8vw] tracking-tight">
                Ochi is a strategic partner for fast-grow­ing tech businesses that need to raise funds, sell prod­ucts, ex­plain com­plex ideas, and hire great peo­ple.
            </h1>
            <div className='w-full border-t-[1px] pt-4 mt-20 border-[#90a44b] flex gap-5'>
                <div className='w-1/2'>
                    <h1 className='text-5xl text-zinc-800'>Our approach :</h1>
                    <button className='flex gap-8 items-center px-8 py-4 bg-zinc-900 rounded-full text-white mt-6 uppercase '>Read More  <div className='w-2 h-2 bg-zinc-100 rounded-full'></div></button>

                </div>
                <div className='w-1/2 h-[70vh] rounded-2xl overflow-hidden'>
                    <img className='object-contain' src="https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-663x469.jpg" alt="" />
                </div>
            </div>
        </div>
    )
}

export default About