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

const contact = () => {
  return (
    <ContactPageContainer>
      <FormWrap>
        <CardContent>
          <CardHeader>Contact Us</CardHeader>
          <CardSubText>
            Ready to take it to the next level? Let’s talk about your project or
            idea and find out how we can help your business grow. If you are
            looking for unique digital experiences that’s relatable to your
            users, drop us a line.
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
  )
}

export default contact
