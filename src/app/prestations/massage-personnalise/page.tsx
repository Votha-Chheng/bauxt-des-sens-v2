'use client'

import { opacityBandeau } from '@/@animations/opacityBandeau'
import Hero from '@/components/sharedUI/Hero'
import { karla } from '@/fonts/karla'
import { playfair } from '@/fonts/playfair'
import { motion } from 'framer-motion'
import Image from 'next/image'
import React, { FC } from 'react'
import MassagePersonnaliseScreen from './MassagePersonnaliseScreen'

const MassagePersonnalisePage: FC = () => {
  return (
    <>
      <MassagePersonnaliseScreen/>
    </>
  )
}

export default MassagePersonnalisePage