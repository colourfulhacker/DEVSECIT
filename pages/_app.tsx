import '../styles/globals.css'
import type { AppProps } from 'next/app'
import dynamic from 'next/dynamic'
import { ReactNode } from 'react'

const ThemeProvider = dynamic<{ children: ReactNode }>(
  () => import('../context/ThemeContext').then(mod => mod.ThemeProvider),
  {
    ssr: false,
    loading: () => null
  }
)

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
      <Component {...pageProps} />
      <HostingPromoPopup />
      <FloatingCTA />
    </ThemeProvider>
  )
}

export default MyApp

