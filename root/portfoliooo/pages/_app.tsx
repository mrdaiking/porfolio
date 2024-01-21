import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { ThemeProvider } from "next-themes";
import { appWithTranslation } from 'next-i18next'
// import nextI18NextConfig from '../next-i18next.config';


function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider defaultTheme="light" attribute="class">
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

// Export the App component with appWithTranslation
export default appWithTranslation(App);
