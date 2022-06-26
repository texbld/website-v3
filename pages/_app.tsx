import type { AppProps } from 'next/app';
import Layout from '@/layouts/Layout';
import { ChakraProvider, CSSReset } from '@chakra-ui/react';

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<ChakraProvider>
			<Layout>
				<CSSReset />
				<Component {...pageProps} />
			</Layout>
		</ChakraProvider>
	);
}
export default MyApp;
