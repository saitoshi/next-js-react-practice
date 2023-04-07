import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
html, body, textarea {
  padding: 0; margin: 0; font-family: sans-seriff;
}`;
export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta key='charset' name='charset' content='utf-8' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <meta property='og: locale' content='ja_JP' />
        <meta property='or:type' content='websote' />
      </Head>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  );
}
