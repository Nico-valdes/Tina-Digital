'use client'

import { motion } from 'framer-motion'

export const AboutUs = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="py-16 bg-gray-100"
      id="about"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">About Us</h2>
          <p className="text-xl text-gray-600">We&apos;re passionate about driving digital success for our clients</p>
        </motion.div>
        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            <h3 className="text-2xl font-semibold mb-4">Our Mission</h3>
            <p className="text-gray-600">
              To empower businesses with cutting-edge digital marketing strategies that drive growth, 
              increase visibility, and deliver measurable results in the ever-evolving online landscape.
            </p>
          </motion.div>
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            <h3 className="text-2xl font-semibold mb-4">Our Approach</h3>
            <p className="text-gray-600">
              We combine data-driven insights, creative excellence, and the latest digital technologies 
              to craft tailored marketing solutions that resonate with your target audience and achieve your business objectives.
            </p>
          </motion.div>
        </div>
      </div>
    </motion.section>
  )
}
