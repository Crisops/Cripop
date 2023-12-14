import { useState } from 'react'

export const validateForm = (validateData) => {
  const initialForm = {
    search: '',
    choose: 'movie'
  }

  const [form, setForm] = useState(initialForm)
  const [error, setError] = useState({})

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    })
  }

  const handleChangeKeyUp = (e) => {
    handleChange(e)
    setError(validateData(form))
  }

  return {
    form,
    error,
    handleChange,
    handleChangeKeyUp
  }
}
