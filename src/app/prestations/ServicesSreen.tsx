import { MenuItem } from '@/@types/menuItem'
import { menuItems } from '@/datas/menuItems'
import { karla } from '@/fonts/karla'
import { parisienne } from '@/fonts/parisienne'
import { playfair } from '@/fonts/playfair'
import Link from 'next/link'
import React, { FC } from 'react'
import { FaFan } from 'react-icons/fa6'

const ServicesScreen: FC = () => {
  return (
    <main className='py-14 px-5 lg:px-40 bg-main-theme'>
      <h2 className='home-titles'>Mes types de massage</h2>
      <section className='md:px-20'>
        <p style={{lineHeight:'2.5rem'}} className={`${karla.className} text-white text-xl lg:text-2xl indent-5 text-justify italic mb-10`}>
          Vous retrouverez dans cette sec&shy;tion la des&shy;crip&shy;tion des dif&shy;fé&shy;rents ty&shy;pes de mas&shy;sage et ser&shy;vi&shy;ces que je vous pro&shy;po&shy;se. N&apos;hé&shy;si&shy;tez pas à me con&shy;tacter par té&shy;lé&shy;pho&shy;ne pour en sa&shy;voir plus ou pour un ser&shy;vice sur-me&shy;sure et adap&shy;té.
        </p>
        <ul className='pl-10'>
          {
              menuItems[0].dropdown && menuItems[0].dropdown.map((item: MenuItem, index: number)=> (
              <li className='my-5 flex gap-2.5 items-center' key={index}>
                <FaFan className='fan' color='pink' />
                <Link className={`${playfair.className} hover:text-orange-400 text-white text-2xl lg:text-3xl italic uppercase`} href={`/types-massage/${item.path}`}>
                  {item.nom}
                </Link>
              </li>
            ))
          }
        </ul>
      </section>
    </main>
  )
}

export default ServicesScreen