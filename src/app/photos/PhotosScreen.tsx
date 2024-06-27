"use client"

import { appearAndUp } from '@/@animations/appearAndUp'
import { titleAnimation } from '@/@animations/titleAnimation'
import { motion } from 'framer-motion'
import Image from 'next/image'
import React from 'react'

const PhotosScreen = () => {
  const photos = Array.from(Array(15).keys())

  return (
    <section className="mb-16 w-full px-10">
      <motion.h2 className="home-titles" variants={titleAnimation} initial="initial" animate="appear" >
        Quelques photos...
      </motion.h2>
      <motion.article variants={appearAndUp} animate="animate" initial="initial" className='flex flex-col items-center gap-y-10'>
        {
          photos.map((photo, index)=> (
            <div key={index} >
              <Image 
                src={`/images/photos-${photo+1}.jpg`} 
                alt="Baux'T des sens en plein action" 
                width={550} 
                height={550} 
                className='border-4 rounded-sm border-white' 
                placeholder='blur' 
                blurDataURL={`mini-photos-${index+1}.jpg`} 
              />
            </div>
          ))
        }
      </motion.article>
    </section>
  )
}

export default PhotosScreen