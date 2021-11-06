//TODO: Regular expression to validate email
const validEmail = new RegExp("^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$")

//TODO: Function to validate the contact form
const validateForm = (values) => {
  let errors = {}

  //* => Validate Name
  if (!values.name.trim()) {
    errors.name = "Name required!"
  }

  //* => Validate Email
  if (!values.email) {
    errors.email = "Email required!"
  } else if (!validEmail.test(values.email)) {
    errors.email = "Email address is invalid (e.g example@gmail.com)"
  }

  //* => Validate Phone
  if (!values.phone) {
    errors.phone = "Phone required!"
  } else if (isNaN(values.phone)) {
    errors.phone = "Phone should be a number!"
  }

  //* => Validate Message
  if (!values.message) {
    errors.message = "Message required!"
  }

  return errors
}

export default validateForm 