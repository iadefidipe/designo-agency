import React, { useState } from "react"
import Logo from "./Logo"
import Nav from "./Nav"
import { menuData } from "../data/menuData"
import Image from "next/image"
import MobileMenu from "./MobileMenu"
import {
  StyledHamburger,
  StyledHeader,
} from "../styles/component-styles/Header.style"

const Header = () => {
  const [toggle, setToggle] = useState(false)

  return (
    <StyledHeader>
      <Logo
        href={menuData.homeLink}
        src={menuData.header.logo}
        alt={menuData.header.alt}
      />
      <Nav />

      <StyledHamburger>
        <Image
          src={
            toggle ? menuData.mobileDrop.close : menuData.mobileDrop.hamburger
          }
          alt='mobile-menu'
          width={24}
          height={20}
          onClick={() => setToggle(!toggle)}
        />
      </StyledHamburger>

      {toggle && <MobileMenu toggle={toggle} setToggle={setToggle} />}
    </StyledHeader>
  )
}

export default Header
