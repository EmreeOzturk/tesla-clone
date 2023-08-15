import Header from "@/components/layout/header";
import "@/styles/globals.css";
import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import { NextAuthProvider } from "@/context/NextAuthContext";
const nunito = Nunito({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Tesle",
  description: "Tesla Clone with Next.js",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={nunito.className}>
        <Header />
        <NextAuthProvider>{children}</NextAuthProvider>
      </body>
    </html>
  );
}
