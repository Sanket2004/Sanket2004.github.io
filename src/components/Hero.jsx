import { motion } from 'framer-motion';
import React from 'react';

function Hero() {
    return (
        <div>
            <section className='bg-stone-950 text-white flex justify-center	items-center text-center lg:text-left min-h-screen' >
                <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16 ">
                    <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-48 items-center justify-between" >
                        <div className="flex justify-center md:justify-center lg:justify-end items-center relative overflow-hidden  mx-auto h-full w-full lg:order-last" >
                            <motion.img
                                whileInView={{ opacity: 1, y: 0 }} // Animation when component mounts
                                initial={{ opacity: 0, y: -50 }} // Initial animation state
                                transition={{ delay: 0, duration: 0.2 }} // Delay and duration for the animation
                                alt="Sanket Banerjee"
                                src="/s.png"
                                className="bg-stone-500 h-64 w-64 sm:h-80 sm:w-80 lg:h-80 lg:w-80 object-cover rounded-full lg:rounded-full lg:rotate-6 lg:mr-6"
                            />
                        </div>

                        <div
                            className="lg:py-24"
                        >
                            <motion.h1
                                whileInView={{ opacity: 1, y: 0 }} // Animation when component mounts
                                initial={{ opacity: 0, y: 20 }} // Initial animation state
                                transition={{ delay: 0, duration: 0.5 }} // Delay and duration for the animation
                                className="text-3xl font-normal sm:text-5xl"
                            >
                                Hello Folks 👋
                            </motion.h1>
                            <motion.h1
                                whileInView={{ opacity: 1, y: 0 }} // Animation when component mounts
                                initial={{ opacity: 0, y: 20 }} // Initial animation state
                                transition={{ delay: 0.3, duration: 0.5 }} // Delay and duration for the animation
                                className="text-3xl font-extrabold sm:text-5xl text-stone-500 mt-4"
                            >I'm Sanket Banerjee </motion.h1>

                            <motion.p
                                whileInView={{ opacity: 1, y: 0 }} // Animation when component mounts
                                initial={{ opacity: 0, y: 20 }} // Initial animation state
                                transition={{ delay: 0.6, duration: 0.5 }} // Delay and duration for the animation
                                className="mt-4 max-w-lg sm:text-l/relaxed"
                            >
                                I'm a computer science engineering student and an aspiring software developer based in Asansol, who's fascinated with android & web technologies.
                            </motion.p>

                            <div
                                className="mt-8 flex flex-wrap gap-4 text-center justify-center lg:justify-start"
                            >
                                <motion.a
                                    whileInView={{ opacity: 1, y: 0 }}
                                    initial={{ opacity: 0, y: 20 }}
                                    transition={{ delay: 0.9, duration: 0.5 }}
                                    href="#contact"
                                    className="flex justify-center items-center gap-2 w-full rounded bg-stone-600 px-8 py-3 text-sm font-medium text-white shadow hover:bg-stone-700 focus:outline-none focus:ring active:bg-stone-500 sm:w-auto"
                                >
                                    Let's Connect <svg className='h-4 w-4' viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M4 12H20M12 4V20" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>

                                </motion.a>

                                <motion.a
                                    whileInView={{ opacity: 1, y: 0 }}
                                    initial={{ opacity: 0, y: 20 }}
                                    transition={{ delay: 1, duration: 0.5 }}
                                    href="/sanket_resume.pdf"
                                    className="flex justify-center items-center gap-2 w-full rounded bg-white px-8 py-3 text-sm font-medium text-stone-600 shadow hover:text-stone-700 focus:outline-none focus:ring active:text-stone-500 sm:w-auto"
                                >
                                    Resume <i className="text fa-regular fa-file-lines"></i>
                                </motion.a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Hero;
