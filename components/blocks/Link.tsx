import { default as NextLink } from "next/link";
import { Link as ChakraLink } from "@chakra-ui/react";
import React from "react";

function Link(props: {
  children: React.ReactNode;
  href: string;
  isExternal?: boolean;
  onClick?: any;
}) {
  if (props.isExternal) {
    return (
      <ChakraLink onClick={props.onClick} href={props.href}>
        {props.children}
      </ChakraLink>
    );
  } else {
    return (
      <NextLink href={props.href} onClick={props.onClick} passHref>
        <ChakraLink onClick={props.onClick}>{props.children}</ChakraLink>
      </NextLink>
    );
  }
}

export default Link;
