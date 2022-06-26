import {
  Code,
  Divider,
  Heading,
  List,
  ListItem,
  OrderedList,
  Text,
} from "@chakra-ui/react";
import { MDXProvider } from "@mdx-js/react";
import React from "react";

function H1(props: { children: React.ReactNode }) {
  return (
    <Heading fontSize={40} fontWeight="bold" m={2}>
      {props.children}
    </Heading>
  );
}

function H2(props: { children: React.ReactNode }) {
  return (
    <Text fontSize={30} fontWeight="bold" m={2}>
      {props.children}
    </Text>
  );
}

function H3(props: { children: React.ReactNode }) {
  return (
    <Heading fontSize={20} fontWeight="bold" m={2}>
      {props.children}
    </Heading>
  );
}

function H4(props: { children: React.ReactNode }) {
  return (
    <Heading fontSize={15} fontWeight="bold" m={2}>
      {props.children}
    </Heading>
  );
}

function P(props: { children: React.ReactNode }) {
  return <Text m={2}>{props.children}</Text>;
}

function CODE(props: { children: React.ReactNode }) {
  return <Code colorScheme={"cyan"}>{props.children}</Code>;
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
  hr: () => <Divider />,
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
