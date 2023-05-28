// import Head from 'next/head';
import Greeting from '../components/Greeting';
import Projects from '../components/Projects';
import WhatIdo from '../components/WhatIdo';
import Footer from '../components/Footer';

import { GET_REPOSITORIES, GET_USERINFO } from '../apollo/query';
import { initializeApollo, addApolloState } from '../apollo/client';

import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>Burak Akça | Homepage</title>
        <meta property='og:title' content='Burak Akça | Homepage' key='title' />
        <link
          rel='apple-touch-icon'
          sizes='180x180'
          href='/manifest/apple-touch-icon.png'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='32x32'
          href='/manifest/favicon-32x32.png'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='16x16'
          href='/manifest/favicon-16x16.png'
        />
        <link rel='manifest' href='/manifest/site.webmanifest' />
        <link
          rel='mask-icon'
          href='/manifest/safari-pinned-tab.svg'
          color='#5bbad5'
        />
        <meta name='msapplication-TileColor' content='#da532c' />
        <meta name='theme-color' content='#5b21b6' />
        <meta http-equiv="Content-Security-Policy" content="default-src 'self'; https://vitals.vercel-insights.com;" />
      </Head>
      <Greeting />
      <WhatIdo />
      <Projects />
      <Footer />
    </>
  );
}

export async function getStaticProps() {
  const apolloClient = initializeApollo();

  await apolloClient.query({
    query: GET_REPOSITORIES,
  });
  await apolloClient.query({
    query: GET_USERINFO,
  });

  return addApolloState(apolloClient, {
    props: {},
    revalidate: 7200,
  });
}
