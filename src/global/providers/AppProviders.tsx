"use client";
import { SessionProvider } from "next-auth/react";
import { ReactNode } from "react";

import ChakraProvider from "./CkakraProvider";

interface AppRpovidersProps {
  children: ReactNode;
  cookies: "light" | "dark";
}
function AppRpoviders({ children, cookies }: AppRpovidersProps) {
  return (
    <ChakraProvider colorMode={cookies}>
      <SessionProvider>{children} </SessionProvider>
    </ChakraProvider>
  );
}

export default AppRpoviders;
