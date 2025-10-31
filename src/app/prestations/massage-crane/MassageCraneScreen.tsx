'use client'

import { opacityBandeau } from '@/@animations/opacityBandeau'
import Hero from '@/components/sharedUI/Hero'
import HomeCurveSeparation from '@/components/sharedUI/HomeCurveSeparation'
import { karla } from '@/fonts/karla'
import { playfair } from '@/fonts/playfair'
import { motion } from 'framer-motion'
import Image from 'next/image'
import React, { FC, useState } from 'react'
import { FaFan } from 'react-icons/fa6'
import { InView } from 'react-intersection-observer'

const MassageCranePage: FC = () => {
  const [sectionInView, setSectionInView] = useState<boolean>(false)
  const [curveInView, setCurveInView] = useState<boolean>(false)

  return (
    <main className="py-14 bg-main-theme overflow-hidden">
      <Hero title="massage crânien" image="pexels-photo-3997989.jpeg" translateUp="-450" heroInView={true}/>
    
      <InView onChange={(inView, entry)=>inView && setSectionInView(inView)} className="px-5 lg:px-20">
        <motion.div className='px-0 xl:px-44' variants={opacityBandeau} initial="initial" animate={sectionInView ? 'animate':""}> 
          <div className="flex flex-col lg:flex-row gap-7 my-16 items-center">
            <Image src="/images/176067219_2674521086185632_6685018227844772496_n.jpg" alt='massage du crâne' width={300} height={300} className='border-2 border-white rounded-md'/>
            <div className={`${karla.className} text-white italic text-xl lg:text-2xl indent-5 tracking-wide text-justify`}>
              <p className='leading-10 my-2.5'>
                Ah, le massage du cuir chevelu ! Beau&shy;coup de ceux et celles qui sont déjà pas&shy;sés sous mes mains en sont tellement fan... Impos&shy;sible de ter&shy;miner le mo&shy;dela&shy;ge sans passer par là. 
              </p>
              <p className='leading-10 my-2.5'>
                Ce massage semble assez anodin mais ses effets positifs sur l&apos;esprit et le corps à court et long terme sont in&shy;nombra&shy;bles.
              </p>
            </div> 
          </div>
          <section className="py-8">
            <h4 className={`${playfair.className} text-2xl md:text-4xl font-bold text-white tracking-wide my-2.5`}>
              Quels en sont les bienfaits physiques ?
            </h4>
            <ul className='my-10 pl-4'>
              <li className='flex items-center gap-5 my-2.5'>
                <FaFan className='fan text-pink'/>
                <p className={`${karla.className} leading-8 w-96 sm:w-[500px] lg:w-full italic text-white text-xl lg:text-2xl`} >Les muscles sont relâchés.</p>
              </li>
              <li className='flex items-center gap-5 my-2.5'>
                <FaFan className='fan self-start mt-2 text-pink'/>
                <p className={`${karla.className} leading-8 w-96 sm:w-[500px] lg:w-full italic text-white text-xl lg:text-2xl`} >Un bien-être se diffuse dans la totalité du corps.</p>
              </li>
              <li className='flex items-center gap-5 my-2.5'>
                <FaFan className='fan self-start mt-2 text-pink'/>
                <p className={`${karla.className} leading-8 w-96 sm:w-[500px] lg:w-full italic text-white text-xl lg:text-2xl`} >Ce soin embellit et détend la peau.</p>
              </li>
              <li className='flex items-center gap-5 my-2.5'>
                <FaFan className='fan self-start mt-2 text-pink'/>
                <p className={`${karla.className} leading-8 w-96 sm:w-[500px] lg:w-full italic text-white text-xl lg:text-2xl`} >Les traits du visage sont apaisés.</p>
              </li>
            </ul>
          </section>
          <section className="">
            <h4 className={`${playfair.className} text-4xl font-bold text-white tracking-wide my-2.5`}>Quels en sont les bienfaits physiologiques ?</h4>
            <ul className='my-10 pl-4'>
              <li className='flex items-center gap-5 my-2.5'>
                <FaFan className='fan self-start mt-2 text-pink'/>
                <p className={`${karla.className} leading-8 text-justify italic text-white text-xl lg:text-2xl w-96 sm:w-[500px] lg:w-full`} >
                  La sensation très agréable que pro&shy;cure le mas&shy;sage du cuir che&shy;ve&shy;lu, li&shy;bère dans le corps des en&shy;dor&shy;phi&shy;nes, ayant des pro&shy;priétés antal&shy;giques qui ap&shy;por&shy;tent un sen&shy;ti&shy;ment de bien-être, de con&shy;ten&shy;t&shy;ement et de bon&shy;heur.
                </p>
              </li>
              <li className='flex items-center gap-5 my-2.5'>
                <FaFan className='fan self-start mt-2 text-pink'/>
                <p className={`${karla.className} leading-8 text-justify w-96 md:w-[500px] lg:w-full italic text-xl text-white lg:text-2xl`} >
                  Il procure calme, tran&shy;quil&shy;lité, con&shy;cen&shy;tra&shy;tion sur le long ter&shy;me et fa&shy;vo&shy;rise le som&shy;meil.
                </p>
              </li>
              <li className='flex items-center gap-5 my-2.5'>
                <FaFan className='fan self-start mt-2 text-pink'/>
                <p className={`${karla.className} leading-8 text-justify w-96 md:w-[500px] lg:w-full italic text-xl text-white lg:text-2xl`} >
                  Il minore l&apos;an&shy;xiété, la fati&shy;gue, le stress et les maux de tête.
                </p>
              </li>
            </ul>
          </section>
        </motion.div>
      </InView> 
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

export default MassageCranePage