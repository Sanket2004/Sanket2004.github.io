import { motion } from 'framer-motion'
import React, { useEffect } from 'react'
import { useInView } from 'react-intersection-observer';


function Projects() {

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

    return (
        <motion.section
            ref={ref}
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.5 }}
            className="bg-slate-950 text-white" id='projects'>
            <div className="mx-auto max-w-screen-xl px-4 pt-16 sm:px-6 lg:px-8">
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ delay: 0.5, duration: 0.5 }}
                    className="text-3xl font-extrabold pb-2 sm:text-4xl border-b-8 w-min border-cyan-600">
                    Projects
                </motion.h1>
                <div className='bg-slate-950 mt-16'>
                    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:gap-4 lg:grid-cols-4 lg:gap-8">

                        <motion.div initial={{ opacity: 0, y: 20 }}
                            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                            transition={{ delay: 0.7, duration: 0.5 }}
                            className=" rounded-lg bg-slate-900 overflow-hidden lg:max-h-80">
                            <a href="https://daily-paper.netlify.app/" target='_blank' className="group relative block bg-black">
                                <motion.img
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                                    transition={{ delay: 0.9, duration: 0.5 }}
                                    alt="Daily News Logo"
                                    src="src\assets\projects\dailynews.png"
                                    className="absolute inset-0 h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-50"
                                />

                                <div className="relative p-4 sm:p-6 lg:p-8">
                                    <p className="text-sm font-medium uppercase tracking-widest text-cyan-500">Web Development</p>

                                    <p className="text-xl font-bold text-white sm:text-2xl">Daily News</p>

                                    <div className="absolute bottom-8 transform transition-all duration-200	 ease-in-out opacity-100 group-hover:opacity-0 bg-cyan-400 h-12 w-12 flex place-items-center justify-center rounded-full">
                                        <i className="fa-solid fa-arrow-up-right-from-square text-s"></i>
                                    </div>

                                    <div className="mt-32 sm:mt-56 lg:mt-28">
                                        <div
                                            className="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100"
                                        >
                                            <p className="text-sm text-white">
                                                This web app is built using HTML, CSS, and JavaScript, and it fetches news data from the GNews API to display the latest headlines to the users.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </motion.div>


                        <motion.div initial={{ opacity: 0, y: 20 }}
                            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                            transition={{ delay: 0.8, duration: 0.5 }}
                            className=" rounded-lg bg-slate-900 overflow-hidden lg:max-h-80">
                            <a href="https://fancy-font.netlify.app/" target='_blank' className="group relative block bg-black">
                                <motion.img
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                                    transition={{ delay: 0.9, duration: 0.5 }}
                                    alt="Fancy Font Generator"
                                    src="src\assets\projects\Fancy-Font-Generator.png"
                                    className="absolute inset-0 h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-50"
                                />

                                <div className="relative p-4 sm:p-6 lg:p-8">
                                    <p className="text-sm font-medium uppercase tracking-widest text-cyan-500">Web Development</p>

                                    <p className="text-xl font-bold text-white sm:text-2xl">Fancy Font Generator</p>

                                    <div className="w-12 flex place-items-center justify-center absolute bottom-8 transform transition-all duration-200	 ease-in-out opacity-100 group-hover:opacity-0 bg-cyan-400 p-4 rounded-full">
                                        <i className="fa-solid fa-arrow-up-right-from-square text-s"></i>
                                    </div>

                                    <div className="mt-32 sm:mt-56 lg:mt-28">
                                        <div
                                            className="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100"
                                        >
                                            <p className="text-sm text-white">
                                                A web application that generates custom fonts from any given  text that can be used.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </motion.div>


                        <motion.div initial={{ opacity: 0, y: 20 }}
                            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                            transition={{ delay: 0.9, duration: 0.5 }}
                            className=" rounded-lg bg-slate-900 overflow-hidden lg:max-h-80">
                            <a href="https://github.com/Sanket2004/url-shortner.git" target='_blank' className="group relative block bg-black">
                                <motion.img
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                                    transition={{ delay: 0.9, duration: 0.5 }}
                                    alt="Shortly Logo"
                                    src="src\assets\projects\Shortly.png"
                                    className="absolute inset-0 h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-50"
                                />

                                <div className="relative p-4 sm:p-6 lg:p-8">
                                    <p className="text-sm font-medium uppercase tracking-widest text-cyan-500">Web Development</p>

                                    <p className="text-xl font-bold text-white sm:text-2xl">Shortly</p>

                                    <div className="w-12 flex place-items-center justify-center absolute bottom-8 transform transition-all duration-200	 ease-in-out opacity-100 group-hover:opacity-0 bg-cyan-400 p-4 rounded-full">
                                        <i className="fa-solid fa-arrow-up-right-from-square text-s"></i>
                                    </div>

                                    <div className="mt-32 sm:mt-56 lg:mt-28">
                                        <div
                                            className="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100"
                                        >
                                            <p className="text-sm text-white">
                                                A URL shortener that shorten  URLs using a NodeJS backend, MongoDB database and React frontend. It also counts the total visits.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </motion.div>


                        <motion.div initial={{ opacity: 0, y: 20 }}
                            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                            transition={{ delay: 1, duration: 0.5 }}
                            className=" rounded-lg bg-slate-900 overflow-hidden lg:max-h-80">
                            <a href="https://write-assignment.vercel.app/" target='_blank' className="group relative block bg-black">
                                <motion.img
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                                    transition={{ delay: 0.9, duration: 0.5 }}
                                    alt="Just Type"
                                    src="src\assets\projects\Assignment Writer.png"
                                    className="absolute inset-0 h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-50"
                                />

                                <div className="relative p-4 sm:p-6 lg:p-8">
                                    <p className="text-sm font-medium uppercase tracking-widest text-cyan-500">Web Development</p>

                                    <p className="text-xl font-bold text-white sm:text-2xl">Just Type</p>

                                    <div className="w-12 flex place-items-center justify-center absolute bottom-8 transform transition-all duration-200	 ease-in-out opacity-100 group-hover:opacity-0 bg-cyan-400 p-4 rounded-full">
                                        <i className="fa-solid fa-arrow-up-right-from-square text-s"></i>
                                    </div>

                                    <div className="mt-32 sm:mt-56 lg:mt-28">
                                        <div
                                            className="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100"
                                        >
                                            <p className="text-sm text-white">
                                                A  web application build with HTML, CSS and JS that allows users to create custom documents with variety of fonts and export them in PDF format.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </motion.div>


                        <motion.div initial={{ opacity: 0, y: 20 }}
                            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                            transition={{ delay: 1.1, duration: 0.5 }}
                            className=" rounded-lg bg-slate-900 overflow-hidden lg:max-h-80">
                            <a href="https://docsme.netlify.app/" target='_blank' className="group relative block bg-black">
                                <motion.img
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                                    transition={{ delay: 0.9, duration: 0.5 }}
                                    alt="Just Type"
                                    src="src\assets\projects\docsme.png"
                                    className="absolute inset-0 h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-50"
                                />

                                <div className="relative p-4 sm:p-6 lg:p-8">
                                    <p className="text-sm font-medium uppercase tracking-widest text-cyan-500">Web Development</p>

                                    <p className="text-xl font-bold text-white sm:text-2xl">Docsme</p>

                                    <div className="w-12 flex place-items-center justify-center absolute bottom-8 transform transition-all duration-200	 ease-in-out opacity-100 group-hover:opacity-0 bg-cyan-400 p-4 rounded-full">
                                        <i className="fa-solid fa-arrow-up-right-from-square text-s"></i>
                                    </div>

                                    <div className="mt-32 sm:mt-56 lg:mt-28">
                                        <div
                                            className="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100"
                                        >
                                            <p className="text-sm text-white">
                                                A  simple documentation platform to create, share and collaborate at realtime. Application having Node Js Backend and React Frontend.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </motion.div>



                    </div>
                </div>
            </div>
        </motion.section>
    )
}

export default Projects
