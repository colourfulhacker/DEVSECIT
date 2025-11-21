import '../styles/globals.css'
import type { AppProps } from 'next/app'
import HostingPromoPopup from '../components/HostingPromoPopup'
import { ThemeProvider } from '../context/ThemeContext'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <Component {...pageProps} />
      <HostingPromoPopup />
    </ThemeProvider>
  )
}

export default MyApp
