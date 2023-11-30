import { karla } from '@/fonts/karla'
import Link from 'next/link'
import React, { FC } from 'react'
import { MdCookie, MdPolicy } from 'react-icons/md'

const MentionsLegalesFooter: FC = () => {
  return (
    <section className="flex flex-col items-center px-10 pt-6 text-black">
      <h2 className={`text-lg text-center text-black ${karla.className} underline underline-offset-4 translate-y-6 -translate-x-3 font-bold`}>Mentions légales</h2>
      <ul 
        style={{borderLeft: '6px solid #285330', borderRadius: '50%'}}
        className={`${karla.className} pt-14 pl-12 w-96 h-60 border-r-transparent border-t-transparent border-deep-green border text-lg flex flex-col gap-7`}
      >
        <li className={`flex items-center gap-2 font-bold`}>
          <MdPolicy />
          <Link href='/confidentialite'>Politique de confidentialité</Link>
        </li>
        <li className={`flex items-center font-bold gap-2`}>
          <MdCookie />
          <Link href='/cookie'>Politique de cookie</Link>
        </li>
      </ul>
    </section>
  )
}

export default MentionsLegalesFooter