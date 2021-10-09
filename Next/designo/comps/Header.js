import React, { useState } from 'react'
import Logo from './Logo'
import Nav from './Nav'
import { menuData } from '../data/menuData'
import Image from 'next/image'
import Styles from '../styles/Header.module.css'

const Header = () => {
    const [toggle, setToggle] = useState(false)
    
    return (
        <header className={Styles.header}  >
            <Logo src={ menuData.header.logo} alt={menuData.header.alt}  />
            <Nav />
            <div className={Styles.hamburger}>
                <Image src={ toggle ? menuData.mobileDrop.close : menuData.mobileDrop.hamburger} alt='mobile-menu' width={24} height= {20} onClick={ () => setToggle(!toggle) } />
            </div>
            
        </header>
    )
}

export default Header
