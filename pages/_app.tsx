import type { AppProps } from "next/app";
import Layout from "@/layouts/Layout";
import { ChakraProvider, CSSReset, extendTheme } from "@chakra-ui/react";
import Head from "next/head";
import "@fontsource/fira-sans/300.css"
import "@fontsource/fira-sans/400.css"
import "@fontsource/fira-sans/700.css"
import "@fontsource/fira-sans/900.css"

const theme = extendTheme({
  config: {
    initialColorMode: "light",
  },
  fonts: {
    heading: `'Fira Sans', sans-serif`,
    body: `'Fira Sans', sans-serif`,
  }
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Head>
        <meta
          name="description"
          content="TeXbld is a build tool that uses a simple configuration syntax and the docker virtualization technology to ensure reproducible builds across different operating systems and environments."
        />
        <link rel="shortcut icon" href="/favicon.svg" />
      </Head>
      <Layout>
        <CSSReset />
        <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
  );
}
export default MyApp;
