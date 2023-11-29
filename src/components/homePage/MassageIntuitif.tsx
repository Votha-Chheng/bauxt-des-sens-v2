import { opacityBandeau } from '@/@animations/opacityBandeau'
import { titleAnimation } from '@/@animations/titleAnimation'
import { karla } from '@/fonts/karla'
import { useWindowSize } from '@uidotdev/usehooks'
import { motion } from 'framer-motion'
import Image from 'next/image'
import React, { FC, useState } from 'react'
import { FaQuoteLeft, FaQuoteRight } from 'react-icons/fa6'
import { InView } from 'react-intersection-observer'

const MassageIntuitif: FC = () => {
  const [sectionInView, setSectionInView] = useState<boolean>(false)

  const { width } = useWindowSize()

  return (
    <section className='bg-main-theme mt-20 py-32 px-5 lg:px-20'>
      <InView onChange={(inView, entry)=> inView && setSectionInView(true)}>
        <motion.h2 
          className='home-titles'  
          variants={titleAnimation} 
          initial="initial" 
          animate={sectionInView ? 'appear':''}>
          Le massage intuitif
        </motion.h2>

        <motion.div variants={opacityBandeau} initial="initial" animate={sectionInView ? 'animate':''} >
          <div className='w-auto xl:w-[1000px] mx-auto my-16 relative'>
            <Image 
              src="/images/pexels-daria-sannikova-5221036.jpg" 
              alt='massage dos vu du haut' 
              className='absolute z-0 xl:static float-none xl:float-left rounded-md border-2 mr-7 border-white' 
              width={width && width<1068 ? 350 : 450} 
              height={width && width<1068 ? 350 : 450}
            />
            <div className="flex flex-col w-11/12 lg:w-[600px] mx-auto xl:w-auto">
              <article className='flex translate-y-1/4 xl:translate-y-0 flex-col xl:mt-10 bg-white border-4 z-10 text-main-theme border-double border-main-theme p-3 lg:p-7'>
                <FaQuoteLeft className='translate-y-3.5'/>
                <p className={`${karla.className} text-xl lg:text-2xl px-5 text-justify indent-5 italic font-bold leading-10`}>
                  Voir le corps se dé&shy;po&shy;ser, pren&shy;dre con&shy;tact avec lui, l&apos;é&shy;couter, s&apos;ar&shy;rêter, lis&shy;ser, mas&shy;ser, d&apos;un mou&shy;vement tou&shy;jours lent. Il se crispe par&shy;fois et fait prendre con&shy;science, du lien avec l&apos;es&shy;prit, des blo&shy;cages émo&shy;tion&shy;nels et af&shy;fec&shy;tifs. C&apos;est là que le che&shy;min com&shy;men&shy;ce... Par le tou&shy;cher, il cher&shy;che à in&shy;stal&shy;ler le mieux-être, dans la du&shy;rée, en libé&shy;rant les ten&shy;sions inu&shy;tiles. Tel est le massage in&shy;tui&shy;tif.
                </p>
                <FaQuoteRight className='self-end -translate-y-2.5'/> 
              </article>
              <div className='mx-auto my-14 hidden xl:block'>
                <Image src="/images/logoLotus.svg" alt='lotus logo' className='mt-7 mx-auto' width={75} height={75} />
                <div className="w-20 h-1 mt-1 bg-white rounded-md"/>
              </div>
            </div>
          </div>
          <div className='mx-auto mt-72 lg:mt-96 xl:hidden block'>
            <Image src="/images/logoLotus.svg" alt='lotus logo' className='mt-7 mx-auto' width={75} height={75} />
            <div className="w-20 h-1 mx-auto mt-1 bg-white rounded-md"/>
          </div>
          <div className={`${karla.className} text-white mt-10 italic text-justify tracking-wide text-lg lg:text-2xl px-2.5 lg:px-16`}>
            <p className='indent-5 mb-2.5 leading-10'>
              Ainsi, le massage in&shy;tuitif cher&shy;che à in&shy;stal&shy;ler le mieux être pas seul&shy;ement dans l&apos;immé&shy;diat mais aus&shy;si dans la du&shy;rée. C&apos;est un mas&shy;sage que je pra&shy;ti&shy;que grâ&shy;ce et avec mon res&shy;sen&shy;ti, mon in&shy;tuition. Il est per&shy;son&shy;nalisé et adapté à la per&shy;sonne qui le re&shy;çoit à l&apos;instant T. 
            </p>
            <p className='indent-5 mb-2.5 leading-10'>
              Par mon attention, j&apos;ai la facul&shy;té d&apos;entrer en con&shy;nexion avec le rece&shy;veur, l&apos;harmo&shy;nie du massage se crée grâce à la façon que j&apos;ai de m&apos;ajuster à la respi&shy;ration du massé. Je per&shy;çois des in&shy;forma&shy;tions non verbales qui me per&shy;met&shy;tent de compren&shy;dre si je dois pas&shy;ser plus de temps sur tel&shy;les par&shy;ties du corps a&shy;fin de le li&shy;bé&shy;rer de toutes ten&shy;sions ou d&apos;uti&shy;liser tel&shy;les tech&shy;niques pour vous ac&shy;compagner à lâcher pri&shy;se...
            </p>
            <p className='indent-5 mb-2.5 leading-10'>
              Ce massage person&shy;nalisé et com&shy;plet à base d&apos;huiles es&shy;sen&shy;tiel&shy;les bio&shy;lo&shy;gi&shy;ques, prend en compte l&apos;ap&shy;proche glo&shy;bale de l&apos;être humain et le tou&shy;che dans ses dif&shy;féren&shy;tes di&shy;men&shy;sions (phy&shy;sique, men&shy;tale, émo&shy;tion&shy;nelle et éner&shy;gé&shy;tique) afin que cel&shy;les-ci soient ré&shy;har&shy;moni&shy;sées. Tous mes soins sont ani&shy;més par la phi&shy;lo&shy;so&shy;phie du mas&shy;sage in&shy;tui&shy;tif.
            </p>
          </div>
        </motion.div>
      </InView>
    </section>
  )
}

export default MassageIntuitif