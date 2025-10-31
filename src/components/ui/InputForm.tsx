import React, { FC } from 'react'
import { Label } from '../ui/label'
import { Input } from '../ui/input'
import { X } from 'lucide-react'
import { italianno } from '@/fonts/italianno'
import { varela } from '@/fonts/varela'

type InputFormProps = {
  label: string
  name: string
  placeholder?: string
  type?: string
  pattern?: string
  errorMessage: string|null
}

const InputForm: FC<InputFormProps> = ({label, name, placeholder, pattern, errorMessage, type='text'}) => {
  return (
    <div className={`flex flex-col desktop:flex-row items-baseline gap-2 mt-5 my-10`}>
      <Label htmlFor={name} className={`mobile:px-2 tablet:whitespace-nowrap desktop:text-lg text-main-theme font-bold ${varela.className}`} aria-label='Nom'><b>{label}</b> :</Label>
      <div className='w-full relative'>
        <Input 
          type={type} 
          name={name} 
          pattern={pattern} 
          className='placeholder:text-xs tablet:placeholder:text-sm placeholder:italic placeholder:opacity-50 text-xs tablet:text-base laptop:text-lg' 
          aria-required
          required 
          placeholder={placeholder} 
        />
        {
          errorMessage &&
          <p className="absolute left-2 -bottom-5 text-xs flex gap-x-1 text-red-700"><X size={15}/>{errorMessage}</p>
        }
      </div>
    </div>
  )
}

export default InputForm
