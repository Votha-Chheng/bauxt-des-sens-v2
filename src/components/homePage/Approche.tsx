'use client'

import { imgAppear, pageAppear, textAppear } from '@/@animations/approcheAnimations'
import { titleAnimation } from '@/@animations/titleAnimation'
import { karla } from '@/fonts/karla'
import { useWindowSize } from '@uidotdev/usehooks'
import { motion } from 'framer-motion'
import Image from 'next/image'
import React, { FC, useEffect, useRef, useState } from 'react'
import { FaQuoteLeft, FaQuoteRight } from 'react-icons/fa6'
import { InView } from 'react-intersection-observer'

const Approche: FC = () => {
  const [sectionInView, setSectionInView] = useState<boolean>(false)
  const [textHeight, setTextHeight] = useState<number>(0)
  const [sectionHeight, setSectionHeight] = useState<number>(0)

  const textRef = useRef<HTMLDivElement>(null)
  const sectionRef = useRef<HTMLDivElement>(null)

  const size = useWindowSize()
  const { width } = size

  useEffect(()=> {
    if(textRef.current){
      setTextHeight(textRef.current.clientHeight)
    }
    if(sectionRef.current){
      setSectionHeight(sectionRef.current.clientHeight)
    }
  }, [size])

  return (
    <section style={width && width>768 ? {height: `${ (textHeight + sectionHeight)*1.2}px`} : { height: 'auto'} } className='bg-main-theme py-14 px-5 lg:px-20'>
      <InView className='container-page' onChange={(inView, entry)=> inView && setSectionInView(true)}>
        <motion.h2 variants={titleAnimation} initial="initial" animate={`${sectionInView ? "appear":""}`} className='home-titles'>Mon approche du bien-être</motion.h2>
              
        <motion.div ref={sectionRef} className="flex flex-col gap-y-5 items-center md:gap-0 md:flex-row justify-between relative" variants={pageAppear} initial="initial" animate={`${sectionInView ? "animate":""}`}>
          <motion.div className='relative border-2 border-white min-w-[350px] rounded-md max-w-[350px] overflow-hidden h-[200px]' variants={imgAppear} >
            <Image src='/images/close-up-relaxed-girl-getting-massage.jpg' alt="femme à l'aise" width={700} height={700} style={{objectFit:'cover'}}/>
            <small className='absolute bottom-1 left-2'>Crédit photo : &copy;freepik</small>
          </motion.div>

          <motion.div variants={imgAppear} className="relative min-w-[20%] hidden lg:block  justify-between self-center">
            <Image src="/images/logoLotus.svg" alt='logo en forme de lotus' className='mx-auto' width={100} height={100}/>
            <div className="w-24 h-1 mt-1 bg-white rounded-md mx-auto"/>
          </motion.div>
          <motion.div variants={imgAppear} className='relative min-w-[350px] rounded-md max-w-[350px] border-2 border-white overflow-hidden h-[200px]'>
            <Image src='/images/bougie-serviette.jpg' alt="bougie et serviette" width={900} height={900} style={{objectFit:'cover'}}/>
            <small className='absolute bottom-1 right-2'>Crédit photo : &copy;freepik</small>
          </motion.div>
          <motion.div 
            ref={textRef} 
            className='static md:absolute flex flex-col w-[90vw] md:w-[50%] md:pt-7 py-7 px-5 md:top-[90%] md:left-1/2 md:-translate-x-1/2 bg-white border-4 border-double border-main-theme' 
            variants={textAppear}  
          >
            <FaQuoteLeft className='text-main-theme'/>
            <div style={{lineHeight:'2.5rem'}} className={`${karla.className} text-main-theme font-bold lg:font-normal text-xl lg:text-2xl tracking-wide italic text-justify`}>
              <p className='indent-5 mb-2.5'>
                Ma priorité est de vous met&shy;tre à l&apos;ai&shy;se dès le pre&shy;mier échan&shy;ge et de res&shy;pecter vo&shy;tre in&shy;ti&shy;mi&shy;té a&shy;fin que vous puis&shy;siez vous dé&shy;ten&shy;dre, res&shy;sen&shy;tir le lâ&shy;cher pri&shy;se pour ain&shy;si pro&shy;fi&shy;ter du mo&shy;ment dans son in&shy;té&shy;gra&shy;li&shy;té. 
              </p>
              <p className="indent-5 mb-2.5">
                Il est parfois dif&shy;fi&shy;ci&shy;le de se lais&shy;ser al&shy;ler au&shy;près d&apos;une nou&shy;vel&shy;le pra&shy;ti&shy;cien&shy;ne, ce&shy;la peut pren&shy;dre du temps et se fai&shy;re sur plu&shy;sieurs ren&shy;dez-vous. Je prends le temps né&shy;ces&shy;sai&shy;re à cha&shy;cun car nous pas&shy;sons par la con&shy;fiance, le con&shy;fort et la sécu&shy;rité, sen&shy;ti&shy;ments in&shy;dis&shy;pen&shy;sa&shy;bles qui vous per&shy;met&shy;tront de savou&shy;rer les bien&shy;faits des soins que je vous ap&shy;por&shy;te.
              </p>
              <p className="indent-5 mb-2.5">
                Une musique vous inci&shy;tera à la re&shy;laxa&shy;tion ain&shy;si qu&apos;une hui&shy;le aux o&shy;deurs exo&shy;ti&shy;ques et pa&shy;ra&shy;di&shy;sia&shy;ques com&shy;me le monoi, la coco, le jas&shy;min, ou en&shy;co&shy;re la fleur d&apos;oran&shy;ger. Vous l&apos;au&shy;rez com&shy;pris, il y en aura pour tous les sens...
              </p>
            </div>
            <FaQuoteRight className='text-main-theme self-end -translate-y-2.5'/>
          </motion.div>         
        </motion.div> 
      </InView>
    </section>
  )
}

export default Approche