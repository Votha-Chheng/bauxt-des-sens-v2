'use client'

import React, { FC, useEffect, useRef, useState } from 'react'
import Anchor from './Anchor'
import Presentation from './Presentation'
import Approche from './Approche'
import ServiceDomicile from './ServiceDomicile'
import MassageIntuitif from './MassageIntuitif'
import VideoHomePage from './VideoHomePage'

const HomeScreen: FC = () => {

  const [start, setStart] = useState(false)

  useEffect(()=> {
    setStart(true)
  }, [])

  if(!start) return null

  return (
    <main className='bg-main-theme pb-32'>
      <Anchor/> 
      <Presentation/>
      {/* <ServiceDomicile/> */}
      <Approche/>
      <VideoHomePage/>
      <MassageIntuitif/>
    </main>     
  )
}

export default HomeScreen