import React from 'react'
import HeroSection from './components/HeroSection'
import Head from 'next/head'

export default function main() {
  return (
    <>
      <Head>
        // <meta name="viewport" content="viewport-fit=cover" />
     <meta name="viewport" content={{width:{"device-width"}, initialScale:{1.0}, maximumScale:{1.0}, userScalable:{0}}} />
      </Head>

    <HeroSection title={"LETS'S WATCH MOVIE TOGETHER"} imageUrl={"/about1.svg"}/>
    </>
  )
}
