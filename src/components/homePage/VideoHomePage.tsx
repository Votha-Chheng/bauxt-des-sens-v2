'use client'

import { useWindowSize } from '@uidotdev/usehooks'
import Image from 'next/image'
import React, { FC, Suspense, useEffect, useState } from 'react'
import ReactPlayer from 'react-player'

const VideoHomePage: FC= () => {
  const [mounted, setMounted] = useState<boolean>(false)

  const { width } = useWindowSize()

  useEffect(()=> {
    setMounted(true)
  }, [])


  return (
    <section className='bg-main-theme min-h-[400px] pt-12 flex justify-center px-10'>
      {
        !mounted 
        ?
        <svg className="animate-spin h-5 w-5 mr-3" viewBox="0 0 24 24"/>
        :
        <article className='relative w-full mx-auto'>
          <Image src="/images/logoLotus.svg" alt='logo en forme de lotus' className='mx-auto' width={100} height={100}/>
          <div className="w-24 h-1 mt-1 bg-white rounded-md mx-auto my-10"/>
          <Suspense>
            <ReactPlayer 
              url='/images/demo-massage.mp4'
              controls 
              className='absolute left-1/2 -translate-x-1/2 top-24'
              width={`${width && width<600 && '100%'}`}
            />
          </Suspense>
        </article>
      }
    </section>
  )
}

export default VideoHomePage