import React, { useActionState } from 'react'
import { Card, CardTitle } from '../ui/card'
import { varela } from '@/fonts/varela'
import InputForm from '../ui/InputForm'
import { Label } from '../ui/label'
import { Textarea } from '../ui/textarea'
import { captureErrorByField } from '@/utils/captureErrorByFields'
import SubmitButton from '../ui/SubmitButton'
import { CircleCheck, X } from 'lucide-react'
import { sendEmailAction } from '@/actions/sendEmail.action'

type ReusableFormProps = {
  textAreaLabel?: string
  placeholder?: string
}

const ReusableForm = (props: ReusableFormProps) => {
  const {textAreaLabel = "Écrivez votre demande", placeholder="Décrivez votre demande..."} = props
  const [state, formAction, pending] = useActionState(sendEmailAction, {})
  
  return (
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
                <Label className={`mobile:px-2 mobile:whitespace-nowrap desktop:text-xl text-main-theme ${varela.className}`}><b>{textAreaLabel} :</b></Label>
                <div className='relative max-h-96'>
                  <Textarea 
                    name='message'
                    required 
                    aria-required 
                    className={`ml-2 my-2.5 px-2 tablet:whitespace-nowrap text-xs desktop:text-base tablet:placeholder:text-sm desktop:placeholder:text-base placeholder:italic placeholder:opacity-50 ${varela.className}`} 
                    placeholder={placeholder}
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
  )
}

export default ReusableForm