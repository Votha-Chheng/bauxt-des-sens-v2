'use client'

import React, { FC } from 'react'
import Partenaires from './Partenaires'
import { motion } from 'framer-motion'
import { titleAnimation } from '@/@animations/titleAnimation'
import Image from 'next/image'

const TemoignagesScreen: FC = () => {
  const tableauAvis = ["temoin1", "temoin2", "temoin3", "temoin4", "temoin5", "temoin6", "temoin7", "temoin8", "temoin9", "temoin10"]

  const parentAvis = {
    animate: {
      transition: {
        delayChildren: 0.5,
        staggerChildren : 0.1
      }
    }
  }

  const childAvis = {
    initial : {
      opacity: 0,
      y: 300
    },
    animate: {
      opacity: 1,
      y:0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  }

  return (
    <main className={`py-14 bg-main-theme px-20`}>
      <Partenaires/>
      <motion.h2 className="home-titles" variants={titleAnimation} initial="initial" animate="appear" >
        Baux&apos;t des sens, c&apos;est encore les autres qui en parlent le mieux...
      </motion.h2>
      <motion.div className="flex gap-8 flex-wrap justify-center w-full min-h-[250px]" variants={parentAvis} initial="initial" animate="animate">
        {
          tableauAvis.map((avis, idx)=>
            <motion.div variants={childAvis} className="avis" key={idx}>
              <Image src={`/images/${avis}.jpg`} alt='avis' width={300} height={300} />
            </motion.div>
          )
        }
      </motion.div>
      <h2 className='home-titles' style={{textAlign:"right", fontSize:'1.75rem'}} >
        Merci infiniment à eux et à tous les autres pour leur confiance !
      </h2>
    </main>
  )
}

export default TemoignagesScreen