import React from "react";
import {
  useDisclosure,
  Box,
  Button,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  Text,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import Link from "./Link";
import LinkList from "../linklist";

export default function Hamburger(props: { links: LinkList }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Box>
        <Button onClick={onOpen}>
          <HamburgerIcon />
        </Button>
      </Box>
      <Drawer isOpen={isOpen} placement="left" onClose={onClose} size="xs">
        <DrawerOverlay width={10} />
        <DrawerContent p={3}>
          <DrawerCloseButton />
          <DrawerHeader>
            <Link href="/" onClick={onClose}>
              <Text fontSize={18}>TeXbld</Text>
            </Link>
          </DrawerHeader>
          <DrawerBody>
            {props.links.map((link) => (
              <Link
                href={link.href}
                isExternal={link.isExternal}
                onClick={onClose}
                key={link.name}
              >
                <Text fontWeight={"bold"}>{link.name}</Text>
              </Link>
            ))}
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}
