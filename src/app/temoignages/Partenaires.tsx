import { titleAnimation } from "@/@animations/titleAnimation";
import { motion } from "framer-motion";
import { FC } from "react";

const Partenaires: FC = () => {
  const variantsAppear = {
    start: {},
    fadeIn : {
      transition: {
        staggerChildren : 0.15,
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

  return (
    <section className="pb-[15vh]">
      <motion.h2 className="home-titles" variants={titleAnimation} initial="initial" animate="appear" >
        Ils font appel à mes services
      </motion.h2>
      <motion.ul className={`flex flex-wrap gap-5 justify-center m-0 p-0 items-center list-none`} variants={variantsAppear} initial="start" animate="fadeIn">
        <motion.li variants={variantsChildren}>
          <img src="/images/chabran.jpg" width="360" alt="logo chabran"/>
        </motion.li>
        <motion.li variants={variantsChildren}>
          <img src="/images/manville.jpg" width="320" alt="logo manville"/>
        </motion.li>
        <motion.li variants={variantsChildren}>
          <img src="/images/bellesso.jpg" width="360" alt="logo hôtel belesso"/>
        </motion.li>
        <motion.li variants={variantsChildren}>
          <img src="/images/maison_variétés.jpg" width="360" alt="logo maison des variétés"/>
        </motion.li>
        <motion.li variants={variantsChildren}>
          <img src="/images/mas_valentine.jpg" width="320" alt="logo mas valentine"/>
        </motion.li>
        <motion.li variants={variantsChildren}>
          <img src="/images/baumaniere.jpg" width="360" alt="logo baumanière"/>
        </motion.li>
        <motion.li variants={variantsChildren}>
          <img src="/images/vr.jpg" width="300" alt="logo vr"/>
        </motion.li>
        <motion.li variants={variantsChildren}>
          <img src="/images/mas_des_fees.png" width="360" alt="logo mas des fées"/>
        </motion.li>
        <motion.li variants={variantsChildren}>
          <img src="/images/mas-couvin-logo.png" width="360" alt="logo mas du couvin"/>
        </motion.li>
        <motion.li variants={variantsChildren}>
          <img src="/images/collectionist.jpg" width="360" alt="logo collectionist"/>
        </motion.li>
        <motion.li className={`flex flex-col items-center`} variants={variantsChildren}>
          <a className="transition-all duration-200 ease-out hover:shadow-lg shadow-gray-400" href="https://www.myhomeconnexion.com/" target="_blank">
            <img src="/images/home_connexion.jpg" width="300" alt="logo home connexion.jpg"/>
          </a> 
          <small>(Cliquez sur le logo)</small>       
        </motion.li>
      </motion.ul>
    </section>

  );
}

export default Partenaires;