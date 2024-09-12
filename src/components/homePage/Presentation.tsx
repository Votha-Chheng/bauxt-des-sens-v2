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
import { parisienne } from '@/fonts/parisienne'
import { varela } from '@/fonts/varela'
import Link from 'next/link'
import { FaLongArrowAltRight } from 'react-icons/fa'

const Presentation: FC = () => {
  const [sectionInView, setSectionInView] = useState<boolean>(false)
  const [curveInView, setCurveInView] = useState<boolean>(false)

  const { width } = useWindowSize()

  return (
    <section className='py-24 px-3.5 lg:px-20 bg-main-theme overflow-hidden'>
      <InView onChange={(inView, entry)=> inView && setSectionInView(true)} className='mb-24'>
        <motion.div
          initial={{opacity: 0}}
          animate={ sectionInView ? {opacity: 1} : {}}
          transition={{ duration: 0.75, delay: 1 }}
        >
          <Image className='mx-auto' src="/images/logoLotus.svg" alt='lotus' width={100} height={100}/>
        </motion.div>
        <motion.article 
          className="mt-12 mb-8 overflow-hidden w-full"
          initial={{opacity: 0}}
          animate={ sectionInView ? {opacity: 1} : {}}
          transition={{ duration: 0.75, delay: 1 }}
        >
          <div className='relative h-16 pt-1'>
            <div className='rounded-md top-[20%] md:top-1/4 absolute w-full h-1 md:h-2 bg-white' />
            <div className={`${parisienne.className} bg-main-theme px-2 lg:px-10 z-30 left-1/2 -translate-x-1/2 absolute text-white text-3xl md:text-4xl lg:text-6xl italic text-center tracking-normal md:tracking-wider`}>
              Nouveautés !
            </div>
          </div>
          <ul>
            <li className={`${varela.className} tracking-wide text-lg lg:text-2xl text-left leading-10 my-8 text-white px-5 border-bottom-8 border-white flex`}>
              <FaLongArrowAltRight className='mr-2' size={40} />
              <p>Retrouvez-moi maintenant au cabinet d&apos;ostéopathie de Fontvieille, <Link className='underline italic underline-offset-4' href={"https://www.google.com/maps/place/59+Cr+Hyacinthe+Bellon,+13990+Fontvieille/@43.7268207,4.7081839,17z/data=!3m1!4b1!4m6!3m5!1s0x12b5dfc9689419b3:0x54050721b5ee9a6f!8m2!3d43.7268169!4d4.7107588!16s%2Fg%2F11b8v7tzj1?hl=fr&entry=ttu&g_ep=EgoyMDI0MDkwOC4wIKXMDSoASAFQAw%3D%3D"}>59 Cours Hyacinthe Bellon, Fontvieille (13990)</Link>.</p>
            </li>
            <li className={`${varela.className} tracking-wide text-lg lg:text-2xl text-left leading-10 my-8 text-white px-5 border-bottom-8 border-white flex`}>
              <FaLongArrowAltRight className='mr-2' size={40} />
              <p>
                Vous pouvez désormais prendre un RDV en ligne en vous rendant sur la plateforme , <Link className='underline italic underline-offset-4' href={"https://www.crenolibre.fr/prendre-rdv/101451_bauxt-des-sens"}>www.crenolibre.com</Link>.
              </p>
            </li>
          </ul>
          
        </motion.article>
        <motion.div 
          initial={{opacity: 0}}
          animate={ sectionInView ? {opacity: 1} : {}}
          transition={{ duration: 0.75, delay: 1 }}
          className='h-1 w-full bg-white rounded-sm mb-24'
        />
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
              src="/images/portrait.jpeg" 
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
                transition={{opacity : {delay : 1.25, duration: 0.8}, y:{delay:1.25, duration: 0.6, ease:"easeOut"}}}
              >
                Bienvenue, je m&apos;ap&shy;pel&shy;le Julie ! Je suis pas&shy;sionnée par le monde du bien-être depuis plu&shy;sieurs an&shy;nées et suis titu&shy;laire d&apos;un diplô&shy;me d&apos;es&shy;thé&shy;ti&shy;que en plus d&apos;une forma&shy;tion en soins du corps, for&shy;ma&shy;tion sui&shy;vie sur Avi&shy;gnon pen&shy;dant plu&shy;sieurs mois. 
              </motion.p>
              <motion.p
                className='my-2.5 flex gap-2.5 text-justify indent-5 tracking-wide leading-10'
                initial={{opacity:0, y :"100%"}} 
                animate={sectionInView ? {opacity : 1, y:0} : ""} 
                transition={{opacity : {delay :2, duration: 0.8}, y:{delay:2, duration: 1, ease:"easeOut"}}}
              >
                Durant mes prestations, je n&apos;ap&shy;porte pas seule&shy;ment un soin a&shy;vec des manœu&shy;vres, des tech&shy;ni&shy;ques, du mo&shy;de&shy;lage et un mo&shy;ment de dé&shy;ten&shy;te, non : j&apos;as&shy;pire à beau&shy;coup mi&shy;eux que ce&shy;la. En ef&shy;fet, pour moi le bien-être se pré&shy;pare et s&apos;in&shy;vi&shy;te. Tout est mis en œuvre, et tout est pro&shy;pi&shy;ce à ce que vous puis&shy;siez le re&shy;ce&shy;voir dans les meil&shy;leu&shy;res con&shy;di&shy;tions.
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
          texte="Prendre rdv en ligne" 
          lien="https://www.crenolibre.fr/prendre-rdv/101451_bauxt-des-sens" 
          margin="0" 
          target={true}
          inView={curveInView}
        />
      </InView>
    </section>
  )
}

export default Presentation