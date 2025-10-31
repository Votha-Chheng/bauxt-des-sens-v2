export const captureErrorByField = (errorFields: {path: string, message: string}[]|undefined, name: string): string|null=> {
  if(!errorFields) return null
  const res = errorFields.filter(errorField => errorField.path === name)

  if(res.length>0) return res[0].message
  return null
}