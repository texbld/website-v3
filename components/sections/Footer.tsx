import React from "react";
import { Box, Center, IconButton, Text } from "@chakra-ui/react";
import { FaGithub, FaPython } from "react-icons/fa";
import Link from "@/blocks/Link";

export default function Footer() {
  const year = new Date().getFullYear();
  const textcolor = "gray.400";
  return (
    <Center gap={3} p={5}>
      <Link href="https://github.com/texbld" isExternal aria-label="GitHub">
        <Box fontSize={25}>
          <FaGithub />
        </Box>
      </Link>
      <Link
        href="https://pypi.org/project/texbld/"
        isExternal
        aria-label="PyPi"
      >
        <Text fontSize={25}>
          <FaPython />
        </Text>
      </Link>
      <Text color={textcolor}>
        &copy; 2022-{year} <Link href="https://junickim.me">Juni C. Kim </Link>
      </Text>
    </Center>
  );
}
