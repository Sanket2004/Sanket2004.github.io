import React from 'react';
import { motion } from 'framer-motion';

function Education() {

    return (
        <div>
            <section className="bg-stone-950 text-white" id='education'>
                <div className="mx-auto max-w-screen-xl px-4 pt-16 sm:px-6 lg:px-8">
                    <motion.h1
                        whileInView={{ opacity: 1, x: 0 }}
                        initial={{ opacity: 0, x: -20 }}
                        transition={{ delay: 0, duration: 0.5 }}
                        className="text-3xl font-extrabold pb-2 sm:text-4xl border-b-8 w-min border-stone-600">
                        Education
                    </motion.h1>
                    <div
                    >
                        <div className='bg-stone-950 mt-16 ml-4'>
                            <ol className="relative border-s border-gray-200 dark:border-gray-700">
                                <li className="mb-10 ms-6">
                                    <motion.span
                                        whileInView={{ opacity: 1, y: 0 }}
                                        initial={{ opacity: 0, y: 40 }}
                                        transition={{ delay: 0.5, duration: 0.5 }}
                                        className="absolute flex items-center justify-center w-6 h-6 bg-stone-100 p-4 rounded-full -start-4 ring-8 ring-white" >
                                        <i className="fa-solid fa-graduation-cap text-stone-500"></i>
                                    </motion.span>
                                    <motion.h3
                                        whileInView={{ opacity: 1, y: 0 }}
                                        initial={{ opacity: 0, y: -40 }}
                                        transition={{ delay: 0.7, duration: 0.5 }}
                                        className="flex items-center mb-1 ml-4 text-2xl font-bold text-white">Asansol Engineering College</motion.h3>
                                    <motion.time
                                        whileInView={{ opacity: 1, y: 0 }}
                                        initial={{ opacity: 0, y: -40 }}
                                        transition={{ delay: 0.9, duration: 0.5 }}
                                        className="block mb-2 ml-4 text-sm font-normal leading-none text-gray-200">2021-2025</motion.time>
                                    <motion.p
                                        whileInView={{ opacity: 1, y: 0 }}
                                        initial={{ opacity: 0, y: -40 }}
                                        transition={{ delay: 1.1, duration: 0.5 }}
                                        className="mb-4 ml-4 text-base font-normal text-gray-500">Bachelor of Technology in Information Technology</motion.p>
                                </li>
                                <li className="ms-6">
                                    <motion.span
                                        whileInView={{ opacity: 1, y: 0 }}
                                        initial={{ opacity: 0, y: 40 }}
                                        transition={{ delay: 1.3, duration: 0.5 }}
                                        className="absolute flex items-center justify-center w-6 h-6 bg-stone-100 p-4 rounded-full -start-4 ring-8 ring-white" >
                                        <i className="fa-solid fa-graduation-cap text-stone-500"></i>
                                    </motion.span>
                                    <motion.h3
                                        whileInView={{ opacity: 1, y: 0 }}
                                        initial={{ opacity: 0, y: -40 }}
                                        transition={{ delay: 1.5, duration: 0.5 }}
                                        className="flex items-center mb-1 ml-4 text-2xl font-bold text-white">Purulia Zilla School</motion.h3>
                                    <motion.time
                                        whileInView={{ opacity: 1, y: 0 }}
                                        initial={{ opacity: 0, y: -40 }}
                                        transition={{ delay: 1.7, duration: 0.5 }}
                                        className="block mb-2 ml-4 text-sm font-normal leading-none text-gray-200">2019-2021</motion.time>
                                    <motion.p
                                        whileInView={{ opacity: 1, y: 0 }}
                                        initial={{ opacity: 0, y: -40 }}
                                        transition={{ delay: 1.9, duration: 0.5 }}
                                        className="ml-4 text-base font-normal text-gray-500">Higher Secondary in Science</motion.p>
                                </li>
                            </ol>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Education;
