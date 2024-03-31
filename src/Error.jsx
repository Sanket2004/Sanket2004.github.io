import React from 'react'
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';



function Error() {

    const navigate = useNavigate();

    const backToHome = () => {
        navigate('/');
    }

    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }} // Initial animation state
            animate={{ opacity: 1, y: 0 }} // Animation when component mounts
            transition={{ duration: 0.5 }} // Animation duration
            className="grid h-screen place-content-center bg-slate-950 px-4">
            <div className="text-center">
                <h1 className="text-9xl font-black text-gray-200">404</h1>

                <p className="text-2xl font-bold tracking-tight text-gray-500 sm:text-4xl">Uh-oh!</p>

                <p className="mt-4 text-gray-500">I can't find that page.</p>
                <motion.a
                    whileHover={{ scale: 1.1 }} // Animation on hover
                    whileTap={{ scale: 0.9 }} // Animation on tap
                    onClick={backToHome}
                    className="mt-6 inline-block rounded bg-cyan-600 px-5 py-3 text-sm font-medium text-white hover:bg-cyan-700 focus:outline-none focus:ring cursor-pointer"
                >
                    Go Back Home
                </motion.a>
            </div>
        </motion.div>

    )
}

export default Error
