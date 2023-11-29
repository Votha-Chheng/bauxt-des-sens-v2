'use client'

import { karla } from "@/fonts/karla";
import { titleAnimation } from "@/@animations/titleAnimation"
import { useWindowSize } from "@uidotdev/usehooks";
import { motion } from "framer-motion";
import { FC } from "react";
import { GiDiploma } from "react-icons/gi";
import { LiaCertificateSolid } from "react-icons/lia"
import { MdSchool } from "react-icons/md"

const Diplomes: FC = () => {
  const {width} = useWindowSize()

  const variantsAppear = {
    start: {},
    fadeIn : {
      transition: {
        staggerChildren : 0.25,
        delayChildren : 0.5
      }   
    }
  }
  const variantsChildren = {
    start: {
      opacity : 0
    },
    fadeIn : {
      opacity : 1,
    }   
  }


  const liStyle=` flex items-center gap-3 text-2xl text-dim-gray my-6 mx-0 p-7 bg-gray-200 w-3/4 italic leading-10`
  const liMiniStyle=`flex flex-col items-center gap-3 text-xl text-dim-gray my-6 mx-0 py-5 px-4 bg-gray-200 w-full italic leading-10`

  return (
    <section className="mb-16 w-full px-10">
      <motion.h2 className="home-titles" variants={titleAnimation} initial="initial" animate="appear" >
        Mes diplômes & formations
      </motion.h2>
      <motion.ul variants={variantsAppear} initial="start" animate="fadeIn" className="list-none"  >
        <motion.li 
          style={{borderTop: '2px double #797067', borderRight: "2px double #797067", borderBottom: '2px double #797067',borderLeft:'10px solid #797067'}} 
          className={`${karla.className} ${ width && width<1068 ? liMiniStyle : liStyle}`}
          variants={variantsChildren}
        >
          <GiDiploma size={50} />
          <span>Certificat d&apos;apti&shy;tude pro&shy;fession&shy;nel&shy;le en esthé&shy;tique, cos&shy;méti&shy;que et parfu&shy;me&shy;rie</span>
        </motion.li>
        <motion.li 
          style={{borderTop: '2px double #797067', borderRight: "2px double #797067", borderBottom: '2px double #797067',borderLeft:'10px solid #797067'}} 
          className={`${karla.className} ${ width && width<1068 ? liMiniStyle : liStyle}`}
          variants={variantsChildren}
        >
          <LiaCertificateSolid size={50} />
          <span>Certification de spé&shy;cialisa&shy;tion des soins du corps</span>
        </motion.li>
        <motion.li 
          className={`${karla.className} ${ width && width<1068 ? liMiniStyle : liStyle}`}
          style={{borderTop: '2px double #797067', borderRight: "2px double #797067", borderBottom: '2px double #797067',borderLeft:'10px solid #797067'}} 
          variants={variantsChildren}
        >
          <MdSchool size={30} /> 
          <span>Formations en &Eacute;tire&shy;ments et Mobilisations Ar&shy;ti&shy;culaires</span>
        </motion.li>
      </motion.ul>
    </section>
  );
}

export default Diplomes;