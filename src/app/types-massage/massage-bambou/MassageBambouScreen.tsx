'use client'

import { titleAnimation } from '@/@animations/titleAnimation'
import Hero from '@/components/sharedUI/Hero'
import { karla } from '@/fonts/karla'
import { playfair } from '@/fonts/playfair'
import { varela } from '@/fonts/varela'
import { motion } from 'framer-motion'
import Image from 'next/image'
import React, { FC } from 'react'
import { PiWarningFill } from "react-icons/pi";

const MassageBambouScreen: FC = () => {
  return (
    <main className='pt-14 pb-24 bg-main-theme overflow-hidden'>
      <Hero title='Massage bambou' image='massage-bambous.jpg' translateUp='-300' heroInView={true} />
      <motion.h4
        variants={titleAnimation} 
        initial='initial' 
        animate='appear' 
        className={`${playfair.className} px-10 lg:px-40 my-16 italic text-2xl md:text-4xl font-bold text-white tracking-wide`}
      >
        Le massage bambou en quelques mots...
      </motion.h4>
      <section className="sm:w-[520px] lg:w-[900px] mx-auto">
        <motion.article 
          initial={{x:-300, opacity:0}} 
          animate={ {x:0, opacity:1}} 
          transition={{opacity : {duration : 0.75, delay:0.8, ease:"easeOut"}, x : {duration : 1.2, delay:0.8, ease:"easeOut"}}} 
          className='leading-[5rem]'
        >
          <p style={{lineHeight:"2.5rem"}} className={`${karla.className} px-5 sm:px-0 text-white text-xl lg:text-2xl indent-5 italic tracking-wide text-justify my-16`}>
            Fait à l'aide de bâtons de bam&shy;bou chauf&shy;fés et huilés, le massage aux bam&shy;bous est un trai&shy;te&shy;ment intra&shy;musculaire pro&shy;fond puis&shy;qu'il per&shy;met d'ac&shy;centuer les mouvements du mas&shy;so&shy;thé&shy;rapeu&shy;te. Bois lé&shy;ger mais ro&shy;buste, le bam&shy;bou offre de mul&shy;tiples effets thé&shy;rapeu&shy;tiques en dis&shy;persant les tensions et en li&shy;bérant les énergies.
          </p>
          <div className="relative w-96 h-72 mx-auto border-2 border-white rounded-md overflow-hidden mt-16 mb-24">
            <Image src="/images/massage-bambous.jpg" alt='massage avec bambous' fill/>
          </div>
          <div className={`${karla.className} text-white text-xl lg:text-2xl px-5 sm:px-0 my-16`}>
            <div className='relative h-24 pt-1'>
              <div className='rounded-md top-[20%] md:top-1/4 absolute w-full h-1 md:h-2 bg-white' />
              <div className={`${varela.className} w-64 md:w-72 items-center lg:w-auto flex gap-2 bg-main-theme px-2 lg:px-7 z-30 left-1/2 -translate-x-1/2 absolute text-white tracking-normal md:tracking-wide font-bold text-xl md:text-2xl lg:text-4xl`}>
                <PiWarningFill size={40}/>
                <h4 className=' italic text-center underline underline-offset-8'>Contre-indication</h4>
              </div>
            </div>
            <p style={{lineHeight:"2.5rem", fontStyle:'italic'}} className={`${varela.className} text-white text-xl lg:text-2xl indent-5 tracking-wide text-justify mb-16`}>
              Les personnes ayant des pro&shy;blèmes cardio&shy;vasculaires ou de cir&shy;culations tel&shy;les que phlébite ou varices ainsi que les per&shy;son&shy;nes souf&shy;frant de trou&shy;bles rénaux, d’hy&shy;per&shy;tension ou de dia&shy;bète de&shy;vraient con&shy;sul&shy;ter l’avis d’un mé&shy;decin avant de re&shy;cevoir ce soin. Le mas&shy;sage aux bam&shy;bous est éga&shy;lement dé&shy;con&shy;seillé en cas de fièvre ou de gros&shy;sesse.
            </p>
          </div>
        </motion.article>
      </section>
    </main>
  )
}

export default MassageBambouScreen