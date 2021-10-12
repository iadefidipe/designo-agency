import React from 'react'
import Logo from './Logo'
import { menuData } from '../data/menuData'
import Nav from './Nav'
import styles from '../styles/modules/Footer.module.css'
import Link from 'next/link'
import Image from 'next/image'

const Footer = () => {
    return (
        <footer className={styles.footer} >

            <div className='page-container' >

                <div className={styles.footerHeader} >
                    <Logo  scroll={true} href={menuData.homeLink} src={ menuData.footer.logo} alt={menuData.footer.alt}  />

                    <Nav />
                </div>

                <div className={styles.footerContent} >

                    <div className={styles.footerAddress} >
                        <p>{menuData.address.office}</p>
                        <p>{menuData.address.street}</p>
                        <p>{menuData.address.city}</p>
                        
                    </div>

                    <div className={styles.footerContact} >
                        <p>{menuData.contact.title}</p>
                        <p> P: {menuData.contact.phone}</p>
                        <p> M: {menuData.contact.email}</p>
                    </div>

                    <div className={styles.footerSocial} >
                        {menuData.social.map( (social,index) => (
                            <Link href={social.link} key={index} ><a>
                                <Image src={social.icon} alt={social.label} />
                            </a></Link>
                        ) )}
                    </div>

                </div>

            </div>
            
            
        </footer>
    )
}

export default Footer

