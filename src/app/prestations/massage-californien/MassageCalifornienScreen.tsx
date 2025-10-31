'use client'

import { opacityBandeau } from '@/@animations/opacityBandeau'
import Hero from '@/components/sharedUI/Hero'
import HomeCurveSeparation from '@/components/sharedUI/HomeCurveSeparation'
import { karla } from '@/fonts/karla'
import { playfair } from '@/fonts/playfair'
import { motion } from 'framer-motion'
import Image from 'next/image'
import React, { FC, useState } from 'react'
import { InView } from 'react-intersection-observer'

const MassageCalifornienScreen:FC = () => {
  const [curveInView, setCurveInView] = useState<boolean>(false)
  
  return (
    <main className='py-14 bg-main-theme overflow-hidden'>
      <Hero title="massage californien" translateUp='-250' heroInView={true} image='118930618_372805930709061_72465373286677363_n.jpg' />
      <motion.section className="lg:px-20" variants={opacityBandeau} initial="initial" animate='animate' >
        <div className='p-2.5 md:px-10 xl:px-24'>
          <h4 className={`${playfair.className} italic text-2xl md:text-4xl font-bold text-white tracking-wide my-2.5`}>Le massage californien en quelques mots...</h4>
          <article className='flex flex-col items-center xl:flex-row gap-7 py-10 mb-10'>
            <div className='max-w-[400px] xl:min-h-full xl:max-w-[400px] xl:min-w-[400px] py-10'>
              <Image
                src="/images/67172258_104448047544852_9029561800831533056_n.jpg" 
                alt="massage californien" 
                width={600} 
                height={600} 
                className='border-2 border-white rounded-md '
              />
            </div>
            <div className='flex p-2.5'>
              <div className='min-w-0 lg:min-w-[6px] bg-pink min-h-full rounded-md' />
              <div className='px-5'>
                <p style={{lineHeight:'2.5rem'}} className={`${karla.className} text-white text-xl lg:text-2xl indent-5 italic mb-5 tracking-wide text-justify`}>
                  Originaire de Californie, ce mas&shy;sa&shy;ge con&shy;vient par&shy;fai&shy;te&shy;ment à qui&shy;conque re&shy;cher&shy;che, à tra&shy;vers une dé&shy;ten&shy;te pro&shy;fon&shy;de, un sou&shy;la&shy;ge&shy;ment ef&shy;fi&shy;ca&shy;ce et du&shy;ra&shy;ble de ses ten&shy;sions en plus d&apos;une har&shy;mo&shy;ni&shy;sa&shy;tion glo&shy;ba&shy;le de tout l&apos;être. Il s&apos;agit du mas&shy;sage an&shy;ti-stress par excel&shy;len&shy;ce !
                </p>
                <p style={{lineHeight:'2.5rem'}} className={`${karla.className} text-white text-xl lg:text-2xl indent-5 italic my-5 tracking-wide text-justify`}>
                  Proche du massage suédois, le mas&shy;sage ca&shy;li&shy;for&shy;nien en par&shy;ta&shy;ge plu&shy;sieurs ma&shy;noeuvres. On y re&shy;trou&shy;ve : les fou&shy;la&shy;ges, les pé&shy;tris&shy;sages et les ro&shy;ta&shy;tions fric&shy;tions qui pe&shy;rmet&shy;tent l&apos;oxy&shy;gé&shy;na&shy;tion et le sou&shy;la&shy;ge&shy;ment de ten&shy;sions pro&shy;fon&shy;des, ain&shy;si que les ef&shy;fleu&shy;ra&shy;ges et les pres&shy;sions glis&shy;sées qui fa&shy;vo&shy;ri&shy;sent l&apos;acti&shy;va&shy;tion de la cir&shy;cu&shy;la&shy;tion des flui&shy;des.
                </p>
                <p style={{lineHeight:'2.5rem'}} className={`${karla.className} text-white text-xl lg:text-2xl indent-5 italic mt-5 tracking-wide text-justify`}>
                  La douceur du massage ca&shy;li&shy;for&shy;nien dé&shy;fi&shy;nit plu&shy;tôt l&apos;in&shy;teraction en&shy;tre le don&shy;neur et le re&shy;ce&shy;veur. Com&shy;me il est don&shy;né avec é&shy;cou&shy;te et com&shy;pas&shy;sion, le mas&shy;sage ca&shy;li&shy;for&shy;nien fa&shy;vo&shy;ri&shy;se l&apos;é&shy;mer&shy;gen&shy;ce de la mé&shy;moi&shy;re cor&shy;po&shy;rel&shy;le. Ain&shy;si, re&shy;ce&shy;voir un mas&shy;sa&shy;ge ca&shy;li&shy;for&shy;nien, c&apos;est s&apos;of&shy;frir un oasis, un res&shy;sour&shy;ce&shy;ment.
                </p>
              </div>
            </div>
          </article>
        </div>
      </motion.section> 
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

export default MassageCalifornienScreen