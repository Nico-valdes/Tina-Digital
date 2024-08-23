'use client'

import { motion } from 'framer-motion'
import { Check } from 'lucide-react'

const plans = [
  {
    name: '🚀 Starter',
    price: '$499',
    features: ['Social Media Management', 'Basic SEO', 'Monthly Report', 'Email Support'],
  },
  {
    name: '💼 Professional',
    price: '$999',
    features: ['Advanced Social Media', 'Comprehensive SEO', 'Content Marketing', 'Weekly Reports', 'Priority Support'],
  },
  {
    name: '🏆 Enterprise',
    price: 'Custom',
    features: ['Full-Service Digital Marketing', 'Dedicated Account Manager', 'Custom Strategy', '24/7 Support'],
  },
]

export const Plans = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="py-16"
      id="plans"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Plans</h2>
          <p className="text-xl text-gray-600">Choose the perfect plan for your business needs</p>
        </motion.div>
        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 + index * 0.1, duration: 0.5 }}
              className="bg-white p-8 rounded-lg shadow-md"
            >
              <h3 className="text-2xl font-bold mb-4">{plan.name}</h3>
              <p className="text-4xl font-bold mb-6">{plan.price}<span className="text-base font-normal">/month</span></p>
              <ul className="mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <motion.li
                    key={featureIndex}
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.4 + featureIndex * 0.1, duration: 0.3 }}
                    className="flex items-center mb-2"
                  >
                    <Check className="w-5 h-5 text-green-500 mr-2" />
                    <span>{feature}</span>
                  </motion.li>
                ))}
              </ul>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full bg-[#89acce] text-white py-2 px-4 rounded-full font-bold hover:bg-[#779fc7] transition duration-300"
              >
                Get Started
              </motion.button>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  )
}