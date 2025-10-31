export type ServiceResponse<T> = {
  success?: boolean
  message?: string
  fields?: Record<string, string>
  issues?: string[]
  errors?: {
    path: string,
    message: string
  }[]
  titreToast?:string
  data?: T|null
}