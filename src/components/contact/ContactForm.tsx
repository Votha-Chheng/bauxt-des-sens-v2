'use client'

import { titleAnimation } from '@/@animations/titleAnimation'
import { motion } from 'framer-motion'
import React, { useActionState, useRef } from 'react'
import { Card, CardTitle } from '../ui/card'
import { CircleCheck, X } from 'lucide-react'
import { sendEmailAction } from '@/actions/sendEmail.action'
import { Label } from '../ui/label'
import InputForm from '../ui/InputForm'
import { captureErrorByField } from '@/utils/captureErrorByFields'
import { Textarea } from '../ui/textarea'
import SubmitButton from '../ui/SubmitButton'
import { varela } from '@/fonts/varela'

const ContactForm = () => {
  const [state, formAction, pending] = useActionState(sendEmailAction, {})

  return (
    <section className="mb-16 mt-32 w-full md:px-10 px-2">
      <motion.h2 className="home-titles" variants={titleAnimation} initial="initial" animate="appear" >
        Formulaire de contact
      </motion.h2>
      <Card className={`py-5 px-5 border-main-theme lg:w-1/2 mx-auto ${varela.className}`}>
      {
        state.success && state.data
        ?
        <div className='flex flex-col gap-y-3 items-center justify-center min-h-[500px] text-main-theme'>
          <span className='text-center'><b>Votre demande a bien été envoyée. J&apos;essaierai d&apos;y répondre dans les plus brefs délais.</b></span><CircleCheck className='text-green-700'/>
        </div>
        :
        <>
          <CardTitle className='text-main-theme text-center md:text-xl mt-5 mb-10 '>Remplissez les champs demandés. Tous les champs sont obligatoires.</CardTitle>
          <Card className={`pt-3 pb-5 px-5 border-main-theme ${varela.className}`}>
            <form action={formAction}>
              <InputForm label='Nom' name='nom' placeholder='Ecrire votre nom de famille...' errorMessage={captureErrorByField(state?.errors, "nom")} />
              <InputForm label='Prénom' name='prenom' placeholder='Ecrire votre prénom...' errorMessage={captureErrorByField(state?.errors, "prenom")}/>
              <InputForm label='Adresse e-mail de contact' name='email' placeholder='exemple@example.com' type='email' errorMessage={captureErrorByField(state?.errors, "email")} />
              <InputForm label='N° de téléphone' name='telephone' type='tel' placeholder='0XXXXXXXXX' pattern='[0-9]{10}' errorMessage={captureErrorByField(state?.errors, "telephone")}/>
              <div className='mb-10'>
                <Label className={`mobile:px-2 mobile:whitespace-nowrap desktop:text-xl text-main-theme ${varela.className}`}><b>&Eacute;crivez votre demande :</b></Label>
                <div className='relative max-h-96'>
                  <Textarea 
                    name='message'
                    required 
                    aria-required 
                    className={`ml-2 my-2.5 px-2 tablet:whitespace-nowrap text-xs desktop:text-base tablet:placeholder:text-sm desktop:placeholder:text-base placeholder:italic placeholder:opacity-50 ${varela.className}`} 
                    placeholder='Décrivez votre demande...'
                  />
                  {
                    captureErrorByField(state?.errors, "message") &&
                    <p className="absolute left-2 -bottom-5 text-xs flex gap-x-1 text-red-700"><X size={15}/>{captureErrorByField(state?.errors, "message")}</p>
                  }
                </div>
              </div>
              <div className='flex justify-center mobile:justify-end'>
                <SubmitButton pending={pending} label='Envoyer la demande'/>
              </div> 
            </form>
          </Card>
        </>
      }
    </Card>
    </section>
  )
}

export default ContactForm
