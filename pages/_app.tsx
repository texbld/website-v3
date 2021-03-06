import type { AppProps } from "next/app";
import Layout from "@/layouts/Layout";
import { ChakraProvider, CSSReset, extendTheme } from "@chakra-ui/react";
import Head from "next/head";
import "../globals.css";

const theme = extendTheme({
  config: {
    initialColorMode: "light",
  },
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
