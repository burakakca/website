import '../styles/globals.css';
import useDark from '../hooks/useDark';
import { ThemeProvider } from '../contexts/ThemeContext';
import Header from '../components/Header';
import ScrollTop from '../components/ScrollTop';
import { useApollo } from '../apollo/client';

import type { AppProps } from 'next/app';
import { Analytics } from '@vercel/analytics/react';
import { useRouter } from "next/router"
import clsx from 'clsx';
import { ApolloProvider } from '@apollo/client';

function MyApp({ Component, pageProps }: AppProps) {
  const { isDark, setIsDark } = useDark();
  const apolloClient = useApollo(pageProps.initialApolloState);

  const changeTheme = () => {
    setIsDark(!isDark);
  };

  const router = useRouter();

  console.log(router.pathname);

  return (
    <ThemeProvider value={{ isDark: isDark, changeTheme: changeTheme }}>
      <div
        className={clsx(
          isDark ? 'bg-theme-dark dark text-white' : null,
          'font-montserrat'
        )}
      >
        {router.pathname === "/404" ? <></> : <Header /> }
        <ApolloProvider client={apolloClient}>
          <Component {...pageProps} />
          <Analytics />
        </ApolloProvider>
        <ScrollTop />
      </div>
    </ThemeProvider>
  );
}

export default MyApp;
