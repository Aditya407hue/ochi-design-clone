import React from 'react'

const Cards = () => {
    return (
        <div className='w-full h-screen flex gap-4 px-16 items-center'>
            <div className='cardcontainer h-[56vh] w-1/2'>
                <div className='card w-full h-full bg-[#004D43] rounded-xl flex items-center justify-center relative'>
                    <img className='' src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg" alt="" />
                    <button className='absolute left-8 bottom-8 text-lime-300 px-3 py-1 border-2  border-lime-300 rounded-full tracking-tighter font-semibold'>©️ 2019-2022</button>
                </div>
            </div>
            <div className='cardcontainer h-[56vh] w-1/2 flex gap-4'>
                <div className='card w-1/2 h-full bg-[#252424] rounded-xl flex items-center justify-center relative'>
                    <img className='' src="https://ochi.design/wp-content/uploads/2022/04/logo002.svg" alt="" />
                    <button className='absolute left-8 bottom-8 text-zinc-300 px-3 py-1 border-2  border-zinc-300 rounded-full tracking-tighter font-semibold'>5⭐on Clutch</button>
                </div>
                <div className='card w-1/2 h-full bg-[#212121] rounded-xl flex items-center justify-center relative'>
                    <img src="https://ochi.design/wp-content/uploads/2022/04/logo003.png" alt="" />
                    <button className='absolute left-8 bottom-8 text-zinc-300 px-3 py-1 border-2  border-zinc-300 rounded-full tracking-tighter font-semibold'>BOOTCAMP</button>
                </div>
            </div>
        </div>
    )
}

export default Cards