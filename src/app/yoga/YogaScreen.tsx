'use client'

import HomeCurveSeparation from "@/components/sharedUI/HomeCurveSeparation";
import { playfair } from "@/fonts/playfair";
import { opacityBandeau } from "@/@animations/opacityBandeau";
import { titleAnimation } from "@/@animations/titleAnimation";
import { motion, useAnimation } from "framer-motion";
import Image from "next/image";
import { FC, useEffect, useState } from "react";
import { InView } from "react-intersection-observer";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
import { karla } from "@/fonts/karla";
import { FaFan } from "react-icons/fa";
import { useWindowSize } from "@uidotdev/usehooks";
import { childList, lastSentence, parentList } from "@/@animations/yogaAnimations";

const YogaScreen: FC = () => {
  const [curveInview, setCurveInview] = useState(false)
  const [partOneInView, setPartOneInView] = useState(false)
  const [partTwoInView, setPartTwoInView] = useState(false)
  
  const controls = useAnimation()

  const { width } = useWindowSize()

  useEffect(() => {
    if(curveInview){
      controls.start("appear")
      controls.start("animate")
    }
  }, [controls, curveInview])

  useEffect(() => {
    if(partOneInView){
      controls.start("animate")
      controls.start("ulAppear")
    }
  }, [controls, partOneInView])

  useEffect(() => {
    if(partTwoInView){
      controls.start("animate")
      controls.start("ulAppear")
      controls.start("lastSentence")
    }
  }, [controls, partTwoInView])

  return (   
    <main className="py-14 lg:px-20 px-5 bg-main-theme w-full overflow-hidden">
      <InView onChange={(inView, entry)=>setPartOneInView(inView)} className="mb-20" /> 
      <motion.h2 className="home-titles" variants={titleAnimation} initial="initial" animate="appear">Baux&apos;t des sens, c&apos;est aussi de l&apos;initiation au yoga...</motion.h2>
      <motion.section className='my-24 w-11/12 mx-auto' variants={opacityBandeau} initial="initial" animate={controls} >
        <div className={`flex ${width && width<1068 ? "flex-col-reverse gap-y-10": ''} gap-5 items-center`}>
          <p className={`${karla.className} text-white text-justify lg:pl-5 pl-3 pr-0 text-xl relative italic indent-7 leading-10 lg:pr-5 border-l-8 border-pink`}>
            Ma passion pour les pra&shy;tiques con&shy;dui&shy;sant à la rela&shy;xation ne se limite pas aux massages. Pour al&shy;ler plus loin dans cette optique, je pro&shy;pose des cours d&apos;ini&shy;tiation au Hatha yoga basés sur la res&shy;piration, la méditation et les éti&shy;rements.
            Ce type de yoga, le plus pra&shy;tiqué en Oc&shy;cident, permet au pra&shy;tiquant une maî&shy;trise du corps et des sens à tra&shy;vers la pra&shy;tique précise et rythmée de pos&shy;tures.
            Contraire&shy;ment à un enchaînement de gym&shy;nastique, les postures doivent être maintenues suffisamment long&shy;temps (environ 3 minutes).                 
          </p>
          <Image src="/images/yoga-3.jpg" alt='illustration yoga' width={450} height={250} className="mx-auto border-2 border-white" />
        </div>

        <div className={`${playfair.className} my-24 lg:w-96 flex p-2 lg:p-6 text-white relative italic mb-7 mx-auto`}>
          <div className="lg:mr-8 mr-2.5 lg:-translate-y-2.5 -translate-y-5">
            <FaQuoteLeft size={15}/>
          </div>
          <span className="drop-shadow-xl lg:text-3xl text-2xl shadow-gray-300">
            Laissez votre respiration délier les noeuds dans votre corps et votre esprit.
          </span> 
          <div className="self-end lg:translate-y-5 translate-y-1.5">
            <FaQuoteRight size={15}/>  
          </div>
        </div>
        
      </motion.section>

      <InView onChange={(inView, entry)=> inView && setCurveInview(true)} className="mt-10"/>

      <HomeCurveSeparation inView={curveInview} texte="mes services pour le Hata yoga" margin="50px 0px" lien="/prestations/#yoga"/>


      <InView onChange={(inView, entry)=> inView && setPartTwoInView(true)} className="mt-10">
        <section className="my-20 flex lg:flex-row flex-col items-center gap-3">
          <motion.div 
            className="min-w-[340px] min-h-[480px] relative border-2 border-white"
            initial={{opacity:0, x:"-50%"}} 
            animate={partTwoInView? {opacity:1, x:0} : ""} 
            transition={{opacity:{delay:0.1, duration:1.5}, x:{delay:0.2, duration:1.5, ease:"easeOut"} }} 
          >
            <Image src="/images/yoga-2.jpeg" alt="illustration d'une séance de yoga" fill/>
          </motion.div>
          <motion.div
            className="text-white p-5 relative italic"
            initial={{opacity:0, x:"25%"}} 
            animate={partTwoInView? {opacity:1, x:0} : ""} 
            transition={{opacity:{delay:0.2, duration:0.8}, x:{delay:0.2, duration:1, ease:"easeOut"} }} 
          >
            <p className={`${karla.className} border-l-8 border-pink pl-3 lg:pl-8 indent-5 leading-10 text-xl`}>
              Ces cours s&apos;adres&shy;sent à tous les débu&shy;tants ou curieux qui sou&shy;haitent dé&shy;couvrir un nou&shy;veau moyen de bien-être et de rela&shy;xation. Il se pra&shy;tique en groupe ou in&shy;divi&shy;duel&shy;lement. Il est pos&shy;sible de com&shy;biner un cours de yoga et un mas&shy;sage de votre choix (tarifs sur de&shy;mande).
            </p>
            <motion.h3 className={`${karla.className} mt-10 text-justify p-5 text-xl relative italic`}
              initial={{opacity:0}} 
              animate={partTwoInView? {opacity:1} : ""} 
              transition={{opacity:{delay:1.5, duration:0.8}}}
            >
              Grâce au Hatha yoga :
            </motion.h3>
            <motion.ul className={`border-l-8 border-pink lg:pl-8 pl-2.5`} variants={parentList} initial="initial" animate={controls} >
              <motion.li className={`flex flex-row items-start lg:items-center gap-2 mb-2.5`} variants={childList}>
                <div className="w-5 h-5 lg:translate-y-0 translate-y-2">
                  <FaFan size={15} color='pink' className="fan"/>
                </div>
                <span className={`${karla.className} ml-0 text-xl text-justify`}>On travaille l&apos;équilibre phy&shy;sique tout en disci&shy;pli&shy;nant son esprit.</span>
              </motion.li>
              <motion.li className='flex items-center lg:gap-0 gap-2 mb-2.5' variants={childList}>
                <div className="w-5 h-5 lg:translate-y-0 translate-y-0.5">
                  <FaFan size={15} color='pink' className="fan"/>
                </div>
                <span className={`${karla.className} ml-0 text-xl text-justify`}>On réduit son stress.</span>
              </motion.li>
              <motion.li className='flex flex-row items-start lg:items-center gap-2 mb-2.5' variants={childList}>
                <div className="w-5 h-5 lg:translate-y-0 translate-y-2">
                  <FaFan size={15} color='pink' className="fan"/>
                </div>
                <span className={`${karla.className} ml-0 text-xl text-justify`}>On améliore sa respi&shy;ration et son souffle.</span>
              </motion.li>
              <motion.li className='flex flex-row items-start lg:items-center gap-2 mb-2.5' variants={childList}>
                <div className="w-5 h-5 lg:translate-y-0 translate-y-2">
                  <FaFan size={15} color='pink' className="fan"/>
                </div>
                <span className={`${karla.className} ml-0 text-xl text-justify`}>On renforce son corps et on amé&shy;liore sa sou&shy;ples&shy;se.</span>
              </motion.li>
            </motion.ul>
          
          </motion.div> 
        </section>  
      </InView>

      <motion.h4
        className={`gap-5 flex justify-center my-20 text-center italic`}
        variants={lastSentence}
        initial='initial'
        animate={controls}
      >
        <FaQuoteLeft color='white' size={15}/> 
        <span className={`${playfair.className} text-white text-3xl lg:text-4xl`}>A vos tapis !</span>
        <FaQuoteRight color='white' size={15} className='self-end translate-y-2' />
      </motion.h4>  
    </main>    
  );
}
  

export default YogaScreen;