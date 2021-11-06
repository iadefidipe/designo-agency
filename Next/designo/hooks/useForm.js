import { useState, useEffect} from "react"
import validateForm from "../helper/Validation"


const useForm = () => {
  // ? form values are updated to state on change events
  const [values, setValues] = useState({
    name: "",
    email: "",
    phone: "",
    nessage: "",
  })

  // ? erros updates after passing validations test
  const [errors, setErrors] = useState({})
  const [sucess, setSucess] = useState(false)
  const [dataIsCorrect, setDataIsCorrect] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setErrors(validateForm(values))
    setDataIsCorrect(true)
    
  }
  const handleChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    })
  }

  useEffect(() => {
    if (Object.keys(errors).length === 0 && dataIsCorrect) {
      setSucess(true)
      setValues({
        name: "",
        email: "",
        phone: "",
        message: "",
      });
    }
  }, [errors])

  return { handleChange, handleSubmit, values, errors, sucess}
}

export default useForm
