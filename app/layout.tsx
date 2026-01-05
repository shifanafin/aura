import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
// @ts-ignore: allow side-effect CSS import in Next.js app directory (no type declarations for .css)
import "./globals.css";



export const metadata: Metadata = {
  title: "Aura",
  description: "Ecommerce Application using AURA",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
       
      >
        {children}
      </body>
    </html>
  );
}
