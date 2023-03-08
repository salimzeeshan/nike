import Footer from '@/components/footer'
import Navbar from '@/components/navbar'
import '@/styles/globals.css'
import { AuthProvider } from '@/context/authContext'
import { Box, ChakraProvider } from '@chakra-ui/react'

export default function App({ Component, pageProps }) {
  return (
    <AuthProvider>
      <ChakraProvider>
        <Navbar />
        <Component {...pageProps} />
        <Footer />
      </ChakraProvider>
    </AuthProvider>
  )
}
