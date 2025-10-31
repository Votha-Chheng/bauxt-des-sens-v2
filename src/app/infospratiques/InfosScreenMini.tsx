import { italianno } from '@/fonts/italianno'
import { karla } from '@/fonts/karla'
import { mrsDelafield } from '@/fonts/mrsDelafield'
import { parisienne } from '@/fonts/parisienne'
import { playfair } from '@/fonts/playfair'
import Image from 'next/image'
import React, { FC } from 'react'
import { FaQuoteLeft, FaQuoteRight } from 'react-icons/fa6'

const InfosScreenMini: FC = () => {
  return (
    <section 
      className="py-12 px-6 w-full h-full pt-9 pb-24 mt-12 mx-auto border-2 border-double border-silver overflow-hidden"
      style={{backgroundSize: 'cover', backgroundImage:'url("/images/bg-flowers.jpg")'}} 
    >
      <article className="w-full bg-white py-8">
        <h3 className={`text-pink text-center text-4xl pb-5 mx-10 border-b border-pink ${mrsDelafield.className}`}>
          Baux&apos;t des sens
        </h3>
          <div className="flex flex-col items-center w-full min-h-[250px] mx-auto pt-16 px-5 pb-0 gap-5">
            <div className="min-w-[200px] relative h-56 overflow-hidden border-2 border-black flex-nowrap rounded-xl">
              <Image src="/images/portrait-3.jpg" width={200} height={450} alt="portrait" className="transition-all duration-200 ease-out hover:scale-110" />
            </div>              
            <p className={`text-black flex flex-col ${karla.className} border-l-8 border-pink pl-2.5 text-justify text-base w-full relative my-0 mx-2.5 italic`}>
              <FaQuoteLeft />
              <span className='indent-5'>
                Les soins que j&apos;apporte sont issus d&apos;une formation où j&apos;ai appris de multiples techniques profes&shy;sion&shy;nelles. La qualité de mes massages se démar&shy;que par l&apos;in&shy;tention particulière, la bi&shy;en&shy;veillance et l&apos;é&shy;nergie que j&apos;y mets. Mon but étant de vous ap&shy;porter un moment unique et sur-mesure grâce à mon attention, ma disponibilité et mon écoute.
              </span>
              <FaQuoteRight className='self-end' />
            </p>
          </div>
          <div className={`${playfair.className} text-center font-bold text-2xl w-full my-12 mx-auto px-5 text-pink`}>
            Massages intuitifs & coaching de Hata yoga à domicile.
          </div>
              <div className={`${italianno.className} text-center text-4xl`}>
                Arles, les Alpilles et alentours
              </div>
              <div className={`${playfair.className} w-10/12 my-8 mx-auto text-center text-lg`}>
                Vous pouvez me joindre du lundi au samedi <b><em>de 9h à 19h</em></b> pour un simple renseignement, une demande particulière ou un rendez-vous. au :
                <div className={`${karla.className} my-6 mx-auto text-2xl transition-all duration-300 ease-out hover:scale-110`}>
                  <a href="tel:0616838962">06.16.83.89.62</a>
                </div>
                Ou remplir le formulaire de contact ci-dessus en remplissant les informations demandées
              </div>
              <div className={`${parisienne.className} mb-5 text-center text-3xl text-pink`} >
                Prenez soin de vous !
              </div>
              <div className="flex gap-6 justify-center">
                <a href="https://www.facebook.com/bauxt.dessens.73">
                  <Image src="/images/fblogo.svg" alt='logo facebook' width={30} height={30} className="transition-all duration-200 ease-out hover:scale-110"/>
                </a>
                <a href="https://www.instagram.com/bauxtdessens/">
                  <Image src="/images/logo-instagram.svg" alt='logo instagram' width={35} height={35} className="transition-all duration-200 ease-out hover:scale-110"/>
                </a>
              </div>
      </article>      
    </section>             
  )
}

export default InfosScreenMini