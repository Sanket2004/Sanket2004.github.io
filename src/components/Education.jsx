import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

function Education() {
    const { ref, inView } = useInView({
        threshold: 1, // Trigger animation when 50% of the Education section is in view
        triggerOnce: true // Trigger animation only once
    });

    return (
        <div>
            <section className="bg-slate-950 text-white" id='education' ref={ref}>
                <div className="mx-auto max-w-screen-xl px-4 pt-16 sm:px-6 lg:px-8">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                        transition={{ delay: 0.3, duration: 0.5 }}
                        className="text-3xl font-extrabold pb-2 sm:text-4xl border-b-8 w-min border-cyan-600">
                        Education
                    </motion.h1>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={inView ? { opacity: 1 } : { opacity: 0 }}
                        transition={{ delay: 0.5 }}>
                        <div className='bg-slate-950 mt-16 ml-4'>
                            <ol initial={{ opacity: 0, y: 20 }}
                                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                                transition={{ delay: 0.7, duration: 0.5 }}
                                className="relative border-s border-gray-200 dark:border-gray-700">
                                <li className="mb-10 ms-6">
                                    <span className="absolute flex items-center justify-center w-6 h-6 bg-cyan-100 p-4 rounded-full -start-4 ring-8 ring-white" >
                                        <i className="fa-solid fa-graduation-cap text-cyan-500"></i>
                                    </span>
                                    <h3 className="flex items-center mb-1 ml-4 text-2xl font-bold text-white">Asansol Engineering College</h3>
                                    <time className="block mb-2 ml-4 text-sm font-normal leading-none text-gray-200">2021-2025</time>
                                    <p className="mb-4 ml-4 text-base font-normal text-gray-500">Bachelor of Technology in Information Technology</p>
                                </li>
                                <li className="ms-6">
                                    <span className="absolute flex items-center justify-center w-6 h-6 bg-cyan-100 p-4 rounded-full -start-4 ring-8 ring-white" >
                                        <i className="fa-solid fa-graduation-cap text-cyan-500"></i>
                                    </span>
                                    <h3 className="flex items-center mb-1 ml-4 text-2xl font-bold text-white">Purulia Zilla School</h3>
                                    <time className="block mb-2 ml-4 text-sm font-normal leading-none text-gray-200">2019-2021</time>
                                    <p className="ml-4 text-base font-normal text-gray-500">Higher Secondary in Science</p>
                                </li>
                            </ol>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}

export default Education;
