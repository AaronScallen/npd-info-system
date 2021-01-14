import { ThemeProvider, CSSReset } from "@chakra-ui/react";
import { AuthProvider } from '../lib/auth'
import theme from '../styles/theme'

const App = ({ Component, pageProps }) => {
  return (
    <ThemeProvider theme={theme}>
    <AuthProvider>
      <Component {...pageProps} />
    </AuthProvider>
    </ThemeProvider>
  )
}
export default App