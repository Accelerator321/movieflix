import { Mulish } from 'next/font/google'
import './globals.css'
import Header from './components/Header';
import Footer from './components/Footer';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter';

const mulish = Mulish({
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  subsets: ['latin'],
  display: 'swap'
})

export const metadata = {
  title: 'MovieFlix',
  description: 'Website where you can get movie info',
}
export default function RootLayout({ children }) {
  return (
    <html lang="en" className={mulish.className}>

      <body >
      <AppRouterCacheProvider options={{ enableCssLayer: true }}>
        <Header />
        {children}
        <Footer />
        </AppRouterCacheProvider>
        </body>
    </html>
  )
}
