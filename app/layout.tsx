import type { Metadata } from "next";
import { Inter, Nunito } from "next/font/google";
import "./globals.css";
import Footer from "@/app/components/Footer";
import Navbar from "./components/NavBar";

// const inter = Inter({ subsets: ["latin"] });
const nunito = Nunito({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ashva",
  description: "Official Profile of Ashva",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className='scroll-smooth' lang="en" >
      <body className={nunito.className}>
        <Navbar />
        {children}
        <Footer/>
      </body>
    </html>
  );
}
