import React from 'react'
import { motion } from 'framer-motion';

function Preloader() {
    return (
        <div className="w-full h-screen	bg-stone-950 overflow-hidden	">
            <div className='fixed top-1/2 left-1/2 translate-y-[-50%]	translate-x-[-50%]	flex justify-center items-center flex-col text-center'>
                <motion.h1
                    whileInView={{ opacity: 1, y: 0 }}
                    initial={{ opacity: 0, y: 20 }}
                    transition={{ delay: 0, duration: 0.5 }}
                    className='text-white font-bold sm:text-4xl text-2xl mb-4 text-stone-500'
                >
                    <code>
                        {"<Loading/>"}
                        </code>
                </motion.h1>

                <motion.h2
                    whileInView={{ opacity: 1, y: 0 }}
                    initial={{ opacity: 0, y: 20 }}
                    transition={{ delay: 0.5, duration: 0.5 }}
                    className='text-white sm:text-sm text-xs'>I am getting ready.</motion.h2>
            </div>
        </div>
    )
}

export default Preloader
