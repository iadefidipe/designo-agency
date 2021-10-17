import React from 'react'
import Footer from './Footer'
import Header from './Header'
import {ThemeProvider} from 'styled-components'
import GlobalStyles from '../styles/page-style/Globalstyles';


import theme from '../data/theme'


const Layout = ({children}) => {
    return (
        
            <ThemeProvider theme={theme} >
                
                <GlobalStyles />
                <Header />
                {children}         
                <Footer />
            </ThemeProvider>
        
        
    )
}

export default Layout
