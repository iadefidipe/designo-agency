import Layout from "../comps/Layout"
import Head from "next/head"

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Head>
        <meta charset='UTF-8' />
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />

        <link
          rel='icon'
          type='image/png'
          sizes='32x32'
          href='/favicon-32x32.png'
        />

        <title>Designo - Software Development Agency</title>
        <meta
          name='description'
          content='Designo is a world-class software development agency that focuses on building innovative tech solutions like web apps, mobile apps and graphics design.'
        />
        <meta
          name='keyword'
          content='web, software agency, web design, graphic design'
        />

        {/* <!-- OPEN GRAPH TAGS --> */}
        <meta
          property='og:title'
          content='Designo - Software Development Agency'
        />
        <meta
          property='og:description'
          content='Designo is a world-class software development agency that focuses on building innovative tech solutions like web apps, mobile apps and graphics design.'
        />
        <meta
          property='og:url'
          content='https://designo-agency-psi.vercel.app/'
        />
        <meta
          property='og:image'
          content='https://designo-agency-psi.vercel.app/public/preview.jpg'
        />
        <meta property='og:image:width' content='1200' />
        <meta property='og:image:height' content='630' />

        {/* <!-- THEME COLOR FOR CHROME MOBILE BROWSERS --> */}
        <meta name="theme-color" content="#E7816B"/>

        <link
          href='https://fonts.googleapis.com/css2?family=Jost:wght@400;500&display=swap'
          rel='stylesheet'
        />
        
      </Head>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp

