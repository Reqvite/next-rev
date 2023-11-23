import { ReactNode } from "react";

import ChakraProvider from "./CkakraProvider";
import NextAuthprovider from "./NextAuthprovider";

interface AppRpovidersProps {
  children: ReactNode;
  cookies: "light" | "dark";
}
function AppRpoviders({ children, cookies }: AppRpovidersProps) {
  return (
    <ChakraProvider colorMode={cookies}>
      <NextAuthprovider>{children} </NextAuthprovider>
    </ChakraProvider>
  );
}

export default AppRpoviders;
