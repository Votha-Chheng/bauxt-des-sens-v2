'use client'

import React, { FC, useEffect, useRef, useState } from 'react'
import Anchor from './Anchor'
import Presentation from './Presentation'
import Approche from './Approche'
import ServiceDomicile from './ServiceDomicile'
import MassageIntuitif from './MassageIntuitif'
import VideoHomePage from './VideoHomePage'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { imgAppear } from '@/@animations/approcheAnimations'

const HomeScreen: FC = () => {

  const [start, setStart] = useState(false)

  useEffect(()=> {
    setStart(true)
  }, [])

  if(!start) return null

  return (
    <main className='bg-main-theme pb-32'>
      <Anchor/> 
      <Presentation/>
      {/* <ServiceDomicile/> */}
      <Approche/>
      <VideoHomePage/>
      <MassageIntuitif/>
      <motion.div variants={imgAppear} initial="initial" animate="animate" className="relative min-w-[20%] hidden lg:block mb-44 justify-between self-center">
        <Image src="/images/logoLotus.svg" alt='logo en forme de lotus' className='mx-auto' width={100} height={100}/>
        <div className="w-24 h-1 mt-1 bg-white rounded-md mx-auto"/>
      </motion.div>
    </main>     
  )
}

export default HomeScreen