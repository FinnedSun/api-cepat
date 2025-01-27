import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Speed Search",
  description: "A high-performance API built with Hono, Next.js and Cloudflare. Type a query below and get your results in miliseconds.",
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/apple-touch.png", type: "image/png" },
      { url: "/icon.png", type: "image/png" },

    ],
    shortcut: ["/favicon.ico"],
    apple: [{ url: "/apple-touch.png", type: "image/png" }],

  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
