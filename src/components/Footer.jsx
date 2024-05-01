import { motion } from 'framer-motion'
import React, { useEffect } from 'react'



function Footer() {

    function scrollToTop() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth' // Smooth scrolling animation
        });
    }

    return (
        <footer
            className="bg-stone-900">
            <div className="relative mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8 lg:pt-24">
                <div className="absolute end-4 top-4 sm:end-6 sm:top-6 lg:end-8 lg:top-8">
                    <motion.a
                        whileInView={{ opacity: 1, y: 0 }}
                        initial={{ opacity: 0, y: 20 }}
                        transition={{ delay: 0, duration: 0.5 }}
                        whileHover={{ scale: 1.1, transition: { dealy: 0, duration: 0.1, ease: "easeInOut" } }} 
                        className="cursor-pointer inline-block rounded-full bg-stone-600 p-2 text-white shadow sm:p-3 lg:p-4"
                        onClick={scrollToTop}
                    >
                        <span className="sr-only">Back to top</span>

                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                        >
                            <path
                                fillRule="evenodd"
                                d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z"
                                clipRule="evenodd"
                            />
                        </svg>
                    </motion.a>

                </div>

                <div className="lg:flex lg:items-end lg:justify-between">
                    <div>
                        <div className="flex justify-center text-stone-500 lg:justify-start">
                            <motion.h1
                                whileInView={{ opacity: 1, x: 0 }}
                                initial={{ opacity: 0, x: -20 }}
                                transition={{ delay: 0, duration: 0.5 }}
                                className='font-bold text-2xl'>Sanket Banerjee</motion.h1>
                        </div>

                        <motion.p
                            whileInView={{ opacity: 1, x: 0 }}
                            initial={{ opacity: 0, x: -20 }}
                            transition={{ delay: 0.5, duration: 0.5 }}
                            className="mx-auto mt-6 max-w-md text-center leading-relaxed text-gray-300 lg:text-left">
                            An Android and Web Developer experienced in building full-stack responsive applications.
                        </motion.p>
                    </div>

                    <ul
                        className="mt-12 flex flex-wrap justify-center gap-6 md:gap-8 lg:mt-0 lg:justify-end lg:gap-12"
                    >
                        <motion.li
                            whileInView={{ opacity: 1, x: 0 }}
                            initial={{ opacity: 0, x: 20 }}
                            transition={{ delay: 0.7, duration: 0.5 }}
                        >
                            <a className="text-gray-500" href='#about' > About </a>
                        </motion.li>

                        <motion.li
                            whileInView={{ opacity: 1, x: 0 }}
                            initial={{ opacity: 0, x: 20 }}
                            transition={{ delay: 0.9, duration: 0.5 }}
                        >
                            <a className="text-gray-500" href="#education"> Education </a>
                        </motion.li>

                        <motion.li
                            whileInView={{ opacity: 1, x: 0 }}
                            initial={{ opacity: 0, x: 20 }}
                            transition={{ delay: 1.1, duration: 0.5 }}
                        >
                            <a className="text-gray-500" href="#projects"> Projects </a>
                        </motion.li>

                        <motion.li
                            whileInView={{ opacity: 1, x: 0 }}
                            initial={{ opacity: 0, x: 20 }}
                            transition={{ delay: 1.3, duration: 0.5 }}
                        >
                            <a className="text-gray-500" href="#contact"> Contact </a>
                        </motion.li>
                    </ul>
                </div>

                <motion.p
                    whileInView={{ opacity: 1, y: 0 }}
                    initial={{ opacity: 0, y: 20 }}
                    transition={{ delay: 1.5, duration: 0.5 }}
                    className="mt-12 text-center text-sm text-gray-500 lg:text-right">
                    Copyright &copy; 2024. All rights reserved.
                </motion.p>
            </div>
        </footer>
    )
}

export default Footer
