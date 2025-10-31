'use server'

import { IdForEmail } from "@/@types/IdForEmail"
import { ServiceResponse } from "@/@types/ServiceResponse"
import { validateWithZodSchema } from "@/utils/validateWithZodSchema"
import { EmailSchema } from "@/zodSchemas/email.schema"
import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)

export const sendEmailAction = async(prevState: ServiceResponse<unknown>, formData: FormData): Promise<ServiceResponse<string|null>> => {
  const rawData = Object.fromEntries(formData)
  const stringified = JSON.stringify(rawData)
  const parse = JSON.parse(stringified)
  
  const parsedData = validateWithZodSchema(EmailSchema, parse)
  console.log(parsedData)

  if(!parsedData.success) {
    return {
      success: false,
      errors: parsedData.errors
    }
  }

  try {
    const data = parsedData.data as IdForEmail

    const res = await resend.emails.send({
      to: "votha.chheng@gmail.com",
      from: "contact@bauxt-des-sens.com",
      subject: "Message du site bauxt-des-sens.com",
      text: `Ci-joint, un message d'une personne nommée ${data.nom} ${data.prenom}.\nN° de téléphone : ${data.telephone}. \nAdresse e-mail : ${data.email}. \nMessage : ${data.message}. \n`,
      html: `<p>Veuillez trouvez ci-joint un message d'une personne nommée ${data.nom} ${data.prenom}</p>
      <p>N° de téléphone : ${data.telephone}.</p>
      <p>Adresse e-mail : ${data.email}.</p>
      <p>Message : ${data.message}.</p>
      `
    })

    if(res.error) {
      return {
        success: false,
        message: `Problème de type "${res.error.name}" pour le serveur. Impossible d'envoyer la demande pour l'instant...`
      }
    }

    return {
      success: true,
      data: res.data!.id
    }
    
  } catch (error) {
    return {
      success: false,
      message: "Problème sur le serveur. Réessayez plus tard..."
     
    }
  }
}