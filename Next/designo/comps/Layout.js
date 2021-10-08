import React from 'react'
import Footer from './Footer'
import Header from './Header'


const Layout = ({children}) => {
    return (
        <>
            <div className='page-container' >
                <Header />

                {children}
            </div>

            <Footer />
        </>
        
    )
}

export default Layout
