import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { AuthOptions } from "next-auth";
import { prisma } from "@/lib/prisma";
import { v4 as uuidv4 } from "uuid";

declare module "next-auth" {
  interface Session {
    user: {
      id: string;
      accessToken: string;
      email?: string;
      name?: string;
    };
  }
}

const authOptions: AuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
  ],
  callbacks: {
    async redirect({ url }: { url: string }): Promise<string> {
      // If the url is the callback URL, redirect to transactions
      if (url.includes("/api/auth/callback/google")) {
        return `${process.env.NEXTAUTH_URL}/transactions/browse`;
      }
      // Handle other redirects
      if (url.startsWith("/")) {
        return `${process.env.NEXTAUTH_URL}${url}`;
      }
      // Default case
      return url.startsWith(process.env.NEXTAUTH_URL!)
        ? url
        : process.env.NEXTAUTH_URL!;
    },
    async signIn({ user, account }) {
      if (account?.provider === "google" && user.email && user.name) {
        try {
          // Check if user exists in database
          let dbUser = await prisma.users.findUnique({
            where: { email: user.email },
          });

          if (!dbUser) {
            // Create new user in database
            dbUser = await prisma.users.create({
              data: {
                id: uuidv4(),
                email: user.email,
                name: user.name,
                external_id: user.id, // Google user ID
              },
            });

            // Assign default "user" role to new users
            const userRole = await prisma.roles.findUnique({
              where: { name: 'user' }
            });

            if (userRole) {
              await prisma.user_roles_mapping.create({
                data: {
                  id: uuidv4(),
                  user_id: dbUser.id,
                  role_id: userRole.id,
                  assigned_by: dbUser.id, // Self-assigned for new users
                  is_active: true,
                },
              });
            }
          }

          // Add database user ID to the user object
          user.id = dbUser.id;
          return true;
        } catch (error) {
          console.error("Error during sign in:", error);
          return false;
        }
      }
      return true;
    },
    async jwt({ token, user, account }) {
      // Persist the OAuth access_token to the token right after signin
      if (account && user) {
        token.accessToken = account.access_token;
        token.sub = user.id;
        token.email = user.email;
        token.name = user.name;
      }
      return token;
    },
    async session({ session, token }) {
      // Send properties to the client, like an access_token from a provider
      if (session.user) {
        session.user.id = token.sub as string;
        session.user.accessToken = token.accessToken as string;
        session.user.email = token.email as string;
        session.user.name = token.name as string;
      }
      return session;
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
