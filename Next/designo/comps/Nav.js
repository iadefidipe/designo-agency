import React from "react"
import Link from "next/link"
import { menuData } from "../data/menuData"
import { StyledNav } from "../styles/component-styles/Nav.style"

const Nav = ({ toggle, setToggle }) => {
  return (
    <StyledNav>
      {menuData.menu.map((menu, index) => (
        <Link href={menu.link} key={index}>
          <a onClick={() => setToggle(!toggle)}>{menu.title}</a>
        </Link>
      ))}
    </StyledNav>
  )
}

export default Nav
