import {
	Code,
	Divider,
	Heading,
	List,
	ListItem,
	OrderedList,
	Text,
} from '@chakra-ui/react';
import { MDXProvider } from '@mdx-js/react';
import React from 'react';

function H1(props: { children: React.ReactNode }) {
	return (
		<>
			<Heading
				fontSize={40}
				fontWeight='extrabold'
				m={3}
				marginTop={6}
				marginBottom={6}
			>
				{props.children}
			</Heading>
			<Divider marginTop={5} marginBottom={5} />
		</>
	);
}

function H2(props: { children: React.ReactNode }) {
	return (
		<>
			<Heading fontSize={25} fontWeight='semibold' m={3} marginTop={4}>
				{props.children}
			</Heading>
			<Divider marginTop={5} marginBottom={5} />
		</>
	);
}

function H3(props: { children: React.ReactNode }) {
	return (
		<Heading fontSize={15} fontWeight='semibold' m={2}>
			{props.children}
		</Heading>
	);
}

function H4(props: { children: React.ReactNode }) {
	return (
		<Heading fontSize={8} fontWeight='semibold' m={2}>
			{props.children}
		</Heading>
	);
}

function P(props: { children: React.ReactNode }) {
	return <Text m={2}>{props.children}</Text>;
}

function CODE(props: { children: React.ReactNode }) {
	return <Code colorScheme={'gray'}>{props.children}</Code>;
}

function Ul(props: { children: React.ReactNode }) {
	return (
		<List spacing={1} m={2}>
			{props.children}
		</List>
	);
}

function Ol(props: { children: React.ReactNode }) {
	return (
		<OrderedList spacing={1} m={2}>
			{props.children}
		</OrderedList>
	);
}

function Li(props: { children: React.ReactNode }) {
	return <ListItem>{props.children}</ListItem>;
}

const components = {
	h1: H1,
	h2: H2,
	h3: H3,
	h4: H4,
	hr: () => <Divider marginTop={5} marginBottom={5} />,
	p: P,
	code: CODE,
	ul: Ul,
	ol: Ol,
	li: Li,
};

const Provider = (props: { children: React.ReactNode }) => (
	<MDXProvider components={components as any}>{props.children}</MDXProvider>
);

export default Provider;
