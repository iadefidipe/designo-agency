import React from 'react'
import Footer from './Footer'
import Header from './Header'
import {ThemeProvider} from 'styled-components'
import theme from '../data/theme'


const Layout = ({children}) => {
    return (
        
            <ThemeProvider theme={theme} >
                <div className='page-container' >
                    <Header />
                    {children}
                </div>
                <Footer />
            </ThemeProvider>
        
        
    )
}

export default Layout
