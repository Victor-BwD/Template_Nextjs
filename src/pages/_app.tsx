import { AppProps } from 'next/app'
import { ChakraProvider } from "@chakra-ui/react" // ChakraProvider is a context used to all app get info from chakra
import { theme } from '../styles/theme'

function MyApp({ Component, pageProps }: AppProps) {
  return(
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  ) 
}

export default MyApp
