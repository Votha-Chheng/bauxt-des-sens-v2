'use client'

import { karla } from "@/fonts/karla";
import { parisienne } from "@/fonts/parisienne";
import { useWindowSize } from "@uidotdev/usehooks";
import Image from "next/image";
import { FC } from "react";
import { FaPhone } from "react-icons/fa6";
import { MdCookie, MdPolicy } from "react-icons/md";
import Contact from "./footerComponents/Contact";
import LogoFooter from "./footerComponents/LogoFooter";
import MentionsLegalesFooter from "./footerComponents/MentionsLegalesFooter";
import Link from "next/link";

const Footer: FC = () => {
  const { width } = useWindowSize()

  return (
    <footer className="bg-silver border-t-4 border-black border-double overflow-hidden w-full">
      <div className={`flex ${width && width<1440 ? "flex-col gap-y-12" : "flex-row gap-x-32 justify-center"}`}>
        {
          width && width<1440
          ?
          <>
            <LogoFooter/>
            <Contact/>
            <MentionsLegalesFooter/>
          </>
          :
          <>
            <Contact/>
            <LogoFooter/>
            <MentionsLegalesFooter/>
          </>
        }
      </div>
      <div className={`mb-3 mx-auto mt-12 pt-2.5 text-center font-bold border-t border-black text-black ${karla.className}`}>
        Copyright - Juillet 2021 &copy; Baux&apos;T des Sens/<Link href='https://github.com/Votha-Chheng' target="_blank">Votha Chheng</Link>
      </div>
    </footer>
  );
}


export default Footer;