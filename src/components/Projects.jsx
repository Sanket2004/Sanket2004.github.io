import { motion } from 'framer-motion'
import React, { useEffect } from 'react'


function Projects() {


    return (
        <section
            className="bg-stone-950 text-white" id='projects'>
            <div className="mx-auto max-w-screen-xl px-4 pt-16 sm:px-6 lg:px-8">
                <motion.h1
                    whileInView={{ opacity: 1, x: 0 }}
                    initial={{ opacity: 0, x: -20 }}
                    transition={{ delay: 0, duration: 0.5 }}
                    className="text-3xl font-extrabold pb-2 sm:text-4xl border-b-8 w-min border-stone-600">
                    Projects
                </motion.h1>
                <div className='bg-stone-950 mt-16'>
                    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:gap-4 lg:grid-cols-4 lg:gap-8">

                        <motion.div
                            whileInView={{ opacity: 1, x: 0 }}
                            initial={{ opacity: 0, x: -20 }}
                            transition={{ delay: 0, duration: 0.5 }}
                            className="bg-[url('/projects/dailynews.png')] bg-center bg-cover rounded-lg bg-stone-900 overflow-hidden lg:max-h-80">
                            <a href="https://daily-paper.netlify.app/" target='_blank' className="group relative block bg-transparent">
                                <div className="relative p-4 sm:p-6 lg:p-8 h-80">
                                    <p className="text-sm font-medium uppercase tracking-widest text-stone-500">Web Development</p>
                                    <p className="text-xl font-bold text-stone-500 sm:text-2xl">Daily News</p>
                                    <div
                                        className="absolute translate-y-8 opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100 bg-stone-900 w-full h-max bottom-0 left-1/2 -translate-x-1/2 -translate-y-1/2 transform flex items-end flex-col p-4"
                                    >
                                        <p className="text-sm text-white text-justify">
                                            This web app is built using HTML, CSS, and JavaScript, and it fetches news data from the GNews API to display the latest headlines to the users.
                                        </p>
                                        <div className="bottom-8 transform transition-all duration-200	 ease-in-out opacity-100  bg-stone-400 h-12 w-12 flex place-items-center justify-center rounded-full">
                                            <i className="fa-solid fa-arrow-up-right-from-square text-s"></i>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </motion.div>

                        <motion.div
                            whileInView={{ opacity: 1, x: 0 }}
                            initial={{ opacity: 0, x: -20 }}
                            transition={{ delay: 0.2, duration: 0.5 }}
                            className="bg-[url('/projects/Fancy-Font-Generator.png')] bg-center bg-cover rounded-lg bg-stone-900 overflow-hidden lg:max-h-80">
                            <a href="https://fancy-font.netlify.app/" target='_blank' className="group relative block bg-transparent">
                                <div className="relative p-4 sm:p-6 lg:p-8 h-80">
                                    <p className="text-sm font-medium uppercase tracking-widest text-stone-500">Web Development</p>

                                    <p className="text-xl font-bold text-stone-500 sm:text-2xl">Fancy Font Generator</p>

                                    <div
                                        className="absolute translate-y-8 opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100 bg-stone-900 w-full h-max bottom-0 left-1/2 -translate-x-1/2 -translate-y-1/2 transform flex items-end flex-col p-4"
                                    >
                                        <p className="text-sm text-white text-justify">
                                            A web application that generates custom fonts from any given  text that can be used.
                                        </p>
                                        <div className="bottom-8 transform transition-all duration-200	 ease-in-out opacity-100  bg-stone-400 h-12 w-12 flex place-items-center justify-center rounded-full">
                                            <i className="fa-solid fa-arrow-up-right-from-square text-s"></i>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </motion.div>


                        <motion.div
                            whileInView={{ opacity: 1, x: 0 }}
                            initial={{ opacity: 0, x: -20 }}
                            transition={{ delay: 0.4, duration: 0.5 }}
                            className="bg-[url('/projects/Shortly.png')] bg-center bg-cover rounded-lg bg-stone-900 overflow-hidden lg:max-h-80">
                            <a href="https://github.com/Sanket2004/url-shortner.git" target='_blank' className="group relative block bg-transparent">

                                <div className="relative p-4 sm:p-6 lg:p-8 h-80">
                                    <p className="text-sm font-medium uppercase tracking-widest text-stone-500">Web Development</p>

                                    <p className="text-xl font-bold text-stone-500 sm:text-2xl">Shortly</p>
                                    {/* <div className="mt-28 sm:mt-[32%]"> */}
                                    <div
                                        className="absolute translate-y-8 opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100 bg-stone-900 w-full h-max bottom-0 left-1/2 -translate-x-1/2 -translate-y-1/2 transform flex items-end flex-col p-4"
                                    >
                                        <p className="text-sm text-white text-justify">
                                            A URL shortener that shorten  URLs using a NodeJS backend, MongoDB database and React frontend. It also counts the total visits.
                                        </p>
                                        <div className="bottom-8 transform transition-all duration-200	 ease-in-out opacity-100  bg-stone-400 h-12 w-12 flex place-items-center justify-center rounded-full">
                                            <i className="fa-solid fa-arrow-up-right-from-square text-s"></i>
                                        </div>
                                    </div>
                                    {/* </div> */}
                                </div>
                            </a>
                        </motion.div>



                        <motion.div
                            whileInView={{ opacity: 1, x: 0 }}
                            initial={{ opacity: 0, x: -20 }}
                            transition={{ delay: 0.6, duration: 0.5 }}
                            className="bg-[url('/projects/assignmentWriter.png')] bg-center bg-cover rounded-lg bg-stone-900 overflow-hidden lg:max-h-80">
                            <a href="https://write-assignment.vercel.app/" target='_blank' className="group relative block bg-transparent">

                                <div className="relative p-4 sm:p-6 lg:p-8 h-80">
                                    <p className="text-sm font-medium uppercase tracking-widest text-stone-500">Web Development</p>

                                    <p className="text-xl font-bold text-stone-500 sm:text-2xl">Just Type</p>
                                    {/* <div className="mt-28 sm:mt-[32%]"> */}
                                    <div
                                        className="absolute translate-y-8 opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100 bg-stone-900 w-full h-max bottom-0 left-1/2 -translate-x-1/2 -translate-y-1/2 transform flex items-end flex-col p-4"
                                    >
                                        <p className="text-sm text-white text-justify">
                                            A  web application build with HTML, CSS and JS that allows users to create custom documents with variety of fonts and export them in PDF format.
                                        </p>
                                        <div className="bottom-8 transform transition-all duration-200	 ease-in-out opacity-100  bg-stone-400 h-12 w-12 flex place-items-center justify-center rounded-full">
                                            <i className="fa-solid fa-arrow-up-right-from-square text-s"></i>
                                        </div>
                                    </div>
                                    {/* </div> */}
                                </div>
                            </a>
                        </motion.div>


                        <motion.div
                            whileInView={{ opacity: 1, x: 0 }}
                            initial={{ opacity: 0, x: -20 }}
                            transition={{ delay: 0.8, duration: 0.5 }}
                            className="bg-[url('/projects/docsme.png')] bg-center bg-cover rounded-lg bg-stone-900 overflow-hidden lg:max-h-80">
                            <a href="https://docsme.netlify.app/" target='_blank' className="group relative block bg-transparent">

                                <div className="relative p-4 sm:p-6 lg:p-8 h-80">
                                    <p className="text-sm font-medium uppercase tracking-widest text-stone-500">Web Development</p>

                                    <p className="text-xl font-bold text-stone-500 sm:text-2xl">Docsme</p>
                                    {/* <div className="mt-28 sm:mt-[32%]"> */}
                                    <div
                                        className="absolute translate-y-8 opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100 bg-stone-900 w-full h-max bottom-0 left-1/2 -translate-x-1/2 -translate-y-1/2 transform flex items-end flex-col p-4"
                                    >
                                        <p className="text-sm text-white text-justify">
                                            A  simple documentation platform to create, share and collaborate at realtime. Application having Node Js Backend and React Frontend.
                                        </p>
                                        <div className="bottom-8 transform transition-all duration-200 ease-in-out opacity-100  bg-stone-400 h-12 w-12 flex place-items-center justify-center rounded-full">
                                            <i className="fa-solid fa-arrow-up-right-from-square text-s"></i>
                                        </div>
                                    </div>
                                    {/* </div> */}
                                </div>
                            </a>
                        </motion.div>

                        <motion.div
                            whileInView={{ opacity: 1, x: 0 }}
                            initial={{ opacity: 0, x: -20 }}
                            transition={{ delay: 1, duration: 0.5 }}
                            className="bg-[url('/projects/codepen.png')] bg-center bg-cover rounded-lg bg-stone-900 overflow-hidden lg:max-h-80">
                            <a href="https://beawesome.netlify.app/" target='_blank' className="group relative block bg-transparent">

                                <div className="relative p-4 sm:p-6 lg:p-8 h-80">
                                    <p className="text-sm font-medium uppercase tracking-widest text-stone-500">Web Development</p>

                                    <p className="text-xl font-bold text-stone-500 sm:text-2xl">CodePen Clone</p>
                                    {/* <div className="mt-28 sm:mt-[32%]"> */}
                                    <div
                                        className="absolute translate-y-8 opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100 bg-stone-900 w-full h-max bottom-0 left-1/2 -translate-x-1/2 -translate-y-1/2 transform flex items-end flex-col p-4"
                                    >
                                        <p className="text-sm text-white text-justify">
                                            An online code editor which saves your code automatically in the local storage. It is build using codemirror as editor and tailwind css for styling.
                                        </p>
                                        <div className="bottom-8 transform transition-all duration-200 ease-in-out opacity-100  bg-stone-400 h-12 w-12 flex place-items-center justify-center rounded-full">
                                            <i className="fa-solid fa-arrow-up-right-from-square text-s"></i>
                                        </div>
                                    </div>
                                    {/* </div> */}
                                </div>
                            </a>
                        </motion.div>

                        <motion.div
                            whileInView={{ opacity: 1, x: 0 }}
                            initial={{ opacity: 0, x: -20 }}
                            transition={{ delay: 1.2, duration: 0.5 }}
                            className="bg-[url('/projects/safekey.png')] bg-center bg-cover rounded-lg bg-stone-900 overflow-hidden lg:max-h-80">
                            <a href="https://safe-key.netlify.app/" target='_blank' className="group relative block bg-transparent">

                                <div className="relative p-4 sm:p-6 lg:p-8 h-80">
                                    <p className="text-sm font-medium uppercase tracking-widest text-stone-500">Web Development</p>

                                    <p className="text-xl font-bold text-stone-500 sm:text-2xl">Safe Key</p>
                                    {/* <div className="mt-28 sm:mt-[32%]"> */}
                                    <div
                                        className="absolute translate-y-8 opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100 bg-stone-900 w-full h-max bottom-0 left-1/2 -translate-x-1/2 -translate-y-1/2 transform flex items-end flex-col p-4"
                                    >
                                        <p className="text-sm text-white text-justify">
                                            A password manager which saves your passwords in the firebase storage. It is build using react as frontend and tailwind css for styling.
                                        </p>
                                        <div className="bottom-8 transform transition-all duration-200 ease-in-out opacity-100  bg-stone-400 h-12 w-12 flex place-items-center justify-center rounded-full">
                                            <i className="fa-solid fa-arrow-up-right-from-square text-s"></i>
                                        </div>
                                    </div>
                                    {/* </div> */}
                                </div>
                            </a>
                        </motion.div>



                    </div>
                </div>
            </div>
        </section>
    )
}

export default Projects
