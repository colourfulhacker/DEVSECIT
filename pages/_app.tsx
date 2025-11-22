'use client';

import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { useEffect, useState } from 'react'
import { ThemeProvider } from '../context/ThemeContext'
import { FloatingCTA } from '../components/FloatingCTA'
import { HostingPromoPopup } from '../components/HostingPromoPopup'

function MyApp({ Component, pageProps }: AppProps) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <ThemeProvider>
      <Component {...pageProps} />
      {mounted && <HostingPromoPopup />}
      {mounted && <FloatingCTA />}
    </ThemeProvider>
  )
}

export default MyApp
