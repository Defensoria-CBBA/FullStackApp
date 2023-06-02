import NavBar from '@/components/navbar'
import Layout from '@/components/layout'
import Footer from '@/components/footer'
import '@/styles/globals.css'
import { useRouter } from 'next/router'


import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {


  return (
    <div className="div">
      <Layout></Layout>
      <Component {...pageProps} />
      <Footer></Footer>
    </div>
  )
  
    
}
