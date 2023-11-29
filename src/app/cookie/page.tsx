import { karla } from '@/fonts/karla'
import React, { FC } from 'react'

const CookiePage: FC = () => {
  return (
    <main className='py-14 bg-main-theme h-[90vh] text-white px-16'>
      <h2 className='home-titles'>Politique de cookie</h2>
      <p className={`${karla.className} text-lg`}>Ce site ne collecte aucune données personnelles et n'utilise donc pas de cookie.</p>
    </main>
  )
}

export default CookiePage