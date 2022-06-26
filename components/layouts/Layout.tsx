import React from 'react';
import Footer from '../sections/Footer';
import Navbar from '../sections/Navbar';
import Head from 'next/head';

import siteconfig from '../../site-config';
import { Center, Container } from '@chakra-ui/react';
import MDComponents from '../blocks/MDComponents';

export default function Layout(props: {
	children: React.ReactNode;
	title?: string;
}) {
	return (
		<>
			<Head>
				<title>{props.title || 'TeXbld'}</title>
			</Head>
			<MDComponents>
				<Navbar links={siteconfig.navbarlinks} />
				<Center m={3}>
					<Container maxW={900}>{props.children}</Container>
				</Center>
				<Footer />
			</MDComponents>
		</>
	);
}
