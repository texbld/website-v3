import { Box, Center, Divider, Flex, useMediaQuery } from '@chakra-ui/react';
import React from 'react';
import Hamburger from '../blocks/Hamburger';
import NavLinks from '../blocks/Navlinks';
import LinkList from '../linklist';

export default function Docs(props: { links: LinkList }) {
	const [isLarge] = useMediaQuery('(min-width: 600px)');
	const links: LinkList = [{ name: 'Docs', href: '/docs' }, ...props.links];
	return (
		<>
			<Flex gap={3} m={2}>
				{isLarge ? <NavLinks links={links} /> : <Hamburger links={links} />}
			</Flex>
			<Divider />
		</>
	);
}
