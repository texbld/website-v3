import {
  Heading,
  useColorModeValue,
  Box,
  Center,
  Button,
  VStack,
} from "@chakra-ui/react";
import Card from "@/sections/Card";
import { useRouter } from "next/router";
import React from "react";
import { FaCloudUploadAlt, FaDocker, FaLock } from "react-icons/fa";

export default function Index() {
  const blue = useColorModeValue("cyan.400", "cyan.700");
  const router = useRouter();
  return (
    <Box m={2}>
      <Center marginBottom={5}>
        <Heading
          fontWeight={"bold"}
          fontSize={40}
          maxWidth="50rem"
          textAlign={"center"}
        >
          A Modern Build Tool for Your Papers.
        </Heading>
      </Center>
      <Center gap={3}>
        <Button
          bg={blue}
          onClick={(e: any) => {
            e.preventDefault();
            router.push("/docs/");
          }}
        >
          {" "}
          Get Started
        </Button>
      </Center>
      <Center>
        <Box>
          <Card title="Isolated." icon={<FaDocker />}>
            TeXbld uses docker, so that you never have to worry about installing
            exotic packages on your system.
          </Card>
          <Card title="Immutable." icon={<FaLock />}>
            Checks and Hashes ensure that your image is built the same way,
            every time, no matter whose computer it is on.
          </Card>
          <Card title="Shareable." icon={<FaCloudUploadAlt />}>
            Want to make your images accessible to others? Just upload them to a
            GitHub repository, and anyone using your image will experience
            consistent builds.
          </Card>
        </Box>
      </Center>
    </Box>
  );
}
