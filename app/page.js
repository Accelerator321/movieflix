import React from 'react'
import HeroSection from './components/HeroSection'
import Head from 'next/head'

export default function main() {
  return (
    <>
      <Head>
        <meta name="viewport" content="viewport-fit=cover" />
      </Head>

    <HeroSection title={"LETS'S WATCH MOVIE TOGETHER"} imageUrl={"/about1.svg"}/>
    </>
  )
}
