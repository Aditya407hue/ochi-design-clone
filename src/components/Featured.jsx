import { motion, useAnimate, useAnimation } from "framer-motion";
import React, { useState } from "react";

const Featured = () => {
    const cards = [useAnimation(), useAnimation()];
    const handleHover = (index) => {
        cards[index].start({
            y: "0"
        })
    };
    const handleHoverEnd = (index) => {
        cards[index].start({
            y: "100%"
        })


    };

    return (
        <div className="w-full py-20 ">
            <div className="w-full px-16 border-b-[1px] pb-14 border-zinc-500">
                <h1 className="text-6xl tracking-tight font-[NeueMontreal]">
                    Featured Projects
                </h1>
            </div>
            <div className="cards w-full flex gap-6 mt-10 px-14">
                <motion.div onHoverStart={() => handleHover(0)}
                    onHoverEnd={() => handleHoverEnd(0)}
                    className="cardcontainer w-1/2 h-[80vh] relative">
                    <h1 className="absolute flex left-full -translate-x-1/2 top-1/2 -translate-y-1/2 text-8xl tracking-tighter leading-none font-semibold text-[#CDEA68] overflow-hidden z-[9]">
                        {"FYDE".split("").map((item, index) => (
                            <motion.span initial={{ y: "100%" }} animate={cards[0]}
                                transition={{ ease: [0.22, 1, 0.36, 1], delay: index * .05 }} className="inline-block">
                                {item}
                            </motion.span>
                        ))}
                    </h1>
                    <div className="card w-full h-full rounded-2xl overflow-hidden">
                        <img
                            className="w-full h-full bg-cover"
                            src="https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-663x551.png"
                            alt=""
                        />
                    </div>
                </motion.div>
                <motion.div onHoverStart={() => handleHover(1)}
                    onHoverEnd={() => handleHoverEnd(1)}
                    className="cardcontainer w-1/2 h-[80vh] relative">
                    <h1 className="absolute flex right-full translate-x-1/2 top-1/2 -translate-y-1/2 text-8xl tracking-tighter leading-none font-semibold text-[#CDEA68] overflow-hidden z-[9]">
                        {"VISE".split("").map((item, index) => (
                            <motion.span initial={{ y: "100%" }} animate={cards[1]}
                                transition={{ ease: [0.22, 1, 0.36, 1], delay: index * .05 }} className="inline-block">
                                {item}
                            </motion.span>
                        ))}
                    </h1>
                    <div className="card w-full h-full rounded-2xl overflow-hidden">
                        <img
                            className="w-full h-full bg-cover"
                            src="https://ochi.design/wp-content/uploads/2022/09/Vise_front2-663x551.jpg"
                            alt=""
                        />
                    </div>

                </motion.div>

            </div>
        </div>
    );
};

export default Featured;
