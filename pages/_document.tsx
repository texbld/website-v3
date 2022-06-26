import { ColorModeScript } from '@chakra-ui/react';
import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
	return (
		<Html>
			<Head></Head>
			<body>
				<ColorModeScript />
				<Main />
				<NextScript />
			</body>
		</Html>
	);
}
