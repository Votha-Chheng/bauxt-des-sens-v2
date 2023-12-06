'use client'

import { opacityBandeau } from '@/@animations/opacityBandeau'
import Hero from '@/components/sharedUI/Hero'
import { karla } from '@/fonts/karla'
import { playfair } from '@/fonts/playfair'
import { motion } from 'framer-motion'
import Image from 'next/image'
import React, { FC } from 'react'

const MassagePersonnaliseScreen: FC = () => {
  return (
    <main className='py-14 bg-main-theme overflow-hidden'>
      <Hero title="massage personnalisé" translateUp='-450' heroInView={true} image='custom-massage.jpg' />
      <motion.section className="lg:px-20" variants={opacityBandeau} initial="initial" animate='animate' >
        <div className='p-2.5 md:px-10 xl:px-24'>
          <h4 className={`${playfair.className} italic text-2xl md:text-4xl font-bold text-white tracking-wide my-2.5`}>Le massage personnalisé en quelques mots...</h4>
          <article className='flex flex-col items-center xl:flex-row gap-7 py-10 mb-10'>
            <div className='max-w-[400px] xl:min-h-full xl:max-w-[400px] xl:min-w-[400px] py-10'>
              <Image
                src="/images/custom-massage.jpg" 
                alt="massage bébé" 
                width={600} 
                height={600} 
                className='border-2 border-white rounded-md '
              />
            </div>
            <div className='flex p-2.5'>
              <div className='min-w-0 lg:min-w-[6px] bg-pink min-h-full rounded-md' />
              <div className='px-5'>
                <p style={{lineHeight:'2.5rem'}} className={`${karla.className} text-white text-xl lg:text-2xl indent-5 italic mb-5 tracking-wide text-justify`}>
                  Le massage per&shy;son&shy;na&shy;li&shy;sé, c&apos;est vous qui le com&shy;po&shy;sez en fonction de vos en&shy;vies, vos res&shy;sen&shy;tis ou vos dou&shy;leurs. Vous choi&shy;sis&shy;sez la zo&shy;ne à mas&shy;ser, les soins et mou&shy;ve&shy;ments que vous sou&shy;hai&shy;tez que je vous ap&shy;pli&shy;que, leur du&shy;rée, etc. Je suis à votre é&shy;coute et je mets à vo&shy;tre dis&shy;posi&shy;tion tout mon sa&shy;voir-faire et mes ou&shy;tils dans ce mas&shy;sage sur-mesu&shy;re.
                </p>
              </div>
            </div>
          </article>
        </div>
      </motion.section> 
    </main>
  )
}

export default MassagePersonnaliseScreen