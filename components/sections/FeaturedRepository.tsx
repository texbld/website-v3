import { Box, Heading } from "@chakra-ui/react";
import React from "react";
import Link from "@/blocks/Link";

export default function FeaturedRepository(props: {
  owner: string;
  repository: string;
  children: React.ReactNode;
}) {
  const bg = "gray.700";
  return (
    <Box borderRadius={5} shadow={"lg"} p={3} my={2} bgColor={bg} maxW={500}>
      <Link
        href={`https://github.com/${props.owner}/${props.repository}`}
        isExternal
      >
        <Heading fontSize={30} m={2}>
          {props.owner}/{props.repository}
        </Heading>
      </Link>
      <Box my={3}>{props.children}</Box>
    </Box>
  );
}
