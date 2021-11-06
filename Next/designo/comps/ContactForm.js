import React, { useState, useEffect } from "react"
import {
  Form,
  FormInput,
  HiddenLabel,
  FormButton,
  Error,
} from "../styles/component-styles/ContactForm.style"
import useForm from "../hooks/useForm"

// import useForm from "../hooks/useForm"

const ContactForm = () => {
  const { handleChange, handleSubmit, values, errors, sucess } = useForm()

  return (
    <>
      <Form action=''>
        <FormInput>
          <HiddenLabel htmlFor='name'>Enter your name</HiddenLabel>
          <input
            type='text'
            name='name'
            id='name'
            placeholder='Name'
            value={values.name}
            onChange={handleChange}
          />
          {errors.name && (
            <Error>
              {errors.name}{" "}
              <span>
                <i className='fas fa-exclamation-circle'></i>
              </span>
            </Error>
          )}
        </FormInput>
        <FormInput>
          <HiddenLabel htmlFor='email'>Enter your email address</HiddenLabel>
          <input
            type='email'
            name='email'
            id='email'
            placeholder='Email Address'
            value={values.email}
            onChange={handleChange}
          />
          {errors.email && (
            <Error>
              {errors.email}{" "}
              <span>
                <i className='fas fa-exclamation-circle'></i>
              </span>
            </Error>
          )}
        </FormInput>
        <FormInput>
          <HiddenLabel htmlFor='phone'>Enter your phone number</HiddenLabel>
          <input
            type='text'
            name='phone'
            id='phone'
            placeholder='Phone'
            value={values.phone}
            onChange={handleChange}
          />
          {errors.phone && (
            <Error>
              {errors.phone}{" "}
              <span>
                <i className='fas fa-exclamation-circle'></i>
              </span>
            </Error>
          )}
        </FormInput>
        <FormInput>
          <HiddenLabel htmlFor='message'>Type your message</HiddenLabel>
          <textarea
            name='message'
            id='message'
            value={values.message}
            onChange={handleChange}
            rows='5'
            placeholder='Your Message'
          ></textarea>
          {errors.message && (
            <Error>
              {errors.message}{" "}
              <span>
                <i className='fas fa-exclamation-circle'></i>
              </span>
            </Error>
          )}
        </FormInput>
        <FormButton onClick={handleSubmit} type='submit'>
          submit
        </FormButton>
      </Form>
    </>
  )
}

export default ContactForm

// const { handleChange, handleSubmit, values, errors, isSubmitting } =
// useForm(validateForm) const { handleChange, handleSubmit, values, errors, isSubmitting } =
//     useForm(validateForm)
{
  /* <Form action=''  >
<FormInput>
  <HiddenLabel htmlFor='name'>Enter your name</HiddenLabel>
  <input
    type='text'
    name='name'
    id='name'
    placeholder='Name'
    value={values.name}
    onChange={handleChange}
  />
  {errors.name && (
    <Error>
      {errors.name}{" "}
      <span>
        <i className='fas fa-exclamation-circle'></i>
      </span>
    </Error>
  )}
</FormInput>
<FormInput>
  <HiddenLabel htmlFor='email'>Enter your email address</HiddenLabel>
  <input
    type='email'
    name='email'
    id='email'
    placeholder='Email Address'
    value={values.email}
    onChange={handleChange}
  />
  {errors.email && (
    <Error>
      {errors.email}{" "}
      <span>
        <i className='fas fa-exclamation-circle'></i>
      </span>
    </Error>
  )}
</FormInput>
<FormInput>
  <HiddenLabel htmlFor='phone'>Enter your phone number</HiddenLabel>
  <input
    type='text'
    name='phone'
    id='phone'
    placeholder='Phone'
    value={values.phone}
    onChange={handleChange}
  />
  {errors.phone && (
    <Error>
      {errors.phone}{" "}
      <span>
        <i className='fas fa-exclamation-circle'></i>
      </span>
    </Error>
  )}
</FormInput>
<FormInput>
  <HiddenLabel htmlFor='message'>Type your message</HiddenLabel>
  <textarea
    name='message'
    id='message'
    value={values.message}
    onChange={handleChange}
    rows='5'
    placeholder='Your Message'
  ></textarea>
  {errors.message && (
    <Error>
      {errors.message}{" "}
      <span>
        <i className='fas fa-exclamation-circle'></i>
      </span>
    </Error>
  )}
</FormInput>
<FormButton onClick={(e) => handleSubmit(e)} type='submit'>
  submit
</FormButton>
</Form> */
}
