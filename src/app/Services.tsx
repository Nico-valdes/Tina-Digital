'use client'

import { motion } from 'framer-motion'
import { Search, BarChart, Globe, Mail } from 'lucide-react'

const services = [
  { icon: Search, title: 'SEO Optimization', description: 'Boost your online visibility and rankings' },
  { icon: BarChart, title: 'Social Media Marketing', description: 'Engage and grow your audience on social platforms' },
  { icon: Globe, title: 'Content Marketing', description: 'Create valuable content that attracts and retains customers' },
  { icon: Mail, title: 'Email Marketing', description: 'Build relationships and drive conversions with targeted campaigns' },
]

export const Services = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="py-16"
      id="services"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
          <p className="text-xl text-gray-600">Comprehensive digital marketing solutions to grow your business</p>
        </motion.div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 + index * 0.1, duration: 0.5 }}
              className="bg-white p-6 rounded-lg shadow-md"
            >
              <service.icon className="w-12 h-12 text-[#89acce] mb-4" />
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  )
}