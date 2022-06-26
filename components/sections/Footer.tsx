import React from "react";
import { Center, Link, Text, useColorModeValue, Icon } from "@chakra-ui/react";
import { FaGithub, FaPython } from "react-icons/fa";

export default function Footer() {
  const year = new Date().getFullYear();
  const textcolor = useColorModeValue("gray.500", "gray.400");
  return (
    <Center gap={3} p={5}>
      <Link href="https://github.com/texbld" isExternal fontSize={25}>
        <FaGithub />
      </Link>
      <Link href="https://pypi.org/project/texbld/" isExternal fontSize={25}>
        <FaPython />
      </Link>
      <Text color={textcolor}>&copy; 2022-{year} Juni C. Kim</Text>
    </Center>
  );
}
