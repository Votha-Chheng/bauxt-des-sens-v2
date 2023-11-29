import { titleAnimation } from '@/@animations/titleAnimation'
import { motion } from 'framer-motion'
import React, { FC, useState } from 'react'
import { InView } from 'react-intersection-observer'
import HomeCurveSeparation from '../sharedUI/HomeCurveSeparation'
import Image from 'next/image'
import { karla } from '@/fonts/karla'
import { parisienne } from '@/fonts/parisienne'
import { varela } from '@/fonts/varela'
import ModalImage from '../sharedUI/ModalImage'
import { useWindowSize } from '@uidotdev/usehooks'

const ServiceDomicile: FC = () => {
  const [sectionInView, setSectionInView] = useState<boolean>(false)
  const [curveInView, setCurveInView] = useState<boolean>(false)
  const [modalIsOpen, setModalIsOpen] = useState<boolean>(false)

  const parent = {
    initial:{

    },
    animate:{
      transition: {
        delayChildren : 0.5,
        staggerChildren : 0.25
      }
    }
  }

  const childAppear = {
    initial: {
      opacity: 0,
      y : 100
    },
    animate:{
      opacity: 1,
      y:0,
      transition: {
        duration: 0.75,
        ease: 'easeOut'
      }
    }   
  }

  return (
    <>
      <ModalImage imageUrl='zonedeplacement.jpg' setModalIsOpen={setModalIsOpen} modalIsOpen={modalIsOpen} />
      <section className='py-14 px-5 lg:px-20 bg-main-theme'>
        <InView className="py-5" onChange={(inView, entry)=> inView && setSectionInView(true)} >
          <motion.h2 className="home-titles" variants={titleAnimation} initial="initial" animate={`${sectionInView ? 'appear' : ''}`} >Un service uniquement à domicile</motion.h2>
          <motion.div className="my-20" variants={parent} initial="initial" animate={`${sectionInView ? 'animate' : ''}`} >
            <div className="flex items-center gap-5 w-full mb-24">
              <div>
                <motion.div className='relative w-24 h-24 md:w-32 md:h-32 float-left mr-10' variants={childAppear}>
                  <Image alt="img-car" src="/images/deplacement.svg" fill/>
                </motion.div>
                <motion.div className={`${karla.className} indent-5 text-white text-xl lg:text-2xl tracking-wide px-5 italic text-justify`} variants={childAppear} >
                  <p className='my-5 leading-10'>
                    Quoi de mieux que de se faire masser sans avoir à se déplacer ? Avec <span className="marque">Baux`&apos;t des sens</span>, c`&apos;est le bien-être et la détente qui viennent chez vous ! C`&apos;est pour&shy;quoi je me déplace <u>uniquement</u> à domicile, dans les gîtes ou les hôtels sur Arles, dans les Alpilles et aux alentours. Et ce, avec tout le matériel nécessaire (ta&shy;ble de massage, linge, etc...). Tout ce qui vous reste donc à faire, c`&apos;est vous allonger et vous laisser aller...
                  </p>
                  <p className='my-5 leading-10 '>
                    Baux`&apos;T des Sens intervient aussi pour vos évènements  tels que les anni&shy;ver&shy;saires, les enter&shy;rements de vie de jeune fille/garçon ou les re&shy;trai&shy;tes yoga... N&apos;hési&shy;tez pas à me contacter di&shy;recte&shy;ment pour un ser&shy;vice sur-mesure et adapté.
                  </p>
                </motion.div>
              </div>
              <motion.div className='relative min-w-[200px] min-h-[250px] border-2 grayscale-[25%] border-white rounded-md overflow-hidden xl:block hidden' variants={childAppear} >
                <Image 
                  src="/images/car-bauxt-des-sens.jpg" 
                  alt="zones où se déplace baux't des sens"  
                  fill
                />
              </motion.div>
            </div>
            <motion.div
              initial={{opacity: 0}}
              animate={ sectionInView ? {opacity: 1} : {}}
              transition={{ duration: 0.75, delay: 1 }}
            >
              <Image className='mx-auto' src="/images/logoLotus.svg" alt='lotus' width={100} height={100}/>
            </motion.div>
            <motion.article 
              className="my-12 overflow-hidden w-full"
              initial={{opacity: 0}}
              animate={ sectionInView ? {opacity: 1} : {}}
              transition={{ duration: 0.75, delay: 1 }}
            >
              <div className='relative h-24 pt-1'>
                <div className='rounded-md top-[20%] md:top-1/4 absolute w-full h-1 md:h-2 bg-white' />
                <div className={`${parisienne.className} bg-main-theme px-2 lg:px-10 z-30 left-1/2 -translate-x-1/2 absolute text-white text-3xl md:text-4xl lg:text-6xl italic text-center tracking-normal md:tracking-wider`}>
                  Nouveauté !
                </div>
              </div>
              <p className={`${varela.className} tracking-wide text-lg lg:text-2xl text-center leading-10 mb-5 text-white px-5`}>
                Baux`&apos;t des Sens intervient aussi <u><em><b>en entreprise sur vos lieux de travail</b></em></u> pour prendre soin de vos salariés. Mais aussi dans les <u><em><b>résidences seniors</b></em></u> pour prendre soin de vos pensionnaires et leur rendre la vie plus agréable.
              </p>
              <p className={`${varela.className}  text-lg tracking-wide lg:text-2xl text-center leading-10 mb-5 text-white px-5`}>
                N`&apos;hésitez pas à prendre contact, toutes les demandes sont possibles, dans la limite imposée par mon emploi du temps évidemment.
              </p>
            </motion.article>
            <motion.div className='flex flex-col items-center' variants={childAppear} >
              <div className='relative w-80 h-72 sm:w-96 sm:h-80 cursor-pointer' onClick={()=> setModalIsOpen(true)}>
                <Image 
                  className="zoom-map" 
                  src="/images/zonedeplacement.jpg" 
                  alt="zones où se déplace baux't des sens"  
                  fill
                />
              </div>
              <small className='text-center mx-auto text-white'>Ma zone de déplacement</small>
            </motion.div> 
          </motion.div>
        </InView>
        <InView onChange={(inView, entry)=> inView && setCurveInView(true)}>
          <HomeCurveSeparation texte="prendre un rendez-vous" inView={curveInView} margin="0px 0px 75px"/>
        </InView>
      </section>
    </>
  )
}

export default ServiceDomicile