import type { Metadata } from "next";
import "./styles/globals.css";
import { poppins } from "./styles/fonts/fonts";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  title: "Martin Portfolio",
  description: "Martin Galoux Full Stack Developer Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Navbar/>
        <main>
          {children}
          <Footer/>
        </main>
      </body>
    </html>
  );
}
