import { motion } from 'framer-motion'
import React, { useEffect } from 'react'
import { useInView } from 'react-intersection-observer';



function About() {

    const { ref, inView } = useInView({
        threshold: 0.3, // Trigger animation when 50% of the About section is in view
        triggerOnce: true // Trigger animation only once
    });

    useEffect(() => {
        if (inView) {
            // Start animation when About section comes into view
            // You can add more logic or start additional animations here
        }
    }, [inView]);

    return (
        <div>
            <motion.section
                ref={ref}
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.2 }}
                className="bg-slate-950 text-white" id='about'>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={inView ? { opacity: 1 } : { opacity: 0 }}
                    transition={{ delay: 0.6, duration: 0.5 }}
                    className="mx-auto max-w-screen-xl px-4 pt-16 sm:px-6 lg:px-8">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                        transition={{ delay: 0.8, duration: 0.5 }}
                        className="text-3xl font-extrabold sm:text-4xl border-b-8 pb-2 w-min border-cyan-600 lg:mb-8">
                        About
                    </motion.h1>
                    <div className="grid grid-cols-1 gap-y-8 lg:grid-cols-2  lg:gap-x-16">
                        <div className=" mx-auto max-w-lg  lg:mx-0 ltr:lg:text-left rtl:lg:text-right md:max-w-full sm:max-w-full">

                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                                transition={{ delay: 1, duration: 0.5 }}
                                className="mt-12 text-gray-200 lg:mt-4 text-justify">
                                I'm a passionate computer science student with experience in Flutter, graphic designing, as well as Backend and web development. I love learning and applying my skills to create innovative and practical solutions to real-world problems. In my free time, I enjoy reading tech blogs, participating in coding challenges, and exploring new technologies. I'm a team player with strong communication and problem-solving skills, and I'm always eager to collaborate with others and share my knowledge.
                            </motion.p>
                        </div>

                        <motion.div
                            className="flex flex-wrap gap-4 justify-evenly lg:justify-start place-items-center"
                            initial={{ opacity: 0 }}
                            animate={inView ? { opacity: 1 } : { opacity: 0 }}
                            transition={{ delay: 1.5 }}
                        >
                            {['react', 'html5', 'css3-alt', 'js', 'android','python', 'figma','node', 'java', 'git', 'c'].map((icon, index) => (
                                <motion.span
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={inView ? { opacity: 1, y: 0 } : { opacity: 0 }}
                                    transition={{ duration: 0.6, delay: 0.1 * index }}
                                    className="group relative flex place-items-center justify-center rounded-lg bg-cyan-500 w-16 h-16 ease-in-out transition-all duration-300 shadow-[-0px_0px_0_0_#ffffffba] hover:shadow-[-0px_0px_80px_0_#ffffffba]"
                                >
                                    <i className={`fa-brands fa-${icon} text-3xl`}></i>
                                    <span className="opacity-0 absolute z-10 py-1 px-4 text-center text-black bg-white bg-opacity-75 rounded-lg whitespace-nowrap -top-10 left-1/2 transform -translate-x-1/2 group-hover:opacity-100 ">{icon.toUpperCase()}</span>
                                </motion.span>
                            ))}
                        </motion.div>

                    </div>
                </motion.div >
            </motion.section >
        </div >
    )
}

export default About
