import NextAuth from "next-auth"
import type { NextAuthConfig } from 'next-auth';
import GoogleProvider from "next-auth/providers/google";


const authConfig = {
  providers: [
     GoogleProvider({
    clientId: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET
  })
    ], 
} satisfies NextAuthConfig;

export const { handlers, auth, signIn, signOut } = NextAuth(authConfig);