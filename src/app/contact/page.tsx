'use client'

import ContactForm from '@/components/contact/ContactForm'
import { motion } from 'framer-motion'
import React from 'react'

const ContactPage = () => {
  return (
    <main className='py-14 md:px-16 bg-main-theme'>
      <motion.div initial={{opacity: 0, y: 20}} animate={{opacity: 1, y: 0}} transition={{duration: 0.5, delay: 0.3}}>
        <ContactForm/>
      </motion.div>
    </main>
  )
}

export default ContactPage
