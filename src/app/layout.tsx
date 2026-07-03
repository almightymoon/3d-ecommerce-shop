import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "NovaMart — Immersive 3D E-Commerce",
  description: "Shop in full 3D. Interactive WebGL product viewers powered by React Three Fiber.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} min-h-screen flex flex-col`}>
        <Navbar />
        <div className="flex-1 pt-[72px]">{children}</div>
        <Footer className="shrink-0" />
      </body>
    </html>
  );
}
