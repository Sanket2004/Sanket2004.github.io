import { motion } from 'framer-motion';
import React from 'react';

function Hero() {
    return (
        <div>
            <motion.section
                initial={{ opacity: 0, y: 50 }} // Initial animation state
                animate={{ opacity: 1, y: 0 }} // Animation when component mounts
                transition={{ duration: 0.5 }} // Animation duration
                className='bg-slate-950 text-white flex justify-center	items-center text-center lg:text-left h-screen'
            >
                <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16 ">
                    <motion.div
                        initial={{ opacity: 0 }} // Initial animation state
                        animate={{ opacity: 1 }} // Animation when component mounts
                        transition={{ delay: 0.2, duration: 0.5 }} // Delay and duration for the animation
                        className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-48 items-center justify-between	"
                    >
                        <motion.div
                            initial={{ opacity: 0, x: -50 }} // Initial animation state
                            animate={{ opacity: 1, x: 0 }} // Animation when component mounts
                            transition={{ delay: 0.4, duration: 0.5 }} // Delay and duration for the animation
                            className="flex justify-center md:justify-center lg:justify-end items-center relative overflow-hidden  mx-auto h-full w-full lg:order-last  "
                        >
                            <motion.img
                                alt=""
                                src="src\assets\s.png"
                                className="bg-cyan-500 h-64 w-64 sm:h-80 sm:w-80 lg:h-80 lg:w-80 object-cover rounded-full lg:rounded-full lg:rotate-6 lg:mr-6 lg:shadow-[-14px_14px_0_0_white] transition-all duration-300 ease-in-out hover:rotate-0 hover:shadow-[0px_0px_0_0_white] hover:rounded-full"
                                whileHover={{ rotate: 0, scale: 0.9, boxShadow: "0px 0px 0px 0px white" }} // Animation on hover
                            />
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0 }} // Initial animation state
                            animate={{ opacity: 1 }} // Animation when component mounts
                            transition={{ delay: 0.6, duration: 0.5 }} // Delay and duration for the animation
                            className="lg:py-24"
                        >
                            <motion.h1
                                initial={{ opacity: 0, y: 20 }} // Initial animation state
                                animate={{ opacity: 1, y: 0 }} // Animation when component mounts
                                transition={{ delay: 0.8, duration: 0.5 }} // Delay and duration for the animation
                                className="text-3xl font-extrabold sm:text-5xl"
                            >
                                Hello Folks 👋
                                <strong className="block font-extrabold text-cyan-500 mt-4">I'm Sanket Banerjee </strong>
                            </motion.h1>

                            <motion.p
                                initial={{ opacity: 0, y: 20 }} // Initial animation state
                                animate={{ opacity: 1, y: 0 }} // Animation when component mounts
                                transition={{ delay: 1, duration: 0.5 }} // Delay and duration for the animation
                                className="mt-4 max-w-lg sm:text-l/relaxed"
                            >
                                I'm a computer science engineering student and an aspiring software developer based in Asansol, who's fascinated with android & web technologies.
                            </motion.p>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }} // Initial animation state
                                animate={{ opacity: 1, y: 0 }} // Animation when component mounts
                                transition={{ delay: 1.2, duration: 0.5 }} // Delay and duration for the animation
                                className="mt-8 flex flex-wrap gap-4 text-center justify-center lg:justify-start"
                            >
                                <motion.a
                                    whileHover={{ scale: 1.1 }} // Animation on hover
                                    whileTap={{ scale: 0.9 }} // Animation on tap
                                    href="#contact"
                                    className="flex justify-center items-center gap-2 w-full rounded bg-cyan-600 px-8 py-3 text-sm font-medium text-white shadow hover:bg-cyan-700 focus:outline-none focus:ring active:bg-cyan-500 sm:w-auto"
                                >
                                    Let's Connect <svg className='h-4 w-4' viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M4 12H20M12 4V20" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>

                                </motion.a>

                                <motion.a
                                    whileHover={{ scale: 1.1 }} // Animation on hover
                                    whileTap={{ scale: 0.9 }} // Animation on tap
                                    href="src\assets\Sanket's Resume.pdf"
                                    className="flex justify-center items-center gap-2 w-full rounded bg-white px-8 py-3 text-sm font-medium text-cyan-600 shadow hover:text-cyan-700 focus:outline-none focus:ring active:text-cyan-500 sm:w-auto"
                                >
                                    Resume <i className="text fa-regular fa-file-lines"></i>
                                </motion.a>
                            </motion.div>
                        </motion.div>
                    </motion.div>
                </div>
            </motion.section>
        </div>
    )
}

export default Hero;
