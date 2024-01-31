'use client'

import { appearAndUp } from '@/@animations/appearAndUp'
import { titleAnimation } from '@/@animations/titleAnimation'
import { childList, parentList } from '@/@animations/yogaAnimations'
import Hero from '@/components/sharedUI/Hero'
import { karla } from '@/fonts/karla'
import { playfair } from '@/fonts/playfair'
import { motion, useAnimation } from 'framer-motion'
import Image from 'next/image'
import React, { FC, useEffect, useState} from 'react'
import { FaFan } from 'react-icons/fa'
import { InView } from 'react-intersection-observer'

const KobidoScreen: FC = () => {
  const [sectionTwoInView, setSectionTwoInView] = useState<boolean>(false)

  const controls = useAnimation()

  useEffect(() => {
    if(sectionTwoInView){
      controls.start("animate")
      controls.start("ulAppear")
    }
  }, [controls, sectionTwoInView])

  return (
    <main className='bg-main-theme py-14 overflow-hidden'>
      <Hero title='Kobido' image='kobido.jpg' translateUp='-450' heroInView={true} />
      <motion.h4 
        variants={titleAnimation} 
        initial='initial' 
        animate='appear' 
        className={`${playfair.className} px-10 lg:px-40 my-16 italic text-2xl md:text-4xl font-bold text-white tracking-wide `}
      >
        Le kobido en quelques mots...
      </motion.h4>
      <motion.section
        variants={appearAndUp}
        initial='initial'
        animate='animate'
        className='w-full px-5 md:px-0 md:w-[650px] xl:w-[1100px] mx-auto mb-20'
      >
        <Image src='/images/kobido-illustration.jpg' alt='crème appliquée sur le visage' className='mx-auto border-2 border-white rounded-md mb-16' width={450} height={450} />
        <div className='flex p-2.5'>
					<div className='min-w-0 lg:min-w-[6px] bg-pink min-h-full rounded-md' />
					<div className='px-5'>
					<p style={{lineHeight:'2.5rem'}} className={`${karla.className} text-white text-xl lg:text-2xl indent-5 italic mb-5 tracking-wide text-justify`}>
						Le kobido est un savoir-faire an&shy;cestral de beau&shy;té pratiqué au Ja&shy;pon depuis le 15ème siècle pour as&shy;surer la jeu&shy;nesse du visa&shy;ge des femmes ja&shy;po&shy;naises. Ce soin lif&shy;tant anti-ri&shy;des sti&shy;mu&shy;le l&apos;en&shy;sem&shy;ble de la cir&shy;cu&shy;lation san&shy;guine et éner&shy;gé&shy;ti&shy;que du vi&shy;sage et du cou.
					</p>
					<p style={{lineHeight:'2.5rem'}} className={`${karla.className} text-white text-xl lg:text-2xl indent-5 italic my-5 tracking-wide text-justify`}>
						Il est exé&shy;cu&shy;té sous la for&shy;me de pe&shy;ti&shy;tes pres&shy;sions sur les mé&shy;ri&shy;diens du vi&shy;sa&shy;ge qui fa&shy;vo&shy;risent la li&shy;bé&shy;ra&shy;tion des blo&shy;cages énergé&shy;tiques et ap&shy;por&shy;tent une re&shy;la&shy;xa&shy;tion pro&shy;fonde. Une sti&shy;mu&shy;la&shy;tion de la lym&shy;phe fa&shy;ci&shy;li&shy;te l&apos;éva&shy;cua&shy;tion des toxi&shy;nes et pu&shy;ri&shy;fie la peau.
					</p>
					<p style={{lineHeight:'2.5rem'}} className={`${karla.className} text-white text-xl lg:text-2xl indent-5 italic mt-5 tracking-wide text-justify`}>
						Ainsi, pra&shy;tiqué régu&shy;lière&shy;ment, ce soin re&shy;don&shy;ne à la peau un aspect plus sou&shy;ple, plus écla&shy;tant et ra&shy;jeu&shy;ni.
					</p>
					</div>
        </div>
      </motion.section>
      <InView onChange={(inView, entry)=> inView && setSectionTwoInView(true)}>
        <motion.h4 
          className={`${playfair.className} px-10 lg:px-40 mt-16 mb-10 italic text-xl lg:text-2xl md:text-4xl font-bold text-white tracking-wide`}
          variants={titleAnimation}
          initial='initial'
          animate={`${sectionTwoInView ? 'appear':""}`}
        >
          Quels en sont les bienfaits ? 
        </motion.h4>
        <motion.section 
          variants={appearAndUp}
          initial='initial'
          animate={`${sectionTwoInView ? 'animate':""}`}
          className='w-full px-5 md:px-0 md:w-[650px] xl:w-[1100px] mx-auto mb-36 text-white'
        >
          <motion.ul className={`lg:border-l-8 border-pink lg:pl-8 pl-2.5`} variants={parentList} initial="initial" animate={controls} >
            <motion.li className={`flex flex-row items-start lg:items-center gap-2 mb-2.5`} variants={childList}>
              <div className="w-5 h-5 lg:translate-y-0 translate-y-2">
                <FaFan size={15} color='pink' className="fan"/>
              </div>
              <span className={`${karla.className} ml-0 text-xl text-justify`}>Renforce la vitalité de la peau.</span>
            </motion.li>
            <motion.li className='flex items-center lg:gap-0 gap-2 mb-2.5' variants={childList}>
              <div className="w-5 h-5 lg:translate-y-0 translate-y-0-2">
                <FaFan size={15} color='pink' className="fan"/>
              </div>
              <span className={`${karla.className} ml-0 text-xl text-justify`}>Equilibre l&apos;énergie vitale.</span>
            </motion.li>
            <motion.li className='flex flex-row items-start lg:items-center gap-2 mb-2.5' variants={childList}>
              <div className="w-5 h-5 lg:translate-y-0 translate-y-2">
                <FaFan size={15} color='pink' className="fan"/>
              </div>
              <span className={`${karla.className} ml-0 text-xl text-justify`}>Harmonise l&apos;état de la peau.</span>
            </motion.li>
            <motion.li className='flex flex-row items-start lg:items-center gap-2 mb-2.5' variants={childList}>
              <div className="w-5 h-5 lg:translate-y-0 translate-y-2">
                <FaFan size={15} color='pink' className="fan"/>
              </div>
              <span className={`${karla.className} ml-0 text-xl text-justify`}>Fait circu&shy;ler le sang dans les vais&shy;seaux.</span>
            </motion.li>
            <motion.li className='flex flex-row items-start lg:items-center gap-2 mb-2.5' variants={childList}>
              <div className="w-5 h-5 lg:translate-y-0 translate-y-2">
                <FaFan size={15} color='pink' className="fan"/>
              </div>
              <span className={`${karla.className} ml-0 text-xl text-justify`}>Redessine le contour du visage.</span>
            </motion.li>
            <motion.li className='flex flex-row items-start lg:items-center gap-2 mb-2.5' variants={childList}>
              <div className="w-5 h-5 lg:translate-y-0 translate-y-2">
                <FaFan size={15} color='pink' className="fan"/>
              </div>
              <span className={`${karla.className} ml-0 text-xl text-justify`}>Lutte contre les rides d&apos;expres&shy;sion.</span>
            </motion.li>
            <motion.li className='flex flex-row items-start lg:items-center gap-2 mb-2.5' variants={childList}>
              <div className="w-5 h-5 lg:translate-y-0 translate-y-2">
                <FaFan size={15} color='pink' className="fan"/>
              </div>
              <span className={`${karla.className} ml-0 text-xl text-justify`}>Elimine les toxines.</span>
            </motion.li>
            <motion.li className='flex flex-row items-start lg:items-center gap-2 mb-2.5' variants={childList}>
              <div className="w-5 h-5 lg:translate-y-0 translate-y-2">
                <FaFan size={15} color='pink' className="fan"/>
              </div>
              <span className={`${karla.className} ml-0 text-xl text-justify`}>Favorise la protec&shy;tion et le re&shy;nou&shy;vel&shy;le&shy;ment de l&apos;épi&shy;derme.</span>
            </motion.li>
            <motion.li className='flex flex-row items-start lg:items-center gap-2 mb-2.5' variants={childList}>
              <div className="w-5 h-5 lg:translate-y-0 translate-y-2">
                <FaFan size={15} color='pink' className="fan"/>
              </div>
              <span className={`${karla.className} ml-0 text-xl text-justify`}>Améliore le teint.</span>
            </motion.li>
          </motion.ul>
        </motion.section>
      </InView>
    </main>
  )
}

export default KobidoScreen
