'use client'

import { motion } from 'framer-motion'
import Image from "next/image"

const clients = [
  { name: 'Client 1', logo: '/placeholder.svg?height=80&width=120' },
  { name: 'Client 2', logo: '/placeholder.svg?height=80&width=120' },
  { name: 'Client 3', logo: '/placeholder.svg?height=80&width=120' },
  { name: 'Client 4', logo: '/placeholder.svg?height=80&width=120' },
  { name: 'Client 5', logo: '/placeholder.svg?height=80&width=120' },
  { name: 'Client 6', logo: '/placeholder.svg?height=80&width=120' },
]

export const Clients = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="py-16 bg-gray-100"
      id="clients"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Clients</h2>
          <p className="text-xl text-gray-600">Trusted by leading companies across industries</p>
        </motion.div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {clients.map((client, index) => (
            <motion.div
              key={client.name}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2 + index * 0.1, duration: 0.5 }}
              className="flex items-center justify-center"
            >
              <Image src={client.logo} alt={client.name} className="max-h-16" />
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  )
}
