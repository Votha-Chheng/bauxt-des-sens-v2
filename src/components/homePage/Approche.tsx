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
                Ma priorité est de vous mettre à l'aise dès le premier échange et de res&shy;pecter votre intimité afin que vous puissiez vous détendre, res&shy;sentir le lâcher prise pour ainsi profiter du mo&shy;ment dans son intégra&shy;lité. 
              </p>
              <p className="indent-5 mb-2.5">
                Il est parfois difficile de se laisser aller auprès d'une nouvel&shy;le pra&shy;ticien&shy;ne, cela peut pren&shy;dre du temps et se faire sur plusieurs rendez-vous. Je prends le temps né&shy;ces&shy;saire à chacun car nous pas&shy;sons par la con&shy;fiance, le confort et la sécu&shy;rité, senti&shy;ments in&shy;dis&shy;pen&shy;sa&shy;bles qui vous permet&shy;tront de savou&shy;rer les bien&shy;faits des soins que je vous apporte.
              </p>
              <p className="indent-5 mb-2.5">
                Une musique vous inci&shy;tera à la relaxation ainsi qu'une huile aux odeurs exotique et paradisiaque com&shy;me le monoi, la coco, le jasmin, ou encore la fleur d'oranger. Vous l'aurez com&shy;pris, il y en aura pour tous les sens...
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