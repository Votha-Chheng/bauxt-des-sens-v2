import { Volume2, VolumeOff } from 'lucide-react'
import React from 'react'

type Props = {
  stopAudio: () => void
  startAudio: () => void
  soundOn: boolean
  className?: string
  absolutePosition : boolean
}

const AudioPresentation = (props: Props) => {
  const { stopAudio, startAudio, soundOn, absolutePosition, className=''} = props

  return (
    <div className={`${className} ${absolutePosition && "absolute top-20 right-28"} w-20 text-xs text-center z-30`}  onClick={()=> soundOn ? stopAudio() : startAudio()}>
      <p className='text-sm text-white text-center cursor-pointer mt-1.5 mb-1.5 italic'>Présentation sonore</p>
      {
        soundOn 
        ?
        <Volume2 color='#ffffff' className='mx-auto cursor-pointer'/>
        :
        <VolumeOff color='#ffffff' className='mx-auto cursor-pointer'/>
      }
      <div className='rotate-180 mt-1.5 -translate-x-6'>
        <svg className='arrow-anim' width="32px" height="32px" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
          <path 
            d="M 15 4 L 15 24.0625 L 8.21875 17.28125 L 6.78125 18.71875 L 15.28125 27.21875 L 16 27.90625 L 16.71875 27.21875 L 25.21875 18.71875 L 23.78125 17.28125 L 17 24.0625 L 17 4 Z" 
            fill="grey"
          />
        </svg>
      </div>
    </div> 
  )
}

export default AudioPresentation