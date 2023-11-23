import type { AuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

import { registration } from "@/shared/api/registration";
import { signIn } from "@/shared/api/signIn";

export const authConfig: AuthOptions = {
  providers: [
    CredentialsProvider({
      credentials: {
        email: { label: "email", type: "email", required: true },
        password: {
          label: "password",
          type: "password",
          required: true,
        },
        username: { label: "Username", type: "text" },
      },
      async authorize(req, res) {
        if (!res.body) return null;
        const credentials = JSON.parse(res.body.data);
        if (!credentials?.email || !credentials.password) return null;
        if (credentials.username) {
          return registration(credentials);
        }

        return signIn(credentials);
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      return { ...token, ...user };
    },
    async session({ session, token, user }) {
      session.user = token as any;
      return session;
    },
  },
  pages: {
    signIn: "/",
    signOut: "/",
    error: "/",
    verifyRequest: "/",
    newUser: "/",
  },
};
