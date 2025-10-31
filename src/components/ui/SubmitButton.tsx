import React, { FC } from 'react'
import { Button } from '../ui/button'
import { Loader2Icon } from 'lucide-react'
import { varela } from '@/fonts/varela'

type SubmitButtonProps = {
  label: string
  className?: string
  disable?: boolean
  outline ?: boolean
  icon ?: JSX.Element
  pending : boolean
}

const SubmitButton: FC<SubmitButtonProps> = ({label, className, disable, outline=false, icon, pending}) => {

  return (
    <Button type='submit' variant={outline ? "outline":"default"} className={`tablet:text-lg p-5 ${varela.className} ${className}`} disabled={disable||pending} onClick={()=> "clicked"}>
      {pending ? <Loader2Icon className='animate-spin mr-2'/> : <>{icon} {label}</>} 
    </Button>
  )
}

export default SubmitButton