// import Cursor from '@/components/shared/Cursor'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { Inter } from 'next/font/google'
import AnimatedCursor from "react-animated-cursor"
import { GoogleTagManager } from '@next/third-parties/google'

// If loading a variable font, you don't need to specify the font weight
const inter = Inter({ subsets: ['latin'] })
 
export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={inter.className}>
      <AnimatedCursor 
        color='151, 243, 107'
        trailingSpeed={12}
        
      />
      <GoogleTagManager gtmId="GTM-TFS4NJLW" />
      <Component {...pageProps} />
    </main>
  )
}
