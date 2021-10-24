import React from "react"
import Nav from "./Nav"
import { StyledMenu } from "../styles/component-styles/MobileMenu.style"

const MobileMenu = ({ toggle, setToggle }) => {
  return (
    <StyledMenu>
      <div>
        <Nav toggle={toggle} setToggle={setToggle} />
      </div>
    </StyledMenu>
  )
}

export default MobileMenu
