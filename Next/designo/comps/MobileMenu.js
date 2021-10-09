import React from 'react'
import Nav from './Nav'
import Styles from '../styles/Header.module.css'


const MobileMenu = () => {
    return (
        <div className={Styles.mobileMenu} >
            <div>
                <div className="page-container">
                    <Nav />
                </div>
            </div>      
        </div>
    )
}

export default MobileMenu
