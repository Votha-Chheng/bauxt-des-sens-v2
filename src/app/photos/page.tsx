import { titleAnimation } from '@/@animations/titleAnimation'
import { motion } from 'framer-motion'
import React from 'react'
import PhotosScreen from './PhotosScreen'

const PhotosPage = () => {
  return (
    <main className={`bg-main-theme py-14 `}>
      <PhotosScreen/>
    </main>
  )
}

export default PhotosPage