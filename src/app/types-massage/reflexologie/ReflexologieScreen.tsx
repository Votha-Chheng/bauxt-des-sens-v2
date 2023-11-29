'use client'

import { opacityBandeau } from '@/@animations/opacityBandeau'
import Hero from '@/components/sharedUI/Hero'
import ModalImage from '@/components/sharedUI/ModalImage'
import { karla } from '@/fonts/karla'
import { playfair } from '@/fonts/playfair'
import { motion } from 'framer-motion'
import Image from 'next/image'
import React, { FC, useState } from 'react'

const ReflexologieScreen: FC = () => {
  const [modalIsOpen, setModalIsOpen] = useState<boolean>(false)

  return (
    <>
      <ModalImage setModalIsOpen={setModalIsOpen} modalIsOpen={modalIsOpen} imageUrl='schema-pied.png' />
      <main className='pt-14 pb-44 bg-main-theme overflow-hidden'>
        <Hero title='Réflexologie' translateUp='-375' image='reflexologie.jpg' heroInView={true} />
        <motion.h4 
          className={`${playfair.className} px-10 lg:px-40 my-16 italic text-2xl md:text-4xl font-bold text-white tracking-wide`}
          initial={{x: '-100px', opacity:0}}
          animate={{x:0, opacity: 1}}
          transition={{duration:1}}
        >
          La réflexologie en quelques mots...
        </motion.h4>
        <section className="flex flex-col xl:flex-row px-5 md:px-20 gap-y-16 items-center xl:items-start">
          <motion.article className="max-w-[400px] xl:min-w-[25%]" initial={{opacity:0, x:"-100%"}} animate={{opacity:1, x:0}} transition={{opacity:{duration : 0.5, delay:0.5}, x:{duration:1, delay:0.2, ease:"easeOut"}}} >
            <div className="relative border-2 border-white rounded-md overflow-hidden">
              <Image src="/images/woman-getting-foot-massage.jpg" alt='massage du pied' width={700} height={700}/>
              <small className='absolute bottom-1 left-2'>Crédit photo : &copy; Chevanon</small>
            </div>
          </motion.article>
          
          <motion.article 
            className="flex mx-2.5 px-2.5"
            initial={{opacity:0, x:"100%"}} 
            animate={{opacity:1, x:0}} 
            transition={{opacity:{duration : 0.2, delay:0.2}, x:{duration:1.2, delay:0.3, ease:"easeOut"}}}
          >
            <div className='min-w-[4px] min-h-full bg-pink rounded-md'/>
            <div className='text-justify indent-5 text-white text-xl lg:text-2xl leading-10 px-5 italic'>
              <p style={{lineHeight:'2.5rem'}} className={`${karla.className} mb-5`}>
                Les pieds sont une partie du corps souvent ou&shy;bliés pour les soins et le bien-être, a&shy;lors qu&apos;ils sont sou&shy;vent très sol&shy;lici&shy;tés tout au long de la jour&shy;née lors&shy;que vous mar&shy;chez ou que vous res&shy;tez en posi&shy;tion de&shy;bout prolongée à cause du port des chaus&shy;sures et du poids qu&apos;ils sup&shy;portent au quo&shy;ti&shy;dien.
              </p>
              <p style={{lineHeight:'2.5rem'}} className={`${karla.className}`}>
                C&apos;est là qu&apos;entre en jeu la ré&shy;flexo&shy;lo&shy;gie et le mas&shy;sa&shy;ge de la vou&shy;te plan&shy;taire dont les bien&shy;faits ne sont plus à dé&shy;mon&shy;trer pour a&shy;pai&shy;ser le stress, sou&shy;la&shy;ger des dou&shy;leurs (du dos, mi&shy;grai&shy;ne, etc...), ou tout sim&shy;ple&shy;ment pas&shy;ser un mo&shy;ment de qua&shy;li&shy;té, a&shy;gréa&shy;ble et en&shy;chan&shy;teur.
              </p>
            </div>
            <div className='min-w-[4px] min-h-full bg-pink rounded-md'/>
          </motion.article>

          <motion.article 
            variants={opacityBandeau}
            animate={"animate"}
            initial="initial" 
            className='min-w-[15%]'
          >
            <Image
              src="/images/schema-pied.png" 
              alt='schema zone du pied réflexologie'
              width={340}
              height={450}
              onClick={()=> setModalIsOpen(true)}
              className='cursor-pointer'
            />
            <motion.small
              variants={opacityBandeau}
              animate={"animate"}
              initial="initial"
              className='text-center text-white mx-auto'
            >
              Schéma des zones du pied correspondant aux organes
            </motion.small>
          </motion.article>
        </section>
      </main>
    </>
  )
}

export default ReflexologieScreen