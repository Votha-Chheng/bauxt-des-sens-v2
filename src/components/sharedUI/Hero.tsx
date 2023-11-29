import { heroAnimation, heroTitleAnimation } from "@/@animations/heroAnimations";
import { playfair } from "@/fonts/playfair";
import { useWindowSize } from "@uidotdev/usehooks";
import { motion, useAnimation } from "framer-motion";
import Image from "next/image";
import { FC, useEffect } from "react";

type HeroProps = {
  title: string
  image: string 
  translateUp: string
  heroInView: boolean
}

const Hero: FC<HeroProps> = ({ title, image, translateUp, heroInView }) => {
  const { width } = useWindowSize()
  const controls = useAnimation()

  useEffect(() =>{
    if(heroInView){
      controls.start("heroAppear")
    }
  },[controls, heroInView])

  return (
    <section className="relative w-full h-64 mb-36">
      <motion.div className="border-4 border-double border-white top-0 left-0 overflow-hidden w-full h-64" variants={heroAnimation} initial="initial" animate={controls} >
        <Image src={`/images/${image}`} alt={image} width={1920} height={1920} className="grayscale-[75%] blur-sm" style={width && width>1600 ? {transform:`translateY(${translateUp}px)`} : {}} /> 
      </motion.div>
      <motion.div variants={heroTitleAnimation} initial="initial" animate={controls} className="border-4 border-double border-main-theme absolute z-10 top-[80%] md:top-1/2 left-1/2 opacity-90 bg-white">
        <h3 className={`${playfair.className} font-bold text-center text-main-theme w-80 md:w-[600px] h-20 md:h-36 translate-y-[30%] md:translate-y-1/4 text-2xl md:text-5xl uppercase italic`}>
          {title}
        </h3>
      </motion.div>
    </section>
  );
}


export default Hero