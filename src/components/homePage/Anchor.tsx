'use client'

import { bgImgAnim, folder, logoAnim, variantBorderBottom, variantBorderTop, variantsPhrases } from '@/@animations/anchorAnimations'
import { playfair } from '@/fonts/playfair'
import { useWindowSize } from '@uidotdev/usehooks'
import { motion } from 'framer-motion'
import Image from 'next/image'
import React, { FC, useEffect, useRef, useState } from 'react'

const Anchor:FC = () => {
  const [locationWidth, setLocationWidth] = useState<number>(0)
  const [anchorHeight, setAnchorHeight] = useState<number>(0)
  const anchorRef = useRef<HTMLDivElement>(null)
  const up = useRef<HTMLDivElement>(null)
  const down = useRef<HTMLDivElement>(null)

  const size = useWindowSize()
  const { height } = size

  useEffect(()=> {
    if(anchorRef.current){
      setAnchorHeight(anchorRef.current.clientHeight)
    }
    if(up.current){
      setLocationWidth(up.current.clientWidth)
    }
  }, [size])

  return (
    <section ref={anchorRef} className='bg-main-theme relative lg:h-screen overflow-hidden'>
      <motion.div 
        variants={logoAnim}
        initial='initial' 
        animate='animate'
        className="absolute z-30 -translate-x-1/2 left-1/2 top-28 w-[375px] h-[375px] md:w-[500px] md:h-[500px]" 
      >
        <Image 
          src="/images/logo.svg" 
          alt="logo de Baux'T des sens"
          fill
        />
      </motion.div>
      <motion.div 
        className={`${playfair.className} absolute text-center top-[550px] md:top-[675px] left-1/2 -translate-x-1/2 text-white overflow-hidden z-10 italic px-2.5`} 
        variants={variantsPhrases} 
        initial='initial' 
        animate='animate'
      >
        <motion.div className='h-1 rounded-full bg-white w-full' variants={variantBorderTop}/>
        <h3 className="text-2xl md:text-3xl my-2.5 md:my-4">Votre instant bien-être</h3>
        <div className='h-full md:h-16' style={{width: `${locationWidth}px`}}>
          <div className="h-12 w-full flex text-2xl md:text-3xl relative flex-nowrap tracking-wide">
            <div ref={up} className="arles">
              &nbsp;&nbsp;&nbsp;&nbsp;en Arles&nbsp;&nbsp;&nbsp;&nbsp;-&nbsp;&nbsp;&nbsp;&nbsp;dans les Alpilles&nbsp;&nbsp;&nbsp;&nbsp;-&nbsp;&nbsp;&nbsp;&nbsp;en Camargue&nbsp;&nbsp;&nbsp;&nbsp;-
            </div>
            <div ref={down} className="arles-2">
              &nbsp;&nbsp;&nbsp;&nbsp;en Arles&nbsp;&nbsp;&nbsp;&nbsp;-&nbsp;&nbsp;&nbsp;&nbsp;dans les Alpilles&nbsp;&nbsp;&nbsp;&nbsp;-&nbsp;&nbsp;&nbsp;&nbsp;en Camargue&nbsp;&nbsp;&nbsp;&nbsp;-
            </div>
          </div>
        </div>
        <motion.div className='h-1 rounded-full bg-white w-full' variants={variantBorderBottom}/>
      </motion.div>
      <motion.div
        className="absolute w-full h-full bg-main-theme z-50" 
        variants={folder}
        initial='initial'
        animate="animate"
      />
      <motion.div 
        className="w-screen h-screen bg-[url(/images/118930618_372805930709061_72465373286677363_n.jpg)] lg:bg-[url(/images/bandeau_mains_masse.jpg)] bg-no-repeat bg-cover will-change-transform"
        variants={bgImgAnim}
        initial='initial'
        animate='animate'
      />
      {
        height && height>750 &&
        <motion.div 
          className="overflow-hidden absolute z-30 left-1/2 -translate-x-1/2 bottom-12 lg:right-20 lg:left-auto flex flex-col items-center text-white cursor-pointer" 
          initial={{opacity:0}} 
          animate={{opacity:1}} 
          transition={{opacity : {delay:3}}} 
          onClick={()=>window.scrollTo({top: anchorHeight, left:0, behavior: 'smooth' })}
        >
          <svg className='arrow-anim' width="32px" height="32px" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
            <path d="M 15 4 L 15 24.0625 L 8.21875 17.28125 L 6.78125 18.71875 L 15.28125 27.21875 L 16 27.90625 L 16.71875 27.21875 L 25.21875 18.71875 L 23.78125 17.28125 L 17 24.0625 L 17 4 Z" fill="grey"/>
          </svg>
          <small className='text-base italic text-gray-300'>Explorez</small>
        </motion.div>
      }
    </section>
  )
}

export default Anchor