import type { Metadata } from "next";
import {Inter} from 'next/font/google'
import { Toaster } from "sonner";
import './globals.css';
import { ErrorBoundary } from "react-error-boundary";
import { ReactQueryProvider } from "@/provider/ReactQueryProvider";


const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: "Aura",
  description: "Ecommerce Application using AURA",
  openGraph: {},
  metadataBase: new URL("https://shifana.vercel.app/"),

};

export type layoutRoutes = "home" | "skills" | "portfolio";
export type paramsType = {
  home: {};
  skills: {};
  portfolio: {};
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ReactQueryProvider>
          <ErrorBoundary fallback={<div>Something went wrong!</div>}>
            {children}
            <Toaster position="bottom-right" />
          </ErrorBoundary>
        </ReactQueryProvider>
      </body>
    </html>
  );              
}
