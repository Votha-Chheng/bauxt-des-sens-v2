'use client'

import { motion } from "framer-motion";
import Head from "next/head";
import { FC, useEffect, useRef, useState } from "react";
import {InView} from "react-intersection-observer";
import Image from "next/image";
import { useRouter } from "next/router";
import { titleAnimation } from "@/@animations/titleAnimation";
import PrestationLayout from "./PrestationLayout";
import HomeCurveSeparation from "@/components/sharedUI/HomeCurveSeparation";
import { massageListe } from "@/datas/massageListe";
import { DescriptionMassage } from "@/@types/descriptionMassage";
import { Prestation } from "@/@types/prestation";

const TarifsScreen: FC = () => {

  const [scrollToPosition, setScrollToPosition] = useState(0)

  useEffect(()=>{
    window.scrollTo(0, scrollToPosition)
  },[scrollToPosition])

  //Animations
  const slideFromRight = {
    initial :{
      opacity : 0,
      x:"-10%"
    },
    animate : {
      opacity : 1,
      x:0,
      transition: {
        duration:0.5,
        ease: "easeOut"
      }
    }
  }

  const images = [
    "/images/massage-illustration.jpg",
    "/images/176187352_2922669511298633_3323829876291585340_n.jpg", 
    '/images/massage-baby.jpg', 
    '/images/face-massage.jpg', 
    '/images/175659034_364152124945419_4032164191564889065_n.jpg', 
    '/images/massage-bambous.jpg',
    '/images/woman-getting-foot-massage.jpg',
    "/images/yoga.jpg",
    "/images/party.jpg"
  ]

  const tableauMassage = massageListe

  return (   
    <>
      <Head>
        <title>Baux&apos;t des sens | Prestations massages et yoga Arles et Alpilles</title>
      </Head>

      <main className="py-14 px-10 lg:px-20 bg-main-theme">
        <motion.h2 className="home-titles" variants={titleAnimation} initial="initial" animate="appear" >Tarifs</motion.h2>
        {
          tableauMassage.map((prestation: Prestation, index: number)=> (
            <div key={index}>
              <Image className="mx-auto mt-20 mb-5 border-2 border-white rounded-md" src={images[index]} alt={images[index]} width={300} height={300} loading='lazy' />
              <PrestationLayout prestation={prestation}/>
            </div>
          ))
        }
        <HomeCurveSeparation 
          texte="Prendre RDV" 
          lien="tel:0616838962" 
          margin="120px 0px 75px" 
          target={false}
        />     
      </main>
    </>  
  );
}


export default TarifsScreen;