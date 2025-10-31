'use client'

import { titleAnimation } from '@/@animations/titleAnimation'
import Hero from '@/components/sharedUI/Hero'
import HomeCurveSeparation from '@/components/sharedUI/HomeCurveSeparation'
import { karla } from '@/fonts/karla'
import { playfair } from '@/fonts/playfair'
import { motion } from 'framer-motion'
import Image from 'next/image'
import React, { FC, useState } from 'react'
import { InView } from 'react-intersection-observer'

const MassageBougieScreen: FC = () => {
  const [curveInView, setCurveInView] = useState<boolean>(false)
  
  return (
    <main className='py-14 bg-main-theme overflow-hidden'>
      <Hero title='Massage à la bougie' image="pexels-candles.jpg" translateUp='-150' heroInView={true} />
      <motion.h4 
        variants={titleAnimation} 
        initial='initial' 
        animate='appear' 
        className={`${playfair.className} my-10 italic px-5 md:px-20 tracking-wide font-bold text-white text-3xl md:text-4xl`}>
          Le massage à la bougie en quelques mots
        </motion.h4>
      <motion.section 
        className="lg:w-[900px] flex-col lg:flex-row  mx-auto flex items-center gap-7 mb-16" 
        initial={{x:-100, opacity:0}} 
        animate={{x:0, opacity:1}} 
        transition={{opacity : {duration : 0.75, delay:0.8, ease:"easeOut"}, x : {duration : 0.75, delay:0.8, ease:"easeOut"}}} 
      >
        <Image src="/images/massageBougie2.jpg" className='border-2 border-white rounded-md' alt='massage à la bougie' width={400} height={400} />
        <article className="flex text-xl px-5 lg-px-0 lg:text-2xl text-white italic ">
          <div className='min-w-[4px] min-h-full bg-pink rounded-md'/>
          <p className={`${karla.className} pl-5 indent-5 text-justify leading-10 tracking-wide`}>
            Ce type de massage réalisé sur l&apos;en&shy;sem&shy;ble du corps est ré&shy;puté pour sa capacité à dé&shy;ten&shy;dre les muscles et à sup&shy;primer les ten&shy;sions dues au stress. Ori&shy;ginai&shy;re de Thaï&shy;lande, il reste en&shy;core assez mécon&shy;nu en Oc&shy;cident. L’huile est ap&shy;pli&shy;quée sur tout le corps par de longs mou&shy;vements flui&shy;des. 
          </p>
        </article>
      </motion.section>
      <motion.section 
        className="lg:w-[900px] flex-col-reverse lg:flex-row mx-auto flex items-center gap-7 mb-16" 
        initial={{x:100, opacity:0}} 
        animate={{x:0, opacity:1}} 
        transition={{opacity : {duration : 0.75, delay:1.5, ease:"easeOut"}, x : {duration : 0.75, delay:1.25, ease:"easeOut"}}} 
      >
        <article className="flex text-xl lg:text-2xl px-5 lg-px-0 text-white italic ">
          <p className={`${karla.className} pr-5 indent-5 text-justify leading-10 tracking-wide`}>
            Les bougies de massage sont des bou&shy;gies spécifiques, 100% naturelles à base de cire végétale ou d&apos;abeil&shy;les et enri&shy;chies en huiles es&shy;sentiel&shy;les, senteurs pro&shy;pices à la dé&shy;con&shy;trac&shy;tion. La fonte de la bou&shy;gie pro&shy;duit de la cire li&shy;quide qui se transforme en huile de mas&shy;sage hy&shy;dra&shy;tante. Avec un parfum agré&shy;able, des vertus a&shy;dou&shy;cis&shy;san&shy;tes et nour&shy;ris&shy;san&shy;tes pour la peau, ce mas&shy;sage est conseil&shy;lé pour les peaux sèches et sen&shy;sibles. De plus, la douce sen&shy;sation de la ci&shy;re tiède sur la peau en fait un mas&shy;sage idéal pour l&apos;hiver. 
          </p>
          <div className='min-w-[4px] min-h-full bg-pink rounded-md'/>
        </article>
        <Image src="/images/massageBougie.jpg" className='border-2 border-white rounded-md' alt='masseuse verse la cire de bougie sur le dos' width={400} height={400} />
      </motion.section>
      <h4 className={`${playfair.className} my-24 italic px-5 md:px-20 tracking-wide font-bold text-white text-3xl lg:text-4xl text-center leading-[3.5rem]`}>
        Bref, effet enveloppant, confort immédiat et sensation de cocooning garantis !
      </h4>
      <InView onChange={(inView, entry)=> setCurveInView(inView && true)} className='py-12' >
        <HomeCurveSeparation 
          texte="Me contacter ou Prendre RDV" 
          lien="/infospratiques" 
          margin="0" 
          target={false}
          inView={curveInView}
        />
      </InView>
    </main>
  )
}

export default MassageBougieScreen