import { Heading, Box, Center, Button, Flex, Text } from "@chakra-ui/react";
import Card from "@/sections/Card";
import { useRouter } from "next/router";
import React from "react";
import { FaCloudUploadAlt, FaDocker, FaLock } from "react-icons/fa";
import { Image } from "@chakra-ui/react";
import Link from "@/blocks/Link";

export default function Index() {
  const blue = "cyan.400";
  const router = useRouter();
  return (
    <Box m={2}>
      <Center marginBottom={5}>
        <Heading
          fontWeight={"extrabold"}
          fontSize={60}
          maxWidth="50rem"
          textAlign={"center"}
          bgGradient="linear(to-r, cyan.400, black)"
          bgClip="text"
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
        <Flex flexWrap={"wrap"} justifyContent={"center"}>
          <Card title="Isolated." icon={<FaDocker />}>
            TeXbld uses docker, so that you never have to worry about installing
            exotic packages on your system.
          </Card>
          <Card title="Immutable." icon={<FaLock />}>
            Checks and hashes ensure that your image is built the same way,
            every time, no matter whose computer it is on.
          </Card>
          <Card title="Shareable." icon={<FaCloudUploadAlt />}>
            Want to make your images accessible to others? Just upload them to a
            GitHub repository, and anyone using your image will experience
            consistent builds.
          </Card>
        </Flex>
      </Center>
      <Center marginTop={"50"}>
        <Box>
          <Heading textAlign={"center"} m={5} fontSize={50}>
            Scaffold. Build. Compile.
          </Heading>
          <Flex justify={"center"}>
            <iframe
              src="https://asciinema.org/a/13eIq7Z7dwcalitbu4JYHUTGw/iframe"
              height={440}
              style={{ flexGrow: 1 }}
            ></iframe>
          </Flex>
        </Box>
      </Center>
      <Center marginTop="50">
        <Box>
          <Heading textAlign={"center"} m={5} fontSize={50}>
            Simple Configuration.
          </Heading>
          <Center>
            <Text m={5} maxW="500" fontSize={20}>
              TeXbld makes it easy to hack on your own images and projects using
              the intuitive TOML configuration format. Check out{" "}
              <Link href="/featured">some examples.</Link>
            </Text>
          </Center>
          <Flex
            justifyContent={"center"}
            wrap={"wrap"}
            gap={5}
            verticalAlign={"center"}
          >
            <Box>
              <Image
                src="/images/imagetoml.svg"
                alt="texbld image.toml"
                width={400}
              />
            </Box>
            <Box>
              <Image
                src="/images/texbldtoml.svg"
                alt="texbld project toml"
                width={600}
              />
            </Box>
          </Flex>
        </Box>
      </Center>
    </Box>
  );
}
