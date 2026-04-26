import { type NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import YandexProvider from "next-auth/providers/yandex";
import VKProvider from "next-auth/providers/vk";

export const authOptions: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID ?? "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET ?? "",
    }),
    YandexProvider({
      clientId: process.env.YANDEX_CLIENT_ID ?? "",
      clientSecret: process.env.YANDEX_CLIENT_SECRET ?? "",
    }),
    VKProvider({
      clientId: process.env.VK_CLIENT_ID ?? "",
      clientSecret: process.env.VK_CLIENT_SECRET ?? "",
    }),
  ],
  pages: {
    signIn: "/login",
  },
};
