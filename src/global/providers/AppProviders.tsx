import { ReactNode } from "react";

import ChakraProvider from "./CkakraProvider";

interface AppRpovidersProps {
  children: ReactNode;
  cookies: "light" | "dark";
}
function AppRpoviders({ children, cookies }: AppRpovidersProps) {
  return <ChakraProvider colorMode={cookies}>{children}</ChakraProvider>;
}

export default AppRpoviders;
