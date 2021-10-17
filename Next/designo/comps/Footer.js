import React from 'react'
import Logo from './Logo'
import { menuData } from '../data/menuData'
import Nav from './Nav'
import Link from 'next/link'
import Image from 'next/image'
import { FooterContent, FooterHeader, StyledFooter, FooterAddress, FooterContact, FooterSocial, FooterContainer } from '../styles/component-styles/footer.style'

const Footer = () => {
    return (
        
        <StyledFooter  >


                <FooterContainer>
                    <FooterHeader   >
                        <Logo  scroll={true} href={menuData.homeLink} src={ menuData.footer.logo} alt={menuData.footer.alt}  />
                        <Nav />
                    </FooterHeader>
                    
                    <FooterContent>
                        <FooterAddress >
                            <p>{menuData.address.office}</p>
                            <p>{menuData.address.street}</p>
                            <p>{menuData.address.city}</p>
                    
                        </FooterAddress>
                        <FooterContact  >
                            <p>{menuData.contact.title}</p>
                            <p> P: {menuData.contact.phone}</p>
                            <p> M: {menuData.contact.email}</p>
                        </FooterContact>
                        <FooterSocial  >
                            {menuData.social.map( (social,index) => (
                                <Link href={social.link} key={index} ><a>
                                    <Image src={social.icon} alt={social.label} />
                                </a></Link>
                            ) )}
                        </FooterSocial >
                    </FooterContent>
                </FooterContainer>

            
            
            
        </StyledFooter>
    )
}

export default Footer

