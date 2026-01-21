"use client"

import { opacityBandeau } from '@/@animations/opacityBandeau'
import { titleAnimation } from '@/@animations/titleAnimation'
import { variantsAppear, variantsChildren } from '@/@animations/variantsAppear'
import ReusableForm from '@/components/contact/ReusableForm'
import { Button } from '@/components/ui/button'
import { karla } from '@/fonts/karla'
import { parisienne } from '@/fonts/parisienne'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const CarteCadeauPage = () => {
  return (
    <main className="py-14 px-7 lg:px-20 bg-main-theme min-h-screen">
      <motion.h2 className="home-titles" variants={titleAnimation} initial="initial" animate="appear" >
        Carte-cadeau
      </motion.h2>
      <motion.section className='lg:my-24 md:w-11/12 mx-auto' variants={opacityBandeau} initial="initial" animate="animate" >
        <p className={`${karla.className} text-white text-justify lg:px-5 px-1.5 text-base lg:text-2xl relative italic indent-7 leading-7 lg:leading-10 mb-10 tracking-wider`}>
          Pour la St-Valentin, pour un an&shy;ni&shy;ver&shy;sai&shy;re, pour une au&shy;tre gran&shy;de oc&shy;casion, ou tout simple&shy;ment pour fai&shy;re plai&shy;sir, Baux&apos;T des sens vous pro&shy;po&shy;se de com&shy;man&shy;der et d&apos;im&shy;pri&shy;mer une car&shy;te-ca&shy;deau avec la presta&shy;tion de vo&shy;tre choix. <b>Pour cela, la pro&shy;cé&shy;du&shy;re à sui&shy;vre et très simple :</b>
        </p>
        <motion.ul variants={variantsAppear} initial="start" animate="fadeIn" className={`${karla.className} pl-0 lg:pl-20 list-none text-white tracking-wider lg:text-2xl`}  >
          <motion.li 
            className={`${karla.className} flex items-start lg:items-center gap-x-2 mb-3.5`}
            variants={variantsChildren}
          >
            <span className={`${karla.className} pt-0.5 border-4 border-white rounded-full min-w-7 min-h-7 md:text-xl text-xs md:min-w-10 md:min-h-10 text-center font-bold`}>1</span>
            Commandez votre prestation en me contactant soit :<br/>
            
          </motion.li>
            <li className='ml-16 lg:ml-20 list-disc mb-3'>Directement par téléphone au <Link href="tel:0616838962">06.16.83.89.62</Link></li>
            <li className='ml-16 lg:ml-20 list-disc mb-10'>Ou en remplissant le formulaire de contat ci-dessous en me précisant la prestation désirée.<b><i> Je vous répondrai dans les 24h pour confirmer votre commande et effectuer le règlement.</i></b></li>
            <ReusableForm textAreaLabel='Prestation demandée' placeholder="Décrivez la prestation demandée (nom, prix...)."/>
          <motion.li 
            className={`${karla.className} mt-14 lg:mt-20 flex items-start lg:items-center gap-x-2`}
            variants={variantsChildren}
          >
            <span className={`${karla.className} border-4 border-white rounded-full pt-0.5 min-w-7 min-h-7 md:text-xl text-xs md:w-10 md:h-10 text-center font-bold`}>2</span>
            Une fois la commande confirmée, téléchargez le bon cadeau en cliquant sur ce bouton : 
          </motion.li>
          <motion.li 
            className={`flex justify-center mt-5 items-center gap-x-2`}
            variants={variantsChildren}
          >
            <Button className={`bg-blue-500`}><a href='/carte_cadeau_bauxt_des_sens.pdf' download={`Carte cadeau Baux'T des sens`}>Télécharger le bon-cadeau</a></Button>
          </motion.li>
        </motion.ul>
      </motion.section>
      <Image src="/images/logoLotus.svg" alt='lotus logo' className='mt-24 md:mt-44 mx-auto' width={75} height={75} />
      <h3 className={`${parisienne.className} my-20 text-white text-center text-3xl lg:text-7xl`}>Prenez soin de vous <br/>(et des autres) !</h3>
    </main>
  )
}

export default CarteCadeauPage