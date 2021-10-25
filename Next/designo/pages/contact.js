import React from "react"
import {
  CardContent,
  CardHeader,
  ContactPageContainer,
  FormWrap,
  LocationListWrap,
  CardSubText,
  CardForm,
} from "../styles/page-style/contact.style"
import LocationList from "../comps/LocationList"
import ContactForm from "../comps/ContactForm"
import Head from "next/head"

const contact = () => {
  return (
    <>
      <Head>
        <title>Contact - We Want to Hear From You</title>
        <meta
          name='description'
          content='We are always excited to hear from our esteemed customers. Contact us to kick-start your new project.'
        />
      </Head>
      <ContactPageContainer>
        <FormWrap>
          <CardContent>
            <CardHeader>Contact Us</CardHeader>
            <CardSubText>
              Ready to take it to the next level? Let’s talk about your project
              or idea and find out how we can help your business grow. If you
              are looking for unique digital experiences that’s relatable to
              your users, drop us a line.
            </CardSubText>
          </CardContent>

          <CardForm>
            <ContactForm />
          </CardForm>
        </FormWrap>
        <LocationListWrap>
          <LocationList />
        </LocationListWrap>
      </ContactPageContainer>
    </>
  )
}

export default contact
