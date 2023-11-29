'use client'

import React, { FC, useRef } from 'react'
import Anchor from './Anchor'
import Presentation from './Presentation'
import Approche from './Approche'
import ServiceDomicile from './ServiceDomicile'
import MassageIntuitif from './MassageIntuitif'
import VideoHomePage from './VideoHomePage'

const HomeScreen: FC = () => {

  return (
    <main className='bg-main-theme pb-20'>
      <Anchor/> 
      <Presentation/>
      <ServiceDomicile/>
      <Approche/>
      <VideoHomePage/>
      <MassageIntuitif/>
    </main>     
  )
}

export default HomeScreen