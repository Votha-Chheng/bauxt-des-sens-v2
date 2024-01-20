'use client'

import { appearAndUp } from '@/@animations/appearAndUp'
import { titleAnimation } from '@/@animations/titleAnimation'
import Hero from '@/components/sharedUI/Hero'
import { karla } from '@/fonts/karla'
import { playfair } from '@/fonts/playfair'
import { motion } from 'framer-motion'
import Image from 'next/image'
import React, { FC} from 'react'

const KobidoScreen: FC = () => {

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
						Le kobido est un savoir-faire an&shy;cestral de beau&shy;té pratiqué au Ja&shy;pon depuis le 15ème siècle pour as&shy;surer la jeu&shy;nesse du visa&shy;ge des femmes ja&shy;po&shy;naises. Ce soin lif&shy;tant anti&shy;rides sti&shy;mule l&apos;en&shy;sem&shy;ble de la cir&shy;cu&shy;lation san&shy;guine et éner&shy;gé&shy;ti&shy;que du vi&shy;sage et du cou. C&apos;est aussi un soin gé&shy;né&shy;rant une pro&shy;fonde re&shy;la&shy;xa&shy;tion qui amé&shy;liore le teint de la peau.
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
    </main>
  )
}

export default KobidoScreen
