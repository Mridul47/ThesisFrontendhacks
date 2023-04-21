import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

export default NextAuth({
    // Configure one or more authentication providers
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        }),
        // ...add more providers here
    ],
    //calbacks chai aync function ho jun bata hamile kk huney chiz haruko control garna sakcham
    callbacks: {
        async session({ session, token }) {
            session.user.tag = session.user.name
                .split(" ") //split it where there is a space
                .join("") //joi  those things without space
                .toLocaleLowerCase(); //convert whole username to lowercase

            session.user.uid = token.sub;
            return session;
        },
    },
});

