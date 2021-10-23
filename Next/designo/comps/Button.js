import React from "react"
import Link from "next/link"
import { StyledButton } from "../styles/component-styles/Button.style"

const Button = ({ link, text, color, label, type }) => {
  return (
    <Link href={link} passHref>
      <StyledButton color={color} arial-label={label} type={type}>
        {text}
      </StyledButton>
    </Link>
  )
}

export default Button
