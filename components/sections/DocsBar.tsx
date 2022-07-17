import { Box, Center, Divider, Flex, useMediaQuery } from "@chakra-ui/react";
import React from "react";
import Hamburger from "../blocks/Hamburger";
import NavLinks from "../blocks/Navlinks";
import LinkList from "../linklist";

export default function Docs(props: { links: LinkList }) {
  const [isSmall] = useMediaQuery("(max-width: 600px)");
  const links: LinkList = [{ name: "Docs", href: "/docs" }, ...props.links];
  const bg = "gray.600";
  return (
    <>
      <Flex
        gap={3}
        m={2}
        p={2}
        borderColor={bg}
        borderWidth={2}
        borderRadius={3}
      >
        {!isSmall ? <NavLinks links={links} /> : <Hamburger links={links} />}
      </Flex>
      <Divider />
    </>
  );
}
