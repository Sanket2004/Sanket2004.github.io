import { motion } from 'framer-motion'
import React, { useEffect } from 'react'
import { useInView } from 'react-intersection-observer';


function Footer() {

    const { ref, inView } = useInView({
        threshold: 0.5, // Trigger animation when 50% of the About section is in view
        triggerOnce: true // Trigger animation only once
    });

    useEffect(() => {
        if (inView) {
            console.log("in projcts");
            // Start animation when About section comes into view
            // You can add more logic or start additional animations here
        }
    }, [inView]);

    function scrollToTop() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth' // Smooth scrolling animation
        });
    }

    return (
        <motion.footer
            ref={ref}
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.5 }}
            className="bg-slate-900">
            <div className="relative mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8 lg:pt-24">
                <motion.div initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ delay: 0.7, duration: 0.5 }}
                    className="absolute end-4 top-4 sm:end-6 sm:top-6 lg:end-8 lg:top-8">
                    <a
                        className="cursor-pointer inline-block rounded-full bg-cyan-600 p-2 text-white shadow transition hover:bg-cyan-500 sm:p-3 lg:p-4"
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
                    </a>
                </motion.div>

                <motion.div initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ delay: 0.8, duration: 0.5 }}
                    className="lg:flex lg:items-end lg:justify-between">
                    <div>
                        <div className="flex justify-center text-cyan-500 lg:justify-start">
                            <h1 className='font-bold text-2xl'>Sanket Banerjee</h1>
                        </div>

                        <p className="mx-auto mt-6 max-w-md text-center leading-relaxed text-gray-300 lg:text-left">
                            An Android and Web Developer experienced in building full-stack responsive applications.
                        </p>
                    </div>

                    <ul
                        className="mt-12 flex flex-wrap justify-center gap-6 md:gap-8 lg:mt-0 lg:justify-end lg:gap-12"
                    >
                        <li>
                            <a className="text-gray-500 transition hover:text-gray-500/75" href='#about' > About </a>
                        </li>

                        <li>
                            <a className="text-gray-500 transition hover:text-gray-500/75" href="#education"> Education </a>
                        </li>

                        <li>
                            <a className="text-gray-500 transition hover:text-gray-500/75" href="#projects"> Projects </a>
                        </li>

                        <li>
                            <a className="text-gray-500 transition hover:text-gray-500/75" href="#contact"> Contact </a>
                        </li>
                    </ul>
                </motion.div>

                <motion.p initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ delay: 0.9, duration: 0.5 }}
                    className="mt-12 text-center text-sm text-gray-500 lg:text-right">
                    Copyright &copy; 2024. All rights reserved.
                </motion.p>
            </div>
        </motion.footer>
    )
}

export default Footer
