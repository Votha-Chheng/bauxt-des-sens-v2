'use client'

import React, { FC, useState } from 'react'
import HomeCurveSeparation from '../sharedUI/HomeCurveSeparation'
import { InView } from 'react-intersection-observer'
import { motion } from 'framer-motion'
import { useWindowSize } from '@uidotdev/usehooks'
import { titleAnimation } from '@/@animations/titleAnimation'
import { karla } from '@/fonts/karla'
import Image from 'next/image'
import { FaQuoteLeft, FaQuoteRight } from 'react-icons/fa6'

const Presentation: FC = () => {
  const [sectionInView, setSectionInView] = useState<boolean>(false)
  const [curveInView, setCurveInView] = useState<boolean>(false)

  const { width } = useWindowSize()

  return (
    <section className='py-24 px-3.5 lg:px-20 bg-main-theme overflow-hidden'>
      <InView onChange={(inView, entry)=> inView && setSectionInView(true)} className='mb-24'>
        <motion.h2 
          className="home-titles" 
          variants={titleAnimation}
          initial='initial'
          animate={sectionInView? "appear":""} 
        >
          Baux&apos;t des sens, c&apos;est avant tout Julie...
        </motion.h2>

        <motion.div className={`${karla.className} flex flex-col gap-y-5 mt-12`}>
          <motion.div
            className="relative w-80 h-80 md:w-[450px] md:h-[450px] overflow-hidden self-center border-2 border-white"
            initial={{borderRadius:"0", opacity: 0}} 
            animate={sectionInView? {borderRadius:"50%", opacity:1} : ""} 
            transition={{
              borderRadius:{delay:3.25, duration:0.5}, 
              opacity: {delay: 0.75, duration:1}
            }}
          >
            <Image 
              src="/images/portrait-2.jpg" 
              alt='portrait de Julie Dumesnil'
              fill
              className='grayscale-[30%]'
            />            
          </motion.div>
          <motion.div className={`${karla.className} flex gap-x-5 items-center text-lg md:text-2xl w-full md:w-10/12 mx-auto my-2.5 text-white rounded-md py-3 px-0 md:px-5 italic`}>
            <motion.div 
              className='self-start -translate-y-2.5'
              initial={{opacity:0}} 
              animate={sectionInView ? {opacity :1} : ""} 
              transition={{opacity : {delay : 2, duration: 1, ease:"easeOut"}}}
            >
              <FaQuoteLeft size={width && width<768 ? 20 : 50}/>
            </motion.div>
            <div>
              <motion.p 
                className='my-2.5 flex gap-2.5 text-justify indent-5 tracking-wide leading-10'
                initial={{opacity:0, y :"100%"}} 
                animate={sectionInView ? {opacity : 1, y:0} : ""} 
                transition={{opacity : {delay : 1.75, duration: 0.8}, y:{delay:1.75, duration: 1, ease:"easeOut"}}}
              >
                Bienvenue, je m&apos;ap&shy;pel&shy;le Julie ! Je suis pas&shy;sionnée par le monde du bien-être depuis plu&shy;sieurs an&shy;nées et suis titu&shy;laire d&apos;un diplô&shy;me d&apos;es&shy;thé&shy;ti&shy;que en plus d&apos;une forma&shy;tion en soins du corps, for&shy;ma&shy;tion suivie sur Avi&shy;gnon pendant plusieurs mois. 
              </motion.p>
              <motion.p
                className='my-2.5 flex gap-2.5 text-justify indent-5 tracking-wide leading-10'
                initial={{opacity:0, y :"100%"}} 
                animate={sectionInView ? {opacity : 1, y:0} : ""} 
                transition={{opacity : {delay :2, duration: 0.8}, y:{delay:2, duration: 1, ease:"easeOut"}}}
              >
                Durant mes prestations, je n&apos;ap&shy;porte pas seule&shy;ment un soin a&shy;vec des manœu&shy;vres, des tech&shy;ni&shy;ques, du mo&shy;delage et un mo&shy;ment de dé&shy;tente, non : j&apos;aspire à beau&shy;coup mieux que cela. En ef&shy;fet, pour moi le bien-être se pré&shy;pare et s&apos;in&shy;vi&shy;te. Tout est mis en œuvre, et tout est pro&shy;pi&shy;ce à ce que vous puis&shy;siez le recevoir dans les meil&shy;leu&shy;res con&shy;di&shy;tions.
              </motion.p>
            </div>
            <motion.div
              className='self-end'
              initial={{opacity:0}} 
              animate={sectionInView ? {opacity :1} : ""} 
              transition={{opacity : {delay : 2.2, duration: 1, ease:"easeOut"}}}
            >
              <FaQuoteRight size={width && width<768 ? 20 : 50}/>
            </motion.div>
          </motion.div>
        </motion.div>
      </InView>    
      <InView onChange={(inView, entry)=> setCurveInView(inView && true)} className='py-12' >
        <HomeCurveSeparation 
          texte="Me contacter" 
          lien="tel:0616838962" 
          margin="0" 
          target={true}
          inView={curveInView}
        />
      </InView>
    </section>
  )
}

export default Presentation