import { z } from "zod";

export const EmailSchema = z.object({
  nom: z.string().min(1,"Le nom est nécessaire."),
  prenom: z.string().min(1,"Le prénom est nécessaire."),
  email: z.email({message: "L'e-mail doit être de la forme exemple@xyz.com."}),
  message: z.string().min(1,"Vous devez décrire la raison pour laquelle vous me contactez."),
  telephone: z.string()
  .min(10, 'Le numéro de téléphone doit comporter 10 chiffres.')
  .refine((val) => {
    console.log(val)
    for(let i=0; i<val.length; i++){
      if(!Boolean(+i) && +i !==0) return false
    }
    return val.toString().length === 10
  }, 'Le numéro de téléphone doit comporter 10 chiffres.'),
})