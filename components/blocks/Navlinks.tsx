import React from 'react';
import LinkList from '../linklist';
import { Text } from '@chakra-ui/react';
import Link from './Link';

export default function NavLinks(props: { links: LinkList }) {
	return (
		<>
			{props.links.map((link) => (
				<Link href={link.href} isExternal={link.isExternal} key={link.name}>
					<Text fontWeight={'bold'} fontSize={18}>
						{link.name}
					</Text>
				</Link>
			))}
		</>
	);
}
