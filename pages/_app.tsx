import '../styles/globals.css'
import type { AppProps } from 'next/app'
import HostingPromoPopup from '../components/HostingPromoPopup'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
      <HostingPromoPopup />
    </>
  )
}

export default MyApp
