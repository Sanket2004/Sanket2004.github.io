import React from 'react'
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';



function Error() {

    const navigate = useNavigate();

    const backToHome = () => {
        navigate('/');
    }

    return (
        <div
            className="grid h-screen place-content-center bg-stone-950 px-4">
            <div className="text-center">
                <motion.h1
                    whileInView={{ opacity: 1, y: 0 }}
                    initial={{ opacity: 0, y: 20 }}
                    transition={{ delay: 0, duration: 0.5 }}
                    className="text-9xl font-black text-stone-200">404</motion.h1>

                <motion.p
                    whileInView={{ opacity: 1, y: 0 }}
                    initial={{ opacity: 0, y: 20 }}
                    transition={{ delay: 0.5, duration: 0.5 }}
                    className="text-xl font-bold tracking-tight text-stone-300 sm:text-3xl">Lost your way ?</motion.p>

                <motion.p
                    whileInView={{ opacity: 1, y: 0 }}
                    initial={{ opacity: 0, y: 20 }}
                    transition={{ delay: 1, duration: 0.5 }}
                    className="mt-4 text-stone-500">Sorry, I can't find that page.</motion.p>
                <motion.a
                    whileInView={{ opacity: 1, y: 0 }}
                    initial={{ opacity: 0, y: 20 }}
                    transition={{ delay: 1.5, duration: 0.5 }}
                    onClick={backToHome}
                    className="mt-6 inline-block rounded bg-stone-600 px-5 py-3 text-sm font-medium text-white cursor-pointer"
                >
                    Back Home Page
                </motion.a>
            </div>
        </div>

    )
}

export default Error
