import '../styles/globals.css'
import type { AppProps } from 'next/app'
import dynamic from 'next/dynamic'
import { ThemeProvider } from '../context/ThemeContext'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'

const FloatingCTA = dynamic(() => import('../components/FloatingCTA').then(mod => ({ default: mod.FloatingCTA })), {
  ssr: false
})

const HostingPromoPopup = dynamic(() => import('../components/HostingPromoPopup').then(mod => ({ default: mod.HostingPromoPopup })), {
  ssr: false
})

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <Component {...pageProps} />
      <HostingPromoPopup />
      <FloatingCTA />
      <Analytics />
      <SpeedInsights />
    </ThemeProvider>
  )
}

export default MyApp

