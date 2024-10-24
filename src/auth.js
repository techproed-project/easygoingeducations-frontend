import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { login } from "./services/auth-service";

const config = {
	providers: [
		Credentials({
			authorize: async (credentials) => {
				const res = await login(credentials);
				const data = await res.json();

                console.log(data)

				if (!res.ok) return null;

				const payload = {
					user: { ...data },
					accessToken: data.token,
				};
				delete payload.user.token;

				return payload;
			},
		}),
	],
	callbacks: {},
	pages: {
		signIn: "/login",
	},
};

export const { handlers, signIn, signOut, auth } = NextAuth(config);
