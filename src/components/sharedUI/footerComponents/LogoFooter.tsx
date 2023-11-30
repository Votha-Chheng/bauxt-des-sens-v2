import { karla } from '@/fonts/karla'
import { parisienne } from '@/fonts/parisienne'
import Image from 'next/image'
import React, { FC } from 'react'

const LogoFooter: FC = () => {
  return (
    <section className="flex flex-col items-center py-4 px-10 min-w-[400px] text-black">
      <Image src="/images/logo.svg" alt='logo de bauxt des sens' width={175} height={175}/>
      <h3 className={`text-lg mt-2 font-bold ${karla.className} underline underline-offset-4`}>Masssage & Yoga à domicile</h3>
      <h3 className={`text-xl mt-2.5 ${parisienne.className}`}>Arles, Camargue & Alpilles</h3>
      <h3
        className={`text-lg mt-1 pb-3 px-4 border-t-transparent border-deep-green border text-center ${karla.className}`}
        style={{borderBottom: '4px solid #285330', borderRadius: '50%'}}
      >
        Disponible tous les jours sauf le dimanche
      </h3>
    </section>
  )
}

export default LogoFooter