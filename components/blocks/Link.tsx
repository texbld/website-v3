import { default as NextLink } from "next/link";
import { Link as ChakraLink, Text } from "@chakra-ui/react";
import React from "react";

function Link(props: {
  children: React.ReactNode;
  href: string;
  isExternal?: boolean;
  onClick?: any;
  "aria-label"?: string;
}) {
  if (props.isExternal) {
    return (
      <ChakraLink
        onClick={props.onClick}
        href={props.href}
        aria-label={props["aria-label"]}
      >
        <Text as="u">{props.children}</Text>
      </ChakraLink>
    );
  } else {
    return (
      <NextLink href={props.href} onClick={props.onClick} passHref>
        <ChakraLink onClick={props.onClick} aria-label={props["aria-label"]}>
          <Text as="u">{props.children}</Text>
        </ChakraLink>
      </NextLink>
    );
  }
}

export default Link;
