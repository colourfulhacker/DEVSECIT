import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html suppressHydrationWarning lang="en">
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=Lexend:wght@300;400;500;600;700;800&display=swap" rel="stylesheet" />
        <meta name="theme-color" content="#0f172a" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="format-detection" content="telephone=no" />
      </Head>
      <body>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  const theme = localStorage.getItem('theme') || 'dark';
                  document.documentElement.setAttribute('data-theme', theme);
                  if (theme === 'light') document.documentElement.classList.add('light');
                } catch (e) {
                  document.documentElement.setAttribute('data-theme', 'dark');
                }
              })()
            `,
          }}
        />
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
