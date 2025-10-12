import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { AuthOptions } from "next-auth";

// Extend NextAuth types
declare module "next-auth" {
  interface Session {
    user: {
      id: string;
      email?: string;
      name?: string;
      image?: string;
      accessToken: string;
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
      // If the url is the callback URL, redirect to transactions browse
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
          const payload = {
            first_name: user.name?.split(" ")[0] || null,
            last_name: user.name?.split(" ").slice(1).join(" ") || null,
            email: user.email || null,
            phone: null,
            external_id: user.id,
            access_token: account.access_token,
          };

          const response = await fetch(
            `${process.env.NEXTAUTH_URL}/api/users/oauth/sync`,
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${account.access_token}`,
              },
              body: JSON.stringify(payload),
            },
          );

          if (!response.ok) {
            console.error(
              "Failed to sync user during sign-in:",
              response.statusText,
            );
            return false;
          }

          const syncedUser = await response.json();
          user.id = syncedUser.id;
          console.log(
            "User synced successfully:",
            user.email,
            "with ID:",
            user.id,
          );
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
        // Preserve Google OAuth user properties
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
