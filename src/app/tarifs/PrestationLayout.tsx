'use client'

import { DescriptionMassage } from "@/@types/descriptionMassage";
import { Prestation } from "@/@types/prestation";
import { italianno } from "@/fonts/italianno";
import { karla } from "@/fonts/karla";
import { mrsDelafield } from "@/fonts/mrsDelafield";
import { pinyon } from "@/fonts/pinyon";
import { playfair } from "@/fonts/playfair";
import { varela } from "@/fonts/varela";
import { FC } from "react";

type PrestationLayoutProps = {
  prestation: Prestation
}

const PrestationLayout:FC<PrestationLayoutProps> = ({ prestation }) => {
  return (
    <article className=" lg:w-[900px] mx-auto relative">
      <h3 className={`${mrsDelafield.className} m-0 py-4 px-2.5 text-violet text-5xl bg-silver rounded-t-md`}>
        {prestation.titre}
      </h3>
      <ul className="py-5 bg-[#141414] list-none border-b border-white" tabIndex={5}>
        {
          prestation.massages.map((massage: DescriptionMassage, index: number)=> (
          <li key={index} className={`${playfair.className} text-whitepy-4 px-5 italic mb-10`}>
            <div className="flex justify-between text-lg lg:text-xl text-pink tracking-wide font-bold lg:mb-0 mb-2">
              <div className="titre-service">
                {massage.service}
              </div>
              <div className="pl-12 mb-1 min-w-[120px] text-right">
                {`${massage.prix} ${massage.prix === "Tarif sur demande" ? "" : "€"}`}
              </div>
            </div>
            <div className={`${varela.className} text-sm lg:text-base tracking-normal lg:tracking-wide text-white max-w-96 lg:w-[600px]`}>
              {massage.description}
            </div>
          </li>
          ))
        }
      </ul>
    </article>
  );
}

export default PrestationLayout;