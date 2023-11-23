"use client";
import { SessionProvider } from "next-auth/react";
import { ReactNode } from "react";

interface NextAuthproviderProps {
  children: ReactNode;
}
function NextAuthprovider({ children }: NextAuthproviderProps) {
  return <SessionProvider>{children} </SessionProvider>;
}

export default NextAuthprovider;
