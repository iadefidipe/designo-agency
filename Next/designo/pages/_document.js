   
import Document, { Html, Head, Main, NextScript } from "next/document";
import { ServerStyleSheet } from 'styled-components'

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet()
    const originalRenderPage = ctx.renderPage

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        })

      const initialProps = await Document.getInitialProps(ctx)
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      }
    } finally {
      sheet.seal()
    }
  }

  render() {
    return (
      <Html lang="en">
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
          {/* <!-- THEME COLOR FOR CHROME MOBILE BROWSERS --> */}
          
        <meta name="theme-color" content="#E7816B"/>
          <meta name="twitter:card" content="summary" key="twcard" />
          <meta name="twitter:creator" content="designo" key="twhandle" />
          <meta
            property="og:url"
            content="https://designo-agency-psi.vercel.app/"
            key="ogurl"
          />
          <meta
            property="og:image"
            content="https://designo-agency-psi.vercel.app/preview.jpg"
            key="ogimage"
          />
          <meta property="og:site_name" content="designo" key="ogsitename" />
          <meta property="og:image:width" content="1200" />
          <meta property="og:image:height" content="630" />
          <link rel="apple-touch-icon" href="/favicon.png" />
          <link rel="manifest" href="%PUBLIC_URL%/manifest.json" />
          <link
            href="https://fonts.googleapis.com/css2?family=Manrope:wght@200;400;500;700&display=swap"
            rel="stylesheet"
          />
          <link
            rel="stylesheet"
            href="https://use.fontawesome.com/releases/v5.15.4/css/all.css"
            integrity="sha384-DyZ88mC6Up2uqS4h/KRgHuoeGwBcD4Ng9SiP4dIRy0EXTlnuz47vAwmeGwVChigm"
            crossOrigin="anonymous"
          ></link>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

