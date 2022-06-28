import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import { IconButton, useColorMode } from "@chakra-ui/react";
import React from "react";

export default function Toggle() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <IconButton
      onClick={toggleColorMode}
      icon={colorMode == "dark" ? <MoonIcon /> : <SunIcon />}
      aria-label="Toggle Color Mode"
    />
  );
}
