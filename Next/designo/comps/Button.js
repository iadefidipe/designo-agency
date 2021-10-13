import React from 'react'
import Link from 'next/link'
import { StyledButton } from '../styles/styled-components/Button.style'

const Button = ({link,text, color, label }) => {
    return (
        <Link href={link} passHref ><StyledButton type={color} arial-label={label} >
              {text}
          </StyledButton></Link>
    )
}

export default Button
