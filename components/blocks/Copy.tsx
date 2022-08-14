import { CopyIcon } from "@chakra-ui/icons";
import { Text, Flex, Button, Box } from "@chakra-ui/react";
import copy from "copy-to-clipboard";
import React from "react";

export default function Copy(props: { children?: string }) {
  return (
    <Flex justifyContent={"left"} wrap={"wrap"} marginBottom={5}>
      <Box borderRadius={5} padding={2} bg={"blue.100"} fontSize={12}>
        {props.children}
      </Box>
      <Button onClick={() => copy(props.children || "")} marginLeft={5}>
        <CopyIcon />
      </Button>
    </Flex>
  );
}
