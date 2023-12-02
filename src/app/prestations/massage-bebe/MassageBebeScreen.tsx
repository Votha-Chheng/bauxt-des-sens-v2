'use client'

import { opacityBandeau } from '@/@animations/opacityBandeau'
import Hero from '@/components/sharedUI/Hero'
import { karla } from '@/fonts/karla'
import { playfair } from '@/fonts/playfair'
import { motion } from 'framer-motion'
import Image from 'next/image'
import React, { FC } from 'react'

const MassageBebeScreen: FC = () => {
  return (
    <main className="py-14 bg-main-theme overflow-hidden"> 
      <Hero title="Massage bébé" image="photo-1537673156864-5d2c72de7824.jpg" translateUp="-450" heroInView={true}/>
      <motion.section className="lg:px-20" variants={opacityBandeau} initial="initial" animate='animate' >
        <div className='p-2.5 md:px-10 xl:px-24'>
          <h4 className={`${playfair.className} italic text-2xl md:text-4xl font-bold text-white tracking-wide my-2.5`}>Le massage pour bébé, un mode de communication à découvrir...</h4>
          <article className='flex flex-col-reverse items-center xl:flex-row gap-7 py-10 mb-10'>
            <div className='flex p-2.5'>
              {/* <div className=' min-w-[6px] bg-pink min-h-full rounded-md' /> */}
              <div className='px-5'>
                <p style={{lineHeight:'2.5rem'}} className={`${karla.className} text-white text-xl lg:text-2xl indent-5 italic mb-5 tracking-wide text-justify`}>
                  L&apos;art du toucher, long&shy;temps tabou dans les pays occi&shy;den&shy;taux, est désor&shy;mais recon&shy;nu. Dès la nais&shy;sance, vous pouvez masser votre tout petit pour le sécuriser, l&apos;apaiser et déve&shy;lop&shy;per ses fa&shy;cultés mo&shy;trices.
                </p>
                <p style={{lineHeight:'2.5rem'}} className={`${karla.className} text-white text-xl lg:text-2xl indent-5 italic my-5 tracking-wide text-justify`}>
                  Le massage peut être consi&shy;déré com&shy;me un véri&shy;table lan&shy;ga&shy;ge cor&shy;porel. Il sécurise l&apos;en&shy;fant, pas&shy;sant de la cha&shy;leur de l&apos;uté&shy;rus ma&shy;ternel au mon&shy;de et récon&shy;for&shy;te les pa&shy;rents sou&shy;vent dé&shy;sempa&shy;rés, im&shy;pres&shy;sion&shy;nés par leur nouveau-né, en leur per&shy;met&shy;tant d&apos;en&shy;trer en contact avec lui. 
                </p>
                <p style={{lineHeight:'2.5rem'}} className={`${karla.className} text-white text-xl lg:text-2xl indent-5 italic mt-5 tracking-wide text-justify`}>
                  Il ne faut pas toujours cher&shy;cher des ré&shy;pon&shy;ses compli&shy;quées, parfois un bébé pleure tout sim&shy;plement parce qu&apos;il a besoin de caresses. Mas&shy;ser son bébé n&apos;est pas dif&shy;ficile et ce moment privi&shy;légié permet&shy;tra d&apos;ins&shy;tau&shy;rer un véri&shy;table échan&shy;ge entre vous et lui. Les béné&shy;fices du massage bébé se mani&shy;festent tant au point de vue phy&shy;sique que psy&shy;cholo&shy;gique.
                </p>
              </div>
            </div>
            <div className='max-w-[400px] xl:min-h-full xl:max-w-[400px] xl:min-w-[400px] py-10'>
              <Image 
                src="/images/175582685_458024105447520_2106840811191704374_n.jpg" 
                alt="massage bébé" 
                width={600} 
                height={600} 
                className='border-2 border-white rounded-md '
              />
            </div>
          </article>
        </div>
      </motion.section> 
    </main>
  )
}

export default MassageBebeScreen