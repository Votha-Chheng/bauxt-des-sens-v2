"use client"

import { karla } from '@/fonts/karla'
import { MailIcon } from 'lucide-react'
import Image from 'next/image'
import React, { FC, useEffect, useState } from 'react'
import { FaPhone } from 'react-icons/fa6'

const Contact: FC = () => {
  const [start, setStart] = useState(false)

  useEffect(()=> {
    setStart(true)
  }, [])

  if(!start) return null
  
  return (
    <section className="flex flex-col items-center px-10 pt-6 text-black">
      <h2 className={`text-lg text-center text-black ${karla.className} underline underline-offset-4 translate-y-6 translate-x-4 font-bold`}>Contact & prise de RDV</h2>
      <ul 
        style={{borderLeft: '6px solid #285330', borderRadius: '50%'}} 
        className={`${karla.className} pt-8 pl-14 w-[390px] h-60 border-r-transparent border-t-transparent border-deep-green border text-lg flex flex-col gap-5`}
      >
        <li className={`font-bold ${karla.className} `}>
          <a href="tel:0616838962" className="flex gap-2 items-center">
            <FaPhone />
            <span>06 16 83 89 62</span>
          </a>
        </li>
        <li className={`font-bold ${karla.className} `}>
          <a href="/contact" className="flex gap-2 items-center">
            <MailIcon/>
            <span>Formulaire de contact</span>
          </a>
        </li>
        <li className={`font-bold ${karla.className}`}>
          <a className="flex gap-2 items-center" href="https://www.facebook.com/bauxt.dessens.73" target="_blank" rel='noopener noreferrer'>
            <svg width="20" height="20" viewBox="0 0 185 201" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M15.5587 200.203C9.89925 199.552 4.79369 195.59 2.33656 189.943C1.41305 187.82 0.974993 186.051 0.760327 183.577C0.642126 182.214 0.602467 155.16 0.636068 98.8103L0.685418 16.0453L1.14342 14.2263C3.05408 6.63797 8.52775 1.44343 15.608 0.499328C17.578 0.236654 167.086 0.236654 169.056 0.499328C173.522 1.09479 177.538 3.49881 180.264 7.20896C182.351 10.0483 183.546 13.2369 183.889 16.8786C184.124 19.3762 184.125 181.404 183.891 183.849C183.662 186.228 183.197 187.984 182.226 190.133C180.606 193.716 177.889 196.68 174.639 198.409C172.663 199.46 171.046 199.968 168.886 200.215C166.937 200.437 17.4953 200.426 15.5592 200.203L15.5587 200.203ZM98.1695 151.471V120.729H87.2453H76.3211V107.178V93.6261H87.2453H98.1695L98.1735 81.848C98.1755 75.3701 98.2507 69.2514 98.3398 68.2509C99.1394 59.2721 101.822 52.2844 106.499 46.9984C111.325 41.545 116.954 38.6244 125.021 37.3886C128.039 36.9262 142.343 37.1469 148.537 37.7514L149.788 37.8734L149.831 50.1972L149.874 62.521L141.992 62.5218C135.968 62.5224 133.766 62.5836 132.646 62.7819C127.166 63.7521 124.798 66.5834 124.192 72.8895C124.101 73.8399 124.025 78.8945 124.023 84.1219L124.02 93.6262H136.414H148.809L147.263 107.041C146.413 114.42 145.714 120.518 145.71 120.593C145.706 120.668 140.824 120.729 134.861 120.729H124.02V151.471V182.212H145.702H167.384V100.356V18.501H92.3318H17.2799V100.356V182.212H57.7245H98.1692L98.1695 151.471Z" fill="#000000"/>
            </svg>
            <span>Mon actualité sur Facebook</span>
          </a>
        </li>
        <li className={`font-bold ${karla.className}`}>
          <a className="flex gap-2 items-center" href="https://www.instagram.com/bauxtdessens/" target="_blank" rel='noopener noreferrer'>
            <svg width="20" height="20" viewBox="0 0 170 170" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M122.406 0H46.654C20.929 0 0 20.93 0 46.655V122.407C0 148.133 20.929 169.062 46.654 169.062H122.406C148.133 169.062 169.062 148.132 169.062 122.407V46.655C169.063 20.93 148.133 0 122.406 0ZM154.063 122.407C154.063 139.862 139.862 154.062 122.407 154.062H46.654C29.2 154.063 15 139.862 15 122.407V46.655C15 29.201 29.2 15 46.654 15H122.406C139.861 15 154.062 29.201 154.062 46.655V122.407H154.063Z" fill="black"/>
              <path d="M84.531 40.97C60.51 40.97 40.968 60.512 40.968 84.533C40.968 108.553 60.51 128.094 84.531 128.094C108.552 128.094 128.094 108.553 128.094 84.533C128.094 60.512 108.552 40.97 84.531 40.97ZM84.531 113.093C68.782 113.093 55.968 100.281 55.968 84.532C55.968 68.782 68.781 55.969 84.531 55.969C100.281 55.969 113.094 68.782 113.094 84.532C113.094 100.281 100.28 113.093 84.531 113.093Z" fill="black"/>
              <path d="M129.921 28.251C127.031 28.251 124.192 29.421 122.151 31.471C120.1 33.511 118.921 36.351 118.921 39.251C118.921 42.142 120.101 44.981 122.151 47.031C124.191 49.071 127.031 50.251 129.921 50.251C132.821 50.251 135.651 49.071 137.701 47.031C139.751 44.981 140.921 42.141 140.921 39.251C140.921 36.351 139.751 33.511 137.701 31.471C135.661 29.421 132.821 28.251 129.921 28.251Z" fill="black"/>
            </svg>
            <span>Suivez-moi sur Instagram</span>
          </a>
        </li>
      </ul>
    </section>
  )
}

export default Contact