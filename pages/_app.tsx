import '../styles/globals.css'
import type { AppProps } from 'next/app'
import dynamic from 'next/dynamic'
import HostingPromoPopup from '../components/HostingPromoPopup'
import { ThemeProvider } from '../context/ThemeContext'

const FloatingCTA = dynamic(() => import('../components/FloatingCTA').then(mod => ({ default: mod.FloatingCTA })), {
  ssr: false
})

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <Component {...pageProps} />
      <HostingPromoPopup />
      <FloatingCTA />
    </ThemeProvider>
  )
}

export default MyApp
