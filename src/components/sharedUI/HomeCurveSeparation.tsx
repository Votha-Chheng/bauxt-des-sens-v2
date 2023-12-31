'use client'

import { karla } from "@/fonts/karla";
import { opacityBandeau } from "@/@animations/opacityBandeau";
import { useWindowSize } from "@uidotdev/usehooks";
import { motion, useAnimation } from "framer-motion";
import Link from "next/link";
import { FC, useEffect, useLayoutEffect, useRef, useState } from "react";

type HomeCurveSeparationProps = {
  texte: string
  delay?: number, 
  delayButton?: number, 
  lien?: string, 
  margin?: string, 
  target?: boolean,
  inView?: boolean
}

const HomeCurveSeparation: FC<HomeCurveSeparationProps> = ({texte, delay=0, delayButton=0, lien="/infospratiques", margin="150px 0px", target, inView=true}) => {
  const [curlySvgHeight, setCurlySvgHeight] = useState(0)

  const {width} = useWindowSize()
  const controls = useAnimation()
  const curlySvg = useRef<SVGSVGElement>(null)

  useLayoutEffect(() => {
    if(curlySvg.current){
      setCurlySvgHeight(curlySvg.current.clientHeight)
    }
  },[width, curlySvgHeight])

  useEffect(() => {
    if(inView){
      controls.start("animate")
    }
  }, [controls, inView])

  const parentSvg = {
    initial : {

    },
    animate : {
      transition : {
        delayChildren : delay,
        staggerChildren : 0.25
      }
    }
  }
  const pathVariant1={
    initial : {
      fill : "rgba(144, 133, 125, 0)", 
      pathLength:0
    },
    animate : {
      pathLength:1,
      fill : "rgba(144, 133, 125, 1)",
      transition: {
        duration : 1.5,
        ease : "easeOut",
      }
    }
  }

  const pathVariant2={
    initial : {
      fill : "rgba(196, 185, 177, 0)", 
      pathLength:0
    },
    animate : {
      pathLength:1,
      fill : "rgba(196, 185, 177, 1)",
      transition: {
        duration : 1.5,
        ease : "easeOut",
      }
    }
  }


  return (                                
    <div className="relative w-full" style={{margin}}>
      <motion.div
        style={{transform:`translate(-50%, ${(curlySvgHeight/2) - 27.5 }px)`}}
        className='bandeau-btn'
        tabIndex={0}
        initial={{opacity: 0}}
        animate={inView && {opacity:1, transition: {duration:0.5}}}
      >
        <Link href={`${lien}`} target={target ? '_blank': '_self'} rel="noopener noreferrer">
          {texte}
        </Link>
      </motion.div>
      <motion.svg 
        ref={curlySvg} 
        variants={parentSvg} 
        initial="initial" 
        animate={controls} 
        className="curve-svg z-10" 
        width="100%" 
        height="100%" 
        viewBox="0 0 208 25" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
      >
        <motion.path 
          style={{filter:'blur(0.1px)'}}
          variants={pathVariant1}
          d="M105.519 12.5005C101.021 11.113 94.7733 9.05176 85.7646 6.93909C76.7219 4.81844 65.7792 2.8636 52.9683 1.57634C40.2557 0.293571 27.3272 -0.167714 15.2366 0.0529918C3.25808 0.271649 -6.5884 1.13902 -12.9974 2.05191L-7.41003 6.11854L-1.82264 10.1852C3.04478 9.49187 9.89097 8.37954 19.0918 7.45356C28.3333 6.52348 38.9897 5.88694 50.6175 5.95824C62.3702 6.03544 73.6591 6.83478 83.6526 8.15095C93.5421 9.45344 101.033 11.1168 105.519 12.5005V12.5005Z" 
          fill="#766B67"
        />
        <motion.path 
          variants={pathVariant1}
          d="M105.519 12.5005C110.017 13.888 116.265 15.9493 125.273 18.0619C134.316 20.1826 145.259 22.1374 158.07 23.4247C170.782 24.7075 183.711 25.1687 195.801 24.948C207.78 24.7294 217.626 23.862 224.035 22.9491L218.448 18.8825L212.861 14.8159C207.993 15.5092 201.147 16.6215 191.946 17.5475C182.705 18.4775 172.048 19.1141 160.42 19.0428C148.668 18.9656 137.379 18.1662 127.385 16.8501C117.496 15.5476 110.004 13.8842 105.519 12.5005V12.5005Z" 
          fill="#766B67"/>  
        <motion.path 
          variants={pathVariant2}
          d="M105.519 12.5005C101.779 11.5141 96.7515 9.99973 89.5495 8.4213C82.3334 6.83978 73.6698 5.36538 63.5251 4.39352C48.5428 3.31184 33.2103 3.57122 19.3414 4.81897C0.701187 6.49599 -12.5455 9.67852 -20 12.3451L-9.73488 15.32L0.530245 18.2949C5.63903 16.4674 13.7813 13.6732 27.1064 11.5045C37.0432 9.88721 48.9799 8.78665 61.8415 8.80713C70.8259 8.59 79.6742 8.91471 87.6878 9.67499C95.6071 10.4263 101.807 11.5215 105.519 12.5005V12.5005Z" 
          fill="#C4BAB2"/>  
        <motion.path 
          variants={pathVariant2}
          d="M105.519 12.5005C109.259 13.4869 114.286 15.0013 121.488 16.5797C128.704 18.1612 137.368 19.6357 147.513 20.6075C162.495 21.6892 177.828 21.4298 191.696 20.1821C210.337 18.505 223.583 15.3225 231.038 12.6559L220.773 9.68101L210.508 6.70611C205.399 8.5336 197.257 11.3278 183.931 13.4965C173.995 15.1138 162.058 16.2144 149.196 16.1939C140.212 16.411 131.364 16.0863 123.35 15.326C115.431 14.5747 109.231 13.4795 105.519 12.5005V12.5005Z" 
          fill="#C4BAB2"
        /> 
      </motion.svg>
    </div>
      
  );
}


export default HomeCurveSeparation;