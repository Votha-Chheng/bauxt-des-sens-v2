'use client'

import { motion } from "framer-motion";
import Head from "next/head";
import { FC } from "react";
import Diplomes from "./Diplomes";
import { opacityBandeau } from "@/@animations/opacityBandeau";
import { mrsDelafield } from "@/fonts/mrsDelafield";
import { karla } from "@/fonts/karla";
import { playfair } from "@/fonts/playfair";
import { italianno } from "@/fonts/italianno";
import { parisienne } from "@/fonts/parisienne";
import Image from "next/image";
import { useWindowSize } from "@uidotdev/usehooks";
import InfosScreenMini from "./InfosScreenMini";

const InfosScreen: FC = () => {  
  const { width } = useWindowSize()

  return (  
    <>
      <Head>
        <title>Baux't des sens | Horaires - Contact - Rendez-vous - Arles Alpilles</title>
      </Head>
      <main className={`bg-main-theme py-14 `}>
        <Diplomes/>
        {
          width && width<1068
          ?
          <InfosScreenMini/>
          :
          <div className="py-12 px-6">
            <motion.div 
              className="w-[1000px] h-[1250px] pt-9 px-0 pb-24 my-12 mx-auto border-2 border-double border-silver" 
              style={{backgroundSize: 'cover', backgroundImage:'url("/images/bg-flowers.jpg")'}} 
              variants={opacityBandeau} 
              initial="initial" 
              animate="animate" 
            >
              <div style={{backgroundSize: 'cover', clipPath:"polygon(50% 0, 100% 10%, 100% 90%, 50% 100%, 0 89%, 0 10%)"}} className="bg-black w-[900px] h-[1150px] relative my-0 mx-auto">
                <div style={{clipPath:' polygon(50% 0, 100% 10%, 100% 90%, 50% 100%, 0 89%, 0 10%)'}} className="w-[885px] h-[1142px] bg-white absolute top-1 left-2">
                  <h3 className={`text-center text-pink text-6xl leading-10 border-b border-pink w-[520px] -pb-[200px] mt-20 mx-auto mb-0 ${mrsDelafield.className}`}>
                    Baux't des sens
                  </h3>
                  <div className="flex items-center w-[850px] min-h-[250px] mx-auto pt-16 px-12 pb-0 gap-5">
                    <div className="min-w-[200px] relative h-56 overflow-hidden border border-black flex-nowrap rounded-xl">
                      <Image src="/images/portrait-2.jpg" fill alt="portrait" className="transition-all duration-200 ease-out hover:scale-110" />
                    </div>
                    <div className={`text-black shadow-md shadow-white ${karla.className} border-l-8 border-pink pl-2.5 text-justify text-lg w-full relative my-0 mx-2.5 italic`}>
                      Les soins que j'apporte sont issus d'une formation où j'ai appris de multiples techniques profes&shy;sion&shy;nelles. La qualité de mes massages se démar&shy;que par l'in&shy;tention particulière, la bi&shy;en&shy;veillance et l'é&shy;nergie que j'y mets. Mon but étant de vous ap&shy;porter un moment unique et sur-mesure grâce à mon attention, ma disponibilité et mon écoute.
                    </div>
                  </div>
                  <div className={`${playfair.className} text-center font-bold text-3xl w-1/2 my-12 mx-auto text-pink`}>
                    Massages intuitifs & coaching de Hata yoga à domicile.
                  </div>
                      <div className={`${italianno.className} text-center text-5xl font-bold`}>
                        Arles, les Alpilles et alentours
                      </div>
                      <div className={`${playfair.className} w-10/12 my-8 mx-auto text-center text-lg`}>
                        Vous pouvez me joindre tous les jours de la semaine <b><em>de 9h à 19h</em></b>
                        <div className={`${karla.className} my-6 mx-auto text-2xl transition-all duration-300 ease-out hover:scale-110`}>
                          <a href="tel:0616838962">06.16.83.89.62</a>
                        </div>
                        que ce soit pour un simple renseignement, une demande particulière ou un rendez-vous.
                      </div>
                      <div className={`${parisienne.className} text-center text-5xl font-bold mb-7 text-pink`} >
                        Prenez soin de vous !
                      </div>
                      <div className="flex justify-center">
                        <a href="https://www.facebook.com/bauxt.dessens.73">
                          <Image src="/images/fblogo.svg" alt='logo facebook' width={50} height={50} className="m-2.5 transition-all duration-200 ease-out hover:scale-110"/>
                        </a>
                        <a href="https://www.instagram.com/bauxtdessens/">
                          <Image src="/images/logo-instagram.svg" alt='logo instagram' width={57} height={57} className="m-2.5 transition-all duration-200 ease-out hover:scale-110"/>
                        </a>
                      </div>
                    </div>
                    
                  </div>
                </motion.div>  
              </div>           
          }
      </main>
    </> 
      
  );
}


export default InfosScreen;