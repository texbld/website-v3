import React from 'react';

import { Flex, Center, Text, useMediaQuery } from '@chakra-ui/react';
import Toggle from '../blocks/Toggle';
import LinkList from '../linklist';
import NavLinks from '../blocks/Navlinks';
import Hamburger from '../blocks/Hamburger';
import Link from '../blocks/Link';

export default function Navbar(props: { links: LinkList }) {
	const [isSmall] = useMediaQuery('(max-width: 600px)');
	return (
		<Flex
			paddingRight='5'
			paddingLeft='5'
			paddingTop='2'
			paddingBottom='2'
			gap={5}
			justify='space-between'
		>
			<Center gap={3}>
				<Link href='/'>
					<Text fontWeight={'bold'} fontSize={25}>
						TeXbld
					</Text>
				</Link>
				<Toggle />
			</Center>
			<Center gap={3}>
				{isSmall ? (
					<Hamburger links={props.links} />
				) : (
					<NavLinks links={props.links} />
				)}
			</Center>
		</Flex>
	);
}
