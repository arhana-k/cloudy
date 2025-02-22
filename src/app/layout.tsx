import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "./components/footer";
import Header from "./components/header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "cloudy",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (

    <html lang="en">
      <body className={` flex flex-col min-h-screen {inter.className} bg-zinc-900 text-zinc-100`}>
        <Header/>
        {children}
        <Footer/>
        </body>
    </html>
   
  );
}
