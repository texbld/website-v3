import {Box, Center, Flex, Text, useColorModeValue} from "@chakra-ui/react";
import React from "react";

export default function Card(props: {
  icon: React.ReactNode;
  title: string;
  children?: React.ReactNode;
}) {
  const gray = useColorModeValue("gray.200", "gray.700");
  const blue = useColorModeValue("cyan.400", "cyan.700");
  return (
    <Box m={5} p={2} bg={gray} maxWidth="24rem" borderRadius={5} shadow={"lg"}>
      <Flex m={2} gap={3} justify="left">
        <Center borderRadius={5} padding={1} fontSize={25} bg={blue}>
          {props.icon}
        </Center>
        <Text fontSize={25} fontWeight="bold">
          {props.title}
        </Text>
      </Flex>
      <Box m={2}>{props.children}</Box>
    </Box>
  );
}
