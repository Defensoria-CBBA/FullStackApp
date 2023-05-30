import NavBar from '@/components/navbar'
import Footer from '@/components/footer'
import '@/styles/globals.css'
import { useRouter } from 'next/router'


import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {

  const router = useRouter();
  const showHeader = router.pathname === '/login' ? false : true;

  return (
    <div className="div">
      <NavBar></NavBar>
      <Component {...pageProps} />
      <Footer></Footer>
    </div>
  )
  
    
}
