import { motion } from 'framer-motion'
import React, { useEffect } from 'react'
import toast, { Toaster } from 'react-hot-toast';

function Contact() {

    const handleSubmit = async (e) => {
        try {
            e.preventDefault();
            const form = e.target;
            const data = new FormData(form);
            const response = await fetch(form.action, {
                method: form.method,
                body: data,
                headers: {
                    Accept: "application/json",
                },
            });

            if (!response.ok) {
                toast.error("Failed to send message. Please try again.");
                throw new Error('Failed to send message');
            }

            form.reset();
            toast.success("Message sent successfully!");
        } catch (err) {
            console.error(err);
            toast.error("Failed to send message. Please try again.");
        }
    };

    const customToastStyle = {
        fontSize: '14px', // Adjust the font size as per your requirement
        fontWeight: '500'
    };




    return (
        <div>
            <div>
                <Toaster position="top-right" reverseOrder={false} toastOptions={{ style: customToastStyle }} />
            </div>
            <section
                className="bg-stone-950 text-white" id='contact'>
                <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
                    <motion.h1
                        whileInView={{ opacity: 1, x: 0 }}
                        initial={{ opacity: 0, x: -20 }}
                        transition={{ delay: 0, duration: 0.5 }}
                        className="text-3xl font-extrabold pb-2 sm:text-4xl border-b-8 w-min border-stone-600">
                        Contact
                    </motion.h1>
                    <div className="grid grid-cols-1 gap-x-16 gap-y-8 lg:grid-cols-5">
                        <div className="lg:col-span-2 lg:py-12">
                            <div className="mt-8">
                                <motion.a
                                    whileInView={{ opacity: 1, x: 0 }}
                                    initial={{ opacity: 0, x: -20 }}
                                    transition={{ delay: 0.2, duration: 0.5 }}
                                    href="https://maps.app.goo.gl/8j9byhmRWLbTFTZV8" target='_blank' className="text-2xl font-bold text-stone-400">Address</motion.a>

                                <motion.address
                                    whileInView={{ opacity: 1, x: 0 }}
                                    initial={{ opacity: 0, x: -20 }}
                                    transition={{ delay: 0.4, duration: 0.5 }}
                                    className="mt-2 not-italic">Asansol, West Bengal, India.</motion.address>
                            </div>
                            <div className="mt-8">
                                <motion.a
                                    whileInView={{ opacity: 1, x: 0 }}
                                    initial={{ opacity: 0, x: -20 }}
                                    transition={{ delay: 0.6, duration: 0.5 }}
                                    href="mailto:sanketbanerjee.2004@gmail.com" className="text-2xl font-bold text-stone-400"> Email </motion.a>

                                <motion.address
                                    whileInView={{ opacity: 1, x: 0 }}
                                    initial={{ opacity: 0, x: -20 }}
                                    transition={{ delay: 0.8, duration: 0.5 }}
                                    className="mt-2 not-italic">sanketbanerjee.2004@gmail.com</motion.address>
                            </div>

                            <div className="mt-8">
                                <motion.h1
                                    whileInView={{ opacity: 1, x: 0 }}
                                    initial={{ opacity: 0, x: -20 }}
                                    transition={{ delay: 1, duration: 0.5 }}
                                    className="text-2xl font-bold text-stone-400"> Social </motion.h1>
                                <div className="mt-2 not-italic flex gap-4 place-items-center">
                                    <motion.a
                                        whileInView={{ opacity: 1, x: 0 }}
                                        initial={{ opacity: 0, x: -20 }}
                                        transition={{ delay: 1.2, duration: 0.5 }}
                                        href="https://github.com/Sanket2004"><i className="fa-brands fa-github text-2xl"></i>
                                    </motion.a>
                                    <motion.a
                                        whileInView={{ opacity: 1, x: 0 }}
                                        initial={{ opacity: 0, x: -20 }}
                                        transition={{ delay: 1.4, duration: 0.5 }}
                                        href="https://www.linkedin.com/in/sanket-banerjee-6a5029231/"><i className="fa-brands fa-linkedin text-2xl"></i></motion.a>
                                    <motion.a
                                        whileInView={{ opacity: 1, x: 0 }}
                                        initial={{ opacity: 0, x: -20 }}
                                        transition={{ delay: 1.6, duration: 0.5 }}
                                        href="https://twitter.com/SanketBanerje15"><i className="fa-brands fa-x-twitter text-2xl"></i>
                                    </motion.a>
                                </div>
                            </div>
                        </div>

                        <div className="rounded-lg bg-stone-950 shadow-lg lg:col-span-3 ">
                            <form onSubmit={handleSubmit} action="https://formsubmit.co/sanketbanerjee.2004@gmail.com" method="POST" className="space-y-4">
                                <input type="hidden" name="_captcha" value="false" />
                                <input type="hidden" name="_template" value="table" />

                                <div>
                                    <label className="sr-only" htmlFor="name">Name</label>
                                    <motion.input
                                        whileInView={{ opacity: 1, x: 0 }}
                                        initial={{ opacity: 0, x: 20 }}
                                        transition={{ delay: 0.2, duration: 0.5 }}
                                        className="w-full bg-stone-900 rounded-lg border border-stone-400 border-2 text-white p-3 text-sm placeholder:text-gray-300"
                                        placeholder="Name"
                                        type="text"
                                        id="name"
                                        name="name"
                                        required
                                    />
                                </div>

                                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                                    <div>
                                        <label className="sr-only" htmlFor="email">Email</label>
                                        <motion.input
                                            whileInView={{ opacity: 1, x: 0 }}
                                            initial={{ opacity: 0, x: 20 }}
                                            transition={{ delay: 0.4, duration: 0.5 }}
                                            className="w-full bg-stone-900 border border-stone-400 border-2 rounded-lg text-white p-3 text-sm placeholder:text-gray-300"
                                            placeholder="Email address"
                                            type="email"
                                            id="email"
                                            name="email"
                                            required
                                        />
                                    </div>

                                    <div >
                                        <label className="sr-only" htmlFor="phone">Phone</label>
                                        <motion.input
                                            whileInView={{ opacity: 1, x: 0 }}
                                            initial={{ opacity: 0, x: 20 }}
                                            transition={{ delay: 0.6, duration: 0.5 }}
                                            className="w-full bg-stone-900 rounded-lg border border-stone-400 border-2 text-white p-3 text-sm placeholder:text-gray-300"
                                            placeholder="Phone Number"
                                            type="tel"
                                            id="phone"
                                            name="phone"
                                            required
                                        />
                                    </div>
                                </div>

                                <div >
                                    <label className="sr-only" htmlFor="message">Message</label>
                                    <motion.textarea
                                        whileInView={{ opacity: 1, x: 0 }}
                                        initial={{ opacity: 0, x: 20 }}
                                        transition={{ delay: 0.8, duration: 0.5 }}
                                        className="w-full bg-stone-900 rounded-lg border border-stone-400 border-2 text-white p-3 text-sm placeholder:text-gray-300"
                                        placeholder="Message"
                                        rows="8"
                                        id="message"
                                        name="message"
                                        required
                                    ></motion.textarea>
                                </div>

                                <div className="mt-4">
                                    <motion.button
                                        whileInView={{ opacity: 1, x: 0 }}
                                        initial={{ opacity: 0, x: 20 }}
                                        transition={{ delay: 1, duration: 0.5 }}
                                        type="submit"
                                        className="flex justify-center items-center gap-2 w-full rounded-lg bg-stone-600 hover:bg-stone-500 px-5 py-3 font-medium text-white sm:w-auto"
                                    >
                                        Send Message
                                        <svg className='h-4 w-4' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M10.3009 13.6949L20.102 3.89742M10.5795 14.1355L12.8019 18.5804C13.339 19.6545 13.6075 20.1916 13.9458 20.3356C14.2394 20.4606 14.575 20.4379 14.8492 20.2747C15.1651 20.0866 15.3591 19.5183 15.7472 18.3818L19.9463 6.08434C20.2845 5.09409 20.4535 4.59896 20.3378 4.27142C20.2371 3.98648 20.013 3.76234 19.7281 3.66167C19.4005 3.54595 18.9054 3.71502 17.9151 4.05315L5.61763 8.2523C4.48114 8.64037 3.91289 8.83441 3.72478 9.15032C3.56153 9.42447 3.53891 9.76007 3.66389 10.0536C3.80791 10.3919 4.34498 10.6605 5.41912 11.1975L9.86397 13.42C10.041 13.5085 10.1295 13.5527 10.2061 13.6118C10.2742 13.6643 10.3352 13.7253 10.3876 13.7933C10.4468 13.87 10.491 13.9585 10.5795 14.1355Z" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </motion.button>
                                </div>
                            </form>

                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Contact
