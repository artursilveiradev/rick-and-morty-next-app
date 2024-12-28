import type { Metadata } from "next";
import { Bungee, Orbitron, Roboto, VT323 } from "next/font/google";
import "./globals.css";

const bungee = Bungee({
  variable: "--font-bungee",
  weight: "400",
});

const orbitron = Orbitron({
  variable: "--font-orbitron",
  weight: ["400", "500", "700"],
});

const roboto = Roboto({
  variable: "--font-roboto",
  weight: ["400", "500", "700"],
});

const vt323 = VT323({
  variable: "--font-vt323",
  weight: "400",
});

export const metadata: Metadata = {
  title: "Rick and Morty Next.js App",
  description: "A Next.js app that uses the Rick and Morty GraphQL API",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${bungee.variable} ${orbitron.variable} ${roboto.variable} ${vt323.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
