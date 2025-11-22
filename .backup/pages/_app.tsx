import '../styles/globals.css'
import type { AppProps } from 'next/app'
import dynamic from 'next/dynamic'
import { ThemeProvider } from '../context/ThemeContext'
import { MountedOnly } from '../components/MountedOnly'

const FloatingCTA = dynamic(() => import('../components/FloatingCTA').then(mod => ({ default: mod.FloatingCTA })), {
  ssr: false,
  loading: () => null
})

const HostingPromoPopup = dynamic(() => import('../components/HostingPromoPopup').then(mod => ({ default: mod.HostingPromoPopup })), {
  ssr: false,
  loading: () => null
})

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <MountedOnly>
        <Component {...pageProps} />
      </MountedOnly>
      <HostingPromoPopup />
      <FloatingCTA />
    </ThemeProvider>
  )
}

export default MyApp

