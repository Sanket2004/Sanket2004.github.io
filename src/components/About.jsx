import { motion } from 'framer-motion'
import React, { useEffect } from 'react'



function About() {


    return (
        <div>
            <section
                className="bg-stone-950 text-white" id='about'>

                <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16 ">

                    <motion.h1
                        whileInView={{ opacity: 1, x: 0 }}
                        initial={{ opacity: 0, x: -20 }}
                        transition={{ delay: 0, duration: 0.5 }}
                        className="text-3xl font-extrabold sm:text-4xl border-b-8 pb-2 w-min border-stone-600 lg:mb-8">
                        About
                    </motion.h1>
                    <div className="grid grid-cols-1 gap-y-8 lg:grid-cols-2  lg:gap-x-16">
                        <div className=" mx-auto  lg:mx-0 ltr:lg:text-left rtl:lg:text-right md:max-w-full sm:max-w-full">

                            <motion.p
                                whileInView={{ opacity: 1, x: 0 }}
                                initial={{ opacity: 0, x: -20 }}
                                transition={{ delay: 0, duration: 0.5 }}
                                className="mt-12 text-gray-200 lg:mt-4 text-justify">
                                I'm a passionate computer science student with experience in Flutter, graphic designing, as well as Backend and web development. I love learning and applying my skills to create innovative and practical solutions to real-world problems. In my free time, I enjoy reading tech blogs, participating in coding challenges, and exploring new technologies. I'm a team player with strong communication and problem-solving skills, and I'm always eager to collaborate with others and share my knowledge.
                            </motion.p>
                        </div>

                        <motion.div
                            whileInView={{ opacity: 1, x: 0 }}
                            initial={{ opacity: 0, x: 20 }}
                            transition={{ delay: 0, duration: 0.5 }}
                            className="flex flex-wrap gap-4 justify-evenly lg:justify-start place-items-center"

                        >
                            {['react', 'html5', 'css3-alt', 'js', 'android', 'python', 'figma', 'node', 'java', 'git', 'c'].map((icon, index) => (
                                <span
                                    key={index}
                                    className="group relative flex place-items-center justify-center rounded-lg bg-stone-500 w-16 h-16 ease-in-out transition-all duration-300 shadow-[-0px_0px_0_0_#ffffffba] hover:shadow-[-0px_0px_80px_0_#ffffffba]"
                                >
                                    <i className={`fa-brands fa-${icon} text-3xl`}></i>
                                    <span className="opacity-0 absolute z-10 py-1 px-4 text-center text-black bg-white bg-opacity-75 rounded-lg whitespace-nowrap -top-10 left-1/2 transform -translate-x-1/2 group-hover:opacity-100 ">{icon.toUpperCase()}</span>
                                </span>
                            ))}
                        </motion.div>

                    </div>
                </div>
            </section >
        </div >
    )
}

export default About
