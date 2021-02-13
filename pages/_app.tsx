import React from 'react'
import App from 'next/app'
import Head from 'next/head'
import { appWithTranslation } from '../i18n'

import '../styles/index.css'
import '../styles/common.css'
import '../styles/bubble.css'
import '../styles/devicon.min.css'

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props
    return (
      <>
        <Head>
          <meta name="viewport" content="width=device-width" />
          <title>rokumura | portfolio</title>
        </Head>
        <Component {...pageProps} />
      </>
    )
  }
}

export default appWithTranslation(MyApp)
