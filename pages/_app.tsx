import type { AppProps } from 'next/app'
import { GlobalTheme, GlobalStyle } from '@/styles/globals'
import { ThemeProvider } from 'styled-components'

import Head from 'next/Head'

function App({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <ThemeProvider theme={GlobalTheme}>
      <Head>
        <title>Heril Saha's Portfolio</title>
        <link
          rel="stylesheet"
          href="https://cdn.rawgit.com/mfd/09b70eb47474836f25a21660282ce0fd/raw/e06a670afcb2b861ed2ac4a1ef752d062ef6b46b/Gilroy.css"
        />
      </Head>
      <GlobalStyle />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default App
