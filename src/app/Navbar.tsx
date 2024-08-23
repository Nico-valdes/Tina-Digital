'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { MenuIcon, XIcon } from 'lucide-react'
import Image from "next/image"
import tinaImage from '../../public/tina 3.png'

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', stiffness: 120 }}
      className="bg-white shadow-md"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Image src={tinaImage} alt='Tina Image' height={43} width={43} />
            <a href="#" className="text-2xl font-bold text-[#89acce]">TinaDigital</a>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <a href="#" className="text-gray-600 hover:text-[#89acce] px-3 py-2 rounded-md text-sm font-medium">Home</a>
              <a href="#about" className="text-gray-600 hover:text-[#89acce] px-3 py-2 rounded-md text-sm font-medium">About</a>
              <a href="#services" className="text-gray-600 hover:text-[#89acce] px-3 py-2 rounded-md text-sm font-medium">Services</a>
              <a href="#clients" className="text-gray-600 hover:text-[#89acce] px-3 py-2 rounded-md text-sm font-medium">Clients</a>
              <a href="#plans" className="text-gray-600 hover:text-[#89acce] px-3 py-2 rounded-md text-sm font-medium">Plans</a>
              <a href="#contact" className="text-gray-600 hover:text-[#89acce] px-3 py-2 rounded-md text-sm font-medium">Contact</a>
            </div>
          </div>
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-[#89acce] hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-[#89acce]"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <XIcon className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <MenuIcon className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2 }}
          className="md:hidden"
        >
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#" className="text-gray-600 hover:text-[#89acce] block px-3 py-2 rounded-md text-base font-medium">Home</a>
            <a href="#about" className="text-gray-600 hover:text-[#89acce] block px-3 py-2 rounded-md text-base font-medium">About</a>
            <a href="#services" className="text-gray-600 hover:text-[#89acce] block px-3 py-2 rounded-md text-base font-medium">Services</a>
            <a href="#clients" className="text-gray-600 hover:text-[#89acce] block px-3 py-2 rounded-md text-base font-medium">Clients</a>
            <a href="#plans" className="text-gray-600 hover:text-[#89acce] block px-3 py-2 rounded-md text-base font-medium">Plans</a>
            <a href="#contact" className="text-gray-600 hover:text-[#89acce] block px-3 py-2 rounded-md text-base font-medium">Contact</a>
          </div>
        </motion.div>
      )}
    </motion.nav>
  )
}