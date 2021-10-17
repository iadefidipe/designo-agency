import Layout from '../comps/Layout'
import Head from 'next/head'

function MyApp({ Component, pageProps }) {


    return (  
        <Layout>
          <Head>
            <title> Designo Agency</title>
            
            <link href="https://fonts.googleapis.com/css2?family=Jost:wght@400;500&display=swap" rel="stylesheet" />
          </Head>
          <Component {...pageProps} />
        </Layout>
    )
}

export default MyApp


// import { createGlobalStyle, ThemeProvider } from 'styled-components'

// const GlobalStyle = createGlobalStyle`
//   body {
//     margin: 0;
//     padding: 0;
//     box-sizing: border-box;
//   }
// `

// const theme = {
//   colors: {
//     primary: '#0070f3',
//   },
// }

// export default function App({ Component, pageProps }) {
//   return (
//     <>
//       <GlobalStyle />
//       <ThemeProvider theme={theme}>
//         <Component {...pageProps} />
//       </ThemeProvider>
//     </>
//   )
// }