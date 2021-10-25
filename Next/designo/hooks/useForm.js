import { useState } from "react"

const useForm = (validateForm) => {
  const [values, setValues] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })
  const [errors, setErrors] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  //TODO: Handle => Form input names and values are extracted. The results are push into the "values" state
  const handleChange = (e) => {
    const name = e.target.name
    const value = e.target.value
    setValues({ ...values, [name]: value })
  }

  //TODO: Handle => Form is submited successfully when all input conditions are met
  const handleSubmit = (e) => {
    e.preventDefault()
    setErrors(validateForm(values))

    if (Object.keys(errors).length === 0 && errors.constructor === Object) {
      setIsSubmitting(true)
      setValues({
        name: "",
        email: "",
        phone: "",
        message: "",
      })
    } else {
      setIsSubmitting(false)
    }
  }

  return { handleChange, handleSubmit, values, errors, isSubmitting }
}

export default useForm
