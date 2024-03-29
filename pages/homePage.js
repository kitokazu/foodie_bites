import { Inter } from '@next/font/google'
import Head from 'next/head'
import Header from '@/components/Header'
import Home from '../components/Home'
import Modal from '@/components/Modal'

const inter = Inter({ subsets: ['latin'] })

export default function homePage() {
  return (
    <>
      <Head>
        <title>Home</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Home />
      <Modal />
    </>
  )
}
