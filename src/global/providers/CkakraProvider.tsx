"use client";
import { ChakraProvider as Chakra } from "@chakra-ui/react";
import { ReactNode } from "react";

import { getTheme } from "../styles/theme";

interface ChakraProviderProps {
  children: ReactNode;
  colorMode: "light" | "dark";
}
export default function ChakraProvider({
  children,
  colorMode,
}: ChakraProviderProps) {
  const theme = getTheme(colorMode);
  return <Chakra theme={theme}>{children}</Chakra>;
}
