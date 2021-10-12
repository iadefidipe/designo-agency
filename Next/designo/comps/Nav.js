import React from 'react'
import Link from 'next/link'
import { menuData } from '../data/menuData'
import styles from '../styles/modules/Nav.module.css'

const Nav = () => {
    return (
        <nav className={styles.nav}>
            {menuData.menu.map( (menu, index) => 
                <Link href={menu.link} key={index}><a>{menu.title}</a></Link>
             )}
        </nav>
    )
}

export default Nav
