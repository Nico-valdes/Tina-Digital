'use client'

import { motion } from 'framer-motion'
import { Navbar } from "./Navbar"
import { Hero } from './Hero'
import { AboutUs } from './AboutUs'
import { Services } from "./Services"
import { Clients } from "./Clients"
import { Plans } from "./Plans"
import { ContactUs } from "./ContactUs"
import { Footer } from "./Footer"

export const App = () => {
  return (
    <>
      <Navbar />
      <Hero />        
      <AboutUs />
      <Services />
      <Clients />
      <Plans />
      <motion.main />
      <ContactUs />
      <Footer />
    </>
  );
}