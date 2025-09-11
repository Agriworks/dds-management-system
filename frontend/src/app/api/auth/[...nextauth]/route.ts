import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { AuthOptions } from "next-auth";

const authOptions: AuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
  ],
  callbacks: {
    async redirect({ url }: { url: string }): Promise<string> {
      // If the url is the callback URL, redirect to dashboard
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
    async jwt({ token, user, account }) {
      // Persist the OAuth access_token to the token right after signin
      if (account && user) {
        token.accessToken = account.access_token;
        token.id = user.id;
      }
      return token;
    },
    async session({ session, token }) {
      // Send properties to the client, like an access_token from a provider
      if (session.user) {
        console.log("Session user:", session.user);
        console.log("Token:", token);
        // session.user.id = token.id as string
        // session.accessToken = token.accessToken as string
      }
      return session;
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
