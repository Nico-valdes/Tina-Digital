'use client'

import { motion } from 'framer-motion'

export const Hero = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="bg-[#89acce] text-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="text-center"
        >
          <h1 className="text-4xl md:text-6xl font-extrabold mb-4">Elevate Your Digital Presence</h1>
          <p className="text-xl md:text-2xl mb-8">Innovative digital marketing solutions for the modern business</p>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white text-[#89acce] px-8 py-3 rounded-full font-bold text-lg inline-block"
          >
            Get Started
          </motion.a>
        </motion.div>
      </div>
    </motion.section>
  )
}