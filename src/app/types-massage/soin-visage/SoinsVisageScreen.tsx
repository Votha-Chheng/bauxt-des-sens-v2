'use client'

import { appearAndUp } from '@/@animations/appearAndUp'
import { titleAnimation } from '@/@animations/titleAnimation'
import Hero from '@/components/sharedUI/Hero'
import { italianno } from '@/fonts/italianno'
import { karla } from '@/fonts/karla'
import { parisienne } from '@/fonts/parisienne'
import { playfair } from '@/fonts/playfair'
import { varela } from '@/fonts/varela'
import { motion } from 'framer-motion'
import Image from 'next/image'
import React, { FC, useState,} from 'react'
import { FaFan } from 'react-icons/fa6'
import { InView } from 'react-intersection-observer'

const SoinsVisageScreen: FC = () => {
  const [sectionTwoInView, setSectionTwoInView] = useState<boolean>(false)
  const [sectiontThreeInView, setSectiontThreeInView] = useState<boolean>(false)

  return (
    <main className='bg-main-theme py-14 overflow-hidden'>
      <Hero title='Soin du visage' image='pexels-face-massage.jpg' translateUp='-450' heroInView={true} />
      <motion.h4 
        variants={titleAnimation} 
        initial='initial' 
        animate='appear' 
        className={`${playfair.className} px-10 lg:px-40 my-16 italic text-2xl md:text-4xl font-bold text-white tracking-wide `}
      >
        Les étapes du soin du visage
      </motion.h4>
      <motion.section
        variants={appearAndUp}
        initial='initial'
        animate='animate'
        className='w-full px-5 md:px-0 md:w-[650px] xl:w-[1100px] mx-auto mb-20'>
        <Image src='/images/face-care-unsplash.jpg' alt='crème appliquée sur le visage' className='mx-auto border-2 border-white rounded-md mb-16' width={450} height={450} />
        <ul className='text-white'>
          <li className='mb-10'>
            <div className='flex gap-2.5 items-center my-2.5'>
              <FaFan className='fan text-pink'/>
              <h5 className={`${italianno.className} text-4xl underline-offset-4 tracking-wider`}><u>&Eacute;tape 1 :</u> Nettoyer la peau</h5>
            </div>
            <p className={`${karla.className} pl-5 text-xl lg:text-2xl leading-10 indent-5 text-justify italic`} >
              On commence d&apos;abord par un net&shy;toya&shy;ge en pro&shy;fon&shy;deur de la peau afin de désin&shy;cruster les pores et éliminer les restes de maquillage. Le pro&shy;ces&shy;sus est ef&shy;fec&shy;tué par ap&shy;pli&shy;ca&shy;tion d&apos;un gel mous&shy;sant sur la peau du vi&shy;sage.
            </p>
          </li>
          <li className='mb-10'>
            <div className='flex gap-2.5 items-center my-2.5'>
              <FaFan className='fan text-pink'/>
              <h5 className={`${italianno.className} text-4xl underline-offset-4 tracking-wider`}><u>&Eacute;tape 2 :</u> Le gommage</h5>
            </div>
            <p className={`${karla.className} pl-5 text-xl lg:text-2xl leading-10 indent-5 text-justify italic`}>
              Cette étape con&shy;siste prin&shy;ci&shy;pa&shy;le&shy;ment à dé&shy;col&shy;ler les cel&shy;lules mor&shy;tes et ex&shy;fo&shy;lier la peau a&shy;fin de fa&shy;vo&shy;ri&shy;ser son re&shy;nou&shy;vel&shy;le&shy;ment.
            </p>
          </li>
          <li className='mb-10'>
          <div className='flex gap-2.5 items-center my-2.5'>
            <FaFan className='fan text-pink'/>
            <h5 className={`${italianno.className} text-4xl underline-offset-4 tracking-wider`}><u>Etape 3 :</u> Le masque</h5>
          </div>
            <p className={`${karla.className} pl-5 text-xl lg:text-2xl leading-10 indent-5 text-justify italic`}>
              Ensuite, l&apos;ap&shy;pli&shy;ca&shy;tion d&apos;un mas&shy;que a&shy;dapté per&shy;met&shy;tra de pu&shy;ri&shy;fier et d&apos;as&shy;sai&shy;nir la peau.
            </p>
          </li>
          <li className='mb-10'>
            <div className='flex gap-2.5 items-center my-2.5'>
              <FaFan className='fan text-pink'/>
              <h5 className={`${italianno.className} text-4xl underline-offset-4 tracking-wider`}><u>Etape 4 :</u> Le modelage</h5>
            </div>
            <p className={`${karla.className} pl-5 text-xl lg:text-2xl leading-10 indent-5 text-justify italic`}>
              Il rend la peau plus jeu&shy;ne, plus dou&shy;ce, plus fer&shy;me et plus bel&shy;le. Le mas&shy;sage du vi&shy;sage re&shy;lâ&shy;che les ten&shy;sions, rend les ri&shy;des moins ap&shy;pa&shy;ren&shy;tes, sti&shy;mu&shy;le la cir&shy;cu&shy;la&shy;tion san&shy;guine, res&shy;ser&shy;re les muscles du vis&shy;age, ré&shy;équi&shy;li&shy;bre l&apos;hy&shy;dra&shy;ta&shy;tion, ré&shy;duits les im&shy;pu&shy;re&shy;tés et les toxines. Le soin vi&shy;sage ac&shy;croît l&apos;é&shy;clat de la peau, dé&shy;tend les muscles et les traits du vi&shy;sa&shy;ge. 
            </p>
          </li>
          <li className='mb-10'>
            <div className='flex gap-2.5 items-center my-2.5'>
              <FaFan className='fan text-pink'/>
              <h5 className={`${italianno.className} text-4xl underline-offset-4 tracking-wider`}><u>Etape 5 :</u> Crème de soin</h5>
            </div>
            <p className={`${karla.className} pl-5 text-xl lg:text-2xl leading-10 indent-5 text-justify italic`}>
              On termine par l&apos;ap&shy;plica&shy;tion d&apos;une crè&shy;me de soin pour hy&shy;dra&shy;ter la peau ré&shy;ta&shy;blir la cou&shy;che hy&shy;dro&shy;li&shy;pi&shy;di&shy;que de l&apos;é&shy;pi&shy;der&shy;me. 
            </p>
          </li>
        </ul>
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
          <p className={`${karla.className} text-xl lg:text-2xl leading-10 indent-5 text-justify italic`}>
            Il est recommandé d&apos;effectuer un soin vi&shy;sage par une pro&shy;fes&shy;sion&shy;nel&shy;le une fois par mois. En ef&shy;fet, ce soin aug&shy;men&shy;te&shy;ra à cha&shy;que vi&shy;si&shy;te la sou&shy;ples&shy;se et l&apos;hy&shy;dra&shy;ta&shy;tion de vo&shy;tre peau. Ain&shy;si vos pro&shy;duits de soins du quo&shy;ti&shy;dien se&shy;ront mieux ab&shy;sor&shy;bés et vous pour&shy;rez bé&shy;né&shy;fi&shy;cier au maxi&shy;mum de leurs bien&shy;aits.
          </p>
        </motion.section>
      </InView>

      <InView onChange={(inView, entry)=> inView && setSectiontThreeInView(true)}>
        <motion.section 
          className='px-5 md:px-20 my-20'
          variants={appearAndUp}
          initial='initial'
          animate={`${sectiontThreeInView ? 'animate':""}`}
        >
          <div className='relative h-24 pt-1 my-16'>
            <div className='rounded-md top-[20%] md:top-1/4 absolute w-full h-1 md:h-2 bg-white' />
            <span 
              className={`${parisienne.className} w-[80%] sm:w-auto bg-main-theme px-1 sm:px-2.5 z-30 left-1/2 -translate-x-1/2 absolute text-white text-3xl md:text-4xl lg:text-6xl italic text-center tracking-normal md:tracking-wider`}
            >
              Une Olive en Provence
            </span>
          </div>
          <Image src='/images/une-olive-en-provence.jpg' alt='logo de la marque une olive en provence' className='border-2 border-white rounded-md mx-auto mb-10' width={350} height={350} />
          <p className={`${varela.className} text-white text-xl md:text-2xl tracking-wide indent-5 text-justify lg:px-20`}>
            <em className='leading-10'>Une olive en Provence, c&apos;est une mar&shy;que lo&shy;ca&shy;le avec des pro&shy;duits de qua&shy;li&shy;té que j&apos;ai sé&shy;lec&shy;tion&shy;nés pour vous, et que j&apos;u&shy;ti&shy;li&shy;se pour vos soins.</em>
          </p>
        </motion.section>
      </InView>
    </main>
  )
}

export default SoinsVisageScreen