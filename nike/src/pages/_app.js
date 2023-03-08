import Footer from '@/components/footer'
import Navbar from '@/components/navbar'
import '@/styles/globals.css'
import { AuthProvider } from '@/context/authContext'
import { Box, ChakraProvider } from '@chakra-ui/react'
import { useRouter } from 'next/router'


export default function App({ Component, pageProps }) {
  const router = useRouter()
  return (
    <AuthProvider>
      <ChakraProvider>
      { router.pathname !== '/login' && router.pathname !== '/signup' && <Navbar />}
        <Component {...pageProps} />
        { router.pathname !== '/login' && router.pathname !== '/signup' && <Footer />}
      </ChakraProvider>
    </AuthProvider>
  )
}
