import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head >
        <meta property="og:title" content="Jaskaran's Space" />
        <meta property="og:description" content="I aim to create the next generation of business portfolios and enhance web experiences." />
        <meta name="twitter:title" content="Jaskaran's Space" />
        <meta name="twitter:description" content="I aim to create the next generation of business portfolios and enhance web experiences." />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}