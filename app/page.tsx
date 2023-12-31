"use client";
import Contact from '@/components/Contact'
import Header from '@/components/Header'
import Navbar from '@/components/Navbar'
import Projects from '@/components/Projects'
import Skills from '@/components/Skills'
import { motion } from 'framer-motion';
import Footer from '@/components/Footer';
export default function Home() {
  return (
    <div className='px-4 overflow-hidden'>
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.5 }}
        className='px-4'
      >
       
        <Navbar />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.7 }}
        >
        <Header />
        </motion.div>
        <Projects />
        <Skills />
        <Contact />
        <Footer/>
      </motion.div>
    </div>
  )
}
