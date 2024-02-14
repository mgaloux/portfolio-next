import type { Metadata } from "next";
import "./styles/globals.css";
import { poppins } from "./styles/fonts/fonts";

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
      <body className={poppins.className}>{children}</body>
    </html>
  );
}
