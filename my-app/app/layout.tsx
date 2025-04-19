import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Inter } from "next/font/google";
import PlausibleProvider from "next-plausible";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const inter = Inter({ subsets: ["latin"] });

// Define site URL - replace with your actual domain in production
const siteUrl = "https://ugz.ai";

// Define metadata
export const metadata: Metadata = {
  title: "UGZ - AI-Powered UGC Videos",
  description:
    "Creating UGC videos that are 98% cheaper, 10,000x faster, and speak 32 languages - without a single creator.",
  metadataBase: new URL(siteUrl),
  openGraph: {
    title: "UGZ - AI-Powered UGC Videos",
    description:
      "Creating UGC videos that are 98% cheaper, 10,000x faster, and speak 32 languages - without a single creator.",
    url: siteUrl,
    siteName: "UGZ",
    images: [
      {
        url: "/meta.png",
        width: 1200,
        height: 630,
        alt: "UGZ AI-Powered UGC Videos",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "UGZ - AI-Powered UGC Videos",
    description:
      "Creating UGC videos that are 98% cheaper, 10,000x faster, and speak 32 languages - without a single creator.",
    images: ["/meta.jpeg"],
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <PlausibleProvider domain="ugz.ai">
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased ${inter.className}`}
        >
          {children}
        </body>
      </PlausibleProvider>
    </html>
  );
}
