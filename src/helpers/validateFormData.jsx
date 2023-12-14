export const validateFormData = (form) => {
  const error = {}

  const regexString = /^[a-zA-Z\s]+$/

  if (!form.search.trim()) {
    error.search = 'El campo no puede quedar vacío'
  } else if (!regexString.test(form.search)) {
    error.search = 'Error. No se aceptan números'
  }

  return error
}
